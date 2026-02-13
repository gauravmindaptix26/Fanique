import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'

const clamp = (value, min, max) => Math.min(Math.max(value, min), max)

const platformOptions = ['OnlyFans', '4based', 'more', 'Fancentro', 'MALOUM']

const EarningsCalculatorSection = () => {
  const { t, i18n } = useTranslation()
  const [followers, setFollowers] = useState(120000)
  const [hours, setHours] = useState(2)
  const [platforms, setPlatforms] = useState(
    platformOptions.reduce((acc, platform) => ({ ...acc, [platform]: true }), {}),
  )

  const platformCount = useMemo(
    () => Object.values(platforms).filter(Boolean).length,
    [platforms],
  )

  const monthlyRevenue = useMemo(() => {
    const followerScore = followers / 1200
    const hoursScore = hours * 420
    const platformMultiplier = 1 + Math.max(0, platformCount - 1) * 0.18
    const estimate = (followerScore + hoursScore) * platformMultiplier
    return Math.max(800, Math.round(estimate / 10) * 10)
  }, [followers, hours, platformCount])

  const quarterlyRevenue = monthlyRevenue * 3
  const annualRevenue = monthlyRevenue * 12
  const numberLocale = i18n.language?.startsWith('de') ? 'de-DE' : 'en-US'

  const handleFollowersChange = (value) => {
    const next = clamp(Number(value) || 0, 0, 1000000)
    setFollowers(next)
  }

  const handleHoursChange = (value) => {
    const next = clamp(Number(value) || 0, 0, 12)
    setHours(next)
  }

  const togglePlatform = (platform) => {
    setPlatforms((prev) => ({ ...prev, [platform]: !prev[platform] }))
  }

  return (
    <section className="earnings-section" id="einkommensrechner">
      <div className="earnings-shell">
        <header className="earnings-header">
          <p className="earnings-eyebrow">{t('calculator.eyebrow')}</p>
          <h2>{t('calculator.title')}</h2>
          <p>{t('calculator.subtitle')}</p>
        </header>

        <div className="earnings-grid">
          <div className="earnings-panel earnings-panel--inputs">
            <div className="earnings-field">
              <div className="earnings-field-header">
                <div>
                  <h3>{t('calculator.followersTitle')}</h3>
                  <p>{t('calculator.followersBody')}</p>
                </div>
                <input
                  className="earnings-number"
                  type="number"
                  min="0"
                  max="1000000"
                  value={followers}
                  onChange={(event) => handleFollowersChange(event.target.value)}
                />
              </div>
              <input
                className="earnings-range"
                type="range"
                min="0"
                max="1000000"
                step="5000"
                value={followers}
                onChange={(event) => handleFollowersChange(event.target.value)}
              />
              <div className="earnings-range-meta">
                <span>0</span>
                <span>1,000,000</span>
              </div>
            </div>

            <div className="earnings-field">
              <div className="earnings-field-header">
                <div>
                  <h3>{t('calculator.hoursTitle')}</h3>
                  <p>{t('calculator.hoursBody')}</p>
                </div>
                <input
                  className="earnings-number"
                  type="number"
                  min="0"
                  max="12"
                  value={hours}
                  onChange={(event) => handleHoursChange(event.target.value)}
                />
              </div>
              <input
                className="earnings-range"
                type="range"
                min="0"
                max="12"
                step="0.5"
                value={hours}
                onChange={(event) => handleHoursChange(event.target.value)}
              />
              <div className="earnings-range-meta">
                <span>0</span>
                <span>12</span>
              </div>
            </div>

            <div className="earnings-field">
              <h3>{t('calculator.platformsTitle')}</h3>
              <div className="earnings-checklist">
                {platformOptions.map((platform) => (
                  <label key={platform} className="earnings-check">
                    <span>{platform}</span>
                    <input
                      type="checkbox"
                      checked={platforms[platform]}
                      onChange={() => togglePlatform(platform)}
                    />
                    <span className="earnings-checkmark" aria-hidden="true" />
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div className="earnings-panel earnings-panel--results">
            <div className="earnings-result">
              <span>{t('calculator.annual')}</span>
              <strong>${annualRevenue.toLocaleString(numberLocale)}</strong>
            </div>
            <p className="earnings-result-copy">{t('calculator.resultCopy')}</p>
            <div className="earnings-breakdown">
              <div>
                <span>{t('calculator.quarterly')}</span>
                <strong>${quarterlyRevenue.toLocaleString(numberLocale)}</strong>
              </div>
              <div>
                <span>{t('calculator.monthly')}</span>
                <strong>${monthlyRevenue.toLocaleString(numberLocale)}</strong>
              </div>
            </div>
            <div className="earnings-cta">
              <p>{t('calculator.ctaTitle')}</p>
              <button type="button">{t('calculator.ctaButton')}</button>
              <div className="earnings-rating">
                <span>{t('calculator.ratingLeft')}</span>
                <span>
                  {t('calculator.ratingScore')} &#9733;&#9733;&#9733;&#9733;&#9733;
                </span>
              </div>
              <p className="earnings-footnote">{t('calculator.footnote')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EarningsCalculatorSection
