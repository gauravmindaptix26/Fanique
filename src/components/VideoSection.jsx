import { useTranslation } from 'react-i18next'
import TextPressure from './TextPressure'
import demoVideo from '../assets/images/766gh.mp4'

const VideoSection = () => {
  const { t } = useTranslation()

  return (
    <section className="video-section">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <div className="video-title" role="heading" aria-level="2">
          <div className="video-title-pressure">
            <TextPressure
              text={t('video.title')}
              flex={false}
              alpha={false}
              stroke={false}
              width
              weight
              italic
              textColor="currentColor"
              className="video-text-pressure"
              minFontSize={30}
            />
          </div>
        </div>
        <div className="video-subtitle">
          <div className="video-subtitle-pressure">
            <TextPressure
              text={t('video.subtitle')}
              flex={false}
              alpha={false}
              stroke={false}
              width
              weight
              italic
              textColor="currentColor"
              className="video-text-pressure"
              minFontSize={32}
            />
          </div>
        </div>

        <div className="video-card">
          <div className="video-frame">
            <video
              className="video-media"
              src={demoVideo}
              loop
              autoPlay
              muted
              playsInline
              preload="metadata"
            />
          </div>
          <button className="hero-cta hero-cta--primary" type="button">
            {t('video.cta')}
          </button>
        </div>
      </div>
    </section>
  )
}

export default VideoSection
