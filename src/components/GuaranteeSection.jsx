import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import CurvedLoop from './CurvedLoop'

const GuaranteeSection = () => {
  const { t } = useTranslation()
  const items = t('guarantee.items', { returnObjects: true })

  return (
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
          {t('guarantee.tag')}
        </motion.p>
        <motion.h2
          className="guarantee-title"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {t('guarantee.title')} <span>{t('guarantee.titleAccent')}</span>
        </motion.h2>
        <motion.p
          className="guarantee-body"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {t('guarantee.body')}
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
            marqueeText={t('guarantee.loop')}
            speed={1.2}
            curveAmount={140}
            direction="right"
            interactive
          />
          <button className="guarantee-cta guarantee-cta--center" type="button">
            {t('guarantee.cta')}
          </button>
        </motion.div>

        <p className="signature-role guarantee-role">{t('guarantee.role')}</p>

        <motion.div
          className="guarantee-grid"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
        >
          {items.map((item) => (
            <p key={item} className="guarantee-item">
              {item}
            </p>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default GuaranteeSection
