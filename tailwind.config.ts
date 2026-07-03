import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "var(--ink)",
        "ink-2": "var(--ink-2)",
        "ink-3": "var(--ink-3)",
        fg: "var(--fg)",
        muted: "var(--muted)",
        faint: "var(--faint)",
        emerald: "var(--emerald)",
        "emerald-dim": "var(--emerald-dim)",
        amber: "var(--amber)",
        cyan: "var(--cyan)",
      },
      borderColor: {
        DEFAULT: "var(--line)",
        line: "var(--line)",
        "line-strong": "var(--line-strong)",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        shell: "1200px",
      },
      letterSpacing: {
        label: "0.16em",
      },
      transitionTimingFunction: {
        instrument: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
