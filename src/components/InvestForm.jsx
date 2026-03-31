import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import './InvestForm.css'

const SERVICE_ID  = 'YOUR_EMAILJS_SERVICE_ID'
const TEMPLATE_ID = 'YOUR_EMAILJS_TEMPLATE_ID'
const PUBLIC_KEY  = 'YOUR_EMAILJS_PUBLIC_KEY'

export default function InvestForm() {
  const formRef = useRef(null)
  const [form, setForm] = useState({
    fullName: '',
    refName: '',
    amount: '',
    message: '',
  })
  const [status, setStatus] = useState(null) // null | 'sending' | 'success' | 'error'

  const handleChange = e => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('sending')
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      setStatus('success')
      setForm({ fullName: '', refName: '', amount: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="invest-form" id="invest">
      <div className="invest-form__inner">
        <div className="invest-form__text">
          <span className="section-badge">INVEST</span>
          <h2 className="invest-form__title">Invest in the Vision.</h2>
          <p className="invest-form__sub">
            Every square metre of EBDA City represents an investment in the most ambitious
            project of the decade. Connect with us and enquire now.
          </p>
        </div>

        <form ref={formRef} className="invest-form__form" onSubmit={handleSubmit} noValidate>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="fullName">FULL NAME</label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                placeholder="Company Name"
                value={form.fullName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="refName">REFERENCE NAME</label>
              <input
                id="refName"
                name="refName"
                type="text"
                placeholder="Company Name"
                value={form.refName}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="amount">AMOUNT</label>
            <input
              id="amount"
              name="amount"
              type="text"
              placeholder="$ Amount"
              value={form.amount}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">MESSAGE</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your message"
              rows={4}
              value={form.message}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="btn-primary invest-form__submit"
            disabled={status === 'sending'}
          >
            {status === 'sending' ? 'Sending…' : 'Submit Application'}
          </button>

          {status === 'success' && (
            <p className="form-feedback form-feedback--success">
              Thank you! We'll be in touch shortly.
            </p>
          )}
          {status === 'error' && (
            <p className="form-feedback form-feedback--error">
              Something went wrong. Please try again or email us directly.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
