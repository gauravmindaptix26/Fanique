import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import imageOne from '../assets/images/Frau in Dessous.jpg'
import imageTwo from '../assets/images/Sexy Escort.png'

const AboutSection = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '[data-about="fly-left"]',
        { opacity: 0, x: -140, y: 30, rotate: -6, filter: 'blur(10px)' },
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
        '[data-about="fly-right"]',
        { opacity: 0, x: 140, y: 30, rotate: 6, filter: 'blur(10px)' },
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
      gsap.to('[data-about="float"]', {
        y: -10,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: 0.2,
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="about-section" ref={sectionRef}>
      <div className="mx-auto max-w-6xl px-6 about-grid">
        <div className="about-cards">
          <div className="about-card about-card--left" data-about="float">
            <img className="about-card-image" src={imageOne} alt="Creator highlight 1" />
            <div className="about-rating">
              <span className="about-google">G</span>
              <div>
                <p>70+ Reviews</p>
                <div className="about-stars">★★★★★</div>
              </div>
            </div>
            <div className="about-pill">
              <span>Werde Teil unserer Creator-Familie.</span>
            </div>
          </div>
          <div className="about-card about-card--front" data-about="float">
            <img className="about-card-image" src={imageTwo} alt="Creator highlight 2" />
            <div className="about-badges">
              <span>SHE</span>
              <span>4B</span>
              <span>OF</span>
            </div>
          </div>
        </div>

        <div className="about-content">
          <motion.p
            className="about-tag"
            data-about="fly-left"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            AoBER UNS
          </motion.p>
          <motion.h2
            className="about-title"
            data-about="fly-left"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            Deine letzte Agentur. <span>Versprochen.</span>
          </motion.h2>
          <motion.p
            className="about-body"
            data-about="fly-left"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            SheX ist die schnellstwachsende Premium OnlyFans-Management-Agentur und
            offiziell im europAischen Markenregister eingetragen. Mit unserem HQ in
            Hamburg und einem deutschen Team von A0ber 120 Mitarbeiterinnen helfen
            wir OnlyFans-Creatorinnen weltweit, die Top 0,1% zu erreichen.
            Zahlreiche Auszeichnungen und Top-Bewertungen unterstreichen die
            QualitAt unserer Dienstleistungen.
          </motion.p>

          <div className="about-feature" data-about="fly-right">
            <div className="about-icon">ƒT</div>
            <div>
              <h3>Fair. Herzlich. Immer fA0ber dich da.</h3>
              <p>
                Wir sind die erste und einzige Agentur mit WohlfA4hlfaktor. Bei uns
                kannst du dich fallenlassen und genieAYen.
              </p>
            </div>
          </div>

          <div className="about-feature" data-about="fly-right">
            <div className="about-icon">ƒ~.</div>
            <div>
              <h3>Erfahren. Professionell. Dein Wachstumspartner.</h3>
              <p>
                4 Jahre Erfahrung und 200 erfolgreiche Kooperationen mit
                OnlyFans-Creatorinnen machen deinen Erfolg unvermeidbar.
              </p>
            </div>
          </div>

          <div className="about-actions" data-about="fly-left">
            <button className="hero-cta hero-cta--primary" type="button">
              Anfragen
            </button>
            <button className="hero-cta hero-cta--ghost" type="button">
              Aober SheX
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
