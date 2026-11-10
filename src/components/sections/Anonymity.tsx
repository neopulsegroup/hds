"use client";

import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Handnote } from "@/components/ui/Handnote";
import { InfoCards } from "@/components/ui/InfoCards";
import { useCopy } from "@/i18n/useCopy";

export function Anonymity() {
  const t = useCopy().anonymity;
  return (
    <Section id="anonimato" tone="navy" page={{ index: 6, next: "execucao" }}>
      <div
        className="pointer-events-none absolute -left-40 top-10 size-[520px] rounded-full bg-[radial-gradient(circle,rgba(156,196,242,0.16),transparent_65%)]"
        aria-hidden
      />
      <SectionHeading
        tone="light"
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

      <InfoCards items={t.cards} tone="light" className="mt-14" />

      <div className="mt-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <Reveal className="max-w-[560px]">
          <p className="text-[20px] font-bold leading-snug tracking-[-0.01em] text-white md:text-[24px]">
            {t.closingBold}
          </p>
          <p className="mt-1 font-serif text-[20px] italic leading-snug text-[#9cc4f2] md:text-[24px]">
            {t.closingItalic}
          </p>
        </Reveal>
        <Handnote tone="light" lines={t.handnote} size="lg" />
      </div>
    </Section>
  );
}
