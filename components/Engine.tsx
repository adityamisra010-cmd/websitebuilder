"use client";

import { m, useReducedMotion } from "framer-motion";
import type { ReactNode, CSSProperties } from "react";
import { Container, Eyebrow, Section } from "./ui";
import { engine } from "@/lib/content";

const ease = [0.22, 1, 0.36, 1] as const;
const vp = { once: true, margin: "-15% 0px -15% 0px" } as const;

/** A node/element that fades + rises into place on scroll (transform + opacity). */
function Flow({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <m.div
      className={className}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={vp}
      transition={{ duration: 0.55, delay, ease }}
    >
      {children}
    </m.div>
  );
}

/** A connector rail drawn by scaling (never width/height animation). */
function Rail({
  axis,
  color,
  delay,
  className = "",
  style,
}: {
  axis: "x" | "y";
  color: string;
  delay: number;
  className?: string;
  style?: CSSProperties;
}) {
  const reduce = useReducedMotion();
  const origin = axis === "y" ? "top" : "center";
  return (
    <m.span
      aria-hidden
      className={className}
      style={{ background: color, transformOrigin: origin, display: "block", ...style }}
      initial={reduce ? false : { [axis === "y" ? "scaleY" : "scaleX"]: 0 }}
      whileInView={{ scaleY: 1, scaleX: 1 }}
      viewport={vp}
      transition={{ duration: 0.45, delay, ease }}
    />
  );
}

/** Honest compounding visual — bars rising left→right. No fabricated figure. */
function CompoundingBars() {
  const reduce = useReducedMotion();
  const heights = [22, 30, 40, 52, 66, 82, 100];
  return (
    <div
      className="mx-auto flex h-24 max-w-xs items-end justify-center gap-2"
      role="img"
      aria-label="A compounding bar chart rising month over month."
    >
      {heights.map((h, i) => (
        <m.span
          key={h}
          className="w-5 rounded-t-sm bg-emerald"
          style={{ height: `${h}%`, transformOrigin: "bottom", opacity: 0.35 + (i / heights.length) * 0.65 }}
          initial={reduce ? false : { scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={vp}
          transition={{ duration: 0.5, delay: 1.15 + i * 0.08, ease }}
        />
      ))}
    </div>
  );
}

function NodeCard({
  kind,
  title,
  items,
  tone,
}: {
  kind: string;
  title: string;
  items: string[];
  tone: "input" | "amber" | "cyan";
}) {
  const ring =
    tone === "amber" ? "border-amber/40" : tone === "cyan" ? "border-cyan/40" : "border-line-strong";
  const dot = tone === "amber" ? "bg-amber" : tone === "cyan" ? "bg-cyan" : "bg-emerald";
  const kindColor =
    tone === "amber" ? "text-amber" : tone === "cyan" ? "text-cyan" : "text-accent";
  return (
    <div className={`panel relative z-10 border ${ring} h-full p-6`}>
      <div className="flex items-center justify-between">
        <span className={`font-mono text-[0.7rem] uppercase tracking-label ${kindColor}`}>{kind}</span>
        <span className={`h-2 w-2 rounded-full ${dot}`} />
      </div>
      <h3 className="font-display mt-3 text-2xl text-fg">{title}</h3>
      <ul className="mt-4 space-y-2">
        {items.map((it) => (
          <li key={it} className="flex items-start gap-2.5 font-mono text-[0.82rem] text-muted">
            <span className={`mt-1.5 h-1 w-1 shrink-0 rounded-full ${dot}`} />
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Centered vertical rail in a flex cell (used for the grid-aligned drop/collect stems). */
function CellStem({ color, delay }: { color: string; delay: number }) {
  return (
    <div className="flex justify-center">
      <Rail axis="y" color={color} delay={delay} className="h-8 w-px" />
    </div>
  );
}

export function Engine() {
  const [perf, cro] = engine.outputs;
  // distance between the two card centers in a 2-col grid with gap-8 (2rem):
  const busWidth = "calc(50% + 1rem)";

  return (
    <Section id="engine" className="relative overflow-hidden border-t border-line">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid grid-mask opacity-70" />
      <Container className="relative">
        <Flow>
          <Eyebrow>{engine.eyebrow}</Eyebrow>
          <h2 className="font-display mt-5 max-w-3xl text-[clamp(1.9rem,4vw,3.1rem)] text-fg">
            Strategy in. <span className="text-accent text-glow">{engine.heading}</span> out.
          </h2>
        </Flow>

        {/* ---- The flow diagram ---- */}
        <div className="relative mx-auto mt-14 max-w-4xl">
          {/* 1 · Strategy input */}
          <Flow className="mx-auto max-w-xl" delay={0}>
            <NodeCard
              kind={engine.input.kind}
              title={engine.input.title}
              items={engine.input.items}
              tone="input"
            />
          </Flow>

          {/* down-stem into the split (both breakpoints) */}
          <div className="flex justify-center">
            <Rail axis="y" color="var(--line-strong)" delay={0.3} className="h-9 w-px" />
          </div>

          {/* 2 · Split connectors — desktop only, grid-aligned to card centers */}
          <div className="relative hidden sm:block">
            <span
              aria-hidden
              className="absolute left-1/2 top-0 h-px -translate-x-1/2 bg-line-strong"
              style={{ width: busWidth }}
            />
            <div className="grid grid-cols-2 gap-8">
              <CellStem color="var(--amber)" delay={0.5} />
              <CellStem color="var(--cyan)" delay={0.5} />
            </div>
          </div>

          {/* cards (with a mobile spine behind them so the flow stays connected) */}
          <div className="relative grid gap-6 pt-6 sm:grid-cols-2 sm:gap-8 sm:pt-8">
            <span
              aria-hidden
              className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-line-strong sm:hidden"
            />
            <Flow delay={0.55}>
              <NodeCard kind={perf.kind} title={perf.title} items={perf.items} tone="amber" />
            </Flow>
            <Flow delay={0.65}>
              <NodeCard kind={cro.kind} title={cro.title} items={cro.items} tone="cyan" />
            </Flow>
          </div>

          {/* 3 · Converge connectors — desktop only */}
          <div className="relative hidden sm:block">
            <div className="grid grid-cols-2 gap-8">
              <CellStem color="var(--amber)" delay={0.85} />
              <CellStem color="var(--cyan)" delay={0.85} />
            </div>
            <span
              aria-hidden
              className="absolute left-1/2 top-8 h-px -translate-x-1/2 bg-emerald"
              style={{ width: busWidth }}
            />
          </div>
          {/* final down-stem to the outcome (both breakpoints) */}
          <div className="flex justify-center pt-6 sm:pt-8">
            <Rail axis="y" color="var(--emerald)" delay={1.05} className="h-9 w-px" />
          </div>

          {/* 4 · The compounding outcome (no fabricated figure) */}
          <Flow delay={1.1} className="mx-auto max-w-xl">
            <div
              className="panel relative overflow-hidden border border-accent/40 p-7 text-center"
              style={{ boxShadow: "0 0 60px -20px var(--glow-emerald)" }}
            >
              <span className="font-mono text-[0.7rem] uppercase tracking-label text-accent">
                {engine.heading}
              </span>
              <div className="mt-6">
                <CompoundingBars />
              </div>
              <p className="mx-auto mt-6 max-w-md leading-relaxed text-muted">
                {engine.converge.body}
              </p>
            </div>
          </Flow>
        </div>
      </Container>
    </Section>
  );
}
