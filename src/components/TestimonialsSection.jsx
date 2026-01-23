import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import gsap from 'gsap'
import img1 from '../assets/images/Sexy Escort.png'
import img2 from '../assets/images/Frau sitzt auf Mann.png'
import img3 from '../assets/images/Paar beim Sex.jpg'
import img4 from '../assets/images/Reiterstellung.webp'
import img5 from '../assets/images/Sexy Escort.png'



const TestimonialsSection = () => {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const watermarkX = useTransform(scrollYProgress, [0, 1], ['-12%', '12%'])

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.fromTo(
        '[data-testimonials="fly-left"]',
        { opacity: 0, x: -220, y: -20, rotate: -10, filter: 'blur(12px)' },
        {
          opacity: 1,
          x: 0,
          y: 0,
          rotate: 0,
          filter: 'blur(0px)',
          duration: 1.1,
          stagger: 0.12,
        },
      )
        .fromTo(
          '[data-testimonials="fly-right"]',
          { opacity: 0, x: 220, y: 20, rotate: 10, filter: 'blur(12px)' },
          {
            opacity: 1,
            x: 0,
            y: 0,
            rotate: 0,
            filter: 'blur(0px)',
            duration: 1.1,
            stagger: 0.12,
          },
          '-=0.7',
        )
        .fromTo(
          '[data-testimonials="pop"]',
          { opacity: 0, scale: 0.85, rotate: -6, y: 30, filter: 'blur(14px)' },
          {
            opacity: 1,
            scale: 1,
            rotate: 0,
            y: 0,
            filter: 'blur(0px)',
            duration: 1.2,
            stagger: 0.08,
          },
          '-=0.6',
        )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="testimonials-section" ref={sectionRef}>
      <motion.div
        className="testimonials-watermark"
        style={{ x: watermarkX }}
        aria-hidden="true"
      >
        KUNDENSTIMMEN
      </motion.div>

      <motion.div
        className="testimonials-wrap"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <p className="testimonials-tag" data-testimonials="fly-left">
          KUNDENSTIMMEN
        </p>
        <h2 className="testimonials-title" data-testimonials="fly-right">
          Diese 0.1% Creators vertrauen unserer{' '}
          <span>OnlyFans Agentur</span>
        </h2>
      </motion.div>

      <div className="testimonials-stage">
        <motion.div
          className="testimonials-card"
          data-testimonials="pop"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="testimonials-card-text"
            style={{ x: watermarkX }}
            aria-hidden="true"
          >
            KUNDENSTIMMEN
          </motion.div>
          <div className="testimonials-card-images">
            <div className="testimonial-figure testimonial-figure--one" data-testimonials="pop">
              <img src={img1} alt="Creator preview 1" />
            </div>
            <div className="testimonial-figure testimonial-figure--two" data-testimonials="pop">
              <img src={img2} alt="Creator preview 2" />
            </div>
            <div className="testimonial-figure testimonial-figure--three" data-testimonials="pop">
              <img src={img3} alt="Creator preview 3" />
            </div>
            <div className="testimonial-figure testimonial-figure--four" data-testimonials="pop">
              <img src={img4} alt="Creator preview 4" />
            </div>
            <div className="testimonial-figure testimonial-figure--five" data-testimonials="pop">
              <img src={img5} alt="Creator preview 5" />
            </div>
          </div>
          <div className="testimonials-footer">
            <div className="testimonials-rating" data-testimonials="fly-left">
              <p>Bestbewertet!</p>
              <div className="rating-stars">ミ.ミ.ミ.ミ.ミ.</div>
              <p>von 50+ Creators</p>
            </div>
            <div className="testimonials-actions" data-testimonials="fly-right">
              <motion.button
                className="hero-cta hero-cta--primary"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 240, damping: 16 }}
              >
                Anfragen
              </motion.button>
              <motion.button
                className="hero-cta hero-cta--ghost"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 240, damping: 16 }}
              >
                Kundenstimmen
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TestimonialsSection
