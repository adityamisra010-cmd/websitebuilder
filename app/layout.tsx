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
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#eef2f6" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0e14" },
  ],
  width: "device-width",
  initialScale: 1,
};

// Runs before paint: applies the saved theme (default light) with no flash.
const themeInit = `(function(){try{var t=localStorage.getItem('theme')||'light';document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','light');}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-theme="light"
      suppressHydrationWarning
      className={`${display.variable} ${sans.variable} ${mono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
