import { motion } from 'framer-motion'
import CurvedLoop from './CurvedLoop'

const GuaranteeSection = () => (
  <section className="guarantee-section" id="erfahrung">
    <motion.div
      className="guarantee-card"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.4 }}
    >
      <motion.p
        className="guarantee-tag"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        GARANTIE*
      </motion.p>
      <motion.h2
        className="guarantee-title"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Double <span>or Nothing.</span>
      </motion.h2>
      <motion.p
        className="guarantee-body"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        Bei unserer OnlyFans Agentur stehen Ergebnisse an erster Stelle. Deshalb
        garantieren wir, deinen Umsatz innerhalb von maximal 3 Monaten zu
        verdoppeln - andernfalls verzichten wir vollstaendig auf unseren Anteil.
        Das bedeutet: Wenn wir nicht liefern, war unsere Arbeit fuer dich komplett
        kostenlos. Unsere erprobten Strategien, individuelle Betreuung und
        datengetriebenen Entscheidungen sorgen dafuer, dass dein Erfolg planbar
        wird. Dein Wachstum ist unser Versprechen.*
      </motion.p>
      <motion.div
        className="guarantee-signature"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <div className="laurel-stack" aria-hidden="true">
          <div className="laurel" />
          <div className="laurel" />
          <div className="laurel" />
        </div>
        <div className="signature-spacer" aria-hidden="true" />
        <div className="laurel-stack laurel-stack--right" aria-hidden="true">
          <div className="laurel laurel--right" />
          <div className="laurel laurel--right" />
          <div className="laurel laurel--right" />
        </div>
      </motion.div>

      <motion.div
        className="guarantee-footline"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <CurvedLoop
          marqueeText="Es geht um dich. âœ¦"
          speed={1.2}
          curveAmount={140}
          direction="right"
          interactive
        />
        <button className="guarantee-cta guarantee-cta--center" type="button">
          Anfragen
        </button>
      </motion.div>

      <p className="signature-role guarantee-role">CEO @ Fanique Primus</p>

      <motion.div
        className="guarantee-grid"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        viewport={{ once: true }}
      >
        <p className="guarantee-item">
          Du willst mit Menschen arbeiten, denen du <span>vertraust.</span>
        </p>
        <p className="guarantee-item">
          Du willst Menschen, die wissen, wie du dein volles
          <span> Potenzial ausschÃ¶pfst.</span>
        </p>
        <p className="guarantee-item">
          Du willst mit Menschen arbeiten, die in der Lage sind, deinen
          <span> Gewinn zu steigern.</span>
        </p>
      </motion.div>
    </motion.div>
  </section>
)

export default GuaranteeSection
