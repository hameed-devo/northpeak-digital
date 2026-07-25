import {
  FaLinkedinIn,
  FaXTwitter,
  FaInstagram,
  FaDribbble,
} from 'react-icons/fa6'
import Container from '../ui/Container'
import { navLinks } from '../../data/navigation'

const socialLinks = [
  { icon: FaLinkedinIn, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: FaXTwitter, href: 'https://x.com', label: 'X (Twitter)' },
  { icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: FaDribbble, href: 'https://dribbble.com', label: 'Dribbble' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-navy-950 pt-16 pb-8">
      <Container>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <a
              href="#"
              className="flex items-center gap-2.5 font-display text-lg font-bold text-white"
              aria-label="NorthPeak Digital — Home"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-accent-cyan text-sm font-extrabold text-white">
                NP
              </span>
              NorthPeak Digital
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              We craft premium digital experiences that drive growth. From strategy
              to launch, we partner with ambitious brands to build what&apos;s next.
            </p>
            <div className="mt-6 flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-slate-400 transition-all hover:border-accent/40 hover:bg-accent/10 hover:text-accent-light"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li>
                <a href="mailto:hello@northpeak.digital" className="transition-colors hover:text-white">
                  hello@northpeak.digital
                </a>
              </li>
              <li>San Francisco, CA</li>
              <li>Mon – Fri, 9am – 6pm PST</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-slate-500">
            &copy; {year} NorthPeak Digital. All rights reserved.
          </p>
          <p className="text-sm text-slate-500">
            Built for{' '}
            <a
              href="https://digitalheroesco.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-accent-light transition-colors hover:text-accent-cyan"
            >
              Digital Heroes Training Task
            </a>
          </p>
        </div>
      </Container>
    </footer>
  )
}
