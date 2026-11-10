"use client";

import { useEffect, useState, type RefObject } from "react";
import { useInView, useReducedMotion } from "motion/react";

/** Índice que avança em loop enquanto o elemento está visível (pára com "reduzir movimento"). */
export function useCycle(ref: RefObject<Element | null>, length: number, intervalMs: number): number {
  const isVisible = useInView(ref, { amount: 0.3 });
  const shouldReduce = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!isVisible || shouldReduce || length < 2) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % length), intervalMs);
    return () => window.clearInterval(id);
  }, [isVisible, shouldReduce, length, intervalMs]);

  return index;
}
