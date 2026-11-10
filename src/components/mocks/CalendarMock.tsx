"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { CALENDAR_EVENTS } from "@/lib/mock-data";
import { useMocks } from "@/i18n/useCopy";

const FIRST_DAY = 2;
const WEEKS = 4;
const DAYS = Array.from({ length: WEEKS * 7 }, (_, i) => FIRST_DAY + i);

export function CalendarMock() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });
  const m = useMocks();
  const eventLabel = { leadership: m.calLeadership, time: m.calTime };

  return (
    <div ref={ref} className="rounded-xl border border-line bg-white p-3">
      <div className="grid grid-cols-7 gap-1">
        {m.weekdays.map((d) => (
          <span key={d} className="pb-1 text-center font-mono text-[8.5px] tracking-[0.08em] text-faint">
            {d}
          </span>
        ))}
        {DAYS.map((day) => {
          const eventIndex = CALENDAR_EVENTS.findIndex((e) => e.day === day);
          const event = eventIndex >= 0 ? CALENDAR_EVENTS[eventIndex] : undefined;
          return (
            <div key={day} className="h-[50px] rounded-md border border-line p-1">
              <span className="block text-[8.5px] text-faint">{day}</span>
              {event && (
                <motion.span
                  className={`mt-0.5 block origin-left rounded px-1 py-0.5 text-[7.5px] font-medium leading-[1.15] text-white ${
                    event.tone === "brand" ? "bg-brand" : "bg-ok"
                  }`}
                  initial={{ opacity: 0, scaleX: 0.2 }}
                  animate={isInView ? { opacity: 1, scaleX: 1 } : undefined}
                  transition={{ delay: 0.4 + eventIndex * 0.3, type: "spring", stiffness: 240, damping: 20 }}
                >
                  {eventLabel[event.labelKey]}
                </motion.span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
