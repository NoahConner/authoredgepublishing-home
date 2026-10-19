import { Layout } from '../components/layout/Layout'
import { PageBanner } from '../sections/PageBanner'
import { Platforms } from '../sections/Platforms'
import { SplitSection } from '../sections/SplitSection'
import { CardGrid, type CardItem } from '../sections/CardGrid'
import { CenteredText } from '../sections/CenteredText'
import { CtaBanner } from '../sections/CtaBanner'
import { site } from '../data/site'
import { seo } from '../data/seo'
import whoWeAreImg from '../assets/images/about-who-we-are.webp'
import standsOutImg from '../assets/images/about-stands-out.webp'
import experienceIcon from '../assets/images/icon-experience.webp'
import publisherIcon from '../assets/images/icon-publisher.webp'
import awardsIcon from '../assets/images/icon-awards.webp'

const milestones: CardItem[] = [
  {
    title: '4+ Years Of Experience',
    body: 'Over four years of providing affordable book publishing services, helping authors successfully publish your book online with confidence and measurable success.',
    icon: { src: experienceIcon, width: 67, height: 72 },
  },
  {
    title: 'Qualified Publisher',
    body: 'Our expert team specialises in professional book publishing, E-book writing services, and content writing for books, ensuring exceptional quality and industry-level standards.',
    icon: { src: publisherIcon, width: 71, height: 72 },
  },
  {
    title: 'Plenty Of Awards',
    body: 'Award-winning performance in book marketing services, book promotion services, and advanced digital publishing solutions across competitive publishing and author markets.',
    icon: { src: awardsIcon, width: 65, height: 71 },
  },
]

const pageUrl = `${site.url}/about/`

// Structured data: tells Google this is the About page of the organisation
// (defined in full on the homepage) and gives it a breadcrumb trail.
const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'AboutPage',
      '@id': `${pageUrl}#webpage`,
      url: pageUrl,
      name: seo.about.title,
      description: seo.about.description,
      inLanguage: 'en-GB',
      isPartOf: { '@id': `${site.url}/#website` },
      about: { '@id': `${site.url}/#organization` },
      breadcrumb: { '@id': `${pageUrl}#breadcrumb` },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${pageUrl}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${site.url}/` },
        { '@type': 'ListItem', position: 2, name: 'About', item: pageUrl },
      ],
    },
  ],
}

export function About() {
  return (
    <Layout currentPath="/about/">
      <PageBanner
        title="About Author Edge"
        subtitle="Helping authors turn ideas into professionally published, market-ready books."
      />
      <Platforms title="Our Publishing Partners" compact />

      <SplitSection
        id="who-we-are-title"
        title="Who We Are"
        titleStyle="script"
        image={{ src: whoWeAreImg, alt: 'Books published with Author Edge Publishing' }}
        imageSide="right"
      >
        <p>
          At Author Edge Publishing, we believe every story deserves to be told and told the right way. As a trusted
          provider of <strong>book publishing services</strong> in the United Kingdom, we help writers transform their
          ideas into compelling, high-quality books. Whether you’re exploring <strong>self publishing services</strong>{' '}
          or looking for a <strong>professional book publishing</strong> partner, our team is committed to making the
          process simple, efficient, and results-driven. We guide you step-by-step so you can confidently{' '}
          <strong>publish your book online</strong> and reach readers worldwide.
        </p>
        <p>
          Our team includes experienced <strong>professional book writers</strong>, editors, and strategists who
          specialise in <strong>custom book writing services</strong>, <strong>ghostwriting services</strong>, and{' '}
          <strong>creative writing services</strong>. We also provide complete{' '}
          <strong>E-book publishing services</strong>, including <strong>digital book publishing</strong>, formatting,
          and distribution across major platforms. Beyond publishing, we offer powerful{' '}
          <strong>book marketing services</strong> like <strong>book launch marketing</strong>,{' '}
          <strong>online book promotion</strong>, and <strong>digital marketing for authors</strong>. As a leading{' '}
          <strong>book publishing company</strong>, we focus on delivering value through quality, affordability, and
          global exposure for every author we work with.
        </p>
      </SplitSection>

      <CardGrid
        id="milestones-title"
        eyebrow="Got A Story?"
        title="Our Milestones In The Book Publishing Industry"
        intro="Delivering consistent publishing success through innovation, expertise, and author-focused solutions worldwide."
        items={milestones}
      />

      <CenteredText id="empowers-title" title="Author Edge Publishing Empowers Authors With Results">
        <p>
          At Author Edge Publishing, we don’t just publish books; we build author success stories. Our approach
          combines innovative <strong>online book publishing platform</strong> solutions with flexible{' '}
          <strong>self publishing services</strong> to give you full control over your work. Whether you need to{' '}
          <strong>hire a book writer</strong>, develop a manuscript through story writing services, or refine your idea
          with novel writing services, our team delivers tailored support at every stage.
        </p>
        <p>
          We also specialise in <strong>E-book creation services</strong>, <strong>Kindle e-book publishing</strong>,
          and <strong>E-book distribution services</strong>, making it easy to <strong>sell e-books online</strong> and
          reach a global audience. Our marketing experts use proven book sales marketing strategies, book advertising
          services, and author marketing strategies to maximise visibility and engagement. From E-book formatting
          services to E-book conversion services, every detail is handled with precision. As a provider of{' '}
          <strong>global book publishing services</strong>, we ensure your book stands out in a competitive marketplace
          and connects with the right audience.
        </p>
      </CenteredText>

      <CtaBanner
        title="Ready To Turn Your Idea Into A Published Book?"
        text="Don’t wait; start your journey with our book writing services and watch your story come to life."
        cta="Request Quote"
        ctaHref="#contact"
      />

      <SplitSection
        id="stands-out-title"
        title="How Our Book Writing Company Stands Out"
        titleStyle="display"
        image={{ src: standsOutImg, alt: 'Collection of non-fiction book covers' }}
        imageSide="left"
      >
        <p>
          Author Edge Publishing stands apart by offering a complete, author-first experience designed for real
          results. Our <strong>book writing services</strong> make it easy to <strong>hire a book writer</strong> or
          collaborate with <strong>professional e-book writers</strong> who bring your vision to life. We focus on{' '}
          <strong>high-quality e-book writing</strong> and <strong>content writing for e-books</strong>, ensuring your
          content is engaging, polished, and ready for publication.
        </p>
        <p>
          What makes us different is our combination of strategy and execution. We leverage{' '}
          <strong>online e-book platforms</strong>, advanced <strong>digital publishing solutions</strong>, and targeted{' '}
          <strong>book marketing services</strong> to position your book for success. From{' '}
          <strong>SEO e-book writing services</strong> to <strong>E-book content creation services</strong>, we focus
          on visibility, discoverability, and reader engagement. Our expertise in <strong>online book promotion</strong>{' '}
          helps you effectively <strong>promote your book online</strong> and build a strong author presence. With a
          commitment to quality, transparency, and performance, we continue to help authors succeed in today’s
          competitive publishing world.
        </p>
      </SplitSection>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </Layout>
  )
}
