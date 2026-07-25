import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  HiOutlineCodeBracket,
  HiOutlineShoppingBag,
  HiOutlinePaintBrush,
  HiOutlineMagnifyingGlass,
  HiOutlineBolt,
  HiOutlineWrenchScrewdriver,
  HiArrowRight,
} from 'react-icons/hi2'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import { services } from '../../data/services'

const iconMap = {
  'web-dev': HiOutlineCodeBracket,
  shopify: HiOutlineShoppingBag,
  'ui-ux': HiOutlinePaintBrush,
  seo: HiOutlineMagnifyingGlass,
  performance: HiOutlineBolt,
  maintenance: HiOutlineWrenchScrewdriver,
}

function ServiceCell({ service, isActive, onActivate }) {
  const Icon = iconMap[service.id]

  return (
    <article
      className={`service-bento-cell group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-500 hover:border-white/20 sm:p-7 ${service.gridClass} ${isActive ? 'border-accent/40 bg-white/[0.05]' : ''}`}
      onMouseEnter={() => onActivate(service.id)}
    >
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus:opacity-100 ${service.accent}`}
        aria-hidden="true"
      />

      <div className="relative flex h-full flex-col">
        <div className="flex items-start justify-between gap-3">
          <span className="font-display text-4xl font-extrabold leading-none text-white/10 transition-colors group-hover:text-white/20">
            {service.number}
          </span>
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-accent-light transition-all duration-300 group-hover:scale-110 group-hover:border-accent/30 group-hover:bg-accent/10">
            <Icon className="h-5 w-5" aria-hidden="true" />
          </div>
        </div>

        <h3 className="mt-4 font-display text-lg font-bold text-white sm:text-xl">
          {service.title}
        </h3>

        <p className={`mt-2 text-sm leading-relaxed text-slate-400 ${service.wide ? 'max-w-2xl' : ''}`}>
          {service.description}
        </p>

        <ul
          className={`mt-auto flex flex-wrap gap-2 pt-5 ${service.wide ? '' : 'opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus:opacity-100'}`}
          aria-label={`${service.title} features`}
        >
          {service.features.map((feature) => (
            <li
              key={feature}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300"
            >
              {feature}
            </li>
          ))}
        </ul>

        {service.wide && (
          <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-accent-light opacity-0 transition-opacity group-hover:opacity-100">
            Learn more
            <HiArrowRight className="h-4 w-4" aria-hidden="true" />
          </div>
        )}
      </div>
    </article>
  )
}

export default function Services() {
  const [activeId, setActiveId] = useState(services[0].id)
  const active = services.find((s) => s.id === activeId) ?? services[0]
  const ActiveIcon = iconMap[active.id]

  return (
    <section
      id="services"
      className="section-padding relative"
      aria-labelledby="services-heading"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
        aria-hidden="true"
      />

      <Container>
        <SectionHeading
          id="services-heading"
          eyebrow="What We Do"
          title="Six disciplines. One peak-standard team."
          description="Every service is engineered to compound — design, build, optimize, and sustain your digital presence under one roof."
          align="left"
          className="max-w-3xl"
        />

        <div className="grid gap-8 lg:grid-cols-[1fr_320px] xl:grid-cols-[1fr_360px]">
          {/* Bento grid */}
          <div className="service-bento-grid grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-3 md:auto-rows-[minmax(160px,auto)]">
            {services.map((service) => (
              <ServiceCell
                key={service.id}
                service={service}
                isActive={activeId === service.id}
                onActivate={setActiveId}
              />
            ))}
          </div>

          {/* Sticky spotlight panel — desktop only */}
          <aside
            className="hidden lg:block"
            aria-label="Selected service details"
          >
            <div className="sticky top-28 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6 backdrop-blur-xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-light">
                    {active.number} — Spotlight
                  </span>
                  <div className="mt-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/25 to-accent-cyan/15 text-accent-light">
                    <ActiveIcon className="h-7 w-7" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-bold text-white">
                    {active.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">
                    {active.description}
                  </p>
                  <ul className="mt-6 space-y-2.5">
                    {active.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2.5 text-sm text-slate-300"
                      >
                        <span className="h-1 w-1 rounded-full bg-accent-cyan" aria-hidden="true" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent-light transition-colors hover:text-white"
                  >
                    Discuss this service
                    <HiArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </motion.div>
              </AnimatePresence>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  )
}
