import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Contact from '../components/Contact'
import './CaseStudyPlacr.css'

const LIVE_URL = 'https://placr-production-4af3.up.railway.app/'
const EASE = [0.22, 1, 0.36, 1]

const stats = [
  { value: '9,000+', label: 'Candidates Indexed' },
  { value: 'Credit', label: 'Based Pricing' },
  { value: 'Multi', label: 'Tenant SaaS' },
  { value: 'Light + Dark', label: 'Themed UI' },
]

const features = [
  {
    icon: '🔐',
    title: 'Authenticated Workspace',
    body: 'Email login, password reset, and per-tenant data isolation behind every route.',
  },
  {
    icon: '🏷️',
    title: 'Company & Tag Setup',
    body: 'Pick industries and tags so search returns the right people, not noise.',
  },
  {
    icon: '🔍',
    title: 'Candidate Discovery',
    body: 'Search by competitor, location, role, keywords, and years of experience.',
  },
  {
    icon: '📌',
    title: 'Saved Candidates + Projects',
    body: 'Save candidates into projects, add notes, and track everyone you are working.',
  },
  {
    icon: '✉️',
    title: 'Gmail Outreach + History',
    body: 'Send through your own Gmail, track every email, and reuse signatures.',
  },
  {
    icon: '💳',
    title: 'Credits, Plans + Stripe',
    body: 'Tiered subscriptions and credit packs, checked out through Stripe.',
  },
]

const gallery = [
  {
    src: '/images/portfolio/placr/login.png',
    caption: 'Sign-in — the entry to the recruiter workspace.',
  },
  {
    src: '/images/portfolio/placr/company-setup.png',
    caption: 'Company setup — industries and tags drive every search.',
  },
  {
    src: '/images/portfolio/placr/discover.png',
    caption: 'Discover — search candidates by competitor, role, and experience.',
  },
  {
    src: '/images/portfolio/placr/saved-candidates.png',
    caption: 'Saved candidates — one-click email reveal, notes, and full work history.',
  },
  {
    src: '/images/portfolio/placr/project-detail.png',
    caption: 'Project view — candidates moving through the pipeline.',
  },
  {
    src: '/images/portfolio/placr/email-compose.png',
    caption: 'Compose outreach in-app — templates, signature, and merge variables.',
  },
  {
    src: '/images/portfolio/placr/email-history.png',
    caption: 'Email history — every Gmail send, searchable by recipient or subject.',
  },
  {
    src: '/images/portfolio/placr/gmail-connect.png',
    caption: 'Bring your own Gmail — Outlook and LinkedIn are next on the roadmap.',
  },
  {
    src: '/images/portfolio/placr/subscription.png',
    caption: 'Tiered plans plus credit packs for email unlocks.',
  },
]

const adminGallery = [
  {
    src: '/images/portfolio/placr/dashboard-dark.png',
    caption: 'Built-in dark mode for late nights — one click flips the app.',
  },
  {
    src: '/images/portfolio/placr/admin-candidates.png',
    caption: 'Admin view — 9,000+ candidates, paged, searchable, re-enrichable.',
  },
  {
    src: '/images/portfolio/placr/admin-users.png',
    caption: 'User management — roles, subscriptions, and credit grants in one table.',
  },
  {
    src: '/images/portfolio/placr/csv-import.png',
    caption: 'CSV import — bulk-load candidates with optional role history columns.',
  },
]

const techHighlights = [
  'Authenticated SaaS shell with per-tenant data isolation',
  'Custom candidate search across competitor companies, role, and experience',
  'Credit-based unlocks with live balance and admin grants',
  'Gmail outreach with templates, signature image, and per-email overrides',
  'Stripe subscription + credit-pack checkout',
  'Built-in dark mode across every authenticated surface',
]

export default function CaseStudyPlacr() {
  return (
    <main className="case-placr">
      <Helmet>
        <title>Placr — Project | Onrai Studio</title>
        <meta
          name="description"
          content="How Onrai Studio built Placr — a custom recruitment SaaS for finding, unlocking, and contacting candidates at competitor firms."
        />
        <link rel="canonical" href="https://onraistudio.com/portfolio/placr" />
        <meta property="og:title" content="Placr — Project | Onrai Studio" />
        <meta
          property="og:description"
          content="A custom recruitment SaaS for finding, unlocking, and contacting candidates at competitor firms."
        />
        <meta property="og:url" content="https://onraistudio.com/portfolio/placr" />
        <meta property="og:image" content="https://onraistudio.com/images/portfolio/placr/home-hero.png" />
      </Helmet>

      {/* Hero */}
      <section className="case-placr__hero">
        <div className="case-placr__hero-inner">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <div className="case-placr__crumbs">
              <Link to="/portfolio">Our Work</Link>
              <span>·</span>
              <span className="case-placr__crumb-current">Project</span>
              <span>·</span>
              <span className="case-placr__crumb-current">SaaS</span>
            </div>
            <p className="case-placr__eyebrow">
              <span className="case-placr__eyebrow-dot" />
              Featured Project
            </p>
            <h1 className="case-placr__title">Placr</h1>
            <p className="case-placr__lead">
              A custom recruitment SaaS for finding, unlocking, and contacting candidates at competitor firms — find, place, grow.
            </p>
            <div className="case-placr__hero-ctas">
              <a
                href={LIVE_URL}
                className="case-placr__btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Live Site ↗
              </a>
              <Link to="/portfolio" className="case-placr__btn-ghost">
                ← Back to Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hero screenshot */}
      <section className="case-placr__shot">
        <motion.div
          className="case-placr__shot-inner"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <img
            src="/images/portfolio/placr/home-hero.png"
            alt="Placr dashboard — recruitment overview with KPI cards and recent activity"
            loading="eager"
          />
        </motion.div>
      </section>

      {/* Stats */}
      <section className="case-placr__stats">
        <div className="case-placr__stats-inner">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className="case-placr__stat"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: EASE }}
            >
              <div className="case-placr__stat-value">{s.value}</div>
              <div className="case-placr__stat-label">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* What We Built */}
      <section className="case-placr__section case-placr__section--alt">
        <div className="case-placr__section-inner">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <p className="case-placr__section-eyebrow">What We Built</p>
            <h2 className="case-placr__section-title">Every surface a recruiter touches.</h2>
          </motion.div>
          <div className="case-placr__features">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                className="case-placr__feature"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07, ease: EASE }}
              >
                <div className="case-placr__feature-icon">{f.icon}</div>
                <h3 className="case-placr__feature-title">{f.title}</h3>
                <p className="case-placr__feature-body">{f.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="case-placr__section">
        <div className="case-placr__section-inner">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <p className="case-placr__section-eyebrow">Inside the Build</p>
            <h2 className="case-placr__section-title">Screens from the shipped app.</h2>
          </motion.div>
          <div className="case-placr__gallery">
            {gallery.map((g, i) => (
              <motion.figure
                key={g.src}
                className="case-placr__shot-card"
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

      {/* Under the Hood — Admin (dark) */}
      <section className="case-placr__section case-placr__section--dark">
        <div className="case-placr__section-inner">
          <motion.div
            className="case-placr__section-head"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <p className="case-placr__section-eyebrow case-placr__section-eyebrow--on-dark">
              What's Under the Hood
            </p>
            <h2 className="case-placr__section-title case-placr__section-title--on-dark">
              The admin layer that keeps the data clean.
            </h2>
            <p className="case-placr__copy case-placr__copy--on-dark">
              A custom admin manages thousands of candidates, the user base, and bulk imports from one place.
            </p>
          </motion.div>

          <div className="case-placr__admin-gallery">
            {adminGallery.map((g, i) => (
              <motion.figure
                key={g.src}
                className="case-placr__shot-card case-placr__shot-card--on-dark"
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

      {/* Tech Highlights */}
      <section className="case-placr__section case-placr__section--alt">
        <div className="case-placr__section-inner">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <p className="case-placr__section-eyebrow">Built for Recruiters</p>
            <h2 className="case-placr__section-title">Built for the way recruiters actually work.</h2>
            <p className="case-placr__copy">
              Production code, no low-code shortcuts — every surface built around the job.
            </p>
            <ul className="case-placr__list">
              {techHighlights.map((t) => (
                <li key={t}>
                  <span className="case-placr__tick">✓</span>
                  {t}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="case-placr__cta">
        <motion.div
          className="case-placr__cta-inner"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          <h2 className="case-placr__cta-heading">See it live.</h2>
          <p className="case-placr__cta-sub">The best way to judge the work is to use it yourself.</p>
          <a
            href={LIVE_URL}
            className="case-placr__btn-primary case-placr__btn-primary--large"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open Placr ↗
          </a>
        </motion.div>
      </section>

      <Contact />
    </main>
  )
}
