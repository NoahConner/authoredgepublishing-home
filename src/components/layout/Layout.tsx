import type { ReactNode } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import { WhatsAppButton } from './WhatsAppButton'
import { ScrollLink } from '../ui/ScrollLink'

type Props = { children: ReactNode; currentPath?: string }

/** Shared page shell: every page gets the same Header and Footer. */
export function Layout({ children, currentPath }: Props) {
  return (
    <>
      <ScrollLink to="main" href="#main" className="skip-link">
        Skip to main content
      </ScrollLink>
      <Header currentPath={currentPath} />
      <main id="main">{children}</main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
