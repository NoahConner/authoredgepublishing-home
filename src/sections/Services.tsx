import { useRef, useState, type KeyboardEvent, type ReactNode } from 'react'
import { services as defaultServices, type Service } from '../data/home'
import { site } from '../data/site'
import { Button } from '../components/ui/Button'
import { ShapeDivider } from '../components/ui/ShapeDivider'
import servicesBg from '../assets/images/services-bg.webp'
import styles from './Services.module.css'

type Props = {
  /** Prefix for element ids, so the section can appear twice on one page */
  idPrefix?: string
  title?: string
  intro?: ReactNode
  items?: Service[]
  /** `dark` = photo background (homepage), `light` = white background (Services page) */
  variant?: 'dark' | 'light'
  /** Overrides every item's first button label (e.g. "Request Quote") */
  ctaLabel?: string
  ctaHref?: string
}

const defaultIntro = (
  <>
    We specialise in self publishing, offering expert book publishing support,
    <br /> personalised guidance, and top quality services to ensure your work shines in
    <br /> both print and digital formats.
  </>
)

/** Tabbed services section: one tab per service, with text, bullet points and an image. */
export function Services({
  idPrefix = 'services',
  title = 'What We Do?',
  intro = defaultIntro,
  items = defaultServices,
  variant = 'dark',
  ctaLabel,
  ctaHref = '#consultation',
}: Props) {
  const [active, setActive] = useState(0)
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])
  const dark = variant === 'dark'

  // Arrow-key navigation between tabs (WAI-ARIA tabs pattern)
  const onKeyDown = (e: KeyboardEvent) => {
    const delta = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0
    if (!delta) return
    e.preventDefault()
    const next = (active + delta + items.length) % items.length
    setActive(next)
    tabRefs.current[next]?.focus()
  }

  return (
    <section
      id={idPrefix}
      className={`${styles.services} ${dark ? styles.dark : styles.light}`}
      style={dark ? { backgroundImage: `url(${servicesBg})` } : undefined}
      aria-labelledby={`${idPrefix}-title`}
    >
      {dark && <ShapeDivider position="top" />}

      <div className="container">
        <header className="text-center" data-animate="fade">
          <h2 id={`${idPrefix}-title`} className={`section-title ${styles.title}`}>
            {title}
          </h2>
          {intro && <p className={styles.intro}>{intro}</p>}
        </header>

        <div role="tablist" aria-label={title} className={styles.tabs} onKeyDown={onKeyDown}>
          {items.map((s, i) => (
            <button
              key={s.id}
              ref={(el) => {
                tabRefs.current[i] = el
              }}
              type="button"
              role="tab"
              id={`${idPrefix}-tab-${s.id}`}
              aria-selected={i === active}
              aria-controls={`${idPrefix}-panel-${s.id}`}
              tabIndex={i === active ? 0 : -1}
              className={styles.tab}
              onClick={() => setActive(i)}
            >
              {s.tab}
            </button>
          ))}
        </div>

        {/* All panels stay in the HTML (only hidden), so every service is indexable */}
        {items.map((s, i) => (
          <div
            key={s.id}
            role="tabpanel"
            id={`${idPrefix}-panel-${s.id}`}
            aria-labelledby={`${idPrefix}-tab-${s.id}`}
            hidden={i !== active}
            className={styles.panel}
          >
            <div>
              <div data-animate="fade">
                <h3>{s.title}</h3>
                <p style={{ color: '#fff' }}>{s.body}</p>
                {s.points.length > 0 && (
                  <ul>
                    {s.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                )}
              </div>
              <div className={styles.ctas}>
                <Button href={ctaHref}>{ctaLabel ?? s.cta}</Button>
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

      {dark && <ShapeDivider position="bottom" />}
    </section>
  )
}
