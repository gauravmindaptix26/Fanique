import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import gsap from 'gsap'

const FaqSection = () => {
  const { t } = useTranslation()
  const faqs = t('faq.items', { returnObjects: true })
  const sectionRef = useRef(null)
  const [openIndex, setOpenIndex] = useState(-1)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '[data-faq="item"]',
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', stagger: 0.05 },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="faq-section" ref={sectionRef}>
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          className="faq-title"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          {t('faq.title')}
        </motion.h2>

        <div className="faq-list">
          {faqs.map((item, index) => {
            const isOpen = index === openIndex
            return (
              <div
                key={item.q}
                className={`faq-item${isOpen ? ' is-open' : ''}`}
                data-faq="item"
              >
                <button
                  className="faq-question"
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  <span>{item.q}</span>
                  <span className="faq-chevron" aria-hidden="true" />
                </button>
                <div
                  id={`faq-panel-${index}`}
                  className="faq-answer"
                  role="region"
                  aria-hidden={!isOpen}
                >
                  <p>{item.a}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="faq-actions">
          <button className="hero-cta hero-cta--primary" type="button">
            {t('faq.ctaPrimary')}
          </button>
          <button className="hero-cta hero-cta--ghost" type="button">
            {t('faq.ctaSecondary')}
          </button>
        </div>
      </div>
    </section>
  )
}

export default FaqSection
