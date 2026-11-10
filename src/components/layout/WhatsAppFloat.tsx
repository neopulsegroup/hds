"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { WHATSAPP_DISPLAY, whatsappHref } from "@/lib/site";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { UI } from "@/lib/i18n";
import { useLocale } from "@/components/i18n/LocaleProvider";

const SHOW_TIP_AFTER_MS = 2500;
const HIDE_TIP_AFTER_MS = 9000;

export function WhatsAppFloat() {
  const { locale } = useLocale();
  const ui = UI[locale];
  const [isTipVisible, setIsTipVisible] = useState(false);

  useEffect(() => {
    const show = window.setTimeout(() => setIsTipVisible(true), SHOW_TIP_AFTER_MS);
    const hide = window.setTimeout(() => setIsTipVisible(false), HIDE_TIP_AFTER_MS);
    return () => {
      window.clearTimeout(show);
      window.clearTimeout(hide);
    };
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex items-center gap-3 md:bottom-7 md:right-7">
      <AnimatePresence>
        {isTipVisible && (
          <motion.div
            className="hidden rounded-2xl bg-white px-4 py-2.5 text-right shadow-card sm:block"
            initial={{ opacity: 0, x: 16, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 16, scale: 0.95 }}
          >
            <p className="text-[13px] font-semibold text-ink">{ui.whatsappTip}</p>
            <p className="font-mono text-[11px] text-muted">{WHATSAPP_DISPLAY}</p>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.a
        href={whatsappHref()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${ui.whatsappCta} ${WHATSAPP_DISPLAY}`}
        onMouseEnter={() => setIsTipVisible(true)}
        onMouseLeave={() => setIsTipVisible(false)}
        className="relative grid size-14 place-items-center rounded-full bg-whats text-white shadow-[0_14px_30px_-10px_rgba(37,211,102,0.8)] md:size-16"
        initial={{ scale: 0, rotate: -30 }}
        animate={{ scale: 1, rotate: 0 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.8 }}
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-whats opacity-30 [animation-duration:2.4s]" aria-hidden />
        <WhatsAppIcon className="relative size-7 md:size-8" />
      </motion.a>
    </div>
  );
}
