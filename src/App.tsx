import { useEffect } from 'react'
import { matchRoute } from './routes'
import { initReveal } from './lib/reveal'

type Props = { path: string }

export default function App({ path }: Props) {
  const { Page } = matchRoute(path)

  // Start scroll-reveal animations only after React has finished hydrating,
  // so nothing touches the DOM while React is still matching it up
  useEffect(() => {
    initReveal()
  }, [])

  return <Page />
}
