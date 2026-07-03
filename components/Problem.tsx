import { Container, Eyebrow, Section } from "./ui";
import { Reveal, RevealGroup, itemVariants } from "./motion";
import { MotionItem } from "./MotionItem";
import { problem } from "@/lib/content";

// A broken-metric sparkline per symptom. Static shapes — the reading itself
// carries the meaning, so nothing needs to "draw".
function MiniSignal({ reading }: { reading: "plateau" | "cliff" | "flat" | "diverge" }) {
  const stroke = "var(--faint)";
  const common = {
    fill: "none",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  return (
    <svg viewBox="0 0 128 44" className="h-11 w-32" aria-hidden>
      {reading === "plateau" && (
        <>
          <path d="M4 40 C 20 40, 30 14, 48 12 C 66 10, 80 12, 124 12" stroke={stroke} {...common} />
          <circle cx="124" cy="12" r="2.5" fill="var(--faint)" />
        </>
      )}
      {reading === "cliff" && (
        <>
          <path d="M4 16 L 62 16 L 74 16 C 82 16, 84 38, 124 40" stroke={stroke} {...common} />
          <line x1="70" y1="8" x2="70" y2="42" stroke="var(--line-strong)" strokeWidth="1" strokeDasharray="2 3" />
        </>
      )}
      {reading === "flat" && (
        <path d="M4 36 L 124 36" stroke={stroke} {...common} strokeDasharray="1 6" />
      )}
      {reading === "diverge" && (
        <>
          {/* revenue climbs */}
          <path d="M4 34 C 40 30, 80 16, 124 6" stroke="var(--muted)" {...common} />
          {/* profit stays flat */}
          <path d="M4 34 L 124 33" stroke="var(--faint)" {...common} strokeDasharray="2 4" />
        </>
      )}
    </svg>
  );
}

export function Problem() {
  return (
    <Section id="problem" className="border-t border-line">
      <Container>
        <Reveal>
          <Eyebrow>{problem.eyebrow}</Eyebrow>
        </Reveal>

        <RevealGroup className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
          {problem.points.map((p) => (
            <MotionItem key={p.metric} variants={itemVariants} className="bg-ink-2 p-6 sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <span className="font-mono text-[0.7rem] uppercase tracking-label text-faint">
                  {p.metric}
                </span>
                <MiniSignal reading={p.reading} />
              </div>
              <p className="mt-5 text-xl leading-snug text-fg sm:text-2xl">
                <span className="font-medium">{p.lead}</span>{" "}
                <span className="text-muted">{p.rest}</span>
              </p>
            </MotionItem>
          ))}
        </RevealGroup>

        <Reveal className="mt-12" delay={0.05}>
          <p className="max-w-3xl text-2xl leading-snug text-fg sm:text-[1.9rem]">
            We&apos;ve lived every one of these ourselves. So we don&apos;t guess,{" "}
            <span className="text-emerald text-glow">we&apos;ve already solved them.</span>
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
