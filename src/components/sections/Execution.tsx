"use client";

import { Check } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Handnote } from "@/components/ui/Handnote";
import { CriticalityMatrix } from "@/components/mocks/CriticalityMatrix";
import { ActionPlan } from "@/components/mocks/ActionPlan";
import { Timeline } from "@/components/mocks/Timeline";
import { ActVisual } from "./ActVisual";
import { useCopy } from "@/i18n/useCopy";

export function Execution() {
  const t = useCopy().execution;
  return (
    <Section id="execucao" page={{ index: 7, next: "entregaveis" }}>
      <SectionHeading eyebrow={t.eyebrow} strong={t.strong} italic={t.italic} lead={t.lead} />

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        <Reveal>
          <CriticalityMatrix />
        </Reveal>
        <Reveal delay={0.15}>
          <ActionPlan />
        </Reveal>
      </div>
      <Handnote className="mt-6 justify-center" lines={t.handnote} />

      <ActVisual />

      <Reveal className="mt-12 rounded-2xl border border-line bg-white p-6 shadow-card md:p-8">
        <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-brand">{t.execLabel}</p>
        <ul className="mt-6 grid gap-x-10 gap-y-6 md:grid-cols-2">
          {t.items.map((item, i) => (
            <li key={item.title}>
              <Reveal delay={0.08 * i} y={12} className="flex items-start gap-3">
                <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-ok text-white">
                  <Check className="size-3.5" strokeWidth={3} aria-hidden />
                </span>
                <span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-faint">{item.phase}</span>
                  <b className="block text-[16.5px] font-bold text-ink">{item.title}</b>
                  <span className="mt-0.5 block text-[14.5px] leading-snug text-sub">{item.text}</span>
                </span>
              </Reveal>
            </li>
          ))}
        </ul>
      </Reveal>

      <div className="mt-14">
        <Timeline />
      </div>
    </Section>
  );
}
