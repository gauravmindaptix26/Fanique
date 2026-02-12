import { services } from '../data/content'

const ServicesSection = () => (
  <section id="services" className="services-section">
    <div className="mx-auto max-w-6xl px-6">
      <div className="services-header">
        <div className="services-title-group">
          <p className="services-kicker">Core services</p>
          <h2 className="services-title">
            A full stack creator system built to move fast.
          </h2>
        </div>
        <button className="btn-secondary services-cta">Download Deck</button>
      </div>
      <div className="services-grid">
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
    </div>
  </section>
)

export default ServicesSection
