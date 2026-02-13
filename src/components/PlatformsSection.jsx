import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Trans, useTranslation } from 'react-i18next'
import gsap from 'gsap'

const PlatformsSection = () => {
  const { t } = useTranslation()
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '[data-platforms="fly-left"]',
        { opacity: 0, x: -160, y: 30, rotate: -6, filter: 'blur(10px)' },
        {
          opacity: 1,
          x: 0,
          y: 0,
          rotate: 0,
          filter: 'blur(0px)',
          duration: 1,
          ease: 'power3.out',
          stagger: 0.15,
        },
      )
      gsap.fromTo(
        '[data-platforms="fly-right"]',
        { opacity: 0, x: 160, y: 30, rotate: 6, filter: 'blur(10px)' },
        {
          opacity: 1,
          x: 0,
          y: 0,
          rotate: 0,
          filter: 'blur(0px)',
          duration: 1,
          ease: 'power3.out',
          stagger: 0.15,
        },
      )
      gsap.fromTo(
        '[data-platforms="pop"]',
        { opacity: 0, scale: 0.9, rotate: -3, filter: 'blur(12px)' },
        {
          opacity: 1,
          scale: 1,
          rotate: 0,
          filter: 'blur(0px)',
          duration: 1.1,
          ease: 'power3.out',
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="platforms-section" ref={sectionRef}>
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          className="platforms-header"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="platforms-tag" data-platforms="fly-left">
            {t('platforms.tag')}
          </p>
          <h2 className="platforms-title" data-platforms="fly-right">
            <Trans i18nKey="platforms.title" />
          </h2>
          <p className="platforms-body" data-platforms="fly-left">
            {t('platforms.body')}
          </p>
        </motion.div>

        <motion.div
          className="platforms-diagram"
          data-platforms="pop"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="platforms-lines" aria-hidden="true">
            <span className="platforms-line platforms-line--center" />
            <span className="platforms-line platforms-line--left" />
            <span className="platforms-line platforms-line--left-mid" />
            <span className="platforms-line platforms-line--right-mid" />
            <span className="platforms-line platforms-line--right" />
          </div>
          <div className="platforms-node platforms-node--core">
            <span className="platforms-logo">FRA</span>
          </div>
          <div className="platforms-branch platforms-branch--left">
            <div className="platforms-node platforms-node--orange">M</div>
          </div>
          <div className="platforms-branch platforms-branch--left-mid">
            <div className="platforms-node platforms-node--red">4B</div>
          </div>
          <div className="platforms-branch platforms-branch--center">
            <div className="platforms-node platforms-node--blue">OF</div>
          </div>
          <div className="platforms-branch platforms-branch--right-mid">
            <div className="platforms-node platforms-node--gold">more</div>
          </div>
          <div className="platforms-branch platforms-branch--right">
            <div className="platforms-node platforms-node--purple">A</div>
          </div>
        </motion.div>

        <motion.div
          className="platforms-actions"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          data-platforms="fly-right"
        >
          <button className="hero-cta hero-cta--primary" type="button">
            {t('platforms.ctaPrimary')}
          </button>
          <button className="hero-cta hero-cta--ghost" type="button">
            {t('platforms.ctaSecondary')}
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default PlatformsSection
