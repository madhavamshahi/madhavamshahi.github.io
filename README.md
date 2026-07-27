# madhavamshahi.github.io

Personal site for Madhavam Shahi — founder & CEO of AltOps.

Next.js 15 (static export) · Tailwind CSS 4 · Motion.
The palette, display face (PP Formula), and logo mark come from the AltOps
product design system so the two sites read as one brand.

Scrolling is native. No smooth-scroll hijacking, no `blur()` filter layers,
no `mix-blend-mode` overlay — those were what made scrolling feel heavy. The
grain is baked into the body background instead, and the warm glows are plain
radial gradients.

Display leading is `1.06`, not the `0.96` the AltOps hero uses. Anything
tighter clips ascenders and descenders inside the reveal masks; `.mask-line`
adds the extra room without shifting the line.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to ./out
```

## Content

Everything on the page — roles, projects, awards, metrics, links — lives in
[`app/lib/content.ts`](app/lib/content.ts). Edit that file, not the components.

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds and
publishes `out/` to GitHub Pages.

One-time setup: in the repo's **Settings → Pages**, set **Source** to
**GitHub Actions**.

## Structure

```
app/
  layout.tsx          fonts, metadata
  page.tsx            section order
  globals.css         AltOps design tokens + utilities
  lib/content.ts      all copy and data
  components/
    Primitives.tsx    logo mark, reveal, mask-lines, magnetic, section label
    Cursor.tsx        custom two-part cursor (fine pointers only)
    Nav.tsx           progress bar, glass nav, mobile menu
    Hero.tsx  AltOps.tsx  Work.tsx
    Built.tsx  About.tsx  Contact.tsx
```

## Tone

Plain first person. No superlatives, no acceptance rates, no numbers that
exist only to impress. If a line sounds like a pitch deck, rewrite it.
