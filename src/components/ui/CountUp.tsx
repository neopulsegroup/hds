"use client";

import { useEffect, useMemo, useRef } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";

type Props = {
  to: number;
  from?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  delay?: number;
  /** Controlo externo do disparo. Sem valor, dispara ao entrar no ecrã. */
  start?: boolean;
  className?: string;
};

export function CountUp({
  to,
  from = 0,
  decimals = 0,
  prefix = "",
  suffix = "",
  duration = 1.6,
  delay = 0,
  start,
  className,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const selfInView = useInView(ref, { once: true, amount: 0.6 });
  const shouldReduce = useReducedMotion();
  const isActive = start ?? selfInView;

  const format = useMemo(() => {
    const nf = new Intl.NumberFormat("pt-BR", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });
    return (value: number) => `${prefix}${nf.format(value)}${suffix}`;
  }, [decimals, prefix, suffix]);

  useEffect(() => {
    const el = ref.current;
    if (!el || !isActive) return;
    if (shouldReduce) {
      el.textContent = format(to);
      return;
    }
    const controls = animate(from, to, {
      duration,
      delay,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (value) => {
        el.textContent = format(value);
      },
    });
    return () => controls.stop();
  }, [isActive, shouldReduce, format, from, to, duration, delay]);

  return (
    <span ref={ref} className={`tabular-nums ${className ?? ""}`}>
      {format(from)}
    </span>
  );
}
