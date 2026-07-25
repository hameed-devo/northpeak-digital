import { lazy, Suspense } from 'react'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'

const Services = lazy(() => import('./components/sections/Services'))
const Results = lazy(() => import('./components/sections/Results'))
const Testimonials = lazy(() => import('./components/sections/Testimonials'))
const Pricing = lazy(() => import('./components/sections/Pricing'))
const FAQ = lazy(() => import('./components/sections/FAQ'))
const Contact = lazy(() => import('./components/sections/Contact'))

function SectionFallback({ id }) {
  return <div id={id} className="section-padding min-h-[40vh]" aria-hidden="true" />
}

export default function App() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>

      <Header />

      <main id="main-content">
        <Hero />

        <Suspense fallback={<SectionFallback id="services" />}>
          <Services />
          <Results />
          <Testimonials />
          <Pricing />
          <FAQ />
          <Contact />
        </Suspense>
      </main>

      <Footer />
    </>
  )
}
