import { Container, Eyebrow, Section, Emphasize } from "./ui";
import { Reveal } from "./motion";
import { pricing } from "@/lib/content";

export function Pricing() {
  return (
    <Section id="pricing" className="border-t border-line">
      <Container>
        <Reveal>
          <Eyebrow>{pricing.eyebrow}</Eyebrow>
          <h2 className="sr-only">Pricing</h2>
        </Reveal>

        <div className="mt-10 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-14">
          {/* the number + what you never pay (kept smaller than the risk line) */}
          <Reveal className="panel p-8">
            <div className="flex items-baseline gap-2">
              <span className="font-display text-[clamp(2rem,5vw,2.9rem)] text-fg">
                {pricing.price}
              </span>
              <span className="font-mono text-sm text-muted">{pricing.cadence}</span>
            </div>
            <ul className="mt-7 space-y-3">
              {pricing.never.map((n) => (
                <li key={n} className="flex items-center gap-3 font-mono text-sm text-faint">
                  <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden className="shrink-0">
                    <path d="M4 8h8" stroke="var(--emerald)" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                  <span className="line-through decoration-line-strong">{n}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* the risk-reversal line — the LARGEST text in the section at every breakpoint
              (floor 2.5rem > price floor 2rem; 7vw > price 5vw; cap 4.2rem > price 2.9rem) */}
          <Reveal delay={0.08}>
            <p className="font-display text-[clamp(2.5rem,7vw,4.2rem)] leading-[1.04] tracking-tight text-fg">
              <Emphasize text={pricing.riskReversal} accent={pricing.riskEmphasis} />
            </p>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
