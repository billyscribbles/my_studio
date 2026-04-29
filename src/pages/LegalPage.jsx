import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { PRIVACY, TERMS, AGREEMENT } from '../data/legal'
import './LegalPage.css'

const META = {
  privacy: {
    title: 'Privacy Policy — Onrai Studio',
    description: 'How Onrai Studio collects, uses, and protects your personal information. Compliant with the Australian Privacy Principles and the Privacy Act 1988 (Cth).',
    path: '/privacy',
    eyebrow: 'Legal · Privacy',
  },
  terms: {
    title: 'Terms of Service — Onrai Studio',
    description: 'The terms governing engagements with Onrai Studio for web design, development, and related services. Governed by the laws of Australia.',
    path: '/terms',
    eyebrow: 'Legal · Terms',
  },
  agreement: {
    title: 'Service Agreement — Onrai Studio',
    description: 'The plain-English service agreement for working with Onrai Studio. Scope, subscription terms, ownership, cancellation, and what we do (and don\'t) include — all before you sign on.',
    path: '/agreement',
    eyebrow: 'Legal · Service Agreement',
  },
}

function renderParagraph(para, i) {
  const html = para
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\n/g, '<br/>')
  return <p key={i} dangerouslySetInnerHTML={{ __html: html }} />
}

export default function LegalPage({ type }) {
  const doc = type === 'privacy' ? PRIVACY : type === 'agreement' ? AGREEMENT : TERMS
  const meta = META[type]
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
    <main className="legal-page">
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <link rel="canonical" href={`https://onraistudio.com${meta.path}`} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:url" content={`https://onraistudio.com${meta.path}`} />
      </Helmet>

      <section className="legal-page__hero">
        <div className="legal-page__hero-inner">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="legal-page__eyebrow">{meta.eyebrow}</p>
            <h1 className="legal-page__title">{doc.title}</h1>
            <p className="legal-page__updated">Last updated: {doc.updated}</p>
          </motion.div>
        </div>
      </section>

      <section className="legal-page__section">
        <article className="legal-page__article">
          {doc.content.map((section) => (
            <div key={section.heading} className="legal-page__block">
              <h2 id={section.slug} className="legal-page__heading">{section.heading}</h2>
              <div className="legal-page__body">
                {section.body.split('\n\n').map(renderParagraph)}
              </div>
            </div>
          ))}
        </article>
      </section>
    </main>
  )
}
