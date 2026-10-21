import { platforms } from '../data/home'
import { useLoopCarousel } from '../lib/useLoopCarousel'
import styles from './Platforms.module.css'

type Props = {
  title?: string
  /** Tighter padding (30px top/bottom), used on the About page */
  compact?: boolean
}

export function Platforms({ title = 'Get Your Book Published Across Leading Platforms', compact = false }: Props) {
  // Steps one logo every 2s and loops, like the original Owl carousel
  const { trackRef, trackStyle, onTransitionEnd, pauseProps } = useLoopCarousel(platforms.length)

  return (
    <section className={`${styles.platforms} ${compact ? styles.compact : ''}`} aria-labelledby="platforms-title">
      <div className="container text-center">
        <h2 id="platforms-title" className={`section-title ${styles.title}`} data-animate="fade" style={{ color: '#000' }}>
          {title}
        </h2>

        <div className={styles.viewport} {...pauseProps}>
          {/* Second copy of the logos only makes the loop seamless; hidden from assistive tech */}
          <ul ref={trackRef} className={styles.track} style={trackStyle} onTransitionEnd={onTransitionEnd}>
            {[...platforms, ...platforms].map((p, i) => {
              const clone = i >= platforms.length
              return (
                <li key={`${p.name}-${i}`} aria-hidden={clone || undefined}>
                  <img src={p.src} alt={clone ? '' : p.name} width={p.width} height={p.height} loading="lazy" />
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
