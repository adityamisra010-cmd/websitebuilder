import { Container, Eyebrow, Section } from "./ui";
import { Reveal } from "./motion";
import { pricing } from "@/lib/content";

export function Pricing() {
  return (
    <Section id="pricing" className="border-t border-line">
      <Container>
        <Reveal>
          <Eyebrow>{pricing.eyebrow}</Eyebrow>
        </Reveal>

        <div className="mt-10 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-14">
          {/* the number + what you never pay */}
          <Reveal className="panel p-8">
            <div className="flex items-baseline gap-2">
              <span className="font-display text-[clamp(2.6rem,7vw,3.4rem)] text-fg">
                {pricing.price}
              </span>
              <span className="font-mono text-sm text-muted">{pricing.cadence}</span>
            </div>
            <ul className="mt-7 space-y-3">
              {pricing.never.map((n) => (
                <li key={n} className="flex items-center gap-3 font-mono text-sm text-faint">
                  <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden className="shrink-0">
                    <path
                      d="M4 8h8"
                      stroke="var(--emerald)"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="line-through decoration-line-strong">{n}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* the risk-reversal line — largest text in the section */}
          <Reveal delay={0.08}>
            <p className="font-display text-[clamp(2.3rem,5.6vw,4rem)] leading-[1.04] tracking-tight">
              <span className="text-fg">Pay after the month, not before, </span>
              <span className="text-accent text-glow">the risk is ours not yours.</span>
            </p>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
