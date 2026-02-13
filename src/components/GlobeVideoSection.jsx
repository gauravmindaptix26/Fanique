import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import globeVideo from '../assets/images/53.mp4'

const GlobeVideoSection = () => {
  const { t } = useTranslation()
  const videoRef = useRef(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5
    }
  }, [])

  return (
    <section className="globe-video-section">
      <div className="globe-video-shell">
        <div className="globe-video-text">
          <p className="globe-video-tag">{t('globeVideo.tag')}</p>
          <h2 className="globe-video-title">{t('globeVideo.title')}</h2>
          <p className="globe-video-body">{t('globeVideo.body')}</p>
          <div className="globe-video-actions">
            <button className="hero-cta hero-cta--primary" type="button">
              {t('globeVideo.ctaPrimary')}
            </button>
            <button className="hero-cta hero-cta--ghost" type="button">
              {t('globeVideo.ctaSecondary')}
            </button>
          </div>
        </div>
        <div className="globe-video-media">
          <div className="globe-video-frame">
            <video
              ref={videoRef}
              className="globe-video-player"
              src={globeVideo}
              loop
              autoPlay
              muted
              playsInline
              preload="metadata"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default GlobeVideoSection
