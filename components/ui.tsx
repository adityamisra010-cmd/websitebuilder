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
      <span aria-hidden className="h-px w-6 bg-emerald/60" />
      <span className="eyebrow">{children}</span>
    </div>
  );
}

/** Monospace data chip. */
export function Chip({
  children,
  tone = "line",
}: {
  children: ReactNode;
  tone?: "line" | "amber" | "cyan" | "emerald";
}) {
  const tones: Record<string, string> = {
    line: "border-line-strong text-muted",
    amber: "border-amber/40 text-amber",
    cyan: "border-cyan/40 text-cyan",
    emerald: "border-emerald/40 text-emerald",
  };
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 font-mono text-xs tracking-wide ${tones[tone]}`}
    >
      {children}
    </span>
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

/** Secondary action — outlined, low-emphasis. */
export function GhostLink({
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
      className={`inline-flex items-center justify-center gap-2 rounded-full border border-line-strong px-6 py-3.5 font-mono text-sm tracking-wide text-fg transition-colors duration-200 hover:border-emerald hover:text-emerald ${className}`}
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
