// Single source of truth for all copy.
// Body copy is used VERBATIM from the brief. Section eyebrows mirror the brief's
// own section labels (PROBLEM / TEAM / THE ENGINE / WHY US / PRICING / CTA);
// section headings, where the brief gives none, are built only from verbatim
// brief fragments. No stats, claims, or marketing prose are invented.

export const contact = {
  whatsappDisplay: "+91 81959 04641",
  whatsappHref: "https://wa.me/918195904641",
  email: "devyansh.misra8@gmail.com",
  emailHref: "mailto:devyansh.misra8@gmail.com",
};

export const hero = {
  headlineLead: "We've been stuck in the same rut.",
  headlineTurn: "So we built our way out.",
  subhead:
    "Five founders who've built, scaled, broken and rebuilt brands — and backed 60+ more. We lived every frustration you're living now, engineered the fix for ourselves, and it worked.",
  proof: [
    { value: "5", label: "founders" },
    { value: "60+", label: "brands backed" },
    { value: "$1.5B+", label: "combined portfolio value" },
  ],
};

// Each problem is a symptom (a broken metric), not a step in a sequence —
// so it is rendered as a diagnostic readout, not a numbered list.
// lead + " " + rest reproduces each brief sentence verbatim.
export const problem = {
  eyebrow: "The problem",
  points: [
    {
      lead: "ROAS that won't scale",
      rest: "no matter how much you pour into it.",
      reading: "plateau" as const,
      metric: "ROAS",
    },
    {
      lead: "Meta ads that worked for months",
      rest: "then, overnight, just stopped.",
      reading: "cliff" as const,
      metric: "META",
    },
    {
      lead: "No content engine that sells,",
      rest: "just posts that sit there.",
      reading: "flat" as const,
      metric: "CONTENT",
    },
    {
      lead: "Revenue keeps climbing",
      rest: "but somehow you're still not making money.",
      reading: "diverge" as const,
      metric: "PROFIT",
    },
  ],
  closing:
    "We've lived every one of these ourselves. So we don't guess, we've already solved them.",
  closingEmphasis: "we've already solved them.",
};

export type Founder = {
  name: string;
  role: string;
  stat: string;
  bio: string;
  credentials: string[];
};

export const team: { eyebrow: string; heading: string; founders: Founder[] } = {
  eyebrow: "The team",
  heading: "Founders on your account", // verbatim brief fragment (Why Us, col 1)
  founders: [
    {
      name: "Aadi",
      role: "D2C Operator",
      stat: "5x ROAS / 7 yrs",
      bio: "Bootstrapped and scaled Ajnaa Jewels for 7 years at consistent 5x ROAS.",
      credentials: ["Wells Fargo", "NTU", "Ajnaa Jewels"],
    },
    {
      name: "Devyansh",
      role: "Operator & Founder",
      stat: "Publicly-listed co.",
      bio: "Heads special projects and new-market launches at a publicly-listed company and Blume Ventures-backed Earkart. Co-founded Vitalcep.",
      credentials: ["Earkart", "Samsung", "Vitalcep"],
    },
    {
      name: "Aditya",
      role: "Founder Vitalcep",
      stat: "Category Builder",
      bio: "Built an entirely new category in India (cordyceps/functional mushrooms), steered the B2C to B2B pivot.",
      credentials: ["Vitalcep", "Category Builder", "B2C to B2B"],
    },
    {
      name: "Rohan",
      role: "Investor vs Operator",
      stat: "$1.5B+ / 60 startups",
      bio: "Investor in 60 startups worth $1.5B+ combined (Zypp Electric, Third Wave Coffee, Unbox Robotics, Outskill). Years at GSF advising founders.",
      credentials: ["GSF", "NTU", "USC", "HDFC"],
    },
    {
      name: "Aujasv",
      role: "Execution & Systems",
      stat: "Multi-$M projects",
      bio: "Engineer turned PM, ran multi-million-dollar projects for entertainment and finance conglomerates.",
      credentials: ["Cisco", "Wells Fargo", "IIM MBA"],
    },
  ],
};

export const engine = {
  eyebrow: "The engine",
  heading: "Profitable, repeatable growth", // verbatim brief fragment
  input: {
    title: "Strategy",
    kind: "Input",
    items: [
      "Positioning",
      "Pricing architecture",
      "Offer design",
      "ICP & messaging",
      "Content engine & UGC pipeline",
    ],
  },
  outputs: [
    {
      key: "performance" as const,
      title: "Performance Marketing",
      kind: "Output A",
      items: [
        "TOF / MOF / BOF funnels",
        "Creative testing velocity",
        "Audience cohorts",
        "Blended ROAS & MER",
      ],
    },
    {
      key: "cro" as const,
      title: "Shopify & CRO",
      kind: "Output B",
      items: [
        "CRO & A/B testing",
        "AOV & LTV uplift",
        "Core Web Vitals / speed",
        "Post-purchase upsells",
      ],
    },
  ],
  converge: {
    // brief: "...profitable, repeatable growth, a healthy LTV:CAC and blended ROAS
    // that compounds into real profit you keep, month after month."
    // No numeric figure is shown — the brief supplies none, so none is invented.
    body:
      "A healthy LTV:CAC and blended ROAS that compounds into real profit you keep, month after month.",
  },
};

export const whyUs = {
  eyebrow: "Why us",
  heading: "A founder-grade growth partner", // verbatim brief fragment (closing)
  columns: [
    {
      title: "Founders on your account",
      body: "Hand-held by the five of us, no handoff to a junior who's never run a brand.",
      tag: "No handoff",
    },
    {
      title: "Operators, not agency people",
      body: "We've built, scaled, pivoted real brands and spent our own money on ads.",
      tag: "Own money on ads",
    },
    {
      title: "Skin in the game",
      body: "Flat fee, no cut of ad spend, you pay only after you're satisfied.",
      tag: "Pay after",
    },
  ],
  closing:
    "Not the cheap freelancer who vanishes, not the bloated agency that bills you for hours. A founder-grade growth partner, on a simple flat retainer.",
  closingEmphasis: "A founder-grade growth partner, on a simple flat retainer.",
};

export const pricing = {
  eyebrow: "Pricing",
  price: "₹50,000",
  cadence: "/month flat",
  never: ["No commission", "No percentage of revenue", "No cut of ad spend"],
  // this line is the largest text in the section, per the brief. Verbatim.
  riskReversal: "Pay after the month, not before, the risk is ours not yours.",
  riskEmphasis: "the risk is ours not yours.",
};

export const cta = {
  eyebrow: "Start the conversation",
  heading: "Message a founder, not a form.", // functional microcopy (no claim/stat)
  buttonLabel: "Message us on WhatsApp",
};
