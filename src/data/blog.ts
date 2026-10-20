// Blog listing (/blog/). Post pages aren't built yet, so cards don't link anywhere;
// `slug` matches the live WordPress permalink (/post-slug/) for when they are.
// Excerpts are shortened exactly as on the live site.

// Cover images in src/assets/images/blog/, keyed by slug
const images = import.meta.glob<string>('../assets/images/blog/*.webp', { eager: true, import: 'default' })
const image = (slug: string) => images[`../assets/images/blog/${slug}.webp`]

export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  /** ISO date (YYYY-MM-DD) */
  date: string
  image: string
}

const post = (slug: string, title: string, excerpt: string, date: string): BlogPost => ({
  slug,
  title,
  excerpt,
  date,
  image: image(slug),
})

export const posts: BlogPost[] = [
  post(
    'why-authors-invest-in-professional-book-marketing-services',
    'Why Authors Invest in Professional Book Marketing Services',
    'Writing a book is a major accomplishment, but getting it in front of the right…',
    '2026-09-24',
  ),
  post(
    'why-authors-choose-professional-self-publishing-services',
    'Why Authors Choose Professional Self Publishing Services',
    'For many writers, finishing a manuscript is only the beginning of the publishing journey. Turning…',
    '2026-09-19',
  ),
  post(
    'how-e-book-editing-improves-readability-and-reader-experience',
    'How E-Book Editing Improves Readability and Reader Experience',
    'A strong idea can lose its impact when readers have to work through awkward sentences,…',
    '2026-09-11',
  ),
  post(
    'book-publishing-for-new-authors-from-manuscript-to-market',
    'Book Publishing for New Authors: From Manuscript to Market',
    'Turning a finished manuscript into a published book can feel like a major leap for…',
    '2026-09-06',
  ),
  post(
    'a-complete-guide-to-professional-book-publishing-services',
    'A Complete Guide to Professional Book Publishing Services',
    'Publishing a book is an exciting achievement, but turning a finished manuscript into a polished,…',
    '2026-08-24',
  ),
  post(
    'why-expert-book-publishing-support-matters-for-new-authors',
    'Why Expert Book Publishing Support Matters for New Authors',
    'For new authors, turning a completed manuscript into a professionally published book can feel overwhelming.…',
    '2026-08-19',
  ),
  post(
    'how-writing-and-publishing-services-bring-your-book-to-life',
    'How Writing and Publishing Services Bring Your Book to Life',
    'Bringing a book from an early idea to a finished publication takes more than putting words on a page. Authors…',
    '2026-08-11',
  ),
  post(
    'how-to-choose-the-best-book-editing-services-for-your-manuscript',
    'How to Choose the Best Book Editing Services for Your Manuscript',
    'Choosing the best book editing services can make a significant difference in how professional, polished, and engaging your manuscript becomes.…',
    '2026-08-06',
  ),
  post(
    'common-e-book-editing-mistakes-and-how-to-avoid-them',
    'Common E-Book Editing Mistakes and How to Avoid Them',
    'Creating an e-book requires more than just putting words together and uploading a digital file. A well-written manuscript needs careful…',
    '2026-07-22',
  ),
  post(
    'best-book-marketing-service-strategies-to-reach-more-readers',
    'Best Book Marketing Service Strategies to Reach More Readers',
    'Publishing a book is an exciting achievement, but getting it noticed by the right audience requires more than just great…',
    '2026-07-12',
  ),
  post(
    'how-to-prepare-your-manuscript-for-successful-book-publishing',
    'How to Prepare Your Manuscript for Successful Book Publishing',
    'Completing a manuscript is a major achievement, but getting it ready for book publishing requires more than writing the final…',
    '2026-06-24',
  ),
  post(
    'how-to-choose-the-best-self-publishing-services-for-your-book',
    'How to Choose the Best Self Publishing Services for Your Book',
    'Writing a book is a remarkable achievement, but turning your manuscript into a professionally published title requires the right self…',
    '2026-06-09',
  ),
  post(
    'expert-book-publishing-support-with-the-best-book-editing-services-for-new-authors',
    'Expert Book Publishing Support with the Best Book Editing Services for New Authors',
    'If you’re a first-time writer aiming to publish a professional-quality book, expert book publishing support can make the difference between…',
    '2026-05-26',
  ),
  post(
    'best-book-editing-services-for-authors',
    'Best Book Editing Services for Authors Who Want Professional Publishing Results',
    'In today’s competitive publishing world, every author wants their manuscript to stand out with clarity, precision, and professional polish. That…',
    '2026-05-13',
  ),
  post(
    'best-book-marketing-service-strategies-to-promote-your-published-book',
    'Best Book Marketing Service Strategies to Promote Your Published Book',
    'Publishing a book is a major milestone, but getting it into readers’ hands requires the right book marketing service strategy.…',
    '2026-04-22',
  ),
  post(
    'how-self-publishing-services-help-independent-authors-succeed-today',
    'How Self Publishing Services Help Independent Authors Succeed Today',
    'Self publishing services have completely changed the way independent writers bring their stories to life and reach global readers. In…',
    '2026-04-08',
  ),
]

/** "2026-09-24" → "September 24, 2026" (as shown on the live site) */
export const formatDate = (iso: string) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  })
