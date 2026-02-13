import { useTranslation } from 'react-i18next'

const StoriesSection = () => {
  const { t } = useTranslation()
  const testimonials = t('stories.items', { returnObjects: true })

  return (
    <section id="stories" className="mx-auto max-w-6xl px-6 py-20">
      <div className="flex flex-wrap items-center justify-between gap-6">
        <div>
          <p className="text-xs uppercase tracking-[0.6em] text-[#BF9824]">
            {t('stories.kicker')}
          </p>
          <h2 className="font-display text-3xl text-white sm:text-4xl">
            {t('stories.title')}
          </h2>
        </div>
        <button className="btn-secondary">{t('stories.cta')}</button>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {testimonials.map((item) => (
          <article key={item.name} className="testimonial-card">
            <p className="text-white/80">"{item.quote}"</p>
            <div className="mt-6">
              <p className="font-display text-lg text-white">{item.name}</p>
              <p className="text-sm text-white/50">{item.role}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default StoriesSection
