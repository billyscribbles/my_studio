import { motion } from 'framer-motion'
import './Testimonials.css'

const testimonials = [
  {
    quote: "Our retail, wholesale and workshop bookings were scattered across three different tools. They pulled it all into one clean site and the workshop is now booked weeks in advance.",
    name: 'Jess P.',
    role: 'Co-owner, Elusive Racing',
    type: 'Automotive · Melbourne VIC',
    initials: 'JP',
    stars: 5,
  },
  {
    quote: "We were running the whole studio off Instagram DMs. They built us an editorial storefront that actually feels like our brand — custom orders now come in weekly through the site.",
    name: 'Mick T.',
    role: 'Owner, Soft Florals',
    type: 'eCommerce · Melbourne VIC',
    initials: 'MT',
    stars: 5,
  },
  {
    quote: "Four decades of Australian-made craftsmanship and our old site didn't show any of it. The new site finally does our vans justice — dealer and buyer enquiries come in every week.",
    name: 'Dave K.',
    role: 'Owner, Sahara Caravans',
    type: 'Manufacturing · Campbellfield VIC',
    initials: 'DK',
    stars: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials__inner">
        <motion.div
          className="testimonials__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-label-center">Real Businesses, Real Results</h2>
          <p className="testimonials__sub">Local and small business owners across Australia.</p>
        </motion.div>

        <div className="testimonials__grid">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="testimonial-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="testimonial-card__stars" aria-label={`${t.stars} stars`}>
                {'★'.repeat(t.stars)}
              </div>
              <p className="testimonial-card__text">"{t.quote}"</p>
              <div className="testimonial-card__author">
                <div className="testimonial-card__avatar">{t.initials}</div>
                <div>
                  <div className="testimonial-card__name">{t.name}</div>
                  <div className="testimonial-card__role">{t.role}</div>
                  <div className="testimonial-card__type">{t.type}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
