// Homepage content. Keeping copy here (instead of inside JSX) makes it easy to
// edit text without touching layout, and lets the FAQ feed the JSON-LD schema.

import lulu from '../assets/images/platform-1.webp'
import appleBooks from '../assets/images/platform-2.webp'
import amazonKindle from '../assets/images/platform-3.webp'
import readersPublishing from '../assets/images/platform-4.webp'
import atlanticBooks from '../assets/images/platform-5.webp'
import kobo from '../assets/images/platform-6.webp'
import waterstones from '../assets/images/platform-7.webp'
import ingramSpark from '../assets/images/platform-8.webp'

import ghostwritingImg from '../assets/images/service-ghostwriting.webp'
import editingImg from '../assets/images/service-editing.webp'
import formattingImg from '../assets/images/service-formatting.webp'
import coverDesignImg from '../assets/images/service-cover-design.webp'
import publishingImg from '../assets/images/service-publishing.webp'
import marketingImg from '../assets/images/service-marketing.webp'

import genreHealth from '../assets/images/genre-health.webp'
import genreHorror from '../assets/images/genre-horror.webp'
import genreRomance from '../assets/images/genre-romance.webp'
import genreSciFi from '../assets/images/genre-science-fiction.webp'
import genreTravel from '../assets/images/genre-travel.webp'
import genreAction from '../assets/images/genre-action-adventure.webp'
import genreComics from '../assets/images/genre-comics.webp'
import genreDrama from '../assets/images/genre-drama.webp'

export type Img = { src: string; width: number; height: number }

export const platforms: (Img & { name: string })[] = [
  { name: 'Atlantic Books', src: atlanticBooks, width: 180, height: 109 },
  { name: 'Kobo Writing Life', src: kobo, width: 187, height: 80 },
  { name: 'Waterstones', src: waterstones, width: 300, height: 167 },
  { name: 'IngramSpark', src: ingramSpark, width: 300, height: 109 },
  { name: 'Lulu', src: lulu, width: 136, height: 83 },
  { name: 'Apple Books', src: appleBooks, width: 145, height: 54 },
  { name: 'Amazon Kindle', src: amazonKindle, width: 180, height: 40 },
  { name: 'Readers Publishing Group', src: readersPublishing, width: 196, height: 119 },
]

export type Service = {
  id: string
  tab: string
  title: string
  body: string
  points: string[]
  cta: string
  image: Img
  imageAlt: string
}

export const services: Service[] = [
  {
    id: 'ghostwriting',
    tab: 'Ghostwriting Service',
    title: 'Your Words, Our Expertise: Tailored Ghostwriting for Your Book',
    body: 'We will work with you to make and write a book that perfectly reflects your ideas and style. You will work directly with experts in book publishing and the best writers, who will make sure that your dream book is of the highest quality.',
    points: ['Publishing Guidance', 'Book Formatting', 'Revisions and Feedback', 'Writing and Editing'],
    cta: 'Request a Callback',
    image: { src: ghostwritingImg, width: 768, height: 439 },
    imageAlt: 'Ghostwriter writing a manuscript with a fountain pen',
  },
  {
    id: 'editing',
    tab: 'Editing',
    title: 'Experienced Editors to Refine and Polish Your Book',
    body: 'At Author Edge Publishing, we offer the best book editing services that help authors refine and polish their manuscripts. Our team of experienced editors provides personalised feedback and guidance to ensure that every book is of the highest quality.',
    points: ['Line by Line Editing', 'Developmental Editing', 'Proofreading', 'Line Editing'],
    cta: 'Request Quote',
    image: { src: editingImg, width: 768, height: 432 },
    imageAlt: 'Editor reviewing a book manuscript on a laptop',
  },
  {
    id: 'formatting',
    tab: 'Formatting',
    title: 'Your Words, Our Precision: Professional Book Formatting Made Simple',
    body: 'We turn your manuscript into a professionally formatted book that matches industry standards and reflects your unique style. You’ll work closely with experienced formatting specialists who ensure your book is clean, consistent, and ready for publishing across all platforms.',
    points: ['Publishing-Ready Layout', 'Professional Book Formatting', 'Revisions & Final Adjustments', 'Expert Design Consistency'],
    cta: 'Speak to a Publishing Consultant',
    image: { src: formattingImg, width: 768, height: 432 },
    imageAlt: 'Professionally formatted book interior pages',
  },
  {
    id: 'cover-design',
    tab: 'Cover Design',
    title: 'Stand Out on the Shelf With Designs for Your Book Covers',
    body: 'Don’t be careless with the cover of your book. A professionally designed book cover instantly conveys the essence and message of your book. Our expert designers have a decade of experience designing book covers of various genres.',
    points: ['Typography Book Covers', 'Graphic Designing', 'Typography', 'Cover Formatting'],
    cta: 'Get Publishing Guidance',
    image: { src: coverDesignImg, width: 768, height: 432 },
    imageAlt: 'Stack of books with professionally designed covers',
  },
  {
    id: 'publishing',
    tab: 'Publishing',
    title: 'Turn Your Dream Into Reality by Becoming a Published Author',
    body: 'With our self publishing services, your manuscript can transform into a professionally published book. We guide you every step of the way, making the process simple, accessible, and stress free.',
    points: [],
    cta: 'Request Quote',
    image: { src: publishingImg, width: 768, height: 512 },
    imageAlt: 'Library shelves filled with published books',
  },
  {
    id: 'marketing',
    tab: 'Marketing',
    title: 'Our Strategic Marketing Plans to Help Your Book Get Noticed',
    body: 'The goal of our book marketing service is to help authors succeed in the competitive world of publishing. Writing a great book is a challenging process, and getting your book noticed is also a daunting task. Our experts will create a marketing plan that expands your author platform and boosts book sales.',
    points: ['Strategic Planning', 'Targeted Audience', 'High Conversion', 'Proper Distribution'],
    cta: 'Request a Callback',
    image: { src: marketingImg, width: 768, height: 432 },
    imageAlt: 'Book marketing strategy and promotion',
  },
]

export const genres: { name: string; body: string; image: string }[] = [
  { name: 'Health', image: genreHealth, body: 'Informative guides and insights to enhance wellness, fitness, and healthy living.' },
  { name: 'Horror', image: genreHorror, body: 'Spine chilling stories crafted for readers who relish fear and suspense.' },
  { name: 'Romance', image: genreRomance, body: 'Heartfelt tales of love and passion, designed to touch hearts and stir emotions.' },
  { name: 'Science Fiction', image: genreSciFi, body: 'Futuristic adventures exploring new worlds, technology, and boundless imagination.' },
  { name: 'Travel', image: genreTravel, body: 'Immersive journeys and travel experiences brought to life for wanderlust filled readers.' },
  { name: 'Action & Adventure', image: genreAction, body: 'Thrilling stories packed with excitement, danger, and unforgettable adventures.' },
  { name: 'Comics', image: genreComics, body: 'Engaging visual storytelling that combines illustration and narrative for readers of all ages.' },
  { name: 'Drama', image: genreDrama, body: 'Emotional, thought provoking narratives exploring human relationships and life challenges.' },
]

export const processSteps = [
  'Free Consultation & Custom Plan',
  'Onboarding & Project Kickoff',
  'Editing (Developmental → Line → Proof)',
  'Cover Design & Interior Design',
  'Formatting & File Preparation',
  'Finalization & Quality Assurance',
  'Publishing & Distribution Setup',
  'Launch Support & Reporting',
  'Post-Launch Growth (Optional)',
]

export type Plan = { name: string; tagline?: string; features: string[]; cta: string; featured?: boolean }

export const plans: Plan[] = [
  {
    name: 'Economical',
    tagline: 'Author Package',
    cta: 'Discuss This Plan',
    features: [
      'Publishing on Amazon KDP',
      'Professional Proofreading',
      'Formatting & Typesetting',
      'E-Book & Paperback',
      'Free 3D Book Cover Design',
      'ISBN & Barcode',
      'Print on Demand Setup',
      'Dedicated Project Manager',
      '100% Ownership Rights',
    ],
  },
  {
    name: 'Author Choice',
    tagline: 'Bestseller',
    cta: 'Speak to a Consultant',
    featured: true,
    features: [
      'Publishing on Multiple Platforms',
      'Professional Proofreading & Editing',
      'Formatting & Typesetting',
      'E-book, Paperback, & Hardcover',
      'Author Central Account Setup',
      'Dedicated Chief Editor',
      'Free 3D Book Cover Design',
      'Unlimited Revisions',
      'ISBN & Barcode',
      'Print on Demand Setup',
      'Dedicated Project Manager',
      '100% Ownership Rights',
    ],
  },
  {
    name: 'Author Best Seller',
    cta: 'Get Started',
    features: [
      'Publishing on 75+ Platforms',
      'Professional Proofreading & Editing',
      'Formatting & Typesetting',
      'E-book, Paperback, & Hardcover',
      'Author Central Account Setup',
      'Press Releases',
      'Social Media Page Creation',
      'Free 3D Book Cover Design',
      'Unlimited Revisions',
      'ISBN & Barcode',
      'Complimentary Author Copies',
      'Dedicated Project Manager',
      '100% Ownership Rights',
      '100% Royalty Rights',
    ],
  },
]

export const reasons = [
  {
    title: '100% Ownership',
    body: 'Retain full rights to your work. Our services guarantee complete control over content, royalties, and distribution. Your story remains entirely yours.',
  },
  {
    title: 'Affordability',
    body: 'We offer cost effective solutions without compromising on quality, making self publishing accessible to all.',
  },
  {
    title: 'Fast Delivery',
    body: 'Enjoy quick turnaround times with professional support, from manuscript review to eBook publishing.',
  },
  {
    title: 'Customer Satisfaction',
    body: 'Our authors always come first. We prioritise clear communication, personalised support, and exceptional results, ensuring a smooth publishing journey.',
  },
]

export const faqs = [
  {
    q: 'What does Author Edge Publishing help with?',
    a: 'Author Edge Publishing supports authors across key stages of the publishing journey, including ghostwriting support, editing, formatting, cover design, publishing setup, distribution guidance, and related author services.',
  },
  {
    q: 'Do all packages include ownership and royalty control?',
    a: 'Yes. All Author Edge Publishing packages are designed to let you retain full ownership of your book, your publishing rights, and your royalty control. We provide the professional support needed to prepare, publish, distribute, and position your book, but the rights to your work remain with you.',
  },
  {
    q: 'How long does the publishing process take?',
    a: 'Most publishing projects take 2 to 6 weeks, depending on the manuscript, editing needs, cover design, formatting, and publishing setup. Larger projects involving illustrations, translation, audiobooks, or wider distribution may take longer.',
  },
  {
    q: 'Where can my book be published?',
    a: 'Your book can be published across major print and digital platforms, including Amazon KDP, paperback, hardcover and ebook formats, with options for wider global distribution through selected retail and library channels depending on your publishing package.',
  },
  {
    q: 'What is the difference between self publishing support and traditional publishing support?',
    a: 'Self publishing support focuses on preparing and publishing your book professionally through platforms such as Amazon and wider distribution channels. Traditional publishing support focuses on strengthening your query letters, proposals, synopsis, and submission positioning before you approach agents or publishers.',
  },
  {
    q: 'Can you help me prepare for literary agents or publishers?',
    a: 'Yes. Traditional publishing support can include query letter development, synopsis and proposal support, manuscript positioning, and submission strategy guidance.',
  },
]

export const testimonials = [
  {
    quote: 'Author Edge Publishing made the process of publishing my book simple and stress free. I’m thrilled with my first published book!',
    name: 'Emily J',
    fullName: 'Emily Johnson',
  },
  {
    quote: 'Excellent book publishing services! The team guided me step by step through self publishing successfully. Highly recommended.',
    name: 'Michael S',
    fullName: 'Michael Smith',
  },
  {
    quote: 'Fantastic support and advice. Thanks to Author Edge’s self publishing services, I finally saw my novel professionally published.',
    name: 'Olivia B',
    fullName: 'Olivia Brown',
  },
]
