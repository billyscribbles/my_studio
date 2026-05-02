# Onrai Studio — Claude Code Guidelines

## Project

React + Vite + Framer Motion landing site for Onrai Studio (AU web agency).
Routes: `/`, `/services`, `/portfolio`, `/ai`, `/about`, `/contact`

### What the business does

- **AI-accelerated web builds.** We design and ship real, production code websites fast by using AI tooling across both design and development — not templates, not page builders.
- **Custom AI & feature integration.** Any feature, interaction, or design you want is built as custom code, including embedded AI (chat, automation, content, search, internal tools).
- **Fast, reliable, fairly priced, experienced.** Short turnaround, dependable delivery, honest pricing, and years of hands-on engineering experience behind every build.

---

## CSS Design System

All styling must use the CSS variables defined in `src/index.css`. Never hardcode values that have a variable equivalent.

### Fonts

| Variable         | Value                                        | Usage                  |
| ---------------- | -------------------------------------------- | ---------------------- |
| `--font-display` | `'Fraunces', Georgia, serif`                 | Headings, display text |
| `--font-body`    | `'Plus Jakarta Sans', system-ui, sans-serif` | Body copy, labels, UI  |

### Colours

| Variable                | Value                   | Usage                            |
| ----------------------- | ----------------------- | -------------------------------- |
| `--color-bg`            | `#faf9f7`               | Page background                  |
| `--color-bg-alt`        | `#f3f1ee`               | Alternate section background     |
| `--color-bg-card`       | `#ffffff`               | Card backgrounds                 |
| `--color-text`          | `#18181b`               | Primary text (not `#1a1a1a`)     |
| `--color-text-soft`     | `#3f3f46`               | Secondary body text (not `#555`) |
| `--color-muted`         | `#71717a`               | Muted/tertiary text (not `#666`) |
| `--color-accent`        | `#0c8c81`               | Primary teal accent              |
| `--color-accent-dark`   | `#0a7268`               | Hover state for accent           |
| `--color-accent-light`  | `#d0f5f0`               | Accent tint backgrounds          |
| `--color-accent-glow`   | `rgba(12,140,129,0.12)` | Accent overlays/glows            |
| `--color-border`        | `rgba(24,24,27,0.09)`   | Subtle borders (not `#e8e4df`)   |
| `--color-border-strong` | `rgba(24,24,27,0.18)`   | Stronger borders                 |
| `--color-dark`          | `#111113`               | Dark section backgrounds         |

### Spacing & Shape

| Variable        | Value    |
| --------------- | -------- |
| `--radius-sm`   | `8px`    |
| `--radius-md`   | `14px`   |
| `--radius-lg`   | `22px`   |
| `--radius-full` | `9999px` |

### Shadows

- `--shadow-sm`, `--shadow-md`, `--shadow-lg`, `--shadow-accent`

### Transitions

- `--transition-fast` (150ms), `--transition-base` (220ms), `--transition-slow` (350ms)

---

## Page & Component Patterns

### Page structure

```jsx
<main className="page-name">
  <Helmet>...</Helmet>
  <section className="px__hero">          {/* dark bg hero */}
  <section className="px__section">       {/* light/alt bg content */}
  <Contact />                             {/* always last */}
</main>
```

### Animations (Framer Motion)

- Use `whileInView={{ opacity: 1, y: 0 }}` with `initial={{ opacity: 0, y: 24 }}`
- `viewport={{ once: true }}`
- Stagger children with `delay: i * 0.07`
- Easing: `[0.22, 1, 0.36, 1]`
- Hero sections use `animate` (not `whileInView`) since they're above the fold

### Hero sections

- Background: `var(--color-text)` (dark)
- Heading: `var(--font-display)`, white, `clamp(2.25rem, 4.5vw, 3.75rem)`
- Lead text: `var(--font-body)`, `rgba(255,255,255,0.6)`
- Eyebrow: uppercase, `var(--color-accent)`, with animated dot

### Section containers

- Max width: `1100px` or `1280px`, `margin: 0 auto`
- Padding: `5rem 2rem` desktop, `3.5rem 1rem` mobile

### Responsive breakpoints

- Tablet: `max-width: 900px` — 2-column grids
- Mobile: `max-width: 600px` — 1-column, reduced padding

### Category/feature grids

- 3 columns desktop → 2 tablet → 1 mobile
- Cards: white bg, `var(--color-border)` border, `--radius-md`, hover shadow

---

### Responsive design

Every component and page must be built mobile-first and verified at both mobile and desktop breakpoints. This is not optional — all new UI must work correctly at:

- **Mobile**: 375px–600px (single column, reduced padding, touch-friendly tap targets)
- **Desktop**: 1280px+ (full layout, multi-column grids)

Use the established breakpoints: `max-width: 900px` (tablet), `max-width: 600px` (mobile).

---

## Routing

New pages go in `src/pages/`. Add route to `src/App.jsx`, link in `src/components/Navbar.jsx` (both desktop and mobile menus), and URL entry in `public/sitemap.xml`.

## Contact form

Formspree endpoint uses `VITE_FORMSPREE_ID` env variable. The `<Contact />` component is reusable — embed it at the bottom of any page.

---

## Workflow

- **Always let the user verify changes before committing or pushing.** After making code changes, stop and wait for approval unless explicitly told to push.
- Never run `git commit` or `git push` unless the user says "push", "commit", or explicitly approves.

---

## Case Study Format & Style

Each case study is a self-contained page in `src/pages/CaseStudy*.jsx` with its own `CaseStudy*.css`. Route pattern: `/portfolio/<slug>`. New case studies must follow this exact structure and copy discipline.

### Section order (no Brief)

1. **Hero** — crumbs, eyebrow with animated dot, title, 1-sentence lead, two CTAs (`Visit Live Site ↗` + `← Back to Work`).
2. **Hero screenshot/video** — `home-hero.png`, or `hero-loop.mp4` with the PNG as poster.
3. **Stats** — exactly 4 stat cards.
4. **What We Built** — eyebrow + section title + grid of 6 feature cards.
5. **Gallery** — eyebrow `Inside the Build`, title `Screens from the shipped site.`, then `<motion.figure>` cards with image + caption.
6. **(Optional) Dark deep-dive** — only when there's a significant secondary surface to show (e.g. Elusive's admin dashboard). Use `--section--dark` modifier.
7. **Tech highlights + mobile** — split layout: eyebrow + title + 1-sentence intro + checklist (`techHighlights` array) on the left, two phone mockups on the right.
8. **Final CTA** — `See it live.` heading, one-line sub, large primary button to live URL.
9. **`<Contact />`** — always last.

Do **not** add a "The Brief" section. The hero already establishes who the client is and what was built.

### Copy length rules

The site favours scannable, fragment-style copy over paragraphs. When in doubt, cut.

| Section | Limit |
| ------- | ----- |
| Hero lead | **1 sentence**, max 2 short clauses |
| Stat label | 2–3 words |
| Feature card body | **1 short line** (~10–15 words). No 2-sentence cards. |
| Gallery caption | Sentence fragment or one short clause. No "—…—…" double-clauses. |
| Tech-highlights intro paragraph | **1 sentence** |
| Tech-highlights checklist item | One short line each |
| Dark deep-dive intro | **1 sentence** |
| Dark deep-dive captions | Same rule as gallery captions |
| Final CTA sub | One short line |

### Voice

- Concrete nouns. Active voice. No brochure-speak.
- Lead with the outcome ("Built for a buyer who already knows the part number."), not the process.
- Drop filler clauses like "because that is where the buyers are" or "the moment the team is ready to take live leads".
- Em-dashes are fine for one pivot per line, not two.

### Tone examples

> ❌ "Real production code, no page-builder bloat. Every template verified at phone widths, where gift and lifestyle buyers actually shop."
>
> ✅ "Production code, no page-builder bloat — verified at phone widths."

> ❌ "Scheduling a promo banner — staff ship storewide campaigns without touching code or calling a developer."
>
> ✅ "Schedule storewide promos without touching code."

### File pattern

- JSX: `src/pages/CaseStudy<Name>.jsx` — top-level constants `LIVE_URL`, `EASE = [0.22, 1, 0.36, 1]`, plus `stats`, `features`, `gallery`, `techHighlights` arrays.
- CSS: `src/pages/CaseStudy<Name>.css` — BEM classes prefixed with the project slug (`.case-elusive__*`, `.case-softflorals__*`, `.case-sahara__*`).
- Route: register in `src/App.jsx`. Portfolio card: link from `src/pages/PortfolioPage.jsx`. Sitemap: add to `public/sitemap.xml`.
- Helmet meta: `title`, `description`, canonical URL, and OG tags (title/description/url/image) — required.

### Image dimension rules

Image heights must stay consistent within each context. The mobile-mockup row and the desktop gallery both render images at a fixed width with `height: auto`, so any pixel-height variation between source files becomes a visible mismatch on the page.

- **Mobile phone mockups** (`mobile-*.png`): every phone screenshot in a single case study must share the **same pixel dimensions** (e.g. 1000 × 1688). When the source capture is taller, crop from the top so the bottom looks like a natural scroll cutoff — never leave one phone visibly longer than its sibling.
- **Desktop gallery shots** (`home-collection.png`, `product-detail.png`, `checkout.png`, etc.): all gallery images in a single case study should share the **same aspect ratio** so the grid stays even. Crop from the top if a capture is too tall.
- Use `python3` + PIL to crop: `Image.open(path).crop((0, 0, w, target_h)).save(path, optimize=True)`.
- After replacing or cropping, verify with `sips -g pixelWidth -g pixelHeight <files>` before committing.

---

## The Climb — Blog Style Guide

The Climb (`/the-climb`) is the public log of Onrai Studio's journey from invisible to found everywhere. Each entry is a **step on a climb**, not a dated blog post. The audience is everyday small-business owners with zero tech background. Every entry must follow these rules.

### Voice & language

- Plain English. No jargon. If a technical term is unavoidable, explain it in one sentence in parentheses.
- Short sentences. Concrete nouns. Active voice.
- Talk **to** the reader ("you"), not about "the user".
- Lead with the outcome, then the how.

### Structure of every entry

Each entry is a numbered step in the climb and must contain:

1. **Step number + title** — e.g. `Step 01 — Getting Google to Recognise Your Brand`. No publish date.
2. **Summary** (1–2 sentences) — the problem in plain English and what changes after this step.
3. **Why this matters** — a short paragraph explaining the stakes for a small-business owner.
4. **The steps you take** — an ordered list of 3–6 concrete actions. Each action has:
   - A short action title (e.g. "Claim your business name everywhere")
   - A 1–2 sentence plain-English description
   - A **difficulty pill**: Easy / Medium / Hard
   - Optional: a time estimate ("~10 min")
5. **What changes after** — 1 short paragraph or a before/after visual showing the result.
6. **Next on the climb** — a tease of what step comes next.

### Difficulty gauge

Three levels, shown as coloured pills next to each step:

- **Easy** (green) — anyone can do it in one sitting, no tech skills.
- **Medium** (amber) — requires following instructions carefully or using a tool you haven't used before.
- **Hard** (red) — technical work; most readers will want help.

### Visuals — required

Every entry must have at least **one visual** to illustrate the message. Pick whichever fits best:

- **Screenshots** — stored in `public/images/`, referenced with a `<figcaption>`.
- **CSS illustrations** — for abstract concepts (e.g. a diagram of how Google sees a brand), built with divs and the design tokens in `src/index.css`. Reuse patterns from `ServicesPage`/`AIPage` hero mockups.
- **Icons** — small inline SVGs or emoji for step markers.
- **Tables** — for before/after comparisons. Keep to 2–3 columns max on desktop; stack on mobile.

Visuals must use the project's design tokens (`--color-accent`, `--radius-md`, etc.) and work at mobile (375–600px) and desktop (1280px+).

### No publish dates

The Climb is a journey, not a news feed. Do not display `entry.date` in the UI. Entries are ordered by step number. If you need an internal timestamp for records, keep it off-screen.

### Tone examples

> ❌ "The existing JSON-LD schema in index.html used only the ProfessionalService type with minimal fields."
>
> ✅ "Google had no idea who we were. When someone searched 'Onrai Studio', Google thought it was a typo for 'Sonrai Studio'. Here's how we fixed it."

### Page location

All entries live in the `entries` array in `src/pages/TheClimbPage.jsx`. Existing section types: `text`, `steps`, `baseline` (screenshot + caption), `tool` (interactive widget like the `IndexCheckWidget`), `next`. New section types should be added to the render switch in that same file and styled in `src/pages/TheClimbPage.css` using BEM `.climb-entry__*` classes.
