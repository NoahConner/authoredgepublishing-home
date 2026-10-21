import { useRef, useState, type MouseEvent } from 'react'
import { posts, formatDate } from '../data/blog'
import styles from './BlogGrid.module.css'

const PAGE_SIZE = 6

/**
 * Blog post cards: 6 at first, 6 more per "Load More" click (as on the live
 * site). All posts are in the HTML from the start (later ones only hidden), so
 * crawlers see every post.
 */
export function BlogGrid() {
  const [visible, setVisible] = useState(PAGE_SIZE)
  const indicatorRef = useRef<HTMLDivElement>(null)
  const allShown = visible >= posts.length

  // "View" circle that follows the cursor over a post image (original theme effect)
  const moveIndicator = (e: MouseEvent) => {
    const el = indicatorRef.current
    if (el) el.style.translate = `${e.clientX}px ${e.clientY}px`
  }
  const showIndicator = (show: boolean) => (e: MouseEvent) => {
    moveIndicator(e)
    indicatorRef.current?.classList.toggle(styles.indicatorOn, show)
  }

  return (
    <section className={styles.blog} aria-label="Latest articles">
      <div className="container">
        <ul className={styles.grid}>
          {posts.map((p, i) => (
            <li key={p.slug} hidden={i >= visible} className={styles.item}>
              <article>
                {/* Not links yet: post pages aren't built, so clicking does nothing */}
                <div
                  className={styles.imageLink}
                  onMouseEnter={showIndicator(true)}
                  onMouseMove={moveIndicator}
                  onMouseLeave={showIndicator(false)}
                >
                  <img src={p.image} alt={p.title} width={400} height={257} loading={i < 3 ? 'eager' : 'lazy'} />
                </div>
                <h2 className={styles.title}>{p.title}</h2>
                <p className={styles.excerpt}>{p.excerpt}</p>
                <time className={styles.date} dateTime={p.date}>
                  {formatDate(p.date)}
                </time>
              </article>
            </li>
          ))}
        </ul>

        <div className={`${styles.loadMoreWrap} ${allShown ? styles.done : ''}`}>
          <button
            type="button"
            className={styles.loadMore}
            onClick={() => setVisible((v) => Math.min(v + PAGE_SIZE, posts.length))}
            disabled={allShown}
            aria-hidden={allShown || undefined}
            tabIndex={allShown ? -1 : undefined}
          >
            Load More
          </button>
        </div>
      </div>

      <div ref={indicatorRef} className={styles.indicator} aria-hidden="true">
        <span>View</span>
      </div>
    </section>
  )
}
