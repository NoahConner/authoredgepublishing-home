import { useActionState, useId } from 'react'
import { useFormStatus } from 'react-dom'
import { submitLead, type FormState } from '../../lib/submitLead'
import styles from './ConsultationForm.module.css'

type Props = {
  title?: string
  /**
   * `dark`   – translucent black card (hero)
   * `gold`   – yellow card with pill inputs (process section)
   * `footer` – compact name/email/message form (footer)
   */
  variant?: 'dark' | 'gold' | 'footer'
  source: string
}

const stages = ['Idea stage', 'First draft in progress', 'Completed manuscript', 'Already published']

function SubmitButton({ label }: { label: string }) {
  const { pending } = useFormStatus()
  return (
    <button type="submit" className={styles.submit} disabled={pending}>
      {pending ? 'Sending…' : label}
    </button>
  )
}

export function ConsultationForm({ title, variant = 'dark', source }: Props) {
  const id = useId()
  const [state, formAction] = useActionState<FormState, FormData>(submitLead, { status: 'idle' })
  const field = (name: string) => `${id}-${name}`
  const compact = variant === 'footer'

  return (
    <form action={formAction} className={`${styles.form} ${styles[variant]}`} aria-label={title ?? 'Contact form'}>
      {title && <p className={styles.title}>{title}</p>}
      <input type="hidden" name="source" value={source} />

      <div className={compact ? styles.stack : styles.grid}>
        <div>
          <label htmlFor={field('name')} className="visually-hidden">Full name</label>
          <input id={field('name')} name="name" type="text" placeholder="Full Name" autoComplete="name" required />
        </div>
        <div>
          <label htmlFor={field('email')} className="visually-hidden">Email address</label>
          <input id={field('email')} name="email" type="email" placeholder="Email Address" autoComplete="email" required />
        </div>

        {!compact && (
          <>
            <div>
              <label htmlFor={field('phone')} className="visually-hidden">Phone number</label>
              <input id={field('phone')} name="phone" type="tel" placeholder="Phone Number" autoComplete="tel" required />
            </div>
            <div>
              <label htmlFor={field('stage')} className="visually-hidden">What stage is your book at?</label>
              <select id={field('stage')} name="stage" defaultValue="">
                <option value="" disabled>What stage is your book at?</option>
                {stages.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </div>
          </>
        )}

        <div className={styles.full}>
          <label htmlFor={field('message')} className="visually-hidden">Message</label>
          <textarea id={field('message')} name="message" placeholder={compact ? 'Your Message' : 'Message'} />
        </div>
      </div>

      <SubmitButton label={compact ? 'Submit Now' : 'Submit'} />

      {state.message && (
        <p role="status" className={state.status === 'success' ? styles.success : styles.error}>
          {state.message}
        </p>
      )}
    </form>
  )
}
