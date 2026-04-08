import { motion } from 'framer-motion'
import { Search, Code2, Rocket } from 'lucide-react'
import './HowItWorks.css'

const steps = [
  {
    number: '1',
    icon: Search,
    title: 'Discovery',
    desc: 'We learn your business, goals, and constraints.',
  },
  {
    number: '2',
    icon: Code2,
    title: 'Build',
    desc: 'We design and develop with clear milestones and regular check-ins.',
  },
  {
    number: '3',
    icon: Rocket,
    title: 'Launch',
    desc: 'We deploy, test, and hand over — or keep building with you.',
  },
]

export default function HowItWorks() {
  return (
    <section className="how" id="how-it-works">
      <div className="how__inner">
        <motion.div
          className="how__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-label-center">How It Works</h2>
        </motion.div>

        <div className="how__layout">
          <div className="how__steps">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.number}
                  className="how__step"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="how__step-inner">
                    <div className="how__step-icon">
                      <Icon size={18} strokeWidth={2} />
                    </div>
                    <h3 className="how__step-title">{step.title}</h3>
                    <p className="how__step-desc">{step.desc}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>

          <motion.div
            className="how__device"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <div className="how__browser">
              <div className="how__browser-bar">
                <div className="how__browser-dot" />
                <div className="how__browser-dot" />
                <div className="how__browser-dot" />
                <div className="how__browser-address" />
              </div>
              <div className="how__browser-body">
                <div className="how__mock-header">
                  <div className="how__mock-logo" />
                  <div className="how__mock-nav">
                    <span /><span /><span />
                  </div>
                </div>
                <div className="how__mock-hero" />
                <div className="how__mock-content">
                  <div className="how__mock-col">
                    <div className="how__mock-line" />
                    <div className="how__mock-line how__mock-line--short" />
                    <div className="how__mock-line" />
                  </div>
                  <div className="how__mock-col">
                    <div className="how__mock-line how__mock-line--short" />
                    <div className="how__mock-line" />
                  </div>
                </div>
                <div className="how__mock-btn-row">
                  <div className="how__mock-btn how__mock-btn--sm" />
                  <div className="how__mock-btn how__mock-btn--ghost" />
                </div>
                <div className="how__mock-card-row">
                  <div className="how__mock-card" />
                  <div className="how__mock-card" />
                  <div className="how__mock-card" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
