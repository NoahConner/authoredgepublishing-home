import { site, socialLinks } from '../../data/site'
import { ConsultationForm } from '../ui/ConsultationForm'
import { Icon } from '../ui/Icon'
import logo from '../../assets/images/logo.png'
import trustpilot from '../../assets/images/trustpilot.webp'
import styles from './Footer.module.css'

const year = new Date().getFullYear()

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div>
          <a href="/" aria-label={`${site.name} — home`} className={styles.logo}>
            <img src={logo} alt={site.name} width={205} height={73} loading="lazy" />
          </a>

          <address className={styles.contact}>
            <a href={site.phone.href}>
              <Icon name="phone" size={13} /> {site.phone.display}
            </a>
            <a href={`mailto:${site.email}`}>
              <Icon name="mail" size={13} /> {site.email}
            </a>
            {site.addresses.map((addr) => (
              <span key={addr}>
                <Icon name="pin" size={13} /> {addr}
              </span>
            ))}
          </address>

          <ul className={styles.social} aria-label="Social media">
            {socialLinks.map((s) => (
              <li key={s.href}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                  <Icon name={s.icon} size={18} />
                </a>
              </li>
            ))}
          </ul>

          <a href={site.trustpilot} target="_blank" rel="noopener noreferrer" className={styles.trustpilot}>
            <img src={trustpilot} alt="Rated 5 stars on Trustpilot" width={147} height={70} loading="lazy" />
          </a>

          <p className={styles.note}>You keep 100% ownership of your book and 100% of your royalties.</p>
        </div>

        <div>
          <h2 className={styles.heading}>Contact Us</h2>
          <ConsultationForm variant="footer" source="footer" />
        </div>
      </div>

      <div className={styles.bottom}>
        <p className="container">
          {site.legalName} Company Registration No {site.companyNumber} | Registered in England and Wales ©{' '}
          {year} {site.legalName}. All Rights Reserved
        </p>
      </div>
    </footer>
  )
}
