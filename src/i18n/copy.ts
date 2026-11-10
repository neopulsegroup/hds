/* ===========================================================================
   Conteúdo da landing em PT (pt-BR) | ES | EN.
   PT é a fonte (verbatim do site atual). ES/EN traduzidos com glossário:
   riscos psicossociais / riesgos psicosociales / psychosocial risks;
   diagnóstico / diagnóstico / assessment; gestão contínua / gestión continua /
   ongoing management; NR-1, PGR, PCMSO mantidos (normas brasileiras).
   =========================================================================== */

import type { Locale } from "@/lib/i18n";
import type { LeadMessages } from "@/lib/lead-schema";

export type InfoItem = { label?: string; title: string; text: string; glyph?: string };
export type StepItem = { phase: string; title: string; text: string };
export type AudienceItem = { lead: string; text: string };

export type ProposalBlock = {
  id: "inventario" | "gerenciador" | "matriz";
  label: string;
  title: string;
  italic: string;
  text: string;
  bullets: readonly string[];
  note: string;
};

export type Copy = {
  hero: {
    eyebrow: string;
    strongA: string;
    strongB: string;
    italicPre: string;
    italicMark: string;
    leadBold: string;
    leadRest: string;
    ctaPrimary: string;
    ctaSecondary: string;
    trust: readonly string[];
    handnote: readonly string[];
  };
  program: {
    eyebrow: string;
    strongA: string;
    strongPre: string;
    strongMark: string;
    italic: string;
    leadPre: string;
    leadBold: string;
    leadRest: string;
  };
  context: {
    eyebrow: string;
    strongA: string;
    strongB: string;
    italic: string;
    lead: string;
    stat1Text: string;
    stat1Mark: string;
    stat2Text: string;
    cards: readonly InfoItem[];
    sources: string;
    handnote: readonly string[];
  };
  how: {
    eyebrow: string;
    strong: string;
    italic: string;
    lead: string;
    handnote: readonly string[];
    stepsLabel: string;
    steps: readonly StepItem[];
    nextLink: string;
    noteBold: string;
    noteRest: string;
  };
  diagnosis: {
    eyebrow: string;
    strong: string;
    italic: string;
    lead: string;
    handnote1: readonly string[];
    tab: string;
    crumb: string;
    title: string;
    captionPre: string;
    captionBold: string;
    handnote2: readonly string[];
  };
  anonymity: {
    eyebrow: string;
    strongA: string;
    strongB: string;
    italic: string;
    lead: string;
    cards: readonly InfoItem[];
    closingBold: string;
    closingItalic: string;
    handnote: readonly string[];
  };
  execution: {
    eyebrow: string;
    strong: string;
    italic: string;
    lead: string;
    handnote: readonly string[];
    execLabel: string;
    items: readonly StepItem[];
  };
  deliverables: {
    eyebrow: string;
    strong: string;
    italic: string;
    handnote: readonly string[];
    items: readonly InfoItem[];
    notNeededTitle: string;
    notNeeded: readonly string[];
    providesTitle: string;
    provides: readonly string[];
  };
  criteria: {
    eyebrow: string;
    strong: string;
    italic: string;
    lead: string;
    handnote: readonly string[];
    howToReadBold: string;
    howToReadText: string;
    comparisonHeader: string;
    comparisonAria: string;
    verdictYes: string;
    verdictNo: string;
    verdictDepends: string;
    scoreBarsLabel: string;
  };
  proposal: {
    eyebrow: string;
    strong: string;
    italic: string;
    lead: string;
    blocks: readonly ProposalBlock[];
  };
  nextStep: {
    label: string;
    big: string;
    italic: string;
    text: string;
    specialistCta: string;
    specialistMessage: string;
    requestCta: string;
  };
  audience: {
    eyebrow: string;
    strong: string;
    italic: string;
    audiences: readonly AudienceItem[];
    signalsLabel: string;
    signals: readonly string[];
  };
  about: {
    eyebrow: string;
    strong: string;
    italic: string;
    lead: string;
    statFounded: string;
    statContinents: string;
    statCountries: string;
    statCycle: string;
  };
  contact: {
    eyebrow: string;
    strong: string;
    italic: string;
    lead: string;
    handnote: readonly string[];
    whatsappCta: string;
    closingPlain: string;
    closingItalic: string;
  };
  scales: readonly string[];
  scalesMock: {
    eyebrow: string;
    title: string;
    versionFull: string;
    versionNr01: string;
    items: string;
    high: string;
    medium: string;
    low: string;
    illustrative: string;
  };
  form: {
    title: string;
    subtitle: string;
    nome: string;
    empresa: string;
    cargo: string;
    cargoPh: string;
    whatsapp: string;
    whatsappPh: string;
    email: string;
    colaboradores: string;
    select: string;
    areas: string;
    interesse: string;
    lgpd: string;
    submit: string;
    submitting: string;
    /** Rótulos de exibição, alinhados por índice aos valores canónicos do lead-schema. */
    colaboradoresOptions: readonly string[];
    areasOptions: readonly string[];
    interesseOptions: readonly string[];
    successTitle: string;
    thanksPre: string;
    thanksPost: string;
    fallbackTitle: string;
    fallbackPre: string;
    fallbackMid: string;
    fallbackPost: string;
    sendWhatsApp: string;
    copyIdle: string;
    copyDone: string;
    copySelected: string;
    /** Mensagens de validação (zod + resumo), por locale. */
    validation: LeadMessages;
  };
};

export const COPY: Record<Locale, Copy> = {
  pt: {
    hero: {
      eyebrow: "OFG HDS · Riscos psicossociais · NR-1",
      strongA: "Conformidade NR-1",
      strongB: "que a sua empresa",
      italicPre: "consegue",
      italicMark: "provar.",
      leadBold:
        "Solução integrada para aumentar a produtividade de forma sustentável, atendendo às áreas de riscos psicossociais.",
      leadRest:
        "Diagnóstico anônimo por área, plano de ação por setor e evidência datada, numa única plataforma operada pelos especialistas OFG em conjunto com a sua equipe.",
      ctaPrimary: "Quero o diagnóstico inicial sem custo",
      ctaSecondary: "Ver como funciona",
      trust: ["Portaria MTE 1.419/2024", "Anonimato por arquitetura", "Sem instalar software"],
      handnote: ["comece por aqui"],
    },
    program: {
      eyebrow: "OFG HDS · Human Development Solutions",
      strongA: "Pessoas não cabem",
      strongPre: "em ",
      strongMark: "planilhas.",
      italic: "Cabem numa gestão contínua.",
      leadPre: "Saúde mental no trabalho, ",
      leadBold: "do diagnóstico à formação",
      leadRest:
        ", num só ambiente. Tecnologia integrada com especialistas da OFG que avaliam junto com a sua equipe.",
    },
    context: {
      eyebrow: "01 · O que mudou",
      strongA: "Desde 26 de maio de 2026,",
      strongB: "o risco psicossocial",
      italic: "entra no PGR.",
      lead: "A Portaria MTE 1.419/2024 colocou sobrecarga, assédio e baixo controle dentro do inventário de riscos. A pergunta da fiscalização passou a ser outra: como a empresa gerencia esse risco.",
      stat1Text: "afastamentos por transtornos mentais no Brasil em 2025.",
      stat1Mark: "Recorde.",
      stat2Text: "afastamentos por burnout em dois anos.",
      cards: [
        { label: "Obrigação", title: "Inventário de riscos", text: "Os fatores psicossociais integram o PGR, junto com a NR-17." },
        { label: "Exposição", title: "Autuação por item", text: "Quem não gerencia o risco fica exposto a autuação e responsabilização." },
        { label: "Exigência", title: "Ciclo, não número", text: "Identificar, avaliar, classificar, controlar e monitorar. De forma contínua." },
        { label: "Armadilha", title: "Aplicar e arquivar", text: "Questionário guardado numa pasta não é gestão. Sem plano e evidência, o PGR fica frágil." },
      ],
      sources: "Fontes: Ministério da Previdência Social (2025); Fundacentro; NR-1, Ministério do Trabalho e Emprego.",
      handnote: ["o RH sabe que precisa agir.", "não sabe por onde começar."],
    },
    how: {
      eyebrow: "02 · Como funciona",
      strong: "Um ciclo.",
      italic: "Não um relatório.",
      lead: "Ouvir, analisar, planejar, agir e reavaliar, no mesmo ambiente. Cada volta do ciclo mede de novo, com a mesma régua.",
      handnote: ["a tecnologia calcula.", "as pessoas decidem."],
      stepsLabel: "Cinco etapas · O RH só distribui os links",
      steps: [
        { phase: "Ouvir", title: "Distribuir", text: "Um link de uso único por colaborador e QR por área para quem não usa e-mail." },
        { phase: "Ouvir", title: "Responder", text: "No celular, sem instalar nada. 11 etapas curtas, com pausas de alívio, e respostas guardadas no aparelho até enviar." },
        { phase: "Ouvir", title: "Acompanhar", text: "Adesão por área em tempo real. Áreas abaixo da meta ficam sinalizadas." },
        { phase: "Analisar", title: "Resultados", text: "Índices IGRP e IMO e dimensões ordenadas por criticidade." },
        { phase: "Planejar", title: "Plano de ação", text: "Medidas por setor, com responsáveis e prazos, anexáveis ao PGR." },
      ],
      nextLink: "Depois do plano, vêm a execução e a reavaliação",
      noteBold: "Instrumento OFG em fase de validação técnica.",
      noteRest:
        " A aplicação e a leitura dos resultados são sempre acompanhadas pelos especialistas OFG, em conjunto com a equipe da empresa contratante.",
    },
    diagnosis: {
      eyebrow: "03 · Diagnóstico",
      strong: "Não é achismo.",
      italic: "É trabalhar com evidência.",
      lead: "O risco deixa de ser um número da empresa e passa a ter endereço. Cada dimensão é cruzada com cada área: a liderança vê onde está o problema e por onde começar.",
      handnote1: ["adesão e mapa em", "tempo real"],
      tab: "hds · relatório psicossocial",
      crumb: "SAÚDE MENTAL / EMPRESA EXEMPLO / RESULTADOS",
      title: "Resultados",
      captionPre: "Áreas com menos de cinco respostas não geram resultado.",
      captionBold: "A coluna vazia é intencional: protege quem respondeu.",
      handnote2: ["a coluna vazia é intencional"],
    },
    anonymity: {
      eyebrow: "04 · Anonimato",
      strongA: "Sem confiança,",
      strongB: "a resposta é para agradar.",
      italic: "Por isso, o anonimato está no sistema.",
      lead: "A garantia não é discurso. Está escrita no produto, na tela que o colaborador lê antes de começar.",
      cards: [
        { glyph: "0", label: "Sem identificador", title: "Nada que aponte para a pessoa", text: "Não são gravados nome, e-mail, IP nem dados do aparelho." },
        { glyph: "1×", label: "Sem ligação", title: "Link de uso único", text: "Nenhum registro liga a resposta a quem recebeu o link." },
        { glyph: "n≥5", label: "Mínimo de cinco", title: "Área pequena não aparece", text: "Abaixo de cinco respostas, a área não gera resultado." },
        { glyph: "Σ", label: "Só agregado", title: "Nada individual", text: "Nenhuma pontuação individual chega ao empregador." },
      ],
      closingBold: "Protege o colaborador e protege a empresa.",
      closingItalic: "Quem nunca recebe dados individuais não pode ser acusado de usá-los.",
      handnote: ["quem responde com segurança,", "responde a verdade."],
    },
    execution: {
      eyebrow: "05 · Do relatório à execução",
      strong: "O relatório vira plano.",
      italic: "O plano vira execução.",
      lead: "Cada prioridade do relatório psicossocial vira medida de controle por setor, com responsável e prazo. Depois começam as execuções, nas várias frentes que o diagnóstico apontou, todas registradas no mesmo ambiente.",
      handnote: ["cada prioridade vira plano, com prazo e responsável"],
      execLabel: "As execuções",
      items: [
        { phase: "Planejar", title: "Medidas de controle por setor", text: "Prioridades P1, P2 e P3 com responsável e prazo: de 0 a 30 dias, até 90 dias, até 6 meses." },
        { phase: "Agir", title: "Formação ligada ao diagnóstico", text: "Planos de formação, cursos e ações no calendário, com a entidade formadora certificada da OFG." },
        { phase: "Agir", title: "Presença registrada", text: "Check-in por QR em cada ação de formação." },
        { phase: "Agir", title: "Registro no PGR", text: "Plano e evidências em formato anexável ao PGR." },
        { phase: "Reavaliar", title: "Reavaliação com a mesma régua", text: "Seis meses depois, medimos de novo e comparamos o antes e o depois." },
      ],
    },
    deliverables: {
      eyebrow: "06 · Entregáveis",
      strong: "O que fica com a empresa",
      italic: "ao fim de cada ciclo.",
      handnote: ["antes e depois,", "com a mesma régua"],
      items: [
        { title: "Relatório psicossocial", text: "Por área e consolidado, datado e com a versão do instrumento aplicado." },
        { title: "Plano de ação por setor", text: "Medidas de controle, responsáveis e prazos, em formato anexável ao PGR." },
        { title: "Indicadores para o ESG", text: "Índices por área e evolução entre ciclos para o pilar Social." },
        { title: "Trilha de evidência", text: "Cada passo do ciclo com data, para auditoria e fiscalização." },
      ],
      notNeededTitle: "O que a empresa não precisa fazer",
      notNeeded: ["Instalar software", "Integrar sistemas", "Treinar equipe para operar a plataforma", "Criar contas para colaboradores"],
      providesTitle: "O que a empresa entrega",
      provides: ["Lista de áreas com número de colaboradores", "Um responsável por área", "A comunicação interna da campanha", "A validação do plano de ação"],
    },
    criteria: {
      eyebrow: "07 · Critério",
      strong: "Comparativo técnico para NR-1.",
      italic: "Saiba como avaliar.",
      lead: "Nem todas as soluções entregam estrutura de gestão, mesmo quando são tecnicamente válidas como instrumentos de avaliação. Lado a lado, os critérios que sustentam o PGR psicossocial.",
      handnote: ["instrumento mede.", "gestão sustenta."],
      howToReadBold: "Como ler:",
      howToReadText:
        " a comparação mostra diferenças entre instrumentos de avaliação e plataformas de gestão, os limites de cada abordagem e os elementos que pesam em auditorias, fiscalizações e na tomada de decisão.",
      comparisonHeader: "Critério",
      comparisonAria: "Comparativo técnico entre ferramentas para NR-1",
      verdictYes: "Sim",
      verdictNo: "Não",
      verdictDepends: "Depende da adaptação",
      scoreBarsLabel: "Critérios sim ou não atendidos",
    },
    proposal: {
      eyebrow: "08 · A proposta",
      strong: "Além da mensuração.",
      italic: "Gestão que sustenta decisões.",
      lead: "A OFG HDS atua com foco em saúde mental no trabalho e gestão de riscos psicossociais, oferecendo soluções que vão além da mensuração e sustentam a tomada de decisão ao longo do tempo.",
      blocks: [
        {
          id: "inventario",
          label: "Inventário Psicossocial",
          title: "Avaliar com estrutura,",
          italic: "não com achismo.",
          text: "O Inventário Psicossocial OFG HDS avalia fatores psicossociais do trabalho de forma estruturada, com base em modelos consolidados da Psicologia do Trabalho e da Ergonomia da Atividade.",
          bullets: [
            "Identificação dos fatores de risco psicossocial",
            "Análise da prevalência e intensidade dos riscos",
            "Correlação entre fatores e impactos no trabalho",
            "Geração de dados consistentes para o PGR",
          ],
          note: "As escalas possuem estudos de validade e precisão, garantindo consistência técnica e segurança na interpretação dos resultados.",
        },
        {
          id: "gerenciador",
          label: "Gerenciador de Risco Psicossocial",
          title: "Transforma dados",
          italic: "em gestão prática.",
          text: "Um dos principais diferenciais: a avaliação psicossocial deixa de ser um evento isolado e passa a integrar a rotina de gestão do PGR.",
          bullets: [
            "Classificar riscos em níveis: baixo, médio e alto",
            "Priorizar fatores críticos por área, função ou grupo",
            "Acompanhar a evolução dos indicadores ao longo do tempo",
            "Apoiar decisões técnicas e estratégicas",
          ],
          note: "",
        },
        {
          id: "matriz",
          label: "Matriz de Risco Psicossocial",
          title: "Prioridades à vista,",
          italic: "decisões rastreáveis.",
          text: "A plataforma organiza os resultados em matriz de risco. A matriz fortalece a rastreabilidade das decisões e contribui para a evidência técnica exigida pela NR-01.",
          bullets: [
            "Visualização clara dos níveis de risco",
            "Identificação rápida de prioridades",
            "Suporte à definição de planos de ação",
            "Comunicação técnica com SST, RH, liderança e auditorias",
          ],
          note: "",
        },
      ],
    },
    nextStep: {
      label: "Próximo passo",
      big: "Avaliação psicossocial pode ser apenas um requisito formal ou a base de uma gestão contínua do risco psicossocial.",
      italic: "A diferença está na abordagem escolhida.",
      text: "Nosso time técnico pode ajudar você a interpretar este comparativo e avaliar qual caminho se encaixa melhor na realidade da sua empresa.",
      specialistCta: "Falar com um especialista",
      specialistMessage: "Olá! Quero falar com um especialista sobre o comparativo técnico do HDS para a NR-1.",
      requestCta: "Pedir diagnóstico",
    },
    audience: {
      eyebrow: "09 · Para quem",
      strong: "Empresas onde",
      italic: "a NR-1 já é pauta.",
      audiences: [
        { lead: "Indústria com PGR ativo.", text: "SESMT estruturado, falta a dimensão psicossocial." },
        { lead: "Grupos com várias unidades.", text: "Comparar unidades sem depender de planilha." },
        { lead: "Empresas sob pressão ESG.", text: "Indicadores do pilar Social com evidência." },
        { lead: "Escolas, clínicas e serviços.", text: "Equipes por setor que precisam de diagnóstico rápido." },
        { lead: "Consultorias de SST.", text: "A ferramenta que alimenta o PGR que já fazem." },
      ],
      signalsLabel: "sinais de que é hora",
      signals: [
        "Auditoria ou fiscalização marcada",
        "Renovação do PGR",
        "Afastamento por saúde mental ou caso de assédio",
        "Exigência de cliente na cadeia de fornecimento",
        "Relatório ESG anual",
      ],
    },
    about: {
      eyebrow: "10 · Quem está por trás",
      strong: "Desde 1993, em quatro continentes",
      italic: "e mais de dez países.",
      lead: "O Oporto Forte Group junta plataforma própria, especialistas em saúde organizacional e entidade formadora certificada. O diagnóstico aponta o risco. A formação ajuda a corrigi-lo.",
      statFounded: "Ano de fundação",
      statContinents: "Continentes",
      statCountries: "Países",
      statCycle: "Ciclo completo num só lugar",
    },
    contact: {
      eyebrow: "11 · Próximo passo",
      strong: "Comece por uma área piloto,",
      italic: "sem custo.",
      lead: "A empresa experimenta o ciclo numa área, vê o relatório psicossocial e decide com base em resultado. A conversa sobre investimento vem depois.",
      handnote: ["simples de começar"],
      whatsappCta: "Falar no WhatsApp",
      closingPlain: "2027 não é sobre cumprir.",
      closingItalic: "É sobre sustentar.",
    },
    scales: [
      "Demandas do trabalho",
      "Organização e conteúdo das tarefas",
      "Relações socioprofissionais",
      "Condições de trabalho",
      "Reconhecimento, autonomia e suporte",
      "Fatores de proteção psicossocial",
    ],
    scalesMock: {
      eyebrow: "Inventário psicossocial · escalas",
      title: "Prevalência por escala",
      versionFull: "Versão completa",
      versionNr01: "Versão NR-01",
      items: "itens",
      high: "Alto",
      medium: "Médio",
      low: "Baixo",
      illustrative: "DADOS ILUSTRATIVOS",
    },
    form: {
      title: "Diagnóstico inicial sem custo",
      subtitle: "Responda em 1 minuto. A equipe comercial OFG retorna em até 2 dias úteis.",
      nome: "Nome",
      empresa: "Empresa",
      cargo: "Cargo",
      cargoPh: "Ex.: Gerente de RH",
      whatsapp: "WhatsApp",
      whatsappPh: "(81) 9 0000-0000",
      email: "E-mail corporativo",
      colaboradores: "Colaboradores",
      select: "Selecione",
      areas: "Áreas ou setores",
      interesse: "Interesse",
      lgpd: "Autorizo o Oporto Forte Group a usar estes dados para contato comercial sobre a NR-1, conforme a LGPD.",
      submit: "Quero o diagnóstico",
      submitting: "A enviar...",
      colaboradoresOptions: ["Até 50", "51 a 200", "201 a 500", "501 a 1.000", "Mais de 1.000"],
      areasOptions: ["1 a 3", "4 a 10", "Mais de 10"],
      interesseOptions: ["Diagnóstico inicial sem custo", "Demonstração da plataforma", "Proposta comercial"],
      successTitle: "Pedido recebido.",
      thanksPre: "Obrigado, ",
      thanksPost: ". A equipe comercial OFG entra em contato em até 2 dias úteis pelo WhatsApp ou e-mail indicados.",
      fallbackTitle: "Falta um passo.",
      fallbackPre: "Não foi possível registrar o pedido nesta página. Envie o resumo abaixo para ",
      fallbackMid: " ou pelo WhatsApp ",
      fallbackPost: ".",
      sendWhatsApp: "Enviar pelo WhatsApp",
      copyIdle: "Copiar resumo",
      copyDone: "Copiado",
      copySelected: "Resumo selecionado, use Ctrl+C",
      validation: {
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
      },
    },
  },

  es: {
    hero: {
      eyebrow: "OFG HDS · Riesgos psicosociales · NR-1",
      strongA: "Conformidad NR-1",
      strongB: "que tu empresa",
      italicPre: "puede",
      italicMark: "comprobar.",
      leadBold:
        "Solución integrada para aumentar la productividad de forma sostenible, atendiendo a las áreas de riesgos psicosociales.",
      leadRest:
        "Diagnóstico anónimo por área, plan de acción por sector y evidencia fechada, en una única plataforma operada por los especialistas OFG junto con tu equipo.",
      ctaPrimary: "Quiero el diagnóstico inicial sin costo",
      ctaSecondary: "Ver cómo funciona",
      trust: ["Portaria MTE 1.419/2024", "Anonimato por arquitectura", "Sin instalar software"],
      handnote: ["empieza por aquí"],
    },
    program: {
      eyebrow: "OFG HDS · Human Development Solutions",
      strongA: "Las personas no caben",
      strongPre: "en ",
      strongMark: "hojas de cálculo.",
      italic: "Caben en una gestión continua.",
      leadPre: "Salud mental en el trabajo, ",
      leadBold: "del diagnóstico a la formación",
      leadRest:
        ", en un solo entorno. Tecnología integrada con especialistas de OFG que evalúan junto con tu equipo.",
    },
    context: {
      eyebrow: "01 · Qué cambió",
      strongA: "Desde el 26 de mayo de 2026,",
      strongB: "el riesgo psicosocial",
      italic: "entra en el PGR.",
      lead: "La Portaria MTE 1.419/2024 colocó la sobrecarga, el acoso y el bajo control dentro del inventario de riesgos. La pregunta de la fiscalización cambió: cómo gestiona la empresa ese riesgo.",
      stat1Text: "bajas por trastornos mentales en Brasil en 2025.",
      stat1Mark: "Récord.",
      stat2Text: "bajas por burnout en dos años.",
      cards: [
        { label: "Obligación", title: "Inventario de riesgos", text: "Los factores psicosociales integran el PGR, junto con la NR-17." },
        { label: "Exposición", title: "Sanción por ítem", text: "Quien no gestiona el riesgo queda expuesto a sanción y responsabilidad." },
        { label: "Exigencia", title: "Ciclo, no número", text: "Identificar, evaluar, clasificar, controlar y monitorear. De forma continua." },
        { label: "Trampa", title: "Aplicar y archivar", text: "Un cuestionario guardado en una carpeta no es gestión. Sin plan y evidencia, el PGR queda frágil." },
      ],
      sources: "Fuentes: Ministerio de la Previdência Social (2025); Fundacentro; NR-1, Ministerio del Trabajo y Empleo.",
      handnote: ["RR. HH. sabe que debe actuar.", "no sabe por dónde empezar."],
    },
    how: {
      eyebrow: "02 · Cómo funciona",
      strong: "Un ciclo.",
      italic: "No un informe.",
      lead: "Escuchar, analizar, planificar, actuar y reevaluar, en el mismo entorno. Cada vuelta del ciclo mide de nuevo, con la misma vara.",
      handnote: ["la tecnología calcula.", "las personas deciden."],
      stepsLabel: "Cinco etapas · RR. HH. solo distribuye los enlaces",
      steps: [
        { phase: "Escuchar", title: "Distribuir", text: "Un enlace de un solo uso por colaborador y QR por área para quien no usa correo." },
        { phase: "Escuchar", title: "Responder", text: "En el móvil, sin instalar nada. 11 etapas cortas, con pausas de alivio, y respuestas guardadas en el dispositivo hasta enviar." },
        { phase: "Escuchar", title: "Acompañar", text: "Participación por área en tiempo real. Las áreas por debajo de la meta quedan señaladas." },
        { phase: "Analizar", title: "Resultados", text: "Índices IGRP e IMO y dimensiones ordenadas por criticidad." },
        { phase: "Planificar", title: "Plan de acción", text: "Medidas por sector, con responsables y plazos, adjuntables al PGR." },
      ],
      nextLink: "Después del plan vienen la ejecución y la reevaluación",
      noteBold: "Instrumento OFG en fase de validación técnica.",
      noteRest:
        " La aplicación y la lectura de los resultados están siempre acompañadas por los especialistas OFG, junto con el equipo de la empresa contratante.",
    },
    diagnosis: {
      eyebrow: "03 · Diagnóstico",
      strong: "No es intuición.",
      italic: "Es trabajar con evidencia.",
      lead: "El riesgo deja de ser un número de la empresa y pasa a tener dirección. Cada dimensión se cruza con cada área: el liderazgo ve dónde está el problema y por dónde empezar.",
      handnote1: ["participación y mapa", "en tiempo real"],
      tab: "hds · informe psicosocial",
      crumb: "SALUD MENTAL / EMPRESA EJEMPLO / RESULTADOS",
      title: "Resultados",
      captionPre: "Las áreas con menos de cinco respuestas no generan resultado.",
      captionBold: "La columna vacía es intencional: protege a quien respondió.",
      handnote2: ["la columna vacía es intencional"],
    },
    anonymity: {
      eyebrow: "04 · Anonimato",
      strongA: "Sin confianza,",
      strongB: "la respuesta es para agradar.",
      italic: "Por eso, el anonimato está en el sistema.",
      lead: "La garantía no es discurso. Está escrita en el producto, en la pantalla que el colaborador lee antes de empezar.",
      cards: [
        { glyph: "0", label: "Sin identificador", title: "Nada que apunte a la persona", text: "No se guardan nombre, correo, IP ni datos del dispositivo." },
        { glyph: "1×", label: "Sin vínculo", title: "Enlace de un solo uso", text: "Ningún registro liga la respuesta a quien recibió el enlace." },
        { glyph: "n≥5", label: "Mínimo de cinco", title: "Un área pequeña no aparece", text: "Por debajo de cinco respuestas, el área no genera resultado." },
        { glyph: "Σ", label: "Solo agregado", title: "Nada individual", text: "Ninguna puntuación individual llega al empleador." },
      ],
      closingBold: "Protege al colaborador y protege a la empresa.",
      closingItalic: "Quien nunca recibe datos individuales no puede ser acusado de usarlos.",
      handnote: ["quien responde con seguridad,", "responde la verdad."],
    },
    execution: {
      eyebrow: "05 · Del informe a la ejecución",
      strong: "El informe se vuelve plan.",
      italic: "El plan se vuelve ejecución.",
      lead: "Cada prioridad del informe psicosocial se vuelve medida de control por sector, con responsable y plazo. Después empiezan las ejecuciones, en los distintos frentes que el diagnóstico señaló, todas registradas en el mismo entorno.",
      handnote: ["cada prioridad se vuelve plan, con plazo y responsable"],
      execLabel: "Las ejecuciones",
      items: [
        { phase: "Planificar", title: "Medidas de control por sector", text: "Prioridades P1, P2 y P3 con responsable y plazo: de 0 a 30 días, hasta 90 días, hasta 6 meses." },
        { phase: "Actuar", title: "Formación ligada al diagnóstico", text: "Planes de formación, cursos y acciones en el calendario, con la entidad formadora certificada de OFG." },
        { phase: "Actuar", title: "Asistencia registrada", text: "Check-in por QR en cada acción de formación." },
        { phase: "Actuar", title: "Registro en el PGR", text: "Plan y evidencias en formato adjuntable al PGR." },
        { phase: "Reevaluar", title: "Reevaluación con la misma vara", text: "Seis meses después, medimos de nuevo y comparamos el antes y el después." },
      ],
    },
    deliverables: {
      eyebrow: "06 · Entregables",
      strong: "Lo que queda con la empresa",
      italic: "al final de cada ciclo.",
      handnote: ["antes y después,", "con la misma vara"],
      items: [
        { title: "Informe psicosocial", text: "Por área y consolidado, fechado y con la versión del instrumento aplicado." },
        { title: "Plan de acción por sector", text: "Medidas de control, responsables y plazos, en formato adjuntable al PGR." },
        { title: "Indicadores para el ESG", text: "Índices por área y evolución entre ciclos para el pilar Social." },
        { title: "Rastro de evidencia", text: "Cada paso del ciclo con fecha, para auditoría y fiscalización." },
      ],
      notNeededTitle: "Lo que la empresa no necesita hacer",
      notNeeded: ["Instalar software", "Integrar sistemas", "Capacitar al equipo para operar la plataforma", "Crear cuentas para los colaboradores"],
      providesTitle: "Lo que la empresa aporta",
      provides: ["Lista de áreas con número de colaboradores", "Un responsable por área", "La comunicación interna de la campaña", "La validación del plan de acción"],
    },
    criteria: {
      eyebrow: "07 · Criterio",
      strong: "Comparativa técnica para NR-1.",
      italic: "Aprende a evaluar.",
      lead: "No todas las soluciones entregan estructura de gestión, aun cuando son técnicamente válidas como instrumentos de evaluación. Lado a lado, los criterios que sostienen el PGR psicosocial.",
      handnote: ["el instrumento mide.", "la gestión sostiene."],
      howToReadBold: "Cómo leer:",
      howToReadText:
        " la comparación muestra las diferencias entre instrumentos de evaluación y plataformas de gestión, los límites de cada enfoque y los elementos que pesan en auditorías, fiscalizaciones y en la toma de decisiones.",
      comparisonHeader: "Criterio",
      comparisonAria: "Comparativa técnica entre herramientas para NR-1",
      verdictYes: "Sí",
      verdictNo: "No",
      verdictDepends: "Depende de la adaptación",
      scoreBarsLabel: "Criterios sí o no cumplidos",
    },
    proposal: {
      eyebrow: "08 · La propuesta",
      strong: "Más allá de la medición.",
      italic: "Gestión que sostiene decisiones.",
      lead: "OFG HDS trabaja con foco en salud mental en el trabajo y gestión de riesgos psicosociales, ofreciendo soluciones que van más allá de la medición y sostienen la toma de decisiones a lo largo del tiempo.",
      blocks: [
        {
          id: "inventario",
          label: "Inventario Psicosocial",
          title: "Evaluar con estructura,",
          italic: "no con intuición.",
          text: "El Inventario Psicosocial OFG HDS evalúa factores psicosociales del trabajo de forma estructurada, con base en modelos consolidados de la Psicología del Trabajo y la Ergonomía de la Actividad.",
          bullets: [
            "Identificación de los factores de riesgo psicosocial",
            "Análisis de la prevalencia e intensidad de los riesgos",
            "Correlación entre factores e impactos en el trabajo",
            "Generación de datos consistentes para el PGR",
          ],
          note: "Las escalas cuentan con estudios de validez y precisión, garantizando consistencia técnica y seguridad en la interpretación de los resultados.",
        },
        {
          id: "gerenciador",
          label: "Gestor de Riesgo Psicosocial",
          title: "Transforma datos",
          italic: "en gestión práctica.",
          text: "Uno de los principales diferenciales: la evaluación psicosocial deja de ser un evento aislado y pasa a integrar la rutina de gestión del PGR.",
          bullets: [
            "Clasificar riesgos en niveles: bajo, medio y alto",
            "Priorizar factores críticos por área, función o grupo",
            "Seguir la evolución de los indicadores a lo largo del tiempo",
            "Apoyar decisiones técnicas y estratégicas",
          ],
          note: "",
        },
        {
          id: "matriz",
          label: "Matriz de Riesgo Psicosocial",
          title: "Prioridades a la vista,",
          italic: "decisiones rastreables.",
          text: "La plataforma organiza los resultados en matriz de riesgo. La matriz refuerza la trazabilidad de las decisiones y contribuye a la evidencia técnica exigida por la NR-01.",
          bullets: [
            "Visualización clara de los niveles de riesgo",
            "Identificación rápida de prioridades",
            "Apoyo a la definición de planes de acción",
            "Comunicación técnica con SST, RR. HH., liderazgo y auditorías",
          ],
          note: "",
        },
      ],
    },
    nextStep: {
      label: "Próximo paso",
      big: "La evaluación psicosocial puede ser apenas un requisito formal o la base de una gestión continua del riesgo psicosocial.",
      italic: "La diferencia está en el enfoque elegido.",
      text: "Nuestro equipo técnico puede ayudarte a interpretar esta comparativa y evaluar qué camino encaja mejor con la realidad de tu empresa.",
      specialistCta: "Hablar con un especialista",
      specialistMessage: "¡Hola! Quiero hablar con un especialista sobre la comparativa técnica del HDS para la NR-1.",
      requestCta: "Solicitar diagnóstico",
    },
    audience: {
      eyebrow: "09 · Para quién",
      strong: "Empresas donde",
      italic: "la NR-1 ya está en la agenda.",
      audiences: [
        { lead: "Industria con PGR activo.", text: "SESMT estructurado, falta la dimensión psicosocial." },
        { lead: "Grupos con varias unidades.", text: "Comparar unidades sin depender de hojas de cálculo." },
        { lead: "Empresas bajo presión ESG.", text: "Indicadores del pilar Social con evidencia." },
        { lead: "Escuelas, clínicas y servicios.", text: "Equipos por sector que necesitan un diagnóstico rápido." },
        { lead: "Consultorías de SST.", text: "La herramienta que alimenta el PGR que ya hacen." },
      ],
      signalsLabel: "señales de que es hora",
      signals: [
        "Auditoría o fiscalización agendada",
        "Renovación del PGR",
        "Baja por salud mental o caso de acoso",
        "Exigencia de un cliente en la cadena de suministro",
        "Informe ESG anual",
      ],
    },
    about: {
      eyebrow: "10 · Quién está detrás",
      strong: "Desde 1993, en cuatro continentes",
      italic: "y más de diez países.",
      lead: "El Oporto Forte Group reúne plataforma propia, especialistas en salud organizacional y entidad formadora certificada. El diagnóstico señala el riesgo. La formación ayuda a corregirlo.",
      statFounded: "Año de fundación",
      statContinents: "Continentes",
      statCountries: "Países",
      statCycle: "Ciclo completo en un solo lugar",
    },
    contact: {
      eyebrow: "11 · Próximo paso",
      strong: "Empieza por un área piloto,",
      italic: "sin costo.",
      lead: "La empresa prueba el ciclo en un área, ve el informe psicosocial y decide con base en resultados. La conversación sobre la inversión viene después.",
      handnote: ["fácil de empezar"],
      whatsappCta: "Hablar por WhatsApp",
      closingPlain: "2027 no es sobre cumplir.",
      closingItalic: "Es sobre sostener.",
    },
    scales: [
      "Demandas del trabajo",
      "Organización y contenido de las tareas",
      "Relaciones socioprofesionales",
      "Condiciones de trabajo",
      "Reconocimiento, autonomía y apoyo",
      "Factores de protección psicosocial",
    ],
    scalesMock: {
      eyebrow: "Inventario psicosocial · escalas",
      title: "Prevalencia por escala",
      versionFull: "Versión completa",
      versionNr01: "Versión NR-01",
      items: "ítems",
      high: "Alto",
      medium: "Medio",
      low: "Bajo",
      illustrative: "DATOS ILUSTRATIVOS",
    },
    form: {
      title: "Diagnóstico inicial sin costo",
      subtitle: "Responde en 1 minuto. El equipo comercial de OFG responde en hasta 2 días hábiles.",
      nome: "Nombre",
      empresa: "Empresa",
      cargo: "Cargo",
      cargoPh: "Ej.: Gerente de RR. HH.",
      whatsapp: "WhatsApp",
      whatsappPh: "(81) 9 0000-0000",
      email: "Correo corporativo",
      colaboradores: "Colaboradores",
      select: "Selecciona",
      areas: "Áreas o sectores",
      interesse: "Interés",
      lgpd: "Autorizo al Oporto Forte Group a usar estos datos para contacto comercial sobre la NR-1, conforme a la LGPD.",
      submit: "Quiero el diagnóstico",
      submitting: "Enviando...",
      colaboradoresOptions: ["Hasta 50", "51 a 200", "201 a 500", "501 a 1.000", "Más de 1.000"],
      areasOptions: ["1 a 3", "4 a 10", "Más de 10"],
      interesseOptions: ["Diagnóstico inicial sin costo", "Demostración de la plataforma", "Propuesta comercial"],
      successTitle: "Solicitud recibida.",
      thanksPre: "Gracias, ",
      thanksPost: ". El equipo comercial de OFG se pone en contacto en hasta 2 días hábiles por WhatsApp o el correo indicado.",
      fallbackTitle: "Falta un paso.",
      fallbackPre: "No fue posible registrar la solicitud en esta página. Envía el resumen de abajo a ",
      fallbackMid: " o por WhatsApp ",
      fallbackPost: ".",
      sendWhatsApp: "Enviar por WhatsApp",
      copyIdle: "Copiar resumen",
      copyDone: "Copiado",
      copySelected: "Resumen seleccionado, usa Ctrl+C",
      validation: {
        required: "Completa nombre, empresa, WhatsApp, correo y número de colaboradores.",
        email: "Revisa el correo: falta el dominio o hay un espacio.",
        lgpd: "Marca la autorización LGPD para poder contactarte.",
        telefone: "Revisa el WhatsApp: indica código de área y número.",
        nomeReq: "Indica tu nombre.",
        empresaReq: "Indica la empresa.",
        telefoneReq: "Indica el WhatsApp.",
        emailReq: "Indica el correo.",
        maxLen: "Usa como máximo {max} caracteres.",
        colaboradoresReq: "Selecciona el número de colaboradores.",
        optionInvalid: "Selecciona una opción válida.",
      },
    },
  },

  en: {
    hero: {
      eyebrow: "OFG HDS · Psychosocial risks · NR-1",
      strongA: "NR-1 compliance",
      strongB: "your company",
      italicPre: "can",
      italicMark: "prove.",
      leadBold:
        "An integrated solution to raise productivity sustainably while addressing psychosocial risk areas.",
      leadRest:
        "Anonymous assessment by area, an action plan per sector and dated evidence, on a single platform run by OFG specialists together with your team.",
      ctaPrimary: "I want the free initial assessment",
      ctaSecondary: "See how it works",
      trust: ["MTE Ordinance 1.419/2024", "Anonymous by architecture", "No software to install"],
      handnote: ["start here"],
    },
    program: {
      eyebrow: "OFG HDS · Human Development Solutions",
      strongA: "People don't fit",
      strongPre: "",
      strongMark: "spreadsheets.",
      italic: "They fit in ongoing management.",
      leadPre: "Mental health at work, ",
      leadBold: "from assessment to training",
      leadRest:
        ", in a single environment. Technology integrated with OFG specialists who assess alongside your team.",
    },
    context: {
      eyebrow: "01 · What changed",
      strongA: "Since 26 May 2026,",
      strongB: "psychosocial risk",
      italic: "enters the PGR.",
      lead: "MTE Ordinance 1.419/2024 brought overload, harassment and low control into the risk inventory. The question from inspectors is now a different one: how does the company manage that risk.",
      stat1Text: "mental-disorder work leaves in Brazil in 2025.",
      stat1Mark: "A record.",
      stat2Text: "burnout leaves in two years.",
      cards: [
        { label: "Obligation", title: "Risk inventory", text: "Psychosocial factors are part of the PGR, alongside NR-17." },
        { label: "Exposure", title: "Fined per item", text: "Whoever fails to manage the risk is exposed to fines and liability." },
        { label: "Requirement", title: "A cycle, not a number", text: "Identify, assess, classify, control and monitor. Continuously." },
        { label: "Trap", title: "Run it and file it", text: "A questionnaire filed in a folder is not management. Without a plan and evidence, the PGR is weak." },
      ],
      sources: "Sources: Ministry of Social Security (2025); Fundacentro; NR-1, Ministry of Labour and Employment.",
      handnote: ["HR knows it must act.", "it doesn't know where to start."],
    },
    how: {
      eyebrow: "02 · How it works",
      strong: "A cycle.",
      italic: "Not a report.",
      lead: "Listen, analyse, plan, act and reassess, in the same environment. Each turn of the cycle measures again, with the same yardstick.",
      handnote: ["technology calculates.", "people decide."],
      stepsLabel: "Five steps · HR only hands out the links",
      steps: [
        { phase: "Listen", title: "Distribute", text: "A single-use link per employee and a QR code per area for those without email." },
        { phase: "Listen", title: "Answer", text: "On the phone, nothing to install. 11 short steps, with relief pauses, and answers kept on the device until sent." },
        { phase: "Listen", title: "Track", text: "Participation by area in real time. Areas below target are flagged." },
        { phase: "Analyse", title: "Results", text: "IGRP and IMO indices and dimensions ranked by criticality." },
        { phase: "Plan", title: "Action plan", text: "Measures by sector, with owners and deadlines, attachable to the PGR." },
      ],
      nextLink: "After the plan come execution and reassessment",
      noteBold: "OFG instrument in technical validation.",
      noteRest:
        " Running it and reading the results are always supported by OFG specialists, together with the client company's team.",
    },
    diagnosis: {
      eyebrow: "03 · Assessment",
      strong: "Not guesswork.",
      italic: "Working with evidence.",
      lead: "Risk stops being a single company number and gets an address. Each dimension is crossed with each area: leadership sees where the problem is and where to start.",
      handnote1: ["participation and map", "in real time"],
      tab: "hds · psychosocial report",
      crumb: "MENTAL HEALTH / SAMPLE COMPANY / RESULTS",
      title: "Results",
      captionPre: "Areas with fewer than five responses produce no result.",
      captionBold: "The empty column is intentional: it protects respondents.",
      handnote2: ["the empty column is intentional"],
    },
    anonymity: {
      eyebrow: "04 · Anonymity",
      strongA: "Without trust,",
      strongB: "the answer aims to please.",
      italic: "That's why anonymity is built into the system.",
      lead: "The guarantee is not a speech. It is written into the product, on the screen the employee reads before starting.",
      cards: [
        { glyph: "0", label: "No identifier", title: "Nothing that points to the person", text: "No name, email, IP or device data is stored." },
        { glyph: "1×", label: "No link", title: "Single-use link", text: "No record ties the answer to whoever received the link." },
        { glyph: "n≥5", label: "Minimum of five", title: "A small area doesn't show", text: "Below five responses, the area produces no result." },
        { glyph: "Σ", label: "Aggregate only", title: "Nothing individual", text: "No individual score reaches the employer." },
      ],
      closingBold: "It protects the employee and protects the company.",
      closingItalic: "Whoever never receives individual data cannot be accused of using it.",
      handnote: ["those who answer safely,", "answer truthfully."],
    },
    execution: {
      eyebrow: "05 · From report to execution",
      strong: "The report becomes a plan.",
      italic: "The plan becomes execution.",
      lead: "Each priority in the psychosocial report becomes a control measure per sector, with an owner and a deadline. Then execution begins, across the fronts the assessment pointed to, all recorded in the same environment.",
      handnote: ["each priority becomes a plan, with a deadline and an owner"],
      execLabel: "The executions",
      items: [
        { phase: "Plan", title: "Control measures per sector", text: "Priorities P1, P2 and P3 with owner and deadline: 0 to 30 days, up to 90 days, up to 6 months." },
        { phase: "Act", title: "Training tied to the assessment", text: "Training plans, courses and actions on the calendar, with OFG's certified training body." },
        { phase: "Act", title: "Attendance recorded", text: "QR check-in at every training session." },
        { phase: "Act", title: "Recorded in the PGR", text: "Plan and evidence in a format attachable to the PGR." },
        { phase: "Reassess", title: "Reassessment with the same yardstick", text: "Six months later, we measure again and compare before and after." },
      ],
    },
    deliverables: {
      eyebrow: "06 · Deliverables",
      strong: "What the company keeps",
      italic: "at the end of each cycle.",
      handnote: ["before and after,", "with the same yardstick"],
      items: [
        { title: "Psychosocial report", text: "By area and consolidated, dated and with the version of the instrument used." },
        { title: "Action plan per sector", text: "Control measures, owners and deadlines, in a format attachable to the PGR." },
        { title: "ESG indicators", text: "Indices by area and change between cycles for the Social pillar." },
        { title: "Evidence trail", text: "Every step of the cycle dated, for audit and inspection." },
      ],
      notNeededTitle: "What the company does not need to do",
      notNeeded: ["Install software", "Integrate systems", "Train staff to run the platform", "Create accounts for employees"],
      providesTitle: "What the company provides",
      provides: ["A list of areas with headcount", "One owner per area", "The campaign's internal communication", "Validation of the action plan"],
    },
    criteria: {
      eyebrow: "07 · Criteria",
      strong: "Technical comparison for NR-1.",
      italic: "Learn how to assess.",
      lead: "Not every solution delivers a management structure, even when it is technically valid as an assessment instrument. Side by side, the criteria that sustain the psychosocial PGR.",
      handnote: ["an instrument measures.", "management sustains."],
      howToReadBold: "How to read it:",
      howToReadText:
        " the comparison shows the differences between assessment instruments and management platforms, the limits of each approach and the elements that weigh in audits, inspections and decision-making.",
      comparisonHeader: "Criterion",
      comparisonAria: "Technical comparison of tools for NR-1",
      verdictYes: "Yes",
      verdictNo: "No",
      verdictDepends: "Depends on adaptation",
      scoreBarsLabel: "Yes/no criteria met",
    },
    proposal: {
      eyebrow: "08 · The offer",
      strong: "Beyond measurement.",
      italic: "Management that sustains decisions.",
      lead: "OFG HDS focuses on mental health at work and psychosocial risk management, offering solutions that go beyond measurement and sustain decision-making over time.",
      blocks: [
        {
          id: "inventario",
          label: "Psychosocial Inventory",
          title: "Assess with structure,",
          italic: "not with guesswork.",
          text: "The OFG HDS Psychosocial Inventory assesses psychosocial factors at work in a structured way, based on established models from Work Psychology and Activity Ergonomics.",
          bullets: [
            "Identification of psychosocial risk factors",
            "Analysis of the prevalence and intensity of risks",
            "Correlation between factors and impacts at work",
            "Generation of consistent data for the PGR",
          ],
          note: "The scales have validity and reliability studies, ensuring technical consistency and confidence in interpreting the results.",
        },
        {
          id: "gerenciador",
          label: "Psychosocial Risk Manager",
          title: "It turns data",
          italic: "into practical management.",
          text: "One of the main differentiators: the psychosocial assessment stops being an isolated event and becomes part of the PGR management routine.",
          bullets: [
            "Classify risks by level: low, medium and high",
            "Prioritise critical factors by area, role or group",
            "Track the evolution of indicators over time",
            "Support technical and strategic decisions",
          ],
          note: "",
        },
        {
          id: "matriz",
          label: "Psychosocial Risk Matrix",
          title: "Priorities in plain sight,",
          italic: "traceable decisions.",
          text: "The platform organises the results into a risk matrix. The matrix strengthens the traceability of decisions and supports the technical evidence required by NR-01.",
          bullets: [
            "Clear view of risk levels",
            "Quick identification of priorities",
            "Support for defining action plans",
            "Technical communication with OHS, HR, leadership and audits",
          ],
          note: "",
        },
      ],
    },
    nextStep: {
      label: "Next step",
      big: "A psychosocial assessment can be just a formal requirement or the basis of ongoing psychosocial risk management.",
      italic: "The difference is in the approach you choose.",
      text: "Our technical team can help you interpret this comparison and assess which path best fits your company's reality.",
      specialistCta: "Talk to a specialist",
      specialistMessage: "Hello! I'd like to talk to a specialist about the HDS technical comparison for NR-1.",
      requestCta: "Request assessment",
    },
    audience: {
      eyebrow: "09 · Who it's for",
      strong: "Companies where",
      italic: "NR-1 is already on the agenda.",
      audiences: [
        { lead: "Industry with an active PGR.", text: "A structured OHS team, missing the psychosocial dimension." },
        { lead: "Groups with several sites.", text: "Compare sites without relying on spreadsheets." },
        { lead: "Companies under ESG pressure.", text: "Social-pillar indicators backed by evidence." },
        { lead: "Schools, clinics and services.", text: "Teams by sector that need a fast assessment." },
        { lead: "OHS consultancies.", text: "The tool that feeds the PGR they already build." },
      ],
      signalsLabel: "signs it's time",
      signals: [
        "An audit or inspection scheduled",
        "PGR renewal",
        "A mental-health leave or a harassment case",
        "A client requirement in the supply chain",
        "The annual ESG report",
      ],
    },
    about: {
      eyebrow: "10 · Who's behind it",
      strong: "Since 1993, across four continents",
      italic: "and more than ten countries.",
      lead: "The Oporto Forte Group brings together its own platform, organisational-health specialists and a certified training body. The assessment points to the risk. Training helps correct it.",
      statFounded: "Year founded",
      statContinents: "Continents",
      statCountries: "Countries",
      statCycle: "A full cycle in one place",
    },
    contact: {
      eyebrow: "11 · Next step",
      strong: "Start with a pilot area,",
      italic: "free of charge.",
      lead: "The company tries the cycle in one area, sees the psychosocial report and decides based on results. The conversation about investment comes later.",
      handnote: ["simple to start"],
      whatsappCta: "Chat on WhatsApp",
      closingPlain: "2027 isn't about ticking a box.",
      closingItalic: "It's about sustaining.",
    },
    scales: [
      "Work demands",
      "Organisation and content of tasks",
      "Socio-professional relationships",
      "Working conditions",
      "Recognition, autonomy and support",
      "Psychosocial protective factors",
    ],
    scalesMock: {
      eyebrow: "Psychosocial inventory · scales",
      title: "Prevalence by scale",
      versionFull: "Full version",
      versionNr01: "NR-01 version",
      items: "items",
      high: "High",
      medium: "Medium",
      low: "Low",
      illustrative: "ILLUSTRATIVE DATA",
    },
    form: {
      title: "Free initial assessment",
      subtitle: "Answer in 1 minute. The OFG sales team replies within 2 business days.",
      nome: "Name",
      empresa: "Company",
      cargo: "Role",
      cargoPh: "e.g. HR Manager",
      whatsapp: "WhatsApp",
      whatsappPh: "(81) 9 0000-0000",
      email: "Work email",
      colaboradores: "Employees",
      select: "Select",
      areas: "Areas or sectors",
      interesse: "Interest",
      lgpd: "I authorise the Oporto Forte Group to use this data for commercial contact about NR-1, in accordance with the LGPD.",
      submit: "I want the assessment",
      submitting: "Sending...",
      colaboradoresOptions: ["Up to 50", "51 to 200", "201 to 500", "501 to 1,000", "Over 1,000"],
      areasOptions: ["1 to 3", "4 to 10", "Over 10"],
      interesseOptions: ["Free initial assessment", "Platform demo", "Commercial proposal"],
      successTitle: "Request received.",
      thanksPre: "Thank you, ",
      thanksPost: ". The OFG sales team will be in touch within 2 business days via the WhatsApp or email you gave.",
      fallbackTitle: "One step left.",
      fallbackPre: "We couldn't record the request on this page. Send the summary below to ",
      fallbackMid: " or on WhatsApp ",
      fallbackPost: ".",
      sendWhatsApp: "Send on WhatsApp",
      copyIdle: "Copy summary",
      copyDone: "Copied",
      copySelected: "Summary selected, press Ctrl+C",
      validation: {
        required: "Fill in name, company, WhatsApp, email and number of employees.",
        email: "Check the email: the domain is missing or there's a space.",
        lgpd: "Tick the LGPD authorisation so we can contact you.",
        telefone: "Check the WhatsApp: include area code and number.",
        nomeReq: "Enter your name.",
        empresaReq: "Enter the company.",
        telefoneReq: "Enter the WhatsApp.",
        emailReq: "Enter the email.",
        maxLen: "Use at most {max} characters.",
        colaboradoresReq: "Select the number of employees.",
        optionInvalid: "Select a valid option.",
      },
    },
  },
};
