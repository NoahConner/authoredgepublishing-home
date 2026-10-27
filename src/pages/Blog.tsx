import { Layout } from '../components/layout/Layout'
import { PageBanner } from '../sections/PageBanner'
import { BlogGrid } from '../sections/BlogGrid'
import { site } from '../data/site'
import { seo } from '../data/seo'

const pageUrl = `${site.url}/blog/`
const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Blog',
      '@id': `${pageUrl}#blog`,
      url: pageUrl,
      name: 'Author Edge Publishing Blog',
      description: seo.blog.description,
      inLanguage: 'en-GB',
      publisher: { '@id': `${site.url}/#organization` },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${pageUrl}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${site.url}/` },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: pageUrl },
      ],
    },
  ],
}

export function Blog() {
  return (
    <Layout currentPath="/blog/">
      <PageBanner title="Blogs" />
      <BlogGrid />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </Layout>
  )
}
