"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useScroll, useSpring } from "motion/react";
import { Menu, X } from "lucide-react";
import { whatsappHref } from "@/lib/site";
import { FOOTER_NAV, NAV_LABELS, PRIMARY_NAV, UI } from "@/lib/i18n";
import { useLocale } from "@/components/i18n/LocaleProvider";
import { LocaleSwitcher } from "@/components/ui/LocaleSwitcher";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

function useActiveSection(ids: readonly string[]): string | null {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) setActive(visible[0].target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

/* Observa todas as secções, para o destaque sair do menu quando a secção visível não está nele. */
const NAV_IDS = ["topo", ...FOOTER_NAV];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const active = useActiveSection(NAV_IDS);
  const { locale } = useLocale();
  const labels = NAV_LABELS[locale];
  const ui = UI[locale];
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30 });

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setIsOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  const isSolid = isScrolled || isOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,border-color] duration-300 ${
        isSolid ? "border-b border-line bg-white/90 shadow-[0_8px_30px_-20px_rgba(14,23,38,0.4)] backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1180px] items-center justify-between gap-4 px-4 md:h-[72px] md:px-8">
        <a href="#topo" className="flex items-center gap-3" aria-label={ui.backToTop}>
          <Image
            src="/ofg-hds-logo.svg"
            alt="OFG HDS · Human Development Solutions"
            width={505}
            height={126}
            priority
            unoptimized
            className="h-9 w-auto md:h-10"
          />
        </a>

        <nav className="hidden items-center gap-0.5 xl:flex" aria-label={ui.sections}>
          {PRIMARY_NAV.map((id) => {
            const isActive = active === id;
            return (
              <a
                key={id}
                href={`#${id}`}
                className={`relative whitespace-nowrap rounded-full px-3 py-2 text-[14px] transition-colors ${
                  isActive ? "text-brand" : "text-sub hover:text-ink"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-brand-tint"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative">{labels[id]}</span>
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <LocaleSwitcher className="hidden sm:inline-flex" />
          <a
            href="#contato"
            className="hidden items-center gap-2 whitespace-nowrap rounded-full bg-brand px-4 py-2.5 text-[14px] font-semibold text-white transition hover:-translate-y-px hover:bg-brand-deep sm:inline-flex"
          >
            {ui.requestCta}
          </a>
          <button
            type="button"
            onClick={() => setIsOpen((v) => !v)}
            className="grid size-10 place-items-center rounded-full border border-line bg-white text-ink xl:hidden"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? ui.closeMenu : ui.openMenu}
          >
            {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <motion.div className="absolute inset-x-0 bottom-[-1px] h-[2px] origin-left bg-brand" style={{ scaleX: progress }} aria-hidden />

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            id="mobile-menu"
            aria-label="Menu"
            className="overflow-hidden border-t border-line bg-white xl:hidden"
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <ul className="px-4 py-3">
              {PRIMARY_NAV.map((id, i) => (
                <motion.li
                  key={id}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <a
                    href={`#${id}`}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between border-b border-line py-3.5 text-[17px] font-medium text-ink"
                  >
                    {labels[id]}
                    <span className="font-mono text-[11px] text-faint">{String(i + 1).padStart(2, "0")}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="flex items-center justify-between px-4 pb-1">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-faint">{ui.language}</span>
              <LocaleSwitcher />
            </div>
            <div className="grid gap-2 px-4 pb-5 pt-3">
              <a
                href="#contato"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center rounded-full bg-brand py-3.5 text-[15px] font-semibold text-white"
              >
                {ui.requestCta}
              </a>
              <a
                href={whatsappHref()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full border border-line py-3.5 text-[15px] font-semibold text-ink"
              >
                <WhatsAppIcon className="size-5 text-whats" />
                {ui.whatsappCta}
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
