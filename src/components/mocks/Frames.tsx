"use client";

import type { ReactNode } from "react";
import { SIDEBAR_IDS } from "@/lib/mock-data";
import { type SidebarId } from "@/i18n/mocks";
import { useMocks } from "@/i18n/useCopy";

type BrowserProps = { tab: string; children: ReactNode; className?: string };

export function BrowserFrame({ tab, children, className }: BrowserProps) {
  return (
    <div className={`overflow-hidden rounded-2xl border border-line bg-white shadow-float ${className ?? ""}`}>
      <div className="flex items-center gap-3 border-b border-line bg-[#f7f8fb] px-4 py-2.5">
        <span className="flex gap-1.5" aria-hidden>
          <i className="size-2.5 rounded-full bg-[#d7dce4]" />
          <i className="size-2.5 rounded-full bg-[#d7dce4]" />
          <i className="size-2.5 rounded-full bg-[#d7dce4]" />
        </span>
        <span className="rounded-md border border-line bg-white px-3 py-0.5 font-mono text-[11px] text-muted">{tab}</span>
      </div>
      {children}
    </div>
  );
}

type PhoneProps = { children: ReactNode; className?: string; screenClassName?: string };

export function PhoneFrame({ children, className, screenClassName }: PhoneProps) {
  return (
    <div className={`rounded-[46px] bg-ink p-[11px] shadow-float ${className ?? ""}`}>
      <div className={`relative h-full overflow-hidden rounded-[36px] ${screenClassName ?? "bg-page"}`}>
        <span className="absolute left-1/2 top-3 z-10 h-[26px] w-[92px] -translate-x-1/2 rounded-full bg-ink" aria-hidden />
        {children}
      </div>
    </div>
  );
}

type ShellProps = {
  active: SidebarId;
  crumb: string;
  title: string;
  children: ReactNode;
  badge?: ReactNode;
};

export function DashboardShell({ active, crumb, title, children, badge }: ShellProps) {
  const m = useMocks();
  return (
    <div className="grid grid-cols-[150px_1fr]">
      <aside className="border-r border-line bg-white px-3 py-4">
        <div className="mb-5 flex items-center gap-2 px-1">
          <span className="grid size-8 place-items-center rounded-md bg-brand text-[10px] font-bold text-white">HDS</span>
          <span className="leading-tight">
            <b className="block text-[12px] text-ink">HDS</b>
            <span className="block text-[8px] text-muted">Human Development Solutions</span>
          </span>
        </div>
        <ul className="space-y-0.5">
          {SIDEBAR_IDS.map((id) => (
            <li
              key={id}
              className={`rounded-md px-2 py-1.5 text-[10.5px] ${
                id === active ? "bg-brand-tint font-semibold text-brand" : "text-sub"
              }`}
            >
              {m.sidebar[id]}
            </li>
          ))}
        </ul>
      </aside>
      <div className="relative bg-[#f7f8fb] p-5">
        <p className="font-mono text-[9px] tracking-[0.12em] text-faint">{crumb}</p>
        <div className="mb-4 mt-1 flex items-center justify-between">
          <h3 className="text-[17px] font-bold text-ink">{title}</h3>
          {badge}
        </div>
        {children}
        <p className="mt-3 flex justify-end">
          <span className="rounded-md border border-line px-2 py-0.5 font-mono text-[8.5px] tracking-[0.14em] text-faint">
            {m.illustrative}
          </span>
        </p>
      </div>
    </div>
  );
}

export function LiveBadge() {
  const m = useMocks();
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1 font-mono text-[9px] tracking-[0.14em] text-ok shadow-card">
      <span className="relative flex size-2">
        <span className="absolute inline-flex size-full animate-ping rounded-full bg-ok opacity-60" />
        <span className="relative inline-flex size-2 rounded-full bg-ok" />
      </span>
      {m.live}
    </span>
  );
}
