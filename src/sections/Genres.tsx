import { useRef } from 'react'
import { genres } from '../data/home'
import { Icon } from '../components/ui/Icon'
import styles from './Genres.module.css'

export function Genres() {
  const trackRef = useRef<HTMLUListElement>(null)

  const scroll = (dir: 1 | -1) => {
    const track = trackRef.current
    if (!track) return
    const card = track.firstElementChild as HTMLElement | null
    track.scrollBy({ left: dir * (card?.offsetWidth ?? 325), behavior: 'smooth' })
  }

  return (
    <section className={styles.genres} aria-labelledby="genres-title">
      <div className="container">
        <h2 id="genres-title" className={`section-title ${styles.title}`}>
          Offering a Wide Range of Genres
        </h2>
        <div className={styles.head}>
          <p className={styles.intro}>
            From fiction to non fiction, Author Edge Publishing caters to all genres. Our team provides
            <br /> book publishing services tailored to your style, ensuring every story reaches
            <br /> its ideal audience with care and expertise.
          </p>
          <div className={styles.arrows}>
            <button type="button" onClick={() => scroll(-1)} aria-label="Previous genres">
              <Icon name="chevronLeft" size={22} />
            </button>
            <button type="button" onClick={() => scroll(1)} aria-label="Next genres">
              <Icon name="chevronRight" size={22} />
            </button>
          </div>
        </div>

        <ul ref={trackRef} className={styles.track}>
          {genres.map((g) => (
            <li key={g.name} className={styles.card}>
              <img src={g.image} alt={`${g.name} books`} width={274} height={274} loading="lazy" />
              <h3>{g.name}</h3>
              <p>{g.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
