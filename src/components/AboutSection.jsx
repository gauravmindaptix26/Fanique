import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import gsap from 'gsap'

const AboutSection = () => {
  const { t } = useTranslation()
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '[data-about="fade"]',
        { opacity: 0, y: 30, filter: 'blur(10px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 1.1,
          ease: 'power3.out',
          stagger: 0.12,
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="about-section" id="erfahrungsberichte" ref={sectionRef}>
      <div className="about-hero" data-about="fade">
        <div className="about-hero-content">
          <h2 className="about-hero-title" data-about="fade">
            <span className="about-hero-title-top">{t('about.titleTop')}</span>
            <span className="about-hero-title-bottom">{t('about.titleBottom')}</span>
          </h2>
          <p className="about-hero-sub" data-about="fade">
            {t('about.sub')}
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
