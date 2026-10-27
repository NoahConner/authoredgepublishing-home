export type ApiBlog = {
  id: number
  title: string
  slug: string
  content: string
  image: string | null
  created_by?: string
  category?: string
  created_at: string
  updated_at?: string
  status?: string
}

type BlogListResponse = { success: boolean; blogs: ApiBlog[] }
type BlogResponse = { success: boolean; blog: ApiBlog }

// The default matches the backend host/path used by the blog image URLs. It can
// be overridden per environment when the API is deployed elsewhere.
const endpoint = ((import.meta.env.VITE_BLOG_API_URL as string | undefined)
  || 'https://mobileappapi.setreels.com/authoredge-backend/public/api/blogs').replace(/\/$/, '')

async function request<T>(url: string): Promise<T> {
  const response = await fetch(url, { headers: { Accept: 'application/json' } })
  if (!response.ok) throw new Error(`Blog request failed (${response.status})`)
  return response.json() as Promise<T>
}

export async function getBlogs(): Promise<ApiBlog[]> {
  const result = await request<BlogListResponse>(endpoint)
  if (!result.success || !Array.isArray(result.blogs)) throw new Error('Invalid blog list response')
  return result.blogs.filter((blog) => blog.status === 'published')
}

export async function getBlog(slug: string): Promise<ApiBlog> {
  const result = await request<BlogResponse>(`${endpoint}/${encodeURIComponent(slug)}`)
  if (!result.success || !result.blog) throw new Error('Blog not found')
  return result.blog
}

/** Keep API-provided rich text safe before inserting it into the page. */
export function sanitizeBlogHtml(html: string): string {
  const doc = new DOMParser().parseFromString(html, 'text/html')
  doc.querySelectorAll('script,style,iframe,object,embed,form,base,meta,link').forEach((node) => node.remove())
  doc.body.querySelectorAll('*').forEach((element) => {
    for (const attribute of [...element.attributes]) {
      const name = attribute.name.toLowerCase()
      const value = attribute.value.trim().toLowerCase()
      if (name.startsWith('on') || ((name === 'href' || name === 'src' || name === 'xlink:href') && value.startsWith('javascript:'))) {
        element.removeAttribute(attribute.name)
      }
    }
  })
  return doc.body.innerHTML
}

export const blogDate = (value: string) => {
  const date = new Date(value)
  return Number.isNaN(date.valueOf()) ? '' : date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
}

/** Plain-text preview for cards. Text is rendered by React, never as HTML. */
export function blogExcerpt(html: string, maxLength = 190): string {
  const doc = new DOMParser().parseFromString(html, 'text/html')
  const text = (doc.body.textContent ?? '').replace(/\s+/g, ' ').trim()
  if (text.length <= maxLength) return text
  return `${text.slice(0, maxLength).trimEnd()}…`
}
