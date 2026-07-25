import { motion } from 'framer-motion'
import { HiStar } from 'react-icons/hi2'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import { testimonials } from '../../data/testimonials'

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="section-padding"
      aria-labelledby="testimonials-heading"
    >
      <Container>
        <SectionHeading
          eyebrow="Client Stories"
          title="Trusted by industry leaders"
          description="Don't just take our word for it. Here's what our partners say about working with NorthPeak."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item, i) => (
            <motion.blockquote
              key={item.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-7 sm:p-8"
            >
              <div className="mb-4 flex gap-1" aria-label="5 out of 5 stars">
                {[...Array(5)].map((_, j) => (
                  <HiStar key={j} className="h-4 w-4 text-amber-400" aria-hidden="true" />
                ))}
              </div>

              <p className="flex-1 text-sm leading-relaxed text-slate-300 sm:text-base">
                &ldquo;{item.quote}&rdquo;
              </p>

              <footer className="mt-6 flex items-center gap-3 border-t border-white/10 pt-6">
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-accent/30 to-accent-cyan/20 text-sm font-bold text-accent-light"
                  aria-hidden="true"
                >
                  {item.avatar}
                </div>
                <div>
                  <cite className="not-italic font-display text-sm font-semibold text-white">
                    {item.name}
                  </cite>
                  <p className="text-xs text-slate-400">
                    {item.role}, {item.company}
                  </p>
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </Container>
    </section>
  )
}
