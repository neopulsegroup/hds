"use client";

import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { useCopy } from "@/i18n/useCopy";

export function Audience() {
  const t = useCopy().audience;
  return (
    <Section id="para-quem" page={{ index: 11, next: "quem-somos" }}>
      <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:items-start">
        <div>
          <SectionHeading eyebrow={t.eyebrow} strong={t.strong} italic={t.italic} />
          <ul className="mt-10">
            {t.audiences.map((item, i) => (
              <li key={item.lead}>
                <Reveal delay={i * 0.08} x={-20} y={0} className="flex items-start gap-3 border-b border-dashed border-[#d8dee8] py-4">
                  <span className="mt-2 size-2 shrink-0 rounded-sm bg-brand" aria-hidden />
                  <p className="text-[16px] leading-snug text-body">
                    <b className="text-ink">{item.lead}</b> {item.text}
                  </p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>

        <Reveal delay={0.2} className="rounded-2xl border-2 border-dashed border-sun bg-sun-soft p-7 lg:mt-32">
          <span className="font-hand text-[28px] text-brand">{t.signalsLabel}</span>
          <ul className="mt-4 space-y-3">
            {t.signals.map((signal) => (
              <li key={signal} className="flex items-start gap-3 text-[15.5px] text-body">
                <span className="mt-[7px] size-2 shrink-0 rounded-full bg-sun ring-2 ring-white" aria-hidden />
                {signal}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
