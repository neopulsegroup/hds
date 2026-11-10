"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useMocks } from "@/i18n/useCopy";

const HALF_CYCLE_S = 4;

/** Pausa de alívio: o círculo respira (expande e contrai) em loop. */
export function BreathScreen() {
  const shouldReduce = useReducedMotion();
  const m = useMocks();
  const [isInhale, setIsInhale] = useState(true);

  useEffect(() => {
    if (shouldReduce) return;
    const id = window.setInterval(() => setIsInhale((v) => !v), HALF_CYCLE_S * 1000);
    return () => window.clearInterval(id);
  }, [shouldReduce]);

  return (
    <div className="flex h-full flex-col items-center bg-gradient-to-b from-brand to-[#06315f] px-6 pt-20 text-center text-white">
      <p className="font-mono text-[10px] tracking-[0.3em] text-white/60">{m.quickPause}</p>

      <div className="relative mt-10 grid size-[170px] place-items-center">
        <motion.span
          className="absolute inset-0 rounded-full border border-white/25"
          animate={{ scale: [1, 1.35], opacity: [0.6, 0] }}
          transition={{ duration: HALF_CYCLE_S, repeat: Infinity, ease: "easeOut" }}
        />
        <motion.span
          className="absolute inset-0 rounded-full border border-white/40 bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.65),rgba(255,255,255,0.12)_70%)]"
          animate={{ scale: [0.78, 1.04, 0.78] }}
          transition={{ duration: HALF_CYCLE_S * 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <AnimatePresence mode="wait">
          <motion.span
            key={isInhale ? "in" : "out"}
            className="relative font-mono text-[10px] tracking-[0.24em] text-white/90"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.5 }}
          >
            {isInhale ? m.inhale : m.exhale}
          </motion.span>
        </AnimatePresence>
      </div>

      <p className="mt-10 text-[21px] font-bold">{m.breatheDeep}</p>
      <p className="mt-2 text-[12.5px] leading-relaxed text-white/80">
        {m.breathProgress}
        <br />
        {m.breathPace}
      </p>
    </div>
  );
}
