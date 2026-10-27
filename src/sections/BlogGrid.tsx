import { useEffect, useRef, useState, type MouseEvent } from 'react'
import { getBlogs, blogDate, blogExcerpt, type ApiBlog } from '../data/blogApi'
import styles from './BlogGrid.module.css'
import { sitePath } from '../lib/paths'

const PAGE_SIZE = 6

/**
 * Blog post cards: 6 at first, 6 more per "Load More" click (as on the live
 * site). Posts load from the configured blog API.
 */
export function BlogGrid() {
  const [visible, setVisible] = useState(PAGE_SIZE)
  const [posts, setPosts] = useState<ApiBlog[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const indicatorRef = useRef<HTMLDivElement>(null)
  const allShown = visible >= posts.length

  useEffect(() => {
    let active = true
    getBlogs().then((result) => {
      if (active) setPosts(result)
    }).catch((cause: unknown) => {
      console.error('[BlogGrid] Unable to load blogs from the configured blog API.', cause)
      if (active) setError(true)
    }).finally(() => {
      if (active) setLoading(false)
    })
    return () => { active = false }
  }, [])

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
        {loading && <p className={styles.message}>Loading articles…</p>}
        {!loading && error && <p className={styles.message}>Articles are temporarily unavailable. Please try again later.</p>}
        {!loading && !error && posts.length === 0 && <p className={styles.message}>No articles are available yet.</p>}
        <ul className={styles.grid}>
          {posts.map((p, i) => (
            <li key={p.slug} hidden={i >= visible} className={styles.item}>
              <article>
                <a
                  href={sitePath(`/blog/${p.slug}/`)}
                  className={styles.imageLink}
                  onMouseEnter={showIndicator(true)}
                  onMouseMove={moveIndicator}
                  onMouseLeave={showIndicator(false)}
                >
                  {p.image && <img src={p.image} alt="" width={400} height={257} loading={i < 3 ? 'eager' : 'lazy'} />}
                  {!p.image && <span className={styles.imagePlaceholder} aria-hidden="true" />}
                </a>
                <h2 className={styles.title}><a href={sitePath(`/blog/${p.slug}/`)}>{p.title}</a></h2>
                <p className={styles.excerpt}>{blogExcerpt(p.content)}</p>
                <time className={styles.date} dateTime={p.created_at}>
                  {blogDate(p.created_at)}
                </time>
              </article>
            </li>
          ))}
        </ul>

        {posts.length > PAGE_SIZE && <div className={`${styles.loadMoreWrap} ${allShown ? styles.done : ''}`}>
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
        </div>}
      </div>

      <div ref={indicatorRef} className={styles.indicator} aria-hidden="true">
        <span>View</span>
      </div>
    </section>
  )
}
