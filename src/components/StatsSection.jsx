import { stats } from '../data/content'

const StatsSection = () => (
  <section className="mx-auto max-w-6xl px-6 pb-16">
    <div className="grid gap-6 md:grid-cols-3">
      {stats.map((stat) => (
        <div key={stat.label} className="card-glow">
          <p className="text-xs uppercase tracking-[0.4em] text-white/50">
            {stat.label}
          </p>
          <p className="mt-4 font-display text-3xl text-white">{stat.value}</p>
          <div className="mt-6 h-1 w-full rounded-full bg-white/10">
            <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-[#5F2395] to-[#BF9824]" />
          </div>
        </div>
      ))}
    </div>
  </section>
)

export default StatsSection
