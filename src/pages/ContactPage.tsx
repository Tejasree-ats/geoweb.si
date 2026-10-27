import { useState, type FormEvent } from 'react'
import { ArrowUpRight, Check, Mail, MapPin } from 'lucide-react'
import { useSearchParams } from 'react-router'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { TypographyH1 } from '@/components/ui/typography'

type InquiryFields = { name: string; email: string; message: string }
type InquiryErrors = Partial<Record<keyof InquiryFields, string>>

const initialFields: InquiryFields = { name: '', email: '', message: '' }
const interestLabels: Record<string, string> = {
  'it-ai-digital': 'IT, AI & Digital Technology',
  'websites-marketing': 'Websites, Social Media & Digital Marketing',
  'business-development': 'Business Development & Administration',
  'real-estate-hospitality': 'Real Estate, Hospitality & Tourism',
  'food-events-community': 'Food Marketing, Events & Community Initiatives',
  'ai-software': 'IT, AI & Digital Technology',
  websites: 'Websites, Social Media & Digital Marketing',
  'digital-marketing': 'Digital Marketing',
  'social-media': 'Social Media & Digital Marketing',
}

function validate(values: InquiryFields): InquiryErrors {
  const errors: InquiryErrors = {}
  if (!values.name.trim()) errors.name = 'Let us know what to call you.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) errors.email = 'Enter a valid email address.'
  if (values.message.trim().length < 12) errors.message = 'A sentence or two helps us find the right starting point.'
  return errors
}

export function ContactPage() {
  const [searchParams] = useSearchParams()
  const interest = searchParams.get('interest')
  const interestLabel = interest ? interestLabels[interest] : undefined
  const [fields, setFields] = useState(initialFields)
  const [errors, setErrors] = useState<InquiryErrors>({})
  const [feedback, setFeedback] = useState('')
  const [hasChecked, setHasChecked] = useState(false)

  const updateField = (field: keyof InquiryFields, value: string) => {
    setFields((current) => ({ ...current, [field]: value }))
    if (errors[field]) {
      setErrors((current) => {
        const { [field]: _clearedError, ...remainingErrors } = current
        return remainingErrors
      })
    }
    setFeedback('')
    setHasChecked(false)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors = validate(fields)
    setErrors(nextErrors)
    setHasChecked(true)
    if (Object.keys(nextErrors).length) {
      setFeedback('A couple of details need your attention.')
      return
    }
    setFeedback('Demo only: the form is complete, but no message has been sent. Connect an inquiry endpoint to receive submissions.')
  }

  return (
    <div className="inner-page contact-page">
      <section className="contact-layout section-shell">
        <div className="contact-intro" data-reveal>
          <p className="running-label">Contact · Let’s begin with a question</p>
          <TypographyH1>Tell us the<br /><em>interesting bit.</em></TypographyH1>
          <p>What are you trying to make happen? A few lines is enough to find a good place to start.</p>
          <a className="contact-email" href="mailto:geowebc@gmail.com"><Mail aria-hidden="true" size={17} /> geowebc@gmail.com <ArrowUpRight aria-hidden="true" size={15} /></a>
          <div className="contact-coordinates"><span><MapPin aria-hidden="true" size={15} /> Buhari Buildings, Chennai</span><span className="contact-coordinates__line" aria-hidden="true" /><span>Office · 13°04′ N&nbsp; / &nbsp;80°16′ E</span></div>
        </div>

        <div className="contact-form-wrap" data-reveal>
          <div className="contact-form-heading">
            <span className="form-heading-marker"><span className="live-dot" /> OPEN CHANNEL</span>
            {interestLabel && <p>Let’s talk about <strong>{interestLabel.toLowerCase()}</strong> to start.</p>}
          </div>
          <form className="inquiry-form" noValidate onSubmit={handleSubmit}>
            <div className="field">
              <Label htmlFor="name">Your name <span aria-hidden="true">*</span></Label>
              <Input aria-describedby={errors.name ? 'name-error' : undefined} aria-invalid={Boolean(errors.name)} autoComplete="name" id="name" onChange={(event) => updateField('name', event.target.value)} placeholder="How should we address you?" required value={fields.name} />
              {errors.name && <p className="field-error" id="name-error">{errors.name}</p>}
            </div>
            <div className="field">
              <Label htmlFor="email">Email <span aria-hidden="true">*</span></Label>
              <Input aria-describedby={errors.email ? 'email-error' : undefined} aria-invalid={Boolean(errors.email)} autoComplete="email" id="email" onChange={(event) => updateField('email', event.target.value)} placeholder="you@yourdomain.com" required type="email" value={fields.email} />
              {errors.email && <p className="field-error" id="email-error">{errors.email}</p>}
            </div>
            <div className="field">
              <Label htmlFor="message">What are you building? <span aria-hidden="true">*</span></Label>
              <Textarea aria-describedby={errors.message ? 'message-error' : 'message-hint'} aria-invalid={Boolean(errors.message)} id="message" maxLength={1200} onChange={(event) => updateField('message', event.target.value)} placeholder="A new idea, something that could work better, a small first step…" required rows={4} value={fields.message} />
              {errors.message ? <p className="field-error" id="message-error">{errors.message}</p> : <p className="field-hint" id="message-hint">A little context is plenty. Keep it as short as you like.</p>}
            </div>
            <div className="form-submit-row">
              <Button className="pill-button pill-button--gold form-submit" type="submit">{hasChecked && !Object.keys(errors).length ? <>Form checked <Check aria-hidden="true" size={16} /></> : <>Prepare inquiry <ArrowUpRight aria-hidden="true" size={16} /></>}</Button>
              <span>No mailing list. No obligation.</span>
            </div>
            <p aria-live="polite" className={`form-feedback${feedback && Object.keys(errors).length ? ' form-feedback--error' : ''}`} role="status">{feedback}</p>
            <p className="form-demo-note">Demo form — this prototype doesn’t store or send your details.</p>
          </form>
        </div>
      </section>
    </div>
  )
}
