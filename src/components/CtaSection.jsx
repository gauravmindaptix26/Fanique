const CtaSection = () => (
  <section className="mx-auto max-w-6xl px-6 pb-24">
    <div className="cta-card">
      <div className="space-y-4">
        <p className="text-xs uppercase tracking-[0.6em] text-black/70">
          Ready to elevate
        </p>
        <h2 className="font-display text-3xl text-black sm:text-4xl">
          The next launch could be your most iconic one yet.
        </h2>
        <p className="text-black/70">
          Let us build the system, visuals, and messaging while you focus on creating.
          We only onboard a few creators each month.
        </p>
      </div>
      <div className="flex flex-wrap gap-4">
        <button className="btn-dark">Schedule Strategy Call</button>
        <button className="btn-outline-dark">Get Pricing</button>
      </div>
    </div>
  </section>
)

export default CtaSection
