import BounceCards from './BounceCards'
import img1 from '../assets/images/Sexy Escort.png'
import img2 from '../assets/images/Frau sitzt auf Mann.png'
import img3 from '../assets/images/Paar beim Sex.jpg'
import img4 from '../assets/images/Reiterstellung.webp'
import img5 from '../assets/images/Sexy Escort.png'
import img6 from '../assets/images/Frauen in Limousine.jpeg'
import img7 from '../assets/images/Frau in Dessous.jpg'
import img8 from '../assets/images/Frau in Dessous mit Schleife.jpeg'
import img9 from '../assets/images/Frau in Dessous mit Mann.jpg'

const TestimonialsSection = () => (
  <section className="testimonials-section">
    <div className="testimonials-wrap">
      <h2 className="testimonials-title">
        Diese 0.1% Creators vertrauen unserer <span>OnlyFans Agentur</span>
      </h2>
    </div>

    <div className="testimonials-stage">
      <div className="testimonials-loop" aria-hidden="true">
        <div className="testimonials-loop-track">
          <span>KUNDENSTIMMEN</span>
        </div>
      </div>
      <div className="testimonials-card">
        <div className="testimonials-card-images">
          <BounceCards
            className="testimonials-bounce"
            images={[img1, img2, img3, img4, img5, img6, img7, img8, img9]}
            containerWidth={760}
            containerHeight={360}
            animationDelay={0.4}
            animationStagger={0.08}
            easeType="elastic.out(1, 0.6)"
            transformStyles={[
              'rotate(-8deg) translate(-240px)',
              'rotate(-6deg) translate(-180px)',
              'rotate(-3deg) translate(-120px)',
              'rotate(-2deg) translate(-60px)',
              'rotate(0deg)',
              'rotate(2deg) translate(60px)',
              'rotate(3deg) translate(120px)',
              'rotate(6deg) translate(180px)',
              'rotate(8deg) translate(240px)',
            ]}
            enableHover
          />
        </div>
        <div className="testimonials-footer">
          <div className="testimonials-rating">
            <p>Bestbewertet!</p>
            <div className="rating-stars" aria-label="5 Sterne">
              <span className="rating-star" aria-hidden="true">
                &#9733;
              </span>
              <span className="rating-star" aria-hidden="true">
                &#9733;
              </span>
              <span className="rating-star" aria-hidden="true">
                &#9733;
              </span>
              <span className="rating-star" aria-hidden="true">
                &#9733;
              </span>
              <span className="rating-star" aria-hidden="true">
                &#9733;
              </span>
            </div>
            <p>von 50+ Creators</p>
          </div>
          <div className="testimonials-actions">
            <button className="hero-cta hero-cta--primary" type="button">
              Anfragen
            </button>
            <button className="hero-cta hero-cta--ghost" type="button">
              Kundenstimmen
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default TestimonialsSection
