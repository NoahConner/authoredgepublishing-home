import { reasons } from '../data/home'
import { Accordion } from '../components/ui/Accordion'
import book1 from '../assets/images/book-1.webp'
import book2 from '../assets/images/book-2.webp'
import book3 from '../assets/images/book-3.webp'
import book4 from '../assets/images/book-4.webp'
import book5 from '../assets/images/book-5.webp'
import styles from './WhyChooseUs.module.css'

type CoverProps = { src: string; n: number; className?: string; width?: number }

function Cover({ src, n, className, width = 177 }: CoverProps) {
  return (
    <img
      src={src}
      alt={`Book cover published with Author Edge Publishing (${n} of 5)`}
      width={width}
      height={250}
      loading="lazy"
      className={[styles.cover, className].filter(Boolean).join(' ')}
    />
  )
}

/*
 * Same structure as the original theme:
 *  row 1  [5/12: cover 1][7/12: empty]
 *  cover 2 (in flow)
 *  cover 3 (large, centred on the point between cover 2 and row 3)
 *  row 3  [7/12: cover 4][5/12: cover 5]
 * Hovering the collage spins it 180° while each cover counter-rotates.
 */
export function WhyChooseUs() {
  return (
    <section className={styles.why} aria-labelledby="why-title">
      <div className={`container ${styles.grid}`}>
        <div className={styles.collage}>
          <div className={styles.collageInner}>
            <div className={styles.row}>
              <div className={styles.col5}>
                <Cover src={book1} n={1} />
              </div>
              <div className={styles.col7} />
            </div>

            <Cover src={book3} n={2} />
            {/* Zero-height anchor: the large cover is centred on this point */}
            <div className={styles.centerAnchor}>
              <Cover src={book4} n={3} className={styles.center} />
            </div>

            <div className={styles.row}>
              <div className={styles.col7}>
                <Cover src={book5} n={4} width={176} />
              </div>
              <div className={styles.col5}>
                <Cover src={book2} n={5} />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.text}>
          <div data-animate="fade">
            <h2 id="why-title" className={styles.title}>
              Why Choose Us?
            </h2>
            <p className={styles.intro}>
              Author Edge Publishing combines expertise, reliability, and personalised attention. Our self publishing
              company ensures every author receives professional support to publish their book confidently and
              efficiently.
            </p>
          </div>
          <div className={styles.accordion}>
            <Accordion items={reasons} />
          </div>
        </div>
      </div>
    </section>
  )
}
