"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { useCycle } from "./useCycle";
import { useMocks } from "@/i18n/useCopy";

/* level = coluna (impacto) + linha invertida (probabilidade) */
const CELL_BG = ["bg-[#e3f4ea]", "bg-[#fdf0c4]", "bg-[#fad38c]", "bg-[#f4a2a2]", "bg-danger/85"] as const;

/* Estrutura (posição e tag) dos fatores; o nome vem de m.matrixFactors[n-1]. */
const FACTORS = [
  { n: 1, row: 0, col: 2, tag: "P1" },
  { n: 2, row: 0, col: 1, tag: "P1" },
  { n: 3, row: 1, col: 2, tag: "P2" },
  { n: 4, row: 1, col: 1, tag: "P2" },
  { n: 5, row: 2, col: 1, tag: "P3" },
  { n: 6, row: 2, col: 0, tag: "P3" },
] as const;

const TAGS = {
  P1: "bg-[#fbe1de] text-[#b8382d]",
  P2: "bg-[#fdf0c4] text-[#a06a00]",
  P3: "bg-brand-tint text-brand",
} as const;

/** Matriz probabilidade × impacto: os fatores caem nas células e cada um acende em sequência. */
export function RiskMatrixMock() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });
  const m = useMocks();
  const active = useCycle(ref, FACTORS.length, 1700);

  return (
    <div ref={ref} className="rounded-2xl border border-line bg-white p-5 shadow-float md:p-6">
      <p className="font-mono text-[9.5px] uppercase tracking-[0.16em] text-faint">{m.matrixManager}</p>
      <p className="mt-1 text-[15px] font-bold text-ink">{m.matrixTitle}</p>

      <div className="mt-5 grid gap-5 sm:grid-cols-[1.1fr_1fr]">
        <div className="grid grid-cols-[18px_1fr] gap-2">
          <span className="flex items-center justify-center">
            <span className="-rotate-90 whitespace-nowrap font-mono text-[8.5px] tracking-[0.16em] text-faint">{m.probability}</span>
          </span>
          <div>
            <div className="grid grid-cols-3 gap-1.5">
              {m.probabilityLevels.map((prob, r) =>
                m.impactLevels.map((imp, c) => {
                  const lvl = c + (m.probabilityLevels.length - 1 - r);
                  const here = FACTORS.filter((f) => f.row === r && f.col === c);
                  return (
                    <motion.div
                      key={`${prob}-${imp}`}
                      className={`relative flex h-[58px] flex-wrap content-center items-center justify-center gap-1 rounded-lg ${CELL_BG[lvl]}`}
                      initial={{ opacity: 0, scale: 0.85 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : undefined}
                      transition={{ delay: 0.1 + lvl * 0.1, duration: 0.4 }}
                    >
                      {here.map((f) => {
                        const idx = FACTORS.findIndex((x) => x.n === f.n);
                        const isActive = idx === active;
                        return (
                          <motion.span
                            key={f.n}
                            className={`grid size-6 place-items-center rounded-full border-2 border-white text-[10.5px] font-bold shadow-sm transition-colors ${
                              isActive ? "bg-ink text-white" : "bg-white text-ink"
                            }`}
                            initial={{ y: -40, opacity: 0 }}
                            animate={isInView ? { y: 0, opacity: 1, scale: isActive ? 1.25 : 1 } : undefined}
                            transition={{ type: "spring", stiffness: 300, damping: 16, delay: isInView ? 0.7 + idx * 0.15 : 0 }}
                          >
                            {f.n}
                          </motion.span>
                        );
                      })}
                    </motion.div>
                  );
                }),
              )}
            </div>
            <div className="mt-1.5 grid grid-cols-3 text-center font-mono text-[8.5px] tracking-[0.12em] text-faint">
              {m.impactLevels.map((imp) => (
                <span key={imp}>{imp.toUpperCase()}</span>
              ))}
            </div>
            <p className="mt-0.5 text-center font-mono text-[8.5px] tracking-[0.16em] text-faint">{m.impactAxis}</p>
          </div>
        </div>

        <ul className="space-y-1.5">
          {FACTORS.map((f, i) => {
            const isActive = i === active;
            return (
              <li
                key={f.n}
                className={`flex items-center gap-2.5 rounded-lg border px-2.5 py-1.5 text-[12px] transition-colors duration-300 ${
                  isActive ? "border-brand bg-brand-tint text-ink" : "border-transparent text-sub"
                }`}
              >
                <span className="grid size-5 shrink-0 place-items-center rounded-full bg-ink text-[10px] font-bold text-white">{f.n}</span>
                <span className="flex-1 leading-tight">{m.matrixFactors[f.n - 1]}</span>
                <span className={`rounded px-1.5 py-0.5 font-mono text-[9px] font-bold ${TAGS[f.tag]}`}>{f.tag}</span>
              </li>
            );
          })}
        </ul>
      </div>
      <p className="mt-4 text-right font-mono text-[9px] tracking-[0.14em] text-faint">DADOS ILUSTRATIVOS</p>
    </div>
  );
}
