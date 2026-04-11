import { useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import {
  Check, Rocket, BarChart3, ShoppingBag, Gem,
  Monitor, Pencil, Image, LayoutDashboard, Bot,
  Search, Globe, ShieldCheck, Zap, Code2, Palette,
  Sparkles, ArrowRight, Store, Package
} from 'lucide-react'
import Contact from '../components/Contact'
import './PackagesPage.css'

const tiers = [
  {
    id: 'starter',
    name: 'Starter',
    tagline: 'Get online fast',
    pricingModel: 'Free setup + Monthly plan',
    icon: Rocket,
    color: '#22c55e',
    headline: 'A professional website that just works.',
    lead: "You don't have a website yet — or the one you have isn't doing its job. Starter gives you a clean, modern site that loads fast, looks great on every device, and shows up on Google from day one. No templates. No drag-and-drop builders. Just clean, hand-written code.",
    whoFor: 'Sole traders, new businesses, freelancers, or anyone who needs a quality web presence without the complexity.',
    features: [
      {
        icon: Monitor,
        title: 'Up to 5 custom pages',
        desc: 'Home, About, Services, Contact, and one more of your choice. Each page is designed and built from scratch — not picked from a template library.',
      },
      {
        icon: Zap,
        title: 'Fast by default',
        desc: "Your site loads in under 2 seconds. We optimise images, minimise code, and use modern hosting so visitors never wait around.",
      },
      {
        icon: Globe,
        title: 'Google-indexed from day one',
        desc: "We submit your site to Google, set up a sitemap, and configure meta tags so search engines can find and understand your business immediately.",
      },
      {
        icon: Pencil,
        title: 'Contact form that works',
        desc: "Visitors fill out a form, you get an email. Simple, reliable, and it works on every device. No spam, no missed leads.",
      },
      {
        icon: Search,
        title: 'Basic on-page SEO',
        desc: "Page titles, meta descriptions, heading structure, alt text — the fundamentals that help Google rank your site for the right searches.",
      },
      {
        icon: ShieldCheck,
        title: '30 days of support',
        desc: "After launch, we stick around for a full month. Text changes, small tweaks, questions about how things work — we've got you covered.",
      },
    ],
    outcome: "You walk away with a site that looks like you paid five figures for it — fast, polished, and ready to take enquiries. No ongoing obligation. Just a professional online presence your business can grow from.",
  },
  {
    id: 'growth',
    name: 'Growth',
    tagline: 'Most popular',
    pricingModel: 'One-time setup + Monthly plan',
    icon: BarChart3,
    color: '#0c8c81',
    featured: true,
    headline: 'Your website becomes a business tool you actually control.',
    lead: "Growth isn't just a better-looking website — it's a command centre for your online presence. You get a custom admin dashboard where you can change anything on your site without calling us. Update your homepage headline, swap a hero image, edit your team bios, add a blog post — all from a clean, simple interface built specifically for your business.",
    whoFor: 'Growing businesses that need to update their site regularly, capture leads, and show up in local search results.',
    features: [
      {
        icon: LayoutDashboard,
        title: 'Custom admin dashboard',
        desc: "Not WordPress. Not Squarespace. A purpose-built dashboard designed around what your business actually needs to manage. Clean, fast, and impossible to break.",
      },
      {
        icon: Pencil,
        title: 'Edit any text on your site',
        desc: "Change your homepage headline, update service descriptions, edit your About page — all from the dashboard. See changes live in seconds, no developer needed.",
      },
      {
        icon: Image,
        title: 'Swap images instantly',
        desc: "Upload a new hero banner, change team photos, update your gallery — drag, drop, done. Images are automatically optimised for fast loading.",
      },
      {
        icon: Bot,
        title: 'AI chatbot that captures leads',
        desc: "A smart chatbot trained on your business answers visitor questions 24/7. It captures contact details, qualifies leads, and sends you a summary — even while you sleep.",
      },
      {
        icon: Search,
        title: 'Local SEO & Google Business Profile',
        desc: "We set up and optimise your Google Business Profile so you show up on Google Maps and local search. When someone nearby searches for what you do, they find you.",
      },
      {
        icon: BarChart3,
        title: 'Analytics built into your dashboard',
        desc: "See how many people visit your site, which pages they view, and where they come from — presented simply in your dashboard, not buried in Google Analytics.",
      },
    ],
    dashboardCapabilities: [
      'Change any text or heading on any page',
      'Upload and swap images, banners, and photos',
      'Add, edit, or remove blog posts and news updates',
      'Update business hours, contact info, and locations',
      'View visitor analytics and lead submissions',
      'Manage team member profiles and bios',
      'Toggle sections on or off without touching code',
      'Preview changes before they go live',
    ],
    outcome: "Your website stops being a static brochure and starts being something you actually use every day. Update it as often as you want, track what's working, and let the AI chatbot handle enquiries around the clock.",
  },
  {
    id: 'ecommerce',
    name: 'eCommerce',
    tagline: 'Sell online',
    pricingModel: 'One-time setup + Monthly plan',
    icon: ShoppingBag,
    color: '#7c3aed',
    headline: 'A storefront that looks custom but runs on the platform you already know.',
    lead: "We build your online store as a headless frontend — a fully custom-designed shopping experience that connects to Shopify or WooCommerce behind the scenes. You keep managing products, inventory, and orders in the admin panel you're familiar with. Your customers get a store that's lightning-fast, beautifully designed, and nothing like a cookie-cutter theme.",
    whoFor: 'Product-based businesses, retailers, and anyone selling physical or digital goods who wants a store that stands out from every other Shopify theme.',
    features: [
      {
        icon: Store,
        title: 'Headless Shopify or WooCommerce',
        desc: "Your store's frontend is completely custom — not a theme. We connect it to Shopify or WooCommerce via API so you manage products the same way you always have, but your store looks and performs nothing like theirs.",
      },
      {
        icon: Zap,
        title: 'Blazing-fast page loads',
        desc: "Headless stores are dramatically faster than traditional setups. Pages load instantly because the frontend is decoupled from the backend. Faster stores convert more customers — that's not opinion, it's data.",
      },
      {
        icon: Palette,
        title: 'Fully custom design',
        desc: "No template limitations. Every product page, collection page, cart, and checkout flow is designed around your brand. If you've ever felt boxed in by Shopify themes, this is the way out.",
      },
      {
        icon: Package,
        title: 'Up to 50 products',
        desc: "Enough to run a full catalogue. Each product gets its own SEO-optimised page with high-quality images, descriptions, variants, and pricing — all manageable from your existing Shopify or WooCommerce admin.",
      },
      {
        icon: ShieldCheck,
        title: 'Secure payments via Stripe',
        desc: "Payments are handled through Stripe's PCI-compliant infrastructure. Credit cards, Apple Pay, Google Pay — your customers pay however they prefer, and you get paid reliably.",
      },
      {
        icon: BarChart3,
        title: 'Order management dashboard',
        desc: "Track orders, manage fulfilment, handle refunds, and monitor inventory — all from the same admin panel you already use. We don't add complexity; we remove it.",
      },
    ],
    platforms: [
      {
        name: 'Shopify',
        desc: "The world's most popular eCommerce platform. We use the Storefront API to pull your products, collections, and inventory into a custom frontend — so you keep Shopify's reliability with none of its design limitations.",
      },
      {
        name: 'WooCommerce',
        desc: "If you're already on WordPress, we connect to WooCommerce via REST API. Same product management, same order tracking — but a frontend that actually reflects your brand.",
      },
    ],
    outcome: "You get a store that looks like a premium, custom-built shopping experience — because it is. But behind the scenes, you're managing everything in the same Shopify or WooCommerce dashboard you already know. Best of both worlds.",
  },
  {
    id: 'full-custom',
    name: 'Full Custom',
    tagline: 'Dream it. We build it.',
    pricingModel: 'Custom quote',
    icon: Gem,
    color: '#d97706',
    headline: 'No limits. No templates. Just code, craft, and your wildest ideas.',
    lead: "This isn't a website package — it's a partnership. Full Custom means we build exactly what you imagine, from scratch, in code. Not Wix. Not Squarespace. Not a WordPress theme with plugins bolted on. Every interaction, animation, and function is written by hand. If you've seen something on another site and thought \"I want that\" — we can build it. If you've dreamed up something that doesn't exist yet — we can prototype it, demo it, and ship it.",
    whoFor: 'Established businesses, startups with ambitious visions, or anyone who needs something that simply doesn\'t exist as an off-the-shelf solution.',
    features: [
      {
        icon: Code2,
        title: 'Hand-written code, not site builders',
        desc: "Every line is written by a developer, not generated by a drag-and-drop tool. This means your site can do things that template-based sites simply can't — custom interactions, complex logic, unique animations, bespoke functionality.",
      },
      {
        icon: Sparkles,
        title: 'Prototype anything, demo everything',
        desc: "Before we build the real thing, we prototype it. You see a working demo of your idea before committing. Want to test a new interaction? A unique checkout flow? An experimental layout? We build it, you try it, we refine it.",
      },
      {
        icon: Palette,
        title: 'Fully custom design & animation',
        desc: "Scroll-triggered animations, parallax effects, interactive data visualisations, 3D elements, micro-interactions — if you've seen it on a site you admire, we can build it for yours. And we'll make it run smoothly on every device.",
      },
      {
        icon: Bot,
        title: 'Ongoing AI automation',
        desc: "AI isn't a one-time add-on here. We build intelligent systems that grow with your business — automated customer support, smart content generation, predictive analytics, workflow automation, and whatever else your business needs.",
      },
      {
        icon: BarChart3,
        title: 'Monthly SEO reporting',
        desc: "We don't just build and walk away. Every month you get a clear report showing how your site ranks, where traffic comes from, what keywords are growing, and what we recommend next.",
      },
      {
        icon: ShieldCheck,
        title: 'Priority support & dedicated contact',
        desc: "You get a dedicated point of contact who knows your project inside and out. Priority response times, proactive recommendations, and ongoing optimisation — not a generic support ticket system.",
      },
    ],
    possibilities: [
      'Custom web applications with user accounts and dashboards',
      'Interactive data visualisations and real-time displays',
      'Complex booking and scheduling systems',
      'Multi-vendor marketplaces',
      'AI-powered recommendation engines',
      'Custom CRM and internal tools',
      'Animated landing pages that tell a story',
      'Anything you\'ve seen on another site — and things you haven\'t',
    ],
    outcome: "You don't get a website — you get exactly what your business needs, built from the ground up. No compromises, no \"that's not possible with our platform.\" If you can describe it, we can build it.",
  },
]

export default function PackagesPage() {
  const { hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100)
      }
    }
  }, [hash])

  return (
    <>
      <Helmet>
        <title>Packages — What You Get at Every Tier | Onrai Studio</title>
        <meta name="description" content="Explore what's included in every Onrai Studio package — from a simple Starter site to fully custom web applications. No templates. Just clean code built around your business." />
        <link rel="canonical" href="https://onraistudio.com/packages" />
        <meta property="og:url" content="https://onraistudio.com/packages" />
        <meta property="og:title" content="Packages — What You Get at Every Tier | Onrai Studio" />
        <meta property="og:description" content="Explore what's included in every Onrai Studio package — from Starter sites to fully custom web applications." />
      </Helmet>

      <main className="packages-page">

        {/* Hero */}
        <section className="pkg__hero">
          <div className="pkg__hero-inner">
            <motion.div
              className="pkg__hero-left"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="pkg__hero-eyebrow">
                <span className="pkg__hero-dot" />
                Packages · In Detail
              </div>
              <h1 className="pkg__hero-heading">
                Know exactly what<br />you're getting.
              </h1>
              <p className="pkg__hero-lead">
                Every package is scoped around your business. Here's what's included at each tier —
                no surprises, no hidden extras.
              </p>
              <div className="pkg__hero-nav">
                {tiers.map(t => (
                  <a key={t.id} href={`#${t.id}`} className="pkg__hero-nav-link" style={{ '--tier-color': t.color }}>
                    <t.icon size={16} strokeWidth={2} />
                    {t.name}
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="pkg__hero-right"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            >
              <div className="pkg__art">
                {/* SVG path connecting the 4 nodes in an S-shape */}
                <svg className="pkg__art-path" viewBox="0 0 280 280" fill="none">
                  <path
                    d="M 42 42 L 238 42 L 238 238 L 42 238 Z"
                    stroke="rgba(255,255,255,0.08)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                  {/* Animated dot traveling the path */}
                  <circle r="4" fill="#0c8c81" filter="url(#glow)">
                    <animateMotion
                      dur="4.5s"
                      repeatCount="indefinite"
                      path="M 42 42 L 238 42 L 238 238 L 42 238 Z"
                    />
                  </circle>
                  <defs>
                    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur stdDeviation="4" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>
                </svg>

                {/* Step 1: Code — top left */}
                <div className="pkg__art-step pkg__art-step--1">
                  <div className="pkg__art-icon">
                    <span className="pkg__art-bracket">&lt;/&gt;</span>
                  </div>
                  <span className="pkg__art-label">Code</span>
                </div>

                {/* Step 2: Build — top right (package box) */}
                <div className="pkg__art-step pkg__art-step--2">
                  <div className="pkg__art-icon pkg__art-icon--box">
                    <div className="pkg__art-box-flap" />
                    <div className="pkg__art-box-body" />
                  </div>
                  <span className="pkg__art-label">Build</span>
                </div>

                {/* Step 3: Deploy — bottom right (globe) */}
                <div className="pkg__art-step pkg__art-step--3">
                  <div className="pkg__art-icon pkg__art-icon--globe">
                    <div className="pkg__art-globe-ring pkg__art-globe-ring--h" />
                    <div className="pkg__art-globe-ring pkg__art-globe-ring--v" />
                    <div className="pkg__art-globe-dot" />
                  </div>
                  <span className="pkg__art-label">Deploy</span>
                </div>

                {/* Step 4: Yours — bottom left (screen) */}
                <div className="pkg__art-step pkg__art-step--4">
                  <div className="pkg__art-icon pkg__art-icon--screen">
                    <div className="pkg__art-screen-bar" />
                    <div className="pkg__art-screen-body">
                      <div className="pkg__art-screen-line" />
                      <div className="pkg__art-screen-line pkg__art-screen-line--short" />
                    </div>
                  </div>
                  <span className="pkg__art-label">Yours</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Tier sections */}
        {tiers.map((tier, ti) => {
          const Icon = tier.icon
          return (
            <section
              key={tier.id}
              id={tier.id}
              className={`pkg__tier ${ti % 2 === 1 ? 'pkg__tier--alt' : ''} ${tier.featured ? 'pkg__tier--featured' : ''}`}
            >
              <div className="pkg__tier-inner">

                {/* Header */}
                <motion.div
                  className="pkg__tier-header"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="pkg__tier-icon" style={{ background: `${tier.color}18`, color: tier.color }}>
                    <Icon size={28} strokeWidth={1.75} />
                  </div>
                  <div className="pkg__tier-meta">
                    <span className="pkg__tier-eyebrow" style={{ color: tier.color }}>{tier.tagline}</span>
                    <h2 className="pkg__tier-name">{tier.name}</h2>
                    <span className="pkg__tier-pricing">{tier.pricingModel}</span>
                  </div>
                </motion.div>

                <motion.div
                  className="pkg__tier-intro"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <h3 className="pkg__tier-headline">{tier.headline}</h3>
                  <p className="pkg__tier-lead">{tier.lead}</p>
                  <p className="pkg__tier-who"><strong>Who it's for:</strong> {tier.whoFor}</p>
                </motion.div>

                {/* Features grid */}
                <div className="pkg__features-grid">
                  {tier.features.map((f, i) => {
                    const FIcon = f.icon
                    return (
                      <motion.div
                        key={f.title}
                        className="pkg__feature-card"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.07 }}
                      >
                        <div className="pkg__feature-icon" style={{ background: `${tier.color}14`, color: tier.color }}>
                          <FIcon size={20} strokeWidth={1.75} />
                        </div>
                        <h4 className="pkg__feature-title">{f.title}</h4>
                        <p className="pkg__feature-desc">{f.desc}</p>
                      </motion.div>
                    )
                  })}
                </div>

                {/* Growth: dashboard capabilities */}
                {tier.dashboardCapabilities && (
                  <motion.div
                    className="pkg__dashboard-block"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                  >
                    <h4 className="pkg__dashboard-heading">What your dashboard can do</h4>
                    <p className="pkg__dashboard-sub">Every dashboard is built around your business. Here are some of the things you'll be able to manage:</p>
                    <ul className="pkg__dashboard-list">
                      {tier.dashboardCapabilities.map(cap => (
                        <li key={cap} className="pkg__dashboard-item">
                          <Check size={16} strokeWidth={2.5} className="pkg__dashboard-check" />
                          {cap}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}

                {/* eCommerce: platforms */}
                {tier.platforms && (
                  <motion.div
                    className="pkg__platforms-block"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                  >
                    <h4 className="pkg__platforms-heading">Platforms we connect to</h4>
                    <div className="pkg__platforms-grid">
                      {tier.platforms.map(p => (
                        <div key={p.name} className="pkg__platform-card">
                          <Store size={20} strokeWidth={1.75} className="pkg__platform-icon" />
                          <h5 className="pkg__platform-name">{p.name}</h5>
                          <p className="pkg__platform-desc">{p.desc}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Full Custom: possibilities */}
                {tier.possibilities && (
                  <motion.div
                    className="pkg__possibilities-block"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                  >
                    <h4 className="pkg__possibilities-heading">The kind of things we build</h4>
                    <p className="pkg__possibilities-sub">This isn't a checklist — it's a starting point. If you can describe it, we can build it.</p>
                    <div className="pkg__possibilities-grid">
                      {tier.possibilities.map(p => (
                        <div key={p} className="pkg__possibility-item">
                          <Sparkles size={14} strokeWidth={2} className="pkg__possibility-icon" />
                          <span>{p}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Outcome + CTA */}
                <motion.div
                  className="pkg__tier-outcome"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <p className="pkg__outcome-text">{tier.outcome}</p>
                  <Link to="/contact" className="pkg__tier-cta" style={{ '--tier-color': tier.color }}>
                    {tier.id === 'full-custom' ? "Let's talk about your idea" : 'Get a quote for ' + tier.name} <ArrowRight size={16} />
                  </Link>
                </motion.div>

              </div>
            </section>
          )
        })}

        {/* Comparison callout */}
        <section className="pkg__compare">
          <div className="pkg__compare-inner">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="pkg__compare-heading">Not sure which package fits?</h2>
              <p className="pkg__compare-sub">
                Every project is different. Tell us what you need and we'll recommend the right package — or build something in between.
              </p>
              <Link to="/contact" className="pkg__compare-cta">
                Talk to us <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </section>

        <Contact />
      </main>
    </>
  )
}
