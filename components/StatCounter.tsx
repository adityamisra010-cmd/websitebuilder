"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

/**
 * Counts a numeric value up when scrolled into view, with an optional prefix
 * and suffix (e.g. "$" … "B+"). Text-only updates; no animated CSS properties.
 */
export function StatCounter({
  to,
  prefix = "",
  suffix = "",
  decimals = 0,
  durationMs = 1400,
  delay = 0,
}: {
  to: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  durationMs?: number;
  delay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });
  const reduce = useReducedMotion();
  const [value, setValue] = useState(reduce ? to : 0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setValue(to);
      return;
    }
    let raf = 0;
    let start: number | null = null;
    const ease = (t: number) => 1 - Math.pow(1 - t, 3);
    const run = (ts: number) => {
      if (start === null) start = ts + delay;
      const p = Math.min(Math.max(ts - start, 0) / durationMs, 1);
      setValue(to * ease(p));
      if (p < 1) raf = requestAnimationFrame(run);
    };
    raf = requestAnimationFrame(run);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduce, to, durationMs, delay]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {value.toFixed(decimals)}
      {suffix}
    </span>
  );
}
