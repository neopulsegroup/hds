/* Transcrito do anexo "Comparativo técnico | Mapa HDS" (planilha comparativa).
   Dados comparativos em PT | ES | EN. Os veredictos (sim/não/depende) são iguais
   em todos os idiomas; só mudam o critério e as células de texto. */

import type { Locale } from "@/lib/i18n";

export type Verdict = "yes" | "no" | "depends";
export type ComparisonCell = { verdict: Verdict } | { text: string };

export const TOOLS = ["OFG HDS", "COPSOQ", "HSE-IT", "Proart"] as const;

export type ComparisonRow = { criterion: string; cells: readonly [ComparisonCell, ComparisonCell, ComparisonCell, ComparisonCell] };

const Y: ComparisonCell = { verdict: "yes" };
const N: ComparisonCell = { verdict: "no" };
const D: ComparisonCell = { verdict: "depends" };
const t = (text: string): ComparisonCell => ({ text });

const COMPARISON_PT: readonly ComparisonRow[] = [
  { criterion: "Validação científica", cells: [Y, Y, Y, Y] },
  { criterion: "Indicado para NR-01", cells: [Y, Y, Y, Y] },
  { criterion: "Aplicação online", cells: [Y, D, D, D] },
  { criterion: "Relatórios automatizados para PGR/PCMSO", cells: [Y, N, N, N] },
  {
    criterion: "Base teórica",
    cells: [
      t("Modelo Demanda e Recurso no trabalho (DRT), Ergonomia da atividade e Psicologia do Trabalho"),
      t("Modelo Demanda e Recurso no trabalho (DRT)"),
      t("Modelo Demanda e Recurso no trabalho (DRT)"),
      t("Psicodinâmica do Trabalho e Psicopatologia do Trabalho"),
    ],
  },
  {
    criterion: "Estrutura da ferramenta",
    cells: [
      t("Escalas e Fatores associados"),
      t("Escalas e Fatores associados"),
      t("Escore geral e 7 pilares"),
      t("Escalas e Fatores associados"),
    ],
  },
  {
    criterion: "Formato dos resultados",
    cells: [
      t("Resultado geral + prevalência de fatores de risco/proteção + médias por escala e fator"),
      t("Apenas fator a fator"),
      t("Score geral e por pilar com níveis de estresse"),
      t("Resultado por escala"),
    ],
  },
  {
    criterion: "Versões adaptadas",
    cells: [t("Versão Completa e Versão para NR01"), t("Pode ser adaptado"), t("Pode ser adaptado"), t("Pode ser adaptado")],
  },
  {
    criterion: "Número de itens",
    cells: [t("148 (completa) / 97 (NR01)"), t("Até 141 (longa), 25-44 (curtas)"), t("35"), t("91")],
  },
  { criterion: "Suporte diário com especialistas", cells: [Y, N, N, N] },
  { criterion: "Sugestão de planos de ação", cells: [Y, N, N, N] },
  { criterion: "Dados organizados em painel técnico para gestão contínua", cells: [Y, N, N, N] },
  {
    criterion: "Validação automática e psicométrica das correlações entre respostas e fatores de risco",
    cells: [Y, N, N, N],
  },
  { criterion: "Classificação dos riscos e fatores avaliados com relatórios", cells: [Y, N, N, N] },
  { criterion: "Organização dos riscos em baixo, médio e alto através de relatórios", cells: [Y, N, Y, N] },
];

const COMPARISON_ES: readonly ComparisonRow[] = [
  { criterion: "Validación científica", cells: [Y, Y, Y, Y] },
  { criterion: "Indicado para NR-01", cells: [Y, Y, Y, Y] },
  { criterion: "Aplicación online", cells: [Y, D, D, D] },
  { criterion: "Informes automatizados para PGR/PCMSO", cells: [Y, N, N, N] },
  {
    criterion: "Base teórica",
    cells: [
      t("Modelo Demanda-Recurso en el trabajo (DRT), Ergonomía de la actividad y Psicología del Trabajo"),
      t("Modelo Demanda-Recurso en el trabajo (DRT)"),
      t("Modelo Demanda-Recurso en el trabajo (DRT)"),
      t("Psicodinámica del Trabajo y Psicopatología del Trabajo"),
    ],
  },
  {
    criterion: "Estructura de la herramienta",
    cells: [
      t("Escalas y factores asociados"),
      t("Escalas y factores asociados"),
      t("Puntuación general y 7 pilares"),
      t("Escalas y factores asociados"),
    ],
  },
  {
    criterion: "Formato de los resultados",
    cells: [
      t("Resultado general + prevalencia de factores de riesgo/protección + medias por escala y factor"),
      t("Solo factor por factor"),
      t("Puntuación general y por pilar con niveles de estrés"),
      t("Resultado por escala"),
    ],
  },
  {
    criterion: "Versiones adaptadas",
    cells: [t("Versión completa y versión para NR01"), t("Puede adaptarse"), t("Puede adaptarse"), t("Puede adaptarse")],
  },
  {
    criterion: "Número de ítems",
    cells: [t("148 (completa) / 97 (NR01)"), t("Hasta 141 (larga), 25-44 (cortas)"), t("35"), t("91")],
  },
  { criterion: "Soporte diario con especialistas", cells: [Y, N, N, N] },
  { criterion: "Sugerencia de planes de acción", cells: [Y, N, N, N] },
  { criterion: "Datos organizados en panel técnico para gestión continua", cells: [Y, N, N, N] },
  {
    criterion: "Validación automática y psicométrica de las correlaciones entre respuestas y factores de riesgo",
    cells: [Y, N, N, N],
  },
  { criterion: "Clasificación de los riesgos y factores evaluados con informes", cells: [Y, N, N, N] },
  { criterion: "Organización de los riesgos en bajo, medio y alto mediante informes", cells: [Y, N, Y, N] },
];

const COMPARISON_EN: readonly ComparisonRow[] = [
  { criterion: "Scientific validation", cells: [Y, Y, Y, Y] },
  { criterion: "Suitable for NR-01", cells: [Y, Y, Y, Y] },
  { criterion: "Online delivery", cells: [Y, D, D, D] },
  { criterion: "Automated reports for PGR/PCMSO", cells: [Y, N, N, N] },
  {
    criterion: "Theoretical basis",
    cells: [
      t("Job Demands-Resources model (JD-R), Activity Ergonomics and Work Psychology"),
      t("Job Demands-Resources model (JD-R)"),
      t("Job Demands-Resources model (JD-R)"),
      t("Work Psychodynamics and Work Psychopathology"),
    ],
  },
  {
    criterion: "Tool structure",
    cells: [
      t("Scales and associated factors"),
      t("Scales and associated factors"),
      t("Overall score and 7 pillars"),
      t("Scales and associated factors"),
    ],
  },
  {
    criterion: "Results format",
    cells: [
      t("Overall result + prevalence of risk/protective factors + averages by scale and factor"),
      t("Factor by factor only"),
      t("Overall and per-pillar score with stress levels"),
      t("Result by scale"),
    ],
  },
  {
    criterion: "Adapted versions",
    cells: [t("Full version and NR01 version"), t("Can be adapted"), t("Can be adapted"), t("Can be adapted")],
  },
  {
    criterion: "Number of items",
    cells: [t("148 (full) / 97 (NR01)"), t("Up to 141 (long), 25-44 (short)"), t("35"), t("91")],
  },
  { criterion: "Daily specialist support", cells: [Y, N, N, N] },
  { criterion: "Action-plan suggestions", cells: [Y, N, N, N] },
  { criterion: "Data organised in a technical panel for ongoing management", cells: [Y, N, N, N] },
  {
    criterion: "Automatic psychometric validation of correlations between responses and risk factors",
    cells: [Y, N, N, N],
  },
  { criterion: "Classification of assessed risks and factors with reports", cells: [Y, N, N, N] },
  { criterion: "Organisation of risks into low, medium and high via reports", cells: [Y, N, Y, N] },
];

export const COMPARISON_BY_LOCALE: Record<Locale, readonly ComparisonRow[]> = {
  pt: COMPARISON_PT,
  es: COMPARISON_ES,
  en: COMPARISON_EN,
};

/** Alias PT, usado para derivar SCORES (os veredictos são idênticos em todos os idiomas). */
export const COMPARISON = COMPARISON_PT;

const isVerdictRow = (row: ComparisonRow) => row.cells.every((cell) => "verdict" in cell);

/** Critérios sim/não atendidos por cada ferramenta (o "depende" não conta). */
export const SCORES = (() => {
  const verdictRows = COMPARISON.filter(isVerdictRow);
  return TOOLS.map((tool, i) => ({
    tool,
    met: verdictRows.filter((row) => {
      const cell = row.cells[i];
      return "verdict" in cell && cell.verdict === "yes";
    }).length,
    total: verdictRows.length,
  }));
})();

export const SCALES = [
  { name: "Demandas do trabalho", value: 72 },
  { name: "Organização e conteúdo das tarefas", value: 58 },
  { name: "Relações socioprofissionais", value: 41 },
  { name: "Condições de trabalho", value: 47 },
  { name: "Reconhecimento, autonomia e suporte", value: 63 },
  { name: "Fatores de proteção psicossocial", value: 34 },
] as const;
