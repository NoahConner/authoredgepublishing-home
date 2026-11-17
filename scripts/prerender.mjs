// Builds one static HTML file per route, with the page's own SEO tags in <head>
// and the server-rendered page in <body>, so crawlers get full content.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dist = path.join(root, 'dist')
const serverEntry = path.join(root, 'dist-ssr/entry-server.js')

const { render, routes, site, posts } = await import(pathToFileURL(serverEntry).href)
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8')

for (const placeholder of ['<!--app-head-->', '<!--app-html-->']) {
  if (!template.includes(placeholder)) {
    throw new Error(`dist/index.html is missing the ${placeholder} placeholder`)
  }
}

const esc = (s) =>
  s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

function headTags(route) {
  const { title, description, keywords, ogTitle = title } = route.seo
  const url = `${site.url}${route.path}`
  return [
    `<title>${esc(title)}</title>`,
    `<meta name="description" content="${esc(description)}" />`,
    `<meta name="keywords" content="${esc(keywords)}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<link rel="alternate" hreflang="en-gb" href="${url}" />`,
    `<link rel="alternate" hreflang="x-default" href="${url}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:title" content="${esc(ogTitle)}" />`,
    `<meta property="og:description" content="${esc(description)}" />`,
    `<meta name="twitter:title" content="${esc(ogTitle)}" />`,
    `<meta name="twitter:description" content="${esc(description)}" />`,
  ].join('\n    ')
}

const blogRoutes = posts.map((post) => ({
  path: `/blog/${post.slug}/`,
  seo: {
    title: post.title,
    description: post.excerpt.replace(/(?:â€¦|\.\.\.)$/, ''),
    keywords: 'book publishing, authors, self publishing',
  },
}))

for (const route of [...routes, ...blogRoutes]) {
  const html = template
    .replace('<!--app-head-->', headTags(route))
    .replace('<!--app-html-->', await render(route.path))

  const outDir = path.join(dist, route.path)
  fs.mkdirSync(outDir, { recursive: true })
  fs.writeFileSync(path.join(outDir, 'index.html'), html)
  console.log(`Prerendered ${route.path} → ${path.relative(root, path.join(outDir, 'index.html'))}`)
}

const xml = (value) => value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...[...routes, ...blogRoutes].map(({ path: routePath }) => `  <url><loc>${xml(`${site.url}${routePath}`)}</loc></url>`),
  '</urlset>',
].join('\n') + '\n'
fs.writeFileSync(path.join(dist, 'sitemap.xml'), sitemap)

fs.rmSync(path.join(root, 'dist-ssr'), { recursive: true, force: true })
