import { Container, Eyebrow, Section, Emphasize } from "./ui";
import { Reveal, RevealGroup, itemVariants } from "./motion";
import { MotionItem } from "./MotionItem";
import { whyUs } from "@/lib/content";

export function WhyUs() {
  return (
    <Section id="why" className="border-t border-line">
      <Container>
        <Reveal>
          <Eyebrow>{whyUs.eyebrow}</Eyebrow>
          <h2 className="font-display mt-5 max-w-2xl text-[clamp(1.9rem,4vw,3rem)] text-fg">
            {whyUs.heading}
          </h2>
        </Reveal>

        <RevealGroup className="mt-12 grid gap-6 md:grid-cols-3">
          {whyUs.columns.map((c) => (
            <MotionItem
              key={c.title}
              variants={itemVariants}
              className="panel flex flex-col p-7 transition-transform duration-200 ease-instrument hover:-translate-y-1"
            >
              <span className="inline-flex w-fit items-center gap-2 font-mono text-[0.7rem] uppercase tracking-label text-accent">
                <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-emerald" />
                {c.tag}
              </span>
              <h3 className="font-display mt-5 text-2xl text-fg">{c.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{c.body}</p>
            </MotionItem>
          ))}
        </RevealGroup>

        <Reveal className="mt-12">
          <p className="max-w-3xl text-xl leading-relaxed text-muted sm:text-2xl">
            <Emphasize text={whyUs.closing} accent={whyUs.closingEmphasis} className="text-fg" />
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
