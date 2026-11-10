"use client";

import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Marker } from "@/components/ui/Marker";
import { Reveal } from "@/components/ui/Reveal";
import { Handnote } from "@/components/ui/Handnote";
import { LeadForm } from "@/components/form/LeadForm";
import { useCopy } from "@/i18n/useCopy";

export function Hero() {
  const t = useCopy().hero;
  return (
    <Section id="topo" isHero page={{ index: 1, next: "gestao-continua" }}>
      <div
        className="pointer-events-none absolute -right-40 -top-20 size-[620px] rounded-full bg-[radial-gradient(circle,rgba(10,79,150,0.10),transparent_65%)]"
        aria-hidden
      />
      <div className="grid items-start gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14">
        <div className="lg:pt-6">
          <SectionHeading
            as="h1"
            size="lg"
            eyebrow={t.eyebrow}
            strong={
              <>
                {t.strongA}
                <br />
                {t.strongB}
              </>
            }
            italic={
              <>
                {t.italicPre} <Marker delay={0.9}>{t.italicMark}</Marker>
              </>
            }
            lead={
              <>
                <b className="font-semibold text-ink">{t.leadBold}</b> {t.leadRest}
              </>
            }
          />

          <Reveal delay={0.5} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#form-topo"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 text-[15px] font-semibold text-white shadow-[0_14px_30px_-12px_rgba(10,79,150,0.7)] transition hover:-translate-y-0.5 hover:bg-brand-deep"
            >
              {t.ctaPrimary}
            </a>
            <a
              href="#como-funciona"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-line bg-white px-6 py-3.5 text-[15px] font-semibold text-ink transition hover:border-brand hover:text-brand"
            >
              {t.ctaSecondary}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
            </a>
          </Reveal>

          <Reveal delay={0.65} className="mt-7 flex flex-wrap gap-2">
            {t.trust.map((item) => (
              <span
                key={item}
                className="rounded-full border border-line bg-white px-3 py-1.5 font-mono text-[10.5px] uppercase tracking-[0.12em] text-sub"
              >
                {item}
              </span>
            ))}
          </Reveal>

          <Handnote
            className="mt-10 hidden justify-end lg:flex"
            lines={t.handnote}
            arrow="down-right"
            arrowClassName="w-[84px] -mb-6 rotate-[-20deg]"
            delay={1.4}
            size="lg"
          />
        </div>

        <Reveal y={40} delay={0.3}>
          <div id="form-topo" className="scroll-mt-24">
            <LeadForm origin="topo" />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
