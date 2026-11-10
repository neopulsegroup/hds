"use client";

import type { ReactNode } from "react";
import { ArrowDown } from "lucide-react";
import { NAV_LABELS, type NavId } from "@/lib/i18n";
import { useLocale } from "@/components/i18n/LocaleProvider";

export type Tone = "white" | "soft" | "navy";

type Props = {
  id: string;
  tone?: Tone;
  children: ReactNode;
  /** Rodapé tipo página do PDF: "02 / 13 · O QUE MUDOU ↓". O rótulo vem do i18n. */
  page?: { index: number; next?: NavId };
  className?: string;
  isHero?: boolean;
};

export const TOTAL_PAGES = 13;

const BACKGROUNDS: Record<Tone, string> = {
  white: "bg-white",
  soft: "bg-page",
  navy: "bg-[linear-gradient(135deg,#062544_0%,#073a70_45%,#0a4f96_100%)] text-white",
};

export function Section({ id, tone = "white", children, page, className, isHero = false }: Props) {
  const top = isHero ? "pt-28 md:pt-36" : "pt-20 md:pt-28";
  return (
    <section id={id} className={`relative scroll-mt-16 overflow-x-clip ${BACKGROUNDS[tone]} ${className ?? ""}`}>
      <div className={`relative mx-auto max-w-[1120px] px-4 pb-10 md:px-8 ${top}`}>
        {children}
        {page && <PageFooter index={page.index} next={page.next} isLight={tone === "navy"} />}
      </div>
    </section>
  );
}

type FooterProps = { index: number; next?: NavId; isLight: boolean };

function PageFooter({ index, next, isLight }: FooterProps) {
  const { locale } = useLocale();
  const counter = `${String(index).padStart(2, "0")} / ${String(TOTAL_PAGES).padStart(2, "0")}`;
  const color = isLight ? "text-white/50" : "text-faint";
  const hover = isLight ? "hover:text-white" : "hover:text-brand";
  return (
    <div className={`mt-20 flex items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-[0.18em] ${color}`}>
      <span className="hidden sm:inline">OFG HDS · Human Development Solutions</span>
      {next ? (
        <a href={`#${next}`} className={`group inline-flex items-center gap-1.5 transition-colors ${hover}`}>
          {counter} · {NAV_LABELS[locale][next]}
          <ArrowDown className="size-3.5 transition-transform group-hover:translate-y-0.5" aria-hidden />
        </a>
      ) : (
        <span>{counter}</span>
      )}
    </div>
  );
}
