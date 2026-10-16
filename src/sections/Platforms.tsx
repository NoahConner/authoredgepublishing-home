import { platforms } from '../data/home'
import styles from './Platforms.module.css'

export function Platforms() {
  return (
    <section className={styles.platforms} aria-labelledby="platforms-title">
      <div className="container text-center">
        <h2 id="platforms-title" className={`section-title ${styles.title}`}>
          Get Your Book Published Across Leading Platforms
        </h2>
      </div>

      {/* Logos scroll continuously; the second copy is only for the seamless loop */}
      <div className={styles.marquee}>
        {[false, true].map((duplicate) => (
          <ul key={String(duplicate)} className={styles.track} aria-hidden={duplicate || undefined}>
            {platforms.map((p) => (
              <li key={p.name}>
                <img
                  src={p.src}
                  alt={duplicate ? '' : p.name}
                  width={p.width}
                  height={p.height}
                  loading="lazy"
                />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  )
}
