import type { ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-shell px-5 sm:px-8 ${className}`}>{children}</div>
  );
}

/** Mono eyebrow with a small axis-tick marker — a recurring structural device. */
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span aria-hidden className="h-px w-6 bg-accent/60" />
      <span className="eyebrow">{children}</span>
    </div>
  );
}

/**
 * Renders a verbatim string with its trailing clause emphasized, so the copy
 * stays sourced from lib/content.ts (single source of truth) while keeping the
 * two-tone treatment.
 */
export function Emphasize({
  text,
  accent,
  className = "text-accent text-glow",
}: {
  text: string;
  accent: string;
  className?: string;
}) {
  const i = text.indexOf(accent);
  if (i < 0) return <>{text}</>;
  return (
    <>
      {text.slice(0, i)}
      <span className={className}>{text.slice(i)}</span>
    </>
  );
}

/** Primary action — emerald fill, dark ink text (high contrast, AA). */
export function PrimaryLink({
  href,
  children,
  className = "",
  ariaLabel,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
}) {
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      className={`group inline-flex items-center justify-center gap-2.5 rounded-full bg-emerald px-6 py-3.5 font-mono text-sm font-medium tracking-wide text-[#04120c] transition-transform duration-200 ease-instrument hover:-translate-y-0.5 ${className}`}
    >
      {children}
    </a>
  );
}

/** Section shell with consistent vertical rhythm and an id anchor. */
export function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative py-20 sm:py-28 ${className}`}>
      {children}
    </section>
  );
}
