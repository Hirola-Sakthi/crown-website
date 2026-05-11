# Lovio — React + Vite + Tailwind + GSAP

A 1:1 React port of the [Lovio Webflow template](https://lovio.webflow.io/home-a) (`/home-a` page).

## Stack
- **Vite** + **React 18** — build tool / runtime
- **Tailwind CSS** — utility framework (preserved for future custom sections)
- **GSAP + ScrollTrigger** — replicates Webflow IX2 scroll-into-view fade-ins with the same `cubic-bezier(.25, .46, .45, .94)` easing the original CSS uses
- **Swiper** — replaces Webflow's `w-slider` for the testimonials carousel

## Run

```bash
npm install
npm run dev      # → http://localhost:5173
npm run build    # production build to /dist
npm run preview  # serve the production build
```

## Architecture decisions

**Why is the original Webflow CSS imported verbatim?**
Converting 7,157 lines of Webflow-generated CSS to Tailwind utilities would have introduced visual drift on a "100% match" brief. Importing the original stylesheet gives pixel-exact layout and typography for free; Tailwind is still set up and ready to use for any new sections you add.

**Order matters:** in `src/main.jsx`, `webflow.css` is imported BEFORE `globals.css` (which holds the Tailwind directives). This way Tailwind's preflight does not clobber Webflow's typography rules.

**Animation pattern**
The original site uses Webflow IX2 "Scroll Into View" with `opacity:0 → 1` and a small Y-translate. Look in any component for `data-reveal`, `data-reveal-group`/`data-reveal-child`, or `data-hero-reveal` attributes — the `useScrollReveal` hook (`src/hooks/useScrollReveal.js`) wires them to GSAP timelines. Tweak `duration`, `stagger`, or `start` thresholds there to retune the feel globally.

**Cart drawer**
The Webflow Ecommerce cart is wired up as a static decorative drawer (opens, closes, shows empty state). To make it functional, replace `Navbar.jsx` cart logic with your provider of choice (Stripe / Shopify / Medusa).

## File layout

```
lovio-react/
├── index.html              # entry HTML, loads Google Fonts (Marcellus, Montserrat, Homemade Apple)
├── public/images/          # all 42 site assets (renamed from Webflow hashes)
├── src/
│   ├── main.jsx            # entry point — CSS import order matters here
│   ├── App.jsx             # composes the 10 sections in order
│   ├── styles/
│   │   ├── webflow.css     # ORIGINAL Webflow stylesheet, verbatim (7157 lines)
│   │   └── globals.css     # Tailwind directives + small overrides
│   ├── hooks/
│   │   └── useScrollReveal.js   # GSAP ScrollTrigger fade-in hook
│   ├── data/
│   │   └── content.js      # all text + image data centralized
│   └── components/
│       ├── Navbar.jsx
│       ├── Hero.jsx
│       ├── Quote.jsx
│       ├── Services.jsx
│       ├── PostcardAbout.jsx
│       ├── Galleries.jsx
│       ├── Testimonials.jsx
│       ├── Portfolio.jsx
│       ├── PostcardContact.jsx
│       └── Footer.jsx
├── tailwind.config.js      # brand color tokens exposed to Tailwind
├── postcss.config.js
├── vite.config.js
└── package.json
```

## Editing content

Text and image references are in `src/data/content.js`. To change a service description, swap a hero image, or update a testimonial, edit there — the components re-render automatically.

## Known gaps / next steps

1. **Single-page only.** Original site has Home A/B/C, Portfolio (+ detail), About A/B/C, Services A/B/C, Journal, Shop, Contact. This port is `/home-a` only. Re-scrape additional pages and add routes (e.g. with `react-router-dom`) to extend.
2. **Cart is decorative.** No real ecommerce wiring.
3. **Animation feel is matched, not pixel-exact.** The IX2 JSON was not in the saveweb2zip export, so timings were inferred from the visible patterns + the easing that Webflow uses across CSS transitions. If you want frame-perfect match, send a screen recording of the live site and we can retune `duration`/`stagger`/`distance` values in `useScrollReveal.js`.
4. **No tests.** Add as needed.

## Build verification

Last verified build:
- CSS bundle: **118.98 KB** (gzip: 22.31 KB)
- JS bundle: **372.71 KB** (gzip: 124.96 KB)
- HTML: **1.17 KB**
- Total chunks: 88 modules
