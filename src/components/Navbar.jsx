import { useState, useEffect } from 'react'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Why EBDA', href: '#why-ebda' },
    { label: 'Development', href: '#development' },
    { label: 'Investment', href: '#invest' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        {/* Logo */}
        <a href="#" className="navbar__logo">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="15" fill="#1a3a25" stroke="#2f8a4f" strokeWidth="1.5"/>
            <path d="M16 8 C10 10 8 16 12 19 C14 20.5 15 22 16 24 C17 22 18 20.5 20 19 C24 16 22 10 16 8Z" fill="#2f8a4f"/>
            <path d="M16 12 C13 13.5 12 17 14.5 18.5 C15 18.8 15.5 19.3 16 20 C16.5 19.3 17 18.8 17.5 18.5 C20 17 19 13.5 16 12Z" fill="#5ab870"/>
          </svg>
          <span className="navbar__logo-text">ebdacity</span>
        </a>

        {/* Desktop Links */}
        <ul className="navbar__links">
          {links.map(l => (
            <li key={l.label}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a href="#invest" className="navbar__cta btn-primary">Invest Now</a>

        {/* Hamburger */}
        <button className="navbar__hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="navbar__mobile">
          {links.map(l => (
            <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>
          ))}
          <a href="#invest" className="btn-primary" onClick={() => setMenuOpen(false)}>Invest Now</a>
        </div>
      )}
    </nav>
  )
}
