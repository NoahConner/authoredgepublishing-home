import { site } from '../data/site'
import { Button } from '../components/ui/Button'
import { ConsultationForm } from '../components/ui/ConsultationForm'
import heroBg from '../assets/images/hero-bg.webp'
import styles from './Hero.module.css'

export function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      {/* Real <img> (not CSS background) so the browser can prioritise it for LCP */}
      <img
        src={heroBg}
        alt=""
        width={1600}
        height={750}
        fetchPriority="high"
        decoding="async"
        className={styles.bg}
      />

      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <h1 id="hero-title" className="section-title">Professional Publishing Support for Authors Across the UK and Beyond</h1>
          <p>
            From manuscript review to editing, cover design, formatting, and publishing, we help you move forward
            with confidence while keeping full ownership and royalties.
          </p>
          <div className={styles.ctas}>
            <Button href="#consultation" variant="dark">
              Get Free Consultation
            </Button>
            <Button href={site.whatsapp} target="_blank" rel="noopener noreferrer" variant="dark">
              Live Chat
            </Button>
          </div>
        </div>

        <div id="consultation" className={styles.form}>
          <ConsultationForm title="Sign Up & Get Free Expert Consultation" variant="dark" source="hero" />
        </div>
      </div>
    </section>
  )
}
