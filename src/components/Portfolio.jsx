import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './Portfolio.css'

const projects = [
  {
    tag: 'eCommerce · Featured Work',
    name: 'Elusive Racing',
    description: "Melbourne's Honda performance specialists — retail eshop, wholesale portal, and workshop booking, all unified under one brand.",
    to: '/portfolio/elusive-racing',
    video: '/images/portfolio/elusive-racing/hero-loop.mp4',
    poster: '/images/portfolio/elusive-racing/home-hero.png',
    featured: true,
  },
  {
    tag: 'eCommerce · Project',
    name: 'Soft Florals',
    description: "Melbourne's handmade forever-flower studio — a calm, editorial storefront with collection, brand story, care guide, and custom orders.",
    to: '/portfolio/soft-florals',
    image: '/images/portfolio/soft-florals/home-hero.png',
    featured: true,
    stacked: true,
    bordered: true,
  },
  {
    tag: 'Manufacturing · Project',
    name: 'Sahara Caravans',
    description: 'Brand-led site for an Australian caravan builder — model showcase, spec details, and enquiry flow.',
    to: '/portfolio/sahara-caravans',
    image: '/images/portfolio/sahara-caravans/home-hero.png',
    featured: true,
    stacked: true,
  },
  {
    tag: 'Hospitality',
    isComingSoon: true,
  },
]

export default function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio__inner">
        <motion.div
          className="portfolio__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-label">Recent Work</h2>
          <p className="section-sub">A selection of projects we've built and shipped.</p>
        </motion.div>

        <div className="portfolio__grid">
          {projects.map((p, i) => {
            if (p.isComingSoon) {
              return (
                <motion.div
                  key={`coming-soon-${p.tag}`}
                  className="portfolio-card portfolio-card--coming-soon"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span className="portfolio-card__tag">{p.tag}</span>
                  <div className="portfolio-card__coming-soon-body">
                    <span className="portfolio-card__coming-soon-icon" aria-hidden="true">✦</span>
                    <h3 className="portfolio-card__coming-soon-title">Coming soon</h3>
                    <p className="portfolio-card__coming-soon-desc">
                      Be our first {p.tag} project.
                    </p>
                  </div>
                </motion.div>
              )
            }

            return (
            <motion.div
              key={p.name}
              className={`portfolio-card${p.featured ? ' portfolio-card--featured' : ''}${p.stacked ? ' portfolio-card--stacked' : ''}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link to={p.to} className="portfolio-card__link" aria-label={`View ${p.name}`}>
                {p.featured && (p.video || p.image) && (
                  <div className={`portfolio-card__media${p.bordered ? ' portfolio-card__media--bordered' : ''}`}>
                    {p.video ? (
                      <video
                        src={p.video}
                        poster={p.poster}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        aria-label={`${p.name} preview`}
                      />
                    ) : (
                      <img
                        src={p.image}
                        alt={`${p.name} preview`}
                        loading="lazy"
                      />
                    )}
                  </div>
                )}
                <div className="portfolio-card__content">
                  <div className="portfolio-card__tag">{p.tag}</div>
                  <div className="portfolio-card__bottom">
                    <div>
                      <span className="portfolio-card__name">{p.name}</span>
                      {p.description && (
                        <p className="portfolio-card__desc">{p.description}</p>
                      )}
                    </div>
                    <span className="portfolio-card__arrow">→</span>
                  </div>
                </div>
              </Link>
            </motion.div>
            )
          })}
        </div>

        <div className="portfolio__cta-wrap">
          <Link to="/portfolio" className="portfolio__cta">View All Work →</Link>
        </div>
      </div>
    </section>
  )
}
