"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { useMocks } from "@/i18n/useCopy";

const SIZE = 25;

function mulberry32(seed: number) {
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function isFinder(x: number, y: number): boolean | null {
  const corners = [
    [0, 0],
    [SIZE - 7, 0],
    [0, SIZE - 7],
  ];
  for (const [cx, cy] of corners) {
    const dx = x - cx;
    const dy = y - cy;
    if (dx >= -1 && dx <= 7 && dy >= -1 && dy <= 7) {
      if (dx < 0 || dy < 0 || dx > 6 || dy > 6) return false;
      const ring = Math.min(dx, dy, 6 - dx, 6 - dy);
      return ring !== 1;
    }
  }
  return null;
}

/* Padrão ilustrativo, determinístico (mesmo resultado no servidor e no cliente). */
const MODULES: ReadonlyArray<readonly [number, number]> = (() => {
  const rand = mulberry32(2027);
  const cells: Array<readonly [number, number]> = [];
  for (let y = 0; y < SIZE; y++) {
    for (let x = 0; x < SIZE; x++) {
      const finder = isFinder(x, y);
      const isOn = finder ?? rand() > 0.52;
      if (isOn) cells.push([x, y] as const);
    }
  }
  return cells;
})();

export function QrCard() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const m = useMocks();

  return (
    <div ref={ref} className="w-[200px] rounded-2xl border border-line bg-white px-5 pb-4 pt-4 text-center shadow-card">
      <p className="font-mono text-[8.5px] tracking-[0.16em] text-faint">{m.qrSheet}</p>
      <div className="relative mx-auto mt-3 size-[112px] overflow-hidden">
        <svg viewBox={`0 0 ${SIZE} ${SIZE}`} className="size-full" shapeRendering="crispEdges" aria-hidden>
          <defs>
            <clipPath id="qr-reveal">
              <motion.rect
                x={0}
                y={0}
                width={SIZE}
                initial={{ height: 0 }}
                animate={{ height: isInView ? SIZE : 0 }}
                transition={{ duration: 1.4, ease: "easeInOut", delay: 0.2 }}
              />
            </clipPath>
          </defs>
          <g clipPath="url(#qr-reveal)" fill="#0e1726">
            {MODULES.map(([x, y]) => (
              <rect key={`${x}-${y}`} x={x} y={y} width={1} height={1} />
            ))}
          </g>
        </svg>
        <motion.span
          className="absolute inset-x-0 h-[3px] rounded-full bg-brand shadow-[0_0_14px_4px_rgba(10,79,150,0.45)]"
          initial={{ top: "0%", opacity: 0 }}
          animate={isInView ? { top: ["0%", "100%", "0%"], opacity: 1 } : undefined}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.6 }}
          aria-hidden
        />
      </div>
      <p className="mt-2 text-[15px] font-bold text-ink">{m.qrArea}</p>
      <p className="text-[11px] text-muted">{m.qrScan}</p>
    </div>
  );
}
