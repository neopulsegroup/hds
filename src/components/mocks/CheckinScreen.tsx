"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { useMocks } from "@/i18n/useCopy";

const REPLAY_MS = 5200;

/** Check-in por QR: o círculo verde entra, o visto desenha-se, e repete. */
export function CheckinScreen() {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useInView(ref, { amount: 0.4 });
  const shouldReduce = useReducedMotion();
  const m = useMocks();
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    if (!isVisible || shouldReduce) return;
    const id = window.setInterval(() => setCycle((c) => c + 1), REPLAY_MS);
    return () => window.clearInterval(id);
  }, [isVisible, shouldReduce]);

  return (
    <div ref={ref} className="flex h-full flex-col items-center justify-center bg-white px-6 text-center">
      <div key={cycle} className="flex flex-col items-center">
        <div className="relative grid size-[118px] place-items-center">
          <motion.span
            className="absolute inset-0 rounded-full bg-ok/25"
            initial={{ scale: 0.6, opacity: 0 }}
            animate={isVisible ? { scale: [0.9, 1.5], opacity: [0.7, 0] } : undefined}
            transition={{ duration: 1.4, delay: 0.7, ease: "easeOut" }}
          />
          <motion.span
            className="absolute inset-0 rounded-full bg-ok"
            initial={{ scale: 0 }}
            animate={isVisible ? { scale: 1 } : undefined}
            transition={{ type: "spring", stiffness: 260, damping: 16, delay: 0.1 }}
          />
          <svg viewBox="0 0 52 52" className="relative size-[56px]" fill="none" aria-hidden>
            <motion.path
              d="M14 27 L23 36 L39 18"
              stroke="#ffffff"
              strokeWidth={5.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={isVisible ? { pathLength: 1 } : undefined}
              transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
            />
          </svg>
        </div>
        <motion.p
          className="mt-7 text-[19px] font-bold text-ink"
          initial={{ opacity: 0, y: 8 }}
          animate={isVisible ? { opacity: 1, y: 0 } : undefined}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          {m.presenceLogged}
        </motion.p>
        <motion.p
          className="mt-1 text-[11.5px] text-muted"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : undefined}
          transition={{ delay: 1, duration: 0.5 }}
        >
          {m.checkinQr}
        </motion.p>
      </div>
    </div>
  );
}
