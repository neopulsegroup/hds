import { createHash, randomBytes } from "node:crypto";
import { leadSchema, type Lead } from "@/lib/lead-schema";

type ApiResponse<T = undefined> = { success: boolean; data?: T; error?: string };

const MAX_BODY_CHARS = 10_000;
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_KEYS = 5_000;
const WEBHOOK_TIMEOUT_MS = 5_000;

// Chave do rate limit: hash do IP com sal aleatório por processo. O IP em claro nunca é guardado.
const RATE_SALT = randomBytes(16).toString("hex");
const hits = new Map<string, readonly number[]>();

function json<T>(body: ApiResponse<T>, status: number, headers?: HeadersInit): Response {
  return Response.json(body, { status, headers });
}

function clientKey(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  const ip = forwarded || request.headers.get("x-real-ip")?.trim() || "unknown";
  return createHash("sha256").update(RATE_SALT).update(ip).digest("hex");
}

function pruneExpired(now: number): void {
  for (const [key, stamps] of hits) {
    if (stamps.every((t) => now - t >= RATE_LIMIT_WINDOW_MS)) hits.delete(key);
  }
}

/** Regista o pedido e devolve true se ainda estiver dentro do limite. */
function allowRequest(key: string, now: number): boolean {
  if (hits.size > RATE_LIMIT_MAX_KEYS) pruneExpired(now);
  const recent = (hits.get(key) ?? []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  if (recent.length >= RATE_LIMIT_MAX) {
    hits.set(key, recent);
    return false;
  }
  hits.set(key, [...recent, now]);
  return true;
}

async function readJson(request: Request): Promise<{ ok: true; value: unknown } | { ok: false; status: number; error: string }> {
  let text: string;
  try {
    text = await request.text();
  } catch {
    return { ok: false, status: 400, error: "invalid_body" };
  }
  if (text.length > MAX_BODY_CHARS) return { ok: false, status: 413, error: "payload_too_large" };
  try {
    return { ok: true, value: JSON.parse(text) as unknown };
  } catch {
    return { ok: false, status: 400, error: "invalid_json" };
  }
}

function isHoneypotFilled(value: unknown): boolean {
  if (typeof value !== "object" || value === null) return false;
  const website = (value as Record<string, unknown>).website;
  return typeof website === "string" ? website.trim().length > 0 : website != null;
}

/**
 * O Google Apps Script responde sempre HTTP 200, mesmo quando rejeita o pedido.
 * Se a resposta for JSON com `ok: false`, conta como falha de entrega.
 */
async function isRejectedByWebhook(res: Response): Promise<boolean> {
  if (!res.headers.get("content-type")?.includes("application/json")) return false;
  try {
    const body: unknown = await res.json();
    return typeof body === "object" && body !== null && (body as { ok?: unknown }).ok === false;
  } catch {
    return false;
  }
}

async function deliver(url: string, lead: Lead): Promise<boolean> {
  const { website: _honeypot, ...payload } = lead;
  void _honeypot;
  const token = process.env.LEAD_WEBHOOK_TOKEN;
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), WEBHOOK_TIMEOUT_MS);
  try {
    // O Apps Script redirecciona (302) para a resposta; o fetch segue o redireccionamento.
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...payload, criadoEm: new Date().toISOString(), ...(token ? { token } : {}) }),
      signal: controller.signal,
      cache: "no-store",
      redirect: "follow",
    });
    if (!res.ok) {
      console.error(`[api/leads] webhook respondeu ${res.status}`);
      return false;
    }
    if (await isRejectedByWebhook(res)) {
      console.error("[api/leads] webhook rejeitou o pedido (ok: false)");
      return false;
    }
    return true;
  } catch (err: unknown) {
    const reason = err instanceof Error ? err.name : "unknown";
    console.error(`[api/leads] falha na entrega ao webhook (${reason})`);
    return false;
  } finally {
    clearTimeout(timer);
  }
}

export async function POST(request: Request): Promise<Response> {
  if (!allowRequest(clientKey(request), Date.now())) {
    return json({ success: false, error: "rate_limited" }, 429, {
      "Retry-After": String(RATE_LIMIT_WINDOW_MS / 1000),
    });
  }

  const body = await readJson(request);
  if (!body.ok) return json({ success: false, error: body.error }, body.status);

  // Bot: resposta igual à de sucesso, sem entregar nada.
  if (isHoneypotFilled(body.value)) return json({ success: true }, 200);

  const parsed = leadSchema.safeParse(body.value);
  if (!parsed.success) {
    const fields: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = String(issue.path[0] ?? "form");
      if (!(key in fields)) fields[key] = issue.message;
    }
    return json({ success: false, error: "validation_failed", data: { fields } }, 400);
  }

  const webhookUrl = process.env.LEAD_WEBHOOK_URL;
  if (!webhookUrl) return json({ success: false, error: "not_configured" }, 503);

  const delivered = await deliver(webhookUrl, parsed.data);
  return delivered
    ? json({ success: true }, 200)
    : json({ success: false, error: "delivery_failed" }, 502);
}
