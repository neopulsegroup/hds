"use client";

import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Handnote } from "@/components/ui/Handnote";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { LeadForm } from "@/components/form/LeadForm";
import { OFFICES } from "@/lib/content";
import { WHATSAPP_DISPLAY, whatsappHref } from "@/lib/site";
import { useCopy } from "@/i18n/useCopy";

export function Contact() {
  const t = useCopy().contact;
  return (
    <Section id="contato" page={{ index: 13 }}>
      <div className="grid items-start gap-12 lg:grid-cols-[1fr_1fr] lg:gap-14">
        <div>
          <SectionHeading eyebrow={t.eyebrow} strong={t.strong} italic={t.italic} lead={t.lead} />
          <Handnote className="mt-6" lines={t.handnote} size="lg" />

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {OFFICES.map((office, i) => (
              <Reveal key={office.country} delay={i * 0.1} className="rounded-2xl border border-line bg-page p-5">
                <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-brand">{office.country}</p>
                <address className="mt-2 text-[14px] not-italic leading-relaxed text-sub">
                  {office.lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                  <span className="block">{office.phone}</span>
                  <a href={`mailto:${office.email}`} className="block text-brand hover:underline">
                    {office.email}
                  </a>
                </address>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} className="mt-6">
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full border border-line bg-white px-5 py-3 text-[15px] font-semibold text-ink transition hover:border-whats"
            >
              <WhatsAppIcon className="size-5 text-whats" />
              {t.whatsappCta} · {WHATSAPP_DISPLAY}
            </a>
          </Reveal>
        </div>

        <Reveal y={40}>
          <div id="form-fim" className="scroll-mt-24">
            <LeadForm origin="fecho" />
          </div>
        </Reveal>
      </div>

      <Reveal className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-line pt-10 sm:flex-row sm:items-center">
        <p className="text-[24px] font-bold tracking-[-0.02em] text-ink md:text-[30px]">
          {t.closingPlain}{" "}
          <span className="font-serif text-[1.08em] font-normal italic text-brand">{t.closingItalic}</span>
        </p>
        <Image
          src="/ofg-hds-logo.svg"
          alt="OFG HDS · Human Development Solutions"
          width={505}
          height={126}
          unoptimized
          className="h-12 w-auto md:h-14"
        />
      </Reveal>
    </Section>
  );
}
