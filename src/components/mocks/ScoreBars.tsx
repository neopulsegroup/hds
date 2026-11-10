"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { CountUp } from "@/components/ui/CountUp";
import { SCORES } from "@/lib/comparison";
import { useCopy } from "@/i18n/useCopy";

/** Resumo do comparativo: critérios sim/não atendidos por ferramenta. */
export function ScoreBars() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const label = useCopy().criteria.scoreBarsLabel;

  return (
    <div ref={ref} className="rounded-2xl border border-line bg-white p-5 shadow-card md:p-6">
      <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-faint">{label}</p>
      <ul className="mt-4 space-y-3">
        {SCORES.map((score, i) => {
          const isHds = i === 0;
          return (
            <li key={score.tool} className="grid grid-cols-[88px_1fr_56px] items-center gap-3">
              <span className={`text-[14px] ${isHds ? "font-bold text-brand" : "font-medium text-sub"}`}>{score.tool}</span>
              <span className="h-2.5 overflow-hidden rounded-full bg-[#eef1f5]">
                <motion.span
                  className={`block h-full rounded-full ${isHds ? "bg-brand" : "bg-[#b9c2cf]"}`}
                  initial={{ width: "0%" }}
                  animate={isInView ? { width: `${(score.met / score.total) * 100}%` } : undefined}
                  transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1], delay: 0.2 + i * 0.15 }}
                />
              </span>
              <span className={`text-right text-[14px] tabular-nums ${isHds ? "font-bold text-ink" : "text-sub"}`}>
                <CountUp to={score.met} start={isInView} delay={0.2 + i * 0.15} duration={1.3} />/{score.total}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
