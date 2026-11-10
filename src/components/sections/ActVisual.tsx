"use client";

import { motion } from "motion/react";
import { ScaleBox } from "@/components/ui/ScaleBox";
import { Handnote } from "@/components/ui/Handnote";
import { BrowserFrame, DashboardShell, PhoneFrame } from "@/components/mocks/Frames";
import { CalendarMock } from "@/components/mocks/CalendarMock";
import { CheckinScreen } from "@/components/mocks/CheckinScreen";
import { useMocks } from "@/i18n/useCopy";

const VIEWPORT = { once: true, amount: 0.3 } as const;

export function ActVisual() {
  const m = useMocks();
  return (
    <ScaleBox width={1000} className="mt-12">
      <div className="relative h-[600px]">
        <motion.div
          className="absolute left-0 top-[30px] w-[780px]"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <BrowserFrame tab={m.calTab}>
            <DashboardShell active="calendario" crumb={m.calCrumb} title={m.calTitle}>
              <CalendarMock />
            </DashboardShell>
          </BrowserFrame>
        </motion.div>

        <motion.div
          className="absolute left-[710px] top-0 w-[262px]"
          initial={{ opacity: 0, x: 90, rotate: 14 }}
          whileInView={{ opacity: 1, x: 0, rotate: 4 }}
          viewport={VIEWPORT}
          transition={{ type: "spring", stiffness: 70, damping: 15, delay: 0.3 }}
        >
          <PhoneFrame className="h-[520px]" screenClassName="bg-white">
            <CheckinScreen />
          </PhoneFrame>
        </motion.div>

        <Handnote
          className="absolute left-[40px] top-[505px]"
          lines={m.sameEnv}
          delay={0.6}
          size="lg"
        />
      </div>
    </ScaleBox>
  );
}
