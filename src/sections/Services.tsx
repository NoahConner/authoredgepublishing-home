import { useRef, useState, type KeyboardEvent } from 'react'
import { services } from '../data/home'
import { site } from '../data/site'
import { Button } from '../components/ui/Button'
import { ShapeDivider } from '../components/ui/ShapeDivider'
import servicesBg from '../assets/images/services-bg.webp'
import styles from './Services.module.css'

export function Services() {
  const [active, setActive] = useState(0)
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])

  // Arrow-key navigation between tabs (WAI-ARIA tabs pattern)
  const onKeyDown = (e: KeyboardEvent) => {
    const delta = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0
    if (!delta) return
    e.preventDefault()
    const next = (active + delta + services.length) % services.length
    setActive(next)
    tabRefs.current[next]?.focus()
  }

  return (
    <section
      id="services"
      className={styles.services}
      style={{ backgroundImage: `url(${servicesBg})` }}
      aria-labelledby="services-title"
    >
      <ShapeDivider position="top" />

      <div className="container">
        <header className="text-center">
          <h2 id="services-title" className={`section-title ${styles.title}`}>
            What We Do?
          </h2>
          <p className={styles.intro}>
            We specialise in self publishing, offering expert book publishing support,
            <br /> personalised guidance, and top quality services to ensure your work shines in
            <br /> both print and digital formats.
          </p>
        </header>

        <div role="tablist" aria-label="Our services" className={styles.tabs} onKeyDown={onKeyDown}>
          {services.map((s, i) => (
            <button
              key={s.id}
              ref={(el) => {
                tabRefs.current[i] = el
              }}
              type="button"
              role="tab"
              id={`tab-${s.id}`}
              aria-selected={i === active}
              aria-controls={`panel-${s.id}`}
              tabIndex={i === active ? 0 : -1}
              className={styles.tab}
              onClick={() => setActive(i)}
            >
              {s.tab}
            </button>
          ))}
        </div>

        {/* All panels stay in the HTML (only hidden), so every service is indexable */}
        {services.map((s, i) => (
          <div
            key={s.id}
            role="tabpanel"
            id={`panel-${s.id}`}
            aria-labelledby={`tab-${s.id}`}
            hidden={i !== active}
            className={styles.panel}
          >
            <div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
              {s.points.length > 0 && (
                <ul>
                  {s.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              )}
              <div className={styles.ctas}>
                <Button href="#consultation">{s.cta}</Button>
                <Button href={site.phone.href}>{site.phone.display}</Button>
              </div>
            </div>
            <img
              src={s.image.src}
              alt={s.imageAlt}
              width={s.image.width}
              height={s.image.height}
              loading="lazy"
              className={styles.image}
            />
          </div>
        ))}
      </div>

      <ShapeDivider position="bottom" />
    </section>
  )
}
