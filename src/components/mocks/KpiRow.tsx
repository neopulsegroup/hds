"use client";

import { useRef, type ReactNode } from "react";
import { motion, useInView } from "motion/react";
import { CountUp } from "@/components/ui/CountUp";
import { useMocks } from "@/i18n/useCopy";

const CHIPS = [
  { label: "P1 · 3", className: "bg-[#fbe1de] text-[#b8382d]" },
  { label: "P2 · 2", className: "bg-[#fdf0c4] text-[#a06a00]" },
  { label: "P3 · 24", className: "bg-brand-tint text-brand" },
] as const;

export function KpiRow() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const m = useMocks();

  return (
    <div ref={ref} className="grid grid-cols-3 gap-2.5">
      <Kpi label={m.igrp} index={0} isInView={isInView}>
        <CountUp to={2.8} decimals={1} start={isInView} className="text-[24px] font-bold text-ink" />
        <span className="rounded bg-[#fdf0c4] px-1.5 py-0.5 font-mono text-[8px] font-bold text-[#a06a00]">{m.attention}</span>
      </Kpi>
      <Kpi label={m.imo} index={1} isInView={isInView}>
        <CountUp to={3.4} decimals={1} start={isInView} delay={0.1} className="text-[24px] font-bold text-ink" />
        <span className="rounded bg-[#ddf3e6] px-1.5 py-0.5 font-mono text-[8px] font-bold text-[#17834a]">{m.good}</span>
      </Kpi>
      <Kpi label={m.priorities} index={2} isInView={isInView}>
        {CHIPS.map((chip, i) => (
          <motion.span
            key={chip.label}
            className={`rounded px-1.5 py-1 font-mono text-[8.5px] font-bold ${chip.className}`}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={isInView ? { opacity: 1, scale: 1 } : undefined}
            transition={{ delay: 0.6 + i * 0.15, type: "spring", stiffness: 320, damping: 18 }}
          >
            {chip.label}
          </motion.span>
        ))}
      </Kpi>
    </div>
  );
}

type KpiProps = { label: string; index: number; isInView: boolean; children: ReactNode };

function Kpi({ label, index, isInView, children }: KpiProps) {
  return (
    <motion.div
      className="rounded-xl border border-line bg-white px-3 py-2.5"
      initial={{ opacity: 0, y: 14 }}
      animate={isInView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
    >
      <p className="font-mono text-[8.5px] tracking-[0.12em] text-faint">{label}</p>
      <div className="mt-1.5 flex min-h-[30px] items-center gap-2">{children}</div>
    </motion.div>
  );
}
