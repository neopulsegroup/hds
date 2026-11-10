"use client";

import type { ReactNode } from "react";
import { Check } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ScalesMock } from "@/components/mocks/ScalesMock";
import { EvolutionMock } from "@/components/mocks/EvolutionMock";
import { RiskMatrixMock } from "@/components/mocks/RiskMatrixMock";
import { NextStepBand } from "./NextStepBand";
import { useCopy } from "@/i18n/useCopy";
import type { ProposalBlock } from "@/i18n/copy";

const MOCKS: Record<ProposalBlock["id"], ReactNode> = {
  inventario: <ScalesMock />,
  gerenciador: <EvolutionMock />,
  matriz: <RiskMatrixMock />,
};

export function Proposal() {
  const t = useCopy().proposal;
  return (
    <Section id="proposta" tone="soft" page={{ index: 10, next: "para-quem" }}>
      <SectionHeading eyebrow={t.eyebrow} strong={t.strong} italic={t.italic} lead={t.lead} />

      <div className="mt-16 space-y-20 md:space-y-24">
        {t.blocks.map((block, i) => {
          const isReversed = i % 2 === 1;
          return (
            <div key={block.id} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
              <Reveal x={isReversed ? 30 : -30} y={0} className={isReversed ? "lg:order-2" : ""}>
                <p className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-brand">
                  {String(i + 1).padStart(2, "0")} · {block.label}
                </p>
                <h3 className="mt-3 text-[30px] leading-[1.02] md:text-[40px]">
                  <span className="block font-bold tracking-[-0.03em] text-ink">{block.title}</span>
                  <span className="block font-serif text-[1.05em] italic text-brand">{block.italic}</span>
                </h3>
                <p className="mt-4 text-[16.5px] leading-relaxed text-body">{block.text}</p>
                <ul className="mt-5 space-y-2.5">
                  {block.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3 text-[15.5px] text-body">
                      <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-ok text-white">
                        <Check className="size-3" strokeWidth={3.2} aria-hidden />
                      </span>
                      {bullet}
                    </li>
                  ))}
                </ul>
                {block.note && <p className="mt-5 text-[13.5px] leading-relaxed text-muted">{block.note}</p>}
              </Reveal>
              <Reveal delay={0.15} y={40} className={isReversed ? "lg:order-1" : ""}>
                {MOCKS[block.id]}
              </Reveal>
            </div>
          );
        })}
      </div>

      <NextStepBand />
    </Section>
  );
}
