import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'

const faqs = [
  'Was bringt mir eine Zusammenarbeit mit einer OnlyFans Agentur wie SheX?',
  'Ich hatte schon schlechte Erfahrungen mit anderen Agenturen – warum ist SheX anders?',
  'Wie lauft die Zusammenarbeit mit SheX ab?',
  'Arbeitet ihr auch mit anderen Plattformen ausser OnlyFans?',
  'Wie funktioniert das "Content-Recycling" bei SheX?',
  'Wie viel kann ich mit SheX verdienen?',
  'Was kostet mich die Zusammenarbeit mit SheX?',
  'Habt ihr Erfahrung mit Influencern?',
  'Wie kann ich sicher sein, dass die Zusammenarbeit serios ist?',
  'Muss ich mein Gesicht zeigen oder kann ich anonym bleiben?',
  'Habe ich Zugang zu meinem OnlyFans-Account?',
  'Muss ich selbst promoten?',
  'Brauche ich Social Media, um mit SheX erfolgreich zu sein?',
  'Ich habe kaum Zeit – lohnt sich das trotzdem?',
  'Was passiert mit meinem Content?',
  'Wie schutzt SheX meinen Content vor Leaks?',
  'Was ist, wenn mein Account gesperrt wurde?',
  'Gibt es auch Support bei Steuern und Grundung?',
  'Was macht eine OnlyFans Agentur?',
  'Welche ist die beste OnlyFans Agentur in Deutschland?',
  'Wie hilft mir eine OnlyFans Agentur beim Wachsen?',
  'Was kostet eine OnlyFans Agentur?',
  'Wie erkenne ich eine seriose OnlyFans Agentur?',
  'Was bringt mir eine OnlyFans Agentur wirklich?',
  'Werde ich bei einer OnlyFans Agentur wie eine von vielen behandelt?',
  'Kann ich auf OnlyFans Geld verdienen, ohne mein Gesicht zu zeigen?',
]

const FaqSection = () => {
  const sectionRef = useRef(null)

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
          FAQ
        </motion.h2>

        <div className="faq-list">
          {faqs.map((question) => (
            <div key={question} className="faq-item" data-faq="item">
              <p>{question}</p>
              <span className="faq-chevron" aria-hidden="true" />
            </div>
          ))}
        </div>

        <div className="faq-actions">
          <button className="hero-cta hero-cta--primary" type="button">
            Anfragen
          </button>
          <button className="hero-cta hero-cta--ghost" type="button">
            Alle FAQs
          </button>
        </div>
      </div>
    </section>
  )
}

export default FaqSection
