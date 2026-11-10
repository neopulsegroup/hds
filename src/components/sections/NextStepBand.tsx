"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { whatsappHref } from "@/lib/site";
import { useCopy } from "@/i18n/useCopy";

/** Fecho do comparativo: requisito formal ou gestão contínua, e o próximo passo. */
export function NextStepBand() {
  const t = useCopy().nextStep;
  return (
    <motion.div
      className="relative mt-20 overflow-hidden rounded-3xl bg-[linear-gradient(135deg,#062544_0%,#073a70_45%,#0a4f96_100%)] px-6 py-10 text-white md:px-12 md:py-14"
      initial={{ opacity: 0, y: 40, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.span
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 size-[360px] rounded-full border border-white/10"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.span
        aria-hidden
        className="pointer-events-none absolute -right-6 -top-6 size-[210px] rounded-full border border-white/10"
        animate={{ scale: [1.06, 1, 1.06] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-end">
        <div>
          <p className="font-mono text-[11px] font-bold uppercase tracking-[0.24em] text-[#9cc4f2]">{t.label}</p>
          <p className="mt-4 text-[24px] font-bold leading-[1.15] tracking-[-0.02em] md:text-[34px]">{t.big}</p>
          <p className="mt-2 font-serif text-[26px] italic text-[#9cc4f2] md:text-[36px]">{t.italic}</p>
        </div>
        <div>
          <p className="text-[16px] leading-relaxed text-white/80">{t.text}</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
            <a
              href={whatsappHref(t.specialistMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-white px-6 py-3.5 text-[15px] font-semibold text-brand transition hover:-translate-y-0.5"
            >
              <WhatsAppIcon className="size-5 text-whats" />
              {t.specialistCta}
            </a>
            <a
              href="#contato"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-sun px-6 py-3.5 text-[15px] font-semibold text-ink transition hover:-translate-y-0.5"
            >
              {t.requestCta}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
