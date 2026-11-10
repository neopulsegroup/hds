"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { SCALES } from "@/lib/comparison";
import { useCopy } from "@/i18n/useCopy";
import { useCycle } from "./useCycle";

const VERSION_META = [
  { items: 148, factor: 1 },
  { items: 97, factor: 0.92 },
] as const;

/** Inventário: escalas avaliadas com barras de prevalência, alternando entre as duas versões. */
export function ScalesMock() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });
  const copy = useCopy();
  const m = copy.scalesMock;
  const versions = VERSION_META.map((v, i) => ({ ...v, label: i === 0 ? m.versionFull : m.versionNr01 }));
  const versionIndex = useCycle(ref, versions.length, 3600);
  const version = versions[versionIndex];

  const level = (value: number) => {
    if (value >= 60) return { label: m.high, bar: "bg-alert", chip: "bg-[#fde3cf] text-[#a24d0f]" };
    if (value >= 40) return { label: m.medium, bar: "bg-warn", chip: "bg-[#fdf0c4] text-[#a06a00]" };
    return { label: m.low, bar: "bg-ok", chip: "bg-[#ddf3e6] text-[#17834a]" };
  };

  return (
    <div ref={ref} className="rounded-2xl border border-line bg-white p-5 shadow-float md:p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="font-mono text-[9.5px] uppercase tracking-[0.16em] text-faint">{m.eyebrow}</p>
          <p className="mt-1 text-[15px] font-bold text-ink">{m.title}</p>
        </div>
        <div className="relative flex rounded-full bg-page p-1 text-[11px] font-semibold">
          {versions.map((v, i) => (
            <span key={v.label} className={`relative z-10 px-3 py-1.5 transition-colors ${i === versionIndex ? "text-white" : "text-sub"}`}>
              {i === versionIndex && (
                <motion.span layoutId="scale-version" className="absolute inset-0 -z-10 rounded-full bg-brand" transition={{ type: "spring", stiffness: 380, damping: 30 }} />
              )}
              {v.items} {m.items}
            </span>
          ))}
        </div>
      </div>

      <ul className="mt-5 space-y-3.5">
        {SCALES.map((scale, i) => {
          const value = Math.round(scale.value * version.factor);
          const lv = level(value);
          const name = copy.scales[i] ?? scale.name;
          return (
            <li key={scale.name}>
              <div className="flex items-center justify-between gap-3 text-[12.5px]">
                <span className="text-body">{name}</span>
                <span className={`rounded px-1.5 py-0.5 font-mono text-[9px] font-bold uppercase ${lv.chip}`}>{lv.label}</span>
              </div>
              <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-[#eef1f5]">
                <motion.div
                  className={`h-full rounded-full ${lv.bar}`}
                  initial={{ width: "0%" }}
                  animate={isInView ? { width: `${value}%` } : undefined}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: isInView && versionIndex === 0 ? 0.2 + i * 0.1 : 0 }}
                />
              </div>
            </li>
          );
        })}
      </ul>
      <p className="mt-5 flex justify-between font-mono text-[9px] tracking-[0.14em] text-faint">
        <span>{version.label.toUpperCase()}</span>
        <span>{m.illustrative}</span>
      </p>
    </div>
  );
}
