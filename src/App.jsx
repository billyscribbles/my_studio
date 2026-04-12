import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useLayoutEffect, lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'

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
const ContactPage = lazyWithRetry(() => import('./pages/ContactPage'))
const AIPage = lazyWithRetry(() => import('./pages/AIPage'))
const PackagesPage = lazyWithRetry(() => import('./pages/PackagesPage'))
const TheClimbPage = lazyWithRetry(() => import('./pages/TheClimbPage'))
const TheClimbStepPage = lazyWithRetry(() => import('./pages/TheClimbStepPage'))
const LegalPage = lazyWithRetry(() => import('./pages/LegalPage'))
const NotFoundPage = lazyWithRetry(() => import('./pages/NotFoundPage'))

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
  }, [])
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
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
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/ai" element={<AIPage />} />
          <Route path="/packages" element={<PackagesPage />} />
          <Route path="/the-climb" element={<TheClimbPage />} />
          <Route path="/the-climb/:slug" element={<TheClimbStepPage />} />
          <Route path="/privacy" element={<LegalPage type="privacy" />} />
          <Route path="/terms" element={<LegalPage type="terms" />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  )
}
