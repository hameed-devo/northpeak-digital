import { clientLogos } from '../../data/navigation'

export default function LogoMarquee() {
  const logos = [...clientLogos, ...clientLogos]

  return (
    <div className="mt-20 border-y border-white/10 py-8" aria-label="Client logos">
      <p className="mb-6 text-center text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
        Trusted by forward-thinking brands
      </p>
      <div className="relative overflow-hidden mask-fade-x">
        <div className="flex w-max animate-marquee gap-12 px-6" aria-hidden="true">
          {logos.map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              className="flex shrink-0 items-center gap-3 opacity-60 transition-opacity hover:opacity-100"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 font-display text-xs font-bold text-slate-300">
                {logo.initials}
              </span>
              <span className="whitespace-nowrap font-display text-sm font-semibold text-slate-400">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
