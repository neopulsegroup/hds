"use client";

import { motion } from "motion/react";

type Props = { text: string; className?: string; delay?: number };

/** Letras a entrar uma a uma, como se fossem carimbadas. */
export function TypeIn({ text, className, delay = 0 }: Props) {
  return (
    <motion.span
      className={`inline-flex ${className ?? ""}`}
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, amount: 0.8 }}
      transition={{ staggerChildren: 0.12, delayChildren: delay }}
      aria-label={text}
    >
      {Array.from(text).map((char, i) => (
        <motion.span
          key={`${char}-${i}`}
          aria-hidden
          variants={{
            hidden: { opacity: 0, y: 18, scale: 1.4 },
            shown: { opacity: 1, y: 0, scale: 1 },
          }}
          transition={{ type: "spring", stiffness: 420, damping: 20 }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
}
