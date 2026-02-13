import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Trans, useTranslation } from 'react-i18next'
import gsap from 'gsap'

const ApplicationStepsSection = () => {
  const { t } = useTranslation()
  const sectionRef = useRef(null)
  const steps = t('applicationSteps.steps', { returnObjects: true })

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '[data-steps="node"]',
        { scale: 0.92, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8, ease: 'power3.out', stagger: 0.15 },
      )
      gsap.fromTo(
        '[data-steps="line"]',
        { scaleX: 0 },
        { scaleX: 1, duration: 1, ease: 'power3.out', transformOrigin: 'left' },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="steps-section" ref={sectionRef}>
      <div className="mx-auto max-w-6xl px-6 text-center">
        <motion.p
          className="steps-tag"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {t('applicationSteps.tag')}
        </motion.p>
        <motion.h2
          className="steps-title"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <Trans i18nKey="applicationSteps.title" />
        </motion.h2>
      </div>

      <div className="steps-timeline">
        <div className="steps-line" data-steps="line" aria-hidden="true" />
        {steps.map((step, index) => (
          <div key={step} className="steps-node" data-steps="node">
            <span className="steps-number">{index + 1}</span>
            <p dangerouslySetInnerHTML={{ __html: step }} />
            {index === steps.length - 1 && (
              <span className="steps-done">{t('applicationSteps.done')}</span>
            )}
          </div>
        ))}
      </div>

      <div className="steps-cta">
        <button className="hero-cta hero-cta--primary" type="button">
          {t('applicationSteps.cta')}
        </button>
      </div>
    </section>
  )
}

export default ApplicationStepsSection
