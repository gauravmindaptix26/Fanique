import { motion } from 'framer-motion'
import { Trans, useTranslation } from 'react-i18next'

const ComparisonSection = () => {
  const { t } = useTranslation()
  const rows = t('comparison.rows', { returnObjects: true })

  return (
    <section className="comparison-section">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          className="comparison-title"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <Trans i18nKey="comparison.title" />
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
            <div className="comparison-col comparison-col--she">{t('comparison.columns.ours')}</div>
            <div className="comparison-col">{t('comparison.columns.others')}</div>
          </div>

          {rows.map((row) => (
            <div key={row} className="comparison-row">
              <span>{row}</span>
              <span className="comparison-check">&#10003;</span>
              <span className="comparison-cross">&times;</span>
            </div>
          ))}
        </motion.div>

        <div className="comparison-actions">
          <button className="hero-cta hero-cta--primary" type="button">
            {t('comparison.ctaPrimary')}
          </button>
          <button className="hero-cta hero-cta--ghost" type="button">
            {t('comparison.ctaSecondary')}
          </button>
        </div>
      </div>
    </section>
  )
}

export default ComparisonSection
