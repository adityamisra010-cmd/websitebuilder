"use client";

import { m, useScroll, useSpring, useReducedMotion } from "framer-motion";

/** Thin top progress bar driven by scroll — animates transform: scaleX only. */
export function ScrollProgress() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });
  if (reduce) return null;
  return (
    <m.div
      aria-hidden
      className="fixed inset-x-0 top-0 z-50 h-0.5 origin-left bg-accent"
      style={{ scaleX }}
    />
  );
}
