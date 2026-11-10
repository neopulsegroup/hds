"use client";

import { useRef, useState } from "react";
import { firstName, leadSummary, type Lead } from "@/lib/lead-schema";
import { WHATSAPP_DISPLAY, whatsappHref } from "@/lib/site";
import { useCopy } from "@/i18n/useCopy";

const CONTACT_EMAIL = "comercial@oportoforte.com.br";

export function LeadSuccess({ lead }: { lead: Lead }) {
  const f = useCopy().form;
  return (
    <div role="status" aria-live="polite">
      <h3 className="text-[22px] font-bold tracking-[-0.02em] text-ink">{f.successTitle}</h3>
      <p className="mt-2 text-[15px] leading-relaxed text-body">
        {f.thanksPre}
        {firstName(lead.nome)}
        {f.thanksPost}
      </p>
    </div>
  );
}

type CopyState = "idle" | "copied" | "selected";

export function LeadFallback({ lead }: { lead: Lead }) {
  const f = useCopy().form;
  const summary = leadSummary(lead);
  const copyLabel: Record<CopyState, string> = {
    idle: f.copyIdle,
    copied: f.copyDone,
    selected: f.copySelected,
  };
  const summaryRef = useRef<HTMLElement>(null);
  const [copyState, setCopyState] = useState<CopyState>("idle");

  function selectSummary() {
    const node = summaryRef.current;
    const selection = typeof window !== "undefined" ? window.getSelection() : null;
    if (!node || !selection) return;
    const range = document.createRange();
    range.selectNodeContents(node);
    selection.removeAllRanges();
    selection.addRange(range);
    setCopyState("selected");
  }

  async function copySummary() {
    try {
      if (!navigator.clipboard) throw new Error("clipboard_unavailable");
      await navigator.clipboard.writeText(summary);
      setCopyState("copied");
    } catch {
      selectSummary();
    }
  }

  return (
    <div role="status" aria-live="polite">
      <h3 className="text-[22px] font-bold tracking-[-0.02em] text-ink">{f.fallbackTitle}</h3>
      <p className="mt-2 text-[15px] leading-relaxed text-body">
        {f.fallbackPre}
        <b className="select-all font-semibold text-ink">{CONTACT_EMAIL}</b>
        {f.fallbackMid}
        <b className="select-all font-semibold text-ink">{WHATSAPP_DISPLAY}</b>
        {f.fallbackPost}
      </p>
      <div className="mt-4 rounded-lg border border-dashed border-line bg-page px-3.5 py-3">
        <code ref={summaryRef} className="block break-words font-mono text-[12.5px] leading-relaxed text-sub">
          {summary}
        </code>
      </div>
      <div className="mt-4 flex flex-col gap-2.5 sm:flex-row">
        <a
          href={whatsappHref(summary)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex flex-1 items-center justify-center rounded-full bg-brand px-5 py-3.5 text-[15px] font-semibold text-white transition hover:bg-brand-deep"
        >
          {f.sendWhatsApp}
        </a>
        <button
          type="button"
          onClick={copySummary}
          className="inline-flex flex-1 items-center justify-center rounded-full border border-line bg-white px-5 py-3.5 text-[15px] font-semibold text-ink transition hover:border-brand hover:text-brand"
        >
          {copyLabel[copyState]}
        </button>
      </div>
    </div>
  );
}
