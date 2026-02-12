import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import AboutSection from '../components/AboutSection'
import img1 from '../assets/images/Frau in Dessous.jpg'
import img2 from '../assets/images/Frau in Dessous mit Schleife.jpeg'
import img3 from '../assets/images/Frau in Dessous mit Mann.jpg'
import img4 from '../assets/images/Frauen in Limousine.jpeg'
import img5 from '../assets/images/Brüstekneten4.jpeg'

const cards = [
  {
    name: 'Kerstin',
    image: img1,
    copy: 'Als erfahrene Creatorin über 1.5 Jahre hinweg Gewinn erhöhen & mit Respekt behandelt werden.',
    namePosition: 'left',
  },
  {
    name: 'Sofia',
    image: img2,
    copy: 'Mehr Zeit und viel mehr Geld über 2 Jahre Zusammenarbeit hinweg.',
    namePosition: 'right',
  },
  {
    name: 'Laura · Nicole',
    image: img3,
    copy: 'Als Beginnerinnen über 1½ Jahren hinweg ein stabiles Monatseinkommen erzielen.',
    namePosition: 'center',
  },
  {
    name: 'Elisa',
    image: img4,
    copy: 'Anonym ohne Zeitaufwand über 2 Jahre hinweg ein stabiles Monatseinkommen erzielen.',
    namePosition: 'right',
  },
  {
    name: 'Tanya',
    image: img5,
    copy: 'Ohne Vorerfahrung über 8 Monate hinweg ein stabiles Monatseinkommen erzielen.',
    namePosition: 'left',
  },
]

const loopWords = Array.from({ length: 7 }, () => 'TESTIMONIALS')

const ErfahrungsberichtePage = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '[data-erf="fade"]',
        { opacity: 0, y: 30, filter: 'blur(10px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 1.1,
          ease: 'power3.out',
          stagger: 0.12,
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <div className="erf-page">
      <AboutSection />
      <section className="erf-testimonials" ref={sectionRef}>
        <div className="erf-loop" aria-hidden="true">
          <div className="erf-loop-track">
            {loopWords.map((word, index) => (
              <span key={`erf-a-${index}`}>{word}</span>
            ))}
            {loopWords.map((word, index) => (
              <span key={`erf-b-${index}`}>{word}</span>
            ))}
          </div>
        </div>
        <div className="erf-loop erf-loop--lower" aria-hidden="true">
          <div className="erf-loop-track">
            {loopWords.map((word, index) => (
              <span key={`erf-c-${index}`}>{word}</span>
            ))}
            {loopWords.map((word, index) => (
              <span key={`erf-d-${index}`}>{word}</span>
            ))}
          </div>
        </div>

        <div className="erf-header" data-erf="fade">
          <p className="erf-kicker">KUNDENSTIMMEN</p>
          <h2 className="erf-title">
            <span className="erf-title-line">Was bringt eine Zusammenarbeit</span>
            <span className="erf-title-line erf-title-line--accent">mit uns wirklich?</span>
          </h2>
        </div>

        <div className="erf-grid">
          {cards.map((card) => (
            <article key={card.name} className="erf-card" data-erf="fade">
              <div className="erf-card-top">
                <span className="erf-mark">FRA</span>
                <h3 className="erf-card-title">Kundenstimme</h3>
              </div>
              <p className="erf-card-copy">{card.copy}</p>
              <div className="erf-media">
                <img src={card.image} alt={card.name} loading="lazy" decoding="async" />
                <span className="erf-play" aria-hidden="true" />
                <span className={`erf-name erf-name--${card.namePosition}`}>
                  {card.name}
                </span>
              </div>
            </article>
          ))}
        </div>

        <button className="erf-cta" data-erf="fade" type="button">
          Anfragen
        </button>

        <div className="erf-growth" data-erf="fade">
          <div className="erf-growth-bars" aria-hidden="true">
            {Array.from({ length: 10 }).map((_, index) => (
              <span key={`erf-bar-${index}`} />
            ))}
          </div>
          <div className="erf-growth-top">
            <span className="erf-growth-laurel erf-growth-laurel--left" aria-hidden="true" />
            <div className="erf-growth-topline">
              <span className="erf-growth-rank">#1 OnlyFans Agentur</span>
              <div className="erf-growth-stars" aria-label="5 Sterne">
                {Array.from({ length: 5 }).map((_, index) => (
                  <span key={`erf-star-top-${index}`} className="erf-star">
                    ★
                  </span>
                ))}
              </div>
            </div>
            <span className="erf-growth-laurel erf-growth-laurel--right" aria-hidden="true" />
          </div>
          <div className="erf-growth-tag">
            <span>Jetzt garantiert wachsen.</span>
            <span className="erf-growth-sign">Marvin K</span>
          </div>
          <h3 className="erf-growth-title">
            Wir arbeiten mtl. mit 3-5 neuen <span>Creators. Gehörst du dazu?</span>
          </h3>
          <div className="erf-growth-rating">
            <div className="erf-growth-avatars" aria-hidden="true">
              <img className="erf-growth-avatar" src={img1} alt="" loading="lazy" decoding="async" />
              <img className="erf-growth-avatar" src={img2} alt="" loading="lazy" decoding="async" />
              <img className="erf-growth-avatar" src={img3} alt="" loading="lazy" decoding="async" />
              <img className="erf-growth-avatar" src={img4} alt="" loading="lazy" decoding="async" />
              <img className="erf-growth-avatar" src={img5} alt="" loading="lazy" decoding="async" />
            </div>
            <div className="erf-growth-review">
              <div className="erf-growth-review-title">Bestbewertet!</div>
              <div className="erf-growth-stars erf-growth-stars--gold" aria-label="5 Sterne">
                {Array.from({ length: 5 }).map((_, index) => (
                  <span key={`erf-star-bottom-${index}`} className="erf-star">
                    ★
                  </span>
                ))}
              </div>
              <div className="erf-growth-review-copy">von 50+ Creators.</div>
            </div>
          </div>
          <div className="erf-growth-pill">HSTUM. CONTENT-RECYCLING</div>
        </div>
      </section>
    </div>
  )
}

export default ErfahrungsberichtePage
