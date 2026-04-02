import { useState } from 'react'
import './InvestForm.css'

const WA_NUMBER = '2349162699999'

export default function InvestForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleChange = e => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    const text =
      `Hello, I'm interested in EBDA City.%0A%0A` +
      `Name: ${encodeURIComponent(form.name)}%0A` +
      `Email: ${encodeURIComponent(form.email)}%0A` +
      `Phone: ${encodeURIComponent(form.phone)}%0A` +
      `Message: ${encodeURIComponent(form.message)}`
    window.open(`https://wa.me/${WA_NUMBER}?text=${text}`, '_blank', 'noopener,noreferrer')
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

        <form className="invest-form__form" onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="name">FULL NAME</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your full name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">EMAIL ADDRESS</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Your email address"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">PHONE NUMBER</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Your phone number"
              value={form.phone}
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

          <button type="submit" className="btn-primary invest-form__submit">
            Send via WhatsApp
          </button>
        </form>
      </div>
    </section>
  )
}
