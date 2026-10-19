import type { ReactNode } from 'react'
import { site } from '../data/site'
import { Button } from '../components/ui/Button'
import styles from './SplitSection.module.css'

type Props = {
  id: string
  title: string
  /** `script` = Shunshine 35px (Who We Are), `display` = Coolvetica 60px (Stands Out) */
  titleStyle: 'script' | 'display'
  /** Image is shown at its natural width (max), centred in its column */
  image: { src: string; alt: string; width?: number; height?: number }
  imageSide: 'left' | 'right'
  children: ReactNode
}

/** Text + image row (About "Who We Are" / "Stands Out", Services "Bringing Stories To Life"). */
export function SplitSection({ id, title, titleStyle, image, imageSide, children }: Props) {
  const titleClass = titleStyle === 'script' ? styles.scriptTitle : 'section-title'

  return (
    <section className={styles.section} aria-labelledby={id}>
      <div className={`container ${styles.grid} ${imageSide === 'left' ? styles.imageLeft : ''}`}>
        <div className={`rich-text ${styles.text}`}>
          <div data-animate="fade">
            <h2 id={id} className={`${titleClass} ${styles.title}`}>
              {title}
            </h2>
            {children}
          </div>
          <div className={styles.ctas}>
            <Button href="#contact">Request Quote</Button>
            <Button href={site.phone.href}>{site.phone.display}</Button>
          </div>
        </div>
        <img
          src={image.src}
          alt={image.alt}
          width={image.width ?? 487}
          height={image.height ?? 602}
          loading="lazy"
          className={styles.image}
          style={{ maxWidth: image.width ?? 487 }}
        />
      </div>
    </section>
  )
}
