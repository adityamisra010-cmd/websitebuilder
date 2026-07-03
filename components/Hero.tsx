"use client";

import { m, useReducedMotion } from "framer-motion";
import { Container, Eyebrow, PrimaryLink } from "./ui";
import { InflectionCurve } from "./InflectionCurve";
import { hero, contact } from "@/lib/content";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();

  const rise = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 22 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease },
        };

  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-24">
      {/* graph-paper backdrop, faded at edges */}
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid grid-mask" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full opacity-[0.14] blur-3xl"
        style={{ background: "radial-gradient(circle, var(--emerald), transparent 60%)" }}
      />

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          {/* Left: the thesis */}
          <div>
            <m.div {...rise(0)}>
              <Eyebrow>Founder to founder</Eyebrow>
            </m.div>

            <h1 className="font-display mt-6 text-[clamp(2.4rem,6.2vw,4.6rem)]">
              <m.span className="block text-fg" {...rise(0.08)}>
                {hero.headlineLead}
              </m.span>
              <m.span className="block text-emerald text-glow" {...rise(0.18)}>
                {hero.headlineTurn}
              </m.span>
            </h1>

            <m.p
              className="mt-7 max-w-xl text-lg leading-relaxed text-muted"
              {...rise(0.3)}
            >
              {hero.subhead}
            </m.p>

            {/* proof line as three plotted readouts */}
            <m.dl
              className="mt-9 grid max-w-xl grid-cols-3 gap-4 border-t border-line pt-6"
              {...rise(0.4)}
            >
              {hero.proof.map((p) => (
                <div key={p.label}>
                  <dt className="sr-only">{p.label}</dt>
                  <dd>
                    <div className="font-display text-2xl text-fg sm:text-3xl">{p.value}</div>
                    <div className="mt-1 font-mono text-[0.7rem] uppercase tracking-label text-faint">
                      {p.label}
                    </div>
                  </dd>
                </div>
              ))}
            </m.dl>

            <m.div className="mt-9 flex flex-wrap items-center gap-4" {...rise(0.5)}>
              <PrimaryLink href={contact.whatsappHref} ariaLabel="Message Inflection on WhatsApp">
                <WhatsAppGlyph />
                Message us on WhatsApp
              </PrimaryLink>
              <a
                href={contact.emailHref}
                className="font-mono text-sm text-muted underline decoration-line-strong underline-offset-4 transition-colors hover:text-emerald hover:decoration-emerald"
              >
                {contact.email}
              </a>
            </m.div>
          </div>

          {/* Right: the signature curve */}
          <m.div
            className="panel relative overflow-hidden p-5 sm:p-7"
            {...(reduce
              ? {}
              : {
                  initial: { opacity: 0, y: 26 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.8, delay: 0.25, ease },
                })}
          >
            <div className="mb-4 flex items-center justify-between">
              <span className="font-mono text-[0.7rem] uppercase tracking-label text-faint">
                Growth · founder P&amp;L
              </span>
              <span className="flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-label text-emerald">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald" />
                Live
              </span>
            </div>
            <InflectionCurve className="h-auto w-full" />
          </m.div>
        </div>
      </Container>
    </section>
  );
}

function WhatsAppGlyph() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2Zm5.8 14.03c-.24.68-1.4 1.3-1.94 1.35-.5.05-.99.23-3.35-.7-2.82-1.11-4.6-3.98-4.74-4.17-.14-.19-1.13-1.5-1.13-2.86 0-1.36.71-2.03.97-2.31.24-.26.53-.32.71-.32.18 0 .35.002.51.01.16.007.38-.06.6.46.24.56.79 1.94.86 2.08.07.14.12.31.02.5-.09.19-.14.31-.28.48-.14.17-.29.37-.42.5-.14.14-.28.29-.12.57.16.28.72 1.18 1.54 1.91 1.06.95 1.95 1.24 2.23 1.38.28.14.44.12.6-.07.16-.19.69-.8.87-1.08.18-.28.36-.23.6-.14.24.09 1.55.73 1.81.86.26.14.44.21.51.32.07.11.07.66-.17 1.34Z" />
    </svg>
  );
}
