import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiPaperAirplane } from 'react-icons/hi2'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'

const budgetOptions = [
  'Under $5,000',
  '$5,000 – $15,000',
  '$15,000 – $50,000',
  '$50,000+',
]

const initialForm = {
  name: '',
  email: '',
  company: '',
  budget: '',
  message: '',
}

const initialErrors = {
  name: '',
  email: '',
  company: '',
  budget: '',
  message: '',
}

function validate(form) {
  const errors = { ...initialErrors }
  let isValid = true

  if (!form.name.trim()) {
    errors.name = 'Name is required'
    isValid = false
  } else if (form.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters'
    isValid = false
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!form.email.trim()) {
    errors.email = 'Email is required'
    isValid = false
  } else if (!emailPattern.test(form.email)) {
    errors.email = 'Please enter a valid email address'
    isValid = false
  }

  if (!form.company.trim()) {
    errors.company = 'Company name is required'
    isValid = false
  }

  if (!form.budget) {
    errors.budget = 'Please select a budget range'
    isValid = false
  }

  if (!form.message.trim()) {
    errors.message = 'Message is required'
    isValid = false
  } else if (form.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters'
    isValid = false
  }

  return { errors, isValid }
}

function Field({ id, label, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-slate-300">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-xs text-red-400" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}

const inputClass =
  'w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 transition-colors focus:border-accent/50 focus:bg-white/[0.07] focus:outline-none'

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState(initialErrors)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { errors: newErrors, isValid } = validate(form)
    setErrors(newErrors)
    if (isValid) {
      setSubmitted(true)
    }
  }

  return (
    <section id="contact" className="section-padding relative" aria-labelledby="contact-heading">
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-navy-900/80 to-transparent"
        aria-hidden="true"
      />

      <Container className="relative">
        <SectionHeading
          eyebrow="Get in Touch"
          title="Let's build something exceptional"
          description="Tell us about your project and we'll get back to you within 24 hours with a tailored proposal."
        />

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-2xl"
        >
          {submitted ? (
            <div
              className="rounded-2xl border border-accent/30 bg-accent/10 p-10 text-center"
              role="status"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent/20">
                <HiPaperAirplane className="h-6 w-6 text-accent-light" aria-hidden="true" />
              </div>
              <h3 className="font-display text-xl font-bold text-white">Message sent!</h3>
              <p className="mt-2 text-sm text-slate-400">
                Thank you for reaching out. Our team will review your project and respond within 24 hours.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8"
              aria-label="Contact form"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field id="name" label="Full Name" error={errors.name}>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="Jane Smith"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    autoComplete="name"
                  />
                </Field>

                <Field id="email" label="Email Address" error={errors.email}>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="jane@company.com"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    autoComplete="email"
                  />
                </Field>
              </div>

              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <Field id="company" label="Company" error={errors.company}>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="Your Company"
                    aria-invalid={!!errors.company}
                    aria-describedby={errors.company ? 'company-error' : undefined}
                    autoComplete="organization"
                  />
                </Field>

                <Field id="budget" label="Budget Range" error={errors.budget}>
                  <select
                    id="budget"
                    name="budget"
                    value={form.budget}
                    onChange={handleChange}
                    className={`${inputClass} cursor-pointer appearance-none`}
                    aria-invalid={!!errors.budget}
                    aria-describedby={errors.budget ? 'budget-error' : undefined}
                  >
                    <option value="" disabled className="bg-navy-900">
                      Select a range
                    </option>
                    {budgetOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-navy-900">
                        {opt}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>

              <div className="mt-5">
                <Field id="message" label="Project Details" error={errors.message}>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    className={`${inputClass} resize-none`}
                    placeholder="Tell us about your project goals, timeline, and any specific requirements..."
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  />
                </Field>
              </div>

              <Button type="submit" size="lg" className="mt-6 w-full sm:w-auto">
                Send Message
                <HiPaperAirplane className="h-4 w-4" aria-hidden="true" />
              </Button>
            </form>
          )}
        </motion.div>
      </Container>
    </section>
  )
}
