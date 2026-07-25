import { motion } from 'framer-motion'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import { metrics } from '../../data/metrics'

export default function Results() {
  return (
    <section
      id="results"
      className="section-padding relative overflow-hidden"
      aria-labelledby="results-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-navy-900/50 via-transparent to-navy-900/50"
        aria-hidden="true"
      />

      <Container className="relative">
        <SectionHeading
          eyebrow="Proven Impact"
          title="Results that speak for themselves"
          description="Numbers don't lie. Here's what we've achieved for our clients across hundreds of projects."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-8 text-center backdrop-blur-sm"
            >
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"
                aria-hidden="true"
              />
              <p className="font-display text-4xl font-extrabold tracking-tight text-gradient-accent sm:text-5xl">
                {metric.value}
              </p>
              <p className="mt-2 font-display text-lg font-semibold text-white">
                {metric.label}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {metric.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
