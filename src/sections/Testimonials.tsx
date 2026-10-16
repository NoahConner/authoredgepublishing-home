import { testimonials } from '../data/home'
import styles from './Testimonials.module.css'

const initials = (name: string) =>
  name
    .split(' ')
    .map((part) => part[0])
    .join('')

export function Testimonials() {
  return (
    <section className={styles.testimonials} aria-labelledby="testimonials-title">
      <div className="container">
        <h2 id="testimonials-title" className={`section-title text-center ${styles.title}`}>
          What Our Clients Say
        </h2>

        <ul className={styles.grid}>
          {testimonials.map((t) => (
            <li key={t.name}>
              <figure className={styles.card}>
                <blockquote>
                  <p>“{t.quote}”</p>
                </blockquote>
                <figcaption>
                  <span className={styles.avatar} aria-hidden="true">
                    {initials(t.name)}
                  </span>
                  {t.name}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
