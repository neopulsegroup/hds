"use client";

import { motion } from "motion/react";
import { ScaleBox } from "@/components/ui/ScaleBox";
import { Handnote } from "@/components/ui/Handnote";
import { BrowserFrame, DashboardShell, PhoneFrame } from "@/components/mocks/Frames";
import { KpiRow } from "@/components/mocks/KpiRow";
import { RiskHeatmap } from "@/components/mocks/RiskHeatmap";
import { QuestionLoop } from "@/components/mocks/QuestionLoop";
import { useMocks } from "@/i18n/useCopy";

const VIEWPORT = { once: true, amount: 0.25 } as const;

/** Dashboard "Diagnóstico" e telemóvel com o questionário em loop, como na capa do portfólio. */
export function ProgramVisual() {
  const m = useMocks();
  return (
    <ScaleBox width={1000} className="mt-12 md:mt-16">
      <div className="relative h-[640px]">
        <motion.div
          className="absolute left-0 top-[100px] w-[790px]"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <BrowserFrame tab={m.diagTab}>
            <DashboardShell active="saude-mental" crumb={m.diagCrumb} title={m.diagTitle}>
              <KpiRow />
              <RiskHeatmap />
            </DashboardShell>
          </BrowserFrame>
        </motion.div>

        <motion.div
          className="absolute left-[722px] top-[66px] w-[262px]"
          initial={{ opacity: 0, x: 90, rotate: 14 }}
          whileInView={{ opacity: 1, x: 0, rotate: 4 }}
          viewport={VIEWPORT}
          transition={{ type: "spring", stiffness: 70, damping: 15, delay: 0.4 }}
        >
          <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
            <PhoneFrame className="h-[540px]">
              <QuestionLoop startAt={0} />
            </PhoneFrame>
          </motion.div>
        </motion.div>

        <Handnote
          className="absolute left-[560px] top-0"
          lines={m.companySees}
          arrow="down-right"
          arrowClassName="w-[92px] -mb-10"
          delay={0.9}
          size="lg"
        />
      </div>
    </ScaleBox>
  );
}
