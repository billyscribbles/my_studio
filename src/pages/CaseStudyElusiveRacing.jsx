import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Contact from '../components/Contact'
import './CaseStudyElusiveRacing.css'

const LIVE_URL = 'https://elusive-racing-production-d535.up.railway.app/'
const EASE = [0.22, 1, 0.36, 1]

const stats = [
  { value: '150+', label: 'Brands Stocked' },
  { value: '4,600+', label: 'Live Products' },
  { value: '3', label: 'Service Tiers' },
  { value: 'B2C + B2B', label: 'Channels Unified' },
]

const features = [
  {
    icon: '⚡',
    title: 'Full-Stack eShop',
    body: 'Search, filtering, live stock, variants, and checkout with Afterpay, Apple Pay, Google Pay, and Zip.',
  },
  {
    icon: '🔐',
    title: 'Wholesale Portal',
    body: 'Separate B2B channel with its own login, pricing, and stock rules.',
  },
  {
    icon: '🔧',
    title: 'Services + Booking',
    body: 'Three workshop tiers with detailed scope and a calendar booking flow.',
  },
  {
    icon: '📦',
    title: 'Product Depth',
    body: 'SKU, live stock, variants, fitment, shipping dimensions, and related parts on every page.',
  },
  {
    icon: '🏁',
    title: 'Vehicle Finder',
    body: 'Make / model / year lookup so buyers land on parts that fit.',
  },
  {
    icon: '📱',
    title: 'Mobile-First',
    body: 'Every template verified end-to-end at phone widths.',
  },
]

const gallery = [
  { src: '/images/portfolio/elusive-racing/home-services.png', caption: 'Workshop services section — three tiers, clear CTAs.' },
  { src: '/images/portfolio/elusive-racing/home-products.png', caption: 'Featured products carousel with live stock counts.' },
  { src: '/images/portfolio/elusive-racing/shop-grid.png', caption: 'Shop page — 4,600+ products with multi-facet filters.' },
  { src: '/images/portfolio/elusive-racing/product-detail.png', caption: 'Product detail — fitment, shipping, related parts.' },
  { src: '/images/portfolio/elusive-racing/services-page.png', caption: 'Services page — detailed scope and booking CTA.' },
  { src: '/images/portfolio/elusive-racing/brands-grid.png', caption: '150+ brand directory, linked to filtered shop.' },
  { src: '/images/portfolio/elusive-racing/about.png', caption: 'About page — brand story and workshop identity.' },
  { src: '/images/portfolio/elusive-racing/contact.png', caption: 'Contact form routed to the right team.' },
]

const techHighlights = [
  'Custom search and multi-facet filtering across 4,600+ products',
  'Integrated payment rails — Afterpay, Apple Pay, Google Pay, Zip',
  'Vehicle fitment tagging and make/model/year finder',
  'Dual retail + wholesale authentication with separate portals',
  'Omnichannel contact routing (parts, workshop, wholesale, general)',
  'Live chat, Instagram feed, and Google Maps embedded into the storefront',
]

const adminGallery = [
  {
    src: '/images/portfolio/elusive-racing/admin-dashboard.png',
    caption: 'One dashboard, 4,700+ products, live stock and status.',
  },
  {
    src: '/images/portfolio/elusive-racing/admin-light.png',
    caption: '22,000+ orders, searchable and filterable in seconds.',
  },
  {
    src: '/images/portfolio/elusive-racing/admin-dark.png',
    caption: 'Built-in dark mode for late nights — one click flips the admin.',
  },
  {
    src: '/images/portfolio/elusive-racing/admin-add-product.png',
    caption: 'Brand, SKU, fitment, categories, and pricing on one screen.',
  },
  {
    src: '/images/portfolio/elusive-racing/admin-order-detail.png',
    caption: 'Line items, customer, billing, status, and tracking in one tray.',
  },
  {
    src: '/images/portfolio/elusive-racing/admin-promo-banner.png',
    caption: 'Schedule storewide promos without touching code.',
  },
]

export default function CaseStudyElusiveRacing() {
  return (
    <main className="case-elusive">
      <Helmet>
        <title>Elusive Racing — Project | Onrai Studio</title>
        <meta name="description" content="How Onrai Studio built an end-to-end eCommerce, wholesale portal, and workshop booking experience for Elusive Racing — Melbourne's Honda performance specialists." />
        <link rel="canonical" href="https://onraistudio.com/portfolio/elusive-racing" />
        <meta property="og:title" content="Elusive Racing — Project | Onrai Studio" />
        <meta property="og:description" content="End-to-end eCommerce, wholesale portal, and workshop booking for Melbourne's Honda performance specialists." />
        <meta property="og:url" content="https://onraistudio.com/portfolio/elusive-racing" />
        <meta property="og:image" content="https://onraistudio.com/images/portfolio/elusive-racing/home-hero.png" />
      </Helmet>

      {/* Hero */}
      <section className="case-elusive__hero">
        <div className="case-elusive__hero-inner">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <div className="case-elusive__crumbs">
              <Link to="/portfolio">Our Work</Link>
              <span>·</span>
              <span className="case-elusive__crumb-current">Project</span>
              <span>·</span>
              <span className="case-elusive__crumb-current">Melbourne, VIC</span>
            </div>
            <p className="case-elusive__eyebrow">
              <span className="case-elusive__eyebrow-dot" />
              Featured Project
            </p>
            <h1 className="case-elusive__title">Elusive Racing</h1>
            <p className="case-elusive__lead">
              End-to-end build for Melbourne's Honda performance specialists — retail eshop, wholesale
              portal, and workshop booking, unified.
            </p>
            <div className="case-elusive__hero-ctas">
              <a href={LIVE_URL} className="case-elusive__btn-primary" target="_blank" rel="noopener noreferrer">
                Visit Live Site ↗
              </a>
              <Link to="/portfolio" className="case-elusive__btn-ghost">← Back to Work</Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hero screenshot */}
      <section className="case-elusive__shot">
        <motion.div
          className="case-elusive__shot-inner"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <video
            className="case-elusive__hero-video"
            src="/images/portfolio/elusive-racing/hero-loop.mp4"
            poster="/images/portfolio/elusive-racing/home-hero.png"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="Elusive Racing homepage hero — Honda Performance Specialists"
          />
        </motion.div>
      </section>

      {/* Stats */}
      <section className="case-elusive__stats">
        <div className="case-elusive__stats-inner">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className="case-elusive__stat"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: EASE }}
            >
              <div className="case-elusive__stat-value">{s.value}</div>
              <div className="case-elusive__stat-label">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* What We Built */}
      <section className="case-elusive__section case-elusive__section--alt">
        <div className="case-elusive__section-inner">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <p className="case-elusive__section-eyebrow">What We Built</p>
            <h2 className="case-elusive__section-title">Every surface, considered.</h2>
          </motion.div>
          <div className="case-elusive__features">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                className="case-elusive__feature"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07, ease: EASE }}
              >
                <div className="case-elusive__feature-icon">{f.icon}</div>
                <h3 className="case-elusive__feature-title">{f.title}</h3>
                <p className="case-elusive__feature-body">{f.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="case-elusive__section">
        <div className="case-elusive__section-inner">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <p className="case-elusive__section-eyebrow">Inside the Build</p>
            <h2 className="case-elusive__section-title">Screens from the shipped site.</h2>
          </motion.div>
          <div className="case-elusive__gallery">
            {gallery.map((g, i) => (
              <motion.figure
                key={g.src}
                className="case-elusive__shot-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.55, delay: (i % 3) * 0.07, ease: EASE }}
              >
                <img src={g.src} alt={g.caption} loading="lazy" />
                <figcaption>{g.caption}</figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* Under the Hood — Admin Dashboard (dark) */}
      <section className="case-elusive__section case-elusive__section--dark">
        <div className="case-elusive__section-inner">
          <motion.div
            className="case-elusive__section-head"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <p className="case-elusive__section-eyebrow case-elusive__section-eyebrow--on-dark">What's Under the Hood</p>
            <h2 className="case-elusive__section-title case-elusive__section-title--on-dark">The staff dashboard that runs the business.</h2>
            <p className="case-elusive__copy case-elusive__copy--on-dark">
              Every product, order, customer, and promo runs through a custom admin built for the way the
              team actually works.
            </p>
          </motion.div>

          <div className="case-elusive__admin-gallery">
            {adminGallery.map((g, i) => (
              <motion.figure
                key={g.src}
                className="case-elusive__shot-card case-elusive__shot-card--on-dark"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: EASE, delay: i * 0.05 }}
              >
                <img src={g.src} alt={g.caption} loading="lazy" />
                <figcaption>{g.caption}</figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Highlights + Mobile */}
      <section className="case-elusive__section case-elusive__section--alt">
        <div className="case-elusive__section-inner case-elusive__split">
          <motion.div
            className="case-elusive__split-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <p className="case-elusive__section-eyebrow">Built for Enthusiasts</p>
            <h2 className="case-elusive__section-title">Engineered for enthusiasts.</h2>
            <p className="case-elusive__copy">
              Built for a buyer who already knows the part number.
            </p>
            <ul className="case-elusive__list">
              {techHighlights.map((t) => (
                <li key={t}>
                  <span className="case-elusive__tick">✓</span>
                  {t}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            className="case-elusive__split-mobiles"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
          >
            <div className="case-elusive__phone">
              <img src="/images/portfolio/elusive-racing/mobile-home.png" alt="Elusive Racing mobile home" loading="lazy" />
            </div>
            <div className="case-elusive__phone case-elusive__phone--offset">
              <img src="/images/portfolio/elusive-racing/mobile-shop.png" alt="Elusive Racing mobile shop" loading="lazy" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="case-elusive__cta">
        <motion.div
          className="case-elusive__cta-inner"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          <h2 className="case-elusive__cta-heading">See it live.</h2>
          <p className="case-elusive__cta-sub">The best way to judge the work is to use it yourself.</p>
          <a href={LIVE_URL} className="case-elusive__btn-primary case-elusive__btn-primary--large" target="_blank" rel="noopener noreferrer">
            Open elusiveracing.com.au ↗
          </a>
        </motion.div>
      </section>

      <Contact />
    </main>
  )
}
