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
  },
  {
    tag: 'Trade',
    name: 'Apex Plumbing Co.',
    description: 'Lead-gen site for a Melbourne tradie with Google Business and instant booking.',
    to: '/portfolio',
  },
  {
    tag: 'Hospitality',
    name: 'Marlowe & Vine',
    description: 'Showcase site for a restaurant group with reservations and event enquiries.',
    to: '/portfolio',
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
          {projects.map((p, i) => (
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
                  <div className="portfolio-card__media">
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
                    <span className="portfolio-card__badge">Featured Work</span>
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
          ))}
        </div>

        <div className="portfolio__cta-wrap">
          <Link to="/portfolio" className="portfolio__cta">View All Work →</Link>
        </div>
      </div>
    </section>
  )
}
