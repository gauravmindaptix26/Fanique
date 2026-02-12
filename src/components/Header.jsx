import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { navItems } from '../data/content'
import logo from '../assets/images/fanique_white_text.png'
import { useAuth } from '../context/AuthContext'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { user, isAuthenticated, logout } = useAuth()

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
              <LinkTag key={item.label} className="nav-link" {...linkProps}>
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
              <span>Authenticated</span>
              <strong>{user.name}</strong>
            </div>
          )}
          {isAuthenticated ? (
            <button className="nav-login-btn" type="button" onClick={logout}>
              Logout
            </button>
          ) : (
            <NavLink className="nav-login-btn" to="/auth">
              Login
            </NavLink>
          )}
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
              key={`mobile-${item.label}`}
              className="nav-mobile-link"
              {...linkProps}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </LinkTag>
          )
        })}
        {isAuthenticated ? (
          <button
            className="nav-mobile-cta"
            type="button"
            onClick={() => {
              logout()
              setIsOpen(false)
            }}
          >
            Logout
          </button>
        ) : (
          <NavLink className="nav-mobile-cta" to="/auth" onClick={() => setIsOpen(false)}>
            Login
          </NavLink>
        )}
      </div>
    </header>
  )
}

export default Header
