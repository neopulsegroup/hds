"use client";

import { useRef } from "react";
import { AnimatePresence, motion, useInView } from "motion/react";
import { useCycle } from "./useCycle";
import { useMocks } from "@/i18n/useCopy";

type Pair = readonly [before: number, after: number];

/* Só números por vista; os rótulos vêm de useMocks(), index-alinhados. */
const VALUES: readonly (readonly Pair[])[] = [
  [[71, 54], [82, 63], [62, 45], [34, 29]],
  [[74, 58], [66, 47], [48, 39], [57, 42]],
  [[69, 51], [78, 61], [55, 44], [38, 31]],
];

function levelBar(value: number): string {
  if (value >= 60) return "bg-alert";
  if (value >= 40) return "bg-warn";
  return "bg-ok";
}

/** Gerenciador: evolução do índice de risco entre ciclos, alternando por área, função e grupo. */
export function EvolutionMock() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });
  const m = useMocks();
  const viewIndex = useCycle(ref, VALUES.length, 3400);
  const names = [m.evoAreaItems, m.evoFuncItems, m.evoGroupItems];
  const values = VALUES[viewIndex];
  const itemNames = names[viewIndex];

  return (
    <div ref={ref} className="rounded-2xl border border-line bg-white p-5 shadow-float md:p-6">
      <p className="font-mono text-[9.5px] uppercase tracking-[0.16em] text-faint">{m.evoManager}</p>
      <div className="mt-1 flex flex-wrap items-center justify-between gap-3">
        <p className="text-[15px] font-bold text-ink">{m.evoTitle}</p>
        <div className="flex rounded-full bg-page p-1 text-[11px] font-semibold">
          {m.evoTabs.map((tab, i) => (
            <span key={tab} className={`relative z-10 px-3 py-1.5 transition-colors ${i === viewIndex ? "text-white" : "text-sub"}`}>
              {i === viewIndex && (
                <motion.span layoutId="evolution-tab" className="absolute inset-0 -z-10 rounded-full bg-brand" transition={{ type: "spring", stiffness: 380, damping: 30 }} />
              )}
              {tab}
            </span>
          ))}
        </div>
      </div>

      <div className="relative mt-5 h-[180px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={viewIndex}
            className="absolute inset-0 grid grid-cols-4 items-end gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {values.map(([before, after], i) => (
              <div key={itemNames[i]} className="flex h-full flex-col justify-end">
                <div className="flex h-[150px] items-end justify-center gap-1.5">
                  <motion.span
                    className="w-4 rounded-t-md bg-[#cfd6e0]"
                    initial={{ height: 0 }}
                    animate={isInView ? { height: `${before}%` } : undefined}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 + i * 0.08 }}
                  />
                  <motion.span
                    className={`w-4 rounded-t-md ${levelBar(after)}`}
                    initial={{ height: 0 }}
                    animate={isInView ? { height: `${after}%` } : undefined}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.35 + i * 0.08 }}
                  />
                </div>
                <span className="mt-2 truncate text-center text-[11px] text-sub">{itemNames[i]}</span>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-[10.5px] text-muted">
        <span className="inline-flex items-center gap-1.5"><i className="size-2.5 rounded-sm bg-[#cfd6e0]" />{m.evoCycle1}</span>
        <span className="inline-flex items-center gap-1.5"><i className="size-2.5 rounded-sm bg-ok" />{m.evoLow}</span>
        <span className="inline-flex items-center gap-1.5"><i className="size-2.5 rounded-sm bg-warn" />{m.evoMedium}</span>
        <span className="inline-flex items-center gap-1.5"><i className="size-2.5 rounded-sm bg-alert" />{m.evoHigh}</span>
        <span className="ml-auto font-mono text-[9px] tracking-[0.14em] text-faint">{m.evoCycle2}</span>
      </div>
    </div>
  );
}
