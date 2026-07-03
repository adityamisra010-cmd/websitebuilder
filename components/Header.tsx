import { Container, PrimaryLink } from "./ui";
import { contact } from "@/lib/content";

export function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <Container className="flex h-20 items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5" aria-label="Inflection, home">
          {/* Inflection mark: a curve bending up at a point */}
          <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden fill="none">
            <path
              d="M2 19C6 19 8 18 11 14C14 10 17 5 22 5"
              stroke="var(--emerald)"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
            <circle cx="11" cy="14" r="2.4" fill="var(--ink)" stroke="var(--emerald)" strokeWidth="2" />
          </svg>
          <span className="font-display text-lg tracking-tight text-fg">Inflection</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {[
            ["The problem", "#problem"],
            ["Team", "#team"],
            ["The engine", "#engine"],
            ["Pricing", "#pricing"],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="font-mono text-xs uppercase tracking-label text-muted transition-colors hover:text-fg"
            >
              {label}
            </a>
          ))}
        </nav>

        <PrimaryLink href={contact.whatsappHref} className="px-5 py-2.5 text-xs" ariaLabel="Message Inflection on WhatsApp">
          Talk to a founder
        </PrimaryLink>
      </Container>
    </header>
  );
}
