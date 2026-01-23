import { motion } from 'framer-motion'

const rows = [
  'Authentische & bewahrte Strategien auf +5 Plattformen',
  '24/7 Support & weibliche Ansprechpartnerin',
  'Faire Vertrage, monatliche Kundigung',
  'Auch anonym & ohne Promo moglich',
  'Leakschutz & -entfernung (DMCA takedown) inklusive',
  '200+ deutsche in-house Manager',
]

const ComparisonSection = () => (
  <section className="comparison-section">
    <div className="mx-auto max-w-6xl px-6">
      <motion.h2
        className="comparison-title"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Warum die Besten uns <span>wahlen.</span>
      </motion.h2>

      <motion.div
        className="comparison-table"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <div className="comparison-head">
          <div />
          <div className="comparison-col comparison-col--she">SheX</div>
          <div className="comparison-col">Other Agencies</div>
        </div>

        {rows.map((row) => (
          <div key={row} className="comparison-row">
            <span>{row}</span>
            <span className="comparison-check">✓</span>
            <span className="comparison-cross">×</span>
          </div>
        ))}
      </motion.div>

      <div className="comparison-actions">
        <button className="hero-cta hero-cta--primary" type="button">
          Anfragen
        </button>
        <button className="hero-cta hero-cta--ghost" type="button">
          Warum wir?
        </button>
      </div>
    </div>
  </section>
)

export default ComparisonSection
