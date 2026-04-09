import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import Contact from '../components/Contact'
import './TheClimbPage.css'

function IndexCheckWidget({ placeholder, buttonLabel }) {
  const [value, setValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const raw = value.trim()
    if (!raw) return
    const clean = raw
      .replace(/^https?:\/\//i, '')
      .replace(/^www\./i, '')
      .split('/')[0]
    window.open(
      `https://www.google.com/search?q=site:${encodeURIComponent(clean)}`,
      '_blank',
      'noopener,noreferrer'
    )
  }

  return (
    <form className="climb-entry__tool" onSubmit={handleSubmit}>
      <label className="climb-entry__tool-label" htmlFor="climb-indexcheck-input">
        Am I indexed?
      </label>
      <div className="climb-entry__tool-row">
        <div className="climb-entry__tool-field">
          <span className="climb-entry__tool-prefix">site:</span>
          <input
            id="climb-indexcheck-input"
            type="text"
            className="climb-entry__tool-input"
            placeholder={placeholder}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            autoComplete="off"
            spellCheck="false"
          />
        </div>
        <button type="submit" className="climb-entry__tool-button">
          {buttonLabel}
        </button>
      </div>
      <p className="climb-entry__tool-hint">
        Opens Google in a new tab with the search pre-filled. If you see pages, you're indexed.
        If Google says "no results", you're not — yet.
      </p>
    </form>
  )
}

const entries = [
  {
    id: 1,
    step: 1,
    title: 'Getting on Google in the First Place',
    summary: `The single most common problem new businesses face: you Google your own name and nothing comes up. Not a bad ranking — literally nothing. Before you can rank, Google has to know you exist.`,
    sections: [
      {
        type: 'text',
        heading: 'Why this matters',
        body: `When you build a new website, it sits invisible until Google "finds" it. This can take weeks or months on its own. Most small business owners assume that because their site is live, Google will find it — but that's not how it works. You have to actually tell Google. The good news: the whole process takes one afternoon, and once it's done, your business name will start showing up in search.`,
      },
      {
        type: 'steps',
        heading: 'The steps we took',
        items: [
          {
            title: 'Pick a business name Google can recognise',
            description: `Choose something distinct. We went with "Onrai" because it's unusual enough that Google has nothing to confuse it with. If you name your shop "Blue Studio", you'll spend years fighting thousands of other Blue Studios for attention. Unique name = instant advantage.`,
            difficulty: 'easy',
            time: '~10 min',
          },
          {
            title: 'Buy your own domain name',
            description: `If your URL still looks like "my-app-v3.up.railway.app" or "yoursite.vercel.app", you're telling both customers and Google that you're not a real business. Buy a proper domain from a registrar (Namecheap, Cloudflare, or GoDaddy). It costs about $15 a year. Pick ".com.au" if you serve Australia, ".com" otherwise.`,
            difficulty: 'easy',
            time: '~15 min',
          },
          {
            title: 'Point your new domain at your website',
            description: `This is the DNS step — you copy a few values from your hosting provider (Railway in our case) into your domain registrar's settings. Once it kicks in (usually minutes, sometimes a few hours), typing yourdomain.com loads your site instead of the ugly default URL. Every hosting provider has a step-by-step guide for this.`,
            difficulty: 'medium',
            time: '~20 min',
          },
          {
            title: 'Tell Google your site exists',
            description: `Go to Google Search Console, add your domain, verify ownership using the DNS method (most reliable), then paste your homepage URL into the bar at the top and click "Request Indexing". This is the most important step of the lot — it can get you indexed in hours instead of months.`,
            difficulty: 'medium',
            time: '~15 min',
          },
        ],
      },
      {
        type: 'tool',
        heading: 'Check if you\'re indexed right now',
        body: `Want to know if Google has found your site yet? Type your domain below and hit the button. It'll run a "site:" search — a special query that only returns pages Google knows about on that domain. It's the fastest way to tell if you exist in Google's eyes.`,
        placeholder: 'yourdomain.com',
        buttonLabel: 'Check on Google',
      },
      {
        type: 'text',
        heading: 'What changes after this',
        body: `Once Google has indexed your site, your business name will start appearing in search results. This is the absolute floor of SEO — the bare minimum for being findable. From here on, every step is about getting Google to trust you, understand you, and recommend you over competitors. Without this step, nothing else matters.`,
      },
      {
        type: 'next',
        heading: 'Next on the climb',
        items: [
          `In the next step, we tackle the "Did you mean?" problem — when Google finds your site but still thinks your brand name is a typo for something else.`,
          `Set a reminder to come back in a few days and run the indexing check again — it can take anywhere from a few hours to a week.`,
          `If nothing shows up after a week, double-check that Search Console shows your sitemap as "Success" and that your homepage isn't accidentally set to "noindex".`,
        ],
      },
    ],
  },
  {
    id: 2,
    step: 2,
    title: 'Getting Google to Recognise Your Brand',
    summary: `When Google doesn't trust your brand name, it shows a "Did you mean?" suggestion and sends people to your competitors. Here's how we told Google, in no uncertain terms, who we are.`,
    sections: [
      {
        type: 'text',
        heading: 'Why this matters',
        body: `Imagine a customer types your business name into Google and sees "Did you mean: [some other brand]?" right at the top. That tiny line costs real clicks. It plants doubt. It sends people who were looking for you to someone else. Until Google is confident your brand is a real business, you're leaking customers — even when you rank #1.`,
      },
      {
        type: 'baseline',
        heading: 'Where we are today',
        body: `This is what Google currently shows when someone searches "Onrai Studio". Good news: we're the #1 result. Bad news: Google still thinks the name might be a typo for "Sonrai Studio" and says so at the top of the page. That's the gap we're closing in this step.`,
        image: '/images/google-onrai-studio-baseline.png',
        alt: 'Google search results for "Onrai Studio" showing onraistudio.com as the #1 result, but with a "Did you mean: Sonrai Studio" suggestion above it.',
        caption: 'Google search for "Onrai Studio" — our starting point',
      },
      {
        type: 'steps',
        heading: 'The steps we took',
        items: [
          {
            title: 'Spell your brand name the same way everywhere',
            description: `Go through your website and check that your business name is written identically in every single place — header, footer, page titles, about page, contact page. One "Onrai studio" with a lowercase "s" can confuse Google. Consistency is the cheapest SEO win there is.`,
            difficulty: 'easy',
            time: '~15 min',
          },
          {
            title: `Add a "business card" to your site that Google can read`,
            description: `There's a hidden piece of code you can add to your homepage that tells Google exactly what your business is, where it's based, and how to contact you. It's called structured data, and Google reads it like a digital business card. We added one that lists our name, logo, location, email, and founder.`,
            difficulty: 'medium',
            time: '~30 min',
          },
          {
            title: 'Tell Google where you operate and who runs the show',
            description: `Inside that business card, we listed the city, state, and country we serve, plus the founder's name. This gives Google a human and a location to attach the brand to — which is a huge trust signal when it's deciding whether you're a real business or a random word.`,
            difficulty: 'medium',
            time: '~20 min',
          },
          {
            title: `Check your work with Google's free testing tool`,
            description: `Google has a free tool called the Rich Results Test that reads your business card and tells you if anything is broken. Paste your URL in, wait a few seconds, and you'll see green ticks (or a list of fixes). We ran ours and everything passed.`,
            difficulty: 'easy',
            time: '~5 min',
          },
        ],
      },
      {
        type: 'text',
        heading: 'What changes after this',
        body: `Over the coming weeks, as Google re-crawls the site, the "Did you mean: Sonrai Studio" suggestion should start to fade and eventually disappear. Google will treat Onrai Studio as a real business entity, not a typo. That's a prerequisite for everything else — knowledge panels, map listings, being cited by AI models. You can't skip this step.`,
      },
      {
        type: 'next',
        heading: 'Next on the climb',
        items: [
          `Create social profiles (LinkedIn, Instagram, Facebook) and link them back to the site — Google uses these as extra proof you're a real business.`,
          `Set up a Google Business Profile so we can show up on Google Maps and get a proper knowledge panel.`,
          `Come back in a few weeks and re-run the search to see if the "Did you mean?" suggestion is gone.`,
        ],
      },
    ],
  },
]

export default function TheClimbPage() {
  return (
    <>
      <Helmet>
        <title>The Climb — 0 to Found Everywhere | Onrai Studio</title>
        <meta name="description" content="A live log of how Onrai Studio goes from invisible to found everywhere — page one on Google, cited by AI models like ChatGPT and Perplexity. Every decision documented as it happens." />
        <link rel="canonical" href="https://onraistudio.com/the-climb" />
        <meta property="og:url" content="https://onraistudio.com/the-climb" />
        <meta property="og:title" content="The Climb — 0 to Found Everywhere | Onrai Studio" />
        <meta property="og:description" content="A live log of how Onrai Studio goes from invisible to found everywhere — page one on Google, cited by AI models like ChatGPT and Perplexity. Every decision documented as it happens." />
      </Helmet>

      <main className="climb-page">
        <section className="climb-page__hero">
          <div className="climb-page__hero-inner">
            <motion.div
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
                A live log of how we go from invisible to found everywhere — page one on Google,
                and cited by AI models like ChatGPT, Claude, and Perplexity when someone asks
                who to call for a website in Australia.
              </p>
              <div className="climb-page__pills">
                <span className="climb-page__pill">0 → Found Everywhere</span>
                <span className="climb-page__pill">Google SEO</span>
                <span className="climb-page__pill">AI Visibility</span>
                <span className="climb-page__pill">Brand Building</span>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="climb-page__entries">
          <div className="climb-page__entries-inner">
            {entries.map((entry, i) => (
              <motion.article
                key={entry.id}
                className="climb-entry"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="climb-entry__meta">
                  <span className="climb-entry__step-label">
                    Step {String(entry.step).padStart(2, '0')}
                  </span>
                </div>
                <h2 className="climb-entry__title">{entry.title}</h2>
                <p className="climb-entry__summary">{entry.summary}</p>

                <div className="climb-entry__sections">
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
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <Contact />
      </main>
    </>
  )
}
