"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Check, TriangleAlert, X } from "lucide-react";
import { COMPARISON_BY_LOCALE, TOOLS, type ComparisonCell, type Verdict } from "@/lib/comparison";
import { useLocale } from "@/components/i18n/LocaleProvider";
import { useCopy } from "@/i18n/useCopy";

const HDS = 0;
const ROW_STAGGER = 0.06;

const VERDICT_STYLE: Record<Verdict, { Icon: typeof Check; badge: string }> = {
  yes: { Icon: Check, badge: "bg-ok text-white" },
  no: { Icon: X, badge: "bg-danger text-white" },
  depends: { Icon: TriangleAlert, badge: "bg-warn text-ink" },
};

type VerdictLabels = Record<Verdict, string>;

type CellProps = { cell: ComparisonCell; isHds: boolean; isInView: boolean; delay: number; labels: VerdictLabels };

function CellValue({ cell, isHds, isInView, delay, labels }: CellProps) {
  if ("text" in cell) {
    return <span className={`text-[12.5px] leading-snug ${isHds ? "font-medium text-ink" : "text-sub"}`}>{cell.text}</span>;
  }
  const { Icon, badge } = VERDICT_STYLE[cell.verdict];
  const label = labels[cell.verdict];
  return (
    <span className="inline-flex items-center gap-2">
      <motion.span
        className={`grid size-5 shrink-0 place-items-center rounded-full ${badge}`}
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : undefined}
        transition={{ type: "spring", stiffness: 420, damping: 18, delay }}
      >
        <Icon className="size-3" strokeWidth={3.2} aria-hidden />
      </motion.span>
      <span className={`text-[13px] ${isHds ? "font-semibold text-ink" : "text-sub"}`}>{label}</span>
    </span>
  );
}

/** Tabela comparativa: grelha em desktop, cartões por critério em mobile. */
export function ComparisonTable() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });
  const { locale } = useLocale();
  const t = useCopy().criteria;
  const comparison = COMPARISON_BY_LOCALE[locale];
  const labels: VerdictLabels = { yes: t.verdictYes, no: t.verdictNo, depends: t.verdictDepends };
  const rowCount = comparison.length + 1;

  return (
    <div ref={ref}>
      {/* Desktop */}
      <div
        role="table"
        aria-label={t.comparisonAria}
        className="relative hidden gap-x-2 gap-y-1.5 md:grid"
        style={{
          gridTemplateColumns: "1.45fr 1.25fr 1fr 1fr 1fr",
          gridTemplateRows: `repeat(${rowCount}, auto)`,
        }}
      >
        <motion.div
          aria-hidden
          className="pointer-events-none z-0 origin-top rounded-2xl border-2 border-brand bg-brand-tint/70 shadow-[0_24px_50px_-24px_rgba(10,79,150,0.55)]"
          style={{ gridColumn: 2, gridRow: `1 / ${rowCount + 1}` }}
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : undefined}
          transition={{ duration: 1.1, ease: [0.65, 0, 0.35, 1] }}
        />

        <div role="row" className="contents">
          <span
            role="columnheader"
            className="z-10 self-end pb-2 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-brand"
            style={{ gridColumn: 1, gridRow: 1 }}
          >
            {t.comparisonHeader}
          </span>
          {TOOLS.map((tool, c) => (
            <span
              key={tool}
              role="columnheader"
              className={`z-10 m-1.5 rounded-xl py-3 text-center text-[16px] font-bold ${
                c === HDS ? "bg-brand text-white" : "bg-[#e7ebf1] text-sub"
              }`}
              style={{ gridColumn: c + 2, gridRow: 1 }}
            >
              {tool}
            </span>
          ))}
        </div>

        {comparison.map((row, r) => {
          const delay = 0.3 + r * ROW_STAGGER;
          return (
            <div key={row.criterion} role="row" className="contents">
              <motion.span
                role="rowheader"
                initial={{ opacity: 0, x: -16 }}
                animate={isInView ? { opacity: 1, x: 0 } : undefined}
                transition={{ delay, duration: 0.45 }}
                className="z-10 flex items-center border-b border-dashed border-[#d8dee8] py-3 pr-3 text-[13.5px] font-semibold leading-snug text-ink"
                style={{ gridColumn: 1, gridRow: r + 2 }}
              >
                {row.criterion}
              </motion.span>
              {row.cells.map((cell, c) => (
                <motion.span
                  key={TOOLS[c]}
                  role="cell"
                  initial={{ opacity: 0, y: 8 }}
                  animate={isInView ? { opacity: 1, y: 0 } : undefined}
                  transition={{ delay: delay + 0.05 + c * 0.05, duration: 0.4 }}
                  className={`z-10 flex items-center justify-center px-3 py-3 text-center ${
                    c === HDS ? "" : "border-b border-dashed border-[#d8dee8]"
                  }`}
                  style={{ gridColumn: c + 2, gridRow: r + 2 }}
                >
                  <CellValue cell={cell} isHds={c === HDS} isInView={isInView} delay={delay + 0.1 + c * 0.05} labels={labels} />
                </motion.span>
              ))}
            </div>
          );
        })}
      </div>

      {/* Mobile */}
      <ul className="space-y-3 md:hidden">
        {comparison.map((row, r) => (
          <motion.li
            key={row.criterion}
            className="rounded-2xl border border-line bg-white p-4 shadow-card"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: (r % 3) * 0.05 }}
          >
            <p className="text-[14px] font-semibold leading-snug text-ink">{row.criterion}</p>
            <div className="mt-3 rounded-xl border border-brand/40 bg-brand-tint px-3 py-2.5">
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-brand">{TOOLS[HDS]}</p>
              <div className="mt-1">
                <CellValue cell={row.cells[HDS]} isHds isInView delay={0.2} labels={labels} />
              </div>
            </div>
            <dl className="mt-2 grid grid-cols-3 gap-2">
              {row.cells.slice(1).map((cell, i) => (
                <div key={TOOLS[i + 1]} className="rounded-lg bg-page px-2 py-2">
                  <dt className="font-mono text-[9.5px] uppercase tracking-[0.12em] text-faint">{TOOLS[i + 1]}</dt>
                  <dd className="mt-1">
                    <CellValue cell={cell} isHds={false} isInView delay={0.2} labels={labels} />
                  </dd>
                </div>
              ))}
            </dl>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
