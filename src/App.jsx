import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Services from './components/Services'
import About from './components/About'
import Industries from './components/Industries'
import AIFeatures from './components/AIFeatures'
import HowItWorks from './components/HowItWorks'
import Shop from './components/Shop'
import Portfolio from './components/Portfolio'
import TechStack from './components/TechStack'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <About />
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
      <Footer />
    </>
  )
}
