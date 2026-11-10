import type { InfoItem } from "@/lib/content";
import { Reveal } from "./Reveal";

type Props = {
  items: readonly InfoItem[];
  tone?: "dark" | "light";
  className?: string;
};

const STYLES = {
  dark: {
    card: "border border-line bg-white shadow-card",
    label: "text-brand",
    title: "text-ink",
    text: "text-sub",
    glyph: "text-brand",
  },
  light: {
    card: "border border-white/12 bg-white/[0.06] backdrop-blur-sm",
    label: "text-[#9cc4f2]",
    title: "text-white",
    text: "text-white/75",
    glyph: "text-sun",
  },
} as const;

/** Grelha de 4 cartões do anexo: rótulo mono, título e texto. */
export function InfoCards({ items, tone = "dark", className }: Props) {
  const s = STYLES[tone];
  return (
    <div className={`grid gap-4 sm:grid-cols-2 lg:grid-cols-4 ${className ?? ""}`}>
      {items.map((item, i) => (
        <Reveal key={item.title} delay={i * 0.1} className={`flex flex-col rounded-2xl p-6 ${s.card}`}>
          {item.glyph && (
            <span className={`mb-4 text-[38px] font-bold leading-none tracking-[-0.04em] ${s.glyph}`}>{item.glyph}</span>
          )}
          {item.label && (
            <span className={`font-mono text-[10px] font-bold uppercase tracking-[0.2em] ${s.label}`}>{item.label}</span>
          )}
          <b className={`mt-2 block text-[17px] font-bold leading-snug tracking-[-0.01em] ${s.title}`}>{item.title}</b>
          <p className={`mt-2 text-[14.5px] leading-relaxed ${s.text}`}>{item.text}</p>
        </Reveal>
      ))}
    </div>
  );
}
