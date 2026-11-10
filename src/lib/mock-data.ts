/* Estrutura e números das telas ilustrativas (PDF "HDS Portfolio OFG").
   O texto correspondente vive em src/i18n/mocks.ts, alinhado por índice. */

import type { SidebarId } from "@/i18n/mocks";

export const AREA_COUNT = 5;
export const ROW_COUNT = 6;

/** Valores do heatmap por linha (dimensão) × coluna (área). Rótulos: mocks.riskRows / mocks.areas. */
export const RISK_VALUES: readonly (readonly number[])[] = [
  [68, 34, 71, 49, 62],
  [66, 28, 68, 44, 57],
  [41, 22, 82, 36, 47],
  [47, 31, 64, 28, 52],
  [24, 18, 46, 21, 33],
  [22, 19, 44, 26, 30],
];

export function heatClass(value: number): string {
  if (value >= 80) return "bg-danger";
  if (value >= 60) return "bg-alert";
  if (value >= 40) return "bg-warn";
  return "bg-ok";
}

/** Ordem dos itens da sidebar; rótulos em mocks.sidebar. */
export const SIDEBAR_IDS: readonly SidebarId[] = [
  "dashboard",
  "saude-mental",
  "planos",
  "cursos",
  "acoes",
  "calendario",
  "formandos",
  "questionarios",
];

export const TOTAL_STEPS = 11;

/** Metadados do questionário; textos em mocks.questions (alinhado por índice). */
export const QUESTION_META = [
  { step: 4, answer: 2 },
  { step: 5, answer: 3 },
  { step: 6, answer: 1 },
] as const;

/* Matriz de criticidade: linhas de cima (maior probabilidade) para baixo. */
export const CRITICALITY = [
  [0, 1, 2],
  [0, 2, 0],
  [3, 5, 0],
  [4, 8, 4],
] as const;

const LEVEL_CLASSES = [
  "bg-[#fef3d6] text-ink",
  "bg-[#fde7b0] text-ink",
  "bg-[#fad38c] text-ink",
  "bg-[#f4a2a2] text-ink",
  "bg-danger text-white",
  "bg-[#c62828] text-white",
] as const;

export function criticalityClass(row: number, col: number, rows: number): string {
  const level = col + (rows - 1 - row);
  return LEVEL_CLASSES[Math.min(level, LEVEL_CLASSES.length - 1)];
}

/** Tag/cor do plano de ação; title/deadline em mocks.actionPlan (alinhado por índice). */
export const ACTION_PLAN_META = [
  { tag: "P1", tone: "p1" },
  { tag: "P2", tone: "p2" },
  { tag: "P3", tone: "p3" },
] as const;

export const CYCLE_COUNT = 5;

export type CalendarEvent = { day: number; labelKey: "leadership" | "time"; tone: "brand" | "ok" };

export const CALENDAR_EVENTS: readonly CalendarEvent[] = [
  { day: 9, labelKey: "leadership", tone: "brand" },
  { day: 11, labelKey: "time", tone: "ok" },
  { day: 16, labelKey: "leadership", tone: "brand" },
  { day: 23, labelKey: "leadership", tone: "brand" },
  { day: 25, labelKey: "time", tone: "ok" },
];
