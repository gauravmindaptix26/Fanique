import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Trans, useTranslation } from 'react-i18next'
import gsap from 'gsap'

const TimelineSection = () => {
  const { t } = useTranslation()
  const steps = t('timeline.steps', { returnObjects: true })
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
          {t('timeline.tag')}
        </motion.p>
        <motion.h2
          className="timeline-title"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <Trans i18nKey="timeline.title" />
        </motion.h2>
        <motion.p
          className="timeline-subtitle"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {t('timeline.subtitle')}
        </motion.p>
      </div>

      <div className="timeline-track" data-timeline="line" aria-hidden="true" />

      <div className="timeline-cards">
        {steps.map((step) => (
          <div
            key={step.title}
            className={`timeline-card timeline-card--${step.side || 'left'}`}
            data-timeline="card"
          >
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </div>
        ))}
      </div>

      <div className="timeline-cta">
        <button className="hero-cta hero-cta--primary" type="button">
          {t('timeline.cta')}
        </button>
      </div>
    </section>
  )
}

export default TimelineSection
