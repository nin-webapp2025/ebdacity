import './Footer.css'

const navLinks = [
  { label: 'Why EBDA', href: '#why-ebda' },
  { label: 'Development', href: '#development' },
  { label: 'Investment', href: '#invest' },
  { label: 'Contact', href: '#contact' },
]

const transparencyLinks = [
  { label: 'Progress Reports', href: '#' },
  { label: 'Master Plan', href: '#' },
  { label: 'Environmental Impact', href: '#' },
]

const connectLinks = [
  { label: 'LinkedIn', href: '#' },
  { label: 'Instagram', href: '#' },
  { label: 'X / Twitter', href: '#' },
  { label: 'media@ebdacity.com', href: 'mailto:media@ebdacity.com' },
]

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer__inner">
        {/* Brand */}
        <div className="footer__brand">
          <div className="footer__logo">
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="15" fill="#1a3a25" stroke="#2f8a4f" strokeWidth="1.5"/>
              <path d="M16 8 C10 10 8 16 12 19 C14 20.5 15 22 16 24 C17 22 18 20.5 20 19 C24 16 22 10 16 8Z" fill="#2f8a4f"/>
              <path d="M16 12 C13 13.5 12 17 14.5 18.5 C15 18.8 15.5 19.3 16 20 C16.5 19.3 17 18.8 17.5 18.5 C20 17 19 13.5 16 12Z" fill="#5ab870"/>
            </svg>
            <span>ebdacity</span>
          </div>
          <p className="footer__tagline">
            A multi-faceted urban ecosystem designed to bridge high-end lifestyle with industrial
            innovation. The architect's vision for 2026 and beyond.
          </p>
          <div className="footer__socials">
            {['in', 'ig', 'x'].map(s => (
              <a key={s} href="#" className="social-pill">{s.toUpperCase()}</a>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="footer__col">
          <h4>Navigation</h4>
          <ul>
            {navLinks.map(l => (
              <li key={l.label}><a href={l.href}>{l.label}</a></li>
            ))}
          </ul>
        </div>

        {/* Transparency */}
        <div className="footer__col">
          <h4>Transparency</h4>
          <ul>
            {transparencyLinks.map(l => (
              <li key={l.label}><a href={l.href}>{l.label}</a></li>
            ))}
          </ul>
        </div>

        {/* Connect */}
        <div className="footer__col">
          <h4>Connect</h4>
          <ul>
            {connectLinks.map(l => (
              <li key={l.label}><a href={l.href}>{l.label}</a></li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <p>©{new Date().getFullYear()} EBDA City. All rights reserved. The Future of Urban Living.</p>
      </div>
    </footer>
  )
}
