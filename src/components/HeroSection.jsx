import { motion } from 'framer-motion'
import BlurText from './BlurText'
import heroVideoA from '../assets/images/AI.mp4'
import heroVideoB from '../assets/images/23.mp4'
import heroVideoC from '../assets/images/grok-video-1cdb930c-13d0-4bfe-95ee-9245892645d7.mp4'
import heroVideoD from '../assets/images/Success and Growth new.mp4'

const HeroSection = () => (
  <section className="hero-showcase hero-showcase--text hero-showcase--split">
    <div className="hero-split-shell">
      <div className="hero-split">
        <div className="hero-content">
          <p className="hero-tagline">
            <BlurText
              text="AUCH ANONYM & OHNE PROMO MÖGLICH"
              delay={120}
              animateBy="words"
              direction="top"
            />
          </p>
          <h1 className="hero-headline">
            <span className="hero-headline-line">Deine letzte OnlyFans</span>
            <span className="hero-headline-line hero-headline-accent">
              Agentur Versprochen.
            </span>
          </h1>
          <p className="hero-body">
            <BlurText
              text="Genervt von leeren Versprechungen, schlechter Kommunikation und unglaubwürdigem Chatting? Profitiere von authentischem Management, 24/7 Support und garantiertem Wachstum."
              delay={420}
              animateBy="words"
              direction="top"
            />
          </p>
          <div className="hero-points">
            <span className="hero-point">
              <BlurText text="Faire Verträge" delay={520} animateBy="words" direction="top" />
            </span>
            <span className="hero-point">
              <BlurText
                text="Gewinnsteigerung trotz Share"
                delay={600}
                animateBy="words"
                direction="top"
              />
            </span>
            <span className="hero-point">
              <BlurText text="5+ Plattformen" delay={680} animateBy="words" direction="top" />
            </span>
          </div>
          <motion.button
            className="hero-cta hero-cta--primary"
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 240, damping: 16 }}
          >
            Anfragen
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

export default HeroSection
