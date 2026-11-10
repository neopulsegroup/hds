"use client";

import { Check, X } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Handnote } from "@/components/ui/Handnote";
import { InfoCards } from "@/components/ui/InfoCards";
import { useCopy } from "@/i18n/useCopy";

type ListProps = { title: string; items: readonly string[]; variant: "no" | "yes"; delay?: number };

function CheckList({ title, items, variant, delay = 0 }: ListProps) {
  const isNo = variant === "no";
  const Icon = isNo ? X : Check;
  return (
    <Reveal
      delay={delay}
      className={`rounded-2xl border border-line bg-white p-6 shadow-card md:p-7 ${isNo ? "border-l-4 border-l-[#2fa8e0]" : "border-l-4 border-l-sun"}`}
    >
      <b className="text-[18px] font-bold text-ink">{title}</b>
      <ul className="mt-4">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-3 border-b border-dashed border-[#d8dee8] py-3 last:border-0">
            <span
              className={`grid size-6 shrink-0 place-items-center rounded-full text-white ${isNo ? "bg-danger" : "bg-ok"}`}
            >
              <Icon className="size-3.5" strokeWidth={3} aria-hidden />
            </span>
            <span className="text-[15.5px] text-body">{item}</span>
          </li>
        ))}
      </ul>
    </Reveal>
  );
}

export function Deliverables() {
  const t = useCopy().deliverables;
  return (
    <Section id="entregaveis" tone="soft" page={{ index: 8, next: "criterio" }}>
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeading eyebrow={t.eyebrow} strong={t.strong} italic={t.italic} />
        <Handnote lines={t.handnote} arrow="down-right" arrowClassName="w-[70px] -mb-8" size="lg" />
      </div>

      <InfoCards items={t.items} className="mt-12" />

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <CheckList title={t.notNeededTitle} items={t.notNeeded} variant="no" />
        <CheckList title={t.providesTitle} items={t.provides} variant="yes" delay={0.12} />
      </div>
    </Section>
  );
}
