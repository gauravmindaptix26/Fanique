import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import imgA from '../assets/images/Frau in Dessous.jpg'
import imgB from '../assets/images/Frau in Dessous mit Schleife.jpeg'
import imgC from '../assets/images/Frauen in Limousine.jpeg'
import imgD from '../assets/images/Frau sitzt auf Mann.png'
import imgE from '../assets/images/Paar beim Sex.jpg'

const stats = [
  { label: 'Avg. Revenue Lift', value: '+3.4x' },
  { label: 'Client Retention', value: '91%' },
  { label: 'Launch Velocity', value: '< 14 days' },
  { label: 'Team Response', value: '< 2 min' },
]

const cases = [
  {
    title: 'Creator A',
    subtitle: 'Fashion / Lifestyle',
    before: '12k followers',
    after: '78k followers',
    note: 'Monthly revenue stabilized within 6 weeks.',
    image: imgA,
  },
  {
    title: 'Creator B',
    subtitle: 'Fitness / Coaching',
    before: '0.8% conversion',
    after: '3.2% conversion',
    note: 'Offer stack rebuilt with premium retention.',
    image: imgB,
  },
  {
    title: 'Creator C',
    subtitle: 'Model / Editorial',
    before: '$4.2k / mo',
    after: '$18.6k / mo',
    note: 'Upsell flows and content cadence optimized.',
    image: imgC,
  },
]

const services = [
  {
    title: 'Premium Positioning',
    copy: 'Brand story, offer framing, and pricing designed for high-end value.',
    image: imgD,
  },
  {
    title: 'Revenue Engineering',
    copy: 'Launch cadence, upsell systems, and retention sequences.',
    image: imgE,
  },
  {
    title: 'Content Direction',
    copy: 'Creative playbooks, shoot briefs, and performance-led feedback.',
    image: imgB,
  },
  {
    title: 'Client Operations',
    copy: 'Daily management, fan engagement, and data-driven optimization.',
    image: imgC,
  },
]

const ErgebnissePage = () => {
  const pageRef = useRef(null)

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
            Ergebnisse
          </p>
          <h1 className="results-title" data-results="fade">
            Premium Wachstum, messbar und dauerhaft.
            <span> Built for modern creator brands.</span>
          </h1>
          <p className="results-sub" data-results="fade">
            Wir entwickeln Systeme, die Wachstum, Umsatz und Markenwert in Einklang
            bringen. Jede Strategie ist auf Skalierung ausgelegt.
          </p>
          <div className="results-cta" data-results="fade">
            <button className="hero-cta hero-cta--primary" type="button">
              Ergebnisse anfragen
            </button>
            <button className="hero-cta hero-cta--ghost" type="button">
              Strategie ansehen
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
            <h2>Wachstum auf Premium-Niveau</h2>
            <p>Bewiesene Systeme aus Strategie, Content und Performance.</p>
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
            <p className="results-kicker">Case Studies</p>
            <h2>Was echte Zusammenarbeit bewirkt</h2>
          </div>
          <div className="results-cases-grid">
            {cases.map((item) => (
              <article key={item.title} className="results-case" data-results="fade">
                <div className="results-case-media">
                  <img src={item.image} alt={item.title} loading="lazy" decoding="async" />
                </div>
                <div>
                  <h3>{item.title}</h3>
                  <p className="results-case-sub">{item.subtitle}</p>
                </div>
                <div className="results-case-stats">
                  <div>
                    <span>Vorher</span>
                    <strong>{item.before}</strong>
                  </div>
                  <div>
                    <span>Nachher</span>
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
            <h2>Die Systeme hinter den Ergebnissen</h2>
            <p>Luxus-Branding trifft messbare Performance.</p>
          </div>
          <div className="results-services-grid">
            {services.map((item) => (
              <article key={item.title} className="results-service" data-results="fade">
                <div className="results-service-media">
                  <img src={item.image} alt={item.title} loading="lazy" decoding="async" />
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
