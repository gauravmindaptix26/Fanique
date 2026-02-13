import { useEffect, useRef } from 'react'
import { Trans, useTranslation } from 'react-i18next'
import gsap from 'gsap'
import imgA from '../assets/images/Frau in Dessous.jpg'
import imgB from '../assets/images/Frau in Dessous mit Schleife.jpeg'
import imgC from '../assets/images/Frauen in Limousine.jpeg'
import imgD from '../assets/images/Frau sitzt auf Mann.png'
import imgE from '../assets/images/Paar beim Sex.jpg'

const ErgebnissePage = () => {
  const { t } = useTranslation()
  const pageRef = useRef(null)
  const stats = t('results.stats', { returnObjects: true })
  const cases = t('results.cases', { returnObjects: true })
  const services = t('results.services', { returnObjects: true })

  const caseImages = [imgA, imgB, imgC]
  const serviceImages = [imgD, imgE, imgB, imgC]

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '[data-results="fade"]',
        { opacity: 0, y: 28, filter: 'blur(8px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 1.05,
          ease: 'power3.out',
          stagger: 0.12,
        },
      )
    }, pageRef)

    return () => ctx.revert()
  }, [])

  return (
    <div className="results-page" ref={pageRef}>
      <section className="results-hero">
        <div className="results-hero-shell">
          <p className="results-kicker" data-results="fade">
            {t('results.kicker')}
          </p>
          <h1 className="results-title" data-results="fade">
            <Trans i18nKey="results.title" />
          </h1>
          <p className="results-sub" data-results="fade">
            {t('results.sub')}
          </p>
          <div className="results-cta" data-results="fade">
            <button className="hero-cta hero-cta--primary" type="button">
              {t('results.ctaPrimary')}
            </button>
            <button className="hero-cta hero-cta--ghost" type="button">
              {t('results.ctaSecondary')}
            </button>
          </div>
        </div>
        <div className="results-hero-media" data-results="fade">
          <div className="results-hero-card">
            <img src={imgA} alt="Creator editorial" loading="lazy" decoding="async" />
          </div>
          <div className="results-hero-card results-hero-card--tall">
            <img src={imgC} alt="Luxury lifestyle" loading="lazy" decoding="async" />
          </div>
          <div className="results-hero-card">
            <img src={imgB} alt="Studio portrait" loading="lazy" decoding="async" />
          </div>
        </div>
        <div className="results-glow" aria-hidden="true" />
      </section>

      <section className="results-metrics">
        <div className="results-metrics-shell">
          <div className="results-metrics-header" data-results="fade">
            <h2>{t('results.metricsTitle')}</h2>
            <p>{t('results.metricsBody')}</p>
          </div>
          <div className="results-metrics-grid">
            {stats.map((item) => (
              <article key={item.label} className="results-metric" data-results="fade">
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="results-cases">
        <div className="results-cases-shell">
          <div className="results-cases-header" data-results="fade">
            <p className="results-kicker">{t('results.casesKicker')}</p>
            <h2>{t('results.casesTitle')}</h2>
          </div>
          <div className="results-cases-grid">
            {cases.map((item, index) => (
              <article key={item.title} className="results-case" data-results="fade">
                <div className="results-case-media">
                  <img src={caseImages[index % caseImages.length]} alt={item.title} loading="lazy" decoding="async" />
                </div>
                <div>
                  <h3>{item.title}</h3>
                  <p className="results-case-sub">{item.subtitle}</p>
                </div>
                <div className="results-case-stats">
                  <div>
                    <span>{t('results.before')}</span>
                    <strong>{item.before}</strong>
                  </div>
                  <div>
                    <span>{t('results.after')}</span>
                    <strong>{item.after}</strong>
                  </div>
                </div>
                <p className="results-case-note">{item.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="results-services">
        <div className="results-services-shell">
          <div className="results-services-header" data-results="fade">
            <h2>{t('results.servicesTitle')}</h2>
            <p>{t('results.servicesBody')}</p>
          </div>
          <div className="results-services-grid">
            {services.map((item, index) => (
              <article key={item.title} className="results-service" data-results="fade">
                <div className="results-service-media">
                  <img src={serviceImages[index % serviceImages.length]} alt={item.title} loading="lazy" decoding="async" />
                </div>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ErgebnissePage
