/* Textos da landing, organizados pela ordem do anexo "HDS NR-1 OFG". */

export type InfoItem = { label?: string; title: string; text: string; glyph?: string };

export const CONTEXT_CARDS: readonly InfoItem[] = [
  { label: "Obrigação", title: "Inventário de riscos", text: "Os fatores psicossociais integram o PGR, junto com a NR-17." },
  { label: "Exposição", title: "Autuação por item", text: "Quem não gerencia o risco fica exposto a autuação e responsabilização." },
  { label: "Exigência", title: "Ciclo, não número", text: "Identificar, avaliar, classificar, controlar e monitorar. De forma contínua." },
  {
    label: "Armadilha",
    title: "Aplicar e arquivar",
    text: "Questionário guardado numa pasta não é gestão. Sem plano e evidência, o PGR fica frágil.",
  },
];

export type StepItem = { phase: string; title: string; text: string };

export const HOW_STEPS: readonly StepItem[] = [
  { phase: "Ouvir", title: "Distribuir", text: "Um link de uso único por colaborador e QR por área para quem não usa e-mail." },
  {
    phase: "Ouvir",
    title: "Responder",
    text: "No celular, sem instalar nada. 11 etapas curtas, com pausas de alívio, e respostas guardadas no aparelho até enviar.",
  },
  { phase: "Ouvir", title: "Acompanhar", text: "Adesão por área em tempo real. Áreas abaixo da meta ficam sinalizadas." },
  { phase: "Analisar", title: "Resultados", text: "Índices IGRP e IMO e dimensões ordenadas por criticidade." },
  { phase: "Planejar", title: "Plano de ação", text: "Medidas por setor, com responsáveis e prazos, anexáveis ao PGR." },
];

export const ANONYMITY_CARDS: readonly InfoItem[] = [
  {
    glyph: "0",
    label: "Sem identificador",
    title: "Nada que aponte para a pessoa",
    text: "Não são gravados nome, e-mail, IP nem dados do aparelho.",
  },
  { glyph: "1×", label: "Sem ligação", title: "Link de uso único", text: "Nenhum registro liga a resposta a quem recebeu o link." },
  { glyph: "n≥5", label: "Mínimo de cinco", title: "Área pequena não aparece", text: "Abaixo de cinco respostas, a área não gera resultado." },
  { glyph: "Σ", label: "Só agregado", title: "Nada individual", text: "Nenhuma pontuação individual chega ao empregador." },
];

export const EXECUTIONS: readonly StepItem[] = [
  {
    phase: "Planejar",
    title: "Medidas de controle por setor",
    text: "Prioridades P1, P2 e P3 com responsável e prazo: de 0 a 30 dias, até 90 dias, até 6 meses.",
  },
  {
    phase: "Agir",
    title: "Formação ligada ao diagnóstico",
    text: "Planos de formação, cursos e ações no calendário, com a entidade formadora certificada da OFG.",
  },
  { phase: "Agir", title: "Presença registrada", text: "Check-in por QR em cada ação de formação." },
  { phase: "Agir", title: "Registro no PGR", text: "Plano e evidências em formato anexável ao PGR." },
  {
    phase: "Reavaliar",
    title: "Reavaliação com a mesma régua",
    text: "Seis meses depois, medimos de novo e comparamos o antes e o depois.",
  },
];

export const DELIVERABLES: readonly InfoItem[] = [
  { title: "Relatório psicossocial", text: "Por área e consolidado, datado e com a versão do instrumento aplicado." },
  { title: "Plano de ação por setor", text: "Medidas de controle, responsáveis e prazos, em formato anexável ao PGR." },
  { title: "Indicadores para o ESG", text: "Índices por área e evolução entre ciclos para o pilar Social." },
  { title: "Trilha de evidência", text: "Cada passo do ciclo com data, para auditoria e fiscalização." },
];

export const NOT_NEEDED = [
  "Instalar software",
  "Integrar sistemas",
  "Treinar equipe para operar a plataforma",
  "Criar contas para colaboradores",
] as const;

export const COMPANY_PROVIDES = [
  "Lista de áreas com número de colaboradores",
  "Um responsável por área",
  "A comunicação interna da campanha",
  "A validação do plano de ação",
] as const;

export const AUDIENCES = [
  { lead: "Indústria com PGR ativo.", text: "SESMT estruturado, falta a dimensão psicossocial." },
  { lead: "Grupos com várias unidades.", text: "Comparar unidades sem depender de planilha." },
  { lead: "Empresas sob pressão ESG.", text: "Indicadores do pilar Social com evidência." },
  { lead: "Escolas, clínicas e serviços.", text: "Equipes por setor que precisam de diagnóstico rápido." },
  { lead: "Consultorias de SST.", text: "A ferramenta que alimenta o PGR que já fazem." },
] as const;

export const SIGNALS = [
  "Auditoria ou fiscalização marcada",
  "Renovação do PGR",
  "Afastamento por saúde mental ou caso de assédio",
  "Exigência de cliente na cadeia de fornecimento",
  "Relatório ESG anual",
] as const;

export type Office = { country: string; lines: readonly string[]; phone: string; email: string };

export const OFFICES: readonly Office[] = [
  {
    country: "Brasil",
    lines: ["R. Prof. Aloísio Pessoa de Araújo, 75", "Boa Viagem Corporate · Recife"],
    phone: "4003-8721 · +55 81 9 9556 6566",
    email: "comercial@oportoforte.com.br",
  },
  {
    country: "Portugal",
    lines: ["Rua Francisco Carqueja, 179, 2.º dt.º", "4350-185 Porto"],
    phone: "+351 225 088 015",
    email: "comercial@oportoforte.com",
  },
];
