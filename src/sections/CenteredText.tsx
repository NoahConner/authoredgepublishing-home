import type { ReactNode } from 'react'
import { site } from '../data/site'
import { Button } from '../components/ui/Button'
import styles from './CenteredText.module.css'

type Props = {
  id: string
  /** Optional small line above the title (e.g. "Request Quote") */
  eyebrow?: string
  title: string
  children: ReactNode
}

/** Centred title + long-form copy + buttons (About "Empowers", Services "Crafting Bestselling Stories"). */
export function CenteredText({ id, eyebrow, title, children }: Props) {
  return (
    <section className={styles.section} aria-labelledby={id}>
      <div className="container text-center rich-text">
        <div data-animate="fade">
          {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
          <h2 id={id} className={`section-title ${styles.title}`}>
            {title}
          </h2>
          {children}
        </div>
        <div className={styles.ctas}>
          <Button href="#contact">Request Quote</Button>
          <Button href={site.phone.href}>{site.phone.display}</Button>
        </div>
      </div>
    </section>
  )
}
