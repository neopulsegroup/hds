"use client";

import type { ReactNode } from "react";
import { MotionConfig } from "motion/react";

type Props = { children: ReactNode };

export function MotionProvider({ children }: Props) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
