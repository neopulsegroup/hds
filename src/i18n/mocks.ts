/* Textos das telas ilustrativas (mocks de dashboard/telemóvel) em PT | ES | EN.
   Os números e a estrutura ficam em lib/mock-data.ts; aqui só o texto. */

import type { Locale } from "@/lib/i18n";

export type SidebarId =
  | "dashboard"
  | "saude-mental"
  | "planos"
  | "cursos"
  | "acoes"
  | "calendario"
  | "formandos"
  | "questionarios";

export type TwoLine = readonly [string, string];
export type TitleWhen = { title: string; when: string };
export type TitleDeadline = { title: string; deadline: string };

export type MocksCopy = {
  illustrative: string;
  live: string;
  sidebar: Record<SidebarId, string>;
  // KpiRow
  igrp: string;
  imo: string;
  priorities: string;
  attention: string;
  good: string;
  // RiskHeatmap
  heatTitle: string;
  hiddenNote: string;
  areas: readonly string[];
  riskRows: readonly string[];
  legendLow: string;
  legendMedium: string;
  legendHigh: string;
  legendCritical: string;
  belowMin: string;
  // Questionnaire
  stepPre: string;
  stepMid: string;
  answers: readonly string[];
  questions: readonly string[];
  noRegister: string;
  // Breath
  quickPause: string;
  inhale: string;
  exhale: string;
  breatheDeep: string;
  breathProgress: string;
  breathPace: string;
  // QR
  qrSheet: string;
  qrArea: string;
  qrScan: string;
  // Check-in
  presenceLogged: string;
  checkinQr: string;
  // Criticality + Action plan
  criticalityTitle: string;
  actionPlanTitle: string;
  actionPlan: readonly TitleDeadline[];
  // Cycle
  cycleSteps: readonly string[];
  // Calendar
  weekdays: readonly string[];
  calLeadership: string;
  calTime: string;
  // Timeline
  timeline: readonly TitleWhen[];
  // Evolution
  evoManager: string;
  evoTitle: string;
  evoTabs: readonly string[];
  evoAreaItems: readonly string[];
  evoFuncItems: readonly string[];
  evoGroupItems: readonly string[];
  evoCycle1: string;
  evoLow: string;
  evoMedium: string;
  evoHigh: string;
  evoCycle2: string;
  // Risk matrix
  matrixManager: string;
  matrixTitle: string;
  probability: string;
  impactAxis: string;
  impactLevels: readonly string[];
  probabilityLevels: readonly string[];
  matrixFactors: readonly string[];
  // Dashboards nas visuais
  diagTab: string;
  diagCrumb: string;
  diagTitle: string;
  calTab: string;
  calCrumb: string;
  calTitle: string;
  // Handnotes das visuais
  companySees: readonly string[];
  linkQr: TwoLine;
  sameEnv: TwoLine;
};

export const MOCKS: Record<Locale, MocksCopy> = {
  pt: {
    illustrative: "DADOS ILUSTRATIVOS",
    live: "AO VIVO",
    sidebar: {
      dashboard: "Dashboard",
      "saude-mental": "Saúde Mental",
      planos: "Planos de Formação",
      cursos: "Cursos",
      acoes: "Ações de Formação",
      calendario: "Calendário",
      formandos: "Formandos",
      questionarios: "Questionários",
    },
    igrp: "IGRP · RISCO GERAL",
    imo: "IMO · MATURIDADE",
    priorities: "PRIORIDADES",
    attention: "ATENÇÃO",
    good: "BOA",
    heatTitle: "Mapa de risco · dimensão × área",
    hiddenNote: "ÁREA COM MENOS DE 5 RESPOSTAS: OCULTA",
    areas: ["PRODUÇÃO", "ADMIN.", "LOGÍSTICA", "MANUT.", "COMERCIAL"],
    riskRows: [
      "Exigências quantitativas",
      "Ritmo de trabalho",
      "Qualidade da liderança",
      "Reconhecimento",
      "Clareza de papel",
      "Apoio dos colegas",
    ],
    legendLow: "Risco baixo",
    legendMedium: "Médio",
    legendHigh: "Alto",
    legendCritical: "Crítico",
    belowMin: "Abaixo do mínimo de anonimato",
    stepPre: "ETAPA",
    stepMid: "DE",
    answers: ["Nunca", "Raramente", "Às vezes", "Frequentemente", "Sempre"],
    questions: [
      "Com que frequência você tem tempo para concluir suas tarefas?",
      "Você recebe apoio da sua liderança quando precisa?",
      "Você consegue se desligar do trabalho no seu tempo livre?",
    ],
    noRegister: "SEM CADASTRO · RESPOSTA ANÔNIMA",
    quickPause: "PAUSA RÁPIDA",
    inhale: "INSPIRE",
    exhale: "SOLTE",
    breatheDeep: "Respire fundo.",
    breathProgress: "Você já respondeu 5 de 11 etapas.",
    breathPace: "Siga no seu ritmo.",
    qrSheet: "FOLHA DE QR · POR ÁREA",
    qrArea: "Produção",
    qrScan: "Escaneie para responder",
    presenceLogged: "Presença registrada",
    checkinQr: "Check-in por QR · Sala 2",
    criticalityTitle: "MATRIZ DE CRITICIDADE · PROBABILIDADE × IMPACTO",
    actionPlanTitle: "PLANO DE AÇÃO · COM PRAZO",
    actionPlan: [
      { title: "Estresse · Burnout", deadline: "prazo: 0 a 30 dias" },
      { title: "Exigências emocionais", deadline: "prazo: até 90 dias" },
      { title: "Ritmo de trabalho", deadline: "prazo: até 6 meses" },
    ],
    cycleSteps: ["Ouvir", "Analisar", "Planejar", "Agir", "Reavaliar"],
    weekdays: ["SEG", "TER", "QUA", "QUI", "SEX", "SÁB", "DOM"],
    calLeadership: "Liderança e escuta",
    calTime: "Gestão do tempo",
    timeline: [
      { title: "Diagnóstico", when: "mês 0" },
      { title: "Plano", when: "mês 1" },
      { title: "Formação", when: "meses 1 a 5" },
      { title: "Reavaliação", when: "mês 6" },
    ],
    evoManager: "Gerenciador de risco psicossocial",
    evoTitle: "Evolução entre ciclos",
    evoTabs: ["Por área", "Por função", "Por grupo"],
    evoAreaItems: ["Produção", "Logística", "Comercial", "Admin."],
    evoFuncItems: ["Operadores", "Supervisores", "Analistas", "Gestores"],
    evoGroupItems: ["Turno A", "Turno B", "Turno C", "Escritório"],
    evoCycle1: "Ciclo 1",
    evoLow: "Baixo",
    evoMedium: "Médio",
    evoHigh: "Alto",
    evoCycle2: "CICLO 2 · DADOS ILUSTRATIVOS",
    matrixManager: "Matriz de risco psicossocial",
    matrixTitle: "Probabilidade × impacto",
    probability: "PROBABILIDADE",
    impactAxis: "IMPACTO",
    impactLevels: ["Baixo", "Médio", "Alto"],
    probabilityLevels: ["Alta", "Média", "Baixa"],
    matrixFactors: [
      "Ritmo de trabalho",
      "Exigências quantitativas",
      "Qualidade da liderança",
      "Reconhecimento",
      "Clareza de papel",
      "Apoio dos colegas",
    ],
    diagTab: "hds · diagnóstico",
    diagCrumb: "SAÚDE MENTAL / EMPRESA EXEMPLO / DIAGNÓSTICO",
    diagTitle: "Diagnóstico",
    calTab: "hds · calendário",
    calCrumb: "GESTÃO DA FORMAÇÃO / CALENDÁRIO",
    calTitle: "Novembro",
    companySees: ["a empresa vê..."],
    linkQr: ["link e QR por área,", "nunca por nome"],
    sameEnv: ["diagnóstico e formação", "no mesmo ambiente"],
  },

  es: {
    illustrative: "DATOS ILUSTRATIVOS",
    live: "EN VIVO",
    sidebar: {
      dashboard: "Dashboard",
      "saude-mental": "Salud Mental",
      planos: "Planes de Formación",
      cursos: "Cursos",
      acoes: "Acciones de Formación",
      calendario: "Calendario",
      formandos: "Participantes",
      questionarios: "Cuestionarios",
    },
    igrp: "IGRP · RIESGO GENERAL",
    imo: "IMO · MADUREZ",
    priorities: "PRIORIDADES",
    attention: "ATENCIÓN",
    good: "BUENA",
    heatTitle: "Mapa de riesgo · dimensión × área",
    hiddenNote: "ÁREA CON MENOS DE 5 RESPUESTAS: OCULTA",
    areas: ["PRODUCCIÓN", "ADMIN.", "LOGÍSTICA", "MANTEN.", "COMERCIAL"],
    riskRows: [
      "Exigencias cuantitativas",
      "Ritmo de trabajo",
      "Calidad del liderazgo",
      "Reconocimiento",
      "Claridad de rol",
      "Apoyo de los colegas",
    ],
    legendLow: "Riesgo bajo",
    legendMedium: "Medio",
    legendHigh: "Alto",
    legendCritical: "Crítico",
    belowMin: "Por debajo del mínimo de anonimato",
    stepPre: "PASO",
    stepMid: "DE",
    answers: ["Nunca", "Raramente", "A veces", "Frecuentemente", "Siempre"],
    questions: [
      "¿Con qué frecuencia tienes tiempo para terminar tus tareas?",
      "¿Recibes apoyo de tu liderazgo cuando lo necesitas?",
      "¿Logras desconectar del trabajo en tu tiempo libre?",
    ],
    noRegister: "SIN REGISTRO · RESPUESTA ANÓNIMA",
    quickPause: "PAUSA RÁPIDA",
    inhale: "INSPIRA",
    exhale: "SUELTA",
    breatheDeep: "Respira hondo.",
    breathProgress: "Ya respondiste 5 de 11 pasos.",
    breathPace: "Sigue a tu ritmo.",
    qrSheet: "HOJA DE QR · POR ÁREA",
    qrArea: "Producción",
    qrScan: "Escanea para responder",
    presenceLogged: "Asistencia registrada",
    checkinQr: "Check-in por QR · Sala 2",
    criticalityTitle: "MATRIZ DE CRITICIDAD · PROBABILIDAD × IMPACTO",
    actionPlanTitle: "PLAN DE ACCIÓN · CON PLAZO",
    actionPlan: [
      { title: "Estrés · Burnout", deadline: "plazo: 0 a 30 días" },
      { title: "Exigencias emocionales", deadline: "plazo: hasta 90 días" },
      { title: "Ritmo de trabajo", deadline: "plazo: hasta 6 meses" },
    ],
    cycleSteps: ["Escuchar", "Analizar", "Planificar", "Actuar", "Reevaluar"],
    weekdays: ["LUN", "MAR", "MIÉ", "JUE", "VIE", "SÁB", "DOM"],
    calLeadership: "Liderazgo y escucha",
    calTime: "Gestión del tiempo",
    timeline: [
      { title: "Diagnóstico", when: "mes 0" },
      { title: "Plan", when: "mes 1" },
      { title: "Formación", when: "meses 1 a 5" },
      { title: "Reevaluación", when: "mes 6" },
    ],
    evoManager: "Gestor de riesgo psicosocial",
    evoTitle: "Evolución entre ciclos",
    evoTabs: ["Por área", "Por función", "Por grupo"],
    evoAreaItems: ["Producción", "Logística", "Comercial", "Admin."],
    evoFuncItems: ["Operadores", "Supervisores", "Analistas", "Gestores"],
    evoGroupItems: ["Turno A", "Turno B", "Turno C", "Oficina"],
    evoCycle1: "Ciclo 1",
    evoLow: "Bajo",
    evoMedium: "Medio",
    evoHigh: "Alto",
    evoCycle2: "CICLO 2 · DATOS ILUSTRATIVOS",
    matrixManager: "Matriz de riesgo psicosocial",
    matrixTitle: "Probabilidad × impacto",
    probability: "PROBABILIDAD",
    impactAxis: "IMPACTO",
    impactLevels: ["Bajo", "Medio", "Alto"],
    probabilityLevels: ["Alta", "Media", "Baja"],
    matrixFactors: [
      "Ritmo de trabajo",
      "Exigencias cuantitativas",
      "Calidad del liderazgo",
      "Reconocimiento",
      "Claridad de rol",
      "Apoyo de los colegas",
    ],
    diagTab: "hds · diagnóstico",
    diagCrumb: "SALUD MENTAL / EMPRESA EJEMPLO / DIAGNÓSTICO",
    diagTitle: "Diagnóstico",
    calTab: "hds · calendario",
    calCrumb: "GESTIÓN DE LA FORMACIÓN / CALENDARIO",
    calTitle: "Noviembre",
    companySees: ["la empresa ve..."],
    linkQr: ["enlace y QR por área,", "nunca por nombre"],
    sameEnv: ["diagnóstico y formación", "en el mismo entorno"],
  },

  en: {
    illustrative: "ILLUSTRATIVE DATA",
    live: "LIVE",
    sidebar: {
      dashboard: "Dashboard",
      "saude-mental": "Mental Health",
      planos: "Training Plans",
      cursos: "Courses",
      acoes: "Training Sessions",
      calendario: "Calendar",
      formandos: "Trainees",
      questionarios: "Questionnaires",
    },
    igrp: "IGRP · OVERALL RISK",
    imo: "IMO · MATURITY",
    priorities: "PRIORITIES",
    attention: "ATTENTION",
    good: "GOOD",
    heatTitle: "Risk map · dimension × area",
    hiddenNote: "AREA WITH FEWER THAN 5 RESPONSES: HIDDEN",
    areas: ["PRODUCTION", "ADMIN", "LOGISTICS", "MAINT.", "SALES"],
    riskRows: [
      "Quantitative demands",
      "Work pace",
      "Leadership quality",
      "Recognition",
      "Role clarity",
      "Peer support",
    ],
    legendLow: "Low risk",
    legendMedium: "Medium",
    legendHigh: "High",
    legendCritical: "Critical",
    belowMin: "Below the anonymity minimum",
    stepPre: "STEP",
    stepMid: "OF",
    answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    questions: [
      "How often do you have time to finish your tasks?",
      "Do you get support from your leadership when you need it?",
      "Can you switch off from work in your free time?",
    ],
    noRegister: "NO SIGN-UP · ANONYMOUS ANSWER",
    quickPause: "QUICK PAUSE",
    inhale: "BREATHE IN",
    exhale: "BREATHE OUT",
    breatheDeep: "Take a deep breath.",
    breathProgress: "You've answered 5 of 11 steps.",
    breathPace: "Go at your own pace.",
    qrSheet: "QR SHEET · BY AREA",
    qrArea: "Production",
    qrScan: "Scan to answer",
    presenceLogged: "Attendance recorded",
    checkinQr: "QR check-in · Room 2",
    criticalityTitle: "CRITICALITY MATRIX · PROBABILITY × IMPACT",
    actionPlanTitle: "ACTION PLAN · WITH DEADLINE",
    actionPlan: [
      { title: "Stress · Burnout", deadline: "deadline: 0 to 30 days" },
      { title: "Emotional demands", deadline: "deadline: up to 90 days" },
      { title: "Work pace", deadline: "deadline: up to 6 months" },
    ],
    cycleSteps: ["Listen", "Analyse", "Plan", "Act", "Reassess"],
    weekdays: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"],
    calLeadership: "Leadership & listening",
    calTime: "Time management",
    timeline: [
      { title: "Assessment", when: "month 0" },
      { title: "Plan", when: "month 1" },
      { title: "Training", when: "months 1 to 5" },
      { title: "Reassessment", when: "month 6" },
    ],
    evoManager: "Psychosocial risk manager",
    evoTitle: "Change between cycles",
    evoTabs: ["By area", "By role", "By group"],
    evoAreaItems: ["Production", "Logistics", "Sales", "Admin"],
    evoFuncItems: ["Operators", "Supervisors", "Analysts", "Managers"],
    evoGroupItems: ["Shift A", "Shift B", "Shift C", "Office"],
    evoCycle1: "Cycle 1",
    evoLow: "Low",
    evoMedium: "Medium",
    evoHigh: "High",
    evoCycle2: "CYCLE 2 · ILLUSTRATIVE DATA",
    matrixManager: "Psychosocial risk matrix",
    matrixTitle: "Probability × impact",
    probability: "PROBABILITY",
    impactAxis: "IMPACT",
    impactLevels: ["Low", "Medium", "High"],
    probabilityLevels: ["High", "Medium", "Low"],
    matrixFactors: [
      "Work pace",
      "Quantitative demands",
      "Leadership quality",
      "Recognition",
      "Role clarity",
      "Peer support",
    ],
    diagTab: "hds · assessment",
    diagCrumb: "MENTAL HEALTH / SAMPLE COMPANY / ASSESSMENT",
    diagTitle: "Assessment",
    calTab: "hds · calendar",
    calCrumb: "TRAINING MANAGEMENT / CALENDAR",
    calTitle: "November",
    companySees: ["the company sees..."],
    linkQr: ["link and QR by area,", "never by name"],
    sameEnv: ["assessment and training", "in the same place"],
  },
};
