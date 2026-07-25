import { HiArrowRight, HiPlay } from 'react-icons/hi2'
import Container from '../ui/Container'
import Button from '../ui/Button'
import { heroStats } from '../../data/navigation'
import HeroShowcase from './HeroShowcase'
import LogoMarquee from './LogoMarquee'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-28 pb-8 lg:pt-32 lg:pb-12"
      aria-labelledby="hero-heading"
    >
      {/* Aurora background — pure CSS for performance */}
      <div className="hero-aurora pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="hero-aurora-blob hero-aurora-blob-1" />
        <div className="hero-aurora-blob hero-aurora-blob-2" />
        <div className="hero-aurora-blob hero-aurora-blob-3" />
        <div className="hero-grid absolute inset-0" />
      </div>

      <Container className="relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          {/* Copy */}
          <div className="hero-fade-up mx-auto max-w-xl text-center lg:mx-0 lg:max-w-none lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-slate-300 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-cyan opacity-40" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-cyan" />
              </span>
              Now accepting Q3 projects
            </span>

            <h1
              id="hero-heading"
              className="mt-8 font-display text-[2.5rem] font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl xl:text-[4.25rem]"
            >
              Digital experiences
              <br />
              <span className="text-gradient-accent">worth every pixel.</span>
            </h1>

            <p className="mt-6 text-base leading-relaxed text-slate-400 sm:text-lg lg:max-w-md">
              NorthPeak Digital crafts premium websites and commerce experiences
              for brands that refuse to blend in.
            </p>

            <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <Button href="#contact" size="lg">
                Start Your Project
                <HiArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
              <Button href="#services" variant="secondary" size="lg">
                <HiPlay className="h-4 w-4" aria-hidden="true" />
                View Our Work
              </Button>
            </div>

            <dl className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
              {heroStats.map((stat, i) => (
                <div
                  key={stat.label}
                  className="hero-fade-up rounded-xl border border-white/10 bg-white/[0.03] px-3 py-4 text-center lg:text-left"
                  style={{ animationDelay: `${0.4 + i * 0.08}s` }}
                >
                  <dt className="font-display text-xl font-bold text-white sm:text-2xl">
                    {stat.value}
                  </dt>
                  <dd className="mt-0.5 text-[11px] leading-snug text-slate-500 sm:text-xs">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Showcase */}
          <div className="hero-fade-up lg:justify-self-end" style={{ animationDelay: '0.2s' }}>
            <HeroShowcase />
          </div>
        </div>

        <LogoMarquee />
      </Container>
    </section>
  )
}
