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
}

/** Pill-shaped link button with the trailing arrow used across the site. */
export function Button({ variant = 'grad', className, children, ...rest }: Props) {
  return (
    <a className={[styles.btn, styles[variant], className].filter(Boolean).join(' ')} {...rest}>
      <span>{children}</span>
      <Icon name="arrow" size={18} className={styles.arrow} />
    </a>
  )
}
