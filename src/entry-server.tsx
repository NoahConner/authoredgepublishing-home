import { StrictMode } from 'react'
import { prerender } from 'react-dom/static'
import App from './App.tsx'
import { routes } from './routes'
import { site } from './data/site'

export { routes, site }

/** Renders one page to static HTML at build time (see scripts/prerender.mjs). */
export async function render(path: string): Promise<string> {
  const { prelude } = await prerender(
    <StrictMode>
      <App path={path} />
    </StrictMode>,
  )
  return new Response(prelude).text()
}
