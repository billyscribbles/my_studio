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
            description: `The homepage is the one page Google looks at hardest. Our headline today says "Your Business, Found Online" — nice, but it could belong to any agency on Earth. We added "Melbourne" in three visible places: the eyebrow row above the headline, the lead sentence under it, and the <title> tag in the browser bar. We didn't rewrite the page — we just dropped one city name into three spots. Here's the actual edit we shipped:`,
            difficulty: 'easy',
            time: '~10 min',
            example: {
              before: 'AI-Powered Web Studio · Australia',
              after: 'AI-Powered Web Studio · Melbourne · Australia',
            },
          },
          {
            title: 'Services — localise the promise',
            description: `Our services page headline used to say "Everything your business needs to grow online." We changed it to "Everything your Melbourne business needs to grow online." That's it. One word. Same promise, but now it's pointed at a specific audience, and Google treats the page completely differently when someone searches for "Melbourne" + any service. Make the same one-word edit on your own services page — drop your city in front of "business":`,
            difficulty: 'easy',
            time: '~5 min',
            example: {
              before: 'Everything your business needs to grow online.',
              after: 'Everything your Melbourne business needs to grow online.',
            },
          },
          {
            title: `AI — swap "Australian" for the city name`,
            description: `Our AI page used to say "AI Features — Smarter Websites for Australian Businesses". That's broad. We swapped in "Melbourne" and kept "& Australian" to signal range. Wherever your own site says "Australian" — or the name of your country — try the city instead. "Australian" is a country; "Melbourne" is a customer. Google can tell the difference. Here's our actual title-tag edit:`,
            difficulty: 'easy',
            time: '~5 min',
            example: {
              before: 'AI Features — Smarter Websites for Australian Businesses',
              after: 'AI Features — Smarter Websites for Melbourne & Australian Businesses',
            },
          },
          {
            title: 'Contact — name the city in the hero and the meta',
            description: `We left our headline ("Let's build something together") alone — it's friendly. Underneath, we added one line: "Based in Melbourne. Working with businesses across Australia." We also fixed the meta description — it used to say "AU-based", which nobody types into Google. Now it says "Melbourne-based". On your own contact page, do both: add a location line under the headline, and make sure the meta description names the city. Here's the meta-description fix:`,
            difficulty: 'easy',
            time: '~5 min',
            example: {
              before: 'AU-based web design studio specialising in local business websites.',
              after: 'Melbourne-based web design studio specialising in local business websites.',
            },
          },
          {
            title: 'Portfolio — fix the meta description',
            description: `Our portfolio page didn't mention Melbourne at all in its meta description — it just said "Australian businesses". We left the hero copy alone; the meta alone is a surprisingly cheap win. We changed "Australian businesses" to "Melbourne and Australian businesses". Go check your own portfolio page's meta description right now — if it's missing your city, that's a three-minute fix:`,
            difficulty: 'easy',
            time: '~3 min',
            example: {
              before: 'Browse our portfolio of websites built for local and small Australian businesses.',
              after: 'Browse our portfolio of websites built for Melbourne and Australian small businesses.',
            },
          },
          {
            title: `Audit every <title> tag for the city name`,
            description: `Finally, we walked every page's <title> tag one by one and made sure each one includes "Melbourne" and "Onrai Studio". Google compares what your pages say about themselves, and if five titles mention the city and two don't, those two look like stragglers. Do the same sweep on your site: open every page, look at the browser tab, and ask "does this title tell Google who I am and where I am?" Here's the homepage title we shipped:`,
            difficulty: 'medium',
            time: '~15 min',
            example: {
              before: 'Onrai Studio — Web Design & Development for Local Businesses in Australia',
              after: 'Melbourne Web Design & Development — Onrai Studio',
            },
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
  {
    id: 4,
    step: 4,
    slug: '04-location-signals-done-right',
    chapter: 'relevance',
    title: 'Putting Your City in the Right Places (Without Overdoing It)',
    summary: `Step 03 got the city into your page copy. This step is the other half: the placements Google actually weights — title tags, footer, your business card, testimonials, case studies — and the line you shouldn't cross. Cramming "Melbourne" into every sentence will cost you ranking, not win it.`,
    sections: [
      {
        type: 'text',
        heading: 'Why this matters',
        body: `Last step we taught you to drop the city name into your page copy. Good start — but Google reads some places harder than body text. The browser-tab title, the footer that sits on every page, the hidden business card we built in Step 02, the names on your testimonials, the locations of the clients in your portfolio. Miss those and the copy work from Step 03 under-delivers. Worse, there's a ceiling: Google explicitly says cramming the same word in over and over makes pages rank lower, not higher. So before you go any further, you need to know where the city actually counts — and where to stop.`,
      },
      {
        type: 'text',
        heading: 'The rule: meaningful places, not every place',
        body: `Here's the pattern. Your homepage talks about your brand and your city at a high level — once or twice, in places a human would actually read. Your service pages pair the service with the city — "Melbourne web design", not "web design (Melbourne) for Melbourne businesses by a Melbourne studio in Melbourne". Your blog posts and case studies prove it with real local examples and real local names. That's it. Three layers, each carrying the city once or twice in the spots Google trusts. Anything more than that and you cross the line into stuffing — and Google's own help docs come right out and say stuffing hurts rankings. Less is more here, and "more" is genuinely worse.`,
      },
      {
        type: 'steps',
        heading: 'The seven placements worth checking',
        items: [
          {
            title: 'The browser-tab title on every page',
            description: `Open every page on your site and look at the browser tab. That little bit of text is your <title> tag, and it's the single strongest on-page signal Google uses. Each page should mention the city once, naturally — not five times. If even one page is missing it, that page is the weak link. Walk the list: home, services, about, portfolio, contact. Fix the gaps. Don't get cute — short and clear beats clever every time.`,
            difficulty: 'easy',
            time: '~5 min',
            example: {
              before: 'Onrai Studio — Web Design & Development for Local Businesses in Australia',
              after: 'Melbourne Web Design & Development — Onrai Studio',
            },
          },
          {
            title: 'One headline per page (not every headline)',
            description: `Pick the main headline on each page — usually the big one at the top — and ask whether the city would fit naturally. If it would, add it. If forcing it makes the sentence clunky, leave it alone. The goal isn't to wedge "Melbourne" into every H1 and H2; the goal is one strong, honest mention per page. Friendly headlines like "Let's build something together" don't need a city — that's what the line underneath is for.`,
            difficulty: 'easy',
            time: '~10 min',
          },
          {
            title: 'Your contact page deserves a real address line',
            description: `On your contact page, under the friendly headline, add one short line that names your city and the area you serve. This is the most natural place on your whole site to be specific, because anyone visiting that page is already thinking about whether you're nearby. Don't overthink it — one sentence is plenty. While you're there, check your contact-page meta description in the page source. If it still says "AU-based" or "Australian", swap in the city name.`,
            difficulty: 'easy',
            time: '~5 min',
            example: {
              before: 'AU-based web design studio specialising in local business websites.',
              after: 'Melbourne-based web design studio specialising in local business websites.',
            },
          },
          {
            title: 'The footer that sits on every page',
            description: `The footer is special: it appears on every single page of your site, which means one mention of the city down there does more work than ten in body copy. If your footer currently says something vague like "AU-based" or just shows a country flag, that's a free win waiting to happen. Add the city. One line. Don't repeat it twice in the same footer — once is enough, and twice tips you back toward stuffing.`,
            difficulty: 'easy',
            time: '~3 min',
            example: {
              before: '🇦🇺 AU Based Studio',
              after: '🇦🇺 Melbourne, Australia',
            },
          },
          {
            title: 'The hidden business card (your schema)',
            description: `Remember the business card we added back in Step 02 — that piece of code that tells Google your name, location, and contact details? Open it up and check that the city, state, and country are all named explicitly, and that the "areas you serve" list mentions the city by name as well. Most templates leave this generic. A two-minute edit here gives Google a strong, structured signal that lives outside the noise of body copy.`,
            difficulty: 'medium',
            time: '~15 min',
          },
          {
            title: 'A local testimonial in the first slot',
            description: `Look at the testimonials on your homepage. Is the first one a customer from your city? If not, reorder them so the local one comes first. People scan testimonials top to bottom and stop early — and Google reads the names and locations as additional proof. Don't make up fake quotes to inflate the count, and don't relabel out-of-town clients as local. A genuine mix that leads with a local name is honest and effective.`,
            difficulty: 'easy',
            time: '~10 min',
          },
          {
            title: 'Tag your portfolio projects with where the client was based',
            description: `Walk through your portfolio or case-studies page and add a small location tag next to each project — "Melbourne", "Sydney", "Brisbane", "Remote". Two reasons. First, readers scan for "people like me" and a local tag stops them in their tracks. Second, Google reads the page and sees a cluster of local clients, which is one of the strongest local-relevance signals you can give it. If most of your work is local, this turns your portfolio into a local-proof page for free.`,
            difficulty: 'medium',
            time: '~15 min',
          },
        ],
      },
      {
        type: 'text',
        heading: `The thing you don't do`,
        body: `Now the part most SEO advice skips. Don't stuff. Don't write "Melbourne web design for Melbourne businesses by a Melbourne team in Melbourne" — Google's own guidelines call that out by name and rank pages lower for it. Don't buy a domain like melbourne-web-design-melbourne.com.au expecting it to rank: Google has said for years that exact-match domains barely move the needle. Don't make a separate page for every suburb you serve unless each one has genuinely different content — ten thin "Richmond / Fitzroy / Carlton / Brunswick" pages will get treated as duplicates and ignored. The whole point of Step 03 and Step 04 together is this: a few strong signals, in the right places, beat dozens of weak ones. Stop when you've covered the seven placements above. Resist the urge to keep going.`,
      },
      {
        type: 'text',
        heading: 'What changes after this',
        body: `Once your city sits in the placements that Google actually weights — title tags, footer, business card, testimonials, portfolio — your existing pages start competing for local searches without you adding a single new URL. Combined with the visible-copy work from Step 03, you've now done a full local-relevance pass on your site. No new pages to maintain. No keyword-stuffed paragraphs to embarrass you. Just a handful of small, deliberate edits in the right spots. Give Google a couple of weeks to re-crawl, then check whether searches with your city in them start surfacing your pages where they didn't before.`,
      },
      {
        type: 'next',
        heading: 'Next on the climb',
        items: [
          `Set up a Google Business Profile if you haven't yet — it pairs perfectly with the schema and footer changes from this step.`,
          `Open every page of your site in an incognito window, look at the browser tab, and write down any title that doesn't carry the city. That's your fix list.`,
          `Only after the existing pages are doing their job should you consider building dedicated landing pages — and then only for services where the search demand actually justifies it.`,
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
