export type FormField = 'full_name' | 'email' | 'service' | 'message' | 'phone'
export type FormState = {
  status: 'idle' | 'success' | 'error'
  message?: string
  errors?: Partial<Record<FormField, string>>
}

const endpoint = import.meta.env.VITE_FORM_ENDPOINT as string | undefined

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(values: Record<string, string>): Partial<Record<FormField, string>> {
  const errors: Partial<Record<FormField, string>> = {}
  if (!values.full_name.trim()) errors.full_name = 'Please enter your full name.'
  else if (values.full_name.length > 255) errors.full_name = 'Your name must be 255 characters or fewer.'
  if (!values.email.trim()) errors.email = 'Please enter your email address.'
  else if (!emailPattern.test(values.email) || values.email.length > 255) errors.email = 'Please enter a valid email address.'
  if (!values.message.trim()) errors.message = 'Please enter a message.'
  if (values.phone && values.phone.length > 50) errors.phone = 'Phone number must be 50 characters or fewer.'
  if (values.service && values.service.length > 255) errors.service = 'Please choose a shorter service name.'
  return errors
}

function errorMessage(payload: unknown, fallback: string) {
  if (payload && typeof payload === 'object' && 'message' in payload && typeof payload.message === 'string') {
    return payload.message
  }
  return fallback
}

function fieldErrors(payload: unknown): Partial<Record<FormField, string>> {
  const allowed: FormField[] = ['full_name', 'email', 'service', 'message', 'phone']
  if (!payload || typeof payload !== 'object' || !('errors' in payload) || !payload.errors || typeof payload.errors !== 'object') return {}
  const result: Partial<Record<FormField, string>> = {}
  for (const field of allowed) {
    const value = (payload.errors as Record<string, unknown>)[field]
    if (Array.isArray(value) && typeof value[0] === 'string') result[field] = value[0]
  }
  return result
}

/** Posts values using the Laravel InquiryController field names. */
export async function submitLead(_prev: FormState, formData: FormData): Promise<FormState> {
  const values = Object.fromEntries(formData) as Record<string, string>
  const errors = validate(values)
  if (Object.keys(errors).length) return { status: 'error', errors }

  if (!endpoint) {
    console.warn('[submitLead] VITE_FORM_ENDPOINT is not set; inquiry was not sent.')
    return { status: 'error', message: 'The form is not connected yet. Please call or email us.' }
  }

  const payload = {
    full_name: values.full_name.trim(),
    email: values.email.trim(),
    service: values.service?.trim() || null,
    message: values.message.trim(),
    phone: values.phone?.trim() || null,
  }

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(payload),
    })
    const responseBody: unknown = await response.json().catch(() => null)
    if (response.status === 422) {
      return {
        status: 'error',
        message: errorMessage(responseBody, 'Please check the highlighted fields.'),
        errors: fieldErrors(responseBody),
      }
    }
    if (!response.ok) throw new Error(errorMessage(responseBody, `Request failed (${response.status})`))

    return {
      status: 'success',
      message: errorMessage(responseBody, 'Your inquiry has been submitted successfully.'),
    }
  } catch (cause) {
    console.error('[submitLead] Inquiry submission failed.', cause)
    return { status: 'error', message: 'Something went wrong while sending your inquiry. Please try again or call us.' }
  }
}
