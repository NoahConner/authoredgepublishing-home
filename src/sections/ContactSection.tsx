import { site } from '../data/site'
import { ConsultationForm } from '../components/ui/ConsultationForm'
import styles from './ContactSection.module.css'

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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3054.3515960562263!2d-0.08835319999999999!3d51.526668099999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761d64c8d91b11%3A0x8fd10f948b8c6ef5!2s128%20City%20Rd%2C%20London%20EC1V%202NX%2C%20UK!5e1!3m2!1sen!2snl!4v1792515830886!5m2!1sen!2snl"
            title={`Map of our London office: ${site.addresses[0]}`}
            loading="lazy"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
            className={styles.map}
          />
        </div>

        <ConsultationForm title="Sign Up & Get Free Expert Consultation" variant="gold" source="contact-page" />
      </div>
    </section>
  )
}
