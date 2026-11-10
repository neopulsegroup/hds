"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { CountUp } from "@/components/ui/CountUp";
import { AREA_COUNT, ROW_COUNT, RISK_VALUES, heatClass } from "@/lib/mock-data";
import { useMocks } from "@/i18n/useCopy";

type Props = {
  /** Destaca células em sequência, como um mapa a actualizar em tempo real. */
  isLive?: boolean;
  /** Mostra uma área com menos de 5 respostas: coluna vazia, protegida pelo anonimato. */
  hasHiddenArea?: boolean;
};

const HIDDEN_AREA = "RH";
const HATCH = "bg-[repeating-linear-gradient(135deg,#eef1f5_0_5px,#e3e8ef_5px_10px)]";

const CELL_COUNT = ROW_COUNT * AREA_COUNT;
const LIVE_INTERVAL_MS = 1400;

export function RiskHeatmap({ isLive = false, hasHiddenArea = false }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });
  const isVisible = useInView(ref, { amount: 0.2 });
  const shouldReduce = useReducedMotion();
  const m = useMocks();
  const legend = [
    { label: m.legendLow, className: "bg-ok" },
    { label: m.legendMedium, className: "bg-warn" },
    { label: m.legendHigh, className: "bg-alert" },
    { label: m.legendCritical, className: "bg-danger" },
  ];
  const [pulse, setPulse] = useState(-1);

  useEffect(() => {
    if (!isLive || !isVisible || shouldReduce) return;
    const id = window.setInterval(() => {
      setPulse((current) => (current * 7 + 11) % CELL_COUNT);
    }, LIVE_INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [isLive, isVisible, shouldReduce]);

  return (
    <div ref={ref} className="mt-2.5 rounded-xl border border-line bg-white p-4">
      <div className="mb-3 flex items-baseline justify-between gap-3">
        <p className="text-[12px] font-bold text-ink">{m.heatTitle}</p>
        <p className="font-mono text-[8px] tracking-[0.1em] text-faint">{m.hiddenNote}</p>
      </div>
      <div className={`grid items-center gap-1.5 ${hasHiddenArea ? "grid-cols-[1.45fr_repeat(6,1fr)]" : "grid-cols-[1.45fr_repeat(5,1fr)]"}`}>
        <span />
        {m.areas.map((area) => (
          <span key={area} className="text-center font-mono text-[8px] tracking-[0.06em] text-faint">
            {area}
          </span>
        ))}
        {hasHiddenArea && (
          <span className="text-center font-mono text-[8px] tracking-[0.06em] text-faint">{HIDDEN_AREA}</span>
        )}
        {RISK_VALUES.map((values, r) => (
          <Fragment key={m.riskRows[r]}>
            <span className="text-[10.5px] text-body">{m.riskRows[r]}</span>
            {values.map((value, c) => {
              const index = r * AREA_COUNT + c;
              const delay = 0.25 + (r + c) * 0.08;
              const isPulsing = index === pulse;
              return (
                <motion.div
                  key={c}
                  className={`grid h-[26px] place-items-center rounded-md text-[10.5px] font-bold text-white ${heatClass(value)}`}
                  initial={{ opacity: 0, scale: 0.4 }}
                  animate={
                    isInView
                      ? { opacity: 1, scale: isPulsing ? [1, 1.16, 1] : 1 }
                      : { opacity: 0, scale: 0.4 }
                  }
                  transition={
                    isPulsing
                      ? { duration: 0.6, ease: "easeInOut" }
                      : { delay, type: "spring", stiffness: 260, damping: 18 }
                  }
                >
                  <CountUp to={value} start={isInView} delay={delay} duration={0.9} />
                </motion.div>
              );
            })}
            {hasHiddenArea && (
              <motion.div
                className={`grid h-[26px] place-items-center rounded-md font-mono text-[9px] text-faint ${HATCH}`}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.9 + r * 0.08 }}
              >
                n&lt;5
              </motion.div>
            )}
          </Fragment>
        ))}
      </div>
      {hasHiddenArea && (
        <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-[9px] text-muted">
          {legend.map((item) => (
            <span key={item.label} className="inline-flex items-center gap-1.5">
              <i className={`size-2.5 rounded-sm ${item.className}`} />
              {item.label}
            </span>
          ))}
          <span className="inline-flex items-center gap-1.5">
            <i className={`size-2.5 rounded-sm ${HATCH}`} />
            {m.belowMin}
          </span>
        </div>
      )}
    </div>
  );
}
