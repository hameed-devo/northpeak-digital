import { motion } from 'framer-motion'

export default function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = 'center',
  className = '',
  animated = true,
}) {
  const alignClass =
    align === 'center' ? 'text-center mx-auto' : 'text-left'

  const content = (
    <>
      {eyebrow && (
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-accent-light">
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
      >
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-relaxed text-slate-400 sm:text-lg">
          {description}
        </p>
      )}
    </>
  )

  if (!animated) {
    return (
      <div className={`max-w-2xl mb-14 md:mb-16 ${alignClass} ${className}`}>
        {content}
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`max-w-2xl mb-14 md:mb-16 ${alignClass} ${className}`}
    >
      {content}
    </motion.div>
  )
}
