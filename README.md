# Inflection — landing page

Founder-led performance marketing + CRO agency landing page.
Next.js (App Router) · Tailwind CSS · Framer Motion · TypeScript.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
```

## Production build

```bash
npm run build
npm run start      # serves the optimized build
```

Deploy the repo as-is to **Vercel** or **Netlify** (zero config — they detect Next.js).

## Static export (host anywhere)

Emits a fully static `out/` folder — drop it on any static host (S3, GitHub
Pages, Cloudflare Pages, Nginx) or preview locally with `npx serve out`.

```bash
EXPORT=1 npm run build   # writes ./out
npx serve out            # preview at http://localhost:3000
```

> Serve `out/` from a web root (the asset paths are absolute, e.g. `/_next/...`).
> Opening `index.html` directly via `file://` will not load styles/fonts.

## Structure

- `app/` — layout (self-hosted fonts, metadata) and the page composition.
- `components/` — one file per section plus shared primitives (`ui.tsx`,
  `motion.tsx`) and the signature `InflectionCurve` / `Engine` / `Counter`.
- `lib/content.ts` — all copy in one place (single source of truth).

## Notes

- All copy is verbatim from the brief; no invented stats.
- Animations use only `transform` / `opacity` and respect
  `prefers-reduced-motion`.
- Palette, type, and motion are documented inline; colors are CSS variables in
  `app/globals.css`.
