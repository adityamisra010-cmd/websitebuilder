import type { Metadata, Viewport } from "next";
import { Space_Grotesk, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

// Self-hosted at build time by next/font — no external request, no layout shift.
const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-display",
  display: "swap",
});

const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://inflection.partners"),
  title: "Inflection — a founder-grade growth partner for D2C & ecommerce",
  description:
    "Five founders who've built, scaled and rebuilt brands — and backed 60+ more. Performance marketing + CRO on a flat retainer. Pay after the month, not before.",
  keywords: [
    "performance marketing",
    "CRO",
    "D2C",
    "ecommerce",
    "Shopify",
    "blended ROAS",
    "growth agency",
  ],
  openGraph: {
    title: "Inflection — a founder-grade growth partner",
    description:
      "Performance marketing + CRO run by five founders. Flat retainer, no cut of ad spend, pay after the month.",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0a0e14",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
