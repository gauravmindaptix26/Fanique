import TextPressure from './TextPressure'
import demoVideo from '../assets/images/766gh.mp4'

const VideoSection = () => (
  <section className="video-section">
    <div className="mx-auto max-w-6xl px-6 text-center">
      <div className="video-title" role="heading" aria-level="2">
        <div className="video-title-pressure">
          <TextPressure
            text="Seriöse OnlyFans-Agentur gesucht?"
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
            text="Schau dir dieses Video an:"
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
          Anfragen
        </button>
      </div>
    </div>
  </section>
)

export default VideoSection
