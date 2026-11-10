"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { CYCLE_COUNT } from "@/lib/mock-data";
import { useMocks } from "@/i18n/useCopy";

const VIEW = 400;
const CENTER = VIEW / 2;
const RADIUS = 130;
/* Posição de cada legenda relativa ao seu nó (unidades do viewBox) e alinhamento, como no PDF. */
const LABEL_OFFSETS = [
  { dx: 0, dy: -24, translate: "-50% -100%", align: "text-center" },
  { dx: 22, dy: 10, translate: "0% -100%", align: "text-left" },
  { dx: 14, dy: 22, translate: "-30% 0%", align: "text-right" },
  { dx: -14, dy: 22, translate: "-70% 0%", align: "text-left" },
  { dx: -22, dy: 10, translate: "-100% -100%", align: "text-right" },
] as const;
/* Mesmo período da classe .orbit em globals.css */
const ORBIT_MS = 14000;
const STEP_MS = ORBIT_MS / CYCLE_COUNT;

function point(index: number, radius: number) {
  const angle = ((-90 + index * (360 / CYCLE_COUNT)) * Math.PI) / 180;
  return { x: CENTER + radius * Math.cos(angle), y: CENTER + radius * Math.sin(angle) };
}

const pct = (v: number) => `${(v / VIEW) * 100}%`;

/** Ciclo HDS: o anel desenha-se, os 5 passos entram e um marcador percorre o ciclo, activando cada etapa. */
export function CycleDiagram() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });
  const shouldReduce = useReducedMotion();
  const cycleSteps = useMocks().cycleSteps;
  const [active, setActive] = useState(0);
  const orbitRef = useRef<SVGGElement>(null);

  useEffect(() => {
    if (shouldReduce) return;
    const started = performance.now();
    const id = window.setInterval(() => {
      /* Lê o tempo real da animação CSS do marcador para manter a etapa activa sincronizada. */
      const cssTime = orbitRef.current?.getAnimations()[0]?.currentTime;
      const elapsed = typeof cssTime === "number" ? cssTime : performance.now() - started;
      setActive(Math.round((elapsed % ORBIT_MS) / STEP_MS) % CYCLE_COUNT);
    }, 150);
    return () => window.clearInterval(id);
  }, [shouldReduce]);

  return (
    <div ref={ref} className="relative mx-auto aspect-square w-full max-w-[460px]">
      <svg viewBox={`0 0 ${VIEW} ${VIEW}`} className="absolute inset-0 size-full overflow-visible" aria-hidden>
        <motion.circle
          cx={CENTER}
          cy={CENTER}
          r={RADIUS}
          fill="none"
          stroke="#d5e3f2"
          strokeWidth={18}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : undefined}
          transition={{ duration: 0.8 }}
        />
        <motion.circle
          cx={CENTER}
          cy={CENTER}
          r={RADIUS}
          fill="none"
          stroke="#0a4f96"
          strokeWidth={3.5}
          strokeLinecap="round"
          transform={`rotate(-90 ${CENTER} ${CENTER})`}
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : undefined}
          transition={{ duration: 1.8, ease: "easeInOut", delay: 0.2 }}
        />
        <circle cx={CENTER} cy={CENTER} r={64} fill="#f4f6fa" />
        {cycleSteps.map((step, i) => {
          const p = point(i, RADIUS);
          const isActive = i === active;
          return (
            <motion.g
              key={step}
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : undefined}
              transition={{ type: "spring", stiffness: 300, damping: 16, delay: 0.6 + i * 0.25 }}
            >
              <motion.circle
                cx={p.x}
                cy={p.y}
                r={13}
                stroke="#0a4f96"
                strokeWidth={3.5}
                initial={false}
                animate={{ scale: isActive ? 1.2 : 1, fill: isActive ? "#0a4f96" : "#ffffff" }}
                transition={{ duration: 0.35 }}
              />
            </motion.g>
          );
        })}
        <g ref={orbitRef} className="orbit">
          <circle cx={CENTER} cy={CENTER - RADIUS} r={7} fill="#f0c300" stroke="#ffffff" strokeWidth={2} />
        </g>
      </svg>

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <p className="text-[34px] font-bold tracking-[-0.03em] text-ink sm:text-[44px]">HDS</p>
        <p className="mt-1 font-mono text-[6.5px] tracking-[0.2em] text-faint sm:text-[8px]">HUMAN DEVELOPMENT SOLUTIONS</p>
      </div>

      {cycleSteps.map((step, i) => {
        const node = point(i, RADIUS);
        const offset = LABEL_OFFSETS[i];
        const isActive = i === active;
        return (
          <div
            key={step}
            className={`absolute whitespace-nowrap ${offset.align}`}
            style={{ left: pct(node.x + offset.dx), top: pct(node.y + offset.dy), translate: offset.translate }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : undefined}
              transition={{ delay: 0.8 + i * 0.25, duration: 0.5 }}
            >
              <span className="block font-mono text-[10px] text-faint">{String(i + 1).padStart(2, "0")}</span>
              <span
                className={`block text-[15px] font-bold transition-colors duration-300 sm:text-[18px] ${
                  isActive ? "text-brand" : "text-ink"
                }`}
              >
                {step}
              </span>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}
