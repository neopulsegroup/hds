"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ACTION_PLAN_META } from "@/lib/mock-data";
import { useMocks } from "@/i18n/useCopy";

const TONES = {
  p1: "bg-[#fbe1de] text-[#b8382d]",
  p2: "bg-[#fdf0c4] text-[#a06a00]",
  p3: "bg-brand-tint text-brand",
} as const;

export function ActionPlan() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const m = useMocks();

  return (
    <div ref={ref} className="h-full rounded-2xl border border-line bg-white p-4 shadow-card">
      <p className="font-mono text-[8.5px] tracking-[0.14em] text-faint">{m.actionPlanTitle}</p>
      <ul className="mt-3 space-y-2">
        {ACTION_PLAN_META.map((item, i) => (
          <motion.li
            key={item.tag}
            className="flex items-center gap-3 rounded-xl border border-line px-3 py-2"
            initial={{ opacity: 0, x: 36 }}
            animate={isInView ? { opacity: 1, x: 0 } : undefined}
            transition={{ delay: 0.4 + i * 0.22, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className={`rounded px-1.5 py-1 font-mono text-[9px] font-bold ${TONES[item.tone]}`}>{item.tag}</span>
            <span className="leading-tight">
              <b className="block text-[11.5px] text-ink">{m.actionPlan[i]?.title}</b>
              <span className="text-[9.5px] text-muted">{m.actionPlan[i]?.deadline}</span>
            </span>
            <motion.span
              className="ml-auto h-1.5 w-12 overflow-hidden rounded-full bg-[#eef1f5]"
              aria-hidden
            >
              <motion.span
                className="block h-full rounded-full bg-brand"
                initial={{ width: "0%" }}
                animate={isInView ? { width: `${[25, 55, 80][i]}%` } : undefined}
                transition={{ delay: 1.1 + i * 0.22, duration: 1.2, ease: "easeOut" }}
              />
            </motion.span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
