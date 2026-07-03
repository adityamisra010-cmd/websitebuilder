import { MotionProvider } from "@/components/motion";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Team } from "@/components/Team";
import { Engine } from "@/components/Engine";
import { WhyUs } from "@/components/WhyUs";
import { Pricing } from "@/components/Pricing";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <MotionProvider>
      <a
        href="#contact"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-emerald focus:px-4 focus:py-2 focus:font-mono focus:text-sm focus:text-[#04120c]"
      >
        Skip to contact
      </a>
      <Header />
      <main>
        <Hero />
        <Problem />
        <Team />
        <Engine />
        <WhyUs />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </MotionProvider>
  );
}
