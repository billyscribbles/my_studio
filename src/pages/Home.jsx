import { Helmet } from 'react-helmet-async'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import Services from '../components/Services'
import Industries from '../components/Industries'
import AIFeatures from '../components/AIFeatures'
import HowItWorks from '../components/HowItWorks'
import Shop from '../components/Shop'
import Portfolio from '../components/Portfolio'
import TechStack from '../components/TechStack'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import Contact from '../components/Contact'

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Do you work with existing sites or only new builds?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — rebuilds are one of our most common projects. We audit your existing site and modernise it without starting from zero.' } },
    { '@type': 'Question', name: 'How long does a typical project take?', acceptedAnswer: { '@type': 'Answer', text: 'Most projects run 2–8 weeks depending on scope. We\'ll give you a clear timeline before we start.' } },
    { '@type': 'Question', name: 'Do you offer ongoing support after launch?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We offer retainer packages for ongoing updates, new features, and technical support.' } },
    { '@type': 'Question', name: 'Can you work with our existing developer or team?', acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. We\'re comfortable working alongside in-house teams or other agencies.' } },
    { '@type': 'Question', name: 'What do you need from us to get started?', acceptedAnswer: { '@type': 'Answer', text: 'A brief overview of your goals, your existing site if you have one, and a budget range. We handle the rest.' } },
    { '@type': 'Question', name: 'Do you handle hosting and deployment?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We deploy to Railway, Vercel, or your preferred host and hand over full access.' } },
    { '@type': 'Question', name: 'Can you integrate with our existing tools like CRM and email?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — we integrate with most major tools including HubSpot, Mailchimp, Klaviyo, and more.' } },
    { '@type': 'Question', name: 'What makes you different from a regular agency?', acceptedAnswer: { '@type': 'Answer', text: 'We\'re a lean, technical studio. No account managers or inflated fees — just senior-level work delivered directly.' } },
  ],
}

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Melbourne Web Design & Development — Onrai Studio</title>
        <meta name="description" content="Onrai Studio is a Melbourne web design and development studio. We build fast, modern websites that get local and small Melbourne businesses found on Google. Web design, SEO, eCommerce & AI chatbots." />
        <link rel="canonical" href="https://onraistudio.com/" />
        <meta property="og:url" content="https://onraistudio.com/" />
        <meta property="og:title" content="Melbourne Web Design & Development — Onrai Studio" />
        <meta property="og:description" content="We build fast, modern websites that get Melbourne businesses found on Google. Melbourne-based web design studio." />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <main>
      <Hero />
      <Stats />
      <Services />
      <Industries />
      <AIFeatures />
      <HowItWorks />
      <Shop />
      <Portfolio />
      <TechStack />
      <Testimonials />
      <FAQ />
      <Contact />
    </main>
    </>
  )
}
