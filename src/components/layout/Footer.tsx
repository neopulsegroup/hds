"use client";

import Image from "next/image";
import { SITE_LABEL, SITE_URL, WHATSAPP_DISPLAY, whatsappHref } from "@/lib/site";
import { FOOTER_NAV, NAV_LABELS, UI } from "@/lib/i18n";
import { useLocale } from "@/components/i18n/LocaleProvider";
import { OFFICES } from "@/lib/content";

export function Footer() {
  const { locale } = useLocale();
  const labels = NAV_LABELS[locale];
  const ui = UI[locale];

  return (
    <footer className="border-t border-line bg-page">
      <div className="mx-auto grid max-w-[1120px] gap-x-10 gap-y-8 px-4 py-10 md:grid-cols-[1fr_1fr_1.3fr] md:px-8">
        <div>
          <Image
            src="/ofg-hds-logo.svg"
            alt="OFG HDS · Human Development Solutions"
            width={505}
            height={126}
            unoptimized
            className="h-11 w-auto"
          />
          <p className="mt-4 max-w-[320px] text-[14px] leading-relaxed text-sub">{ui.footerTagline}</p>
          <ul className="mt-5 space-y-1.5 text-[14px]">
            <li>
              <a href={whatsappHref()} target="_blank" rel="noopener noreferrer" className="text-sub hover:text-brand">
                WhatsApp {WHATSAPP_DISPLAY}
              </a>
            </li>
            <li>
              <a href={SITE_URL} target="_blank" rel="noopener noreferrer" className="text-sub hover:text-brand">
                {SITE_LABEL}
              </a>
            </li>
          </ul>
        </div>
        <nav aria-label={ui.footerNavHeading}>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-faint">{ui.footerNavHeading}</p>
          <ul className="mt-4 grid grid-cols-2 gap-x-8 gap-y-2 text-[14px]">
            {FOOTER_NAV.map((id) => (
              <li key={id}>
                <a href={`#${id}`} className="text-sub transition-colors hover:text-brand">
                  {labels[id]}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-faint">{ui.footerContactHeading}</p>
          <div className="mt-4 grid gap-6 sm:grid-cols-2">
            {OFFICES.map((office) => (
              <address key={office.country} className="text-[13.5px] not-italic leading-relaxed text-sub">
                <b className="block font-mono text-[10px] uppercase tracking-[0.2em] text-brand">{office.country}</b>
                {office.lines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
                <span className="block">{office.phone}</span>
                <a href={`mailto:${office.email}`} className="block hover:text-brand">
                  {office.email}
                </a>
              </address>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-[1120px] flex-col gap-2 px-4 py-5 font-mono text-[11px] uppercase tracking-[0.16em] text-faint sm:flex-row sm:justify-between md:px-8">
          <span className="flex items-center gap-3">
            <Image src="/ofg-logo.png" alt="OFG · Oporto Forte Group" width={70} height={30} className="h-6 w-auto" />
            {ui.footerSolution}
          </span>
          <span>{ui.illustrativeScreens}</span>
        </div>
      </div>
    </footer>
  );
}
