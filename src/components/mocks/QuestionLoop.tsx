"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useReducedMotion } from "motion/react";
import { QUESTION_META, TOTAL_STEPS } from "@/lib/mock-data";
import { useMocks } from "@/i18n/useCopy";

type Props = {
  startAt?: number;
  footer?: string;
};

const PICK_AFTER_MS = 1100;
const NEXT_AFTER_MS = 3400;

/** Questionário no telemóvel: a resposta é escolhida e avança para a etapa seguinte, em loop. */
export function QuestionLoop({ startAt = 0, footer }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useInView(ref, { amount: 0.4 });
  const shouldReduce = useReducedMotion();
  const m = useMocks();
  const [index, setIndex] = useState(startAt);
  const [picked, setPicked] = useState<number | null>(QUESTION_META[startAt].answer);

  const question = QUESTION_META[index];

  useEffect(() => {
    if (!isVisible || shouldReduce) return;
    const pick = window.setTimeout(() => setPicked(QUESTION_META[index].answer), PICK_AFTER_MS);
    const next = window.setTimeout(() => {
      setPicked(null);
      setIndex((i) => (i + 1) % QUESTION_META.length);
    }, NEXT_AFTER_MS);
    return () => {
      window.clearTimeout(pick);
      window.clearTimeout(next);
    };
  }, [index, isVisible, shouldReduce]);

  return (
    <div ref={ref} className="flex h-full flex-col px-5 pb-6 pt-14">
      <p className="font-mono text-[10px] tracking-[0.16em] text-faint">
        {m.stepPre} {question.step} {m.stepMid} {TOTAL_STEPS}
      </p>
      <div className="mt-2 h-[5px] overflow-hidden rounded-full bg-[#dfe5ee]">
        <motion.div
          className="h-full rounded-full bg-brand"
          initial={false}
          animate={{ width: `${(question.step / TOTAL_STEPS) * 100}%` }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>

      <div className="relative mt-5 min-h-[72px]">
        <AnimatePresence mode="wait" initial={false}>
          <motion.p
            key={question.step}
            className="text-[16.5px] font-bold leading-snug text-ink"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.35 }}
          >
            {m.questions[index]}
          </motion.p>
        </AnimatePresence>
      </div>

      <ul className="mt-4 space-y-2.5">
        {m.answers.map((option, i) => {
          const isPicked = picked === i;
          return (
            <motion.li
              key={option}
              className={`flex items-center gap-2.5 rounded-xl border px-3.5 py-2.5 text-[13px] transition-colors duration-300 ${
                isPicked ? "border-brand bg-brand-tint font-medium text-ink" : "border-line bg-white text-body"
              }`}
              animate={{ scale: isPicked ? [1, 0.95, 1] : 1 }}
              transition={{ duration: 0.35 }}
            >
              <span
                className={`grid size-4 place-items-center rounded-full border-[1.5px] transition-colors ${
                  isPicked ? "border-brand" : "border-[#b9c2cf]"
                }`}
              >
                <motion.span
                  className="size-2 rounded-full bg-brand"
                  initial={false}
                  animate={{ scale: isPicked ? 1 : 0 }}
                  transition={{ type: "spring", stiffness: 500, damping: 22 }}
                />
              </span>
              {option}
            </motion.li>
          );
        })}
      </ul>

      {footer && (
        <p className="mt-auto pt-4 text-center font-mono text-[8.5px] tracking-[0.14em] text-faint">{footer}</p>
      )}
    </div>
  );
}
