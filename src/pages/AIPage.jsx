import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Bot, PenTool, BarChart2, Megaphone,
  ArrowRight, Clock, Brain, Zap
} from 'lucide-react'
import Contact from '../components/Contact'
import './AIPage.css'

const categories = [
  {
    id: 'chatbots',
    eyebrow: 'AI Chatbots & Automation',
    heading: 'Always on. Always helpful.',
    desc: 'A custom AI chatbot trained on your business — answering questions, capturing leads, and booking appointments around the clock, without any staff involvement.',
    icon: Bot,
    color: '#0d9488',
    features: [
      { name: 'Custom AI Chatbot', desc: 'Trained on your products, services, and FAQs — gives accurate answers instantly, 24/7.' },
      { name: 'Lead Capture Bot', desc: 'Collects name, email, and phone before handing off, so no enquiry slips through.' },
      { name: 'Appointment Booking', desc: 'Integrates with your calendar and books clients while you sleep, eat, or work.' },
      { name: 'Automated Review Replies', desc: 'AI drafts personalised responses to your Google reviews — keeping your profile active.' },
      { name: 'FAQ Automation', desc: 'Handles the repetitive questions so your team only deals with the complex ones.' },
      { name: 'Live Chat Handoff', desc: 'Seamlessly escalates to a real person when the conversation needs a human touch.' },
    ],
  },
  {
    id: 'content',
    eyebrow: 'AI Content & Copywriting',
    heading: 'Words that rank. Copy that converts.',
    desc: 'We use AI to write service pages, product listings, and marketing content that is optimised for Google and tailored to your brand voice — at a fraction of the usual cost.',
    icon: PenTool,
    color: '#7c3aed',
    features: [
      { name: 'Service Page Copywriting', desc: 'AI-written pages structured to rank on Google and turn visitors into enquiries.' },
      { name: 'Product Descriptions', desc: 'Bulk-generate accurate, on-brand descriptions for every product in your catalogue.' },
      { name: 'Blog & Article Writing', desc: 'Regular content that builds SEO authority and keeps your site fresh.' },
      { name: 'Email Campaign Copy', desc: 'Sequences and newsletters written and scheduled — without you lifting a pen.' },
      { name: 'Social Media Captions', desc: 'Platform-specific posts for Instagram, Facebook, and LinkedIn, ready to publish.' },
      { name: 'Ad Copy Generation', desc: 'Google and Meta ad variations written, tested, and refined to drive clicks.' },
    ],
  },
  {
    id: 'intelligence',
    eyebrow: 'Business Data & Intelligence',
    heading: 'Know your business better than ever.',
    desc: 'AI reads your sales data, customer behaviour, stock levels, and reviews — then surfaces the insights that actually matter, in plain English, without you needing to dig through spreadsheets.',
    icon: BarChart2,
    color: '#d97706',
    features: [
      { name: 'Sales & Revenue Reporting', desc: 'Connect your store data and see exactly what\'s selling, when, and to whom.' },
      { name: 'Customer Behaviour Analysis', desc: 'Understand how visitors navigate your site and where they drop off.' },
      { name: 'Stock & Inventory Insights', desc: 'Shopify and WooCommerce data surfaced in plain English — low stock alerts included.' },
      { name: 'Review & Feedback Analysis', desc: 'AI summarises sentiment across Google, Facebook, and other platforms at a glance.' },
      { name: 'Competitor Monitoring', desc: 'Track competitor pricing, content, and positioning changes automatically.' },
      { name: 'Custom Reports & Alerts', desc: 'Get the numbers that matter delivered to you — daily, weekly, or in real time.' },
    ],
  },
  {
    id: 'marketing',
    eyebrow: 'AI-Powered Marketing',
    heading: 'Smarter marketing, less manual work.',
    desc: 'AI helps you reach the right customers at the right time — personalising your website, automating your emails, and telling you exactly which marketing efforts are paying off.',
    icon: Megaphone,
    color: '#0ea5e9',
    features: [
      { name: 'Personalised Recommendations', desc: 'Show each visitor the products or services most relevant to them, automatically.' },
      { name: 'Smart Email Segmentation', desc: 'Send the right message to the right customer based on their behaviour.' },
      { name: 'Predictive Lead Scoring', desc: 'AI identifies which enquiries are most likely to convert so you focus your time wisely.' },
      { name: 'Dynamic Pricing Suggestions', desc: 'AI flags pricing opportunities based on demand, season, and market data.' },
      { name: 'Content Performance Insights', desc: 'Know exactly which pages drive revenue and which ones need work.' },
      { name: 'Automated Social Scheduling', desc: 'AI picks the best time to post and queues your content automatically.' },
    ],
  },
]

const whyAI = [
  { icon: Clock, heading: '24/7 availability', body: 'AI handles customer questions, bookings, and lead capture outside business hours — without extra staff.' },
  { icon: Brain, heading: 'Turn data into decisions', body: 'AI reads your business data and tells you what\'s working, what\'s not, and what to do next.' },
  { icon: Zap, heading: 'Save hours every week', body: 'Automated replies, AI-written content, and instant reports free up time for the work that actually needs you.' },
]

export default function AIPage() {
  return (
    <>
      <Helmet>
        <title>AI Features — Smarter Websites for Australian Businesses | Onrai Studio</title>
        <meta name="description" content="Onrai Studio builds AI-powered websites with custom chatbots, automated content, business data intelligence, and smart marketing tools for local Australian businesses." />
        <link rel="canonical" href="https://onraistudio.com/ai" />
        <meta property="og:title" content="AI Features | Onrai Studio" />
        <meta property="og:description" content="Custom AI chatbots, content writing, business intelligence, and marketing automation — all built into your website." />
        <meta property="og:url" content="https://onraistudio.com/ai" />
      </Helmet>

      <main className="ai-page">

        {/* Hero */}
        <section className="aip__hero">
          <div className="aip__hero-inner">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="aip__hero-eyebrow">
                <span className="aip__hero-dot" />
                AI-Powered Websites
              </div>
              <h1 className="aip__hero-heading">Your website,<br />working smarter.</h1>
              <p className="aip__hero-lead">
                AI isn't just a buzzword — it's a genuine competitive advantage. We build it directly into your website so it captures more leads, creates better content, and gives you real insight into your business, all on autopilot.
              </p>
              <div className="aip__hero-pills">
                {['AI Chatbot', 'Content Writing', 'Business Intelligence', 'Review Automation', 'Data Analysis', 'Smart Marketing'].map(p => (
                  <span key={p} className="aip__hero-pill">{p}</span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why AI */}
        <section className="aip__why">
          <div className="aip__why-inner">
            <motion.h2
              className="aip__why-heading"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Why add AI to your business?
            </motion.h2>
            <div className="aip__why-grid">
              {whyAI.map((item, i) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={item.heading}
                    className="aip__why-card"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                  >
                    <div className="aip__why-icon">
                      <Icon size={22} strokeWidth={1.75} />
                    </div>
                    <h3 className="aip__why-card-heading">{item.heading}</h3>
                    <p className="aip__why-card-body">{item.body}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Feature categories */}
        {categories.map((cat, ci) => {
          const Icon = cat.icon
          return (
            <section key={cat.id} className={`aip__category ${ci % 2 === 1 ? 'aip__category--alt' : ''}`}>
              <div className="aip__category-inner">
                <motion.div
                  className="aip__category-header"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="aip__category-icon" style={{ background: `${cat.color}18`, color: cat.color }}>
                    <Icon size={24} strokeWidth={1.75} />
                  </div>
                  <span className="aip__category-eyebrow" style={{ color: cat.color }}>{cat.eyebrow}</span>
                  <h2 className="aip__category-heading">{cat.heading}</h2>
                  <p className="aip__category-desc">{cat.desc}</p>
                </motion.div>

                <div className="aip__features-grid">
                  {cat.features.map((f, i) => (
                    <motion.div
                      key={f.name}
                      className="aip__feature-card"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.07 }}
                    >
                      <div className="aip__feature-dot" style={{ background: cat.color }} />
                      <h3 className="aip__feature-name">{f.name}</h3>
                      <p className="aip__feature-desc">{f.desc}</p>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  className="aip__category-cta"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <Link to="/contact" className="aip__category-link" style={{ color: cat.color }}>
                    Ask about {cat.eyebrow.split(' ')[0]} <ArrowRight size={14} />
                  </Link>
                </motion.div>
              </div>
            </section>
          )
        })}

        {/* How it works */}
        <section className="aip__how">
          <div className="aip__how-inner">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="aip__how-heading">How it works</h2>
              <p className="aip__how-sub">We handle everything — from identifying the right tools to building, integrating, and monitoring them for you.</p>
            </motion.div>
            <div className="aip__steps">
              {[
                { n: '01', title: 'We audit your business', body: 'We look at your current website, tools, and goals to identify where AI will have the biggest impact.' },
                { n: '02', title: 'We build and integrate', body: 'We set up the right AI tools for your stack — chatbots, content systems, dashboards, or all three.' },
                { n: '03', title: 'You get results', body: 'You receive a live dashboard, ongoing optimisation, and regular reporting on what the AI is doing for you.' },
              ].map((step, i) => (
                <motion.div
                  key={step.n}
                  className="aip__step"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <div className="aip__step-number">{step.n}</div>
                  <div>
                    <h3 className="aip__step-title">{step.title}</h3>
                    <p className="aip__step-body">{step.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Contact />
      </main>
    </>
  )
}
