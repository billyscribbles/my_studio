import { motion } from 'framer-motion'
import './Hero.css'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay },
})

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__inner">
        <div className="hero__content">
          <motion.span className="hero__eyebrow" {...fadeUp(0)}>
            AI-Powered Web Studio · Melbourne · Australia
          </motion.span>

          <motion.h1 className="hero__headline" {...fadeUp(0.1)}>
            Your Business,<br />
            <span className="hero__headline-accent">Found Online.</span>
          </motion.h1>

          <motion.p className="hero__subheadline" {...fadeUp(0.2)}>
            We build fast, AI-powered websites for Melbourne small businesses — so your customers find you on Google, not your competitors.
          </motion.p>

          <motion.div className="hero__ctas" {...fadeUp(0.3)}>
            <a href="#contact" className="hero__cta-primary">
              Get a Free Quote →
            </a>
            <a href="#packages" className="hero__cta-secondary">
              See Packages
            </a>
          </motion.div>

          <motion.div className="hero__trust-row" {...fadeUp(0.4)}>
            <span className="hero__trust-item">✓ Live in 2 weeks</span>
            <span className="hero__trust-item">✓ Melbourne based</span>
          </motion.div>
        </div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        >
          <div className="hero__composition">
            {/* Google search result mockup */}
            <div className="hero__search-card">
              <div className="hero__search-bar">
                <div className="hero__search-icon" aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
                </div>
                <span className="hero__search-text">best plumber near me</span>
              </div>
              <div className="hero__search-results">
                <div className="hero__search-result hero__search-result--top">
                  <div className="hero__result-rank">#1</div>
                  <div className="hero__result-body">
                    <div className="hero__result-title">Mike's Plumbing — Fast &amp; Reliable</div>
                    <div className="hero__result-url">mikesplumbing.com.au</div>
                    <div className="hero__result-desc">Licensed plumber serving Melbourne &amp; surrounds. Same-day service available. Get a free quote online.</div>
                    <div className="hero__result-stars" aria-label="5 stars">★★★★★ <span>4.9 (83 reviews)</span></div>
                  </div>
                </div>
                <div className="hero__search-result hero__search-result--fade">
                  <div className="hero__result-rank">#2</div>
                  <div className="hero__result-body">
                    <div className="hero__result-title-muted">Melbourne Plumbing Co.</div>
                    <div className="hero__result-desc-muted">General plumbing services...</div>
                  </div>
                </div>
                <div className="hero__search-result hero__search-result--fade">
                  <div className="hero__result-rank">#3</div>
                  <div className="hero__result-body">
                    <div className="hero__result-title-muted">All Hours Plumbers</div>
                    <div className="hero__result-desc-muted">Emergency plumbing available...</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating AI badge */}
            <div className="hero__float-badge">
              <div className="hero__float-badge-dot" />
              <span className="hero__float-badge-text">AI SEO Active</span>
            </div>

            {/* Floating stat card */}
            <div className="hero__float-stat">
              <div className="hero__float-stat-value">+340%</div>
              <div className="hero__float-stat-label">More website visitors</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
