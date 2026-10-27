/** Prefix a site-relative path with Vite's configured deployment base. */
export function sitePath(path: string): string {
  const base = import.meta.env.BASE_URL
  return `${base}${path.replace(/^\/+/, '')}`
}
