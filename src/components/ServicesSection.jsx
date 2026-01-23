import { services } from '../data/content'

const ServicesSection = () => (
  <section id="services" className="mx-auto max-w-6xl px-6 py-20">
    <div className="flex flex-wrap items-end justify-between gap-6">
      <div>
        <p className="text-xs uppercase tracking-[0.6em] text-[#BF9824]">
          Core services
        </p>
        <h2 className="font-display text-3xl text-white sm:text-4xl">
          A full stack creator system built to move fast.
        </h2>
      </div>
      <button className="btn-secondary">Download Deck</button>
    </div>
    <div className="mt-10 grid gap-6 lg:grid-cols-3">
      {services.map((service) => (
        <article key={service.title} className="service-card">
          <h3 className="font-display text-2xl text-white">{service.title}</h3>
          <p className="mt-4 text-white/70">{service.copy}</p>
          <div className="mt-6 flex items-center gap-3 text-sm text-[#BF9824]">
            <span className="dot" />
            <span>Explore service</span>
          </div>
        </article>
      ))}
    </div>
  </section>
)

export default ServicesSection
