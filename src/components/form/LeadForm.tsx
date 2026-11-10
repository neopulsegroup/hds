"use client";

import { useId, useMemo, useState, type ReactNode } from "react";
import { useForm, type FieldErrors } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import {
  AREAS,
  COLABORADORES,
  INTERESSES,
  makeLeadSchema,
  type Lead,
  type LeadInput,
  type LeadMessages,
  type Origem,
} from "@/lib/lead-schema";
import { Field, controlClass } from "./LeadFormFields";
import { LeadFallback, LeadSuccess } from "./LeadFormResult";
import { useCopy } from "@/i18n/useCopy";

type Props = { origin: Origem; className?: string };

type Outcome = { kind: "form" } | { kind: "done"; lead: Lead } | { kind: "fallback"; lead: Lead };

type ApiResponse = { success: boolean; error?: string; data?: { fields?: Record<string, string> } };

const REQUIRED_TEXT = ["nome", "empresa", "telefone", "email"] as const;
const FIELD_NAMES = new Set<keyof LeadInput>([
  "nome",
  "empresa",
  "cargo",
  "telefone",
  "email",
  "colaboradores",
  "areas",
  "interesse",
  "lgpd",
]);

/** Mensagem-resumo na mesma ordem de prioridade da referência. */
function summaryMessage(errors: FieldErrors<LeadInput>, v: LeadMessages): string | null {
  const isMissing = REQUIRED_TEXT.some((name) => errors[name]?.type === "too_small") || Boolean(errors.colaboradores);
  if (isMissing) return v.required;
  if (errors.email) return v.email;
  if (errors.lgpd) return v.lgpd;
  const other = errors.telefone ?? errors.cargo ?? errors.areas ?? errors.interesse ?? errors.nome ?? errors.empresa;
  return other?.message ?? null;
}

async function postLead(lead: Lead): Promise<{ status: number; body: ApiResponse | null }> {
  const res = await fetch("/api/leads", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(lead),
  });
  const body = (await res.json().catch(() => null)) as ApiResponse | null;
  return { status: res.status, body };
}

const SWAP = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
  transition: { duration: 0.25, ease: "easeOut" },
} as const;

export function LeadForm({ origin, className }: Props) {
  const f = useCopy().form;
  const schema = useMemo(() => makeLeadSchema(f.validation), [f.validation]);
  const uid = useId();
  const id = (name: string) => `${uid}-${name}`;
  const [outcome, setOutcome] = useState<Outcome>({ kind: "form" });

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<LeadInput, unknown, Lead>({
    resolver: zodResolver(schema),
    defaultValues: {
      nome: "",
      empresa: "",
      cargo: "",
      telefone: "",
      email: "",
      colaboradores: "" as LeadInput["colaboradores"],
      areas: "",
      interesse: INTERESSES[0],
      lgpd: false,
      origem: origin,
      website: "",
    },
  });

  async function onSubmit(lead: Lead) {
    try {
      const { status, body } = await postLead(lead);
      if (body?.success) return setOutcome({ kind: "done", lead });
      const fields = body?.data?.fields;
      if (status === 400 && fields) {
        for (const [name, message] of Object.entries(fields)) {
          if (FIELD_NAMES.has(name as keyof LeadInput)) setError(name as keyof LeadInput, { type: "server", message });
        }
        return;
      }
      setOutcome({ kind: "fallback", lead });
    } catch {
      setOutcome({ kind: "fallback", lead });
    }
  }

  const err = (name: keyof LeadInput) => errors[name]?.message;
  const aria = (name: keyof LeadInput) => ({
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `${id(name)}-error` : undefined,
  });
  const summary = summaryMessage(errors, f.validation);

  return (
    <div className={`rounded-2xl border border-line bg-white p-6 shadow-float md:p-7 ${className ?? ""}`}>
      <AnimatePresence mode="wait" initial={false}>
        {outcome.kind === "done" ? (
          <motion.div key="done" {...SWAP}>
            <LeadSuccess lead={outcome.lead} />
          </motion.div>
        ) : outcome.kind === "fallback" ? (
          <motion.div key="fallback" {...SWAP}>
            <LeadFallback lead={outcome.lead} />
          </motion.div>
        ) : (
          <motion.div key="form" {...SWAP}>
            <h3 className="text-[22px] font-bold tracking-[-0.02em] text-ink">{f.title}</h3>
            <p className="mt-1.5 text-[14px] text-muted">{f.subtitle}</p>

            <form noValidate onSubmit={handleSubmit(onSubmit)} className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field id={id("nome")} label={f.nome} error={err("nome")}>
                <input id={id("nome")} autoComplete="name" className={controlClass(!!errors.nome)} {...aria("nome")} {...register("nome")} />
              </Field>
              <Field id={id("empresa")} label={f.empresa} error={err("empresa")}>
                <input id={id("empresa")} autoComplete="organization" className={controlClass(!!errors.empresa)} {...aria("empresa")} {...register("empresa")} />
              </Field>
              <Field id={id("cargo")} label={f.cargo} error={err("cargo")}>
                <input id={id("cargo")} autoComplete="organization-title" placeholder={f.cargoPh} className={controlClass(!!errors.cargo)} {...aria("cargo")} {...register("cargo")} />
              </Field>
              <Field id={id("telefone")} label={f.whatsapp} error={err("telefone")}>
                <input id={id("telefone")} type="tel" inputMode="tel" autoComplete="tel" placeholder={f.whatsappPh} className={controlClass(!!errors.telefone)} {...aria("telefone")} {...register("telefone")} />
              </Field>
              <Field id={id("email")} label={f.email} error={err("email")} full>
                <input id={id("email")} type="email" autoComplete="email" className={controlClass(!!errors.email)} {...aria("email")} {...register("email")} />
              </Field>

              <Field id={id("colaboradores")} label={f.colaboradores} error={err("colaboradores")}>
                <SelectShell>
                  <select id={id("colaboradores")} className={controlClass(!!errors.colaboradores, "appearance-none pr-9")} {...aria("colaboradores")} {...register("colaboradores")}>
                    <option value="">{f.select}</option>
                    {COLABORADORES.map((o, i) => <option key={o} value={o}>{f.colaboradoresOptions[i] ?? o}</option>)}
                  </select>
                </SelectShell>
              </Field>
              <Field id={id("areas")} label={f.areas} error={err("areas")}>
                <SelectShell>
                  <select id={id("areas")} className={controlClass(!!errors.areas, "appearance-none pr-9")} {...aria("areas")} {...register("areas")}>
                    <option value="">{f.select}</option>
                    {AREAS.map((o, i) => <option key={o} value={o}>{f.areasOptions[i] ?? o}</option>)}
                  </select>
                </SelectShell>
              </Field>
              <Field id={id("interesse")} label={f.interesse} error={err("interesse")} full>
                <SelectShell>
                  <select id={id("interesse")} className={controlClass(!!errors.interesse, "appearance-none pr-9")} {...aria("interesse")} {...register("interesse")}>
                    {INTERESSES.map((o, i) => <option key={o} value={o}>{f.interesseOptions[i] ?? o}</option>)}
                  </select>
                </SelectShell>
              </Field>

              <div className="sm:col-span-2">
                <label htmlFor={id("lgpd")} className="flex cursor-pointer items-start gap-2.5 text-[13.5px] leading-snug text-sub">
                  <input id={id("lgpd")} type="checkbox" className="mt-0.5 size-4 shrink-0 accent-[#0a4f96]" {...aria("lgpd")} {...register("lgpd")} />
                  {f.lgpd}
                </label>
                {errors.lgpd ? (
                  <p id={`${id("lgpd")}-error`} className="mt-1.5 text-[12.5px] text-danger">{errors.lgpd.message}</p>
                ) : null}
              </div>

              <div className="sr-only" aria-hidden="true">
                <label htmlFor={id("website")}>Website</label>
                <input id={id("website")} type="text" tabIndex={-1} autoComplete="off" {...register("website")} />
              </div>

              <p role="status" aria-live="polite" className="min-h-0 text-[13.5px] font-medium text-danger empty:hidden sm:col-span-2">
                {summary ?? ""}
              </p>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-full bg-brand py-3.5 text-[15px] font-semibold text-white transition hover:bg-brand-deep disabled:cursor-wait disabled:opacity-70 sm:col-span-2"
              >
                {isSubmitting ? f.submitting : f.submit}
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function SelectShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative">
      {children}
      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-muted" aria-hidden />
    </div>
  );
}
