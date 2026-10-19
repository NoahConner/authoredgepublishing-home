// Content for the Services page ("Our Service" tabs and "How It Works" steps).

import type { Service } from './home'
import authorWebsiteImg from '../assets/images/service-author-website.webp'
import editingImg from '../assets/images/service-editing.webp'
import formattingImg from '../assets/images/service-formatting.webp'
import coverDesignImg from '../assets/images/service-cover-design.webp'
import publishingImg from '../assets/images/service-publishing.webp'
import marketingImg from '../assets/images/service-marketing.webp'

export const moreServices: Service[] = [
  {
    id: 'author-website',
    tab: 'Author Brand Website',
    title: 'Build an Author Brand That Truly Connects With Your Readers',
    body: 'Create a powerful Author Brand Website that reflects your voice and showcases your work. A well-designed platform helps you connect with readers, build trust, and grow your presence while keeping everything about your author journey in one place.',
    points: ['Build Identity', 'Connect Readers', 'Share Story', 'Grow Presence'],
    cta: 'Request Quote',
    image: { src: authorWebsiteImg, width: 768, height: 431 },
    imageAlt: 'Bookshelf representing an author brand website',
  },
  {
    id: 'audiobook',
    tab: 'Audiobook Publishing',
    title: 'Let Your Story Be Heard, Not Just Read',
    body: 'With audiobook publishing, your book becomes something people can listen to anytime, anywhere. We help you turn your written work into natural, engaging audio that feels real and easy to follow, so your story connects with listeners in a more personal way.',
    points: ['Real Voice', 'Easy Listening', 'Wider Reach', 'Better Connection'],
    cta: 'Request Quote',
    image: { src: editingImg, width: 768, height: 432 },
    imageAlt: 'Audiobook publishing services',
  },
  {
    id: 'global-distribution',
    tab: 'Global Distribution',
    title: 'Get Your Book Into Readers’ Hands Around the World',
    body: 'With Global Distribution, your book doesn’t stay limited to one place. We help you reach readers across different countries and platforms, making sure your work is available where your audience already is, without making the process complicated or overwhelming for you.',
    points: ['Go Worldwide', 'Reach More', 'Stay Visible', 'Grow Audience'],
    cta: 'Request Quote',
    image: { src: formattingImg, width: 768, height: 432 },
    imageAlt: 'Global book distribution',
  },
  {
    id: 'traditional-publishing',
    tab: 'Traditional publishing support',
    title: 'Get Real Guidance Through Every Step of Traditional Publishing',
    body: 'With traditional publishing support, you don’t have to figure everything out alone. We help you understand the process, prepare your manuscript, and guide you through each stage so your book meets professional standards and reaches the right publishing opportunities with confidence.',
    points: ['Step Guidance', 'Manuscript Help', 'Expert Support', 'Smooth Process'],
    cta: 'Request Quote',
    image: { src: coverDesignImg, width: 768, height: 432 },
    imageAlt: 'Traditional publishing support',
  },
  {
    id: 'video-trailer',
    tab: 'Video book trailer',
    title: 'Bring Your Book to Life Through a Visual Story',
    body: 'A video book trailer helps you showcase your book in a simple, engaging way that grabs attention instantly. It gives readers a visual feel of your story, builds curiosity, and makes your book stand out on online platforms and social media.',
    points: ['Visual Story', 'Grab Attention', 'Build Interest', 'Boost Visibility'],
    cta: 'Request Quote',
    image: { src: publishingImg, width: 768, height: 512 },
    imageAlt: 'Video book trailer production',
  },
  {
    id: 'printing',
    tab: 'Book Printing And Production',
    title: 'Give Your Book a Real, Professional Printed Identity',
    body: 'With book printing and production, your manuscript is transformed into a high-quality physical book that feels professional and ready for readers. We focus on clean design, sharp printing, and careful production so your work looks polished, presentable, and ready for global distribution.',
    points: ['Quality Print', 'Clean Design', 'Finished Product', 'Professional Look'],
    cta: 'Request Quote',
    image: { src: marketingImg, width: 768, height: 432 },
    imageAlt: 'Book printing and production',
  },
  {
    id: 'translation',
    tab: 'Bilingual Translation',
    title: 'Make Your Book Speak to Readers in More Than One Language',
    body: 'With bilingual translation, your story reaches readers in different languages without losing its meaning or emotion. We carefully adapt your content so it feels natural, clear, and authentic for every audience, helping you connect with more readers around the world in a simple and effective way.',
    points: ['Clear Meaning', 'Global Readers', 'Natural Flow', 'Cultural Fit'],
    cta: 'Request Quote',
    image: { src: marketingImg, width: 768, height: 432 },
    imageAlt: 'Bilingual book translation',
  },
]

export const steps = [
  {
    number: '01',
    title: 'Consultation',
    body: 'We begin with a personalised discussion to understand your vision, goals, and target audience for a tailored publishing plan.',
  },
  {
    number: '02',
    title: 'Manuscript Review',
    body: 'Our team evaluates your manuscript carefully, identifying improvements to ensure clarity, structure, and overall impact.',
  },
  {
    number: '03',
    title: 'Editing & Proofreading',
    body: 'We enhance your content with precise content writing for books and professional editing, ensuring a polished final product.',
  },
  {
    number: '04',
    title: 'Cover Design & Formatting',
    body: 'We craft visually stunning covers and professionally format your manuscript for print and digital distribution.',
  },
  {
    number: '05',
    title: 'Publishing',
    body: 'We manage the publishing process, helping you publish your book online efficiently and confidently through trusted channels.',
  },
  {
    number: '06',
    title: 'Marketing & Promotion',
    body: 'Our marketing team applies book marketing services, launch strategies, and digital promotion to maximise visibility and audience reach.',
  },
]
