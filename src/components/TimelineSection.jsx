import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'

const steps = [
  {
    title: 'Onboarding',
    text:
      'Deine Ansprechpartnerin nimmt sich ausreichend Zeit, dich und deine Wunsche kennenzulernen und erklart dir unsere Tools.',
    side: 'left',
  },
  {
    title: 'Skalierungsphase',
    text:
      'Wir starten unser Marketing, um wertvollen Traffic auf deine Profile zu bringen. Ein nahtloser Ubergang ist uns wichtig.',
    side: 'right',
  },
  {
    title: 'Bindungsphase',
    text:
      'Der Fokus wird neben Wachstum vermehrt auf Stabilitat gesetzt, um ein planbares Einkommen zu gewahrleisten. Wir setzen auf Fanbindung statt Massenabfertigung.',
    side: 'left',
  },
]

const TimelineSection = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '[data-timeline="card"]',
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.15 },
      )
      gsap.fromTo(
        '[data-timeline="line"]',
        { scaleY: 0 },
        { scaleY: 1, duration: 1, ease: 'power3.out', transformOrigin: 'top' },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="timeline-section" ref={sectionRef}>
      <div className="mx-auto max-w-6xl px-6 text-center">
        <motion.p
          className="timeline-tag"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          ABLAUF
        </motion.p>
        <motion.h2
          className="timeline-title"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Wie du deinen Umsatz in maximal 12 Wochen verdoppelst -{' '}
          <span>garantiert:</span>
        </motion.h2>
        <motion.p
          className="timeline-subtitle"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Wir generieren schon ab Tag 1 der Betreuung Umsatz in deinem Account.
        </motion.p>
      </div>

      <div className="timeline-track" data-timeline="line" aria-hidden="true" />

      <div className="timeline-cards">
        {steps.map((step) => (
          <div
            key={step.title}
            className={`timeline-card timeline-card--${step.side}`}
            data-timeline="card"
          >
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </div>
        ))}
      </div>

      <div className="timeline-cta">
        <button className="hero-cta hero-cta--primary" type="button">
          Anfragen
        </button>
      </div>
    </section>
  )
}

export default TimelineSection
