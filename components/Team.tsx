import { Container, Eyebrow, Section } from "./ui";
import { Reveal, RevealGroup, itemVariants } from "./motion";
import { MotionItem } from "./MotionItem";
import { team } from "@/lib/content";

function Monogram({ name }: { name: string }) {
  return (
    <div
      aria-hidden
      className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-line-strong bg-ink-3 sm:h-16 sm:w-16"
    >
      <div className="absolute inset-0 bg-grid-fine opacity-60" />
      <span className="font-display relative text-2xl text-fg">{name.charAt(0)}</span>
      <span className="absolute bottom-1.5 right-1.5 h-1.5 w-1.5 rounded-full bg-emerald" />
    </div>
  );
}

export function Team() {
  return (
    <Section id="team" className="border-t border-line">
      <Container>
        <Reveal>
          <Eyebrow>{team.eyebrow}</Eyebrow>
          <h2 className="font-display mt-5 max-w-2xl text-[clamp(1.9rem,4vw,3rem)] text-fg">
            {team.heading}
          </h2>
        </Reveal>

        <RevealGroup className="mt-12 overflow-hidden rounded-2xl border border-line">
          {team.founders.map((f, i) => (
            <MotionItem
              key={f.name}
              variants={itemVariants}
              className={`grid grid-cols-[auto_1fr] gap-x-5 gap-y-4 bg-ink-2 p-6 transition-colors duration-200 hover:bg-ink-3 sm:grid-cols-[auto_1fr_auto] sm:items-start sm:p-8 ${
                i !== 0 ? "border-t border-line" : ""
              }`}
            >
              <Monogram name={f.name} />

              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                  <h3 className="font-display text-xl text-fg">{f.name}</h3>
                  <span className="inline-flex items-center rounded-full border border-line-strong px-2.5 py-0.5 font-mono text-[0.7rem] uppercase tracking-wide text-muted">
                    {f.role}
                  </span>
                </div>
                <p className="mt-3 max-w-2xl leading-relaxed text-muted">{f.bio}</p>
                <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5">
                  {f.credentials.map((c) => (
                    <li
                      key={c}
                      className="flex items-center gap-1.5 font-mono text-xs text-faint"
                    >
                      <span aria-hidden className="h-1 w-1 rounded-full bg-line-strong" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>

              {/* key stat — the readout, aligned right on desktop */}
              <div className="col-span-2 flex items-center gap-2 border-t border-line pt-4 sm:col-span-1 sm:justify-end sm:border-0 sm:pt-0">
                <span className="font-mono text-sm text-accent">{f.stat}</span>
              </div>
            </MotionItem>
          ))}
        </RevealGroup>
      </Container>
    </Section>
  );
}
