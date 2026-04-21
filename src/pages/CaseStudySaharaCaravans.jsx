import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Contact from '../components/Contact'
import './CaseStudySaharaCaravans.css'

const EASE = [0.22, 1, 0.36, 1]

const stats = [
  { value: '30+', label: 'Years of Craftsmanship' },
  { value: 'Family', label: 'Owned & Run' },
  { value: 'Made in', label: 'Victoria, AU' },
  { value: 'On & Off', label: 'Road Ready' },
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
              <span
                className="case-sahara__btn-primary case-sahara__btn-primary--disabled"
                aria-disabled="true"
              >
                Coming Soon
              </span>
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

      {/* The Brief (placeholder copy — to be refined) */}
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
              More of this case study — the build details, range pages, dealer finder, and mobile
              breakdowns — will be added soon.
            </p>
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
          <h2 className="case-sahara__cta-heading">Coming soon.</h2>
          <p className="case-sahara__cta-sub">
            The live site is on the way — check back shortly.
          </p>
          <span
            className="case-sahara__btn-primary case-sahara__btn-primary--large case-sahara__btn-primary--disabled"
            aria-disabled="true"
          >
            Coming Soon
          </span>
        </motion.div>
      </section>

      <Contact />
    </main>
  )
}
