import { useTranslation } from 'react-i18next'

const ProcessSection = () => {
  const { t } = useTranslation()
  const steps = t('process.steps', { returnObjects: true })

  return (
    <section id="process" className="process-section">
      <div className="mx-auto max-w-6xl px-6">
        <div className="process-grid">
          <div className="process-copy">
            <p className="process-kicker">{t('process.kicker')}</p>
            <h2 className="process-title">{t('process.title')}</h2>
            <p className="process-body">{t('process.body')}</p>
            <button className="btn-primary process-cta">{t('process.cta')}</button>
          </div>
          <div className="process-steps">
            {steps.map((step, index) => (
              <div key={step.title} className="step-card">
                <div className="step-index">0{index + 1}</div>
                <div>
                  <h3 className="font-display text-xl text-white">{step.title}</h3>
                  <p className="mt-2 text-white/70">{step.copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProcessSection
