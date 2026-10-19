import { useRef, useState, type KeyboardEvent } from 'react'
import { portfolio } from '../data/portfolio'
import styles from './PortfolioGallery.module.css'

/** Book covers grouped into category tabs (Portfolio page). */
export function PortfolioGallery() {
  const [active, setActive] = useState(0)
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])

  // Arrow-key navigation between tabs (WAI-ARIA tabs pattern)
  const onKeyDown = (e: KeyboardEvent) => {
    const delta = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0
    if (!delta) return
    e.preventDefault()
    const next = (active + delta + portfolio.length) % portfolio.length
    setActive(next)
    tabRefs.current[next]?.focus()
  }

  return (
    <section className={styles.gallery} aria-labelledby="portfolio-gallery-title">
      <div className="container">
        <h2 id="portfolio-gallery-title" className="visually-hidden">
          Books We Have Published
        </h2>

        <div role="tablist" aria-label="Book categories" className={styles.tabs} onKeyDown={onKeyDown}>
          {portfolio.map((cat, i) => (
            <button
              key={cat.id}
              ref={(el) => {
                tabRefs.current[i] = el
              }}
              type="button"
              role="tab"
              id={`portfolio-tab-${cat.id}`}
              aria-selected={i === active}
              aria-controls={`portfolio-panel-${cat.id}`}
              tabIndex={i === active ? 0 : -1}
              className={styles.tab}
              onClick={() => setActive(i)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* All categories stay in the HTML (only hidden), so every book is indexable */}
        {portfolio.map((cat, i) => (
          <ul
            key={cat.id}
            role="tabpanel"
            id={`portfolio-panel-${cat.id}`}
            aria-labelledby={`portfolio-tab-${cat.id}`}
            hidden={i !== active}
            className={styles.grid}
          >
            {cat.books.map((b) => (
              <li key={b.image} className={styles.book}>
                <img
                  src={b.image}
                  alt={`${b.title.replace(/[.…]+$/, '')} by ${b.author} — book cover`}
                  width={415}
                  height={512}
                  loading="lazy"
                />
                <h3>{b.title}</h3>
                <p>
                  (Author) by <strong>{b.author}</strong>
                </p>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  )
}
