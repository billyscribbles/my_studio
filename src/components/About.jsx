import { motion } from 'framer-motion'
import './About.css'

const stats = [
  { value: 'Lean', label: 'Real, small team' },
  { value: '48hr', label: 'Average first draft' },
  { value: '100%', label: 'AU-based team' },
  { value: '5★', label: 'Client satisfaction' },
]

const values = [
  { label: 'AU-based, always', desc: "Our whole team is here. You get real people in your timezone — not an offshore ticket system." },
  { label: 'Plain language', desc: "No jargon, no fluff. We tell you exactly what we're building and why it matters for your business." },
  { label: 'Built to convert', desc: "A site that looks great but doesn't bring in customers is just wallpaper. We build for outcomes." },
]

const activity = [
  { label: 'Homepage live', sub: 'Plumbing Co · just now', dot: 'green' },
  { label: 'SEO audit complete', sub: 'Café Rossa · 2h ago', dot: 'teal' },
  { label: 'Design approved', sub: 'Elite Electrical · 4h ago', dot: 'teal' },
  { label: 'New enquiry', sub: 'Apex Landscaping · 6h ago', dot: 'amber' },
]

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about__inner">

        {/* Header — left copy + right art */}
        <div className="about__header-layout">
          <motion.div
            className="about__copy"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="about__eyebrow">Who we are</span>
            <h2 className="about__heading">A studio built for the way<br />business works today.</h2>
            <p className="about__bio">
              Onrai Studio is a Melbourne-based web and AI studio. We partner with local businesses,
              trades, and service providers across Australia to build websites that get found on Google,
              load fast, and turn visitors into paying customers.
            </p>
            <p className="about__bio">
              We started Onrai because too many good businesses were getting burned — paying big agency
              prices for slow timelines and generic results. We work differently: lean team, fast delivery,
              direct communication, and we're invested in your growth long after launch.
            </p>
          </motion.div>

          {/* CSS art — studio dashboard */}
          <motion.div
            className="about__art"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <div className="about__dashboard">
              {/* Top bar */}
              <div className="about__dash-bar">
                <div className="about__dash-dot" style={{ background: '#ff5f57' }} />
                <div className="about__dash-dot" style={{ background: '#febc2e' }} />
                <div className="about__dash-dot" style={{ background: '#28c840' }} />
                <span className="about__dash-title">Studio Dashboard</span>
                <div className="about__dash-live"><span />Live</div>
              </div>

              {/* Body */}
              <div className="about__dash-body">
                {/* Team row */}
                <div className="about__dash-section-label">Active team</div>
                <div className="about__dash-team">
                  {['B','J','M'].map((initial, i) => (
                    <div key={i} className="about__dash-avatar">
                      <span>{initial}</span>
                      <div className="about__dash-status" />
                    </div>
                  ))}
                </div>

                {/* Projects progress */}
                <div className="about__dash-section-label" style={{ marginTop: '14px' }}>Active projects</div>
                <div className="about__dash-projects">
                  {[
                    { name: 'Plumbing Co', pct: 92 },
                    { name: 'Café Rossa', pct: 67 },
                    { name: 'Elite Electrical', pct: 41 },
                  ].map((p) => (
                    <div key={p.name} className="about__dash-project">
                      <div className="about__dash-project-top">
                        <span>{p.name}</span>
                        <span>{p.pct}%</span>
                      </div>
                      <div className="about__dash-bar-track">
                        <div className="about__dash-bar-fill" style={{ width: `${p.pct}%` }} />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Activity feed */}
                <div className="about__dash-section-label" style={{ marginTop: '14px' }}>Activity</div>
                <div className="about__dash-feed">
                  {activity.map((a, i) => (
                    <div key={i} className="about__dash-feed-item">
                      <div className={`about__dash-feed-dot about__dash-feed-dot--${a.dot}`} />
                      <div>
                        <div className="about__dash-feed-label">{a.label}</div>
                        <div className="about__dash-feed-sub">{a.sub}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          className="about__stats"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {stats.map((s) => (
            <div key={s.label} className="about__stat">
              <span className="about__stat-value">{s.value}</span>
              <span className="about__stat-label">{s.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Values grid */}
        <div className="about__values">
          {values.map((v, i) => (
            <motion.div
              key={v.label}
              className="about__value"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
            >
              <span className="about__value-label">{v.label}</span>
              <span className="about__value-desc">{v.desc}</span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
