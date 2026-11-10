"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { LOCALE_LANG, LOCALES, type Locale } from "@/lib/i18n";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);
const STORAGE_KEY = "ofg-locale";

function isLocale(value: string | null): value is Locale {
  return value !== null && (LOCALES as readonly string[]).includes(value);
}

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  // Default "pt" no servidor e no primeiro render do cliente (evita mismatch de hidratação).
  const [locale, setLocaleState] = useState<Locale>("pt");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (isLocale(saved)) {
        setLocaleState(saved);
        document.documentElement.lang = LOCALE_LANG[saved];
      }
    } catch {
      // localStorage indisponível (modo privado): mantém "pt".
    }
  }, []);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    document.documentElement.lang = LOCALE_LANG[next];
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignora falha de persistência
    }
  }, []);

  return <LocaleContext.Provider value={{ locale, setLocale }}>{children}</LocaleContext.Provider>;
}

export function useLocale(): LocaleContextValue {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useLocale precisa de estar dentro de <LocaleProvider>");
  }
  return ctx;
}
