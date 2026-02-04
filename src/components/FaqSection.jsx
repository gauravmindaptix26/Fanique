import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'

const faqs = [
  {
    question: 'Was ist Fanique Primus?',
    answer:
      'Fanique Primus ist eine Agentur, die sich durch ihre einzigartige Perspektive, innovative Herangehensweise und ein engagiertes Team auszeichnet. Unser Ziel ist es, Talente zu fördern und ihnen zu helfen, ihre Träume zu verwirklichen.',
  },
  {
    question:
      'Was sind die Ziele von Fanique Primus?',
    answer:
      'Unsere Manager verfügen über die Expertise, dich auch auf anderen Plattformen erfolgreich zu positionieren. Gemeinsam entwickeln wir einen Plan, um deine individuellen Ziele zu erreichen.',
  },
  {
    question: 'Arbeitet Fanique Primus nur in Deutschland?',
    answer:
      'Nein, wir sind weltweit tätig. Allerdings empfehlen wir unseren Klientinnen, sich auf US-Content zu konzentrieren, da dort das Wachstumspotenzial, die Anonymität und die Vergütung oft besser sind als in Deutschland oder Europa.',
  },
  {
    question: 'Wie kann ich von Social Media leben?',
    answer:
      'Reichweite ist ein wichtiger Faktor, aber auch die Wahl der richtigen Branche und Werbepartner spielt eine Rolle. Dein persönlicher Manager hilft dir dabei, passende Anfragen zu identifizieren und die besten Partnerschaften einzugehen.',
  },
  {
    question: 'Kann ich weiterhin in meinem Vollzeitjob bleiben?',
    answer:
      'Zu Beginn empfehlen wir, deinen aktuellen Job beizubehalten, bis du im Bereich OnlyFans oder Social Media erfolgreich genug bist, um davon leben zu können.',
  },
  {
    question: 'Wie sieht eine Zusammenarbeit mit Fanique Primus aus?',
    answer:
      'Die Zusammenarbeit beginnt mit einer Bewerbung über unser Formular. Nach sorgfältiger Prüfung deiner Angaben melden wir uns innerhalb von 48 Stunden bei dir.',
  },
  {
    question: 'Wie viel Zeit muss ich wöchentlich einplanen',
    answer:
      'Wir bieten flexible Möglichkeiten, die Zusammenarbeit optimal zu gestalten. Der Zeitaufwand hängt von deiner Reichweite, geplanten Events und Shootings ab.',
  },
  {
    question: 'Welche Aufgaben kommen auf mich zu?',
    answer:
      'Die Aufgaben variieren je nach deinen Präferenzen. Du kannst Inhalte selbst erstellen oder diese Aufgabe deinem Manager überlassen. Die genaue Aufteilung besprichst du am besten direkt mit deinem Manager.',
  },
  {
    question: 'Kann ich mich erneut bewerben, wenn ich bereits abgelehnt wurde?',
    answer:
      'Ja, eine erneute Bewerbung ist möglich, sofern seit der letzten Bewerbung mindestens ein Monat vergangen ist. Wenn du in der Zwischenzeit an deiner Karriere gearbeitet hast, stehen die Chancen gut.',
  },
  {
    question: 'Wie oft werde ich mit meinem Account Manager in Kontakt sein?',
    answer:
      'Dein Manager ist rund um die Uhr für dich da. Ob täglicher Austausch oder wöchentliche Gespräche – die Kommunikation richtet sich nach deinen Bedürfnissen.',
  },
  {
    question: 'Muss ich den Content selbst erstellen und bearbeiten?',
    answer:
      'Du kannst Inhalte selbst erstellen, erhältst dabei jedoch Unterstützung von deinem Manager, der dich berät und gemeinsam mit dir Inhalte entwickelt.',
  },
  {
    question: 'Wofür benötige ich einen Manager?',
    answer:
      'Ein Manager erleichtert dir den Alltag, übernimmt organisatorische Aufgaben, baut ein Netzwerk für dich auf und verbindet dich mit relevanten Personen und Werbepartnern.',
  },
  {
    question: 'Wie nehme ich Kontakt mit meinem Manager auf?',
    answer:
      'Der Erstkontakt erfolgt nach deiner erfolgreichen Bewerbung. Danach steht dir dein Manager jederzeit für Fragen und Unterstützung zur Verfügung.',
  },
  {
    question: 'Wie können meine Kanäle am besten wachsen?',
    answer:
      'Als exklusives Talent von Fanique Primus profitierst du von systematisierten Abläufen und dem Fachwissen unserer Social-Media-Experten, die stets auf dem neuesten Stand sind.',
  },
  {
    question: 'Können meine Kanäle unabhängig voneinander gemanagt werden?',
    answer:
      'Ja, wir empfehlen, nicht nur auf OnlyFans zu setzen. Eine Diversifizierung auf verschiedenen Plattformen kann deinen finanziellen Erfolg steigern.',
  },
  {
    question: 'Gibt es zusätzliche Möglichkeiten, erfolgreicher zu werden?',
    answer:
      'Wir unterstützen dich umfassend, damit du von unserem unternehmerischen Denken profitierst und nicht nur auf eine Einkommensquelle angewiesen bist.',
  },
  {
    question: 'Kann ich anonym bleiben und trotzdem erfolgreich sein',
    answer:
      'Ja, Anonymität ist möglich. Wir haben erfolgreiche Strategien entwickelt, mit denen du auch anonym hohe Einnahmen erzielen kannst.',
  },
  {
    question: 'Wie motiviert ihr eure Talente, erfolgreicher zu werden?',
    answer:
      'Unser Managementprogramm wächst mit dir. Wir fördern eine Denkweise, die dich dazu ermutigt, größer zu denken und größere Ziele zu erreichen.',
  },
  {
    question: 'Kann ich mit euch zusammenarbeiten, wenn ich bereits erfolgreich bin?',
    answer:
      'Ja, wenn du bereits erfolgreich in den sozialen Medien bist, zeigen wir dir, wie du diesen Vorteil optimal nutzen und weiter ausbauen kannst.',
  },
  {
    question: 'In welchen Städten ist Fanique Primus vertreten?',
    answer:
      'Unsere Hauptstandorte sind weltweit. - Unsere Hauptstandorte sind weltweit.',
  },
  {
    question: 'Gibt es ein Limit an Talenten?',
    answer:
      'Ja, die Anzahl unserer exklusiven Talente ist begrenzt. Dennoch erweitern wir stetig unser Portfolio. Nutze deine Chance und bewirb dich noch heute.',
  },
  {
    question: 'Unterstützt ihr bei der Suche nach Werbepartnern?',
    answer:
      'Gemeinsam mit deinem Manager findest du die passenden Partner. Er unterstützt dich bei der Suche, den Verhandlungen und der Umsetzung von Kooperationen.',
  },
  
]

const FaqSection = () => {
  const sectionRef = useRef(null)
  const [openIndex, setOpenIndex] = useState(0)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '[data-faq="item"]',
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', stagger: 0.05 },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="faq-section" ref={sectionRef}>
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          className="faq-title"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          FAQ
        </motion.h2>

        <div className="faq-list">
          {faqs.map((item, index) => {
            const isOpen = index === openIndex
            return (
              <div
                key={item.question}
                className={`faq-item${isOpen ? ' is-open' : ''}`}
                data-faq="item"
              >
                <button
                  className="faq-question"
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  <span>{item.question}</span>
                  <span className="faq-chevron" aria-hidden="true" />
                </button>
                <div
                  id={`faq-panel-${index}`}
                  className="faq-answer"
                  role="region"
                  aria-hidden={!isOpen}
                >
                  <p>{item.answer}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="faq-actions">
          <button className="hero-cta hero-cta--primary" type="button">
            Anfragen
          </button>
          <button className="hero-cta hero-cta--ghost" type="button">
            Alle FAQs
          </button>
        </div>
      </div>
    </section>
  )
}

export default FaqSection
