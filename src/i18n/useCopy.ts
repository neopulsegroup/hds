"use client";

import { useLocale } from "@/components/i18n/LocaleProvider";
import { COPY, type Copy } from "@/i18n/copy";
import { MOCKS, type MocksCopy } from "@/i18n/mocks";

/** Retorna o dicionário de conteúdo da landing para o idioma activo. */
export function useCopy(): Copy {
  const { locale } = useLocale();
  return COPY[locale];
}

/** Textos das telas ilustrativas (mocks) para o idioma activo. */
export function useMocks(): MocksCopy {
  const { locale } = useLocale();
  return MOCKS[locale];
}
