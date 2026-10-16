import styles from './Accordion.module.css'

type Item = { title: string; body: string }

type Props = {
  items: Item[]
  /** Heading level for item titles, so the page outline stays correct. */
  headingLevel?: 'h3' | 'h4'
}

/**
 * Native <details>/<summary> accordion: works without JavaScript and keeps
 * every answer in the HTML, so search engines can index the content.
 */
export function Accordion({ items, headingLevel: Heading = 'h3' }: Props) {
  return (
    <div className={styles.list}>
      {items.map((item, i) => (
        <details key={item.title} className={styles.item} open={i === 0}>
          <summary className={styles.summary}>
            <Heading className={styles.title}>{item.title}</Heading>
            <span className={styles.icon} aria-hidden="true" />
          </summary>
          <p className={styles.body}>{item.body}</p>
        </details>
      ))}
    </div>
  )
}
