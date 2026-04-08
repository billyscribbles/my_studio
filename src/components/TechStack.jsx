import { motion } from 'framer-motion'
import './TechStack.css'

const techs = [
  { name: 'React',        icon: 'react' },
  { name: 'Next.js',      icon: 'nextdotjs' },
  { name: 'TypeScript',   icon: 'typescript' },
  { name: 'Tailwind',     icon: 'tailwindcss' },
  { name: 'Shopify',      icon: 'shopify' },
  { name: 'WooCommerce',  icon: 'woocommerce' },
  { name: 'WordPress',    icon: 'wordpress' },
  { name: 'Vercel',       icon: 'vercel' },
  { name: 'Railway',      icon: 'railway' },
  { name: 'OpenAI',       icon: 'openai', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg' },
  { name: 'Supabase',     icon: 'supabase' },
  { name: 'Stripe',       icon: 'stripe' },
]

const doubled = [...techs, ...techs]

export default function TechStack() {
  return (
    <section className="techstack" id="tech-stack">
      <div className="techstack__inner">
        <motion.div
          className="techstack__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-label-center">Built With The Best</h2>
        </motion.div>

        <motion.div
          className="techstack__runway-wrap"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="techstack__runway">
            {doubled.map((t, i) => (
              <div key={i} className="techstack__logo-item">
                <img
                  src={t.iconUrl ?? `https://cdn.simpleicons.org/${t.icon}`}
                  alt={t.name}
                  className="techstack__logo-img"
                  loading="lazy"
                  draggable="false"
                  onError={(e) => { e.currentTarget.style.display = 'none' }}
                />
                <span className="techstack__logo-name">{t.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
