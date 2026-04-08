# My Studio

AI-powered landing page for a web agency targeting local and small businesses in Australia.

Built with React + Vite + Framer Motion. Deployed on Railway.

---

## Tech Stack

| Tool | Purpose |
|------|---------|
| [React 18](https://react.dev) | UI framework |
| [Vite 5](https://vitejs.dev) | Build tool & dev server |
| [Framer Motion](https://www.framer.com/motion/) | Animations |
| [Lucide React](https://lucide.dev) | Icons |
| [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) + [Inter](https://fonts.google.com/specimen/Inter) | Typography |
| [Formspree](https://formspree.io) | Contact form email delivery |
| [Railway](https://railway.app) | Hosting & deployment |

---

## Quick Start

```bash
# Clone
git clone https://github.com/billyscribbles/my_studio.git
cd my_studio

# Install dependencies
yarn install

# Start dev server
yarn dev
```

Open [http://localhost:5173](http://localhost:5173).

---

## Environment Variables

Copy `.env.example` to `.env.local` and fill in your values:

```bash
cp .env.example .env.local
```

| Variable | Where to get it |
|----------|----------------|
| `VITE_FORMSPREE_ID` | See Formspree section below |

### Formspree (Contact Form)

- **Account:** billyhuynh01@gmail.com at [formspree.io](https://formspree.io)
- **Form endpoint:** `https://formspree.io/f/xgopbern`
- **Form ID:** `xgopbern`
- **Submissions go to:** billyhuynh01@gmail.com

Set in `.env.local`:

```
VITE_FORMSPREE_ID=xgopbern
```

Also add `VITE_FORMSPREE_ID=xgopbern` as an environment variable in the Railway dashboard.

---

## Scripts

```bash
yarn dev        # Start development server (localhost:5173)
yarn build      # Production build → dist/
yarn preview    # Preview production build locally
```

---

## Project Structure

```
my_studio/
├── public/
│   ├── robots.txt          # Allow all crawlers
│   └── sitemap.xml         # Site map (update domain when live)
├── src/
│   ├── App.jsx             # Root component — section order lives here
│   ├── index.css           # Global styles, CSS variables, font imports
│   ├── main.jsx            # React entry point
│   └── components/
│       ├── Navbar.jsx/css
│       ├── Hero.jsx/css         # Google search result visual
│       ├── Stats.jsx/css
│       ├── Services.jsx/css     # 6 service cards for local biz
│       ├── AIFeatures.jsx/css   # Dark section — AI value props
│       ├── HowItWorks.jsx/css
│       ├── Shop.jsx/css         # Pricing packages (4 tiers)
│       ├── Portfolio.jsx/css
│       ├── Pricing.jsx/css
│       ├── TechStack.jsx/css
│       ├── Testimonials.jsx/css
│       ├── FAQ.jsx/css
│       ├── Contact.jsx/css      # Formspree-wired enquiry form
│       └── Footer.jsx/css
```

---

## Customisation

### Branding
- **Studio name / logo** → `src/components/Navbar.jsx` and `src/components/Footer.jsx`
- **Email address** → `src/components/Contact.jsx` and `src/components/Footer.jsx`
- **Accent colour** → `src/index.css` → `--color-accent`
- **Domain** → `index.html` (canonical + og:url) and `public/sitemap.xml`

### Copy
- **Hero headline + subtext** → `src/components/Hero.jsx`
- **Services** → `src/components/Services.jsx` (services array)
- **Packages / pricing** → `src/components/Shop.jsx` (packages array)
- **Testimonials** → `src/components/Testimonials.jsx` (testimonials array)
- **FAQ** → `src/components/FAQ.jsx`

### SEO
- Update `index.html` with your real studio name, domain, and OG image
- Replace `mystudio.com.au` in `public/sitemap.xml` with your actual domain
- Swap in your real JSON-LD business details (`index.html` → `<script type="application/ld+json">`)

---

## Deployment

### Railway (current)

The repo includes `railway.json` which Railway picks up automatically.

1. Connect the GitHub repo to a Railway project
2. Railway runs `yarn build` then serves the `dist/` folder
3. Add environment variables in the Railway dashboard

### Manual build

```bash
yarn build
# Upload the dist/ folder to any static host (Netlify, Vercel, Cloudflare Pages, etc.)
```

---

## License

Private — all rights reserved.
