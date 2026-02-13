import { useEffect, useRef } from 'react'
import { Trans, useTranslation } from 'react-i18next'
import gsap from 'gsap'
import img1 from '../assets/images/Frau in Dessous.jpg'
import img2 from '../assets/images/Frau in Dessous mit Schleife.jpeg'
import img3 from '../assets/images/Frau in Dessous mit Mann.jpg'
import img4 from '../assets/images/Frauen in Limousine.jpeg'
import img5 from '../assets/images/Brüstekneten4.jpeg'

const images = [img1, img2, img3, img4, img5]

const ErfahrungsberichteSection = () => {
  const { t } = useTranslation()
  const cards = t('erf.cards', { returnObjects: true })
  const loopWord = t('erf.loopWord')
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '[data-erf="fade"]',
        { opacity: 0, y: 30, filter: 'blur(10px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 1.1,
          ease: 'power3.out',
          stagger: 0.12,
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const loopWords = Array.from({ length: 7 }, () => loopWord)

  return (
    <section className="erf-testimonials" ref={sectionRef}>
      <div className="erf-loop" aria-hidden="true">
        <div className="erf-loop-track">
          {loopWords.map((word, index) => (
            <span key={`erf-a-${index}`}>{word}</span>
          ))}
          {loopWords.map((word, index) => (
            <span key={`erf-b-${index}`}>{word}</span>
          ))}
        </div>
      </div>
      <div className="erf-loop erf-loop--lower" aria-hidden="true">
        <div className="erf-loop-track">
          {loopWords.map((word, index) => (
            <span key={`erf-c-${index}`}>{word}</span>
          ))}
          {loopWords.map((word, index) => (
            <span key={`erf-d-${index}`}>{word}</span>
          ))}
        </div>
      </div>

      <div className="erf-header" data-erf="fade">
        <p className="erf-kicker">{t('erf.kicker')}</p>
        <h2 className="erf-title">
          <span className="erf-title-line">{t('erf.titleLine1')}</span>
          <span className="erf-title-line erf-title-line--accent">
            {t('erf.titleLine2')}
          </span>
        </h2>
      </div>

      <div className="erf-grid">
        {cards.map((card, index) => (
          <article key={card.name} className="erf-card" data-erf="fade">
            <div className="erf-card-top">
              <span className="erf-mark">FRA</span>
              <h3 className="erf-card-title">{t('erf.cardTitle')}</h3>
            </div>
            <p className="erf-card-copy">{card.copy}</p>
            <div className="erf-media">
              <img src={images[index % images.length]} alt={card.name} loading="lazy" decoding="async" />
              <span className="erf-play" aria-hidden="true" />
              <span className={`erf-name erf-name--${card.namePosition}`}>
                {card.name}
              </span>
            </div>
          </article>
        ))}
      </div>

      <button className="erf-cta" data-erf="fade" type="button">
        {t('erf.cta')}
      </button>

      <div className="erf-growth" data-erf="fade">
        <div className="erf-growth-bars" aria-hidden="true">
          {Array.from({ length: 10 }).map((_, index) => (
            <span key={`erf-bar-${index}`} />
          ))}
        </div>
        <div className="erf-growth-top">
          <span className="erf-growth-laurel erf-growth-laurel--left" aria-hidden="true" />
          <div className="erf-growth-topline">
            <span className="erf-growth-rank">{t('erf.rank')}</span>
            <div className="erf-growth-stars" aria-label={t('erf.starsAria')}>
              {Array.from({ length: 5 }).map((_, index) => (
                <span key={`erf-star-top-${index}`} className="erf-star">
                  &#9733;
                </span>
              ))}
            </div>
          </div>
          <span className="erf-growth-laurel erf-growth-laurel--right" aria-hidden="true" />
        </div>
        <div className="erf-growth-tag">
          <span>{t('erf.growthTag')}</span>
          <span className="erf-growth-sign">{t('erf.signature')}</span>
        </div>
        <h3 className="erf-growth-title">
          <Trans i18nKey="erf.growthTitle" />
        </h3>
        <div className="erf-growth-rating">
          <div className="erf-growth-avatars" aria-hidden="true">
            {images.map((image, index) => (
              <img
                key={`erf-avatar-${index}`}
                className="erf-growth-avatar"
                src={image}
                alt=""
                loading="lazy"
                decoding="async"
              />
            ))}
          </div>
          <div className="erf-growth-review">
            <div className="erf-growth-review-title">{t('erf.reviewTitle')}</div>
            <div className="erf-growth-stars erf-growth-stars--gold" aria-label={t('erf.starsAria')}>
              {Array.from({ length: 5 }).map((_, index) => (
                <span key={`erf-star-bottom-${index}`} className="erf-star">
                  &#9733;
                </span>
              ))}
            </div>
            <div className="erf-growth-review-copy">{t('erf.reviewCopy')}</div>
          </div>
        </div>
        <div className="erf-growth-pill">{t('erf.pill')}</div>
      </div>
    </section>
  )
}

export default ErfahrungsberichteSection
