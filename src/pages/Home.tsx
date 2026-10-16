import { Layout } from '../components/layout/Layout'
import { Hero } from '../sections/Hero'
import { Platforms } from '../sections/Platforms'
import { Services } from '../sections/Services'
import { Genres } from '../sections/Genres'
import { CtaBanner } from '../sections/CtaBanner'
import { Process } from '../sections/Process'
import { Pricing } from '../sections/Pricing'
import { WhyChooseUs } from '../sections/WhyChooseUs'
import { Faq } from '../sections/Faq'
import { Testimonials } from '../sections/Testimonials'
import { faqs, services } from '../data/home'
import { site, socialLinks } from '../data/site'
import logo from '../assets/images/logo.png'

// Structured data for Google rich results, built from the same data the page renders.
const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${site.url}/#organization`,
      name: site.name,
      legalName: site.legalName,
      url: `${site.url}/`,
      logo: new URL(logo, site.url).href,
      description:
        'UK self publishing company offering ghostwriting, editing, cover design, formatting, publishing and book marketing services. Authors keep 100% ownership and royalties.',
      email: site.email,
      telephone: site.phone.display,
      areaServed: ['GB', 'US'],
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: site.phone.display,
        email: site.email,
        contactType: 'customer service',
        areaServed: 'GB',
        availableLanguage: 'English',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Book Publishing Services',
        itemListElement: services.map((s) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: s.tab, description: s.body },
        })),
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: '128 City Road',
        addressLocality: 'London',
        postalCode: 'EC1V 2NJ',
        addressCountry: 'GB',
      },
      sameAs: [...socialLinks.map((s) => s.href), site.trustpilot],
    },
    {
      '@type': 'WebSite',
      '@id': `${site.url}/#website`,
      url: `${site.url}/`,
      name: site.name,
      publisher: { '@id': `${site.url}/#organization` },
      inLanguage: 'en-GB',
    },
    {
      '@type': 'FAQPage',
      '@id': `${site.url}/#faq`,
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ],
}

export function Home() {
  return (
    <Layout currentPath="/">
      <Hero />
      <Platforms />
      <Services />
      <Genres />
      <CtaBanner
        title="Start Publishing Your Book"
        text="Take the first step today and discover how to publish a book with expert guidance."
        cta="Request a Callback"
      />
      <Process />
      <Pricing />
      <WhyChooseUs />
      <CtaBanner
        title="Publish Your Story Today"
        text="Don’t wait — begin your journey with our self publishing company and watch your book come to life."
        cta="Get Publishing Guidance"
      />
      <Faq />
      <Testimonials />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </Layout>
  )
}
