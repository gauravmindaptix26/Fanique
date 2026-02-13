import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import BlurText from './BlurText'
import heroVideoA from '../assets/images/AI.mp4'
import heroVideoB from '../assets/images/23.mp4'
import heroVideoC from '../assets/images/grok-video-1cdb930c-13d0-4bfe-95ee-9245892645d7.mp4'
import heroVideoD from '../assets/images/Success and Growth new.mp4'

const HeroSection = () => {
  const { t } = useTranslation()
  const points = t('hero.points', { returnObjects: true })

  return (
    <section className="hero-showcase hero-showcase--text hero-showcase--split">
      <div className="hero-split-shell">
        <div className="hero-split">
          <div className="hero-content">
            <p className="hero-tagline">
              <BlurText text={t('hero.tagline')} delay={120} animateBy="words" direction="top" />
            </p>
            <h1 className="hero-headline">
              <span className="hero-headline-line">{t('hero.headline.line1')}</span>
              <span className="hero-headline-line hero-headline-accent">
                {t('hero.headline.line2')}
              </span>
            </h1>
            <p className="hero-body">
              <BlurText text={t('hero.body')} delay={420} animateBy="words" direction="top" />
            </p>
            <div className="hero-points">
              {points.map((point, index) => (
                <span key={point} className="hero-point">
                  <BlurText
                    text={point}
                    delay={520 + index * 80}
                    animateBy="words"
                    direction="top"
                  />
                </span>
              ))}
            </div>
            <motion.button
              className="hero-cta hero-cta--primary"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 240, damping: 16 }}
            >
              {t('hero.cta')}
            </motion.button>
          </div>
          <div className="hero-media">
            <div className="hero-media-column hero-media-column--up">
              <div className="hero-media-track" aria-hidden="true">
                <div className="hero-media-item">
                  <video src={heroVideoA} autoPlay muted loop playsInline preload="metadata" />
                </div>
                <div className="hero-media-item">
                  <video src={heroVideoB} autoPlay muted loop playsInline preload="metadata" />
                </div>
                <div className="hero-media-item">
                  <video src={heroVideoC} autoPlay muted loop playsInline preload="metadata" />
                </div>
                <div className="hero-media-item">
                  <video src={heroVideoD} autoPlay muted loop playsInline preload="metadata" />
                </div>
                <div className="hero-media-item">
                  <video src={heroVideoA} autoPlay muted loop playsInline preload="metadata" />
                </div>
                <div className="hero-media-item">
                  <video src={heroVideoB} autoPlay muted loop playsInline preload="metadata" />
                </div>
                <div className="hero-media-item">
                  <video src={heroVideoC} autoPlay muted loop playsInline preload="metadata" />
                </div>
                <div className="hero-media-item">
                  <video src={heroVideoD} autoPlay muted loop playsInline preload="metadata" />
                </div>
              </div>
            </div>
            <div className="hero-media-column hero-media-column--down">
              <div className="hero-media-track" aria-hidden="true">
                <div className="hero-media-item">
                  <video src={heroVideoD} autoPlay muted loop playsInline preload="metadata" />
                </div>
                <div className="hero-media-item">
                  <video src={heroVideoC} autoPlay muted loop playsInline preload="metadata" />
                </div>
                <div className="hero-media-item">
                  <video src={heroVideoB} autoPlay muted loop playsInline preload="metadata" />
                </div>
                <div className="hero-media-item">
                  <video src={heroVideoA} autoPlay muted loop playsInline preload="metadata" />
                </div>
                <div className="hero-media-item">
                  <video src={heroVideoD} autoPlay muted loop playsInline preload="metadata" />
                </div>
                <div className="hero-media-item">
                  <video src={heroVideoC} autoPlay muted loop playsInline preload="metadata" />
                </div>
                <div className="hero-media-item">
                  <video src={heroVideoB} autoPlay muted loop playsInline preload="metadata" />
                </div>
                <div className="hero-media-item">
                  <video src={heroVideoA} autoPlay muted loop playsInline preload="metadata" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
