import { useEffect } from 'react'
import { matchRoute } from './routes'
import { initReveal } from './lib/reveal'

type Props = { path: string }

export default function App({ path }: Props) {
  const { Page } = matchRoute(path)

  // Run after React commits the page. A requestAnimationFrame in main.tsx can
  // run before createRoot has rendered anything, leaving reveal elements hidden.
  useEffect(() => initReveal(), [path])

  return <Page />
}
