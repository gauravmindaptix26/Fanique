import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'

const ApplicationStepsSection = () => {
  const sectionRef = useRef(null)

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
          BEWERBUNG
        </motion.p>
        <motion.h2
          className="steps-title"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Dein OnlyFans <span>Erfolg</span> startet hier. Planbar.{' '}
          <span>Step by Step.</span>
        </motion.h2>
      </div>

      <div className="steps-timeline">
        <div className="steps-line" data-steps="line" aria-hidden="true" />
        <div className="steps-node" data-steps="node">
          <span className="steps-number">1</span>
          <p>
            Klicke auf <span>&quot;Bewerben&quot;</span>
          </p>
        </div>
        <div className="steps-node" data-steps="node">
          <span className="steps-number">2</span>
          <p>
            Fulle das kurze <span>Formular</span> aus.
          </p>
        </div>
        <div className="steps-node" data-steps="node">
          <span className="steps-number">3</span>
          <p>
            Wir kontaktieren dich <span>in 24 Stunden.</span>
          </p>
          <span className="steps-done">Done</span>
        </div>
      </div>

      <div className="steps-cta">
        <button className="hero-cta hero-cta--primary" type="button">
          Anfragen
        </button>
      </div>
    </section>
  )
}

export default ApplicationStepsSection
