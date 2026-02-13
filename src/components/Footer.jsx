import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import gsap from 'gsap'
import logo from '../assets/images/fanique_white_text.png'

const Footer = () => {
  const { t } = useTranslation()
  const serviceLinks = t('footer.serviceLinks', { returnObjects: true })
  const followLinks = t('footer.followLinks', { returnObjects: true })
  const resourceLinks = t('footer.resourceLinks', { returnObjects: true })
  const footerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '[data-fp="stagger"] > *',
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out' },
      )
    }, footerRef)

    return () => ctx.revert()
  }, [])

  return (
    <footer className="fp-footer" ref={footerRef}>
      <div className="fp-press" data-fp="stagger">
        <span className="fp-press-bild">Bild</span>
        <span className="fp-press-divider" aria-hidden="true" />
        <span className="fp-press-nyt">The New York Times</span>
        <span className="fp-press-divider" aria-hidden="true" />
        <span className="fp-press-wsj">WSJ</span>
      </div>

      <div className="fp-sep fp-sep--top" aria-hidden="true" />

      <div className="fp-main" data-fp="stagger">
        <div className="fp-brand">
          <div className="fp-brand-top">
            <div className="fp-logo">
              <img className="fp-logo-mark" src={logo} alt="Fanique Primus" />
            </div>
          </div>

          <div className="fp-contact">
            <div className="fp-contact-item">
              <span className="fp-contact-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" role="img">
                  <path
                    d="M6.6 3.8c.3-.3.8-.4 1.2-.3l3.1 1c.4.1.7.5.7.9l.4 2.6c.1.4-.1.8-.4 1.1l-1.4 1.4a13.6 13.6 0 006.2 6.2l1.4-1.4c.3-.3.7-.5 1.1-.4l2.6.4c.4.1.8.4.9.7l1 3.1c.1.4 0 .9-.3 1.2l-1.4 1.4c-.5.5-1.2.8-2 .7-8.8-1-15.7-8-16.7-16.7-.1-.7.2-1.5.7-2l1.4-1.4z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <span>+1111111111111</span>
            </div>
            <div className="fp-contact-item">
              <span className="fp-contact-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" role="img">
                  <path
                    d="M4 6.5c0-.8.7-1.5 1.5-1.5h13c.8 0 1.5.7 1.5 1.5v10c0 .8-.7 1.5-1.5 1.5h-13C4.7 18 4 17.3 4 16.5v-10zm1.7.3l6.3 4.3 6.3-4.3H5.7zm12.6 1.9l-6.3 4.2-6.3-4.2V16h12.6V8.7z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <span>
                demo@contact-
                <br />
                us.com
              </span>
            </div>
            <div className="fp-contact-item">
              <span className="fp-contact-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" role="img">
                  <path
                    d="M12 3c3.3 0 6 2.7 6 6 0 4.6-6 12-6 12S6 13.6 6 9c0-3.3 2.7-6 6-6zm0 3.2a2.8 2.8 0 100 5.6 2.8 2.8 0 000-5.6z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <span>
                Ludwig-Erhard-Str.
                <br />
                18, 20459 Hamburg,
                <br />
                Deutschland
              </span>
            </div>
          </div>
        </div>

        <div className="fp-links">
          <div className="fp-col">
            <p className="fp-title">{t('footer.servicesTitle')}</p>
            {serviceLinks.map((link) => (
              <a key={link} href="#services">
                {link}
              </a>
            ))}
          </div>

          <div className="fp-col">
            <p className="fp-title">{t('footer.followTitle')}</p>
            {followLinks.map((link) => (
              <a key={link} href="#about">
                {link}
              </a>
            ))}
          </div>

          <div className="fp-col">
            <p className="fp-title">{t('footer.resourcesTitle')}</p>
            <a href="#resources">{resourceLinks[0]}</a>
            <a href="/einkommensrechner">{resourceLinks[1]}</a>
            <a href="#resources">{resourceLinks[2]}</a>
            <a href="#resources">{resourceLinks[3]}</a>
            <a href="#resources">{resourceLinks[4]}</a>
          </div>
        </div>

        <div className="fp-contact-card">
          <p className="fp-title">{t('footer.contactTitle')}</p>
          <div className="fp-person">
            <span className="fp-avatar" aria-hidden="true" />
            <div>
              <p className="fp-person-name">Alina Meyer</p>
              <p className="fp-person-meta">{t('footer.contactMeta')}</p>
            </div>
          </div>
          <button className="fp-whatsapp" type="button">
            <span className="fp-whatsapp-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" role="img">
                <path
                  d="M12 3.4a8.6 8.6 0 00-7.4 12.9L3 21l4.8-1.5A8.6 8.6 0 1012 3.4zm0 1.8a6.8 6.8 0 015.8 10.4l.3.5-2.6.8-.4.2a6.8 6.8 0 11-3.1-12zm-3 3.9c-.2 0-.5 0-.7.3-.2.2-.7.7-.7 1.7 0 1 .7 2 1 2.3.2.2 1.4 2.2 3.4 3 1.6.7 2.3.6 2.7.5.4-.1 1.2-.5 1.4-1 .2-.5.2-.9.1-1-.1-.1-.4-.2-.8-.4-.4-.2-2.3-1.1-2.6-1.3-.3-.1-.5-.2-.7.2-.2.3-.8 1.1-1 1.3-.2.2-.4.2-.7 0-.3-.1-1.4-.5-2.6-1.7-1-.9-1.7-2-1.9-2.4-.2-.3 0-.5.1-.7.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.6 0-.2-.7-1.7-1-2.3-.2-.6-.5-.5-.7-.5h-.5z"
                  fill="currentColor"
                />
              </svg>
            </span>
            {t('footer.whatsapp')}
          </button>
          <div className="fp-social">
            <span className="fp-social-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" role="img">
                <path
                  d="M12 7.2a4.8 4.8 0 100 9.6 4.8 4.8 0 000-9.6zm0-2.2c1.7 0 1.9 0 2.6.1.7 0 1.1.1 1.4.2.4.1.7.3 1 .6.3.3.5.6.6 1 .1.3.2.7.2 1.4.1.7.1.9.1 2.6s0 1.9-.1 2.6c0 .7-.1 1.1-.2 1.4-.1.4-.3.7-.6 1-.3.3-.6.5-1 .6-.3.1-.7.2-1.4.2-.7.1-.9.1-2.6.1s-1.9 0-2.6-.1c-.7 0-1.1-.1-1.4-.2a2.7 2.7 0 01-1.6-1.6c-.1-.3-.2-.7-.2-1.4-.1-.7-.1-.9-.1-2.6s0-1.9.1-2.6c0-.7.1-1.1.2-1.4a2.7 2.7 0 011.6-1.6c.3-.1.7-.2 1.4-.2.7-.1.9-.1 2.6-.1z"
                  fill="currentColor"
                />
              </svg>
            </span>
            <span className="fp-social-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" role="img">
                <path
                  d="M13.8 20v-6.2h2.1l.3-2.4h-2.4V9.8c0-.7.2-1.2 1.2-1.2h1.3V6.4c-.2 0-1-.1-2-.1-2 0-3.3 1.2-3.3 3.4v1.9H9.7v2.4h2.3V20h1.8z"
                  fill="currentColor"
                />
              </svg>
            </span>
            <span className="fp-social-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" role="img">
                <path
                  d="M16.2 7.3c.6.4 1.3.6 2 .6v2a5.7 5.7 0 01-2.8-.8v4.3a4.5 4.5 0 11-4-4.5v2.1a2.4 2.4 0 102.1 2.4V3.9h2.7v3.4z"
                  fill="currentColor"
                />
              </svg>
            </span>
            <span className="fp-social-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" role="img">
                <path
                  d="M19.6 7.2c.2.8.2 1.9.2 3.3 0 1.3 0 2.5-.2 3.3-.2.9-.8 1.5-1.7 1.7-.8.2-3.1.2-5.9.2s-5.1 0-5.9-.2c-.9-.2-1.5-.8-1.7-1.7-.2-.8-.2-2-.2-3.3 0-1.4 0-2.5.2-3.3.2-.9.8-1.5 1.7-1.7.8-.2 3.1-.2 5.9-.2s5.1 0 5.9.2c.9.2 1.5.8 1.7 1.7zM10 9.1v5l4.6-2.5-4.6-2.5z"
                  fill="currentColor"
                />
              </svg>
            </span>
            <span className="fp-social-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" role="img">
                <path
                  d="M5 4.5h3.4l3 4.2 3.6-4.2H19l-5.7 6.5L19.2 19h-3.4l-3.4-4.7-4 4.7H4.8l6.2-7.1L5 4.5z"
                  fill="currentColor"
                />
              </svg>
            </span>
            <span className="fp-social-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" role="img">
                <path
                  d="M6.8 9.5h2.7V18H6.8V9.5zm1.4-3.6a1.6 1.6 0 110 3.2 1.6 1.6 0 010-3.2zM11.3 9.5h2.6v1.2h.1c.4-.7 1.3-1.4 2.7-1.4 2.8 0 3.3 1.8 3.3 4.2V18h-2.7v-3.7c0-.9 0-2.1-1.3-2.1s-1.5 1-1.5 2V18h-2.7V9.5z"
                  fill="currentColor"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>

      <div className="fp-sep fp-sep--bottom" aria-hidden="true" />

      <div className="fp-bottom">
        <p>{t('footer.copyright')}</p>
        <div className="fp-bottom-links">
          <a href="#legal">{t('footer.legal')}</a>
          <a href="#legal">{t('footer.privacy')}</a>
          <a href="#legal">{t('footer.terms')}</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
