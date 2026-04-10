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
            description: `Remember the business card we added back in Step 02 — the invisible bit that tells Google your name, location, and contact details? Open it up and check that the city, state, and country are all named, and that the "areas you serve" list mentions the city too. Ours already did, so there was nothing to fix — but most templates leave this generic, so check yours. A two-minute edit here gives Google a strong signal that lives outside the noise of body copy.`,
            difficulty: 'medium',
            time: '~15 min',
          },
          {
            title: 'A local testimonial in the first slot',
            description: `Look at the testimonials on your homepage. Is the first one a customer from your city? If not, reorder them so the local one comes first. People scan testimonials top to bottom and stop early — and the first name a reader sees sets the tone. Don't make up fake quotes to inflate the count, and don't relabel out-of-town clients as local. A genuine mix that leads with a local name is honest and effective. Here's the reorder we made:`,
            difficulty: 'easy',
            time: '~10 min',
            example: {
              before: 'First card: Brisbane electrician. Melbourne café in slot two.',
              after: 'First card: Melbourne café. Brisbane and Sydney follow.',
            },
          },
          {
            title: 'Tag your portfolio projects with where the client was based',
            description: `Walk through your portfolio or case-studies page and add a small location tag next to each project — "Melbourne", "Sydney", "Brisbane", "Remote". Two reasons. First, readers scan for "people like me" and a local tag stops them in their tracks. Second, the page quietly becomes a cluster of local proof without you having to write a word of new copy. While you're there, take one more pass at the portfolio hero line and drop the city in if it fits naturally:`,
            difficulty: 'medium',
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
  {
    id: 5,
    step: 5,
    slug: '05-trust-signals',
    chapter: 'trust',
    title: 'Looking Like a Real Business (Because You Are One)',
    summary: `Google's quality checkers — and every customer who lands on your site — ask the same question in the first three seconds: "is this a real business, or just a page?" The fix isn't to fake anything. It's to surface the things that are already true, in the places people actually look. Here's the checklist we ran on our own site, and the edits we're making because of it.`,
    sections: [
      {
        type: 'text',
        heading: 'Why this matters',
        body: `This one's personal. We didn't write this entry to teach you how to look legit — we wrote it because we want the fact that we are legit to show up on the page. That's the whole rule for this chapter: don't invent anything, just make the truth visible. Google's quality checkers and real customers run exactly the same mental checklist when they land on a small business website. Who runs this? Where are they? How do I contact them? Is there anyone else on the internet who corroborates that they exist? If the answers aren't visible in the first few seconds, both the human and the algorithm move on. The good news is that all the missing bits are usually already true in real life — they're just hiding off-page. This step is about pulling them out where they belong.`,
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
            description: `Our About page right now says "We build websites for real businesses." Nice line, but anonymous. The hidden business card we set up in Step 02 already tells Google who runs the studio — but the page a human actually reads doesn't say so out loud. That's a gap, because every visitor who gets to the About page is already looking for a face. We're fixing it by adding one short paragraph: a name, why the studio exists, one real story. A name is a trust signal. A face is a bigger one. On your own site, do the same: if there's a founder, put them on the page. One sentence is better than nothing.`,
            difficulty: 'easy',
            time: '~15 min',
            example: {
              before: 'We build websites for real businesses.',
              after: `We build websites for real businesses. I started Onrai Studio after watching too many small businesses pay big-agency prices for slow, generic work. This studio is the version I wish they'd had.`,
            },
          },
          {
            title: 'Link your profiles in the hidden business card',
            description: `Remember the hidden business card from Step 02 — the invisible piece of code that tells Google your name and location? It has a slot called "sameAs" that's just a list of links to your profiles on other sites. Google uses it to confirm the same business exists in more than one place on the internet. Ours was empty. It's the cheapest corroboration signal you can give yourself. Grab the URLs of every profile that actually represents your business and paste them in. Skip anything you don't plan to keep alive — a dead LinkedIn page is a worse signal than no LinkedIn page.`,
            difficulty: 'medium',
            time: '~10 min',
            example: {
              before: '"sameAs": []',
              after: '"sameAs": ["https://www.linkedin.com/company/onrai-studio", "https://www.instagram.com/onraistudio"]',
            },
          },
          {
            title: 'Show your ABN in the footer (if you have one)',
            description: `In Australia, an ABN is the single clearest "I'm a registered business" badge there is. One small line under the copyright in your footer, and it's done — and because the footer appears on every page of your site, one mention down there is all you need. Don't have one? Skip this step entirely. Faking an ABN is fraud, and the whole point of this chapter is surfacing the truth, not inventing new versions of it. (The number in our example below is a placeholder — we'll swap it for the real one before it ships.)`,
            difficulty: 'easy',
            time: '~2 min',
            example: {
              before: '© 2025 Onrai Studio. Built in Australia. All rights reserved.',
              after: '© 2025 Onrai Studio · ABN 00 000 000 000 · Built in Australia.',
            },
          },
          {
            title: 'Keep every number on your site current',
            description: `Open your homepage and your About page and read every number out loud. Project counts. Team size. Years in business. Response times. For each one, ask yourself a simple question: is that still true this month? Numbers on a website drift — you launch with a figure, six months go by, and nobody ever goes back to update it. A visitor can feel the difference between a number that's current and a number that's stale, even if they can't articulate why. The rule is the same as the rest of this chapter: the truth is the strongest signal you have, so keep it current. If a stat is hard to keep fresh, use qualitative language instead — "a growing portfolio", "a small team", "fast turnarounds" — and you'll never have to remember to update it.`,
            difficulty: 'easy',
            time: '~10 min',
          },
        ],
      },
      {
        type: 'list',
        heading: 'The off-site half nobody mentions',
        intro: `Here's the bit most SEO advice skips. Google doesn't just read your site — it reads the web around your site. When the same business name and details appear on LinkedIn, Instagram, a directory listing, and a Google Business Profile, all pointing back to the same domain, that's corroboration, and corroboration is trust. Four off-site things are worth having, in rough order of value:`,
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
        body: `The counter-rule, same shape as last chapter. Don't fake reviews — buying them is against Google's rules and they're getting very good at spotting them. Don't invent an office address. Don't paste stock-photo headshots onto an anonymous About page. Don't claim years of experience you don't have. Don't inflate the team count. Don't buy followers. The problem isn't the lie itself — it's that the moment one customer catches it, the trust is gone permanently, and negative search results about your business outrank positive ones for years. The whole point of Step 05 is subtraction of fake polish and addition of real detail. If you're tempted to inflate a number, shrink it instead. The smaller, truer version does more work.`,
      },
      {
        type: 'text',
        heading: 'What changes after this',
        body: `Three things start happening, quietly, over the following few weeks. Google's schema corroboration kicks in — the business starts to look real across the whole web, not just on one domain, which is one of the strongest trust signals the algorithm has. The bounce rate on your homepage drops, because the humans who land there now find the trust cues they were already scanning for and stick around. And the AI search tools that are increasingly quoting small businesses in their answers now have enough structured, linked-up detail to actually cite you. None of this needed new pages, new copy, or new features. It was all surfacing the truth you already had.`,
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
    title: 'Set Up a Google Business Profile (Only If You Qualify)',
    summary: `We've flagged Google Business Profile three times now. Here's the catch nobody mentions up front: it's not for every business. If you qualify, it's the single biggest local lever you'll ever pull. If you don't, forcing it can get you suspended. This step is the honest version — how to tell which side of the line you're on, and what to do once you're on it.`,
    sections: [
      {
        type: 'text',
        heading: 'Why this matters',
        body: `A Google Business Profile is the box that pops up on the right side of search results with your map pin, hours, photos, and reviews. It's also what feeds the local "map pack" — the three businesses Google shows above the regular results when someone types "near me" or names a city. For a small business that qualifies, nothing else on this list moves the needle as hard. For a business that doesn't qualify, trying to force one on is the fastest way to get a profile suspended and a domain flagged. So before any of the setup advice you'll read everywhere else, we have to do the part most guides skip: working out whether you should even be doing this.`,
      },
      {
        type: 'text',
        heading: 'The eligibility question (read this before anything else)',
        body: `Google's rule for Business Profile is short and strict. You qualify if you either meet customers face-to-face at a fixed address (a shop, a studio, a clinic), or if you travel to customers in a defined service area (a plumber, a mobile dog groomer, an in-home tutor). That's it. Purely remote businesses — agencies that only ever meet clients on Zoom, online stores with no pickup, software companies — do not qualify, full stop. The trap is that Google's setup wizard will happily let you create a profile anyway. It just gets suspended later, sometimes after you've already invested hours in it. So the first decision isn't "how do I set this up", it's "am I one of the two kinds of business this is for".`,
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
            description: `The single decision that haunts more business owners than any other: which email to sign up with. Don't use a personal Gmail you share with family. Don't use a brand-new throwaway you'll lose track of. Best option, if you have one, is a Workspace email at your own domain — hello@yourbusiness.com.au or similar — because it's a trust signal and it stays with the business when staff change. Second-best is a dedicated Gmail in the business name (yourbusiness.studio@gmail.com) that exists only for business admin. Whichever you pick, write the password down somewhere safe and add a recovery phone — losing access to a verified profile is a months-long nightmare. Then go to google.com/business, click "Manage now", and start the profile in your business name spelled exactly the way it appears on your website and invoices.`,
            difficulty: 'easy',
            time: '~15 min',
          },
          {
            title: 'Pick the primary category carefully',
            description: `Google asks for one primary category and lets you add a few secondary ones. The primary category is the single biggest factor in which searches you show up for, so don't pick the broadest option you see — pick the one that best matches what you actually do. "Web designer" is more specific than "Marketing consultant" and will match better for the searches you actually want. You can change it later, but every change resets some local trust, so try to get it right the first time.`,
            difficulty: 'medium',
            time: '~10 min',
          },
          {
            title: 'Handle the address question correctly',
            description: `This is the bit that trips most people up. First thing to know: yes, Google asks for an address during the signup wizard, and there's no way to skip the field. The question isn't whether you enter one, it's whether the public sees it. If you have a public storefront customers visit, enter your real street address and let it show — that's the whole point of the profile. If you're a service-area business or you work from home, enter your real address (your home is fine) and tick the "I deliver goods and services to my customers" option, which hides the address from the public profile and switches you to listing service areas instead. The address you entered stays private and is only used for verification and Google's internal records. For the public service area, add the actual suburbs or cities you serve — for us that's Melbourne and the surrounding metro suburbs, not every postcode in Victoria. Google is smart enough to surface you for nearby searches inside your stated area, and over-listing looks like spam. The honest, narrow answer outranks the greedy one almost every time. What you absolutely cannot do: use a PO box (Google rejects them), a virtual office or coworking address you don't actually work from, or a friend's address. Faking the address is the fastest way to a permanent ban, and bans follow the domain after the profile is gone.`,
            difficulty: 'easy',
            time: '~10 min',
          },
          {
            title: 'Verify the profile (this is the gate)',
            description: `Google will ask you to verify the business before the profile goes live. Depending on your category and country, that's a postcard to your address, a video call, or a video upload showing your workspace and any signage. Whichever method you get offered, do it properly the first time — failed verifications are the most common reason a profile sits in limbo for weeks. If you're a service-area business with no public address, expect a video verification, and have your laptop, your branded materials, and a calm five minutes ready.`,
            difficulty: 'medium',
            time: '~20 min',
          },
          {
            title: 'Upload photos that look like the real business',
            description: `The photos slot is the first thing a human sees when your knowledge panel pops up, and it's the part most owners under-invest in. You need three things, in this order. A square logo, at least 720×720, on a clean background — this becomes your tiny circular avatar everywhere. A cover photo, landscape, that represents the work you do (a project screenshot, your workspace, a finished build) — not a stock photo, not a generic skyline, not a quote on a beige background. And three to five "additional" photos that prove you're real: recent projects, your laptop on your desk, you at a client meeting if you have permission. Take them on a phone in good light. Real and slightly imperfect beats polished and generic every single time. Avoid stock photography entirely — Google's image-matching can spot it, and so can customers.`,
            difficulty: 'easy',
            time: '~20 min',
          },
          {
            title: 'Write a business description that sounds like a human',
            description: `You get 750 characters. Use them. Cover four things, in plain English: what you do, who you do it for, where you do it, and one specific reason a customer would pick you. Skip the keyword soup — Google reads your whole website for keywords, and stuffing this field doesn't add to that signal, it just makes the description painful to read. Don't open with "We are a leading..." Don't list every service in a comma-separated wall. Don't use the word "synergy". Write it the way you'd describe the business to a stranger at a barbecue, then tighten it. Here's the description we wrote for our own profile — same rules apply to yours:`,
            difficulty: 'medium',
            time: '~20 min',
            example: {
              sample: `Onrai Studio is a Melbourne-based web design and development studio for small and local businesses. We build fast, modern websites that help you get found on Google, look credible to first-time visitors, and turn that traffic into real customers. Every project is handled by a small team — no account managers, no handoffs. The studio works with clients across Melbourne and Australia.`,
            },
          },
          {
            title: 'Add services and hours honestly',
            description: `Google lets you list services as separate entries with their own one-sentence descriptions. Add the three or four you actually want to be known for — not every service you've ever done. Each service entry is another small surface where Google can match you to a search, so make them specific ("Local business websites", "AI chat assistants") rather than vague ("Consulting"). For hours, set the truth even if the truth is awkward. If you're appointment-only, set "by appointment" — Google supports it. If you don't work weekends, mark them closed. Customers trust a profile that says "Closed Sundays" more than one that claims 24/7 availability for a one-person studio. And the moment your hours change, update them. A profile that lies about being open at 9pm is a profile a customer remembers for the wrong reason.`,
            difficulty: 'easy',
            time: '~15 min',
          },
          {
            title: 'Ask real customers for real reviews',
            description: `Reviews are the part of the profile Google watches hardest, and the part most businesses get wrong by trying to game. The rule is the same as Step 05: don't fake anything. Send a short, friendly message to clients you've actually worked with, link them straight to your profile's review page, and ask them to share what the experience was like. Don't write the review for them. Don't offer a discount in exchange. Don't post a flood of reviews in the same week — that's the single most common pattern Google flags as fake. A handful of honest reviews trickling in over months beats twenty all at once.`,
            difficulty: 'medium',
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
        body: `Same shape as the last two chapters. Don't create a profile if you don't qualify — using a friend's address, your home address you don't actually meet clients at, or a virtual office is the fastest path to a permanent suspension, and once a profile is suspended the domain attached to it gets a black mark that's hard to clear. Don't stuff keywords into your business name field ("Onrai Studio Melbourne Web Design SEO") — Google's guidelines call it out by name and will strip the profile or suspend it. Don't buy reviews, don't trade reviews with other businesses, and don't ask staff or family to review you. The whole chapter has been about surfacing what's true. This step is the same: a real profile, for a real business, with real reviews from real customers, beats a polished fake every single time — and the fake gets caught.`,
      },
      {
        type: 'text',
        heading: 'What changes after this',
        body: `If you qualified and set the profile up properly, three things shift over the following weeks. You start showing up in the local map pack for searches that name your city or include "near me". Your knowledge panel — that box on the right of search results — fills out with your photos, hours, and reviews, which is a huge credibility cue for first-time visitors. And the schema work from Step 02 plus the off-site profiles from Step 05 plus this new Business Profile all start corroborating each other, which is exactly the cluster of signals Google's local algorithm is built to reward. If you didn't qualify and skipped this step, you didn't lose anything — you just avoided a trap most guides walk you straight into.`,
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
    title: 'Get Your Technical SEO Basics Perfect',
    summary:
      'Google already knows you exist. Now we make sure nothing on your site is quietly blocking it — broken sitemaps, missing HTTPS, slow pages. This is the plumbing check every site needs and almost no one does.',
    sections: [
      {
        type: 'text',
        heading: 'Why this matters',
        body: `Everything we've done so far — the schema, the local keywords, the trust signals — is content work. It's the paint job. This step is the engine check underneath. If your site loads slowly, blocks Google's crawler, or accidentally tells it "don't look at this page," all that content work goes to waste. The good news: most of these fixes take five minutes each, and you only do them once.`,
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
            time: '~15 min',
          },
          {
            title: 'Generate and submit your sitemap',
            description:
              'If you use WordPress, install a plugin like Yoast or Rank Math — they create the sitemap automatically. If you built your site with a framework like React or Next.js, you may need to create the file manually (it\'s just a list of URLs in XML format). Once the file exists at yoursite.com/sitemap.xml, paste that URL into Google Search Console under "Sitemaps" in the left menu.',
            difficulty: 'medium',
            time: '~20 min',
          },
          {
            title: 'Check your robots.txt',
            description:
              'Type yoursite.com/robots.txt into your browser. If the file says "Disallow: /" — that means you\'re blocking Google from your entire site. Remove that line. If the file is empty, missing, or just says "Allow: /" with a link to your sitemap, you\'re fine.',
            difficulty: 'easy',
            time: '~5 min',
          },
          {
            title: 'Hunt for accidental noindex tags',
            description:
              'Open each page of your site in a browser, right-click, and choose "View Page Source." Press Ctrl+F (or Cmd+F on Mac) and search for "noindex." If you find it, that page is invisible to Google on purpose — or by accident. If it\'s accidental, remove the tag and re-publish.',
            difficulty: 'medium',
            time: '~10 min',
          },
          {
            title: 'Test your mobile speed',
            description:
              'Go to Google\'s PageSpeed Insights tool and paste your homepage URL. It gives you a score out of 100 and flags what\'s slow. Green (90+) is great, orange (50–89) is okay, red (under 50) needs work. It also shows your Core Web Vitals — three scores called LCP (how fast the main content appears), CLS (how much the page jumps around while loading), and INP (how fast buttons respond when tapped).',
            difficulty: 'easy',
            time: '~5 min',
          },
          {
            title: 'Write proper title tags and meta descriptions',
            description:
              'Open each page and check the text that shows in the browser tab — that\'s the title tag. It should describe the page in under 60 characters and include your city if you\'re a local business. Then check the meta description (you set these in Step 03). Each one should be a unique, one-line pitch under 155 characters. No two pages should share the same title or description.',
            difficulty: 'easy',
            time: '~20 min',
          },
          {
            title: 'Add internal links between your pages',
            description:
              'Read through each page and look for places where you mention a topic that\'s covered on another page. Link those words to the other page. For example, if your About page mentions your services, link the word "services" to your Services page. This helps Google understand how your pages relate to each other and makes it easier for visitors to find what they need.',
            difficulty: 'easy',
            time: '~15 min',
          },
          {
            title: 'Add alt text to every image',
            description:
              'Find every image on your site and make sure it has alt text — a short description of what the image shows. This helps Google understand your images, and it\'s also what screen readers use for visitors who can\'t see them. Keep it simple and descriptive.',
            difficulty: 'easy',
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
        body: `Once the plumbing is clean, everything you've done in the previous steps compounds faster. Pages get indexed within hours instead of weeks. Your speed scores improve, which directly affects where Google ranks you on mobile. None of this is glamorous work, but it's the difference between a site that quietly stalls and one that keeps climbing.`,
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
    title: 'Learn to Use Google Search Console',
    summary:
      'Search Console is the free dashboard Google gives you to see exactly how your site appears in search. Most small businesses never open it. Here\'s how to use the five features that actually matter.',
    sections: [
      {
        type: 'text',
        heading: 'Why this matters',
        body: `Every fix you've made so far — the schema, the title tags, the sitemap — is invisible until you can confirm Google actually picked it up. Search Console is the only place that tells you directly. It shows which pages Google has indexed, which ones it's ignoring, what people search before they click your site, and whether anything is broken. Think of it as the dashboard for everything we've been building.`,
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
            time: '~2 min',
          },
          {
            title: 'Submit your sitemap',
            description:
              'Click "Sitemaps" in the left menu. Type your sitemap URL — usually yoursite.com/sitemap.xml — and click Submit. This hands Google your table of contents so it doesn\'t have to guess which pages exist. You only need to do this once. After that, Google re-reads it automatically whenever you add new pages.',
            difficulty: 'easy',
            time: '~3 min',
          },
          {
            title: 'Check which pages are indexed',
            description:
              'Click "Pages" under the Indexing section. You\'ll see two numbers: how many pages Google has indexed, and how many it excluded. Click the excluded list to see why — common reasons are accidental "noindex" tags, redirect chains, or duplicate content. If an important page is excluded, fix the cause and then use the URL inspection tool to request re-indexing.',
            difficulty: 'easy',
            time: '~5 min',
          },
          {
            title: 'See what people are searching to find you',
            description:
              'Click "Performance" in the left menu, then "Search Results." The Queries tab shows the exact words people typed into Google before your site appeared in their results. This is gold — it tells you what your audience actually looks for, in their own words. You can use those phrases in your page titles, headings, and content to match what real people are searching for.',
            difficulty: 'easy',
            time: '~5 min',
          },
          {
            title: 'Request re-indexing after a change',
            description:
              'Whenever you make a meaningful change to a page — update the title tag, add alt text to images, rewrite a section — paste that page\'s URL into the inspection bar and click "Request Indexing." Google re-crawls it within hours instead of waiting days or weeks for the next scheduled visit. This is how you make your fixes show up fast.',
            difficulty: 'easy',
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
        body: `Search Console turns all the invisible work from the previous steps into something you can see. You'll know which pages Google has found, which ones it's ignoring, and what real people are typing to find businesses like yours. Instead of guessing whether your SEO changes are working, you check a dashboard once a week and make decisions based on real data. That's the shift — from hoping to knowing.`,
      },
      {
        type: 'next',
        heading: 'Next on the climb',
        items: [
          `Log into Search Console and submit your sitemap if you haven't already. Then inspect your homepage — confirm it's indexed with no errors.`,
          `Set a weekly calendar reminder to check the Performance and Pages reports. Five minutes, same day each week.`,
          `The next step moves from infrastructure to content strategy — what to actually write about so that Google sends you the right visitors, not just any visitors.`,
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
