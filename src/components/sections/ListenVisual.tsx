"use client";

import { motion } from "motion/react";
import { ScaleBox } from "@/components/ui/ScaleBox";
import { Handnote } from "@/components/ui/Handnote";
import { PhoneFrame } from "@/components/mocks/Frames";
import { QuestionLoop } from "@/components/mocks/QuestionLoop";
import { BreathScreen } from "@/components/mocks/BreathScreen";
import { QrCard } from "@/components/mocks/QrCard";
import { useMocks } from "@/i18n/useCopy";

const VIEWPORT = { once: true, amount: 0.3 } as const;

export function ListenVisual() {
  const m = useMocks();
  return (
    <ScaleBox width={1000} className="mt-12">
      <div className="relative h-[620px]">
        <motion.div
          className="absolute left-[30px] top-[20px] w-[262px]"
          initial={{ opacity: 0, y: 80, rotate: -12 }}
          whileInView={{ opacity: 1, y: 0, rotate: -4 }}
          viewport={VIEWPORT}
          transition={{ type: "spring", stiffness: 70, damping: 15 }}
        >
          <PhoneFrame className="h-[540px]">
            <QuestionLoop startAt={1} footer={m.noRegister} />
          </PhoneFrame>
        </motion.div>

        <motion.div
          className="absolute left-[300px] top-[70px] w-[262px]"
          initial={{ opacity: 0, y: 100, rotate: 12 }}
          whileInView={{ opacity: 1, y: 0, rotate: 3 }}
          viewport={VIEWPORT}
          transition={{ type: "spring", stiffness: 70, damping: 15, delay: 0.25 }}
        >
          <PhoneFrame className="h-[540px]" screenClassName="bg-brand">
            <BreathScreen />
          </PhoneFrame>
        </motion.div>

        <motion.div
          className="absolute left-[730px] top-[20px]"
          initial={{ opacity: 0, scale: 0.85, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
        >
          <QrCard />
        </motion.div>

        <Handnote
          className="absolute left-[548px] top-[290px]"
          lines={m.linkQr}
          arrow="left"
          arrowPosition="before"
          arrowClassName="w-[80px]"
          delay={0.8}
          size="lg"
        />
      </div>
    </ScaleBox>
  );
}
