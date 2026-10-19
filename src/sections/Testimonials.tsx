import type { CSSProperties } from 'react'
import { testimonials } from '../data/home'
import styles from './Testimonials.module.css'

const initials = (name: string) =>
  name
    .split(' ')
    .map((part) => part[0])
    .join('')

type Props = {
  /** Show full names ("Emily Johnson") instead of short ones ("Emily J") — Services page */
  fullNames?: boolean
  /** 60px top/bottom padding (Services page) instead of the homepage's 0/66px */
  padded?: boolean
}

export function Testimonials({ fullNames = false, padded = false }: Props) {
  return (
    <section
      className={`${styles.testimonials} ${padded ? styles.padded : ''}`}
      aria-labelledby="testimonials-title"
    >
      <div className="container">
        <h2 id="testimonials-title" className={`section-title text-center ${styles.title}`}>
          What Our Clients Say
        </h2>

        {/* Columns grow in one after another (0 / 100 / 200ms), as on the original */}
        <ul className={styles.grid}>
          {testimonials.map((t, i) => (
            <li key={t.name} data-animate="grow" style={{ '--delay': `${i * 100}ms` } as CSSProperties}>
              <figure className={styles.card}>
                <blockquote>
                  <p>“{t.quote}”</p>
                </blockquote>
                <figcaption>
                  <span className={styles.avatar} aria-hidden="true">
                    {initials(t.name)}
                  </span>
                  {fullNames ? t.fullName : t.name}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
