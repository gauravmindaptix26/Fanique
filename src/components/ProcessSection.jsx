import { steps } from '../data/content'

const ProcessSection = () => (
  <section id="process" className="process-section">
    <div className="mx-auto max-w-6xl px-6">
      <div className="process-grid">
        <div className="process-copy">
          <p className="process-kicker">How it works</p>
          <h2 className="process-title">
            Strategy, systems, and a relentless feedback loop.
          </h2>
          <p className="process-body">
            We combine brand architecture with performance-driven messaging. Every
            iteration is driven by analytics, not guesswork.
          </p>
          <button className="btn-primary process-cta">Reserve a slot</button>
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

export default ProcessSection
