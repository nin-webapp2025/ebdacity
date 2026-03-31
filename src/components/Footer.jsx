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
            <img src="/ebda city logo.jpeg" alt="EBDA City" className="footer__logo-img" />
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
