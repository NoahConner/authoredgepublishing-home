import bannerBg from '../assets/images/about-banner-bg.webp'
import styles from './PageBanner.module.css'

type Props = { title: string; subtitle: string }

/** Inner-page banner (About, Services, …): holds the page's only <h1>. */
export function PageBanner({ title, subtitle }: Props) {
  return (
    <section className={styles.banner} aria-labelledby="page-title">
      {/* Real <img> so the browser can prioritise it as the largest paint */}
      <img src={bannerBg} alt="" width={1905} height={403} fetchPriority="high" className={styles.bg} />
      <div className="container text-center">
        <h1 id="page-title" className={`section-title ${styles.title}`}>
          {title}
        </h1>
        <p>{subtitle}</p>
      </div>
    </section>
  )
}
