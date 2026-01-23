import { motion } from 'framer-motion'
import BlurText from './BlurText'

const HeroSection = () => (
  <section className="hero-showcase hero-showcase--text">
    <div className="mx-auto max-w-6xl px-6 text-center">
      <p className="hero-tagline">
        <BlurText
          text="AUCH ANONYM & OHNE PROMO MÖGLICH"
          delay={120}
          animateBy="words"
          direction="top"
        />
      </p>
      <h1 className="hero-headline">
        <BlurText
          text="Deine letzte OnlyFans Agentur."
          delay={220}
          animateBy="words"
          direction="top"
        />
        <span className="hero-headline-accent">
          <BlurText text=" Versprochen." delay={320} animateBy="words" direction="top" />
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
  </section>
)

export default HeroSection
