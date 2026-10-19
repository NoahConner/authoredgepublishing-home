import { Layout } from '../components/layout/Layout'
import { PageBanner } from '../sections/PageBanner'
import { ContactSection } from '../sections/ContactSection'
import { site } from '../data/site'
import { seo } from '../data/seo'

const pageUrl = `${site.url}/contact/`

// Structured data: contact page for the organisation (phone, email, address) plus breadcrumbs.
const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ContactPage',
      '@id': `${pageUrl}#webpage`,
      url: pageUrl,
      name: seo.contact.title,
      description: seo.contact.description,
      inLanguage: 'en-GB',
      isPartOf: { '@id': `${site.url}/#website` },
      about: { '@id': `${site.url}/#organization` },
      breadcrumb: { '@id': `${pageUrl}#breadcrumb` },
      mainEntity: {
        '@type': 'Organization',
        '@id': `${site.url}/#organization`,
        name: site.name,
        telephone: site.phone.display,
        email: site.email,
        address: {
          '@type': 'PostalAddress',
          streetAddress: '128 City Road',
          addressLocality: 'London',
          postalCode: 'EC1V 2NJ',
          addressCountry: 'GB',
        },
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${pageUrl}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${site.url}/` },
        { '@type': 'ListItem', position: 2, name: 'Contact', item: pageUrl },
      ],
    },
  ],
}

export function Contact() {
  return (
    <Layout currentPath="/contact/">
      <PageBanner
        title="Contact Us"
        subtitle="At Author Edge Publishing, we’re here to support you at every stage of your publishing journey."
      />
      <ContactSection />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </Layout>
  )
}
