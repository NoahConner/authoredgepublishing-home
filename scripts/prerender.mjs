// Injects the server-rendered app HTML into dist/index.html so crawlers
// (and users before JS loads) get the full page content.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const templatePath = path.join(root, 'dist/index.html')
const serverEntry = path.join(root, 'dist-ssr/entry-server.js')

const { render } = await import(pathToFileURL(serverEntry).href)
const appHtml = await render()

const template = fs.readFileSync(templatePath, 'utf8')
if (!template.includes('<!--app-html-->')) {
  throw new Error('dist/index.html is missing the <!--app-html--> placeholder')
}
fs.writeFileSync(templatePath, template.replace('<!--app-html-->', appHtml))
fs.rmSync(path.join(root, 'dist-ssr'), { recursive: true, force: true })

console.log(`Prerendered dist/index.html (${(appHtml.length / 1024).toFixed(1)} KB of HTML)`)
