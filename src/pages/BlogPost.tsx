import { useEffect, useState } from 'react'
import { Layout } from '../components/layout/Layout'
import { PageBanner } from '../sections/PageBanner'
import { getBlog, getBlogs, blogDate, sanitizeBlogHtml, type ApiBlog } from '../data/blogApi'
import styles from './BlogPost.module.css'
import { sitePath } from '../lib/paths'

type Props = { slug: string }

export function BlogPost({ slug }: Props) {
  const [post, setPost] = useState<ApiBlog | null>(null)
  const [posts, setPosts] = useState<ApiBlog[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    let active = true
    setPost(null)
    setPosts([])
    setLoading(true)
    setError(false)
    Promise.all([
      getBlog(slug),
      getBlogs().catch((cause: unknown) => {
        console.error('[BlogPost] Could not load neighboring articles.', cause)
        return [] as ApiBlog[]
      }),
    ]).then(([result, allPosts]) => {
      if (active) {
        setPost(result)
        setPosts(allPosts)
      }
    }).catch((cause: unknown) => {
      console.error(`[BlogPost] Could not load article "${slug}".`, cause)
      if (active) setError(true)
    }).finally(() => {
      if (active) setLoading(false)
    })
    return () => { active = false }
  }, [slug])

  useEffect(() => {
    if (!post) return

    const title = post.title
    const template = document.createElement('template')
    template.innerHTML = sanitizeBlogHtml(post.content)
    const plainText = (template.content.textContent ?? '').replace(/\s+/g, ' ').trim()
    const description = plainText.length > 160
      ? `${plainText.slice(0, 157).trimEnd()}...`
      : plainText

    document.title = title
    setMetaContent('description', description)
    setMetaContent('og:title', title, 'property')
    setMetaContent('og:description', description, 'property')
    setMetaContent('twitter:title', title)
    setMetaContent('twitter:description', description)
  }, [post])

  return (
    <Layout currentPath="/blog/">
      <PageBanner title={post?.title ?? (loading ? 'Loading article…' : 'Article not found')} image={post?.image} />
      <section className={styles.article}>
        <div className="container">
          {loading && <p className={styles.state}>Loading article…</p>}
          {!loading && error && <p className={styles.state}>This article could not be found or is temporarily unavailable. <a href={sitePath('/blog/')}>Back to all articles</a></p>}
          {post && <article>
            <div className={styles.meta}>
              {post.category && <span>{post.category}</span>}
              {post.created_at && <time dateTime={post.created_at}>{blogDate(post.created_at)}</time>}
            </div>
            <div className={`rich-text ${styles.content}`} dangerouslySetInnerHTML={{ __html: sanitizeBlogHtml(post.content) }} />
          </article>}
        </div>
      </section>
      {post && <PostNavigation current={post} posts={posts} />}
    </Layout>
  )
}

function setMetaContent(name: string, content: string, attribute: 'name' | 'property' = 'name') {
  let meta = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${name}"]`)
  if (!meta) {
    meta = document.createElement('meta')
    meta.setAttribute(attribute, name)
    document.head.append(meta)
  }
  meta.content = content
}

function PostNavigation({ current, posts }: { current: ApiBlog; posts: ApiBlog[] }) {
  const index = posts.findIndex((post) => post.slug === current.slug)
  // The supplied API list is newest first, so the next array item is older.
  const previous = index >= 0 ? posts[index + 1] : undefined
  const next = index > 0 ? posts[index - 1] : undefined
  if (!previous && !next) return null

  return (
    <nav className={styles.navigation} aria-label="More articles">
      {previous ? <ArticleNavCard post={previous} direction="previous" /> : <div className={styles.emptyCard} />}
      {next ? <ArticleNavCard post={next} direction="next" /> : <div className={styles.emptyCard} />}
    </nav>
  )
}

function ArticleNavCard({ post, direction }: { post: ApiBlog; direction: 'previous' | 'next' }) {
  const label = direction === 'previous' ? 'Previous Post' : 'Next Post'
  return (
    <a className={`${styles.navCard} ${direction === 'previous' ? styles.previous : styles.next}`} href={sitePath(`/blog/${post.slug}/`)}>
      {post.image && <img src={post.image} alt="" loading="lazy" />}
      <span className={styles.scrim} />
      <span className={styles.navText}>
        <span className={styles.navLabel}>{label}</span>
        <strong>{post.title}</strong>
      </span>
    </a>
  )
}
