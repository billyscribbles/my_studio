import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useLayoutEffect, lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import LegalPage from './pages/LegalPage'

// Retry a lazy import once, then force a full reload if the chunk is gone.
// Prevents white-page on stale tabs after a redeploy (ChunkLoadError).
const RELOAD_KEY = 'onrai:chunk-reloaded'
function lazyWithRetry(factory) {
  return lazy(() =>
    factory().catch((err) => {
      const alreadyReloaded = sessionStorage.getItem(RELOAD_KEY) === '1'
      if (!alreadyReloaded) {
        sessionStorage.setItem(RELOAD_KEY, '1')
        window.location.reload()
        return new Promise(() => {}) // suspend until reload
      }
      sessionStorage.removeItem(RELOAD_KEY)
      throw err
    })
  )
}

if (typeof window !== 'undefined') {
  window.addEventListener('load', () => {
    sessionStorage.removeItem(RELOAD_KEY)
  })
}

const AboutPage = lazyWithRetry(() => import('./pages/AboutPage'))
const ServicesPage = lazyWithRetry(() => import('./pages/ServicesPage'))
const PortfolioPage = lazyWithRetry(() => import('./pages/PortfolioPage'))
const CaseStudyElusiveRacing = lazyWithRetry(() => import('./pages/CaseStudyElusiveRacing'))
const CaseStudySoftFlorals = lazyWithRetry(() => import('./pages/CaseStudySoftFlorals'))
const CaseStudySaharaCaravans = lazyWithRetry(() => import('./pages/CaseStudySaharaCaravans'))
const ContactPage = lazyWithRetry(() => import('./pages/ContactPage'))
const AIPage = lazyWithRetry(() => import('./pages/AIPage'))
const PackagesPage = lazyWithRetry(() => import('./pages/PackagesPage'))
const TheClimbPage = lazyWithRetry(() => import('./pages/TheClimbPage'))
const TheClimbStepPage = lazyWithRetry(() => import('./pages/TheClimbStepPage'))
const NotFoundPage = lazyWithRetry(() => import('./pages/NotFoundPage'))

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
  }, [])
  useLayoutEffect(() => {
    if (hash) return
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    // Keep forcing scroll to top while the page height changes — covers
    // lazy-loaded route chunks that mount after the initial scroll.
    const observer = new ResizeObserver(() => window.scrollTo({ top: 0, left: 0, behavior: 'instant' }))
    observer.observe(document.documentElement)
    const stop = setTimeout(() => observer.disconnect(), 1000)
    return () => {
      observer.disconnect()
      clearTimeout(stop)
    }
  }, [pathname, hash])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/portfolio/elusive-racing" element={<CaseStudyElusiveRacing />} />
          <Route path="/portfolio/soft-florals" element={<CaseStudySoftFlorals />} />
          <Route path="/portfolio/sahara-caravans" element={<CaseStudySaharaCaravans />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/ai" element={<AIPage />} />
          <Route path="/packages" element={<PackagesPage />} />
          <Route path="/the-climb" element={<TheClimbPage />} />
          <Route path="/the-climb/:slug" element={<TheClimbStepPage />} />
          <Route path="/privacy" element={<LegalPage type="privacy" />} />
          <Route path="/terms" element={<LegalPage type="terms" />} />
          <Route path="/agreement" element={<LegalPage type="agreement" />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  )
}
