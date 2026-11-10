"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { CountUp } from "@/components/ui/CountUp";
import { CRITICALITY, criticalityClass } from "@/lib/mock-data";
import { useMocks } from "@/i18n/useCopy";

export function CriticalityMatrix() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const rows = CRITICALITY.length;
  const m = useMocks();

  return (
    <div ref={ref} className="h-full rounded-2xl border border-line bg-white p-4 shadow-card">
      <p className="font-mono text-[8.5px] tracking-[0.14em] text-faint">{m.criticalityTitle}</p>
      <div className="mt-3 grid grid-cols-3 gap-1.5">
        {CRITICALITY.map((row, r) =>
          row.map((value, c) => {
            const delay = 0.15 + (rows - 1 - r + c) * 0.12;
            return (
              <motion.div
                key={`${r}-${c}`}
                className={`grid h-[30px] place-items-center rounded-md text-[12px] font-bold ${criticalityClass(r, c, rows)}`}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : undefined}
                transition={{ delay, type: "spring", stiffness: 280, damping: 18 }}
              >
                <CountUp to={value} start={isInView} delay={delay} duration={0.8} />
              </motion.div>
            );
          }),
        )}
      </div>
    </div>
  );
}
