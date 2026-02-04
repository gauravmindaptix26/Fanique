import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import LogoLoop from './LogoLoop'

const topLogos = [
  { text: 'nvue', className: 'logo-text logo-nvue' },
  { text: 'CreatorHero', className: 'logo-text logo-creator' },
  { text: 'OnlyFans', className: 'logo-text logo-onlyfans' },
  { text: '4based', className: 'logo-text logo-4based' },
  { text: 'MALOUM', className: 'logo-text logo-maloum' },
  { text: 'fanv', className: 'logo-text logo-fanv' },
]

const bottomLogos = [
  { text: '.T Forbes', className: 'logo-text logo-tforbes' },
  { text: 'VENUS', className: 'logo-text logo-venus' },
  { text: 'FrankfurterRundschau', className: 'logo-text logo-frank' },
  { text: 'Wirtschaft', className: 'logo-text logo-wirtschaft' },
  { text: 'WELT', className: 'logo-text logo-welt' },
]

const LogoSection = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '[data-logo="fly-left"]',
        { opacity: 0, x: -160, y: 20, rotate: -6, filter: 'blur(10px)' },
        {
          opacity: 1,
          x: 0,
          y: 0,
          rotate: 0,
          filter: 'blur(0px)',
          duration: 1,
          ease: 'power3.out',
          stagger: 0.2,
        },
      )
      gsap.fromTo(
        '[data-logo="fly-right"]',
        { opacity: 0, x: 160, y: 20, rotate: 6, filter: 'blur(10px)' },
        {
          opacity: 1,
          x: 0,
          y: 0,
          rotate: 0,
          filter: 'blur(0px)',
          duration: 1,
          ease: 'power3.out',
          stagger: 0.2,
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="logo-section" ref={sectionRef}>
      <motion.div
        className="logo-wall"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <LogoLoop
          logos={topLogos}
          speed={100}
          direction="left"
          logoHeight={40}
          gap={40}
          hoverSpeed={80}
          scaleOnHover
          fadeOut
          fadeOutColor="#070707"
          ariaLabel="Partner logos"
          className="logo-loop--top"
          data-logo="fly-left"
        />
        <LogoLoop
          logos={bottomLogos}
          speed={90}
          direction="left"
          logoHeight={44}
          gap={48}
          hoverSpeed={70}
          scaleOnHover
          fadeOut
          fadeOutColor="#070707"
          ariaLabel="Press logos"
          className="logo-loop--bottom"
          data-logo="fly-right"
        />
      </motion.div>
    </section>
  )
}

export default LogoSection
