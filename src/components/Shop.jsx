import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import './Shop.css'

const packages = [
  {
    name: 'Starter',
    pricingModel: 'Free setup + Monthly plan',
    tagline: 'Get online fast',
    badge: 'Free Setup',
    desc: 'Perfect if you have nothing yet and just need a professional website that works.',
    features: [
      'Up to 5 pages (Home, About, Services, Contact, etc.)',
      'Mobile-friendly & fast loading',
      'Google-indexed from day one',
      'Contact form that lands in your inbox',
      'Basic on-page SEO',
      '30 days of support after launch',
    ],
    cta: 'Get a Quote',
    featured: false,
  },
  {
    name: 'Growth',
    pricingModel: 'One-time setup + Monthly plan',
    tagline: 'Most popular',
    badge: 'Most Popular',
    desc: 'Everything in Starter, plus a custom admin dashboard, AI tools, and SEO to grow your customer base.',
    features: [
      'Everything in Starter',
      'Custom admin dashboard',
      'AI chatbot — answers FAQs & captures leads 24/7',
      'Local SEO setup (Google Business Profile)',
      'Google Analytics & Search Console setup',
      '60 days of support after launch',
    ],
    cta: 'Get a Quote',
    featured: true,
  },
  {
    name: 'eCommerce',
    pricingModel: 'One-time setup + Monthly plan',
    tagline: 'Sell online',
    desc: 'A full online shop so you can take orders and payments around the clock.',
    features: [
      'Everything in Growth',
      'Online shop with up to 50 products',
      'Secure payments via Stripe',
      'Order management dashboard',
      'Product page SEO',
      '90 days of support after launch',
    ],
    cta: 'Get a Quote',
    featured: false,
  },
  {
    name: 'Full Custom',
    pricingModel: 'Custom quote',
    tagline: 'Custom everything',
    desc: 'Fully custom design, development, and ongoing support. Built entirely around your business.',
    features: [
      'Everything in eCommerce',
      'Custom design & development',
      'Ongoing AI automation',
      'Monthly SEO reporting',
      'Priority support',
      'Dedicated account contact',
    ],
    cta: 'Let\'s Talk',
    featured: false,
  },
]

export default function Shop() {
  return (
    <section className="shop" id="packages">
      <div className="shop__inner">
        <motion.div
          className="shop__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-label">Simple Packages,<br />Built for You</h2>
          <p className="section-sub">Every project starts with a one-time setup fee and includes an ongoing monthly plan. Pick a package and we'll scope it out.</p>
        </motion.div>

        <div className="shop__grid">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              className={`shop-card${pkg.featured ? ' shop-card--featured' : ''}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              {pkg.badge && (
                <div className="shop-card__badge">{pkg.badge}</div>
              )}
              <div className="shop-card__header">
                <div className="shop-card__tagline">{pkg.tagline}</div>
                <div className="shop-card__name">{pkg.name}</div>
                <div className="shop-card__pricing-model">{pkg.pricingModel}</div>
                <p className="shop-card__desc">{pkg.desc}</p>
              </div>

              <ul className="shop-card__features" aria-label={`${pkg.name} package features`}>
                {pkg.features.map((f) => (
                  <li key={f} className="shop-card__feature">
                    <Check size={14} strokeWidth={2.5} className="shop-card__check" aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`shop-card__cta${pkg.featured ? ' shop-card__cta--featured' : ''}`}
              >
                {pkg.cta} →
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="shop__footnote"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Every project is scoped individually. <a href="#contact">Get in touch</a> and we'll put together a proposal.
        </motion.p>
      </div>
    </section>
  )
}
