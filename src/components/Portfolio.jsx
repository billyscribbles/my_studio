import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './Portfolio.css'

const projects = [
  {
    tag: 'eCommerce · Case Study',
    name: 'Elusive Racing',
    description: "Melbourne's Honda performance specialists — retail eshop, wholesale portal, and workshop booking.",
    to: '/portfolio/elusive-racing',
    image: '/images/portfolio/elusive-racing/home-hero.png',
    featured: true,
  },
  { tag: 'SaaS', name: 'Startup MVP', to: '/portfolio' },
  { tag: 'Trade', name: 'Service Business Site', to: '/portfolio' },
  { tag: 'Healthcare', name: 'Clinic Booking Platform', to: '/portfolio' },
  { tag: 'Hospitality', name: 'Restaurant & Events', to: '/portfolio' },
  { tag: 'Consulting', name: 'Professional Services Portal', to: '/portfolio' },
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
              className={`portfolio-card${p.featured ? ' portfolio-card--featured' : ''}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              style={p.image ? { backgroundImage: `linear-gradient(180deg, rgba(17,17,19,0.15) 0%, rgba(17,17,19,0.85) 100%), url(${p.image})` } : undefined}
            >
              <Link to={p.to} className="portfolio-card__link" aria-label={`View ${p.name}`}>
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
