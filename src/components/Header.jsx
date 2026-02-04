import { NavLink } from 'react-router-dom'
import { navItems } from '../data/content'
import logo from '../assets/images/fanique_white_text.png'

const Header = () => (
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
        <button className="nav-login-btn" type="button">
          Login
        </button>
      </div>
    </div>
  </header>
)

export default Header
