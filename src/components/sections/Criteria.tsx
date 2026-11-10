"use client";

import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Handnote } from "@/components/ui/Handnote";
import { ComparisonTable } from "@/components/mocks/ComparisonTable";
import { ScoreBars } from "@/components/mocks/ScoreBars";
import { useCopy } from "@/i18n/useCopy";

export function Criteria() {
  const t = useCopy().criteria;
  return (
    <Section id="criterio" page={{ index: 9, next: "proposta" }}>
      <div className="grid gap-10 lg:grid-cols-[1.25fr_1fr] lg:items-end">
        <SectionHeading eyebrow={t.eyebrow} strong={t.strong} italic={t.italic} lead={t.lead} />
        <Reveal delay={0.2}>
          <ScoreBars />
        </Reveal>
      </div>

      <div className="mt-8 flex justify-end">
        <Handnote lines={t.handnote} arrow="down-right" arrowClassName="w-[70px] -mb-8" size="lg" />
      </div>

      <div className="mt-4">
        <ComparisonTable />
      </div>

      <Reveal className="mt-8 rounded-xl border-l-4 border-brand bg-page px-5 py-4 text-[14.5px] leading-relaxed text-sub">
        <b className="text-ink">{t.howToReadBold}</b>
        {t.howToReadText}
      </Reveal>
    </Section>
  );
}
