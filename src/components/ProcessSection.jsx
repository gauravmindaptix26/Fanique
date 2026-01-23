import { steps } from '../data/content'

const ProcessSection = () => (
  <section id="process" className="mx-auto max-w-6xl px-6 py-20">
    <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
      <div className="space-y-6">
        <p className="text-xs uppercase tracking-[0.6em] text-[#BF9824]">
          How it works
        </p>
        <h2 className="font-display text-3xl text-white sm:text-4xl">
          Strategy, systems, and a relentless feedback loop.
        </h2>
        <p className="text-white/70">
          We combine brand architecture with performance-driven messaging. Every
          iteration is driven by analytics, not guesswork.
        </p>
        <button className="btn-primary">Reserve a slot</button>
      </div>
      <div className="space-y-6">
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
  </section>
)

export default ProcessSection
