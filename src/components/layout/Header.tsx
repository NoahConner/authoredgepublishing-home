import { useEffect, useState } from 'react'
import { navLinks, site } from '../../data/site'
import { Button } from '../ui/Button'
import { Icon } from '../ui/Icon'
import logo from '../../assets/images/logo.png'
import styles from './Header.module.css'

type Props = {
  /** Path of the current page, used to mark the active nav link. */
  currentPath?: string
}

export function Header({ currentPath = '/' }: Props) {
  const [menuOpen, setMenuOpen] = useState(false)

  // Close the mobile menu with Escape and lock page scroll while it is open.
  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMenuOpen(false)
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`${styles.header} ${menuOpen ? styles.menuOpen : ''}`}>
      <div className={`container ${styles.inner}`}>
        <a href="/" className={styles.logo} aria-label={`${site.name} — home`}>
          <img src={logo} alt={site.name} width={205} height={73} fetchPriority="high" />
        </a>

        <nav id="main-nav" aria-label="Main" className={`${styles.nav} ${menuOpen ? styles.open : ''}`}>
          <ul className={styles.links}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={link.href === currentPath ? 'page' : undefined}
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className={styles.actions}>
            <Button href={site.phone.href} className={styles.phoneBtn} animate={false}>
              {site.phone.display}
            </Button>
            <Button
              href={currentPath === '/' ? '#consultation' : '#contact'}
              variant="brown"
              animate={false}
              className={styles.headerBtn}
              onClick={closeMenu}
            >
              Get Started
            </Button>
          </div>
        </nav>

        <button
          type="button"
          className={styles.toggle}
          aria-expanded={menuOpen}
          aria-controls="main-nav"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <Icon name={menuOpen ? 'close' : 'menu'} size={26} />
        </button>
      </div>
    </header>
  )
}
