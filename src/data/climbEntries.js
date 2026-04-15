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
  {
    id: 'trust',
    title: 'Trust',
    subtitle:
      `Google and real customers both look for the same thing: proof you're a real business. This chapter is about making the truth visible — no puffery, no tricks.`,
  },
  {
    id: 'performance',
    title: 'Performance',
    subtitle:
      'Google found you, trusts your name, and knows what you do. Now we make the plumbing fast, clean, and mistake-free.',
  },
  {
    id: 'authority',
    title: 'Authority',
    subtitle:
      'Google trusts what other sites say about you more than what you say about yourself. This chapter is about earning those votes.',
  },
  {
    id: 'coverage',
    title: 'Result Coverage',
    subtitle:
      `Once Google trusts you, your search result stops being one blue link and starts taking over the page — nested sitelinks, more clicks, more screen real estate. This chapter is about earning that upgrade.`,
  },
]

export const entries = [
  {
    id: 1,
    step: 1,
    slug: '01-getting-on-google',
    chapter: 'foundations',
    overallDifficulty: 'medium',
    title: 'Getting on Google in the First Place',
    summary: `You Google your own name and nothing comes up. Not a bad ranking — literally nothing. Before you can rank, Google has to know you exist.`,
    sections: [
      {
        type: 'text',
        heading: 'Why this matters',
        body: `A new website sits invisible until Google "finds" it — which can take months on its own. Most owners assume a live site means Google knows about it. It doesn't. You have to tell Google yourself. The whole process takes one afternoon.`,
      },
      {
        type: 'steps',
        heading: 'The steps we took',
        items: [
          {
            title: 'Pick a business name Google can recognise',
            description: `Choose something distinct. "Onrai" works because Google has nothing to confuse it with. Name your shop "Blue Studio" and you'll fight thousands of others for attention. Unique name = instant advantage.`,
            difficulty: 'easy',
            audience: 'anyone',
            time: '~10 min',
          },
          {
            title: 'Buy your own domain name',
            description: `If your URL still looks like "yoursite.vercel.app", customers and Google both think you're not a real business. Buy a proper domain from a registrar (Namecheap, Cloudflare, or GoDaddy) — about $15/year. Pick ".com.au" for Australia, ".com" otherwise.`,
            difficulty: 'easy',
            audience: 'anyone',
            time: '~15 min',
          },
          {
            title: 'Point your new domain at your website',
            description: `Copy a few DNS values from your hosting provider into your domain registrar's settings. Once it kicks in (minutes to a few hours), your domain loads your site instead of the ugly default URL. Every hosting provider has a guide for this.`,
            difficulty: 'medium',
            audience: 'developer',
            time: '~20 min',
          },
          {
            title: 'Tell Google your site exists',
            description: `Go to Google Search Console, add your domain, verify ownership via DNS, then paste your homepage URL and click "Request Indexing". Most important step — it gets you indexed in hours instead of months.`,
            difficulty: 'medium',
            audience: 'developer',
            time: '~15 min',
          },
        ],
      },
      {
        type: 'tool',
        heading: `Check if you're indexed right now`,
        body: `Type your domain below to run a "site:" search — a special query that only returns pages Google knows about on your domain. Fastest way to check if you exist in Google's eyes.`,
        placeholder: 'yourdomain.com',
        buttonLabel: 'Check on Google',
      },
      {
        type: 'text',
        heading: 'What changes after this',
        body: `Your business name starts appearing in search results. This is the bare minimum for being findable. Every step from here is about getting Google to trust you, understand you, and recommend you over competitors. Without this step, nothing else matters.`,
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
    overallDifficulty: 'medium',
    title: 'Getting Google to Recognise Your Brand',
    summary: `Google shows "Did you mean?" above your result and sends people to competitors. Here's how we told Google exactly who we are.`,
    sections: [
      {
        type: 'text',
        heading: 'Why this matters',
        body: `A customer types your name into Google and sees "Did you mean: [some other brand]?" at the top. That tiny line plants doubt and sends people elsewhere. Until Google is confident your brand is real, you're leaking customers — even when you rank #1.`,
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
            description: `Check that your business name is spelled identically everywhere — header, footer, page titles, about page, contact page. One lowercase "s" in "Onrai studio" can confuse Google. Consistency is the cheapest SEO win.`,
            difficulty: 'easy',
            audience: 'anyone',
            time: '~15 min',
          },
          {
            title: `Add a "business card" to your site that Google can read`,
            description: `Add a hidden piece of code to your homepage that tells Google exactly what your business is, where it's based, and how to contact you. It's called structured data — a digital business card with your name, logo, location, email, and founder.`,
            difficulty: 'medium',
            audience: 'developer',
            time: '~30 min',
          },
          {
            title: 'Tell Google where you operate and who runs the show',
            description: `List your city, state, country, and the founder's name in the business card. This gives Google a human and a location to attach your brand to — a huge trust signal when it's deciding if you're a real business or a random word.`,
            difficulty: 'medium',
            audience: 'developer',
            time: '~20 min',
          },
          {
            title: `Check your work with Google's free testing tool`,
            description: `Use Google's free Rich Results Test — paste your URL, wait a few seconds, and you'll see green ticks or a list of fixes. Quick way to confirm your business card is working.`,
            difficulty: 'easy',
            audience: 'anyone',
            time: '~5 min',
          },
        ],
      },
      {
        type: 'text',
        heading: 'What changes after this',
        body: `Over the coming weeks, the "Did you mean: Sonrai Studio" suggestion should fade and disappear. Google will treat your brand as a real entity, not a typo. That's a prerequisite for knowledge panels, map listings, and being cited by AI models.`,
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
    overallDifficulty: 'easy',
    title: `Speaking Your City's Language`,
    summary: `If you want Melbourne customers, Google needs to see "Melbourne" on your pages — not just in the hidden business card. The fix isn't ten new URLs. It's sharpening the ones you already have.`,
    sections: [
      {
        type: 'text',
        heading: `What we're doing (and why it works for your site too)`,
        body: `Google trusts our name now — but if someone types "melbourne web agency", we're not in the conversation. Why? Nothing on our pages says "Melbourne". The word is hiding in the business card from last step, and that's not enough. Google reads what a human reads. Every edit below is one you can copy onto your own site in an afternoon.`,
      },
      {
        type: 'text',
        heading: `What Google means by "relevant"`,
        body: `Relevance means matching what people actually typed. "Web agency" competes with the entire world. "Melbourne web agency" competes with local businesses. Add one word in the right places and you go from a global fight you can't win to a local one you can.`,
      },
      {
        type: 'text',
        heading: `The pages we already have (and so do you)`,
        body: `Before building new pages, list the ones you already have. Ours: Home, About, Services, Portfolio, AI, Contact, The Climb. Seven pages — that's enough. The temptation is to chase every keyword with a new URL, but ten thin pages get ignored. One strong page with the right words beats ten weak copies. Sharpen what you've got.`,
      },
      {
        type: 'steps',
        heading: `The edits we're making to our site (do the same on yours)`,
        items: [
          {
            title: 'Home — put the city in the hero',
            description: `The homepage is the page Google looks at hardest. Add your city in three places: the eyebrow, the lead sentence, and the <title> tag. No rewrite needed — just one word in three spots:`,
            difficulty: 'easy',
            audience: 'anyone',
            time: '~10 min',
            example: {
              before: 'AI-Powered Web Studio · Australia',
              after: 'AI-Powered Web Studio · Melbourne · Australia',
            },
          },
          {
            title: 'Services — localise the promise',
            description: `One word changes everything. Drop your city in front of "business" in your services headline. Same promise, but now Google treats the page differently when someone searches "Melbourne" + any service:`,
            difficulty: 'easy',
            audience: 'anyone',
            time: '~5 min',
            example: {
              before: 'Everything your business needs to grow online.',
              after: 'Everything your Melbourne business needs to grow online.',
            },
          },
          {
            title: `AI — swap "Australian" for the city name`,
            description: `Wherever your site says "Australian", try the city instead. "Australian" is a country; "Melbourne" is a customer. Google can tell the difference:`,
            difficulty: 'easy',
            audience: 'anyone',
            time: '~5 min',
            example: {
              before: 'AI Features — Smarter Websites for Australian Businesses',
              after: 'AI Features — Smarter Websites for Melbourne & Australian Businesses',
            },
          },
          {
            title: 'Contact — name the city in the hero and the meta',
            description: `Keep your friendly headline. Underneath, add one line: "Based in Melbourne. Working with businesses across Australia." Then fix the meta description — nobody searches "AU-based", but "Melbourne-based" matches real queries:`,
            difficulty: 'easy',
            audience: 'anyone',
            time: '~5 min',
            example: {
              before: 'AU-based web design studio specialising in local business websites.',
              after: 'Melbourne-based web design studio specialising in local business websites.',
            },
          },
          {
            title: 'Portfolio — fix the meta description',
            description: `Check your portfolio page's meta description. If it says "Australian businesses" but not your city, that's a three-minute fix:`,
            difficulty: 'easy',
            audience: 'anyone',
            time: '~3 min',
            example: {
              before: 'Browse our portfolio of websites built for local and small Australian businesses.',
              after: 'Browse our portfolio of websites built for Melbourne and Australian small businesses.',
            },
          },
          {
            title: `Audit every <title> tag for the city name`,
            description: `Walk every page's <title> tag and make sure each includes your city and business name. If five titles mention the city and two don't, those two look like stragglers. Open every page, check the browser tab, and ask "does this tell Google who I am and where I am?"`,
            difficulty: 'medium',
            audience: 'anyone',
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
        body: `None of these edits touch the design or add pages. They just tell Google what was already true: you're a local business serving local customers. Over the next couple of weeks, you'll start showing up for searches that include your city. The whole job takes about an hour.`,
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
    overallDifficulty: 'easy',
    title: 'Putting Your City in the Right Places (Without Overdoing It)',
    summary: `Step 03 got the city into your copy. This step covers the placements Google actually weights — title tags, footer, business card, testimonials — and the line you shouldn't cross.`,
    sections: [
      {
        type: 'text',
        heading: 'Why this matters',
        body: `Google reads some places harder than body text: title tags, footer, your business card, testimonials, portfolio tags. Miss those and the copy work from Step 03 under-delivers. But there's a ceiling — cramming the same word everywhere makes pages rank lower, not higher. You need to know where the city counts and where to stop.`,
      },
      {
        type: 'text',
        heading: 'The rule: meaningful places, not every place',
        body: `Homepage: your brand + city, once or twice. Service pages: pair the service with the city — "Melbourne web design", not "web design (Melbourne) for Melbourne businesses by a Melbourne studio." Blog posts and case studies: prove it with real local examples. Three layers, each mentioning the city once or twice. Anything more is stuffing, and Google says stuffing hurts rankings.`,
      },
      {
        type: 'steps',
        heading: 'The seven placements worth checking',
        items: [
          {
            title: 'The browser-tab title on every page',
            description: `The <title> tag is the single strongest on-page signal Google uses. Each page should mention the city once, naturally. Walk the list: home, services, about, portfolio, contact. Fix any gaps. Short and clear beats clever.`,
            difficulty: 'easy',
            audience: 'anyone',
            time: '~5 min',
            example: {
              before: 'Onrai Studio — Web Design & Development for Local Businesses in Australia',
              after: 'Melbourne Web Design & Development — Onrai Studio',
            },
          },
          {
            title: 'One headline per page (not every headline)',
            description: `Pick the main headline on each page. If the city fits naturally, add it. If it makes the sentence clunky, leave it alone. One honest mention per page. Friendly headlines like "Let's build something together" don't need a city — the line underneath handles that.`,
            difficulty: 'easy',
            audience: 'anyone',
            time: '~10 min',
          },
          {
            title: 'Your contact page deserves a real address line',
            description: `Under your contact headline, add one line naming your city and service area. Anyone visiting this page is already wondering if you're nearby. Check the meta description too — swap "AU-based" for your city name.`,
            difficulty: 'easy',
            audience: 'anyone',
            time: '~5 min',
            example: {
              before: 'AU-based web design studio specialising in local business websites.',
              after: 'Melbourne-based web design studio specialising in local business websites.',
            },
          },
          {
            title: 'The footer that sits on every page',
            description: `The footer appears on every page, so one mention of the city there does more work than ten in body copy. If yours says "AU-based" or just shows a flag, swap in the city. Once is enough.`,
            difficulty: 'easy',
            audience: 'anyone',
            time: '~3 min',
            example: {
              before: '🇦🇺 AU Based Studio',
              after: '🇦🇺 Melbourne, Australia',
            },
          },
          {
            title: 'The hidden business card (your schema)',
            description: `Open the hidden business card from Step 02. Check that city, state, and country are named, and the "areas you serve" list includes the city. Most templates leave this generic — a two-minute edit gives Google a strong signal outside body copy.`,
            difficulty: 'medium',
            audience: 'developer',
            time: '~15 min',
          },
          {
            title: 'A local testimonial in the first slot',
            description: `Is the first testimonial on your homepage from a local customer? If not, reorder so it is. People scan top to bottom and stop early. Don't fake quotes — a genuine mix that leads with a local name works:`,
            difficulty: 'easy',
            audience: 'anyone',
            time: '~10 min',
            example: {
              before: 'First card: Brisbane electrician. Melbourne café in slot two.',
              after: 'First card: Melbourne café. Brisbane and Sydney follow.',
            },
          },
          {
            title: 'Tag your portfolio projects with where the client was based',
            description: `Add a small location tag next to each portfolio project — "Melbourne", "Sydney", "Remote". Readers scan for "people like me" and a local tag stops them. The page becomes a cluster of local proof without new copy:`,
            difficulty: 'medium',
            audience: 'anyone',
            time: '~15 min',
            example: {
              before: 'From local tradies to SaaS startups — a selection of websites and digital experiences we\'ve built and shipped.',
              after: 'From Melbourne tradies to Australian SaaS startups — a selection of websites and digital experiences we\'ve built and shipped.',
            },
          },
        ],
      },
      {
        type: 'text',
        heading: `The thing you don't do`,
        body: `Don't write "Melbourne web design for Melbourne businesses by a Melbourne team in Melbourne" — Google calls that out and ranks pages lower for it. Don't buy exact-match domains. Don't make a separate page for every suburb unless each has genuinely different content. A few strong signals in the right places beat dozens of weak ones. Stop after the seven placements above.`,
      },
      {
        type: 'text',
        heading: 'What changes after this',
        body: `Your existing pages now compete for local searches without a single new URL. Combined with Step 03, you've done a full local-relevance pass. Give Google a couple of weeks to re-crawl, then check if searches with your city start surfacing your pages.`,
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
  {
    id: 5,
    step: 5,
    slug: '05-trust-signals',
    chapter: 'trust',
    overallDifficulty: 'easy',
    title: 'Looking Like a Real Business (Because You Are One)',
    summary: `Google's quality checkers and every visitor ask the same thing: "is this a real business?" The fix isn't to fake anything — it's to surface what's already true, in the places people actually look.`,
    sections: [
      {
        type: 'text',
        heading: 'Why this matters',
        body: `Google's quality checkers and real customers run the same mental checklist. Who runs this? Where are they? How do I contact them? Does anyone else on the internet confirm they exist? If the answers aren't visible in seconds, both human and algorithm move on. The missing bits are usually already true — they're just hiding off-page.`,
      },
      {
        type: 'list',
        heading: 'The on-site checklist (count your own hits)',
        intro: `Before you change anything, run this list against your own site. Open your homepage in a new tab, scroll once, and ask how many of these are visible without clicking anywhere:`,
        items: [
          `Your real business name, spelled the same way everywhere.`,
          `A contact form that actually works — not a broken "coming soon".`,
          `A working contact email — ideally on your own domain, but a clean business-named Gmail (yourbusiness@gmail.com) is fine while you're starting out.`,
          `Your service area written out in plain English.`,
          `A portfolio or some recent work, even if it's three items.`,
          `Testimonials with real names and real locations.`,
          `A privacy policy.`,
          `Terms of service.`,
          `A clear offer — pricing, packages, or at least "here's what you get".`,
          `An About or founder page with a real human name on it.`,
        ],
        outro: `Most small business sites hit six or seven of these and are genuinely surprised when they find the gaps. Go count yours before you read on.`,
      },
      {
        type: 'steps',
        heading: 'The edits we\'re making to our own site',
        items: [
          {
            title: 'Put your name on the About page',
            description: `If your About page doesn't name who runs the business, that's a gap. Every visitor who gets there is looking for a face. Add one short paragraph: a name, why the business exists, one real story. A name is a trust signal. A face is a bigger one.`,
            difficulty: 'easy',
            audience: 'anyone',
            time: '~15 min',
            example: {
              before: 'We build websites for real businesses.',
              after: `We build websites for real businesses. I started Onrai Studio after watching too many small businesses pay big-agency prices for slow, generic work. This studio is the version I wish they'd had.`,
            },
          },
          {
            title: 'Link your profiles in the hidden business card',
            description: `The business card from Step 02 has a "sameAs" slot — a list of links to your profiles on other sites. Google uses it to confirm you exist in more than one place. Paste in URLs for every active profile. Skip anything you won't maintain — a dead page is worse than none.`,
            difficulty: 'medium',
            audience: 'developer',
            time: '~10 min',
            example: {
              before: '"sameAs": []',
              after: '"sameAs": ["https://www.linkedin.com/company/onrai-studio", "https://www.instagram.com/onraistudio"]',
            },
          },
          {
            title: 'Show your ABN in the footer (if you have one)',
            description: `In Australia, an ABN is the clearest "I'm a registered business" badge. One line under the copyright in your footer — done. Don't have one? Skip this. Faking an ABN is fraud.`,
            difficulty: 'easy',
            audience: 'anyone',
            time: '~2 min',
            example: {
              before: '© 2025 Onrai Studio. Built in Australia. All rights reserved.',
              after: '© 2025 Onrai Studio · ABN 00 000 000 000 · Built in Australia.',
            },
          },
          {
            title: 'Keep every number on your site current',
            description: `Read every number on your site out loud. Project counts, team size, years in business. Is each one still true this month? Numbers drift. If a stat is hard to keep fresh, use qualitative language instead — "a growing portfolio", "a small team" — and you'll never have to update it.`,
            difficulty: 'easy',
            audience: 'anyone',
            time: '~10 min',
          },
        ],
      },
      {
        type: 'list',
        heading: 'The off-site half nobody mentions',
        intro: `Google doesn't just read your site — it reads the web around it. When the same name and details appear on LinkedIn, Instagram, and a directory, all pointing back to your domain, that's corroboration. Four things worth having:`,
        items: [
          `LinkedIn company page — the most credible business identity link on the internet.`,
          `Instagram profile — especially if your work is visual.`,
          `Google Business Profile — the single biggest lever for local trust if you serve a physical area. We've flagged this three times now, because it's that important.`,
          `One good directory listing if one is genuinely relevant to your industry — a chamber of commerce, a trades register, an industry association. One good listing beats ten spammy ones.`,
        ],
        outro: `The rule is strict: only list things you actually have and actually plan to maintain. A dead profile hurts more than a missing one.`,
      },
      {
        type: 'text',
        heading: `The thing you don't do`,
        body: `Don't fake reviews. Don't invent an office address. Don't paste stock headshots onto an anonymous About page. Don't inflate team count or experience. The moment one customer catches a lie, trust is gone permanently. If you're tempted to inflate a number, shrink it instead. The smaller, truer version does more work.`,
      },
      {
        type: 'text',
        heading: 'What changes after this',
        body: `Three things happen over the next few weeks. Google sees your business corroborated across the web — one of its strongest trust signals. Your bounce rate drops because visitors find the trust cues they were scanning for. And AI search tools now have enough detail to actually cite you. No new pages needed — just truth surfaced.`,
      },
      {
        type: 'next',
        heading: 'Next on the climb',
        items: [
          `Set up your Google Business Profile if you haven't yet — this is now the third time we've flagged it, because it's genuinely the biggest single lever left.`,
          `Once a week for the next month, search your own business name from an incognito window. Write down anything that looks off. That's your punch list.`,
          `In the next step we tackle that Google Business Profile head on — who qualifies, who doesn't, and how to set one up without faking eligibility.`,
        ],
      },
    ],
  },
  {
    id: 6,
    step: 6,
    slug: '06-google-business-profile',
    chapter: 'trust',
    overallDifficulty: 'medium',
    title: 'Set Up a Google Business Profile (Only If You Qualify)',
    summary: `Google Business Profile isn't for every business. If you qualify, it's the biggest local lever you'll pull. If you don't, forcing it gets you suspended. Here's how to tell which side you're on.`,
    sections: [
      {
        type: 'text',
        heading: 'Why this matters',
        body: `The Business Profile is the box on the right of search results with your map pin, hours, photos, and reviews. It feeds the local "map pack" — three businesses above regular results for "near me" searches. Nothing moves the needle as hard for a qualifying business. But forcing one when you don't qualify gets your profile suspended and domain flagged.`,
      },
      {
        type: 'text',
        heading: 'The eligibility question (read this before anything else)',
        body: `Google's rule is strict. You qualify if you meet customers at a fixed address (shop, studio, clinic) or travel to them in a defined area (plumber, mobile groomer). That's it. Purely remote businesses do not qualify. The trap: Google's wizard lets you create a profile anyway — it just gets suspended later. First question isn't "how to set up", it's "should I?"`,
      },
      {
        type: 'list',
        heading: 'Where we landed (and how to land yourself)',
        intro: `Here's the honest read on our own situation, and the same three buckets your business will fall into:`,
        items: [
          `Storefront businesses — you have a public address customers visit. Set up the profile with the address. Easy call.`,
          `Service-area businesses — you travel to customers in a defined region (suburbs, a city, a radius). Set up the profile and hide the address; list the service area instead. Also a clear yes.`,
          `Purely remote — you only ever work over the internet, with no in-person component. Skip this step entirely. Put your effort into LinkedIn, directory listings, and the trust signals from Step 05.`,
        ],
        outro: `For Onrai Studio specifically, we sit in the second bucket — Melbourne and surrounding service areas, occasional in-person meetings, no public storefront. So we qualify, and the steps below are the ones we're following. If you're in bucket three, the most useful thing this entry will do for you is give you permission to stop chasing this lever and go back to the others.`,
      },
      {
        type: 'steps',
        heading: 'The setup, in the right order',
        items: [
          {
            title: 'Create the profile from the right Google account',
            description: `Use a Workspace email at your own domain (best) or a dedicated Gmail in your business name (second-best). Don't use a personal Gmail. Write the password down and add a recovery phone — losing access is a months-long nightmare. Go to google.com/business, click "Manage now", and spell your business name exactly as it appears on your website.`,
            difficulty: 'easy',
            audience: 'anyone',
            time: '~15 min',
          },
          {
            title: 'Pick the primary category carefully',
            description: `The primary category is the biggest factor in which searches you appear for. Pick the most specific match — "Web designer" beats "Marketing consultant". You can change it later, but every change resets some trust, so try to get it right the first time.`,
            difficulty: 'medium',
            audience: 'anyone',
            time: '~10 min',
          },
          {
            title: 'Handle the address question correctly',
            description: `Google asks for an address — the question is whether the public sees it. Storefront? Enter your address and show it. Service-area or work-from-home? Enter your real address (home is fine) and tick "I deliver goods and services to my customers" — this hides the address and lets you list service areas instead. List only the suburbs or cities you actually serve. Never use a PO box, virtual office, or fake address — that's a permanent ban.`,
            difficulty: 'easy',
            audience: 'anyone',
            time: '~10 min',
          },
          {
            title: 'Verify the profile (this is the gate)',
            description: `Google verifies via postcard, video call, or video upload depending on your category. Do it properly the first time — failed verifications leave profiles in limbo for weeks. Service-area businesses: expect video verification. Have your laptop and branded materials ready.`,
            difficulty: 'medium',
            audience: 'anyone',
            time: '~20 min',
          },
          {
            title: 'Upload photos that look like the real business',
            description: `You need three things. A square logo (720×720+, clean background). A landscape cover photo showing real work — not stock, not a skyline. And 3–5 additional photos proving you're real: recent projects, your workspace, a client meeting. Phone photos in good light beat stock photography every time.`,
            difficulty: 'easy',
            audience: 'anyone',
            time: '~20 min',
          },
          {
            title: 'Write a business description that sounds like a human',
            description: `750 characters. Cover four things: what you do, who for, where, and one reason to pick you. Skip keyword soup. Don't open with "We are a leading..." Write it how you'd describe your business to a stranger at a barbecue:`,
            difficulty: 'medium',
            audience: 'anyone',
            time: '~20 min',
            example: {
              sample: `Onrai Studio is a Melbourne-based web design and development studio for small and local businesses. We build fast, modern websites that help you get found on Google, look credible to first-time visitors, and turn that traffic into real customers. Every project is handled by a small team — no account managers, no handoffs. The studio works with clients across Melbourne and Australia.`,
            },
          },
          {
            title: 'Add services and hours honestly',
            description: `List 3–4 services you want to be known for — specific ("Local business websites") beats vague ("Consulting"). For hours, set the truth. Appointment-only? Google supports that. Closed Sundays? Say so. Customers trust honesty over 24/7 claims from a one-person studio.`,
            difficulty: 'easy',
            audience: 'anyone',
            time: '~15 min',
          },
          {
            title: 'Ask real customers for real reviews',
            description: `Send a friendly message to real clients with a direct link to your review page. Don't write reviews for them. Don't offer discounts for reviews. Don't flood them all in one week — Google flags that pattern. A handful of honest reviews over months beats twenty at once.`,
            difficulty: 'medium',
            audience: 'anyone',
            time: '~20 min',
          },
        ],
      },
      {
        type: 'resource',
        heading: 'Where to actually click',
        label: 'Google · official setup',
        title: 'Google Business Profile — start here',
        href: 'https://www.google.com/business/',
        body: `The official setup page. Sign in with the Google account you plan to keep, click "Manage now", and follow the wizard with the rules above in mind.`,
      },
      {
        type: 'text',
        heading: `The thing you don't do`,
        body: `Don't create a profile if you don't qualify — fake addresses lead to permanent suspension, and the domain gets a black mark. Don't stuff keywords into your business name ("Onrai Studio Melbourne Web Design SEO"). Don't buy or trade reviews. A real profile with real reviews beats a polished fake every time — and the fake gets caught.`,
      },
      {
        type: 'text',
        heading: 'What changes after this',
        body: `You start showing up in the local map pack for "near me" searches. Your knowledge panel fills out with photos, hours, and reviews. The schema from Step 02, profiles from Step 05, and this Business Profile all corroborate each other — exactly the cluster of signals Google's local algorithm rewards.`,
      },
      {
        type: 'next',
        heading: 'Next on the climb',
        items: [
          `Search your business name from an incognito window in two weeks. The knowledge panel should be populating. If it isn't, check your verification status first — that's almost always the cause.`,
          `Set a monthly reminder to add one new photo and respond to any new reviews. Active profiles outrank dormant ones.`,
          `Next up: the technical plumbing check. We look under the hood at sitemaps, page speed, and the invisible settings that quietly decide whether Google crawls you properly.`,
        ],
      },
    ],
  },
  {
    id: 7,
    step: 7,
    slug: '07-technical-seo-basics',
    chapter: 'performance',
    overallDifficulty: 'medium',
    title: 'Get Your Technical SEO Basics Perfect',
    summary:
      'Google already knows you exist. Now we make sure nothing on your site is quietly blocking it — broken sitemaps, missing HTTPS, slow pages. This is the plumbing check every site needs and almost no one does.',
    sections: [
      {
        type: 'text',
        heading: 'Why this matters',
        body: `Everything so far has been content work — the paint job. This step is the engine check. If your site loads slowly, blocks Google's crawler, or tells it "don't look at this page," the content work goes to waste. Most of these fixes take five minutes and you only do them once.`,
      },
      {
        type: 'diagram',
        heading: 'What a sitemap actually is',
        body: `A sitemap is a simple file that lists every page on your site. You hand it to Google so it doesn't have to wander around guessing what exists. Think of it like a table of contents for your website — except it's written for Google's crawler, not for humans. The file lives at yoursite.com/sitemap.xml, and it's just a list of URLs with a few extra details like when each page was last updated.`,
        component: 'SitemapDiagram',
        caption: 'Your sitemap tells Google exactly which pages to visit — no guessing, no missed pages.',
      },
      {
        type: 'list',
        heading: 'The technical checklist',
        intro: `Here's every technical thing Google looks at under the hood. You don't need to know how each one works yet — just tick off the ones you've already got, and we'll fix the gaps below.`,
        items: [
          'Your site uses one version of the URL (www or non-www, not both)',
          'Your site loads over HTTPS (the padlock icon in the browser bar)',
          'You have a sitemap.xml file that lists every real page',
          'You have a robots.txt file that isn\'t accidentally blocking Google',
          'None of your pages have a hidden "noindex" tag keeping them out of search',
          'Your site loads fast on a phone (under 3 seconds)',
          'Your Core Web Vitals pass — three speed scores Google publishes for every site',
          'Every page has a unique, descriptive title in the browser tab',
          'Every page has a meta description that reads like a one-line pitch',
          'Pages link to each other where it makes sense (internal links)',
          'Every image has alt text describing what it shows',
          'Your homepage has structured data — the hidden business card from Step 02',
          'You don\'t have duplicate pages showing the same content at different URLs',
        ],
        outro: `If you can tick off ten or more, you're ahead of most small businesses. If you're missing a few, the steps below tell you exactly how to fix each one.`,
      },
      {
        type: 'steps',
        heading: 'Fixing the gaps',
        items: [
          {
            title: 'Force HTTPS and pick one domain version',
            description:
              'Log into your hosting dashboard (Cloudflare, Netlify, or whoever hosts your site) and look for "Always use HTTPS" or "Force SSL." Turn it on. Then decide: www.yoursite.com or just yoursite.com? Pick one and set up a redirect so the other version points to it. Having both live confuses Google into thinking you have two separate sites.',
            difficulty: 'medium',
            audience: 'developer',
            time: '~15 min',
          },
          {
            title: 'Generate and submit your sitemap',
            description:
              'If you use WordPress, install a plugin like Yoast or Rank Math — they create the sitemap automatically. If you built your site with a framework like React or Next.js, you may need to create the file manually (it\'s just a list of URLs in XML format). Once the file exists at yoursite.com/sitemap.xml, paste that URL into Google Search Console under "Sitemaps" in the left menu.',
            difficulty: 'medium',
            audience: 'developer',
            time: '~20 min',
          },
          {
            title: 'Check your robots.txt',
            description:
              'Type yoursite.com/robots.txt into your browser. If the file says "Disallow: /" — that means you\'re blocking Google from your entire site. Remove that line. If the file is empty, missing, or just says "Allow: /" with a link to your sitemap, you\'re fine.',
            difficulty: 'easy',
            audience: 'developer',
            time: '~5 min',
          },
          {
            title: 'Hunt for accidental noindex tags',
            description:
              'Open each page of your site in a browser, right-click, and choose "View Page Source." Press Ctrl+F (or Cmd+F on Mac) and search for "noindex." If you find it, that page is invisible to Google on purpose — or by accident. If it\'s accidental, remove the tag and re-publish.',
            difficulty: 'medium',
            audience: 'developer',
            time: '~10 min',
          },
          {
            title: 'Test your mobile speed',
            description:
              'Go to Google\'s PageSpeed Insights tool and paste your homepage URL. It gives you a score out of 100 and flags what\'s slow. Green (90+) is great, orange (50–89) is okay, red (under 50) needs work. It also shows your Core Web Vitals — three scores called LCP (how fast the main content appears), CLS (how much the page jumps around while loading), and INP (how fast buttons respond when tapped).',
            difficulty: 'easy',
            audience: 'anyone',
            time: '~5 min',
          },
          {
            title: 'Write proper title tags and meta descriptions',
            description:
              'Open each page and check the text that shows in the browser tab — that\'s the title tag. It should describe the page in under 60 characters and include your city if you\'re a local business. Then check the meta description (you set these in Step 03). Each one should be a unique, one-line pitch under 155 characters. No two pages should share the same title or description.',
            difficulty: 'easy',
            audience: 'anyone',
            time: '~20 min',
          },
          {
            title: 'Add internal links between your pages',
            description:
              'Read through each page and look for places where you mention a topic that\'s covered on another page. Link those words to the other page. For example, if your About page mentions your services, link the word "services" to your Services page. This helps Google understand how your pages relate to each other and makes it easier for visitors to find what they need.',
            difficulty: 'easy',
            audience: 'anyone',
            time: '~15 min',
          },
          {
            title: 'Add alt text to every image',
            description:
              'Find every image on your site and make sure it has alt text — a short description of what the image shows. This helps Google understand your images, and it\'s also what screen readers use for visitors who can\'t see them. Keep it simple and descriptive.',
            difficulty: 'easy',
            audience: 'anyone',
            time: '~15 min',
            example: {
              before: '<img src="team-photo.jpg">',
              after: '<img src="team-photo.jpg" alt="The team working at a Melbourne cafe">',
            },
          },
        ],
      },
      {
        type: 'resource',
        heading: 'Check your speed score',
        label: 'Free tool',
        title: 'Google PageSpeed Insights',
        body: 'Paste any URL to see your speed score, Core Web Vitals, and specific recommendations for what to fix.',
        href: 'https://pagespeed.web.dev/',
      },
      {
        type: 'text',
        heading: 'What changes after this',
        body: `Clean plumbing makes everything compound faster. Pages get indexed in hours instead of weeks. Speed scores improve, directly affecting mobile rankings. Not glamorous, but it's the difference between stalling and climbing.`,
      },
      {
        type: 'next',
        heading: 'Next on the climb',
        items: [
          `Run PageSpeed Insights on your homepage and your busiest service page. Screenshot your scores — you'll want to compare them in two weeks after making fixes.`,
          `Next up: we open Google Search Console and learn how to use it — submit your sitemap, check which pages are indexed, see what people are actually searching to find you, and request re-indexing after changes.`,
        ],
      },
    ],
  },
  {
    id: 8,
    step: 8,
    slug: '08-search-console',
    chapter: 'performance',
    overallDifficulty: 'easy',
    title: 'Learn to Use Google Search Console',
    summary:
      'Search Console is the free dashboard Google gives you to see exactly how your site appears in search. Most small businesses never open it. Here\'s how to use the five features that actually matter.',
    sections: [
      {
        type: 'text',
        heading: 'Why this matters',
        body: `Every fix so far is invisible until you confirm Google picked it up. Search Console is the only place that tells you directly — which pages are indexed, which are ignored, what people search before clicking your site, and whether anything is broken. It's the dashboard for everything we've built.`,
      },
      {
        type: 'text',
        heading: 'Getting in',
        body: `If you set up Search Console back in Step 01, you're already in — just go to search.google.com/search-console and sign in with the same Google account. If you skipped that step, go back and do it now. Everything below assumes your site is verified and connected.`,
      },
      {
        type: 'steps',
        heading: 'The five things to check',
        items: [
          {
            title: 'Inspect any URL',
            description:
              'The inspection bar sits at the top of every Search Console page. Paste any URL from your site and hit Enter. Google tells you three things: whether the page is in Google\'s index, whether there are any errors stopping it, and when Google last looked at it. If a page isn\'t indexed and you think it should be, this is where you start.',
            difficulty: 'easy',
            audience: 'anyone',
            time: '~2 min',
          },
          {
            title: 'Submit your sitemap',
            description:
              'Click "Sitemaps" in the left menu. Type your sitemap URL — usually yoursite.com/sitemap.xml — and click Submit. This hands Google your table of contents so it doesn\'t have to guess which pages exist. You only need to do this once. After that, Google re-reads it automatically whenever you add new pages.',
            difficulty: 'easy',
            audience: 'anyone',
            time: '~3 min',
          },
          {
            title: 'Check which pages are indexed',
            description:
              'Click "Pages" under the Indexing section. You\'ll see two numbers: how many pages Google has indexed, and how many it excluded. Click the excluded list to see why — common reasons are accidental "noindex" tags, redirect chains, or duplicate content. If an important page is excluded, fix the cause and then use the URL inspection tool to request re-indexing.',
            difficulty: 'easy',
            audience: 'anyone',
            time: '~5 min',
          },
          {
            title: 'See what people are searching to find you',
            description:
              'Click "Performance" in the left menu, then "Search Results." The Queries tab shows the exact words people typed into Google before your site appeared in their results. This is gold — it tells you what your audience actually looks for, in their own words. You can use those phrases in your page titles, headings, and content to match what real people are searching for.',
            difficulty: 'easy',
            audience: 'anyone',
            time: '~5 min',
          },
          {
            title: 'Request re-indexing after a change',
            description:
              'Whenever you make a meaningful change to a page — update the title tag, add alt text to images, rewrite a section — paste that page\'s URL into the inspection bar and click "Request Indexing." Google re-crawls it within hours instead of waiting days or weeks for the next scheduled visit. This is how you make your fixes show up fast.',
            difficulty: 'easy',
            audience: 'anyone',
            time: '~2 min',
          },
        ],
      },
      {
        type: 'resource',
        heading: 'See a real sitemap',
        label: 'Live example',
        title: 'onraistudio.com/sitemap.xml',
        body: 'This is our actual sitemap — a plain XML file listing every page on the site with last-updated dates and priority hints. Yours will look similar. This is the URL you paste into Search Console under Sitemaps.',
        href: 'https://onraistudio.com/sitemap.xml',
      },
      {
        type: 'list',
        heading: 'Your weekly routine',
        intro: 'Once everything is set up, Search Console takes about five minutes a week. Here\'s what to check each time you log in:',
        items: [
          'Glance at the Performance report — are impressions and clicks trending up, down, or flat?',
          'Check the Pages report under Indexing — any new pages excluded that shouldn\'t be?',
          'Look at the Queries tab — any new search terms appearing that you could write content about?',
          'If you made changes to your site that week, inspect the updated URLs to confirm Google has picked them up.',
        ],
      },
      {
        type: 'resource',
        heading: 'Open Search Console',
        label: 'Google tool',
        title: 'Google Search Console',
        body: 'Sign in with the Google account you used to verify your site. If you haven\'t set it up yet, go back to Step 01.',
        href: 'https://search.google.com/search-console',
      },
      {
        type: 'text',
        heading: 'What changes after this',
        body: `Instead of guessing whether your SEO changes are working, you check a dashboard once a week and make decisions based on real data. That's the shift — from hoping to knowing.`,
      },
      {
        type: 'next',
        heading: 'Next on the climb',
        items: [
          `Log into Search Console and submit your sitemap if you haven't already. Then inspect your homepage — confirm it's indexed with no errors.`,
          `Set a weekly calendar reminder to check the Performance and Pages reports. Five minutes, same day each week.`,
          `Next up: backlinks — getting other websites to link to yours. It's the hardest step so far, but a few real links from relevant local sites can move the needle more than anything else we've done.`,
        ],
      },
    ],
  },
  {
    id: 9,
    step: 9,
    slug: '09-earn-backlinks',
    chapter: 'authority',
    overallDifficulty: 'hard',
    title: 'Create Pages That Earn Backlinks Naturally',
    summary:
      'A backlink is another website linking to yours. Google treats each one like a vote of confidence. For a new agency, a few real, relevant links beat dozens of junk ones.',
    sections: [
      {
        type: 'text',
        heading: 'Why this matters',
        body: `Every step so far has been about things you control. Backlinks are different — someone else's website links to yours, and Google treats it like a recommendation. The more relevant the source, the stronger the signal. For local businesses, this is still one of the biggest ranking factors.`,
      },
      {
        type: 'text',
        heading: 'Why this blog exists',
        body: `This blog is itself a backlink strategy. Every step is a useful page someone might link to or share. A tradie shares it in a Facebook group. A clinic owner forwards it to their web developer. Writing genuinely useful content for a specific audience is the most reliable way to earn links. You're reading the strategy right now.`,
      },
      {
        type: 'diagram',
        heading: 'Where backlinks come from',
        body: 'Each arrow below is a link from another site to yours. Google counts every one as a vote of confidence. The more relevant the source, the stronger the vote.',
        component: 'BacklinkSourcesDiagram',
        caption: 'Five realistic backlink sources for a local service business — no spam, no tricks.',
      },
      {
        type: 'steps',
        heading: 'Seven ways to earn real backlinks',
        items: [
          {
            title: 'Publish 3–5 strong case studies',
            description:
              'Write up real projects you\'ve completed. Include the problem, what you did, and the result. Case studies are some of the most linked-to pages on service business sites because they\'re proof of real work. Other businesses in the same industry often reference them when explaining what\'s possible.',
            difficulty: 'medium',
            audience: 'anyone',
            time: '~2 hours each',
          },
          {
            title: 'Write local niche content',
            description:
              'Create pages that answer specific questions for your local market. "Best website setup for Melbourne tradies," "How Melbourne clinics can use AI chatbots," "What every Melbourne cafe needs on their website." These pages attract links from local forums, Facebook groups, and other blogs because they\'re useful to a specific audience that nobody else is writing for.',
            difficulty: 'medium',
            audience: 'anyone',
            time: '~3 hours each',
          },
          {
            title: 'Submit to Australian business directories',
            description:
              'List your business on directories that are relevant to your industry and location. Yellow Pages, True Local, Hotfrog, and industry-specific directories all count. Each listing is a backlink from a trusted Australian domain. Make sure your business name, address, and phone number are consistent across all of them.',
            difficulty: 'easy',
            audience: 'anyone',
            time: '~30 min each',
          },
          {
            title: 'Sponsor or collaborate with local communities',
            description:
              'Sponsor a local event, sports club, or community group. Most will list sponsors on their website with a link back to you. You can also collaborate with local business groups, chambers of commerce, or networking events. These are real, relevant links from sites Google already trusts in your area.',
            difficulty: 'medium',
            audience: 'anyone',
            time: 'varies',
          },
          {
            title: 'Guest post on local business blogs',
            description:
              'Reach out to complementary businesses — a web designer could write for an accountant\'s blog about why a good website saves money, or for a marketing agency\'s blog about technical SEO basics. You provide useful content, they get a free article, and you get a link back to your site from a relevant local business.',
            difficulty: 'hard',
            audience: 'anyone',
            time: '~3 hours per post',
          },
          {
            title: 'Get featured on client sites',
            description:
              'Ask clients if you can add a small "Built by [Your Business]" link in their website footer, or ask them to write a short case study about working with you. This is one of the easiest backlinks to earn because the client already knows and trusts you — you just have to ask.',
            difficulty: 'easy',
            audience: 'anyone',
            time: '~10 min per client',
          },
          {
            title: 'List on relevant industry directories',
            description:
              'Beyond general business directories, look for industry-specific ones. Web agencies can list on Clutch, DesignRush, or GoodFirms. Tradies can list on HiPages or ServiceSeeking. Find the directories where your potential customers actually look, and make sure your profile is complete.',
            difficulty: 'easy',
            audience: 'anyone',
            time: '~30 min each',
          },
        ],
      },
      {
        type: 'list',
        heading: 'The thing you don\'t do',
        intro: 'There are entire industries built around selling backlinks. Ignore all of them.',
        items: [
          'Don\'t buy links from "SEO packages" that promise 500 backlinks for $50 — these are spam farms that will get your site penalised',
          'Don\'t do link exchanges ("I\'ll link to you if you link to me") — Google sees through these and discounts them',
          'Don\'t use automated link-building tools that blast your URL across hundreds of low-quality sites',
          'Don\'t pay for guest posts on sites that exist only to sell guest posts — if every article on the site is a different business plugging themselves, Google knows',
        ],
        outro: 'Google\'s spam team actively hunts these patterns. One penalty can undo months of legitimate work. A few real, relevant links from sites that actually matter will always beat hundreds of junk ones.',
      },
      {
        type: 'text',
        heading: 'How this blog helps you right now',
        body: `If you've followed The Climb, you've already built the foundation that makes backlinks work: indexed, recognised, locally relevant, trusted, technically clean. When someone links to your site now, Google actually notices. Without those foundations, backlinks don't move the needle.`,
      },
      {
        type: 'text',
        heading: 'What changes after this',
        body: `Genuine backlinks shift your domain authority — how much Google trusts your entire site. You start appearing for competitive keywords that were out of reach. Trust signals + useful content + real backlinks is the full picture Google uses to rank. Most competitors never get past Step 01.`,
      },
      {
        type: 'next',
        heading: 'Next on the climb',
        items: [
          'Start with the easiest win — submit your business to two or three Australian directories this week. Make sure your name, address, and phone number match everywhere.',
          'Next up: case studies. They\'re the single highest-value pages you can add to your site — proof of real work that earns links and converts visitors at the same time.',
        ],
      },
    ],
  },
  {
    id: 10,
    step: 10,
    slug: '10-case-studies',
    chapter: 'authority',
    overallDifficulty: 'medium',
    title: 'Add Case Studies Immediately',
    summary:
      'Case studies are the single highest-value pages you can add to a service business site. They prove you\'ve done real work, earn backlinks, and give potential clients the confidence to reach out.',
    sections: [
      {
        type: 'text',
        heading: 'Why this matters',
        body: `Every competitor says "we deliver results." A case study actually shows it — real project, real problem, real outcome. Google loves them because they're full of specific keywords. Clients love them because they see themselves in the story. Other sites link to them as proof. Most small businesses have zero. Three puts you ahead of nearly everyone.`,
      },
      {
        type: 'text',
        heading: 'Why they help both SEO and conversion',
        body: `Two audiences read the same page. Google sees keywords you'd never target — "website redesign for Melbourne physiotherapist." A potential client sees proof you've solved their problem before. They don't need to trust your marketing — they can see the work. Case studies convert better than any other page type.`,
      },
      {
        type: 'list',
        heading: 'What every case study should include',
        intro: 'Keep the structure simple. Every case study needs these six things:',
        items: [
          'Client type — who they are, what industry, what size. You don\'t need to name the client if they prefer privacy. "A Melbourne physiotherapy clinic" works fine.',
          'Problem — what was broken, missing, or not working. Be specific. "Their website was built in 2018 and wasn\'t showing up on Google for any local searches."',
          'What you built — the actual work you did. Describe it in terms a non-technical reader would understand.',
          'Tools used — the technologies, platforms, or frameworks. This adds credibility and helps Google associate your site with those tools.',
          'Before and after — screenshots, metrics, or a simple description of what changed. Visuals are more convincing than text here.',
          'Outcomes — what happened after launch. Did traffic increase? Did they get more enquiries? Did their Google ranking improve? Use real numbers where you can.',
        ],
        outro: 'You don\'t need fancy design. A simple page with a clear heading, these six sections, and a screenshot or two is more than enough to start.',
      },
      {
        type: 'diagram',
        heading: 'The template at a glance',
        body: 'Every case study follows the same six-section structure. Here it is with example content so you can see what each section looks like.',
        component: 'CaseStudyTemplateDiagram',
        caption: 'Six sections, one page. Fill these in and your case study is done.',
      },
      {
        type: 'steps',
        heading: 'Writing your first three',
        items: [
          {
            title: 'Pick your best three projects',
            description:
              'Choose projects where the result was clear and the client would be happy for you to write about them. Ideally, pick projects in different industries or with different types of work (a redesign, a new build, an SEO project) so each case study targets different keywords.',
            difficulty: 'easy',
            audience: 'anyone',
            time: '~15 min',
          },
          {
            title: 'Get the facts down',
            description:
              'For each project, write down the six elements: client type, problem, what you built, tools used, before/after, and outcomes. If you can\'t remember exact numbers, ask the client or use rough estimates. "Enquiries roughly doubled in the first two months" is better than nothing.',
            difficulty: 'easy',
            audience: 'anyone',
            time: '~30 min each',
          },
          {
            title: 'Structure each page with a clear title',
            description:
              'Use a title that includes the type of work, the industry, and the location. This gives Google a clear keyword signal and tells potential clients exactly what they\'re about to read.',
            difficulty: 'easy',
            audience: 'anyone',
            time: '~10 min each',
            example: {
              sample: 'Website Redesign for Melbourne Physiotherapy Clinic',
            },
          },
          {
            title: 'Add screenshots or real metrics',
            description:
              'A before-and-after screenshot of the old vs new site is the easiest visual to include. If you have analytics access, add a graph showing traffic before and after launch. Even a simple "went from page 5 to page 1 for their main keyword" is powerful. Real evidence beats polished marketing copy every time.',
            difficulty: 'medium',
            audience: 'anyone',
            time: '~30 min each',
          },
          {
            title: 'Publish and link from your other pages',
            description:
              'Add each case study to your portfolio page. Link to them from your services page where relevant — if a case study is about a website redesign, link to it from the section of your services page that talks about redesigns. These internal links help Google find the new pages and help visitors navigate to the proof they need.',
            difficulty: 'easy',
            audience: 'anyone',
            time: '~15 min',
          },
        ],
      },
      {
        type: 'list',
        heading: 'Case study titles that work',
        intro: 'Your title is the first thing Google and readers see. Include the type of work, the industry, and ideally the location or result. Here are examples:',
        items: [
          '"Website Redesign for Melbourne Small Business" — location + service + client type',
          '"AI Chatbot Setup That Reduced Response Time by 60%" — service + measurable result',
          '"SEO-Focused Rebuild for Local Service Business" — technique + client type',
          '"From Invisible to Page One: A Melbourne Cafe\'s New Website" — story-driven with location',
          '"How a Melbourne Tradie Got 3x More Enquiries With a Simple Website" — outcome-driven with audience',
        ],
        outro: 'Notice each title reads like a mini-pitch. Someone searching for "website redesign Melbourne small business" could land directly on that case study from Google.',
      },
      {
        type: 'text',
        heading: 'What changes after this',
        body: `Each case study is a new landing page for a search query competitors aren't targeting. When someone lands on a case study about a business like theirs, the sales conversation is half done before they reach out. Three is the minimum. Five is better. Keep adding them.`,
      },
      {
        type: 'next',
        heading: 'Next on the climb',
        items: [
          'Write your first case study this week. Pick the project with the clearest before-and-after story and start with the six elements.',
          'Link each published case study from your portfolio page and the relevant section of your services page.',
          'Next up: content clusters. We go deeper on your most important service topic so Google stops seeing you as a generalist and starts seeing you as the expert.',
        ],
      },
    ],
  },
  {
    id: 11,
    step: 11,
    slug: '11-topical-authority',
    chapter: 'authority',
    overallDifficulty: 'medium',
    title: 'Build Topical Authority Around Your Services',
    summary:
      'One mention of "AI" on your homepage doesn\'t make you an AI expert in Google\'s eyes. You need a cluster of related pages that prove you actually know the subject.',
    sections: [
      {
        type: 'text',
        heading: 'Why this matters',
        body: `To rank for "AI chatbot for small business," one page mentioning it isn't enough. Google compares you against competitors with ten pages about AI. They look like experts; you mentioned it once. That gap is topical authority. The fix isn't harder — it's just more pages about the same topic.`,
      },
      {
        type: 'text',
        heading: 'What a content cluster looks like',
        body: `One main service page (the "pillar") surrounded by 3–5 supporting articles on specific angles. Every article links back to the pillar; the pillar links to each article. Google crawls the cluster and sees a web of connected content about one topic. It starts ranking your pillar page higher.`,
      },
      {
        type: 'diagram',
        heading: 'How a cluster connects',
        body: 'Your pillar page sits at the centre. Supporting articles link back to it, and the pillar links out to each one. Google crawls the whole web of content and concludes you know this topic.',
        component: 'ContentClusterDiagram',
        caption: 'One pillar page, five supporting articles, all linked together.',
      },
      {
        type: 'list',
        heading: 'Example cluster: AI services',
        intro: 'Here\'s a real example using AI services as the pillar topic. Your main AI service page is the centre. These five supporting articles link back to it:',
        items: [
          '"What Is an AI Chatbot for Small Business?" — explains the concept for business owners who\'ve heard the buzzword but don\'t know what it actually does',
          '"Best AI Features to Add to a Business Website" — a practical list that positions you as the person who knows which features are worth it',
          '"AI Automation Ideas for Melbourne Service Businesses" — local + niche, targets business owners in your area searching for ideas',
          '"How AI Can Improve Lead Generation on a Website" — outcome-focused, attracts people searching for solutions to a specific problem',
          '"Website vs Chatbot vs Automation: What Should a Small Business Buy First?" — comparison article that catches people early in their research',
        ],
        outro: 'Each article targets a different search query. Together, they tell Google your site is the go-to resource for AI and small business — not just a freelancer who added the word "AI" to their homepage once.',
      },
      {
        type: 'steps',
        heading: 'Building your first cluster',
        items: [
          {
            title: 'Pick your most important service page',
            description:
              'This is the page you most want to rank for. It might be your AI services page, your web design page, or your SEO page. Whatever it is, this becomes the pillar — the centre of your cluster.',
            difficulty: 'easy',
            audience: 'anyone',
            time: '~5 min',
          },
          {
            title: 'List 3–5 questions your clients ask about that service',
            description:
              'Think about the conversations you have with potential clients. What do they ask before they hire you? "What actually is a chatbot?", "How much does it cost?", "Is it worth it for a small business?" Each question is a potential supporting article.',
            difficulty: 'easy',
            audience: 'anyone',
            time: '~15 min',
          },
          {
            title: 'Write each one as its own page or blog post',
            description:
              'Each article should be 500–1000 words of plain, useful content that answers one specific question. Don\'t stuff keywords — just answer the question the way you\'d explain it to a client over coffee. Use your city name naturally where it fits.',
            difficulty: 'medium',
            audience: 'anyone',
            time: '~2 hours each',
          },
          {
            title: 'Link every supporting page back to the main service page',
            description:
              'At the end of each article (or wherever it fits naturally), add a link back to your pillar page. Something like "If you want to see how we set this up for businesses, visit our AI services page." This tells Google that your service page is the authority on this topic.',
            difficulty: 'easy',
            audience: 'anyone',
            time: '~5 min each',
          },
          {
            title: 'Link the service page out to each supporting article',
            description:
              'Update your pillar page to mention and link to each supporting article. A section like "Learn more about AI for your business" with links to each article works well. Now Google can crawl the entire cluster from any entry point.',
            difficulty: 'easy',
            audience: 'anyone',
            time: '~15 min',
          },
        ],
      },
      {
        type: 'text',
        heading: 'Why this works better than one big page',
        body: `Why not one long page? Because Google prefers pages that answer one specific question well. A 500-word article about "what is an AI chatbot" outranks a 5000-word page mentioning chatbots in paragraph twelve. Each article also ranks for its own keyword. Five pages = five chances to appear. The cluster multiplies your authority.`,
      },
      {
        type: 'text',
        heading: 'What changes after this',
        body: `Your main service page ranks for competitive terms it couldn't reach alone. Each article catches long-tail queries from people actively researching your service. The cluster compounds — every new article strengthens the whole group. You shift from "we offer AI services" to "we are the AI resource in Melbourne."`,
      },
      {
        type: 'next',
        heading: 'Next on the climb',
        items: [
          'Pick the service you want to be known for. Write your first supporting article this week — start with the question your clients ask most often.',
          'After publishing three supporting articles, update your pillar service page to link to all of them.',
          'Next on the climb, we stop settling for one blue link. Step 12 is about earning sitelinks — those nested links Google adds under the big brands so their result fills half the screen.',
        ],
      },
    ],
  },
  {
    id: 12,
    step: 12,
    slug: '12-earn-google-sitelinks',
    chapter: 'coverage',
    overallDifficulty: 'medium',
    title: 'Earn Sitelinks Under Your Google Result',
    summary: `Search a big brand and you don't get one link — you get a stack of them: Home, Services, Contact, Reviews. That stack is called sitelinks, and you can't buy them. You earn them.`,
    sections: [
      {
        type: 'text',
        heading: 'Why this matters',
        body: `A normal Google result is one blue link, one URL, two lines of text. A result with sitelinks is a small menu of your whole site — six clickable links, sometimes with their own descriptions. It takes up two or three times more space, pushes competitors below the fold, and quietly tells anyone watching that Google trusts you. Same ranking, completely different result.`,
      },
      {
        type: 'text',
        heading: `You can't add them — only earn them`,
        body: `There's no setting in Google. No piece of code you paste in. No schema markup that turns sitelinks on. Google decides automatically, and it only decides yes when it's confident about two things: who you are, and how your site is laid out. Everything below is about giving Google enough signals that the answer becomes obvious.`,
      },
      {
        type: 'steps',
        heading: 'What makes Google show sitelinks',
        items: [
          {
            title: 'Win your own brand search first',
            description: `Sitelinks almost only appear when someone searches your brand name and you're the #1 result. If Google still isn't sure your brand is yours, go back to Step 02 and finish that fight first. No brand authority, no sitelinks.`,
            difficulty: 'medium',
            audience: 'anyone',
            time: '~30 min',
          },
          {
            title: 'Keep your main navigation small and stable',
            description: `Google looks at your top nav as the strongest hint about your most important pages. Aim for 5–7 items: Home, Services, Portfolio, About, Contact. Don't change them every month. The more stable and obvious your nav, the more confident Google is about which links to surface.`,
            difficulty: 'easy',
            audience: 'anyone',
            time: '~15 min',
          },
          {
            title: 'Use descriptive link text everywhere',
            description: `"Click here" tells Google nothing. "Rolex servicing in Melbourne" tells Google exactly what that page is about. Every internal link on your site should describe its destination in plain words. Those descriptions are the candidate text for your future sitelinks.`,
            difficulty: 'easy',
            audience: 'anyone',
            time: '~30 min',
          },
          {
            title: 'Use logical, readable URLs',
            description: `/services/web-design beats /page?id=42. URLs that read like a sentence help Google group your pages into a structure it can show off. If your URLs are messy, fix them once now and set up redirects from the old ones — your hosting provider has a guide for this.`,
            difficulty: 'medium',
            audience: 'developer',
            time: '~45 min',
          },
          {
            title: 'Submit your sitemap and keep page titles unique',
            description: `In Google Search Console, submit your sitemap.xml so Google has the full map of your site. Then make sure every page has its own unique <title> tag — no two pages with the same title. Duplicate titles confuse Google and kill sitelink chances.`,
            difficulty: 'medium',
            audience: 'developer',
            time: '~30 min',
          },
        ],
      },
      {
        type: 'text',
        heading: 'If Google picks the wrong sitelinks',
        body: `Sometimes Google chooses something weird — an old privacy policy, a stray tag page. You can't add sitelinks, but you can demote ones you don't like. Open Search Console, find the URL you don't want, and tell Google to deprioritise it. Within a week or two it usually disappears and a better page takes its place.`,
      },
      {
        type: 'text',
        heading: 'What changes after this',
        body: `Your brand result stops looking like everyone else's and starts looking like a small menu of your business. Click-through rate climbs because there are more entry points. Competitors below you get visually buried. The result feels official — and feeling official is half the battle in winning a stranger's first click.`,
      },
      {
        type: 'next',
        heading: 'Next on the climb',
        items: [
          `Reading the theory is one thing. In Step 13 we walk through how we actually applied this checklist to onraistudio.com — what we audited, what was already in good shape, and the one thing we found broken.`,
          `If you have your own site, you can copy the same audit straight off Step 13 and run it yourself in an afternoon.`,
        ],
      },
    ],
  },
  {
    id: 13,
    step: 13,
    slug: '13-applying-sitelinks-to-our-site',
    chapter: 'coverage',
    overallDifficulty: 'easy',
    title: `How We're Earning Our Own Sitelinks`,
    summary: `Step 12 explained what makes Google show sitelinks. This step is the worked example — the actual changes we made to onraistudio.com so Google starts giving us the same treatment. If you have your own site, you can copy this checklist directly.`,
    sections: [
      {
        type: 'text',
        heading: 'Why this matters',
        body: `It's one thing to read the theory of how sitelinks work. It's another to see it done on a real site. So we audited Onrai Studio against the five things Google looks for in Step 12, fixed what was missing, and wrote it up. Most of what Google needs is small, technical, and boring — but skipping any one of them is enough to keep your search result stuck as a single blue link forever.`,
      },
      {
        type: 'text',
        heading: 'How we audited the site',
        body: `We took each of the five Step 12 signals — brand search, nav structure, link text, URL shape, and sitemap/titles — and walked through the whole site asking "is this true for us, and if not, what's the smallest fix?" Four of the five were already in good shape from earlier steps. One had a real gap. Here's what we found, in order.`,
      },
      {
        type: 'steps',
        heading: 'What we checked, and what we changed',
        items: [
          {
            title: `Signal 1 — Are we winning our own brand search?`,
            description: `This is Step 02's job, and it's already in motion. "Onrai" is a unique enough name that there's nothing for Google to confuse us with. No change needed here, but it's the foundation everything else builds on. If we hadn't done Step 02 first, none of the other signals would matter.`,
            difficulty: 'easy',
            audience: 'anyone',
            time: 'already done',
          },
          {
            title: `Signal 2 — Is our nav small, stable, and descriptive?`,
            description: `We checked the navbar: Services, Packages, Portfolio, AI, About, The Climb, plus a "Get a Quote" button. That's six items inside Google's recommended 5–7 range, every label is a real word (no icons, no acronyms), and we haven't reshuffled it in months. No change needed — but worth double-checking the next time someone wants to add a seventh menu item.`,
            difficulty: 'easy',
            audience: 'anyone',
            time: 'already done',
          },
          {
            title: `Signal 3 — Are our internal links written like sentences?`,
            description: `We grep'd the whole codebase for link text like "click here", "read more", "learn more", and "more →". Zero hits in actual UI. Every internal link on the site already describes where it goes ("See our work", "Read the Elusive Racing case study", "Get a quote"). Google treats those phrases as the candidate text for future sitelinks, so this matters more than it looks.`,
            difficulty: 'easy',
            audience: 'developer',
            time: 'already done',
          },
          {
            title: `Signal 4 — Are our URLs readable and logical?`,
            description: `We listed every route: /, /services, /packages, /portfolio, /portfolio/elusive-racing, /ai, /about, /the-climb, /the-climb/12-earn-google-sitelinks, /contact. No query strings, no IDs like ?page=42, no random hashes. A human can read any URL and guess what's on the page. That's exactly what Google wants.`,
            difficulty: 'easy',
            audience: 'developer',
            time: 'already done',
          },
          {
            title: `Signal 5 — Is the sitemap up to date and are titles unique?`,
            description: `Here's where we found the gap. We'd just added Steps 12 and 13 to The Climb, but public/sitemap.xml hadn't been updated — meaning Google had no way to discover them. We added both new URLs with today's lastmod and resubmitted the sitemap in Search Console. We also walked every <title> tag in the pages folder and confirmed they're all unique and descriptive (e.g. "Packages — What You Get at Every Tier | Onrai Studio").`,
            difficulty: 'medium',
            audience: 'developer',
            time: '~10 min',
          },
        ],
      },
      {
        type: 'list',
        heading: 'The same checklist for your site',
        intro: `If you want to do this on your own site, here's the audit in order. Most small business sites pass the first four and fail the fifth — the sitemap is almost always stale.`,
        items: [
          `Search your brand name on Google. Are you the #1 result for it? If not, finish Step 02 first.`,
          `Open your site and count your top-nav items. Five to seven is the sweet spot. More than that, trim it.`,
          `Check that every nav label is a real, descriptive word — not an icon, abbreviation, or jargon term.`,
          `Search your codebase (or page source) for "click here", "read more", and "more". Replace each one with text that describes the destination.`,
          `Walk through your URLs. Are they readable like a sentence (/services/web-design) or messy (/page?id=42)? Fix the messy ones with redirects.`,
          `Open your sitemap.xml in a browser. Does it list every page that should be public? Are the dates recent? If not, regenerate it and resubmit it in Search Console.`,
          `Open every public page and check the <title> tag. Each one should be unique, descriptive, and end with your brand name.`,
        ],
        outro: `Each item is small. The compounding effect is what gets Google to start showing you sitelinks within a few weeks of your next big crawl.`,
      },
      {
        type: 'text',
        heading: 'What changes after this',
        body: `On its own, this audit doesn't immediately upgrade our search result — Google still has to recrawl, re-evaluate, and decide. But it removes every excuse Google had for keeping us at one blue link. Over the next few weeks, every signal we cleaned up makes the sitelinks upgrade more likely. The point isn't to game anything; it's to stop accidentally hiding a clean, well-structured site behind a sloppy sitemap.`,
      },
      {
        type: 'next',
        heading: 'Next on the climb',
        items: [
          `Set a reminder to Google "Onrai Studio" in a month and screenshot the result. Compare it to a screenshot from today. The difference is the proof.`,
          `If sitelinks haven't appeared after a month, the most common culprit is a Search Console "Sitelinks demotions" entry quietly killing them. Worth checking.`,
          `This is the last planned step on The Climb for now. From here it's execution — keep collecting reviews, keep publishing, keep checking Search Console. The foundation is built. Everything from here compounds.`,
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
