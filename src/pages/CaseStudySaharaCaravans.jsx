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
    body: 'Headline, sunset photograph, and a four-pillar trust strip — the first scroll does the brochure\'s job.',
  },
  {
    icon: '🗺️',
    title: 'Four-Model Range',
    body: 'Distinct cards for X-Master, Mirage, Dune, and Horizon — chip-tagged amenities make the range scannable.',
  },
  {
    icon: '🛠️',
    title: 'Build Philosophy',
    body: 'Chassis, suspension, water & power, and fit-out — spec talk without the brochure-speak.',
  },
  {
    icon: '🔍',
    title: 'Model Detail Pages',
    body: 'Variants, size tabs, floor plans, feature highlights, and a full spec sheet per model.',
  },
  {
    icon: '📍',
    title: 'Dealer Finder',
    body: 'Australia-map view of the VIC and WA partner network.',
  },
  {
    icon: '📨',
    title: 'Enquiry Flow',
    body: 'Name, email, phone, state, and model-of-interest, routed to the studio inbox.',
  },
]

const gallery = [
  {
    src: '/images/portfolio/sahara-caravans/home-range.png',
    caption: 'Four vans, one standard of build.',
  },
  {
    src: '/images/portfolio/sahara-caravans/model-xmaster.png',
    caption: 'Model detail — variants, story, and full spec table.',
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
              with four decades of chassis-building behind every build.
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
              Buyers do their first research from the couch, not the desk — every section was
              designed mobile-first.
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
