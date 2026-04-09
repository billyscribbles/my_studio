import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Contact from '../components/Contact'
import { chapters, entries, getChapterEntries, getEntryStats } from '../data/climbEntries'
import './TheClimbPage.css'

export default function TheClimbPage() {
  const populatedChapters = chapters
    .map((chapter) => ({ ...chapter, entries: getChapterEntries(chapter.id) }))
    .filter((c) => c.entries.length > 0)

  return (
    <>
      <Helmet>
        <title>The Climb — 0 to Found Everywhere | Onrai Studio</title>
        <meta
          name="description"
          content="A step-by-step climb from invisible to found everywhere — plain-English SEO, brand, and AI visibility steps any small-business owner can follow."
        />
        <link rel="canonical" href="https://onraistudio.com/the-climb" />
        <meta property="og:url" content="https://onraistudio.com/the-climb" />
        <meta property="og:title" content="The Climb — 0 to Found Everywhere | Onrai Studio" />
        <meta
          property="og:description"
          content="A step-by-step climb from invisible to found everywhere — plain-English SEO, brand, and AI visibility steps any small-business owner can follow."
        />
      </Helmet>

      <main className="climb-page">
        <section className="climb-page__hero">
          <div className="climb-page__hero-inner">
            <motion.div
              className="climb-page__hero-copy"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="climb-page__eyebrow">
                <span className="climb-page__eyebrow-dot" />
                Onrai Studio
              </div>
              <h1 className="climb-page__title">The Climb</h1>
              <p className="climb-page__lead">
                A step-by-step guide for small-business owners on how to go from invisible to
                found everywhere — page one on Google, cited by ChatGPT and Perplexity. Each
                step is bite-sized and written in plain English. No jargon, no fluff.
              </p>
              <div className="climb-page__hero-cta">
                {entries[0] && (
                  <Link
                    to={`/the-climb/${entries[0].slug}`}
                    className="climb-page__cta"
                  >
                    Start the climb
                    <span aria-hidden="true"> →</span>
                  </Link>
                )}
                <div className="climb-page__reassurance">
                  <span>Plain English</span>
                  <span className="climb-page__reassurance-dot" aria-hidden="true">•</span>
                  <span>Bite-sized steps</span>
                  <span className="climb-page__reassurance-dot" aria-hidden="true">•</span>
                  <span>No jargon</span>
                  <span className="climb-page__reassurance-dot" aria-hidden="true">•</span>
                  <span>Free</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="climb-page__hero-visual"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              aria-hidden="true"
            >
              <div className="cmp__mock">
                <div className="cmp__mock-bar">
                  <span className="cmp__mock-dot--r" />
                  <span className="cmp__mock-dot--y" />
                  <span className="cmp__mock-dot--g" />
                  <span className="cmp__mock-url" />
                </div>

                <div className="cmp__mock-body">
                  <div className="cmp__mock-search">
                    <span className="cmp__mock-search-icon" />
                    <span className="cmp__mock-search-text" />
                    <span className="cmp__mock-search-clear" />
                  </div>

                  <div className="cmp__mock-tabs">
                    <div className="cmp__mock-tab cmp__mock-tab--active" />
                    <div className="cmp__mock-tab" />
                    <div className="cmp__mock-tab" />
                    <div className="cmp__mock-tab" />
                    <div className="cmp__mock-tab" />
                  </div>

                  <div className="cmp__mock-results">
                    <div className="cmp__mock-result cmp__mock-result--top">
                      <div className="cmp__mock-result-head">
                        <div className="cmp__mock-favicon" />
                        <div className="cmp__mock-result-meta">
                          <div className="cmp__mock-result-site" />
                          <div className="cmp__mock-result-url" />
                        </div>
                        <div className="cmp__mock-rank-badge">
                          <span className="cmp__mock-rank-arrow">↑</span>
                          <span className="cmp__mock-rank-num">#1</span>
                        </div>
                      </div>
                      <div className="cmp__mock-result-title" />
                      <div className="cmp__mock-result-desc" />
                      <div className="cmp__mock-result-desc cmp__mock-result-desc--short" />
                    </div>

                    <div className="cmp__mock-result cmp__mock-result--dim">
                      <div className="cmp__mock-result-head">
                        <div className="cmp__mock-favicon cmp__mock-favicon--dim" />
                        <div className="cmp__mock-result-meta">
                          <div className="cmp__mock-result-site cmp__mock-result-site--dim" />
                          <div className="cmp__mock-result-url cmp__mock-result-url--dim" />
                        </div>
                      </div>
                      <div className="cmp__mock-result-title cmp__mock-result-title--dim" />
                      <div className="cmp__mock-result-desc cmp__mock-result-desc--dim" />
                    </div>

                    <div className="cmp__mock-result cmp__mock-result--dim">
                      <div className="cmp__mock-result-head">
                        <div className="cmp__mock-favicon cmp__mock-favicon--dim" />
                        <div className="cmp__mock-result-meta">
                          <div className="cmp__mock-result-site cmp__mock-result-site--dim" />
                          <div className="cmp__mock-result-url cmp__mock-result-url--dim" />
                        </div>
                      </div>
                      <div className="cmp__mock-result-title cmp__mock-result-title--dim cmp__mock-result-title--short" />
                      <div className="cmp__mock-result-desc cmp__mock-result-desc--dim" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="climb-page__map">
          <div className="climb-page__map-inner">
            {populatedChapters.map((chapter, ci) => (
              <motion.div
                key={chapter.id}
                className="climb-chapter"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: ci * 0.05, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="climb-chapter__header">
                  <div className="climb-chapter__label">
                    Chapter {String(ci + 1).padStart(2, '0')}
                  </div>
                  <h2 className="climb-chapter__title">{chapter.title}</h2>
                  <p className="climb-chapter__subtitle">{chapter.subtitle}</p>
                </div>

                <ol className="climb-chapter__trail">
                  {chapter.entries.map((entry, ei) => {
                    const stats = getEntryStats(entry)
                    return (
                      <motion.li
                        key={entry.id}
                        className="climb-marker"
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-40px' }}
                        transition={{
                          duration: 0.45,
                          delay: ei * 0.08,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      >
                        <div className="climb-marker__node" aria-hidden="true">
                          <span className="climb-marker__number">
                            {String(entry.step).padStart(2, '0')}
                          </span>
                        </div>
                        <Link
                          to={`/the-climb/${entry.slug}`}
                          className="climb-marker__card"
                          aria-label={`Read Step ${String(entry.step).padStart(2, '0')} — ${entry.title}`}
                        >
                          <div className="climb-marker__step-label">
                            Step {String(entry.step).padStart(2, '0')}
                          </div>
                          <h3 className="climb-marker__title">{entry.title}</h3>
                          <p className="climb-marker__summary">{entry.summary}</p>
                          <div className="climb-marker__meta">
                            <span className="climb-marker__stat">
                              <span className="climb-marker__stat-value">{stats.actionCount}</span>
                              <span className="climb-marker__stat-label">actions</span>
                            </span>
                            <div className="climb-marker__difficulties">
                              {stats.difficulties.map((d) => (
                                <span
                                  key={d}
                                  className={`climb-marker__pill climb-marker__pill--${d}`}
                                >
                                  {d}
                                </span>
                              ))}
                            </div>
                          </div>
                          <span className="climb-marker__cta">
                            Read step
                            <span aria-hidden="true"> →</span>
                          </span>
                        </Link>
                      </motion.li>
                    )
                  })}
                </ol>
              </motion.div>
            ))}

            <motion.div
              className="climb-page__more"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="climb-page__more-dot" />
              <div className="climb-page__more-dot" />
              <div className="climb-page__more-dot" />
              <p className="climb-page__more-text">
                More steps in progress. Come back soon — the climb continues.
              </p>
            </motion.div>
          </div>
        </section>

        <Contact />
      </main>
    </>
  )
}
