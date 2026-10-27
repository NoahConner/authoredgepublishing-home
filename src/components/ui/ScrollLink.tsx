import type { ComponentPropsWithoutRef } from 'react'
import { Link as ReactScrollLink } from 'react-scroll'

type Props = Omit<ComponentPropsWithoutRef<'a'>, 'href'> & {
  to: string
  href?: string
}

/** Anchor powered by react-scroll, with a native hash href as a fallback. */
export function ScrollLink({ to, href, ...props }: Props) {
  const reduceMotion = typeof window !== 'undefined'
    && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  return (
    <ReactScrollLink
      to={to}
      href={href ?? `#${to}`}
      smooth={!reduceMotion}
      duration={650}
      offset={-90}
      {...props}
    />
  )
}
