# Vitalcep Shopify Sections

Shopify OS 2.0 sections converted from the Vitalcep React prototype design.
All classes are prefixed `vc-` — they will not conflict with your existing theme.

## Files

```
shopify-sections/
├── assets/
│   └── vitalcep-theme.css       ← Design tokens + all component CSS
├── sections/
│   ├── vc-announcement-bar.liquid
│   ├── vc-hero.liquid            ← Two variants: split (A) and full-bleed (B)
│   ├── vc-trust-bar.liquid
│   ├── vc-featured-collection.liquid
│   ├── vc-benefits.liquid        ← Dark section, 3-col grid
│   ├── vc-social-proof.liquid    ← Stats + review cards + reviews app slot
│   ├── vc-faq.liquid             ← CSS-only accordion (no JS needed)
│   ├── vc-incentive.liquid       ← Email capture strip
│   ├── vc-cta-band.liquid
│   └── vc-tea-strip.liquid
└── snippets/
    ├── vc-product-card.liquid    ← Used by vc-featured-collection
    └── vc-cart-drawer.liquid     ← HTML/CSS shell, your existing cart JS drives it
```

## Installation

### Step 1 — Upload the CSS asset

In Shopify Admin → Online Store → Themes → current theme → **Edit code**:

1. Open `Assets/` folder
2. Click **Add a new asset** → upload `assets/vitalcep-theme.css`

### Step 2 — Upload the sections

In the same code editor:

1. Open `Sections/` folder
2. For each file in `sections/`, click **Add a new section** and paste the content  
   (or drag-and-drop if your editor supports it)

### Step 3 — Upload the snippets

1. Open `Snippets/` folder
2. For each file in `snippets/`, click **Add a new snippet** and paste the content

### Step 4 — Add sections to your theme

Go to **Online Store → Themes → Customize**:

- Each `vc-*` section now appears in the **Add section** panel
- Drag them into position anywhere on any page template
- All settings are editable in the customizer sidebar

## Safe integration notes

### What these sections touch
- Only their own `vc-*` CSS classes (scoped, no global selectors)
- The `vitalcep-theme.css` asset (additive, no overrides of existing styles)

### What these sections do NOT touch
- GTM / Meta Pixel / GA tags — completely untouched
- Checkout flow or cart JavaScript
- Your existing reviews app (Judge.me, Stamped, Okendo, etc.)
- Any Shopify apps or plugins
- Your theme's existing header, footer, or navigation

### Reviews app integration

The **VC Social Proof** section has a built-in slot for your existing reviews app.
In the customizer, enable **"Show reviews app widget"** and paste your app's snippet
into the **"Reviews app snippet"** field. For example:

- Judge.me: `{% render 'judgeme_widgets', widget_type: 'judgeme_all_reviews_widget', concierge_install: true, product: product %}`
- Stamped: `{% render 'stamped-main-widget', product: product %}`
- Okendo: `{% render 'okendo-reviews-widget', product: product %}`

### Cart drawer

`vc-cart-drawer.liquid` is an HTML/CSS shell only. Your existing theme cart JS
(AJAX cart, quantity updates, remove items) continues to work. To wire up the
open/close animation, add/remove the `is-open` class on:
- `#vc-cart-drawer` (the drawer panel)
- `#vc-drawer-overlay` (the background scrim)

## Design tokens quick reference

All values live in `:root` inside `vitalcep-theme.css`:

| Token | Value | Use |
|-------|-------|-----|
| `--vc-ink` | `#221F1A` | Primary text |
| `--vc-cream` | `#F5F0E8` | Background |
| `--vc-orange` | `#E8621A` | Brand accent |
| `--vc-cta-blue` | `#1B4DF5` | Primary CTA buttons only |
| `--vc-green` | `#2D7D4E` | Success / trust |
| `--vc-serif` | Spectral | Headlines |
| `--vc-sans` | Mulish | Body / UI |
