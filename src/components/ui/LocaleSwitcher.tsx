"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Globe } from "lucide-react";
import { LOCALES, LOCALE_SHORT, UI, type Locale } from "@/lib/i18n";
import { useLocale } from "@/components/i18n/LocaleProvider";

const LOCALE_NAME: Record<Locale, string> = {
  pt: "Português",
  es: "Español",
  en: "English",
};

export function LocaleSwitcher({ className = "" }: { className?: string }) {
  const { locale, setLocale } = useLocale();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={UI[locale].language}
        className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white/70 px-2.5 py-1.5 text-sub transition-colors hover:text-ink"
      >
        <Globe className="size-4" aria-hidden />
        <span className="font-mono text-[12px] font-medium">{LOCALE_SHORT[locale]}</span>
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label={UI[locale].language}
          className="absolute right-0 top-[calc(100%+6px)] z-50 min-w-[160px] overflow-hidden rounded-xl border border-line bg-white py-1 shadow-[0_18px_40px_-20px_rgba(14,23,38,0.45)]"
        >
          {LOCALES.map((item) => {
            const isActive = item === locale;
            return (
              <li key={item} role="option" aria-selected={isActive}>
                <button
                  type="button"
                  onClick={() => {
                    setLocale(item);
                    setOpen(false);
                  }}
                  className={`flex w-full items-center justify-between gap-3 px-3 py-2 text-left text-[14px] transition-colors ${
                    isActive ? "text-brand" : "text-ink hover:bg-brand-tint"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className="font-mono text-[11px] text-faint">{LOCALE_SHORT[item]}</span>
                    {LOCALE_NAME[item]}
                  </span>
                  {isActive && <Check className="size-4" aria-hidden />}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
