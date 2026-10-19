import { genres } from '../data/home'
import { Icon } from '../components/ui/Icon'
import { useLoopCarousel } from '../lib/useLoopCarousel'
import styles from './Genres.module.css'

export function Genres() {
  // Autoplays every 2s and loops, like the original Owl carousel
  const { trackRef, trackStyle, onTransitionEnd, pauseProps, next, prev } = useLoopCarousel(genres.length)

  return (
    <section className={styles.genres} aria-labelledby="genres-title">
      <div className="container">
        <h2 id="genres-title" className={`section-title ${styles.title}`} data-animate="fade">
          Offering a Wide Range of Genres
        </h2>
        <div className={styles.head}>
          <p className={styles.intro} data-animate="fade">
            From fiction to non fiction, Author Edge Publishing caters to all genres. Our team provides
            <br /> book publishing services tailored to your style, ensuring every story reaches
            <br /> its ideal audience with care and expertise.
          </p>
          <div className={styles.arrows}>
            <button type="button" onClick={prev} aria-label="Previous genres">
              <Icon name="chevronLeft" size={22} />
            </button>
            <button type="button" onClick={next} aria-label="Next genres">
              <Icon name="chevronRight" size={22} />
            </button>
          </div>
        </div>

        <div className={styles.viewport} data-reveal-group {...pauseProps}>
          {/* Second copy of the cards only makes the loop seamless; hidden from assistive tech */}
          <ul ref={trackRef} className={styles.track} style={trackStyle} onTransitionEnd={onTransitionEnd}>
            {[...genres, ...genres].map((g, i) => {
              const clone = i >= genres.length
              return (
                <li key={`${g.name}-${i}`} className={styles.card} aria-hidden={clone || undefined}>
                  <img src={g.image} alt={clone ? '' : `${g.name} books`} width={274} height={274} loading="lazy" />
                  <div data-animate={clone ? undefined : 'fade'}>
                    <h3>{g.name}</h3>
                    <p>{g.body}</p>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
