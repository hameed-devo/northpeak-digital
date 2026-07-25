export default function Badge({ children, variant = 'default', className = '' }) {
  const variants = {
    default: 'bg-accent/15 text-accent-light border-accent/30',
    popular: 'bg-gradient-to-r from-accent to-accent-cyan text-white border-transparent shadow-lg shadow-accent/30',
  }

  return (
    <span
      className={`
        inline-flex items-center rounded-full border px-3 py-1
        text-xs font-semibold uppercase tracking-wider
        ${variants[variant]} ${className}
      `}
    >
      {children}
    </span>
  )
}
