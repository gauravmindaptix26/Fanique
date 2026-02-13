import { useTranslation } from 'react-i18next'

const MarqueeSection = () => {
  const { t } = useTranslation()
  const marqueeItems = t('marquee.items', { returnObjects: true })

  return (
    <section id="insights" className="mx-auto max-w-6xl px-6 py-20">
      <div className="marquee">
        <div className="marquee-track">
          {marqueeItems.map((item) => (
            <span key={item} className="marquee-item">
              {item}
            </span>
          ))}
        </div>
        <div className="marquee-track" aria-hidden="true">
          {marqueeItems.map((item) => (
            <span key={`${item}-clone`} className="marquee-item">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MarqueeSection
