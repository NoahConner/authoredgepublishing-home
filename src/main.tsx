import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './styles/global.css'
import App from './App.tsx'
import { matchRoute } from './routes'

const base = import.meta.env.BASE_URL
const path = window.location.pathname.startsWith(base)
  ? `/${window.location.pathname.slice(base.length)}`
  : window.location.pathname
const container = document.getElementById('root')!
const app = (
  <StrictMode>
    <App path={path} />
  </StrictMode>
)

// In production every page is prerendered at build time (scripts/prerender.mjs),
// so React hydrates it. In dev the root is empty and we render normally.
if (container.hasChildNodes()) {
  hydrateRoot(container, app)
} else {
  // Dev only: the prerender step normally writes the <title>
  document.title = matchRoute(path).seo.title
  createRoot(container).render(app)
}

