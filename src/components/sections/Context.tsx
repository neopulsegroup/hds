"use client";

import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CountUp } from "@/components/ui/CountUp";
import { Marker } from "@/components/ui/Marker";
import { Reveal } from "@/components/ui/Reveal";
import { Handnote } from "@/components/ui/Handnote";
import { InfoCards } from "@/components/ui/InfoCards";
import { useCopy } from "@/i18n/useCopy";

const NUMBER = "block text-[48px] font-bold leading-none tracking-[-0.045em] text-brand md:text-[56px]";

export function Context() {
  const t = useCopy().context;
  return (
    <Section id="contexto" tone="soft" page={{ index: 3, next: "como-funciona" }}>
      <div>
        <SectionHeading
          eyebrow={t.eyebrow}
          strong={
            <>
              {t.strongA}
              <br />
              {t.strongB}
            </>
          }
          italic={t.italic}
          lead={t.lead}
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          <Reveal className="rounded-2xl bg-white p-6 shadow-card">
            <CountUp to={546254} duration={2.2} className={NUMBER} />
            <p className="mt-3 text-[15px] leading-snug text-body">
              {t.stat1Text}{" "}
              <Marker variant="underline" delay={1.6}>
                {t.stat1Mark}
              </Marker>
            </p>
          </Reveal>
          <Reveal delay={0.12} className="rounded-2xl bg-white p-6 shadow-card">
            <CountUp to={4} from={1} prefix="×" duration={1.6} className={NUMBER} />
            <p className="mt-3 text-[15px] leading-snug text-body">{t.stat2Text}</p>
          </Reveal>
        </div>
      </div>

      <InfoCards items={t.cards} className="mt-14" />

      <div className="mt-12 flex flex-col-reverse gap-8 md:flex-row md:items-end md:justify-between">
        <p className="max-w-[420px] text-[12px] leading-relaxed text-faint">{t.sources}</p>
        <Handnote
          lines={t.handnote}
          arrow="curl-up-left"
          arrowPosition="before"
          arrowClassName="w-16 md:w-24 self-start"
          size="lg"
        />
      </div>
    </Section>
  );
}
