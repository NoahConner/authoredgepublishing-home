import { useActionState, useEffect, useId, useState } from 'react'
import { useFormStatus } from 'react-dom'
import { submitLead, type FormField, type FormState } from '../../lib/submitLead'
import styles from './ConsultationForm.module.css'

type Props = {
  title?: string
  /** `dark` is used in the hero, `gold` in the process section, and `footer` for the compact form. */
  variant?: 'dark' | 'gold' | 'footer'
  source: string
}

const services = [
  'Book writing',
  'Book editing',
  'Book formatting',
  'Cover design',
  'Book publishing',
  'Book marketing',
  'Author website',
  'Audiobook publishing',
  'Other',
]

function SubmitButton({ label }: { label: string }) {
  const { pending } = useFormStatus()
  return <button type="submit" className={styles.submit} disabled={pending}>{pending ? 'Sending…' : label}</button>
}

export function ConsultationForm({ title, variant = 'dark' }: Props) {
  const id = useId()
  const [state, formAction] = useActionState<FormState, FormData>(submitLead, { status: 'idle' })
  const [toastVisible, setToastVisible] = useState(false)
  const [edited, setEdited] = useState<Partial<Record<FormField, boolean>>>({})
  const fieldId = (name: FormField) => `${id}-${name}`
  const error = (name: FormField) => edited[name] ? undefined : state.errors?.[name]
  const markEdited = (name: FormField) => () => setEdited((current) => ({ ...current, [name]: true }))
  const compact = variant === 'footer'

  useEffect(() => {
    if (state.status !== 'success') return
    setToastVisible(true)
    const timeout = window.setTimeout(() => setToastVisible(false), 5000)
    return () => window.clearTimeout(timeout)
  }, [state])

  const fieldError = (name: FormField) => error(name) && (
    <p id={`${fieldId(name)}-error`} className={styles.fieldError}>{error(name)}</p>
  )

  return (
    <>
      <form action={formAction} noValidate onSubmit={() => setEdited({})} className={`${styles.form} ${styles[variant]}`} aria-label={title ?? 'Contact form'}>
        {title && <p className={styles.title}>{title}</p>}

        <div className={compact ? styles.stack : styles.grid}>
          <div>
            <label htmlFor={fieldId('full_name')} className="visually-hidden">Full name</label>
            <input
              id={fieldId('full_name')} name="full_name" type="text" placeholder="Full Name" autoComplete="name" required
              onChange={markEdited('full_name')}
              aria-invalid={!!error('full_name')} aria-describedby={error('full_name') ? `${fieldId('full_name')}-error` : undefined}
            />
            {fieldError('full_name')}
          </div>
          <div>
            <label htmlFor={fieldId('email')} className="visually-hidden">Email address</label>
            <input
              id={fieldId('email')} name="email" type="email" placeholder="Email Address" autoComplete="email" required
              onChange={markEdited('email')}
              aria-invalid={!!error('email')} aria-describedby={error('email') ? `${fieldId('email')}-error` : undefined}
            />
            {fieldError('email')}
          </div>

          {!compact && (
            <>
              <div>
                <label htmlFor={fieldId('phone')} className="visually-hidden">Phone number</label>
                <input
                  id={fieldId('phone')} name="phone" type="tel" placeholder="Phone Number" autoComplete="tel"
                  onChange={markEdited('phone')}
                  aria-invalid={!!error('phone')} aria-describedby={error('phone') ? `${fieldId('phone')}-error` : undefined}
                />
                {fieldError('phone')}
              </div>
              <div>
                <label htmlFor={fieldId('service')} className="visually-hidden">Which service are you interested in?</label>
                <select
                  id={fieldId('service')} name="service" defaultValue=""
                  onChange={markEdited('service')}
                  aria-invalid={!!error('service')} aria-describedby={error('service') ? `${fieldId('service')}-error` : undefined}
                >
                  <option value="">Which service are you interested in?</option>
                  {services.map((service) => <option key={service} value={service}>{service}</option>)}
                </select>
                {fieldError('service')}
              </div>
            </>
          )}

          <div className={styles.full}>
            <label htmlFor={fieldId('message')} className="visually-hidden">Message</label>
            <textarea
              id={fieldId('message')} name="message" placeholder={compact ? 'Your Message' : 'Message'} required
              onChange={markEdited('message')}
              aria-invalid={!!error('message')} aria-describedby={error('message') ? `${fieldId('message')}-error` : undefined}
            />
            {fieldError('message')}
          </div>
        </div>

        <SubmitButton label={compact ? 'Submit Now' : 'Submit'} />
        {state.status === 'error' && state.message && !Object.keys(state.errors ?? {}).length && (
          <p role="alert" className={styles.error}>{state.message}</p>
        )}
      </form>

      {toastVisible && state.status === 'success' && (
        <div className={styles.toast} role="status" aria-live="polite">
          <span className={styles.toastIcon} aria-hidden="true">OK</span>
          {state.message}
          <button type="button" className={styles.toastClose} onClick={() => setToastVisible(false)} aria-label="Dismiss notification">x</button>
        </div>
      )}
    </>
  )
}
