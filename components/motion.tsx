"use client";

import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * LazyMotion + domAnimation loads only the DOM animation feature set,
 * cutting Framer's runtime substantially — matters for a page that
 * literally sells Core Web Vitals.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <LazyMotion features={domAnimation}>{children}</LazyMotion>;
}

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: "div" | "section" | "li" | "article" | "span";
  once?: boolean;
};

/**
 * Scroll-triggered reveal. Animates ONLY transform (translateY) and opacity.
 * Under prefers-reduced-motion it renders the final state with no motion.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 18,
  as = "div",
  once = true,
}: RevealProps) {
  const reduce = useReducedMotion();
  const MComp = m[as] as typeof m.div;

  if (reduce) {
    const Static = as as "div";
    return <Static className={className}>{children}</Static>;
  }

  return (
    <MComp
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-12% 0px -12% 0px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MComp>
  );
}

/** Staggered container — children should be <Reveal> or m elements. */
export function RevealGroup({
  children,
  className,
  stagger = 0.08,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <m.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-12% 0px -12% 0px" }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger } },
      }}
    >
      {children}
    </m.div>
  );
}

export const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};
