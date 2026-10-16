import { StrictMode } from 'react'
import { prerender } from 'react-dom/static'
import App from './App.tsx'

/** Renders the app to static HTML at build time (see scripts/prerender.mjs). */
export async function render(): Promise<string> {
  const { prelude } = await prerender(
    <StrictMode>
      <App />
    </StrictMode>,
  )
  return new Response(prelude).text()
}
