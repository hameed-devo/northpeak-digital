const bars = [42, 68, 55, 82, 64, 91, 73, 88]

export default function HeroShowcase() {
  return (
    <div className="hero-showcase relative mx-auto w-full max-w-lg lg:max-w-none">
      <div
        className="pointer-events-none absolute -inset-8 rounded-full bg-accent/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-navy-900/80 shadow-2xl shadow-black/40 backdrop-blur-xl">
        {/* Browser chrome */}
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
          </div>
          <div className="mx-auto flex h-7 w-48 items-center justify-center rounded-md bg-white/5 px-3">
            <span className="truncate text-[10px] text-slate-500">northpeak.digital/dashboard</span>
          </div>
        </div>

        {/* Dashboard body */}
        <div className="space-y-4 p-4 sm:p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-wider text-slate-500">
                Performance Overview
              </p>
              <p className="font-display text-lg font-bold text-white">Campaign Analytics</p>
            </div>
            <span className="flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-semibold text-emerald-400">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
              Live
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            {[
              { label: 'Conversion', value: '+34%', up: true },
              { label: 'Page Speed', value: '98', up: true },
              { label: 'Bounce Rate', value: '-21%', up: true },
            ].map((metric) => (
              <div
                key={metric.label}
                className="rounded-xl border border-white/10 bg-white/[0.04] p-2.5 sm:p-3"
              >
                <p className="text-[9px] text-slate-500 sm:text-[10px]">{metric.label}</p>
                <p className="font-display text-sm font-bold text-white sm:text-base">
                  {metric.value}
                </p>
              </div>
            ))}
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3 sm:p-4">
            <div className="mb-3 flex items-end justify-between">
              <p className="text-[10px] font-medium text-slate-400">Weekly Traffic</p>
              <p className="font-display text-xs font-bold text-accent-cyan">+127%</p>
            </div>
            <div className="flex h-20 items-end gap-1.5 sm:h-24 sm:gap-2" role="img" aria-label="Traffic chart showing upward trend">
              {bars.map((height, i) => (
                <div
                  key={i}
                  className="hero-bar flex-1 rounded-sm bg-gradient-to-t from-accent to-accent-cyan"
                  style={{
                    height: `${height}%`,
                    animationDelay: `${i * 0.08}s`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating stat cards */}
      <div
        className="absolute -left-4 top-1/4 hidden rounded-xl border border-white/15 bg-navy-900/90 px-4 py-3 shadow-xl backdrop-blur-xl sm:block lg:-left-8 animate-float-slow"
        aria-hidden="true"
      >
        <p className="text-[10px] text-slate-500">Projects Delivered</p>
        <p className="font-display text-xl font-bold text-white">250+</p>
      </div>

      <div
        className="absolute -right-2 bottom-8 hidden rounded-xl border border-white/15 bg-navy-900/90 px-4 py-3 shadow-xl backdrop-blur-xl sm:block lg:-right-6 animate-float-slow-reverse"
        aria-hidden="true"
      >
        <p className="text-[10px] text-slate-500">Client Satisfaction</p>
        <p className="font-display text-xl font-bold text-gradient-accent">98%</p>
      </div>
    </div>
  )
}
