declare module 'react-scroll' {
  import type { AnchorHTMLAttributes, ComponentType } from 'react'

  export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    to: string
    smooth?: boolean | string
    duration?: number | ((distance: number) => number)
    offset?: number
    delay?: number
    spy?: boolean
    hashSpy?: boolean
    isDynamic?: boolean
  }

  export const Link: ComponentType<LinkProps>
}
