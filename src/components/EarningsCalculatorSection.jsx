import { useMemo, useState } from 'react'

const clamp = (value, min, max) => Math.min(Math.max(value, min), max)

const platformOptions = [
  'OnlyFans',
  '4based',
  'fanvue',
  'more',
  'Fancentro',
  'MALOUM',
]

const EarningsCalculatorSection = () => {
  const [followers, setFollowers] = useState(120000)
  const [hours, setHours] = useState(2)
  const [platforms, setPlatforms] = useState(
    platformOptions.reduce((acc, platform) => ({ ...acc, [platform]: true }), {})
  )

  const platformCount = useMemo(
    () => Object.values(platforms).filter(Boolean).length,
    [platforms]
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
          <p className="earnings-eyebrow">OnlyFans Earnings Calculator</p>
          <h2>OnlyFans Earnings Calculator</h2>
          <p>Get a clear breakdown of your potential earnings.</p>
        </header>

        <div className="earnings-grid">
          <div className="earnings-panel earnings-panel--inputs">
            <div className="earnings-field">
              <div className="earnings-field-header">
                <div>
                  <h3>Social Media Followers</h3>
                  <p>Total followers across all your social media accounts.</p>
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
                  <h3>Daily Content Creation Hours</h3>
                  <p>How many hours per day do you want to spend creating content?</p>
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
              <h3>Which platforms should we manage for you?</h3>
              <div className="earnings-checklist">
                {platformOptions.map((platform) => (
                  <label key={platform} className="earnings-check">
                    <span>{platform}</span>
                    <input
                      type="checkbox"
                      checked={platforms[platform]}
                      onChange={() => togglePlatform(platform)}
                    />
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div className="earnings-panel earnings-panel--results">
            <div className="earnings-result">
              <span>Annual Revenue</span>
              <strong>${annualRevenue.toLocaleString('en-US')}</strong>
            </div>
            <p className="earnings-result-copy">
              Your estimated yearly earnings if you work with Fanique Primus, based on the
              experience of our creators. For more details, please see our terms and conditions.
            </p>
            <div className="earnings-breakdown">
              <div>
                <span>Quarterly</span>
                <strong>${quarterlyRevenue.toLocaleString('en-US')}</strong>
              </div>
              <div>
                <span>Monthly</span>
                <strong>${monthlyRevenue.toLocaleString('en-US')}</strong>
              </div>
            </div>
            <div className="earnings-cta">
              <p>Start Earning Today</p>
              <button type="button">Inquire Now</button>
              <div className="earnings-rating">
                <span>70+ Rezensionen</span>
                <span>4.9 ★★★★★</span>
              </div>
              <p className="earnings-footnote">
                Die angezeigten Einnahmen basieren auf Erfahrungswerten und stellen
                keine Einnahmensgarantie dar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EarningsCalculatorSection
