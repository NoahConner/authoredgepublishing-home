// Per-page SEO. The prerender script writes these into each page's <head>.
// Keep titles ≤ 60 characters and descriptions ≤ 160 characters.

export type PageSeo = {
  title: string
  description: string
  keywords: string
  /** Title used for social share cards (can be longer than the <title>). */
  ogTitle?: string
}

import { pageMeta } from './pageMeta'

const seoDetails = {
  home: {
    title: 'Self Publishing & Book Publishing Services UK | Author Edge',
    ogTitle: 'Self Publishing & Book Publishing Services UK | Author Edge Publishing',
    description:
      'UK self publishing company for authors: ghostwriting, editing, cover design, formatting, Amazon KDP publishing & book marketing. Keep 100% rights & royalties.',
    keywords:
      'self publishing services UK, book publishing company UK, self publishing company, book publishing services, publish a book UK, ghostwriting services UK, book editing services, proofreading services, book cover design, book formatting services, Amazon KDP publishing, ebook publishing, book marketing services, Author Edge Publishing',
  },
  about: {
    title: 'About Us | UK Book Publishing Company | Author Edge',
    ogTitle: 'About Author Edge Publishing | UK Book Publishing Company',
    description:
      'Meet Author Edge Publishing, a UK book publishing company with 4+ years helping authors write, publish and market their books with confidence.',
    keywords:
      'about Author Edge Publishing, UK book publishing company, book publishing services UK, self publishing company UK, professional book writers, ghostwriting services, custom book writing services, ebook publishing services, book marketing services, book writing company',
  },
  services: {
    title: 'Book Writing & Publishing Services UK | Author Edge',
    ogTitle: 'Book Writing & Publishing Services UK | Author Edge Publishing',
    description:
      'Ghostwriting, editing, formatting, cover design, audiobooks, global distribution & book marketing. Full-service book publishing for UK authors.',
    keywords:
      'book publishing services UK, book writing services, ghostwriting services, book editing services, book formatting services, book cover design services, audiobook publishing, global book distribution, book marketing services, author website design, book trailer, book printing services, book translation services',
  },
  portfolio: {
    title: 'Portfolio | Books We’ve Published | Author Edge Publishing',
    ogTitle: 'Book Portfolio | Books We’ve Published | Author Edge Publishing',
    description:
      'Browse books published with Author Edge Publishing: autobiographies, children’s books, memoirs, self-help and Christian titles by authors worldwide.',
    keywords:
      'Author Edge Publishing portfolio, published books, self published books UK, book cover design portfolio, autobiography publishing, children’s book publishing, memoir publishing, self help book publishing, Christian book publishing, book publishing examples',
  },
  contact: {
    title: 'Contact Us | Author Edge Publishing | London, UK',
    ogTitle: 'Contact Author Edge Publishing | Book Publishing Help, London UK',
    description:
      'Contact Author Edge Publishing in London for book publishing, ghostwriting & marketing support. Call +44 7490918389 or request your free consultation today.',
    keywords:
      'contact Author Edge Publishing, book publishing company London, publishing consultation UK, free book publishing consultation, ghostwriting quote, book publishing quote UK, self publishing help UK',
  },
  blog: {
    title: 'Blog | Book Writing & Publishing Tips | Author Edge',
    ogTitle: 'Author Edge Publishing Blog | Book Writing, Editing & Publishing Tips',
    description:
      'Expert guides on self publishing, book editing, e-book publishing and book marketing from the Author Edge Publishing team. Practical tips for UK authors.',
    keywords:
      'self publishing blog, book publishing tips, book editing tips, e-book editing, book marketing strategies, how to publish a book UK, manuscript preparation, self publishing guide, Author Edge Publishing blog',
  },
} satisfies Record<string, PageSeo>

// Keep titles and descriptions editable together in pageMeta.ts; this file
// retains social titles and keywords used by structured data and SEO tags.
export const seo = {
  home: { ...seoDetails.home, ...pageMeta.home },
  about: { ...seoDetails.about, ...pageMeta.about },
  services: { ...seoDetails.services, ...pageMeta.services },
  portfolio: { ...seoDetails.portfolio, ...pageMeta.portfolio },
  contact: { ...seoDetails.contact, ...pageMeta.contact },
  blog: { ...seoDetails.blog, ...pageMeta.blog },
} satisfies Record<string, PageSeo>
