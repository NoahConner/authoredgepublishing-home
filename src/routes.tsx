import type { ComponentType } from 'react'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Services } from './pages/Services'
import { Portfolio } from './pages/Portfolio'
import { Contact } from './pages/Contact'
import { seo, type PageSeo } from './data/seo'

export type Route = {
  /** Always with a trailing slash, e.g. "/about/". */
  path: string
  Page: ComponentType
  seo: PageSeo
}

// Every page of the site. The prerender script builds one HTML file per route
// (/ → dist/index.html, /about/ → dist/about/index.html).
export const routes: Route[] = [
  { path: '/', Page: Home, seo: seo.home },
  { path: '/about/', Page: About, seo: seo.about },
  { path: '/services/', Page: Services, seo: seo.services },
  { path: '/portfolio/', Page: Portfolio, seo: seo.portfolio },
  { path: '/contact/', Page: Contact, seo: seo.contact },
]

/** "/about" and "/about/" both match the About route; unknown paths fall back to Home. */
export function matchRoute(pathname: string): Route {
  const path = pathname.endsWith('/') ? pathname : `${pathname}/`
  return routes.find((r) => r.path === path) ?? routes[0]
}
