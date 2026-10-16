import { plans } from '../data/home'
import { Button } from '../components/ui/Button'
import libraryBg from '../assets/images/library-bg.webp'
import styles from './Pricing.module.css'

const buttonVariant = ['grad', 'light', 'brown'] as const

export function Pricing() {
  return (
    <section
      id="pricing"
      className={styles.pricing}
      style={{ backgroundImage: `url(${libraryBg})` }}
      aria-labelledby="pricing-title"
    >
      <div className="container">
        <header className="text-center">
          <h2 id="pricing-title" className={`section-title ${styles.title}`}>
            Affordable Book Publishing Packages
            <br /> Affordable Pricing
          </h2>
          <p className={styles.intro}>
            Select the plan that suits your needs. Our book publishing services are affordable, transparent,
            <br /> and designed to help authors achieve publishing success without any stress.
          </p>
        </header>

        <div className={styles.grid}>
          {plans.map((plan, i) => (
            <article key={plan.name} className={`${styles.card} ${plan.featured ? styles.featured : ''}`}>
              <h3>{plan.name}</h3>
              <ul>
                {plan.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <Button href="#consultation" variant={buttonVariant[i] ?? 'grad'}>
                {plan.cta}
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
