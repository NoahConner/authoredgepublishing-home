// Portfolio gallery: book covers grouped by category (one tab per category).
// Titles are shortened exactly as on the live site.

// All cover images in src/assets/images/portfolio/, keyed by file name (e.g. "44")
const covers = import.meta.glob<string>('../assets/images/portfolio/*.webp', { eager: true, import: 'default' })
const cover = (file: string) => covers[`../assets/images/portfolio/${file}.webp`]

export type PortfolioBook = { title: string; author: string; image: string }
export type PortfolioCategory = { id: string; label: string; books: PortfolioBook[] }

const book = (file: string, title: string, author: string): PortfolioBook => ({ title, author, image: cover(file) })

export const portfolio: PortfolioCategory[] = [
  {
    id: 'autobiography',
    label: 'Auto Biography',
    books: [
      book('44', 'THE LIFE AND TIMES OF LAWRENCE..', 'Lawrence Clifford Imes'),
      book('45', 'Journey through the “C”: A Short Cancer..', 'Kerry Postale'),
      book('46', 'Set the Boy Free: The Autobiography', 'Johnny Marr'),
      book('new-09', 'THE LIFE AND TIMES OF LAWRENCE..', 'Jerome K. Jerome'),
      book('new-10', 'DESTINY : The Autobiography', 'Perry PRESHUS Elliott'),
      book('new-12', 'Autobiography of St. Gemma', 'Gemma Galgani'),
    ],
  },
  {
    id: 'children',
    label: 'Children Books',
    books: [
      book('47', 'The Streets of Gold: A Faith…', 'Ola Grace Okinbaloye'),
      book('48', 'I’m Learning to Be Kind: A Social…', 'Sara Hansley'),
      book('49', 'The Land Where Money Was…', 'Barbara Roman'),
      book('new-01', 'I’m Sorry I had to Leave You', 'Emma Murphy'),
      book('new-02', 'The Colour of Me: A Heartwarming', 'Sacred and Seen Prints'),
      book('new-03', 'The Boy Who Drummed', 'Fizza Masood'),
    ],
  },
  {
    id: 'memoirs',
    label: 'Memoirs',
    books: [
      book('50', 'Walking With Grace: A Memoir In…', 'Amanda Wilkinson'),
      book('52', 'Mop and Bucket: A Memoir of Love…', 'Melissa St. Martin'),
      book('53', 'Between the Waves and the Wall..', 'John Alan Caren'),
      book('new-05', 'Memoirs of a Hairdresser', 'Elise Anderson'),
      book('new-06', 'The Intervention: MEMOIRS', 'Burns Sibanda'),
      book('new-07', 'Memoir Of The Life In..', 'Adriana Allie'),
    ],
  },
  {
    id: 'self-help',
    label: 'Self Help',
    books: [
      book('56', 'GET YOUR SHIT DONE: THE…', 'aryan vishwakarma'),
      book('57', 'The Only Self Help Book You’ll…', 'Bryan R Thomason'),
      book('58', 'Two Questions a Day: A…', 'Mindful Path'),
      book('new-14', 'Self-Love for Men: How to..', 'Bennett Clayton'),
      book('new-15', 'Simply Anxious – Notes on…', 'Lisa Towers'),
      book('new-16', 'BEST SELF: Self help book…', 'Jennifer Clarke'),
    ],
  },
  {
    id: 'christian',
    label: 'Christian book',
    books: [
      book('59', 'Christian Devotional 2026…', 'Rev. Charles Mason'),
      book('55', 'Draw Near to God 2026: A…', 'David M. Mingus'),
      book('60', 'I’m God’s Girl – A Faith-Filled…', 'Anna Havenly'),
    ],
  },
]
