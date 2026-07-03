import { Container } from "./ui";

// Institutions the team has built, backed or studied across — every name is
// verbatim from the brief's team credentials and portfolio.
const NAMES = [
  "Ajnaa Jewels",
  "Wells Fargo",
  "NTU",
  "Earkart",
  "Samsung",
  "Vitalcep",
  "GSF",
  "USC",
  "HDFC",
  "Cisco",
  "IIM",
  "Zypp Electric",
  "Third Wave Coffee",
  "Unbox Robotics",
  "Outskill",
];

function Group({ hidden }: { hidden?: boolean }) {
  return (
    <ul
      className="flex shrink-0 items-center gap-12 pr-12"
      aria-hidden={hidden}
    >
      {NAMES.map((n) => (
        <li key={n} className="flex items-center gap-3 whitespace-nowrap font-display text-lg text-muted">
          <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent/70" />
          {n}
        </li>
      ))}
    </ul>
  );
}

export function TrustMarquee() {
  return (
    <div className="border-y border-line py-6">
      <Container>
        <p className="mb-5 text-center font-mono text-[0.7rem] uppercase tracking-label text-faint">
          Built · backed · studied across
        </p>
      </Container>
      <div
        className="marquee-group relative flex overflow-hidden"
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, transparent, #000 12%, #000 88%, transparent)",
          maskImage: "linear-gradient(to right, transparent, #000 12%, #000 88%, transparent)",
        }}
      >
        {/* one track with two identical halves → translateX(-50%) loops seamlessly */}
        <div className="marquee-track flex w-max">
          <Group />
          <Group hidden />
        </div>
      </div>
    </div>
  );
}
