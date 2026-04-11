import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Monitor, Palette, PenTool, Layers, TrendingUp, Mail,
  Search, Share2, FileText, Megaphone, ArrowRight, Check,
  Server, LayoutDashboard, Sparkles
} from 'lucide-react'
import Contact from '../components/Contact'
import './ServicesPage.css'

const categories = [
  {
    id: 'web',
    eyebrow: 'Web Design & Development',
    heading: 'Websites that work as hard as you do.',
    desc: 'We design and build fast, modern websites that are built to rank on Google, load instantly, and turn visitors into paying customers. Every site is custom — no templates.',
    icon: Monitor,
    color: '#0d9488',
    services: [
      { name: 'Custom Website Design', desc: 'Unique, tailored designs that reflect your brand and convert visitors.' },
      { name: 'Mobile-First Development', desc: 'Every site is built responsive — perfect on phone, tablet, and desktop.' },
      { name: 'Speed Optimisation', desc: 'Fast load times improve Google ranking and reduce bounce rates.' },
      { name: 'CMS Integration', desc: 'Update your own content easily with WordPress, Sanity, or similar.' },
      { name: 'eCommerce Stores', desc: 'Shopify, WooCommerce, or custom — sell online with confidence.' },
      { name: 'Landing Pages', desc: 'High-converting pages for ads, campaigns, and lead generation.' },
    ],
  },
  {
    id: 'brand',
    eyebrow: 'Brand & Identity Design',
    heading: 'A brand that people remember.',
    desc: "Your brand is the first impression you make — and the last thing customers forget. We build cohesive identities from the ground up, or refresh what you already have.",
    icon: Layers,
    color: '#7c3aed',
    services: [
      { name: 'Logo Design', desc: 'Professional logos designed for every format — print, web, signage, and more.' },
      { name: 'Brand Identity Systems', desc: 'Colours, typography, spacing, and visual language — all working together.' },
      { name: 'Brand Guidelines', desc: 'A style guide so your brand stays consistent across every touchpoint.' },
      { name: 'Brand Refresh', desc: "Modernise an outdated identity while keeping what makes you recognisable." },
      { name: 'Business Card & Stationery', desc: 'Print-ready designs for cards, letterheads, and branded materials.' },
      { name: 'Favicon & App Icons', desc: 'Small details that make your brand look polished and professional.' },
    ],
  },
  {
    id: 'graphic',
    eyebrow: 'Graphic Design',
    heading: 'Design that sells.',
    desc: 'Great graphic design makes your business look credible, professional, and worth paying for. We create marketing materials that get noticed — online and in the real world.',
    icon: PenTool,
    color: '#ea580c',
    services: [
      { name: 'Social Media Graphics', desc: 'On-brand posts, stories, and banners for Instagram, Facebook, and LinkedIn.' },
      { name: 'Flyer & Poster Design', desc: 'Print-ready marketing collateral that grabs attention.' },
      { name: 'Email Newsletter Design', desc: 'Branded email templates that look great in every inbox.' },
      { name: 'Presentation Design', desc: 'Pitch decks and slide decks that make you look the part.' },
      { name: 'Menu & Price List Design', desc: 'Beautiful, print-ready menus for cafés, restaurants, and service businesses.' },
      { name: 'Signage & Banners', desc: 'Pull-up banners, shop signage, and display graphics.' },
    ],
  },
  {
    id: 'marketing',
    eyebrow: 'Digital Marketing',
    heading: 'Get found. Get leads. Grow.',
    desc: 'A great website is only half the equation. We help you drive traffic, capture leads, and build an online presence that compounds over time.',
    icon: TrendingUp,
    color: '#0ea5e9',
    services: [
      { name: 'SEO Strategy', desc: 'Keyword research, on-page SEO, and content strategy to rank on Google.' },
      { name: 'Google Business Profile', desc: 'Get found on Google Maps and local search — set up and optimised.' },
      { name: 'Google Ads Management', desc: 'Targeted paid search campaigns that bring in ready-to-buy customers.' },
      { name: 'Social Media Strategy', desc: 'A content plan and posting strategy that builds your audience consistently.' },
      { name: 'Email Marketing', desc: 'Campaigns, automations, and sequences that keep customers coming back.' },
      { name: 'Analytics & Reporting', desc: 'Monthly reporting so you know exactly what\'s working and what\'s not.' },
    ],
  },
  {
    id: 'hosting',
    eyebrow: 'Domain, Hosting & Maintenance',
    heading: 'We keep your site online and up to date.',
    desc: "Launching a site is just the beginning. We handle everything that keeps it fast, secure, and running smoothly — so you never have to think about it.",
    icon: Server,
    color: '#059669',
    services: [
      { name: 'Domain Registration', desc: 'We register and manage your domain so it\'s always pointing where it should.' },
      { name: 'Hosting Setup & Management', desc: 'Fast, reliable hosting configured and monitored by us — no cPanel headaches.' },
      { name: 'SSL Certificates', desc: 'Your site stays secure with HTTPS, auto-renewing certificates handled for you.' },
      { name: 'Website Backups', desc: 'Automatic daily backups so your site can be restored quickly if anything goes wrong.' },
      { name: 'Security Monitoring', desc: 'Malware scanning, firewall setup, and alerts so threats are caught before they cause damage.' },
      { name: 'Ongoing Maintenance', desc: 'Plugin updates, CMS upgrades, and performance checks on a regular schedule.' },
    ],
  },
  {
    id: 'ai-search',
    eyebrow: 'AI-Powered Search',
    heading: 'Search that actually finds what customers want.',
    desc: "Most site search is frustratingly dumb. We deploy intelligent search engines — powered by Meilisearch — that index your products, content, and catalogue, then return fast, relevant results even when customers type it wrong.",
    icon: Sparkles,
    color: '#4f46e5',
    services: [
      { name: 'Product Catalogue Indexing', desc: 'Every product, variant, and attribute indexed for instant, accurate retrieval.' },
      { name: 'Typo-Tolerant Search', desc: "Finds what customers meant, not just what they typed — handles misspellings automatically." },
      { name: 'AI & Semantic Search', desc: 'Understands intent behind queries, not just keywords — surfaces results that actually match.' },
      { name: 'Faceted Filtering', desc: 'Filter by price, category, brand, or any custom attribute — all in real time.' },
      { name: 'Search Analytics', desc: 'See what customers search for, what returns no results, and where to fill the gaps.' },
      { name: 'Managed Search Hosting', desc: 'We run and maintain the search server — zero configuration, zero downtime headaches for you.' },
    ],
  },
  {
    id: 'dashboard',
    eyebrow: 'Admin Dashboards & Content Control',
    heading: 'Full control over your own website.',
    desc: 'We build custom admin dashboards and integrate content management tools so you can update your site, manage stock, swap images, and monitor performance — without touching code.',
    icon: LayoutDashboard,
    color: '#d97706',
    services: [
      { name: 'Custom Admin Dashboards', desc: 'A clean, purpose-built interface to manage exactly what your business needs.' },
      { name: 'Image & Media Management', desc: 'Easily swap banners, product photos, gallery images, and more — no developer needed.' },
      { name: 'Shopify Stock & Product Control', desc: 'Update inventory, pricing, variants, and product listings directly from your dashboard.' },
      { name: 'WooCommerce Stock Management', desc: 'Manage orders, stock levels, and product data for your WooCommerce store.' },
      { name: 'Content & Copy Editing', desc: 'Edit page text, hero copy, team bios, and service descriptions on the fly.' },
      { name: 'Analytics & Traffic Monitoring', desc: 'See visits, top pages, and conversion events in a simple dashboard built for you.' },
    ],
  },
]

const whyUs = [
  'One studio handles everything — no briefing multiple agencies',
  'Everything is on-brand and consistent across every channel',
  'Transparent scoping — no surprise fees or scope creep',
  'AU-based team in your timezone, not an overseas ticket system',
]

export default function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>Melbourne Web Design, Branding & Digital Marketing Services — Onrai Studio</title>
        <meta name="description" content="Everything your Melbourne business needs online — web design, branding, graphic design, digital marketing, AI-powered search, hosting, maintenance, and custom admin dashboards. Melbourne-based, serving all of Australia." />
        <link rel="canonical" href="https://onraistudio.com/services" />
        <meta property="og:url" content="https://onraistudio.com/services" />
        <meta property="og:title" content="Melbourne Web Design, Branding & Digital Marketing — Onrai Studio" />
        <meta property="og:description" content="Everything your Melbourne business needs online — web design, branding, graphic design, and digital marketing. Melbourne-based studio, serving all of Australia." />
      </Helmet>

      <main className="services-page">

        {/* Hero */}
        <section className="sp__hero">
          <div className="sp__hero-inner">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="sp__hero-eyebrow">
                <span className="sp__hero-dot" />
                Full-service studio · Melbourne
              </div>
              <h1 className="sp__hero-heading">Everything your Melbourne business<br />needs to grow online.</h1>
              <p className="sp__hero-lead">
                Web design, branding, graphic design, and digital marketing — all under one roof,
                all built around your business goals.
              </p>
              <div className="sp__hero-pills">
                {['Web Design', 'Logo Design', 'Brand Identity', 'Graphic Design', 'SEO', 'Google Ads', 'AI-Powered Search', 'Hosting & Maintenance', 'Admin Dashboards'].map(p => (
                  <span key={p} className="sp__hero-pill">{p}</span>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="sp__hero-visual"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              aria-hidden="true"
            >
              <div className="sp__mock">
                <div className="sp__mock-bar">
                  <span className="sp__mock-dot--r" /><span className="sp__mock-dot--y" /><span className="sp__mock-dot--g" />
                  <span className="sp__mock-url" />
                </div>
                <div className="sp__mock-body">
                  <div className="sp__mock-dash">
                    <div className="sp__mock-sidebar">
                      <div className="sp__mock-sidebar-logo" />
                      <div className="sp__mock-sidebar-nav">
                        <div className="sp__mock-nav-item sp__mock-nav-item--active" />
                        <div className="sp__mock-nav-item" />
                        <div className="sp__mock-nav-item" />
                        <div className="sp__mock-nav-item" />
                        <div className="sp__mock-nav-item" />
                      </div>
                    </div>
                    <div className="sp__mock-main">
                      <div className="sp__mock-stats">
                        {['#0d9488', '#7c3aed', '#d97706'].map((c, i) => (
                          <div key={i} className="sp__mock-stat-card">
                            <div className="sp__mock-stat-icon" style={{ background: `${c}22` }}>
                              <div style={{ width: 8, height: 8, borderRadius: 2, background: c }} />
                            </div>
                            <div className="sp__mock-stat-num" />
                            <div className="sp__mock-stat-label" />
                          </div>
                        ))}
                      </div>
                      <div className="sp__mock-chart">
                        <div className="sp__mock-chart-bars">
                          {[40, 62, 48, 78, 55, 92, 68].map((h, i) => (
                            <div key={i} className="sp__mock-bar-item" style={{ height: `${h}%`, background: i === 5 ? '#0c8c81' : 'rgba(13,17,23,0.12)' }} />
                          ))}
                        </div>
                      </div>
                      <div className="sp__mock-table">
                        {[0, 1, 2].map(i => (
                          <div key={i} className="sp__mock-table-row">
                            <div className="sp__mock-table-avatar" />
                            <div className="sp__mock-table-line" />
                            <div className="sp__mock-table-badge" style={{ background: i === 0 ? '#0c8c8122' : 'rgba(13,17,23,0.08)' }} />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Service categories */}
        {categories.map((cat, ci) => {
          const Icon = cat.icon
          return (
            <section key={cat.id} className={`sp__category ${ci % 2 === 1 ? 'sp__category--alt' : ''}`}>
              <div className="sp__category-inner">
                <motion.div
                  className="sp__category-header"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="sp__category-icon" style={{ background: `${cat.color}18`, color: cat.color }}>
                    <Icon size={24} strokeWidth={1.75} />
                  </div>
                  <span className="sp__category-eyebrow" style={{ color: cat.color }}>{cat.eyebrow}</span>
                  <h2 className="sp__category-heading">{cat.heading}</h2>
                  <p className="sp__category-desc">{cat.desc}</p>
                </motion.div>

                <div className="sp__services-grid">
                  {cat.services.map((s, i) => (
                    <motion.div
                      key={s.name}
                      className="sp__service-card"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.07 }}
                    >
                      <div className="sp__service-dot" style={{ background: cat.color }} />
                      <h3 className="sp__service-name">{s.name}</h3>
                      <p className="sp__service-desc">{s.desc}</p>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  className="sp__category-cta"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <a href="#contact" className="sp__category-link" style={{ color: cat.color }}>
                    Ask about {cat.eyebrow.split(' ')[0]} services <ArrowRight size={14} />
                  </a>
                </motion.div>
              </div>
            </section>
          )
        })}

        {/* Why one studio */}
        <section className="sp__why">
          <div className="sp__why-inner">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="sp__why-heading">Why use one studio for everything?</h2>
              <p className="sp__why-sub">When design, development, and marketing all come from the same team, everything works together — consistently, efficiently, and on-brand.</p>
            </motion.div>
            <ul className="sp__why-list">
              {whyUs.map((item, i) => (
                <motion.li
                  key={i}
                  className="sp__why-item"
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <Check size={18} strokeWidth={2.5} className="sp__why-check" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
        </section>

        <Contact />
      </main>
    </>
  )
}
