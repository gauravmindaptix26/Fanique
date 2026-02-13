import { useEffect, useState } from 'react'
import { Trans, useTranslation } from 'react-i18next'
import BounceCards from './BounceCards'
import img1 from '../assets/images/Sexy Escort.png'
import img2 from '../assets/images/Frau sitzt auf Mann.png'
import img3 from '../assets/images/Paar beim Sex.jpg'
import img4 from '../assets/images/Reiterstellung.webp'
import img5 from '../assets/images/Sexy Escort.png'
import img6 from '../assets/images/Frauen in Limousine.jpeg'
import img7 from '../assets/images/Frau in Dessous.jpg'
import img8 from '../assets/images/Frau in Dessous mit Schleife.jpeg'
import img9 from '../assets/images/Frau in Dessous mit Mann.jpg'

const TestimonialsSection = () => {
  const { t } = useTranslation()
  const [cardSize, setCardSize] = useState({ width: 760, height: 360 })

  useEffect(() => {
    const handleResize = () => {
      const baseWidth = Math.max(280, window.innerWidth - 48)
      const width = Math.min(760, baseWidth)
      const height = Math.round((width * 360) / 760)
      setCardSize({ width, height })
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <section className="testimonials-section">
      <div className="testimonials-wrap">
        <h2 className="testimonials-title">
          <Trans i18nKey="testimonials.title" />
        </h2>
      </div>

      <div className="testimonials-stage">
        <div className="testimonials-loop" aria-hidden="true">
          <div className="testimonials-loop-track">
            <span>{t('testimonials.loopLabel')}</span>
          </div>
        </div>
        <div className="testimonials-card">
          <div className="testimonials-card-images">
            <BounceCards
              className="testimonials-bounce"
              images={[img1, img2, img3, img4, img5, img6, img7, img8, img9]}
              containerWidth={cardSize.width}
              containerHeight={cardSize.height}
              animationDelay={0.4}
              animationStagger={0.08}
              easeType="elastic.out(1, 0.6)"
              transformStyles={[
                'rotate(-8deg) translate(-240px)',
                'rotate(-6deg) translate(-180px)',
                'rotate(-3deg) translate(-120px)',
                'rotate(-2deg) translate(-60px)',
                'rotate(0deg)',
                'rotate(2deg) translate(60px)',
                'rotate(3deg) translate(120px)',
                'rotate(6deg) translate(180px)',
                'rotate(8deg) translate(240px)',
              ]}
              enableHover
            />
          </div>
          <div className="testimonials-footer">
            <div className="testimonials-rating">
              <p>{t('testimonials.ratingLabel')}</p>
              <div className="rating-stars" aria-label={t('testimonials.ratingAria')}>
                <span className="rating-star" aria-hidden="true">
                  &#9733;
                </span>
                <span className="rating-star" aria-hidden="true">
                  &#9733;
                </span>
                <span className="rating-star" aria-hidden="true">
                  &#9733;
                </span>
                <span className="rating-star" aria-hidden="true">
                  &#9733;
                </span>
                <span className="rating-star" aria-hidden="true">
                  &#9733;
                </span>
              </div>
              <p>{t('testimonials.ratingSuffix')}</p>
            </div>
            <div className="testimonials-actions">
              <button className="hero-cta hero-cta--primary" type="button">
                {t('testimonials.ctaPrimary')}
              </button>
              <button className="hero-cta hero-cta--ghost" type="button">
                {t('testimonials.ctaSecondary')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
