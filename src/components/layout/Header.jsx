import { useState, useEffect } from 'react'
import { HiBars3, HiXMark } from 'react-icons/hi2'
import Container from '../ui/Container'
import Button from '../ui/Button'
import { navLinks } from '../../data/navigation'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass-strong py-3 shadow-2xl shadow-black/20' : 'bg-transparent py-5'
      }`}
    >
      <Container className="flex items-center justify-between">
        <a
          href="#hero"
          className="group flex items-center gap-2.5 font-display text-lg font-bold text-white"
          aria-label="NorthPeak Digital — Home"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-accent-cyan text-sm font-extrabold text-white shadow-lg shadow-accent/30 transition-transform group-hover:scale-105">
            NP
          </span>
          <span className="hidden sm:inline">NorthPeak Digital</span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-400 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="#contact" size="sm">
            Start a Project
          </Button>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-xl text-slate-300 transition-colors hover:bg-white/10 hover:text-white lg:hidden"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <HiXMark className="h-6 w-6" /> : <HiBars3 className="h-6 w-6" />}
        </button>
      </Container>

      <nav
        id="mobile-nav"
        className={`overflow-hidden border-t border-white/10 transition-all duration-300 lg:hidden ${
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 border-transparent'
        }`}
        aria-label="Mobile navigation"
        aria-hidden={!mobileOpen}
      >
        <Container className="flex flex-col gap-1 py-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              tabIndex={mobileOpen ? 0 : -1}
              className="rounded-xl px-4 py-3 text-base font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <Button href="#contact" className="mt-3 w-full" onClick={() => setMobileOpen(false)}>
            Start a Project
          </Button>
        </Container>
      </nav>
    </header>
  )
}
