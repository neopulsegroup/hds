"use client";

import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Handnote } from "@/components/ui/Handnote";
import { ScaleBox } from "@/components/ui/ScaleBox";
import { BrowserFrame, DashboardShell, LiveBadge } from "@/components/mocks/Frames";
import { KpiRow } from "@/components/mocks/KpiRow";
import { RiskHeatmap } from "@/components/mocks/RiskHeatmap";
import { useCopy } from "@/i18n/useCopy";

export function Diagnosis() {
  const t = useCopy().diagnosis;
  return (
    <Section id="diagnostico" tone="soft" page={{ index: 5, next: "anonimato" }}>
      <SectionHeading eyebrow={t.eyebrow} strong={t.strong} italic={t.italic} lead={t.lead} />

      <div className="mt-8 flex justify-end">
        <Handnote lines={t.handnote1} arrow="down-right" arrowClassName="w-[70px] md:w-[92px] -mb-8" size="lg" />
      </div>

      <Reveal y={50} className="mt-2">
        <ScaleBox width={1000}>
          <BrowserFrame tab={t.tab}>
            <DashboardShell active="saude-mental" crumb={t.crumb} title={t.title} badge={<LiveBadge />}>
              <KpiRow />
              <RiskHeatmap isLive hasHiddenArea />
            </DashboardShell>
          </BrowserFrame>
        </ScaleBox>
      </Reveal>

      <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <Reveal className="max-w-[560px] text-[16px] leading-relaxed text-body">
          {t.captionPre} <b className="text-ink">{t.captionBold}</b>
        </Reveal>
        <Handnote lines={t.handnote2} arrow="up" arrowPosition="before" arrowClassName="w-9" />
      </div>
    </Section>
  );
}
