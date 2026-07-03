import { Container } from "./ui";
import { contact } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-line py-12">
      <Container className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div className="flex items-center gap-2.5">
          <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden fill="none">
            <path
              d="M2 19C6 19 8 18 11 14C14 10 17 5 22 5"
              stroke="var(--emerald)"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
            <circle cx="11" cy="14" r="2.4" fill="var(--ink)" stroke="var(--emerald)" strokeWidth="2" />
          </svg>
          <span className="font-display text-fg">Inflection</span>
          <span className="ml-2 font-mono text-xs text-faint">Founder to founder</span>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs text-muted">
          <a href={contact.whatsappHref} className="transition-colors hover:text-accent">
            WhatsApp {contact.whatsappDisplay}
          </a>
          <a href={contact.emailHref} className="transition-colors hover:text-accent">
            {contact.email}
          </a>
        </div>
      </Container>
    </footer>
  );
}
