"use client";

import { motion } from "motion/react";

type ArrowVariant = "down-right" | "left" | "up" | "curl-up-left" | "none";

const ARROWS: Record<Exclude<ArrowVariant, "none">, { shaft: string; head: string; box: string }> = {
  "down-right": { shaft: "M6 18 C 52 0, 98 8, 106 66", head: "M93 54 L106 70 L116 52", box: "0 0 124 78" },
  left: { shaft: "M116 26 C 84 22, 52 30, 16 44", head: "M30 30 L13 45 L31 58", box: "0 0 124 70" },
  up: { shaft: "M44 92 C 36 64, 40 34, 44 10", head: "M31 24 L44 8 L57 23", box: "0 0 88 100" },
  "curl-up-left": { shaft: "M112 50 C 76 66, 34 58, 22 14", head: "M9 27 L21 10 L35 24", box: "0 0 124 74" },
};

type Props = {
  lines: readonly string[];
  arrow?: ArrowVariant;
  arrowPosition?: "before" | "after" | "above" | "below";
  arrowClassName?: string;
  className?: string;
  delay?: number;
  size?: "sm" | "md" | "lg";
  /** "light" para bandas azul-escuras */
  tone?: "brand" | "light";
};

const SIZES = { sm: "text-[18px] md:text-[20px]", md: "text-[20px] md:text-[24px]", lg: "text-[22px] md:text-[28px]" };

/** Nota manuscrita azul do PDF: o texto "escreve-se" da esquerda para a direita e a seta desenha-se a seguir. */
export function Handnote({
  lines,
  arrow = "none",
  arrowPosition = "after",
  arrowClassName = "w-24",
  className,
  delay = 0,
  size = "md",
  tone = "brand",
}: Props) {
  const text = (
    <span className="flex flex-col">
      {lines.map((line, i) => (
        <motion.span
          key={line}
          className="block leading-[1.25] sm:whitespace-nowrap"
          variants={{ hidden: { clipPath: "inset(0 100% 0 0)" }, shown: { clipPath: "inset(0 0% 0 0)" } }}
          transition={{ duration: 1.1, ease: "easeInOut", delay: delay + i * 0.9 }}
        >
          {line}
        </motion.span>
      ))}
    </span>
  );

  const arrowDelay = delay + lines.length * 0.9;
  const svg =
    arrow === "none" ? null : (
      <motion.svg
        viewBox={ARROWS[arrow].box}
        className={`shrink-0 overflow-visible ${arrowClassName}`}
        fill="none"
        stroke="currentColor"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <motion.path
          d={ARROWS[arrow].shaft}
          variants={{ hidden: { pathLength: 0 }, shown: { pathLength: 1 } }}
          transition={{ duration: 0.9, ease: "easeInOut", delay: arrowDelay }}
        />
        <motion.path
          d={ARROWS[arrow].head}
          variants={{ hidden: { pathLength: 0 }, shown: { pathLength: 1 } }}
          transition={{ duration: 0.35, ease: "easeOut", delay: arrowDelay + 0.85 }}
        />
      </motion.svg>
    );

  const isVertical = arrowPosition === "above" || arrowPosition === "below";
  const first = arrowPosition === "before" || arrowPosition === "above";

  return (
    <motion.div
      className={`flex font-hand ${tone === "light" ? "text-[#9cc4f2]" : "text-brand"} ${SIZES[size]} ${isVertical ? "flex-col" : "items-center gap-2"} ${className ?? ""}`}
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, amount: 0.6 }}
    >
      {first && svg}
      {text}
      {!first && svg}
    </motion.div>
  );
}
