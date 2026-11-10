"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";
import { EASE_OUT } from "./Reveal";

type Props = {
  eyebrow: string;
  strong: ReactNode;
  italic: ReactNode;
  lead?: ReactNode;
  as?: "h1" | "h2";
  /** "light" para bandas azul-escuras */
  tone?: "dark" | "light";
  size?: "md" | "lg";
};

const LINE_VARIANTS = {
  hidden: { y: "105%" },
  shown: (delay: number) => ({ y: "0%", transition: { duration: 0.9, ease: EASE_OUT, delay } }),
};

const SIZES = {
  md: "text-[36px] sm:text-[48px] md:text-[58px]",
  lg: "text-[40px] sm:text-[54px] lg:text-[58px]",
} as const;

const TONES = {
  dark: { eyebrow: "text-brand", strong: "text-ink", italic: "text-brand", lead: "text-body" },
  light: { eyebrow: "text-[#9cc4f2]", strong: "text-white", italic: "text-[#9cc4f2]", lead: "text-white/80" },
} as const;

/* O gatilho de "em ecrã" fica no título; as linhas, recortadas pela máscara, herdam o estado. */
function MaskLine({ children, delay, className }: { children: ReactNode; delay: number; className: string }) {
  return (
    <span className="block overflow-hidden pb-[0.08em]">
      <motion.span className={`block ${className}`} variants={LINE_VARIANTS} custom={delay}>
        {children}
      </motion.span>
    </span>
  );
}

export function SectionHeading({ eyebrow, strong, italic, lead, as = "h2", tone = "dark", size = "md" }: Props) {
  const Heading = as === "h1" ? motion.h1 : motion.h2;
  const colors = TONES[tone];
  return (
    <div>
      <motion.p
        className={`font-mono text-[12px] font-bold uppercase tracking-[0.22em] ${colors.eyebrow}`}
        initial={{ opacity: 0, x: -12 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: EASE_OUT }}
      >
        {eyebrow}
      </motion.p>
      <Heading
        className={`mt-4 leading-[1] ${SIZES[size]}`}
        initial="hidden"
        whileInView="shown"
        viewport={{ once: true, amount: 0.3 }}
      >
        <MaskLine delay={0.05} className={`font-sans font-bold tracking-[-0.035em] ${colors.strong}`}>
          {strong}
        </MaskLine>
        <MaskLine delay={0.2} className={`font-serif text-[1.05em] italic tracking-[-0.01em] ${colors.italic}`}>
          {italic}
        </MaskLine>
      </Heading>
      {lead && (
        <motion.p
          className={`mt-6 max-w-[660px] text-[17px] leading-relaxed md:text-[20px] ${colors.lead}`}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE_OUT, delay: 0.35 }}
        >
          {lead}
        </motion.p>
      )}
    </div>
  );
}
