import { processSteps } from '../data/home'
import { ConsultationForm } from '../components/ui/ConsultationForm'
import booksImg from '../assets/images/process-books.webp'
import styles from './Process.module.css'

export function Process() {
  return (
    <section className={styles.process} aria-labelledby="process-title">
      <div className="container">
        <header className="text-center">
          <h2 id="process-title" className="section-title">
            From First Idea to Launch Day, We Guide Every Step
          </h2>
          <p>
            Start with a free consultation &amp; custom plan, then move into onboarding &amp; project kickoff. We
            handle cover design &amp; interior design, formatting &amp; file preparation, and ensure finalization
            &amp; quality assurance. Your book goes live with Publishing &amp; Distribution Setup, followed by Launch
            Support &amp; Reporting and ongoing post-launch growth.
          </p>
        </header>

        <div className={styles.grid}>
          <ol className={styles.steps} >
            {processSteps.map((step) => (
              <li key={step} style={{ color: '#000' }}>
                <h3>{step}</h3>
              </li>
            ))}
          </ol>

          <img
            src={booksImg}
            alt="Collection of professionally published books"
            width={768}
            height={432}
            loading="lazy"
            className={styles.image}
          />

          <ConsultationForm title="Sign Up & Get Free Expert Consultation" variant="gold" source="process" />
        </div>
      </div>
    </section>
  )
}
