import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, CheckCircle } from 'lucide-react'
import './Contact.css'

const FORMSPREE_ENDPOINT = `https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_ID}`

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    businessType: '',
    service: '',
    referral: '',
    message: '',
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setSubmitted(true)
      }
    } catch {
      alert('Something went wrong sending your message. Please email us directly at onraistudio@gmail.com.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section className="contact" id="contact">
      <div className="contact__inner">
        <motion.div
          className="contact__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-label">Get Your Free Quote.</h2>
          <p className="section-sub">
            Tell us about your business and we'll get back to you within 1 business day — no obligations.
          </p>
        </motion.div>

        <motion.div
          className="contact__layout"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div>
            {submitted ? (
              <div className="form__success">
                <CheckCircle size={22} strokeWidth={2} />
                Thanks! We'll be in touch within 1 business day.
              </div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit}>
                <div className="form__row">
                  <div className="form__field">
                    <label className="form__label" htmlFor="name">Your Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className="form__input"
                      placeholder="Jane Smith"
                      required
                      value={form.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form__field">
                    <label className="form__label" htmlFor="email">Email Address</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="form__input"
                      placeholder="jane@yourbusiness.com.au"
                      required
                      value={form.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form__row">
                  <div className="form__field">
                    <label className="form__label" htmlFor="phone">
                      Phone <span style={{ fontWeight: 400, opacity: 0.6 }}>(optional)</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="form__input"
                      placeholder="+61 4XX XXX XXX"
                      value={form.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form__field">
                    <label className="form__label" htmlFor="businessType">Type of Business</label>
                    <select
                      id="businessType"
                      name="businessType"
                      className="form__select"
                      required
                      value={form.businessType}
                      onChange={handleChange}
                    >
                      <option value="" disabled>Select your business type</option>
                      <option>Café / Restaurant / Food</option>
                      <option>Tradie / Home Services</option>
                      <option>Retail / Products</option>
                      <option>Health / Wellness / Beauty</option>
                      <option>Professional Services</option>
                      <option>Hospitality / Tourism</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div className="form__row">
                  <div className="form__field">
                    <label className="form__label" htmlFor="service">What Do You Need?</label>
                    <select
                      id="service"
                      name="service"
                      className="form__select"
                      required
                      value={form.service}
                      onChange={handleChange}
                    >
                      <option value="" disabled>Select a service</option>
                      <option>New Website</option>
                      <option>Website Refresh / Rebuild</option>
                      <option>Online Shop</option>
                      <option>AI Chatbot</option>
                      <option>Google Business Profile Setup</option>
                      <option>Ongoing Support / Maintenance</option>
                      <option>Not Sure — Help Me Decide</option>
                    </select>
                  </div>
                  <div className="form__field">
                    <label className="form__label" htmlFor="referral">How Did You Hear About Us?</label>
                    <select
                      id="referral"
                      name="referral"
                      className="form__select"
                      value={form.referral}
                      onChange={handleChange}
                    >
                      <option value="">Select one</option>
                      <option>Google Search</option>
                      <option>Word of Mouth / Referral</option>
                      <option>Social Media</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div className="form__field">
                  <label className="form__label" htmlFor="message">Tell Us About Your Business</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form__textarea"
                    placeholder="What does your business do? Do you currently have a website? What's the main thing you want to achieve online?"
                    required
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>

                <button type="submit" className="form__submit" disabled={submitting}>
                  {submitting ? 'Sending…' : 'Get My Free Quote →'}
                </button>
              </form>
            )}
          </div>

          <div className="contact__info">
            <div>
              <div className="contact__email-label">Email Us Directly</div>
              <a href="mailto:onraistudio@gmail.com" className="contact__email">
                onraistudio@gmail.com
              </a>
            </div>

            <p className="contact__blurb">
              We work with local and small businesses every day. No jargon, no pressure — just an honest conversation about what will actually help your business grow online.
            </p>

            <div className="contact__trust">
              {[
                'Free initial consultation',
                'Quote within 1 business day',
                'AU based — we\'re in your timezone',
              ].map((item) => (
                <div key={item} className="contact__trust-item">
                  <Check size={16} strokeWidth={2.5} className="contact__trust-icon" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
