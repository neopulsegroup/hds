"use client";

import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Marker } from "@/components/ui/Marker";
import { ProgramVisual } from "./ProgramVisual";
import { useCopy } from "@/i18n/useCopy";

export function Program() {
  const t = useCopy().program;
  return (
    <Section id="gestao-continua" className="border-t border-line" page={{ index: 2, next: "contexto" }}>
      <SectionHeading
        size="lg"
        eyebrow={t.eyebrow}
        strong={
          <>
            {t.strongA}
            <br />
            {t.strongPre}
            <Marker delay={0.7}>{t.strongMark}</Marker>
          </>
        }
        italic={t.italic}
        lead={
          <>
            {t.leadPre}
            <b className="font-semibold text-ink">{t.leadBold}</b>
            {t.leadRest}
          </>
        }
      />
      <ProgramVisual />
    </Section>
  );
}
