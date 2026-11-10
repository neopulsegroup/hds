"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";

export const EASE_OUT = [0.16, 1, 0.3, 1] as const;

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  x?: number;
  amount?: number;
};

export function Reveal({ children, className, delay = 0, y = 28, x = 0, amount = 0.3 }: Props) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.8, ease: EASE_OUT, delay }}
    >
      {children}
    </motion.div>
  );
}
