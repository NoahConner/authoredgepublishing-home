import { site } from '../../data/site'
import { Icon } from '../ui/Icon'

export function WhatsAppButton() {
  return (
    <a
      href={site.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      style={{
        position: 'fixed',
        right: 16,
        bottom: 16,
        zIndex: 90,
        display: 'grid',
        placeItems: 'center',
        width: 52,
        height: 52,
        borderRadius: '50%',
        background: '#25d366',
        color: '#fff',
        boxShadow: '0 6px 18px rgb(0 0 0 / 0.25)',
      }}
    >
      <Icon name="whatsapp" size={30} />
    </a>
  )
}
