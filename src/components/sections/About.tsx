"use client";

import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { CountUp } from "@/components/ui/CountUp";
import { TypeIn } from "@/components/ui/TypeIn";
import { useCopy } from "@/i18n/useCopy";

const NUMBER = "block text-[44px] font-bold leading-none tracking-[-0.04em] text-sun md:text-[52px]";

export function About() {
  const t = useCopy().about;
  return (
    <Section id="quem-somos" tone="navy" page={{ index: 12, next: "contato" }}>
      <SectionHeading tone="light" eyebrow={t.eyebrow} strong={t.strong} italic={t.italic} lead={t.lead} />

      <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
        <Reveal className="rounded-2xl border border-white/12 bg-white/[0.06] p-6 text-center">
          <TypeIn text="1993" className={`${NUMBER} justify-center`} />
          <p className="mt-3 text-[14px] text-white/75">{t.statFounded}</p>
        </Reveal>
        <Reveal delay={0.1} className="rounded-2xl border border-white/12 bg-white/[0.06] p-6 text-center">
          <CountUp to={4} className={NUMBER} />
          <p className="mt-3 text-[14px] text-white/75">{t.statContinents}</p>
        </Reveal>
        <Reveal delay={0.2} className="rounded-2xl border border-white/12 bg-white/[0.06] p-6 text-center">
          <CountUp to={10} suffix="+" className={NUMBER} />
          <p className="mt-3 text-[14px] text-white/75">{t.statCountries}</p>
        </Reveal>
        <Reveal delay={0.3} className="rounded-2xl border border-white/12 bg-white/[0.06] p-6 text-center">
          <CountUp to={1} className={NUMBER} />
          <p className="mt-3 text-[14px] text-white/75">{t.statCycle}</p>
        </Reveal>
      </div>
    </Section>
  );
}
