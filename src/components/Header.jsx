import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import logo from '../assets/images/fanique_white_text.png'
import { useAuth } from '../context/AuthContext'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { user, isAuthenticated, logout } = useAuth()
  const { t, i18n } = useTranslation()
  const navItems = [
    { key: 'experience', label: t('nav.experience'), href: '#erfahrung' },
    { key: 'testimonials', label: t('nav.testimonials'), href: '/erfahrungsberichte' },
    { key: 'calculator', label: t('nav.calculator'), href: '/einkommensrechner' },
    { key: 'results', label: t('nav.results'), href: '/ergebnisse' },
    { key: 'services', label: t('nav.services'), href: '#' },
    { key: 'proof', label: t('nav.proof'), href: '#' },
    { key: 'contact', label: t('nav.contact'), href: '#' },
  ]
  const setLanguage = (lang) => i18n.changeLanguage(lang)
  const currentLang = i18n.language?.startsWith('de') ? 'de' : 'en'

  return (
    <header className="nav-header">
      <div className="nav-shell">
        <NavLink className="flex items-center gap-3" to="/">
          <img className="nav-logo-image" src={logo} alt="Fanique Primus" />
        </NavLink>
        <nav className="nav-links">
          {navItems.map((item) => {
            const isRoute = item.href.startsWith('/')
            const LinkTag = isRoute ? NavLink : 'a'
            const linkProps = isRoute ? { to: item.href } : { href: item.href }

            return (
              <LinkTag key={item.key} className="nav-link" {...linkProps}>
                {item.label}
                <span className="nav-caret" aria-hidden="true">
                  <svg viewBox="0 0 16 16" width="14" height="14" role="img">
                    <path d="M4 6l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </span>
              </LinkTag>
            )
          })}
        </nav>
        <div className="nav-actions">
          {isAuthenticated && user && (
            <div className="nav-user" aria-live="polite">
              <span>{t('nav.authenticated')}</span>
              <strong>{user.name}</strong>
            </div>
          )}
          {isAuthenticated ? (
            <button className="nav-login-btn" type="button" onClick={logout}>
              {t('nav.logout')}
            </button>
          ) : (
            <NavLink className="nav-login-btn" to="/auth">
              {t('nav.login')}
            </NavLink>
          )}
          <div className="lang-switch" role="group" aria-label={t('language.label')}>
            <button
              className={`lang-btn ${currentLang === 'de' ? 'is-active' : ''}`}
              type="button"
              onClick={() => setLanguage('de')}
            >
              DE
            </button>
            <button
              className={`lang-btn ${currentLang === 'en' ? 'is-active' : ''}`}
              type="button"
              onClick={() => setLanguage('en')}
            >
              EN
            </button>
          </div>
          <button
            className="nav-toggle"
            type="button"
            aria-expanded={isOpen}
            aria-controls="nav-mobile"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <span className="nav-toggle-line" />
            <span className="nav-toggle-line" />
            <span className="nav-toggle-line" />
          </button>
        </div>
      </div>

      <div className={`nav-mobile${isOpen ? ' is-open' : ''}`} id="nav-mobile">
        {navItems.map((item) => {
          const isRoute = item.href.startsWith('/')
          const LinkTag = isRoute ? NavLink : 'a'
          const linkProps = isRoute ? { to: item.href } : { href: item.href }

          return (
            <LinkTag
              key={`mobile-${item.key}`}
              className="nav-mobile-link"
              {...linkProps}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </LinkTag>
          )
        })}
        <div className="nav-mobile-lang" aria-label={t('language.label')}>
          <button
            className={`nav-mobile-cta ${currentLang === 'de' ? 'is-active' : ''}`}
            type="button"
            onClick={() => setLanguage('de')}
          >
            DE
          </button>
          <button
            className={`nav-mobile-cta ${currentLang === 'en' ? 'is-active' : ''}`}
            type="button"
            onClick={() => setLanguage('en')}
          >
            EN
          </button>
        </div>
        {isAuthenticated ? (
          <button
            className="nav-mobile-cta"
            type="button"
            onClick={() => {
              logout()
              setIsOpen(false)
            }}
          >
            {t('nav.logout')}
          </button>
        ) : (
          <NavLink className="nav-mobile-cta" to="/auth" onClick={() => setIsOpen(false)}>
            {t('nav.login')}
          </NavLink>
        )}
      </div>
    </header>
  )
}

export default Header
