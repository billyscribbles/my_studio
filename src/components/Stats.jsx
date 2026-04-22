import { motion } from 'framer-motion'
import './Stats.css'

const stats = [
  { value: '5+', label: 'Local Businesses Online' },
  { value: 'Top 3', label: 'Google Rankings Achieved' },
  { value: '2 Weeks', label: 'Average Launch Time' },
  { value: 'AU', label: 'Based & Operated' },
]

export default function Stats() {
  return (
    <section className="stats" id="stats">
      <div className="stats__inner">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            className="stats__item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="stats__value">{s.value}</div>
            <div className="stats__label">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
