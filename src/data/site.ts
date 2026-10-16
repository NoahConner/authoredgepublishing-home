// Site-wide constants shared by Header, Footer and SEO metadata.

export const site = {
  name: 'Author Edge Publishing',
  legalName: 'Author Edge Publishing Ltd',
  url: 'https://authoredgepublishing.co.uk',
  companyNumber: '17413238',
  phone: {
    display: '+44 7490918389',
    href: 'tel:+447490918389',
  },
  email: 'Info@authoredgepublishing.co.uk',
  whatsapp: 'https://api.whatsapp.com/send/?phone=447441915625',
  addresses: [
    '128 City Road, London, England, EC1V 2NJ, United Kingdom',
    '140 Broadway, New York',
  ],
  trustpilot: 'https://www.trustpilot.com/review/authoredgepublishing.co.uk',
} as const

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about/' },
  { label: 'Services', href: '/services/' },
  { label: 'Portfolio', href: '/portfolio/' },
  { label: 'Blog', href: '/blog/' },
  { label: 'Contact', href: '/contact/' },
] as const

export const socialLinks = [
  { label: 'Facebook', href: 'https://www.facebook.com/authoredgepublishing', icon: 'facebook' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/aurthor-edge-publishing', icon: 'linkedin' },
  { label: 'Instagram', href: 'https://www.instagram.com/authoredgepublishing/', icon: 'instagram' },
] as const
