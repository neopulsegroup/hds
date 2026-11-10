"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { useMocks } from "@/i18n/useCopy";

const STEP_DELAY = 0.7;

/** Linha do tempo: a linha avança e cada marco acende quando é alcançado. */
export function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const timeline = useMocks().timeline;
  const lastIndex = timeline.length - 1;

  return (
    <div ref={ref} className="relative">
      <div className="absolute left-[12.5%] right-[12.5%] top-[9px] border-t-2 border-dashed border-brand-soft" aria-hidden />
      <motion.div
        className="absolute left-[12.5%] right-[12.5%] top-[9px] h-[2px] origin-left bg-brand"
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : undefined}
        transition={{ duration: STEP_DELAY * lastIndex, ease: "linear", delay: 0.2 }}
        aria-hidden
      />
      <ol className="relative grid grid-cols-4">
        {timeline.map((item, i) => (
          <li key={item.title} className="flex flex-col items-center text-center">
            <motion.span
              className={`size-5 rounded-full border-4 border-white shadow-[0_0_0_1px_#e3e8ef] ${
                i === lastIndex ? "bg-sun" : "bg-brand"
              }`}
              initial={{ scale: 0 }}
              animate={isInView ? { scale: [0, 1.4, 1] } : undefined}
              transition={{ delay: 0.2 + i * STEP_DELAY, duration: 0.5 }}
            />
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              animate={isInView ? { opacity: 1, y: 0 } : undefined}
              transition={{ delay: 0.3 + i * STEP_DELAY, duration: 0.5 }}
            >
              <b className="mt-3 block text-[14px] text-ink sm:text-[17px]">{item.title}</b>
              <span className="text-[12px] text-muted sm:text-[13px]">{item.when}</span>
            </motion.span>
          </li>
        ))}
      </ol>
    </div>
  );
}
