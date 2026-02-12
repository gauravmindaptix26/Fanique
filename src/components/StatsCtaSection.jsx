import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'

const StatsCtaSection = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '[data-stats="bar"]',
        { scaleY: 0.6 },
        { scaleY: 1.1, duration: 1.8, repeat: -1, yoyo: true, ease: 'sine.inOut', stagger: 0.12 },
      )
      gsap.fromTo(
        '[data-stats="float"]',
        { y: 6 },
        { y: -6, duration: 3.2, repeat: -1, yoyo: true, ease: 'sine.inOut' },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="stats-cta-section" ref={sectionRef}>
      <div className="mx-auto max-w-6xl px-6 text-center">
        <div className="stats-cta-top">
          <span className="stats-laurel" aria-hidden="true" />
          <div>
            <p className="stats-kicker">#1 OnlyFans Agentur</p>
            <div className="stats-stars">★★★★★</div>
          </div>
          <span className="stats-laurel stats-laurel--right" aria-hidden="true" />
        </div>

        <p className="stats-subline">
          Jetzt garantiert wachsen.
        </p>

        <motion.h2
          className="stats-title"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Wir arbeiten mtl. mit 3-5 neuen Creators.{' '}
          <span>Gehorst du dazu?</span>
        </motion.h2>

        <div className="stats-row" data-stats="float">
          <div className="stats-avatars">
            {Array.from({ length: 6 }).map((_, index) => (
              <span key={index} className="stats-avatar" />
            ))}
          </div>
          <div className="stats-rating">
            <p>Bestbewertet!</p>
            <div className="stats-stars">★★★★★</div>
            <p>von 50+ Creators.</p>
          </div>
        </div>

        <div className="stats-bars" aria-hidden="true">
          {Array.from({ length: 10 }).map((_, index) => (
            <span key={index} data-stats="bar" />
          ))}
        </div>

        <button className="hero-cta hero-cta--primary stats-cta" type="button">
          Anfragen
        </button>
      </div>
    </section>
  )
}

export default StatsCtaSection
