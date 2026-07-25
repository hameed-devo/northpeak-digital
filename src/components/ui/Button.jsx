const variants = {
  primary:
    'bg-gradient-to-r from-accent to-accent-cyan text-white shadow-lg shadow-accent/25 hover:shadow-accent/40 hover:brightness-110',
  secondary:
    'glass text-white hover:bg-white/10 hover:border-white/20',
  ghost:
    'text-slate-300 hover:text-white hover:bg-white/5',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-3.5 text-base',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  href,
  type = 'button',
  ...props
}) {
  const classes = `
    inline-flex items-center justify-center gap-2 rounded-full font-semibold
    transition-all duration-300 ease-out
    focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-light
    disabled:opacity-50 disabled:pointer-events-none
    ${variants[variant]} ${sizes[size]} ${className}
  `

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  )
}
