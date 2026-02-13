import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const ManagementSection = () => {
  const { t } = useTranslation()
  const tabs = t('management.tabs', { returnObjects: true })
  const [activeTab, setActiveTab] = useState(tabs[0]?.key || 'management')

  useEffect(() => {
    if (!tabs.find((tab) => tab.key === activeTab)) {
      setActiveTab(tabs[0]?.key || 'management')
    }
  }, [activeTab, tabs])

  const content = t(`management.content.${activeTab}`, { returnObjects: true })

  return (
    <section className="management-section">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          className="management-tabs"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          {tabs.map((tab) => (
            <button
              key={tab.key}
              className={`management-tab ${activeTab === tab.key ? 'is-active' : ''}`}
              type="button"
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        <motion.div
          className="management-card"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="management-content">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
              >
                <p className="management-kicker">{content.kicker}</p>
                <h2 className="management-title">
                  <span>{content.title}</span> 2.0
                </h2>
                <p className="management-body">{content.body}</p>

                <div className="management-grid">
                  {content.items.map((item) => (
                    <div key={item.title} className="management-item">
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="management-panel">
            <AnimatePresence mode="wait">
              {activeTab === 'marketing' ? (
                <motion.div
                  key="marketing-orbit"
                  className="marketing-orbit"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="orbit-core">FRA</div>
                  <div className="orbit-ring">
                    <span className="orbit-dot orbit-dot--t" aria-hidden="true">
                      <svg viewBox="0 0 24 24" className="orbit-icon">
                        <path
                          d="M14 4v10.6a3.4 3.4 0 1 1-2-3.1V6h7V4h-5Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                    <span className="orbit-dot orbit-dot--y" aria-hidden="true">
                      <svg viewBox="0 0 24 24" className="orbit-icon">
                        <path d="M4 6h16v12H4z" fill="none" stroke="currentColor" strokeWidth="1.6" />
                        <path d="m10 9 6 3-6 3z" fill="currentColor" />
                      </svg>
                    </span>
                    <span className="orbit-dot orbit-dot--i" aria-hidden="true">
                      <svg viewBox="0 0 24 24" className="orbit-icon">
                        <path
                          d="M7 7h10a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-5a3 3 0 0 1 3-3Z"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.6"
                        />
                        <circle cx="17.5" cy="9.5" r="1.2" fill="currentColor" />
                      </svg>
                    </span>
                    <span className="orbit-dot orbit-dot--x" aria-hidden="true">
                      <svg viewBox="0 0 24 24" className="orbit-icon">
                        <path
                          d="M6 5h3.2l3.8 5 4-5H20l-5.6 6.6L20 19h-3.2l-3.9-5.2L8.9 19H6l6-7L6 5Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                    <span className="orbit-dot orbit-dot--l" aria-hidden="true">
                      <svg viewBox="0 0 24 24" className="orbit-icon">
                        <path
                          d="M6 7h12v7a4 4 0 0 1-4 4H6V7Z"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.6"
                        />
                        <path d="M6 7H4" stroke="currentColor" strokeWidth="1.6" />
                      </svg>
                    </span>
                    <span className="orbit-dot orbit-dot--r" aria-hidden="true">
                      <svg viewBox="0 0 24 24" className="orbit-icon">
                        <circle cx="12" cy="12" r="6.5" stroke="currentColor" strokeWidth="1.6" fill="none" />
                        <circle cx="9.5" cy="11" r="1.1" fill="currentColor" />
                      </svg>
                    </span>
                    <span className="orbit-dot orbit-dot--a" aria-hidden="true">
                      <svg viewBox="0 0 24 24" className="orbit-icon">
                        <path d="M12 6c3.3 0 6 2 6 4.5S15.3 15 12 15s-6-2-6-4.5S8.7 6 12 6Z" fill="none" stroke="currentColor" strokeWidth="1.6" />
                        <path d="M18 18c-1.2 0-2.2-1-2.2-2.2" stroke="currentColor" strokeWidth="1.6" />
                      </svg>
                    </span>
                    <span className="orbit-dot orbit-dot--f" aria-hidden="true">
                      <svg viewBox="0 0 24 24" className="orbit-icon">
                        <path
                          d="M12 4c3 3 2.6 5.8.6 7.6-1.3 1.1-2.8 1.6-4.6 1.5 1.6 1.1 3.5 1.6 5.6 1.2 2.2-.4 3.9-1.8 4.7-3.7.2 4-3.3 7.4-7.3 7.4-4.1 0-7.4-3.3-7.4-7.3C3.6 7.2 7.3 4 12 4Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                    <span className="orbit-dot orbit-dot--p" aria-hidden="true">
                      <svg viewBox="0 0 24 24" className="orbit-icon">
                        <path
                          d="M8 7h7a4 4 0 0 1 0 8H8V7Z"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.6"
                        />
                        <path d="M8 7v10" stroke="currentColor" strokeWidth="1.6" />
                      </svg>
                    </span>
                  </div>
                </motion.div>
              ) : activeTab === 'network' ? (
                <motion.div
                  key="network-panel"
                  className="network-panel"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="network-icon-card">
                    <svg viewBox="0 0 120 120" className="network-icon" aria-hidden="true">
                      <circle cx="60" cy="60" r="26" fill="none" stroke="currentColor" strokeWidth="6" />
                      <path
                        d="M60 34v52M34 60h52M42 42l36 36M78 42 42 78"
                        stroke="currentColor"
                        strokeWidth="6"
                        strokeLinecap="round"
                      />
                      <circle cx="60" cy="16" r="6" fill="currentColor" />
                      <circle cx="60" cy="104" r="6" fill="currentColor" />
                      <circle cx="16" cy="60" r="6" fill="currentColor" />
                      <circle cx="104" cy="60" r="6" fill="currentColor" />
                      <circle cx="90" cy="28" r="6" fill="currentColor" />
                      <circle cx="30" cy="92" r="6" fill="currentColor" />
                      <circle cx="28" cy="30" r="6" fill="currentColor" />
                      <circle cx="92" cy="92" r="6" fill="currentColor" />
                    </svg>
                  </div>
                  <div className="network-bars" aria-hidden="true">
                    {Array.from({ length: 10 }).map((_, index) => (
                      <span key={index} />
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="metrics-panel"
                  className="panel-stack"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.4 }}
                >
                  <div
                    className={`panel-card ${
                      activeTab === 'leakProtection' ? 'panel-card--leak' : ''
                    }`}
                  >
                    <div className="panel-top">
                      <span>{t('management.panel.allTime')}</span>
                      <span className="panel-amount">$607,633.26</span>
                    </div>
                    <div className="panel-chart">
                      <div className="panel-line" />
                    </div>
                    <div className="panel-range">
                      <span>{t('management.panel.from')}</span>
                      <span>{t('management.panel.to')}</span>
                    </div>
                    <div className="panel-metrics">
                      <div>
                        <span className="dot dot--gold" /> {t('management.panel.subscriptions')}
                        <strong>$75,388.66</strong>
                      </div>
                      <div>
                        <span className="dot dot--blue" /> {t('management.panel.tips')}
                        <strong>$27,395.15</strong>
                      </div>
                      <div>
                        <span className="dot dot--pink" /> {t('management.panel.posts')}
                        <strong>$10,575.00</strong>
                      </div>
                      <div>
                        <span className="dot dot--mint" /> {t('management.panel.messages')}
                        <strong>$504,849.45</strong>
                      </div>
                    </div>
                  </div>

                  <div className="panel-list">
                    <button className="panel-row is-active" type="button">
                      <span>{t('management.panel.december')}</span>
                      <span>$42,394.94</span>
                    </button>
                    <button className="panel-row" type="button">
                      <span>{t('management.panel.november')}</span>
                      <span>$37,307.55</span>
                    </button>
                    <button className="panel-row" type="button">
                      <span>{t('management.panel.october')}</span>
                      <span>$29,846.04</span>
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ManagementSection
