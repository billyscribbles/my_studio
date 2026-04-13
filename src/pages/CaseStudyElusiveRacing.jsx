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
    body: 'Search, multi-level filtering, live stock, variants, cart, and checkout with Afterpay, Apple Pay, Google Pay, and Zip — built from the ground up.',
  },
  {
    icon: '🔐',
    title: 'Wholesale Portal',
    body: 'Separate B2B channel with its own registration and login flow, sitting alongside retail without leaking pricing or stock rules between them.',
  },
  {
    icon: '🔧',
    title: 'Services + Booking',
    body: 'Three workshop service tiers with detailed scope, FAQs, and a calendar-based booking flow routed straight to the workshop.',
  },
  {
    icon: '📦',
    title: 'Product Depth',
    body: 'Every product page includes SKU, live stock, variants, included/optional/required parts, shipping dimensions, vehicle fitment, and related parts.',
  },
  {
    icon: '🏁',
    title: 'Vehicle Finder',
    body: 'Make / model / year lookup on the homepage and shop, so enthusiasts land on parts that actually fit their build.',
  },
  {
    icon: '📱',
    title: 'Mobile-First',
    body: 'Every template — hero, shop grid, product detail, services, booking — verified end-to-end at phone widths, because that is where the buyers are.',
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
  { src: '/images/portfolio/elusive-racing/contact.png', caption: 'Contact form with category routing to the right team.' },
]

const techHighlights = [
  'Custom search and multi-facet filtering across 4,600+ products',
  'Integrated payment rails — Afterpay, Apple Pay, Google Pay, Zip',
  'Vehicle fitment tagging and make/model/year finder',
  'Dual retail + wholesale authentication with separate portals',
  'Omnichannel contact routing (parts, workshop, wholesale, general)',
  'Live chat, Instagram feed, and Google Maps embedded into the storefront',
]

export default function CaseStudyElusiveRacing() {
  return (
    <main className="case-elusive">
      <Helmet>
        <title>Elusive Racing — Case Study | Onrai Studio</title>
        <meta name="description" content="How Onrai Studio built an end-to-end eCommerce, wholesale portal, and workshop booking experience for Elusive Racing — Melbourne's Honda performance specialists." />
        <link rel="canonical" href="https://onraistudio.com/portfolio/elusive-racing" />
        <meta property="og:title" content="Elusive Racing — Case Study | Onrai Studio" />
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
              <span className="case-elusive__crumb-current">Case Study</span>
              <span>·</span>
              <span className="case-elusive__crumb-current">Melbourne, VIC</span>
            </div>
            <p className="case-elusive__eyebrow">
              <span className="case-elusive__eyebrow-dot" />
              Featured Project
            </p>
            <h1 className="case-elusive__title">Elusive Racing</h1>
            <p className="case-elusive__lead">
              An end-to-end build for Melbourne's Honda performance specialists — retail eshop, wholesale
              portal, and workshop booking unified under one brand. Ten years of real-world workshop
              expertise, now running on a site that can keep up.
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
          <img
            src="/images/portfolio/elusive-racing/home-hero.png"
            alt="Elusive Racing homepage hero — Honda Performance Specialists"
            loading="eager"
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

      {/* The Brief */}
      <section className="case-elusive__section">
        <div className="case-elusive__section-inner">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <p className="case-elusive__section-eyebrow">The Brief</p>
            <h2 className="case-elusive__section-title">Ten years of expertise, one unified storefront.</h2>
            <p className="case-elusive__copy">
              Elusive Racing has been Melbourne's Honda performance specialists for over a decade — 150+ brand
              partnerships, an enormous parts catalogue, an in-house workshop, and a loyal community of builders
              who know exactly what they want. They needed a site that could carry all of that weight: retail
              buyers, wholesale accounts, workshop bookings, and enthusiasts researching their next build.
            </p>
            <p className="case-elusive__copy">
              The goal wasn't a template skin. It was a purpose-built platform that could showcase the range,
              respect the technical depth of the audience, and route every enquiry to the right place — all while
              staying fast and usable on a phone from the pit lane.
            </p>
          </motion.div>
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
            <p className="case-elusive__section-eyebrow">Under the Hood</p>
            <h2 className="case-elusive__section-title">Engineered for enthusiasts.</h2>
            <p className="case-elusive__copy">
              Every detail was built for a buyer who already knows the part number. Fast search, deep product
              data, accurate fitment, and a checkout that doesn't get in the way.
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
