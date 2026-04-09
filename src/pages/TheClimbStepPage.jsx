import { Helmet } from 'react-helmet-async'
import { Link, Navigate, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import Contact from '../components/Contact'
import IndexCheckWidget from '../components/IndexCheckWidget'
import {
  chapters,
  entries,
  getEntryBySlug,
  getEntryNeighbors,
} from '../data/climbEntries'
import './TheClimbPage.css'

export default function TheClimbStepPage() {
  const { slug } = useParams()
  const entry = getEntryBySlug(slug)

  if (!entry) {
    return <Navigate to="/the-climb" replace />
  }

  const { prev, next } = getEntryNeighbors(slug)
  const chapter = chapters.find((c) => c.id === entry.chapter)
  const stepLabel = String(entry.step).padStart(2, '0')
  const totalSteps = entries.length

  return (
    <>
      <Helmet>
        <title>{`Step ${stepLabel} — ${entry.title} | The Climb | Onrai Studio`}</title>
        <meta name="description" content={entry.summary} />
        <link
          rel="canonical"
          href={`https://onraistudio.com/the-climb/${entry.slug}`}
        />
        <meta
          property="og:url"
          content={`https://onraistudio.com/the-climb/${entry.slug}`}
        />
        <meta
          property="og:title"
          content={`${entry.title} | The Climb | Onrai Studio`}
        />
        <meta property="og:description" content={entry.summary} />
      </Helmet>

      <main className="climb-step">
        <section className="climb-step__hero">
          <div className="climb-step__hero-inner">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link to="/the-climb" className="climb-step__breadcrumb">
                <span aria-hidden="true">←</span> Back to The Climb
              </Link>
              <div className="climb-step__progress">
                <span className="climb-step__chapter-tag">
                  {chapter?.title ?? 'The Climb'}
                </span>
                <span className="climb-step__progress-sep" aria-hidden="true">•</span>
                <span className="climb-step__progress-text">
                  Step {stepLabel} of {String(totalSteps).padStart(2, '0')}
                </span>
              </div>
              <h1 className="climb-step__title">{entry.title}</h1>
              <p className="climb-step__lead">{entry.summary}</p>
            </motion.div>
          </div>
        </section>

        <section className="climb-step__body">
          <div className="climb-step__body-inner">
            <motion.div
              className="climb-entry__sections climb-step__sections"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              {entry.sections.map((section, j) => (
                <div key={j} className="climb-entry__section">
                  <h3 className="climb-entry__section-heading">{section.heading}</h3>

                  {section.type === 'text' && (
                    <p className="climb-entry__section-body">{section.body}</p>
                  )}

                  {section.type === 'tool' && (
                    <>
                      <p className="climb-entry__section-body">{section.body}</p>
                      <IndexCheckWidget
                        placeholder={section.placeholder}
                        buttonLabel={section.buttonLabel}
                      />
                    </>
                  )}

                  {section.type === 'baseline' && (
                    <>
                      <p className="climb-entry__section-body">{section.body}</p>
                      <figure className="climb-entry__baseline">
                        <img
                          src={section.image}
                          alt={section.alt}
                          loading="lazy"
                          className="climb-entry__baseline-img"
                        />
                        <figcaption className="climb-entry__baseline-caption">
                          {section.caption}
                        </figcaption>
                      </figure>
                    </>
                  )}

                  {section.type === 'steps' && (
                    <ol className="climb-entry__steps">
                      {section.items.map((s, k) => (
                        <li key={k} className="climb-entry__step-item">
                          <div className="climb-entry__step-number">{k + 1}</div>
                          <div className="climb-entry__step-body">
                            <div className="climb-entry__step-head">
                              <h4 className="climb-entry__step-title">{s.title}</h4>
                              <div className="climb-entry__step-meta">
                                <span
                                  className={`climb-entry__difficulty climb-entry__difficulty--${s.difficulty}`}
                                >
                                  {s.difficulty}
                                </span>
                                {s.time && (
                                  <span className="climb-entry__step-time">{s.time}</span>
                                )}
                              </div>
                            </div>
                            <p className="climb-entry__step-desc">{s.description}</p>
                          </div>
                        </li>
                      ))}
                    </ol>
                  )}

                  {section.type === 'next' && (
                    <ul className="climb-entry__next-steps">
                      {section.items.map((item, k) => (
                        <li key={k} className="climb-entry__next-step">
                          <span className="climb-entry__next-step-icon">→</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </motion.div>

            <nav className="climb-nav" aria-label="Step navigation">
              {prev ? (
                <Link
                  to={`/the-climb/${prev.slug}`}
                  className="climb-nav__link climb-nav__link--prev"
                >
                  <span className="climb-nav__direction">
                    <span aria-hidden="true">←</span> Previous step
                  </span>
                  <span className="climb-nav__label">
                    Step {String(prev.step).padStart(2, '0')} — {prev.title}
                  </span>
                </Link>
              ) : (
                <div className="climb-nav__placeholder" aria-hidden="true" />
              )}

              {next ? (
                <Link
                  to={`/the-climb/${next.slug}`}
                  className="climb-nav__link climb-nav__link--next"
                >
                  <span className="climb-nav__direction">
                    Next step <span aria-hidden="true">→</span>
                  </span>
                  <span className="climb-nav__label">
                    Step {String(next.step).padStart(2, '0')} — {next.title}
                  </span>
                </Link>
              ) : (
                <Link to="/the-climb" className="climb-nav__link climb-nav__link--next">
                  <span className="climb-nav__direction">
                    All steps <span aria-hidden="true">→</span>
                  </span>
                  <span className="climb-nav__label">Back to the trail map</span>
                </Link>
              )}
            </nav>
          </div>
        </section>

        <Contact />
      </main>
    </>
  )
}
