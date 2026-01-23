import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import logo from '../assets/images/fanique_white_text.png'

const Footer = () => {
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

      <div className="fp-sep" aria-hidden="true" />

      <div className="fp-main" data-fp="stagger">
        <div className="fp-brand">
          <div className="fp-logo">
            <img className="fp-logo-mark" src={logo} alt="Fanique Primus" />
          </div>

          <div className="fp-contact">
            <p>+1111111111111</p>
            <p>demo@contact-us.com</p>
            <p>Ludwig-Erhard-Str. 18, 20459 Hamburg, Deutschland</p>
          </div>
        </div>

        <div className="fp-links">
          <div className="fp-col">
            <p className="fp-title">Dienstleistungen</p>
            <a href="#services">Management</a>
            <a href="#services">Marketing</a>
            <a href="#services">Inhaltsrecycling</a>
            <a href="#services">Leckbeseitigung</a>
          </div>

          <div className="fp-col">
            <p className="fp-title">Verfolgen</p>
            <a href="#about">Portfoliomodell</a>
            <a href="#about">Fallstudien</a>
            <a href="#about">šber uns</a>
            <a href="#about">Team</a>
            <a href="#about">Ergebniss</a>
          </div>

          <div className="fp-col">
            <p className="fp-title">Ressourcen</p>
            <a href="#resources">Modellregistrierung</a>
            <a href="#resources">Einkommensrechner</a>
            <a href="#resources">Erfahrung</a>
            <a href="#resources">Dienstleistungen</a>
            <a href="#resources">Kontakt</a>
          </div>
        </div>

        <div className="fp-contact-card">
          <p className="fp-title">Kontakt</p>
          <div className="fp-person">
            <span className="fp-avatar" aria-hidden="true" />
            <div>
              <p className="fp-person-name">Alina Meyer</p>
              <p className="fp-person-meta">Fragen? Antworten</p>
            </div>
          </div>
          <button className="fp-whatsapp" type="button">
            Direkt per WhatsApp
          </button>
          <div className="fp-social">
            <span>FB</span>
            <span>INST</span>
            <span>TT</span>
            <span>YT</span>
            <span>X</span>
            <span>IN</span>
          </div>
        </div>
      </div>

      <div className="fp-sep" aria-hidden="true" />

      <div className="fp-bottom">
        <p>Copyright c 2025 FANIQUE PRIMUS</p>
        <div className="fp-bottom-links">
          <a href="#legal">Rechtlicher Hinweis</a>
          <a href="#legal">Datenschutzrichtlinie</a>
          <a href="#legal">Nutzungsbedingungen</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
