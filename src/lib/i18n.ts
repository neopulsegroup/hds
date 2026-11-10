/* ===========================================================================
   i18n dos menus — PT (pt-BR) | ES | EN
   Estratégia: o menu de topo lidera com as secções que "vendem" (produto,
   diferenciais, entregáveis e oferta); o rodapé lista todas as secções.
   =========================================================================== */

export const LOCALES = ["pt", "es", "en"] as const;
export type Locale = (typeof LOCALES)[number];

export const LOCALE_LANG: Record<Locale, string> = {
  pt: "pt-BR",
  es: "es",
  en: "en",
};

export const LOCALE_SHORT: Record<Locale, string> = {
  pt: "PT",
  es: "ES",
  en: "EN",
};

export type NavId =
  | "gestao-continua"
  | "contexto"
  | "como-funciona"
  | "diagnostico"
  | "anonimato"
  | "execucao"
  | "entregaveis"
  | "criterio"
  | "proposta"
  | "para-quem"
  | "quem-somos"
  | "contato";

/* Menu de topo: os que vendem, em evidência, mas SEMPRE na ordem da página
   (de cima para baixo). Nenhuma âncora salta para trás. */
export const PRIMARY_NAV: readonly NavId[] = [
  "gestao-continua",
  "como-funciona",
  "diagnostico",
  "anonimato",
  "entregaveis",
  "proposta",
];

/* Rodapé: todas as secções, em ordem de leitura da página. */
export const FOOTER_NAV: readonly NavId[] = [
  "gestao-continua",
  "contexto",
  "como-funciona",
  "diagnostico",
  "anonimato",
  "execucao",
  "entregaveis",
  "criterio",
  "proposta",
  "para-quem",
  "quem-somos",
  "contato",
];

export const NAV_LABELS: Record<Locale, Record<NavId, string>> = {
  pt: {
    "gestao-continua": "Gestão contínua",
    contexto: "O que mudou",
    "como-funciona": "Como funciona",
    diagnostico: "Diagnóstico",
    anonimato: "Anonimato",
    execucao: "Execução",
    entregaveis: "Entregáveis",
    criterio: "Critério",
    proposta: "A proposta",
    "para-quem": "Para quem",
    "quem-somos": "Quem somos",
    contato: "Próximo passo",
  },
  es: {
    "gestao-continua": "Gestión continua",
    contexto: "Qué cambió",
    "como-funciona": "Cómo funciona",
    diagnostico: "Diagnóstico",
    anonimato: "Anonimato",
    execucao: "Ejecución",
    entregaveis: "Entregables",
    criterio: "Criterio",
    proposta: "La propuesta",
    "para-quem": "Para quién",
    "quem-somos": "Quiénes somos",
    contato: "Próximo paso",
  },
  en: {
    "gestao-continua": "Ongoing management",
    contexto: "What changed",
    "como-funciona": "How it works",
    diagnostico: "Assessment",
    anonimato: "Anonymity",
    execucao: "Rollout",
    entregaveis: "Deliverables",
    criterio: "Methodology",
    proposta: "The offer",
    "para-quem": "Who it's for",
    "quem-somos": "About us",
    contato: "Next step",
  },
};

export type UiStrings = {
  requestCta: string;
  whatsappCta: string;
  sections: string;
  openMenu: string;
  closeMenu: string;
  backToTop: string;
  footerNavHeading: string;
  footerContactHeading: string;
  footerTagline: string;
  footerSolution: string;
  illustrativeScreens: string;
  whatsappTip: string;
  language: string;
};

export const UI: Record<Locale, UiStrings> = {
  pt: {
    requestCta: "Pedir diagnóstico",
    whatsappCta: "Falar no WhatsApp",
    sections: "Secções",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
    backToTop: "OFG HDS, voltar ao topo",
    footerNavHeading: "Navegação",
    footerContactHeading: "Contato",
    footerTagline: "OFG HDS · Human Development Solutions. Gestão dos fatores de riscos psicossociais · NR-1.",
    footerSolution: "Uma solução Oporto Forte Group · © 2026",
    illustrativeScreens: "Telas com dados ilustrativos",
    whatsappTip: "Fale com a OFG",
    language: "Idioma",
  },
  es: {
    requestCta: "Solicitar diagnóstico",
    whatsappCta: "Hablar por WhatsApp",
    sections: "Secciones",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    backToTop: "OFG HDS, volver arriba",
    footerNavHeading: "Navegación",
    footerContactHeading: "Contacto",
    footerTagline: "OFG HDS · Human Development Solutions. Gestión de los factores de riesgos psicosociales · NR-1.",
    footerSolution: "Una solución Oporto Forte Group · © 2026",
    illustrativeScreens: "Pantallas con datos ilustrativos",
    whatsappTip: "Habla con OFG",
    language: "Idioma",
  },
  en: {
    requestCta: "Request assessment",
    whatsappCta: "Chat on WhatsApp",
    sections: "Sections",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    backToTop: "OFG HDS, back to top",
    footerNavHeading: "Navigation",
    footerContactHeading: "Contact",
    footerTagline: "OFG HDS · Human Development Solutions. Management of psychosocial risk factors · NR-1.",
    footerSolution: "An Oporto Forte Group solution · © 2026",
    illustrativeScreens: "Screens with illustrative data",
    whatsappTip: "Talk to OFG",
    language: "Language",
  },
};
