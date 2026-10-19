import type { ComponentPropsWithoutRef } from 'react'
import { Icon } from './Icon'
import styles from './Button.module.css'

/**
 * grad  – gold → dark brown gradient, white text (default)
 * dark  – black, white text
 * brown – #482c1e, white text
 * gold  – solid #edab02, black text
 * light – white, black text
 */
type Variant = 'grad' | 'dark' | 'brown' | 'gold' | 'light'

type Props = ComponentPropsWithoutRef<'a'> & {
  variant?: Variant
  /** Bounce in when scrolled into view, like the original theme (off for header buttons) */
  animate?: boolean
}

/** Pill-shaped link button with the trailing arrow used across the site. */
export function Button({ variant = 'grad', animate = true, className, children, ...rest }: Props) {
  return (
    <a
      className={[styles.btn, styles[variant], className].filter(Boolean).join(' ')}
      data-animate={animate ? 'bounce' : undefined}
      {...rest}
    >
      <span>{children}</span>
      <Icon name="longArrow" size={20} className={styles.arrow} />
    </a>
  )
}
