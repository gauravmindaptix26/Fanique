import { useTranslation } from 'react-i18next'

const ServicesSection = () => {
  const { t } = useTranslation()
  const services = t('services.items', { returnObjects: true })

  return (
    <section id="services" className="services-section">
      <div className="mx-auto max-w-6xl px-6">
        <div className="services-header">
          <div className="services-title-group">
            <p className="services-kicker">{t('services.kicker')}</p>
            <h2 className="services-title">{t('services.title')}</h2>
          </div>
          <button className="btn-secondary services-cta">{t('services.cta')}</button>
        </div>
        <div className="services-grid">
          {services.map((service) => (
            <article key={service.title} className="service-card">
              <h3 className="font-display text-2xl text-white">{service.title}</h3>
              <p className="mt-4 text-white/70">{service.copy}</p>
              <div className="mt-6 flex items-center gap-3 text-sm text-[#BF9824]">
                <span className="dot" />
                <span>{t('services.explore')}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
