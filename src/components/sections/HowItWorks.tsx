"use client";

import { ArrowDown } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Handnote } from "@/components/ui/Handnote";
import { CycleDiagram } from "@/components/mocks/CycleDiagram";
import { ListenVisual } from "./ListenVisual";
import { useCopy } from "@/i18n/useCopy";

export function HowItWorks() {
  const t = useCopy().how;
  return (
    <Section id="como-funciona" page={{ index: 4, next: "diagnostico" }}>
      <SectionHeading eyebrow={t.eyebrow} strong={t.strong} italic={t.italic} lead={t.lead} />

      <div className="mt-14 grid items-center gap-14 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <div className="px-8 sm:px-12">
            <CycleDiagram />
          </div>
          <Handnote className="mt-6 justify-center" lines={t.handnote} size="lg" />
        </div>

        <div>
          <Reveal>
            <p className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-brand">{t.stepsLabel}</p>
          </Reveal>
          <ol className="relative mt-6 space-y-6">
            <span className="absolute bottom-6 left-[17px] top-6 w-px bg-brand-soft" aria-hidden />
            {t.steps.map((step, i) => (
              <li key={step.title}>
                <Reveal delay={i * 0.1} x={24} y={0} className="relative flex items-start gap-4">
                  <span className="relative grid size-9 shrink-0 place-items-center rounded-full bg-brand text-[14px] font-bold text-white shadow-[0_0_0_6px_#ffffff]">
                    {i + 1}
                  </span>
                  <span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-faint">{step.phase}</span>
                    <b className="block text-[18px] font-bold tracking-[-0.01em] text-ink">{step.title}</b>
                    <span className="mt-0.5 block text-[15px] leading-snug text-sub">{step.text}</span>
                  </span>
                </Reveal>
              </li>
            ))}
          </ol>
          <Reveal delay={0.6} className="mt-6 pl-[52px]">
            <a
              href="#execucao"
              className="group inline-flex items-center gap-1.5 text-[14px] font-semibold text-brand hover:underline"
            >
              {t.nextLink}
              <ArrowDown className="size-4 transition-transform group-hover:translate-y-0.5" aria-hidden />
            </a>
          </Reveal>
        </div>
      </div>

      <ListenVisual />

      <Reveal className="mt-10 rounded-xl border-l-4 border-sun bg-page px-5 py-4 text-[14px] leading-relaxed text-sub">
        <b className="text-ink">{t.noteBold}</b>
        {t.noteRest}
      </Reveal>
    </Section>
  );
}
