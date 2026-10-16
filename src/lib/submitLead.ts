export type FormState = { status: 'idle' | 'success' | 'error'; message?: string }

const endpoint = import.meta.env.VITE_FORM_ENDPOINT as string | undefined

/**
 * Sends a lead form to the endpoint set in `VITE_FORM_ENDPOINT` (.env).
 * Any service that accepts a JSON POST works (your own API, Formspree, etc.).
 */
export async function submitLead(_prev: FormState, formData: FormData): Promise<FormState> {
  if (!endpoint) {
    console.warn('[submitLead] VITE_FORM_ENDPOINT is not set — form data was not sent.')
    return { status: 'error', message: 'The form is not connected yet. Please call or email us.' }
  }

  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(Object.fromEntries(formData)),
    })
    if (!res.ok) throw new Error(String(res.status))
    return { status: 'success', message: 'Thank you! Our team will contact you shortly.' }
  } catch {
    return { status: 'error', message: 'Something went wrong. Please try again or call us.' }
  }
}
