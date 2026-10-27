import { ShapeDivider } from '../components/ui/ShapeDivider'
import styles from './CardGrid.module.css'

export type CardItem = {
  title: string
  body: string
  /** Icon above the title (About milestones) */
  icon?: { src: string; width: number; height: number }
  /** Large step number above the title (Services "How It Works") */
  number?: string
}

type Props = {
  id: string
  eyebrow: string
  title: string
  intro?: string
  items: CardItem[]
  /** `dark` = dark band with torn edges (About), `light` = white (Services) */
  theme?: 'dark' | 'light'
}

/** Section of gold gradient cards, three per row. */
export function CardGrid({ id, eyebrow, title, intro, items, theme = 'dark' }: Props) {
  const dark = theme === 'dark'

  return (
    <section className={`${styles.section} ${dark ? styles.dark : styles.light}`} aria-labelledby={id}>
      {dark && <ShapeDivider position="top" />}
      <div className="container text-center">
        <div data-animate="fade" >
          <p className={styles.eyebrow} style={{ color: '#000' }}>{eyebrow}</p>
          <h2 id={id} className={`section-title ${styles.title}`} >
            {title}
          </h2>
          {intro && <p style={{ color: '#fff' }}>{intro}</p>}
        </div>

        <ul className={styles.cards}>
          {items.map((item) => (
            <li key={item.title} className={styles.card}>
              {item.icon && (
                <img src={item.icon.src} alt="" width={item.icon.width} height={item.icon.height} loading="lazy" />
              )}
              {item.number && (
                <span className={styles.number} aria-hidden="true">
                  {item.number}
                </span>
              )}
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </li>
          ))}
        </ul>
      </div>
      {dark && <ShapeDivider position="bottom" />}
    </section>
  )
}
