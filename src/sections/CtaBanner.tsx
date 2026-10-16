import { site } from '../data/site'
import { Button } from '../components/ui/Button'
import { ShapeDivider } from '../components/ui/ShapeDivider'
import openBookBg from '../assets/images/open-book-bg.webp'
import styles from './CtaBanner.module.css'

type Props = {
  title: string
  text: string
  cta: string
}

/** Full-width call-to-action strip, reused between homepage sections. */
export function CtaBanner({ title, text, cta }: Props) {
  return (
    <section className={styles.banner} style={{ backgroundImage: `url(${openBookBg})` }}>
      <ShapeDivider position="top" />
      <div className={`container ${styles.inner}`}>
        <div>
          <h2 className="section-title">{title}</h2>
          <p>{text}</p>
        </div>
        <div className={styles.ctas}>
          <Button href={site.phone.href} variant="gold">
            {site.phone.display}
          </Button>
          <Button href="#consultation" variant="gold">
            {cta}
          </Button>
        </div>
      </div>
      <ShapeDivider position="bottom" />
    </section>
  )
}
