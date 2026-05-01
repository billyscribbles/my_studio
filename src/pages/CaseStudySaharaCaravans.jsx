import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Contact from '../components/Contact'
import './CaseStudySaharaCaravans.css'

const LIVE_URL = 'https://sahara-caravans-production.up.railway.app/'
const EASE = [0.22, 1, 0.36, 1]

const stats = [
  { value: '30+', label: 'Years of Craftsmanship' },
  { value: '4', label: 'Models in the Range' },
  { value: 'Made in', label: 'Victoria, AU' },
  { value: 'On & Off', label: 'Road Ready' },
]

const features = [
  {
    icon: '🛻',
    title: 'Editorial Brand Hero',
    body: 'A confident headline, a desert-sunset photograph, and a four-pillar trust strip — 30+ years, family-owned, Australian-made, built in Victoria. The first scroll says everything before a buyer needs a brochure.',
  },
  {
    icon: '🗺️',
    title: 'Four-Model Range',
    body: 'Distinct cards for X-Master (off-road), Mirage (on-road), Dune (semi-off-road), and Horizon (family). Each card chip-tags amenities so the differences are scannable in a second.',
  },
  {
    icon: '🛠️',
    title: 'Build Philosophy',
    body: 'A numbered breakdown of chassis, suspension, water & power, and interior fit-out — the spec talk written for buyers who care, without the brochure-speak.',
  },
  {
    icon: '🔍',
    title: 'Model Detail Pages',
    body: 'Per-model pages with Standard / Slide-Out variants, six size tabs, a layout floor plan, category-tabbed feature highlights, and a full technical spec sheet.',
  },
  {
    icon: '📍',
    title: 'Dealer Finder',
    body: 'Australia-map view of the VIC and WA partner network — see a van up close, or jump through to the full dealer list in one click.',
  },
  {
    icon: '📨',
    title: 'Enquiry Flow',
    body: 'Name, email, phone, state, and model-of-interest, routed to the studio inbox. Formspree-ready (`VITE_FORMSPREE_ID`) the moment the team is ready to take live leads.',
  },
]

const gallery = [
  {
    src: '/images/portfolio/sahara-caravans/home-range.png',
    caption: 'Four vans, one standard of build — chip-tagged amenities make the differences scannable in seconds.',
  },
  {
    src: '/images/portfolio/sahara-caravans/model-xmaster.png',
    caption: 'Model detail page — every variant gets its own hero, story, and full spec table.',
  },
]

const techHighlights = [
  'Editorial, brand-first art direction tuned to a heritage manufacturer',
  'Production-grade custom code — no template skin, no page-builder bloat',
  'Multi-page architecture: home, range, build, dealers, contact, plus per-model detail pages',
  'Mobile-first layouts verified at 375px where buyers do their first read-through',
  'Inbound enquiry form, Formspree-ready (VITE_FORMSPREE_ID)',
  'SEO foundations — Helmet meta, Open Graph, canonical URLs, image alt text',
]

export default function CaseStudySaharaCaravans() {
  return (
    <main className="case-sahara">
      <Helmet>
        <title>Sahara Caravans — Project | Onrai Studio</title>
        <meta
          name="description"
          content="How Onrai Studio built a rugged, editorial marketing site for Sahara Caravans — Campbellfield's Australian-made off-road caravan manufacturer with four decades of craftsmanship."
        />
        <link rel="canonical" href="https://onraistudio.com/portfolio/sahara-caravans" />
        <meta property="og:title" content="Sahara Caravans — Project | Onrai Studio" />
        <meta
          property="og:description"
          content="A rugged, editorial marketing site for Campbellfield's Australian-made off-road caravan manufacturer."
        />
        <meta property="og:url" content="https://onraistudio.com/portfolio/sahara-caravans" />
        <meta
          property="og:image"
          content="https://onraistudio.com/images/portfolio/sahara-caravans/home-hero.png"
        />
      </Helmet>

      {/* Hero */}
      <section className="case-sahara__hero">
        <div className="case-sahara__hero-inner">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <div className="case-sahara__crumbs">
              <Link to="/portfolio">Our Work</Link>
              <span>·</span>
              <span className="case-sahara__crumb-current">Project</span>
              <span>·</span>
              <span className="case-sahara__crumb-current">Campbellfield, VIC</span>
            </div>
            <p className="case-sahara__eyebrow">
              <span className="case-sahara__eyebrow-dot" />
              Australian-Made Caravans
            </p>
            <h1 className="case-sahara__title">Sahara Caravans</h1>
            <p className="case-sahara__lead">
              A rugged, editorial marketing site for a Campbellfield off-road caravan manufacturer
              with four decades of chassis-building behind every build. On-road, off-road, or
              somewhere in between — the site had to carry the brand as confidently as the van
              carries its owners.
            </p>
            <div className="case-sahara__hero-ctas">
              <a
                href={LIVE_URL}
                className="case-sahara__btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Live Site ↗
              </a>
              <Link to="/portfolio" className="case-sahara__btn-ghost">
                ← Back to Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hero screenshot */}
      <section className="case-sahara__shot">
        <motion.div
          className="case-sahara__shot-inner"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <img
            src="/images/portfolio/sahara-caravans/home-hero.png"
            alt="Sahara Caravans homepage hero — Built for the long road"
            loading="eager"
          />
        </motion.div>
      </section>

      {/* Stats */}
      <section className="case-sahara__stats">
        <div className="case-sahara__stats-inner">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className="case-sahara__stat"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: EASE }}
            >
              <div className="case-sahara__stat-value">{s.value}</div>
              <div className="case-sahara__stat-label">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* The Brief */}
      <section className="case-sahara__section">
        <div className="case-sahara__section-inner">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <p className="case-sahara__section-eyebrow">The Brief</p>
            <h2 className="case-sahara__section-title">
              A manufacturer's story, told the way the van drives.
            </h2>
            <p className="case-sahara__copy">
              Sahara has been building off-road caravans out of Campbellfield for more than three
              decades. The job was to translate that heritage into a digital storefront that felt
              just as confident as the chassis under the van — a site that sells the range, routes
              people to a dealer, and backs every page with the family-owned, Australian-made story.
            </p>
            <p className="case-sahara__copy">
              We built an editorial, photography-led marketing site with four model pages, a
              build-philosophy walk-through, a dealer finder, and an enquiry flow that drops
              straight into the studio inbox. Every layout was designed mobile-first and verified at
              375px — because that's where most caravan buyers do their first homework, on the
              couch, before they ever ring the workshop.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What We Built */}
      <section className="case-sahara__section case-sahara__section--alt">
        <div className="case-sahara__section-inner">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <p className="case-sahara__section-eyebrow">What We Built</p>
            <h2 className="case-sahara__section-title">Every surface, considered.</h2>
          </motion.div>
          <div className="case-sahara__features">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                className="case-sahara__feature"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07, ease: EASE }}
              >
                <div className="case-sahara__feature-icon">{f.icon}</div>
                <h3 className="case-sahara__feature-title">{f.title}</h3>
                <p className="case-sahara__feature-body">{f.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="case-sahara__section">
        <div className="case-sahara__section-inner">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <p className="case-sahara__section-eyebrow">Inside the Build</p>
            <h2 className="case-sahara__section-title">Screens from the shipped site.</h2>
          </motion.div>
          <div className="case-sahara__gallery">
            {gallery.map((g, i) => (
              <motion.figure
                key={g.src}
                className="case-sahara__shot-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.55, delay: (i % 2) * 0.07, ease: EASE }}
              >
                <img src={g.src} alt={g.caption} loading="lazy" />
                <figcaption>{g.caption}</figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Highlights + Mobile */}
      <section className="case-sahara__section case-sahara__section--alt">
        <div className="case-sahara__section-inner case-sahara__split">
          <motion.div
            className="case-sahara__split-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <p className="case-sahara__section-eyebrow">Built for the Phone</p>
            <h2 className="case-sahara__section-title">Reads as well at 375 pixels.</h2>
            <p className="case-sahara__copy">
              Caravan buyers do most of their first research from the couch, not the desk. Every
              section — hero, range, build, dealers, contact — was designed and tested mobile-first,
              with the desktop layout composed around it.
            </p>
            <ul className="case-sahara__list">
              {techHighlights.map((t) => (
                <li key={t}>
                  <span className="case-sahara__tick">✓</span>
                  {t}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            className="case-sahara__split-mobiles"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
          >
            <div className="case-sahara__phone">
              <img
                src="/images/portfolio/sahara-caravans/mobile-home-hero.png"
                alt="Sahara Caravans mobile hero"
                loading="lazy"
              />
            </div>
            <div className="case-sahara__phone case-sahara__phone--offset">
              <img
                src="/images/portfolio/sahara-caravans/mobile-home-range.png"
                alt="Sahara Caravans mobile range"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="case-sahara__cta">
        <motion.div
          className="case-sahara__cta-inner"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          <h2 className="case-sahara__cta-heading">See it in the field.</h2>
          <p className="case-sahara__cta-sub">
            The best way to judge the build is to drive the site yourself.
          </p>
          <a
            href={LIVE_URL}
            className="case-sahara__btn-primary case-sahara__btn-primary--large"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open saharacaravans.com.au ↗
          </a>
        </motion.div>
      </section>

      <Contact />
    </main>
  )
}
