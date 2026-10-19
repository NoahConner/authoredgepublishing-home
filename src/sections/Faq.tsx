import { faqs } from '../data/home'
import { Accordion } from '../components/ui/Accordion'
import bookstoreImg from '../assets/images/faq-bookstore.webp'
import styles from './Faq.module.css'

export function Faq() {
  return (
    <section id="faq" className={styles.faq} aria-labelledby="faq-title">
      <div className={`container ${styles.grid}`}>
        <div>
          <h2 id="faq-title" className={`section-title ${styles.title}`} data-animate="fade">
            FAQs
          </h2>
          <Accordion items={faqs.map((f) => ({ title: f.q, body: f.a }))} />
        </div>
        <img
          src={bookstoreImg}
          alt="Bookstore interior with shelves of published books"
          width={768}
          height={432}
          loading="lazy"
          className={styles.image}
        />
      </div>
    </section>
  )
}
