import { Layout } from '../components/layout/Layout'
import { PageBanner } from '../sections/PageBanner'
import { PortfolioGallery } from '../sections/PortfolioGallery'
import { CtaBanner } from '../sections/CtaBanner'
import { Testimonials } from '../sections/Testimonials'
import { portfolio } from '../data/portfolio'
import { site } from '../data/site'
import { seo } from '../data/seo'

const pageUrl = `${site.url}/portfolio/`

// Structured data: a collection page listing every book in the portfolio, plus breadcrumbs.
const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      '@id': `${pageUrl}#webpage`,
      url: pageUrl,
      name: seo.portfolio.title,
      description: seo.portfolio.description,
      inLanguage: 'en-GB',
      isPartOf: { '@id': `${site.url}/#website` },
      about: { '@id': `${site.url}/#organization` },
      breadcrumb: { '@id': `${pageUrl}#breadcrumb` },
      mainEntity: {
        '@type': 'ItemList',
        itemListElement: portfolio
          .flatMap((cat) => cat.books.map((b) => ({ ...b, genre: cat.label })))
          .map((b, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            item: {
              '@type': 'Book',
              name: b.title.replace(/[.…]+$/, ''),
              author: { '@type': 'Person', name: b.author },
              genre: b.genre,
              image: new URL(b.image, site.url).href,
              publisher: { '@id': `${site.url}/#organization` },
            },
          })),
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${pageUrl}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${site.url}/` },
        { '@type': 'ListItem', position: 2, name: 'Portfolio', item: pageUrl },
      ],
    },
  ],
}

export function Portfolio() {
  return (
    <Layout currentPath="/portfolio/">
      <PageBanner
        title="Portfolio"
        subtitle="At Author Edge Publishing, our portfolio showcases the diverse range of stories we’ve helped bring to life."
      />

      <PortfolioGallery />

      <CtaBanner
        title="Publish Your Story Today"
        text="Don’t wait—begin your journey with our self publishing company and watch your book come to life."
        cta="Request Quote"
        ctaHref="#contact"
      />

      <Testimonials fullNames padded />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </Layout>
  )
}
