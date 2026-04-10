// All Climb entries live here. The two pages (/the-climb and
// /the-climb/:slug) read from this single source.
//
// To add a new step:
//   1. Append an entry with a unique `slug` and `step` number.
//   2. Assign it to a `chapter` (create a new chapter above if needed).
//   3. Follow the plain-English style rules in CLAUDE.md → "The Climb — Blog Style Guide".

export const chapters = [
  {
    id: 'foundations',
    title: 'Foundations',
    subtitle:
      'Before Google can send you any traffic, it has to know you exist. Domain, indexing, the basics most businesses skip.',
  },
  {
    id: 'recognition',
    title: 'Recognition',
    subtitle:
      'Making Google — and AI models — confident about who you are, so they stop treating your brand as a typo.',
  },
  {
    id: 'relevance',
    title: 'Relevance',
    subtitle:
      'Google knows you exist and trusts your name. Now we teach it what you actually do, and where you do it — without building ten new pages.',
  },
]

export const entries = [
  {
    id: 1,
    step: 1,
    slug: '01-getting-on-google',
    chapter: 'foundations',
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
        heading: `Check if you're indexed right now`,
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
    slug: '02-brand-recognition',
    chapter: 'recognition',
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
  {
    id: 3,
    step: 3,
    slug: '03-local-relevance',
    chapter: 'relevance',
    title: `Speaking Your City's Language`,
    summary: `This is the step we're working on for our own site right now — and it's a good template for yours. If you want Melbourne customers, Google needs to see Melbourne on the pages, not just in the hidden business card. The fix isn't ten new URLs. It's sharpening the ones you already have.`,
    sections: [
      {
        type: 'text',
        heading: `What we're doing (and why it works for your site too)`,
        body: `This entry is a live walkthrough of what we're doing to Onrai Studio's own site this week. We exist in Google, Google trusts our name — but if someone in Richmond types "melbourne web agency", we're still not in the conversation, because nothing on our actual pages says "Melbourne". The word is hiding in a piece of code (the business card we added last step), and that's not enough. Google reads what a human reads. We're about to fix that on our site, and every move we make is one you can copy onto yours in an afternoon.`,
      },
      {
        type: 'text',
        heading: `What Google means by "relevant"`,
        body: `Relevance is just a fancy word for "matching what people actually typed". Someone searching "web agency" and someone searching "melbourne web agency" want different things, and Google picks different sites for each. When a page is generic — "we build websites" — it only shows up for the generic search, where it competes with the entire world. Add one word, "Melbourne", in the right places, and the same page starts competing only with the Melbourne web agencies. That's a fight a small business can actually win. It's the fight we're picking for ourselves here, and the exact one your site should be picking too.`,
      },
      {
        type: 'text',
        heading: `The pages we already have (and so do you)`,
        body: `Here's a trick a lot of SEO advice skips: before you build new pages, list the ones you already have. Ours are Home, About, Services, Portfolio, AI, Contact, and The Climb. Seven pages. That's enough. Your site probably has a similar handful. The temptation is to chase every keyword with a new URL — "Melbourne Web Design", "Melbourne AI Chatbots", "Melbourne SEO" — but on a small site that just creates ten thin pages Google ignores. One strong page with the right words beats ten weak copies. So instead of multiplying, we're sharpening what's already there. Walk through the same list on your own site as you read this — every page you've got is a page we're about to show you how to fix.`,
      },
      {
        type: 'steps',
        heading: `The edits we're making to our site (do the same on yours)`,
        items: [
          {
            title: 'Home — put the city in the hero',
            description: `The homepage is the one page Google looks at hardest. Our headline today says "Your Business, Found Online" — nice, but it could belong to any agency on Earth. We're adding "Melbourne" in three visible places: the eyebrow row ("Melbourne · Australia"), the lead sentence under the headline, and the <title> tag (which becomes "Melbourne Web Design — Onrai Studio"). On your site, do the same thing with your own city. You're not rewriting the page — you're adding one city name in three spots.`,
            difficulty: 'easy',
            time: '~10 min',
          },
          {
            title: 'Services — localise the promise',
            description: `Our services page headline says "Everything your business needs to grow online." We're changing it to "Everything your Melbourne business needs to grow online." That's it. One word. Same promise, but now it's pointed at a specific audience, and Google treats the page completely differently when someone searches for "Melbourne" + any service. Make the same one-word edit on your own services page — drop your city in front of "business".`,
            difficulty: 'easy',
            time: '~5 min',
          },
          {
            title: `AI — swap "Australian" for the city name`,
            description: `Our AI page currently says "AI Features — Smarter Websites for Australian Businesses". That's broad. We're swapping in "Melbourne" (we'll keep "& Australian" to signal range). The same move applies to your own site: wherever you've written "Australian" or the name of your country, try the city instead. "Australian" is a country; "Melbourne" is a customer. Google can tell the difference.`,
            difficulty: 'easy',
            time: '~5 min',
          },
          {
            title: 'Contact — name the city in the hero and the meta',
            description: `We're leaving our headline ("Let's build something together") alone — it's friendly. Underneath, we're adding one line: "Based in Melbourne. Working with businesses across Australia." We're also fixing the meta description — it currently says "AU-based", which nobody types into Google. We're changing it to "Melbourne-based". On your contact page, do both: add a location line under the headline, and make sure the meta description names the city. The contact page is where local intent closes; name the city.`,
            difficulty: 'easy',
            time: '~5 min',
          },
          {
            title: 'Portfolio — fix the meta description',
            description: `Our portfolio page doesn't mention Melbourne at all in its meta description — it just says "Australian businesses". We're leaving the hero copy alone; the meta alone is a surprisingly cheap win. We're changing "Australian businesses" to "Melbourne and Australian businesses". Go check your portfolio page's meta description right now — if it's missing your city, that's a three-minute fix you can do before finishing this article.`,
            difficulty: 'easy',
            time: '~3 min',
          },
          {
            title: `Audit every <title> tag for the city name`,
            description: `Finally, we're walking every page's <title> tag one by one and making sure each one includes "Melbourne" or "Onrai Studio" (ideally both). Google compares what your pages say about themselves, and if five titles mention the city and two don't, those two look like stragglers. Do the same sweep on your site: open every page, look at the browser tab, and ask "does this title tell Google who I am and where I am?" Consistency is the whole game — a tidy set of titles is a trust signal, a messy set is a leak.`,
            difficulty: 'medium',
            time: '~15 min',
          },
        ],
      },
      {
        type: 'text',
        heading: 'What changes after this',
        body: `None of these edits touch the design. None of them add pages. None of them change what the business does. They just tell Google the thing that was already true: we're a Melbourne business serving Melbourne customers — and, once you've done the same, so are you. Over the next couple of weeks, as Google re-crawls the site, we expect to start showing up for searches that include a city name. That's the part that actually converts. And the whole job takes about an hour, with no new URLs for Google to evaluate and no new content to maintain. When you copy this onto your own site, expect the same result on the same timeline.`,
      },
      {
        type: 'next',
        heading: 'Next on the climb',
        items: [
          `Set up a Google Business Profile — the single biggest local ranking lever, and it pairs with everything we just did.`,
          `Come back in two weeks and search "melbourne web agency" from an incognito window. Note where you land. That's your new baseline.`,
          `Only once the existing pages are doing their job should you consider adding dedicated landing pages — and then only for services where the search demand actually justifies it.`,
        ],
      },
    ],
  },
]

export function getEntryBySlug(slug) {
  return entries.find((e) => e.slug === slug) ?? null
}

export function getEntryNeighbors(slug) {
  const idx = entries.findIndex((e) => e.slug === slug)
  if (idx === -1) return { prev: null, next: null }
  return {
    prev: idx > 0 ? entries[idx - 1] : null,
    next: idx < entries.length - 1 ? entries[idx + 1] : null,
  }
}

export function getEntryStats(entry) {
  const stepsSection = entry.sections.find((s) => s.type === 'steps')
  const items = stepsSection?.items ?? []
  return {
    actionCount: items.length,
    difficulties: [...new Set(items.map((i) => i.difficulty))],
  }
}

export function getChapterEntries(chapterId) {
  return entries.filter((e) => e.chapter === chapterId)
}
