import { Container, Section, PrimaryLink } from "./ui";
import { Reveal } from "./motion";
import { cta, contact } from "@/lib/content";

export function CTA() {
  return (
    <Section id="contact" className="relative overflow-hidden border-t border-line">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid grid-mask opacity-60" />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.12] blur-3xl"
        style={{ background: "radial-gradient(circle, var(--emerald), transparent 62%)" }}
      />
      <Container className="relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="font-mono text-[0.7rem] uppercase tracking-label text-emerald">
            {cta.eyebrow}
          </span>
          <h2 className="font-display mt-5 text-[clamp(2.1rem,5vw,3.4rem)] text-fg">
            {cta.heading}
          </h2>

          <div className="mx-auto mt-10 flex justify-center">
            <PrimaryLink
              href={contact.whatsappHref}
              className="px-8 py-4 text-base"
              ariaLabel={`Message Inflection on WhatsApp at ${contact.whatsappDisplay}`}
            >
              <WhatsAppGlyph />
              {cta.buttonLabel}
            </PrimaryLink>
          </div>

          <div className="mt-6 flex flex-col items-center justify-center gap-1.5 font-mono text-sm text-muted sm:flex-row sm:gap-6">
            <a
              href={contact.whatsappHref}
              className="transition-colors hover:text-emerald"
            >
              WhatsApp {contact.whatsappDisplay}
            </a>
            <span aria-hidden className="hidden h-3 w-px bg-line-strong sm:block" />
            <a
              href={contact.emailHref}
              className="underline decoration-line-strong underline-offset-4 transition-colors hover:text-emerald hover:decoration-emerald"
            >
              {contact.email}
            </a>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

function WhatsAppGlyph() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2Zm5.8 14.03c-.24.68-1.4 1.3-1.94 1.35-.5.05-.99.23-3.35-.7-2.82-1.11-4.6-3.98-4.74-4.17-.14-.19-1.13-1.5-1.13-2.86 0-1.36.71-2.03.97-2.31.24-.26.53-.32.71-.32.18 0 .35.002.51.01.16.007.38-.06.6.46.24.56.79 1.94.86 2.08.07.14.12.31.02.5-.09.19-.14.31-.28.48-.14.17-.29.37-.42.5-.14.14-.28.29-.12.57.16.28.72 1.18 1.54 1.91 1.06.95 1.95 1.24 2.23 1.38.28.14.44.12.6-.07.16-.19.69-.8.87-1.08.18-.28.36-.23.6-.14.24.09 1.55.73 1.81.86.26.14.44.21.51.32.07.11.07.66-.17 1.34Z" />
    </svg>
  );
}
