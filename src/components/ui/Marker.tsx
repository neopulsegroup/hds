"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";

type Props = {
  children: ReactNode;
  variant?: "block" | "underline";
  delay?: number;
};

/** Marca-texto amarelo do PDF, que se pinta da esquerda para a direita. */
export function Marker({ children, variant = "block", delay = 0.4 }: Props) {
  const shape = variant === "block" ? "bottom-[0.06em] h-[0.42em]" : "bottom-0 h-[0.18em]";
  return (
    <motion.span
      className="relative inline-block whitespace-nowrap"
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, amount: 0.8 }}
    >
      <motion.span
        aria-hidden
        className={`absolute inset-x-[-0.04em] origin-left rounded-[2px] bg-sun ${shape}`}
        variants={{ hidden: { scaleX: 0 }, shown: { scaleX: 1 } }}
        transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1], delay }}
      />
      <span className="relative">{children}</span>
    </motion.span>
  );
}
