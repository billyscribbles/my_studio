import { useState } from 'react'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import './PortfolioPage.css'

const projects = [
  {
    id: 1,
    isCategory: true,
    tag: 'eCommerce',
    name: 'Headless Shopify Rebuild',
    description: 'Full storefront rebuild with headless Shopify, custom cart UX, and 40% faster load times.',
    services: ['Web Design', 'Development'],
    year: '2024',
    location: 'Melbourne, VIC',
    color: '#0c8c81',
    bg: 'var(--color-text)',
    dark: true,
  },
  {
    id: 7,
    tag: 'eCommerce',
    name: 'Elusive Racing',
    description: "Melbourne's Honda performance specialists — retail + wholesale + workshop booking in one build.",
    services: ['Web Design', 'Development', 'eCommerce'],
    year: '2024',
    location: 'Melbourne, VIC',
    color: '#0c8c81',
    bg: 'var(--color-bg-card)',
    dark: false,
    link: '/portfolio/elusive-racing',
  },
  {
    id: 8,
    tag: 'eCommerce',
    name: 'Soft Florals',
    description: 'Editorial storefront for a handmade forever-flower studio — brand, collection, care guide, custom orders.',
    services: ['Web Design', 'Development', 'eCommerce'],
    year: '2024',
    location: 'Melbourne, VIC',
    color: '#0c8c81',
    bg: 'var(--color-accent-light)',
    dark: false,
    link: '/portfolio/soft-florals',
  },
  {
    id: 2,
    isCategory: true,
    tag: 'SaaS',
    name: 'Startup MVP',
    description: 'End-to-end MVP for a B2B SaaS startup — from landing page to dashboard onboarding flow.',
    services: ['Web Design', 'Branding'],
    year: '2024',
    location: 'Melbourne, VIC',
    color: '#0c8c81',
    bg: 'var(--color-accent-light)',
    dark: false,
  },
  {
    id: 3,
    isCategory: true,
    tag: 'Trade',
    name: 'Service Business Site',
    description: 'Lead-gen website for a local tradie with Google Business integration and booking form.',
    services: ['Web Design', 'SEO'],
    year: '2024',
    location: 'Melbourne, VIC',
    color: '#16a34a',
    bg: '#f0fdf4',
    dark: false,
  },
  {
    id: 4,
    isCategory: true,
    tag: 'Healthcare',
    name: 'Clinic Booking Platform',
    description: 'Patient-facing booking platform for a multi-location allied health clinic.',
    services: ['Web Design', 'Development'],
    year: '2023',
    location: 'Sydney, NSW',
    color: '#0369a1',
    bg: '#f0f9ff',
    dark: false,
  },
  {
    id: 5,
    isCategory: true,
    tag: 'Hospitality',
    name: 'Restaurant & Events',
    description: 'Showcase site for a restaurant group with integrated reservations and event enquiry flow.',
    services: ['Web Design', 'Branding'],
    year: '2023',
    location: 'Melbourne, VIC',
    color: '#7c3aed',
    bg: '#faf5ff',
    dark: false,
  },
  {
    id: 6,
    isCategory: true,
    tag: 'Consulting',
    name: 'Professional Services Portal',
    description: 'Corporate website with resource library, team pages, and gated content download forms.',
    services: ['Web Design', 'Development', 'SEO'],
    year: '2023',
    location: 'Brisbane, QLD',
    color: '#0c8c81',
    bg: 'var(--color-accent)',
    dark: true,
  },
  {
    id: 9,
    isCategory: true,
    tag: 'Manufacturing',
    name: 'Product Catalogue & Dealer Portal',
    description: 'B2B product catalogues with spec sheets, dealer locators, and enquiry forms for Australian manufacturers.',
    services: ['Web Design', 'Development'],
    year: '2024',
    location: 'Melbourne, VIC',
    color: '#475569',
    bg: '#e2e8f0',
    dark: false,
  },
  {
    id: 10,
    tag: 'Manufacturing',
    name: 'Sahara Caravans',
    description: "Rugged marketing site for a Campbellfield caravan manufacturer — four decades of Australian-made craftsmanship.",
    services: ['Web Design', 'Development', 'Brand'],
    year: '2024',
    location: 'Campbellfield, VIC',
    color: '#475569',
    bg: 'var(--color-bg-card)',
    dark: false,
    link: '/portfolio/sahara-caravans',
  },
  { id: 101, tag: 'SaaS', isComingSoon: true },
  { id: 102, tag: 'Trade', isComingSoon: true },
  { id: 103, tag: 'Healthcare', isComingSoon: true },
  { id: 104, tag: 'Hospitality', isComingSoon: true },
  { id: 105, tag: 'Consulting', isComingSoon: true },
]

const categories = ['All', 'eCommerce', 'SaaS', 'Trade', 'Healthcare', 'Hospitality', 'Consulting', 'Manufacturing']

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = activeFilter === 'All'
    ? projects.filter((p) => p.isCategory)
    : projects.filter((p) => p.tag === activeFilter)

  return (
    <main className="portfolio-page">
      <Helmet>
        <title>Our Work — Melbourne Web Design Portfolio | Onrai Studio</title>
        <meta name="description" content="Browse Onrai Studio's portfolio of websites, eCommerce stores, and digital projects built for Melbourne and Australian small businesses." />
        <link rel="canonical" href="https://onraistudio.com/portfolio" />
        <meta property="og:title" content="Our Work — Melbourne Web Design Portfolio | Onrai Studio" />
        <meta property="og:description" content="See the websites and digital projects we've built for Melbourne and Australian small businesses." />
        <meta property="og:url" content="https://onraistudio.com/portfolio" />
      </Helmet>

      {/* Hero */}
      <section className="portfolio-page__hero">
        <div className="portfolio-page__hero-inner">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="portfolio-page__eyebrow">Our Work</p>
            <h1 className="portfolio-page__title">Projects we're proud of.</h1>
            <p className="portfolio-page__subtitle">
              Real builds for real businesses — starting with our latest project for Melbourne's Honda performance specialists, Elusive Racing.
            </p>
          </motion.div>

          <motion.div
            className="portfolio-page__hero-visual"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            aria-hidden="true"
          >
            <div className="pp__mock">
              <div className="pp__mock-bar">
                <span className="pp__mock-dot--r" /><span className="pp__mock-dot--y" /><span className="pp__mock-dot--g" />
                <span className="pp__mock-url" />
              </div>
              <div className="pp__mock-body">
                <div className="pp__mock-nav">
                  <span className="pp__mock-nav-logo" />
                  <div className="pp__mock-nav-links">
                    <span /><span /><span />
                  </div>
                  <div className="pp__mock-nav-cta" />
                </div>
                <div className="pp__mock-hero">
                  <div className="pp__mock-hero-eyebrow" />
                  <div className="pp__mock-hero-h1" />
                  <div className="pp__mock-hero-h1 pp__mock-hero-h1--short" />
                  <div className="pp__mock-hero-sub" />
                  <div className="pp__mock-hero-sub pp__mock-hero-sub--short" />
                  <div className="pp__mock-hero-btns">
                    <div className="pp__mock-hero-btn-primary" />
                    <div className="pp__mock-hero-btn-ghost" />
                  </div>
                </div>
                <div className="pp__mock-features">
                  {[0, 1, 2].map(i => (
                    <div key={i} className="pp__mock-feature">
                      <div className="pp__mock-feature-icon" />
                      <div className="pp__mock-feature-line" />
                      <div className="pp__mock-feature-line pp__mock-feature-line--short" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="portfolio-page__featured">
        <div className="portfolio-page__featured-inner">
          <div className="portfolio-page__featured-card">
            <Link to="/portfolio/elusive-racing" className="portfolio-page__featured-media" aria-label="View Elusive Racing project">
              <video
                src="/images/portfolio/elusive-racing/hero-loop.mp4"
                poster="/images/portfolio/elusive-racing/home-hero.png"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="Elusive Racing homepage — Honda Performance Specialists"
              />
            </Link>
            <div className="portfolio-page__featured-body">
              <p className="portfolio-page__featured-eyebrow">
                <span className="portfolio-page__featured-dot" />
                Latest Work · Melbourne, VIC
              </p>
              <h2 className="portfolio-page__featured-title">Elusive Racing</h2>
              <p className="portfolio-page__featured-desc">
                An end-to-end build for Melbourne's Honda performance specialists — retail eshop,
                wholesale portal, and workshop booking unified under one brand.
              </p>
              <div className="portfolio-page__featured-stats">
                <div><strong>150+</strong><span>Brands</span></div>
                <div><strong>4,600+</strong><span>Products</span></div>
                <div><strong>B2C + B2B</strong><span>Channels</span></div>
              </div>
              <div className="portfolio-page__featured-pills">
                <span>eCommerce</span>
                <span>Wholesale Portal</span>
                <span>Workshop Booking</span>
                <span>Mobile-First</span>
              </div>
              <div className="portfolio-page__featured-ctas">
                <Link to="/portfolio/elusive-racing" className="portfolio-page__featured-btn">
                  View Project →
                </Link>
                <a
                  href="https://elusive-racing-production-d535.up.railway.app/"
                  className="portfolio-page__featured-btn portfolio-page__featured-btn--ghost"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Site ↗
                </a>
              </div>
            </div>
          </div>

          <div className="portfolio-page__secondary-grid">
            <Link to="/portfolio/soft-florals" className="portfolio-page__secondary-card" aria-label="View Soft Florals project">
              <div className="portfolio-page__secondary-media portfolio-page__secondary-media--bordered">
                <img
                  src="/images/portfolio/soft-florals/home-hero.png"
                  alt="Soft Florals homepage — handmade forever flowers"
                  loading="lazy"
                />
              </div>
              <div className="portfolio-page__secondary-content">
                <span className="portfolio-page__secondary-tag">eCommerce · Project</span>
                <div className="portfolio-page__secondary-bottom">
                  <div>
                    <span className="portfolio-page__secondary-name">Soft Florals</span>
                    <p className="portfolio-page__secondary-desc">
                      Melbourne's handmade forever-flower studio — a calm, editorial storefront with collection, brand story, care guide, and custom orders.
                    </p>
                  </div>
                  <span className="portfolio-page__secondary-arrow">→</span>
                </div>
              </div>
            </Link>

            <Link to="/portfolio/sahara-caravans" className="portfolio-page__secondary-card" aria-label="View Sahara Caravans project">
              <div className="portfolio-page__secondary-media">
                <img
                  src="/images/portfolio/sahara-caravans/home-hero.png"
                  alt="Sahara Caravans homepage — Australian-made caravans"
                  loading="lazy"
                />
              </div>
              <div className="portfolio-page__secondary-content">
                <span className="portfolio-page__secondary-tag">Manufacturing · Project</span>
                <div className="portfolio-page__secondary-bottom">
                  <div>
                    <span className="portfolio-page__secondary-name">Sahara Caravans</span>
                    <p className="portfolio-page__secondary-desc">
                      Brand-led site for an Australian caravan builder — model showcase, spec details, and enquiry flow.
                    </p>
                  </div>
                  <span className="portfolio-page__secondary-arrow">→</span>
                </div>
              </div>
            </Link>

            <div className="portfolio-page__secondary-card portfolio-page__secondary-card--coming-soon">
              <span className="portfolio-page__secondary-tag">Hospitality</span>
              <div className="portfolio-page__secondary-coming-soon-body">
                <span className="portfolio-page__secondary-coming-soon-icon" aria-hidden="true">✦</span>
                <h3 className="portfolio-page__secondary-coming-soon-title">Coming soon</h3>
                <p className="portfolio-page__secondary-coming-soon-desc">
                  Be our first Hospitality project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="portfolio-page__gallery">
        <div className="portfolio-page__gallery-inner">

          <motion.div
            className="portfolio-page__filters"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                className={`portfolio-page__filter-btn${activeFilter === cat ? ' active' : ''}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          <div className="portfolio-page__grid">
            {filtered.map((p) => {
              if (p.isComingSoon) {
                return (
                  <div key={p.id} className="pf-card pf-card--coming-soon">
                    <div className="pf-card__top">
                      <span className="pf-card__tag">{p.tag}</span>
                    </div>
                    <div className="pf-card__coming-soon-body">
                      <span className="pf-card__coming-soon-icon" aria-hidden="true">✦</span>
                      <h3 className="pf-card__coming-soon-title">Coming soon</h3>
                      <p className="pf-card__coming-soon-desc">
                        Be our first {p.tag} project.
                      </p>
                    </div>
                  </div>
                )
              }

              const inner = (
                <>
                  <div className="pf-card__top">
                    <span className="pf-card__tag" style={{ color: p.dark ? '#5eead4' : p.color, background: p.dark ? 'rgba(13,148,136,0.2)' : undefined }}>
                      {p.tag}
                    </span>
                  </div>
                  <div className="pf-card__body">
                    <h3 className={`pf-card__name${p.dark ? ' pf-card__name--dark' : ''}`}>{p.name}</h3>
                    <p className={`pf-card__desc${p.dark ? ' pf-card__desc--dark' : ''}`}>{p.description}</p>
                  </div>
                  <div className="pf-card__footer">
                    <div className="pf-card__services">
                      {p.services.map((s) => (
                        <span key={s} className={`pf-card__service-tag${p.dark ? ' pf-card__service-tag--dark' : ''}`}>{s}</span>
                      ))}
                    </div>
                    <div className="pf-card__meta">
                      {p.location && (
                        <span className={`pf-card__location${p.dark ? ' pf-card__location--dark' : ''}`}>{p.location}</span>
                      )}
                      <span className={`pf-card__year${p.dark ? ' pf-card__year--dark' : ''}`}>{p.year}</span>
                    </div>
                  </div>
                </>
              )

              if (p.link) {
                return (
                  <Link
                    key={p.id}
                    to={p.link}
                    className="pf-card pf-card--linked"
                    style={{ background: p.bg }}
                    aria-label={`View ${p.name} project`}
                  >
                    {inner}
                  </Link>
                )
              }

              if (p.isCategory) {
                return (
                  <button
                    key={p.id}
                    type="button"
                    className="pf-card pf-card--filter"
                    style={{ background: p.bg }}
                    onClick={() => setActiveFilter(p.tag)}
                    aria-label={`Filter portfolio by ${p.tag}`}
                  >
                    {inner}
                  </button>
                )
              }

              return (
                <div
                  key={p.id}
                  className="pf-card"
                  style={{ background: p.bg }}
                >
                  {inner}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="portfolio-page__cta-section">
        <div className="portfolio-page__cta-inner">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="portfolio-page__cta-heading">Ready to be next?</h2>
            <p className="portfolio-page__cta-sub">Let's talk about what you want to build.</p>
            <Link to="/contact" className="portfolio-page__cta-btn">Get a Free Quote →</Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
