import { motion } from 'framer-motion'
import { HiCheck } from 'react-icons/hi2'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'
import Badge from '../ui/Badge'
import { pricingPlans } from '../../data/pricing'

export default function Pricing() {
  return (
    <section id="pricing" className="section-padding relative" aria-labelledby="pricing-heading">
      <div
        className="pointer-events-none absolute inset-x-0 top-1/2 h-[500px] -translate-y-1/2 bg-accent/5 blur-[120px]"
        aria-hidden="true"
      />

      <Container className="relative">
        <SectionHeading
          eyebrow="Investment"
          title="Transparent pricing, exceptional value"
          description="Choose the plan that fits your ambitions. Every package includes our commitment to quality and results."
        />

        <div className="grid items-start gap-6 lg:grid-cols-3 lg:gap-8">
          {pricingPlans.map((plan, i) => (
            <motion.article
              key={plan.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`relative flex flex-col rounded-2xl border p-7 sm:p-8 ${
                plan.popular
                  ? 'border-accent/40 bg-gradient-to-b from-accent/10 to-white/[0.03] shadow-2xl shadow-accent/10 lg:scale-105'
                  : 'border-white/10 bg-white/[0.03]'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <Badge variant="popular">Most Popular</Badge>
                </div>
              )}

              <h3 className="font-display text-xl font-bold text-white">{plan.name}</h3>
              <p className="mt-2 text-sm text-slate-400">{plan.description}</p>

              <div className="mt-6 flex items-baseline gap-1">
                <span className="font-display text-4xl font-extrabold text-white">
                  {plan.price}
                </span>
                {plan.period !== 'quote' && (
                  <span className="text-sm text-slate-500">/ {plan.period}</span>
                )}
              </div>

              <ul className="mt-8 flex-1 space-y-3" aria-label={`${plan.name} plan features`}>
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-slate-300">
                    <HiCheck
                      className={`mt-0.5 h-4 w-4 shrink-0 ${plan.popular ? 'text-accent-cyan' : 'text-accent-light'}`}
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                href="#contact"
                variant={plan.popular ? 'primary' : 'secondary'}
                className="mt-8 w-full"
              >
                {plan.cta}
              </Button>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  )
}
