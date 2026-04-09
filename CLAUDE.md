# Onrai Studio — Claude Code Guidelines

## Project

React + Vite + Framer Motion landing site for Onrai Studio (AU web agency).
Routes: `/`, `/services`, `/portfolio`, `/ai`, `/about`, `/contact`

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

## Routing

New pages go in `src/pages/`. Add route to `src/App.jsx`, link in `src/components/Navbar.jsx` (both desktop and mobile menus), and URL entry in `public/sitemap.xml`.

## Contact form

Formspree endpoint uses `VITE_FORMSPREE_ID` env variable. The `<Contact />` component is reusable — embed it at the bottom of any page.
