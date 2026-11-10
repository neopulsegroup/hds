import type { Metadata, Viewport } from "next";
import { Geist_Mono, Instrument_Sans, Instrument_Serif, Nothing_You_Could_Do } from "next/font/google";
import { MotionProvider } from "@/components/ui/MotionProvider";
import { LocaleProvider } from "@/components/i18n/LocaleProvider";
import "./globals.css";

const sans = Instrument_Sans({ variable: "--font-instrument-sans", subsets: ["latin"] });
const serif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["italic"],
});
const mono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const hand = Nothing_You_Could_Do({ variable: "--font-nothing", subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "OFG HDS | Conformidade NR-1 e riscos psicossociais",
  description:
    "Solução integrada para aumentar a produtividade de forma sustentável, atendendo às áreas de riscos psicossociais. Diagnóstico anônimo por área, plano de ação por setor e evidência datada para a NR-1.",
  openGraph: {
    title: "OFG HDS · Human Development Solutions",
    description: "Conformidade NR-1 que a sua empresa consegue provar.",
    locale: "pt_BR",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a4f96",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${sans.variable} ${serif.variable} ${mono.variable} ${hand.variable}`}>
      <body className="min-h-screen">
        <LocaleProvider>
          <MotionProvider>{children}</MotionProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}
