import { motion } from 'framer-motion'
import './About.css'

const values = [
  { label: 'No lock-in contracts', desc: 'Every project is month-to-month. You stay because we deliver, not because you're trapped.' },
  { label: 'AU based, always', desc: 'You'll talk to a real person in your timezone — not a ticket system overseas.' },
  { label: 'Plain language', desc: 'No jargon. We explain what we're building and why, in terms that make sense to you.' },
  { label: 'Results over aesthetics', desc: 'A site that looks great but doesn't convert is just wallpaper. We build for outcomes.' },
]

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about__inner">
        <div className="about__layout">
          <motion.div
            className="about__avatar-col"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="about__avatar">
              <div className="about__avatar-initials">B</div>
            </div>
            <div className="about__badge">🇦🇺 Based in Australia</div>
          </motion.div>

          <motion.div
            className="about__content"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="about__eyebrow">Who's behind Onrai Studio</span>
            <h2 className="about__heading">Built by a developer who actually gives a damn.</h2>
            <p className="about__bio">
              Hi, I'm Billy — a web developer based in Australia. I started Onrai Studio because I kept seeing local businesses
              get burned by expensive agencies that over-promised and under-delivered. A plumber shouldn't need a six-month
              engagement and a $30,000 quote to have a decent website.
            </p>
            <p className="about__bio">
              I build fast, modern websites that are designed to get you found on Google and turn visitors into paying customers.
              I work with one client at a time where possible — so you always have my full attention, not an account manager
              who's juggling 40 projects.
            </p>

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
          </motion.div>
        </div>
      </div>
    </section>
  )
}
