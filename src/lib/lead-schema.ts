import { z } from "zod";

export const COLABORADORES = ["Até 50", "51 a 200", "201 a 500", "501 a 1.000", "Mais de 1.000"] as const;
export const AREAS = ["1 a 3", "4 a 10", "Mais de 10"] as const;
export const INTERESSES = [
  "Diagnóstico inicial sem custo",
  "Demonstração da plataforma",
  "Proposta comercial",
] as const;
export const ORIGENS = ["topo", "fecho"] as const;

export type Origem = (typeof ORIGENS)[number];

/** Mensagens de validação do formulário. Uma por locale, injetadas na fábrica do schema. */
export type LeadMessages = {
  /** Resumo quando faltam campos obrigatórios. */
  required: string;
  /** Formato de e-mail inválido. */
  email: string;
  /** LGPD não marcada. */
  lgpd: string;
  /** WhatsApp com dígitos insuficientes ou em excesso. */
  telefone: string;
  nomeReq: string;
  empresaReq: string;
  telefoneReq: string;
  emailReq: string;
  /** Limite de caracteres; contém o marcador {max}. */
  maxLen: string;
  colaboradoresReq: string;
  optionInvalid: string;
};

export const LEAD_MESSAGES_PT: LeadMessages = {
  required: "Preencha nome, empresa, WhatsApp, e-mail e número de colaboradores.",
  email: "Confira o e-mail: falta o domínio ou há um espaço.",
  lgpd: "Marque a autorização LGPD para enviarmos o contato.",
  telefone: "Confira o WhatsApp: informe DDD e número.",
  nomeReq: "Informe o seu nome.",
  empresaReq: "Informe a empresa.",
  telefoneReq: "Informe o WhatsApp.",
  emailReq: "Informe o e-mail.",
  maxLen: "Use no máximo {max} caracteres.",
  colaboradoresReq: "Selecione o número de colaboradores.",
  optionInvalid: "Selecione uma opção válida.",
};

/** PT por omissão. A rota de API usa esta instância; o formulário passa a do locale ativo. */
export const LEAD_MESSAGES = LEAD_MESSAGES_PT;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const MIN_PHONE_DIGITS = 10;
const MAX_PHONE_DIGITS = 15;

function maxMsg(template: string, max: number): string {
  return template.replace("{max}", String(max));
}

function phoneDigits(value: string): number {
  return value.replace(/\D/g, "").length;
}

export function makeLeadSchema(m: LeadMessages) {
  const requiredText = (max: number, message: string) =>
    z.string().trim().min(1, message).max(max, maxMsg(m.maxLen, max));

  return z.object({
    nome: requiredText(120, m.nomeReq),
    empresa: requiredText(160, m.empresaReq),
    cargo: z.string().trim().max(120, maxMsg(m.maxLen, 120)).default(""),
    telefone: requiredText(30, m.telefoneReq)
      .refine((v) => phoneDigits(v) >= MIN_PHONE_DIGITS, m.telefone)
      .refine((v) => phoneDigits(v) <= MAX_PHONE_DIGITS, m.telefone),
    email: requiredText(160, m.emailReq).regex(EMAIL_RE, m.email),
    colaboradores: z.enum(COLABORADORES, { error: m.colaboradoresReq }),
    areas: z.union([z.enum(AREAS), z.literal("")], { error: m.optionInvalid }).default(""),
    interesse: z.enum(INTERESSES, { error: m.optionInvalid }).default(INTERESSES[0]),
    lgpd: z.boolean().refine((v) => v === true, m.lgpd),
    origem: z.enum(ORIGENS),
    website: z.string().max(0).default(""),
  });
}

export const leadSchema = makeLeadSchema(LEAD_MESSAGES_PT);

export type LeadInput = z.input<typeof leadSchema>;
export type Lead = z.output<typeof leadSchema>;

export function leadSummary(lead: Lead): string {
  const cargo = lead.cargo || "-";
  const areas = lead.areas || "-";
  return [
    `Pedido NR-1: ${lead.nome}`,
    lead.empresa,
    cargo,
    lead.email,
    lead.telefone,
    `${lead.colaboradores} colab.`,
    `${areas} áreas`,
    lead.interesse,
  ].join(" | ");
}

export function firstName(nome: string): string {
  return nome.trim().split(/\s+/)[0] ?? "";
}
