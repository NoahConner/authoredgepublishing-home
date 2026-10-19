import { Layout } from '../components/layout/Layout'
import { PageBanner } from '../sections/PageBanner'
import { Services as ServiceTabs } from '../sections/Services'
import { CtaBanner } from '../sections/CtaBanner'
import { CardGrid } from '../sections/CardGrid'
import { SplitSection } from '../sections/SplitSection'
import { CenteredText } from '../sections/CenteredText'
import { Testimonials } from '../sections/Testimonials'
import { services } from '../data/home'
import { moreServices, steps } from '../data/services'
import { site } from '../data/site'
import { seo } from '../data/seo'
import degreesOfHopeImg from '../assets/images/services-degrees-of-hope.webp'

const pageUrl = `${site.url}/services/`

// Structured data: every service offered (both tab sets) plus a breadcrumb trail.
const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': `${pageUrl}#webpage`,
      url: pageUrl,
      name: seo.services.title,
      description: seo.services.description,
      inLanguage: 'en-GB',
      isPartOf: { '@id': `${site.url}/#website` },
      about: { '@id': `${site.url}/#organization` },
      breadcrumb: { '@id': `${pageUrl}#breadcrumb` },
      mainEntity: { '@id': `${pageUrl}#services` },
    },
    {
      '@type': 'ItemList',
      '@id': `${pageUrl}#services`,
      name: 'Book Writing and Publishing Services',
      itemListElement: [...services, ...moreServices].map((s, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'Service',
          name: s.tab,
          description: s.body,
          provider: { '@id': `${site.url}/#organization` },
          areaServed: 'GB',
        },
      })),
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${pageUrl}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${site.url}/` },
        { '@type': 'ListItem', position: 2, name: 'Services', item: pageUrl },
      ],
    },
  ],
}

export function Services() {
  return (
    <Layout currentPath="/services/">
      <PageBanner
        title="Services"
        subtitle="Expert publishing solutions designed to bring authors’ stories to life worldwide."
      />

      <ServiceTabs idPrefix="what-we-do" variant="light" ctaLabel="Request Quote" ctaHref="#contact" />

      <CtaBanner
        title="Bring Your Story To Life With Expert Publishing"
        text="Start your journey with Author Edge Publishing and watch your manuscript evolve into a polished, professional book."
        cta="Request Quote"
        ctaHref="#contact"
      />

      <ServiceTabs
        idPrefix="our-service"
        title="Our Service"
        intro={null}
        items={moreServices}
        variant="light"
        ctaLabel="Request Quote"
        ctaHref="#contact"
      />

      <CardGrid
        id="how-it-works-title"
        eyebrow="How IT Works"
        title="Delivering Excellence One Step At A Time"
        items={steps}
        theme="light"
      />

      <SplitSection
        id="bringing-stories-title"
        title="Bringing Stories To Life Through Expert Guidance And Innovation"
        titleStyle="script"
        image={{ src: degreesOfHopeImg, alt: 'Degrees of Hope book published with Author Edge', width: 637, height: 689 }}
        imageSide="right"
      >
        <p>
          At Author Edge Publishing, we specialise in transforming raw manuscripts into impactful, market-ready books.
          Through our combined <strong>book writing services</strong> and <strong>e-book creation services</strong>,
          we guide authors at every stage—from initial concept to published masterpiece. Our process ensures a smooth
          journey, blending creativity, precision, and strategic planning for maximum results.
        </p>
        <p>
          We also provide targeted <strong>book marketing strategies</strong>, including{' '}
          <strong>online book promotion</strong>, <strong>digital marketing for authors</strong>, and{' '}
          <strong>book advertising services</strong>, ensuring every story reaches the right audience. With
          professional <strong>book cover design</strong> and meticulous <strong>e-book editing</strong>, we help
          authors craft a compelling product that stands out in both print and digital markets. Our approach ensures
          your work is not only published but positioned for long-term success and audience engagement worldwide.
        </p>
      </SplitSection>

      <CenteredText id="crafting-title" eyebrow="Request Quote" title="Crafting Bestselling Stories For Authors">
        <p>Take the first step toward bringing your story to life today.</p>
        <p>
          Start your publishing journey with Author Edge Publishing and experience a full-service approach to{' '}
          <strong>book writing services</strong> and <strong>E-book publishing services</strong>. From{' '}
          <strong>ghostwriting services</strong> to professional <strong>content writing for books</strong>, our team
          ensures your manuscript is transformed into a polished, high-quality book ready for global distribution.
        </p>
        <p>
          We handle every detail, including <strong>book cover design</strong>, <strong>E-book formatting</strong>,
          and <strong>digital publishing solutions</strong>, allowing authors to focus on creativity while we manage
          production. Our marketing experts implement <strong>book marketing services</strong>,{' '}
          <strong>online book promotion</strong>, and launch campaigns to enhance visibility and boost sales. With
          Author Edge Publishing, you gain a reliable partner dedicated to helping you achieve professional results,
          audience reach, and long-term author success.
        </p>
      </CenteredText>

      <Testimonials fullNames padded />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </Layout>
  )
}
