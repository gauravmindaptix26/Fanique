import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import TextType from './TextType'
import demoVideo from '../assets/images/87e0e467330842c298be85bfdae7b861.mp4'

const VideoSection = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '[data-video="fly-left"]',
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
        '[data-video="fly-right"]',
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
        '[data-video="pop"]',
        { opacity: 0, scale: 0.86, rotate: -4, filter: 'blur(12px)' },
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
    <section className="video-section" ref={sectionRef}>
      <div className="mx-auto max-w-6xl px-6 text-center">
        <motion.h2
          className="video-title"
          data-video="fly-left"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <TextType
            texts={['Seriöse OnlyFans-Agentur gesucht?']}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor
            cursorCharacter="_"
            deletingSpeed={50}
            variableSpeedEnabled={false}
            variableSpeedMin={60}
            variableSpeedMax={120}
            cursorBlinkDuration={0.5}
          />
        </motion.h2>
        <motion.p
          className="video-subtitle"
          data-video="fly-right"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <TextType
            texts={['Schau dir dieses Video an:']}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor
            cursorCharacter="_"
            deletingSpeed={50}
            variableSpeedEnabled={false}
            variableSpeedMin={60}
            variableSpeedMax={120}
            cursorBlinkDuration={0.5}
          />
        </motion.p>

        <motion.div
          className="video-card"
          data-video="pop"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="video-frame">
            <video
              className="video-media"
              src={demoVideo}
              loop
              autoPlay
              muted
              playsInline
              preload="metadata"
            />
          </div>
          <motion.button
            className="hero-cta hero-cta--primary"
            data-video="fly-left"
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 240, damping: 16 }}
          >
            Anfragen
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default VideoSection
