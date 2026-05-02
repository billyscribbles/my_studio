import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Contact from '../components/Contact'
import './CaseStudySoftFlorals.css'

const LIVE_URL = 'https://www.softflorals.com/'
const EASE = [0.22, 1, 0.36, 1]

const stats = [
  { value: '1-of-1', label: 'Hand-Twisted SKUs' },
  { value: '4', label: 'Collection Pieces' },
  { value: 'Ships', label: 'Australia-Wide' },
  { value: 'Custom', label: 'Orders Flow' },
]

const features = [
  {
    icon: '🌸',
    title: 'Editorial Storefront',
    body: 'Soft serif type, pastel palette, generous white space — gallery, not Shopify.',
  },
  {
    icon: '🛍️',
    title: 'Collection & Quick-Cart',
    body: 'Product cards tuned for a small, hand-made catalogue — no generic clutter.',
  },
  {
    icon: '📖',
    title: 'Brand Story',
    body: 'A founder-led narrative that frames the product as a keepsake, not a craft.',
  },
  {
    icon: '🌿',
    title: 'Care Guide',
    body: 'Four-step care panel that answers buyer questions before they email.',
  },
  {
    icon: '💌',
    title: 'Custom Orders Flow',
    body: 'Dedicated form for weddings, gifts, and keepsakes — straight to the studio inbox.',
  },
  {
    icon: '📱',
    title: 'Fast & Mobile-First',
    body: 'Production code, no page-builder bloat — verified at phone widths.',
  },
]

const gallery = [
  {
    src: '/images/portfolio/soft-florals/home-collection.png',
    caption: 'Collection grid — four hand-twisted pieces with inline add-to-cart.',
  },
  {
    src: '/images/portfolio/soft-florals/product-detail.png',
    caption: 'Cart drawer with two pieces queued and live subtotal.',
  },
  {
    src: '/images/portfolio/soft-florals/about.png',
    caption: 'About page — founder story and the studio behind every bouquet.',
  },
  {
    src: '/images/portfolio/soft-florals/checkout.png',
    caption: 'Checkout — delivery, pick-up, and live summary on one page.',
  },
]

const techHighlights = [
  'Soft, editorial art direction tuned to a boutique, gift-lifestyle audience',
  'Production-grade custom code — no page-builder bloat, no template skin',
  'Editorial storefront with collection, story, care guide, and custom orders',
  'Mobile-first layouts verified at 375px',
  'Inbound custom-orders form routed to the studio inbox',
  'SEO foundations — Helmet meta, Open Graph, canonical URLs, image alt text',
]

export default function CaseStudySoftFlorals() {
  return (
    <main className="case-softflorals">
      <Helmet>
        <title>Soft Florals — Project | Onrai Studio</title>
        <meta
          name="description"
          content="An editorial storefront for Soft Florals — Melbourne's handmade forever-flower studio. Collection, story, care guide, and custom orders in one build."
        />
        <link rel="canonical" href="https://onraistudio.com/portfolio/soft-florals" />
        <meta property="og:title" content="Soft Florals — Project | Onrai Studio" />
        <meta
          property="og:description"
          content="An editorial storefront for Melbourne's handmade forever-flower studio — collection, story, care guide, and custom orders."
        />
        <meta property="og:url" content="https://onraistudio.com/portfolio/soft-florals" />
        <meta
          property="og:image"
          content="https://onraistudio.com/images/portfolio/soft-florals/home-hero.png"
        />
      </Helmet>

      {/* Hero */}
      <section className="case-softflorals__hero">
        <div className="case-softflorals__hero-inner">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <div className="case-softflorals__crumbs">
              <Link to="/portfolio">Our Work</Link>
              <span>·</span>
              <span className="case-softflorals__crumb-current">Project</span>
              <span>·</span>
              <span className="case-softflorals__crumb-current">Melbourne, VIC</span>
            </div>
            <p className="case-softflorals__eyebrow">
              <span className="case-softflorals__eyebrow-dot" />
              Boutique eCommerce
            </p>
            <h1 className="case-softflorals__title">Soft Florals</h1>
            <p className="case-softflorals__lead">
              An editorial storefront for Melbourne's handmade forever-flower studio — collection,
              story, care guide, and custom orders in one mobile-first build.
            </p>
            <div className="case-softflorals__hero-ctas">
              <a
                href={LIVE_URL}
                className="case-softflorals__btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Live Site ↗
              </a>
              <Link to="/portfolio" className="case-softflorals__btn-ghost">
                ← Back to Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hero screenshot */}
      <section className="case-softflorals__shot">
        <motion.div
          className="case-softflorals__shot-inner"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <img
            src="/images/portfolio/soft-florals/home-hero.png"
            alt="Soft Florals homepage hero — Flowers that never fade"
            loading="eager"
          />
        </motion.div>
      </section>

      {/* Stats */}
      <section className="case-softflorals__stats">
        <div className="case-softflorals__stats-inner">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className="case-softflorals__stat"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: EASE }}
            >
              <div className="case-softflorals__stat-value">{s.value}</div>
              <div className="case-softflorals__stat-label">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* What We Built */}
      <section className="case-softflorals__section case-softflorals__section--alt">
        <div className="case-softflorals__section-inner">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <p className="case-softflorals__section-eyebrow">What We Built</p>
            <h2 className="case-softflorals__section-title">Every surface, considered.</h2>
          </motion.div>
          <div className="case-softflorals__features">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                className="case-softflorals__feature"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07, ease: EASE }}
              >
                <div className="case-softflorals__feature-icon">{f.icon}</div>
                <h3 className="case-softflorals__feature-title">{f.title}</h3>
                <p className="case-softflorals__feature-body">{f.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="case-softflorals__section">
        <div className="case-softflorals__section-inner">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <p className="case-softflorals__section-eyebrow">Inside the Build</p>
            <h2 className="case-softflorals__section-title">Screens from the shipped site.</h2>
          </motion.div>
          <div className="case-softflorals__gallery">
            {gallery.map((g, i) => (
              <motion.figure
                key={g.src}
                className="case-softflorals__shot-card"
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
      <section className="case-softflorals__section case-softflorals__section--alt">
        <div className="case-softflorals__section-inner case-softflorals__split">
          <motion.div
            className="case-softflorals__split-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <p className="case-softflorals__section-eyebrow">Built for the Phone</p>
            <h2 className="case-softflorals__section-title">Looks gorgeous at 375 pixels.</h2>
            <p className="case-softflorals__copy">
              Designed mobile-first; the desktop layout is composed around it.
            </p>
            <ul className="case-softflorals__list">
              {techHighlights.map((t) => (
                <li key={t}>
                  <span className="case-softflorals__tick">✓</span>
                  {t}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            className="case-softflorals__split-mobiles"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
          >
            <div className="case-softflorals__phone">
              <img
                src="/images/portfolio/soft-florals/mobile-home-hero.png"
                alt="Soft Florals mobile hero"
                loading="lazy"
              />
            </div>
            <div className="case-softflorals__phone case-softflorals__phone--offset">
              <img
                src="/images/portfolio/soft-florals/mobile-home-collection.png"
                alt="Soft Florals mobile collection"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="case-softflorals__cta">
        <motion.div
          className="case-softflorals__cta-inner"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          <h2 className="case-softflorals__cta-heading">See it live.</h2>
          <p className="case-softflorals__cta-sub">
            The best way to judge the work is to use it yourself.
          </p>
          <a
            href={LIVE_URL}
            className="case-softflorals__btn-primary case-softflorals__btn-primary--large"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open softflorals.com ↗
          </a>
        </motion.div>
      </section>

      <Contact />
    </main>
  )
}
