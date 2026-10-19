import { site } from '../data/site'
import { ConsultationForm } from '../components/ui/ConsultationForm'
import styles from './ContactSection.module.css'

const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(site.addresses[0])}&output=embed`

/** Contact page: intro copy + Google Map on the left, consultation form on the right. */
export function ContactSection() {
  return (
    <section className={styles.section} aria-labelledby="get-in-touch-title">
      <div className={`container ${styles.grid}`}>
        <div className={`rich-text ${styles.copy}`}>
          <h2 id="get-in-touch-title" className={`section-title ${styles.title}`}>
            Feel Free To Get In Touch
          </h2>
          <p>
            Whether you’re exploring book publishing services, need expert ghostwriting, or want guidance on E-book
            creation and marketing, our team is ready to help bring your vision to life with professionalism and care.
          </p>
          <p>
            Get in touch with our friendly team today to discuss your project, ask questions, or request a personalized
            quote. We value clear communication and timely support, ensuring your experience with Author Edge Publishing
            is smooth, collaborative, and focused on your success.
          </p>
          <iframe
            src={mapSrc}
            title={`Map of our London office: ${site.addresses[0]}`}
            width={600}
            height={450}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className={styles.map}
          />
        </div>

        <ConsultationForm title="Sign Up & Get Free Expert Consultation" variant="gold" source="contact-page" />
      </div>
    </section>
  )
}
