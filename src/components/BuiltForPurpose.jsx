import './BuiltForPurpose.css'

const cards = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="7" width="20" height="14" rx="2"/>
        <polyline points="16 2 12 7 8 2"/>
      </svg>
    ),
    title: 'Innovation District',
    desc: 'A dedicated hub for tech companies, startups, research facilities, and educational institutions — all designed to inspire forward-thinking collaboration.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
        <path d="M2 17l10 5 10-5"/>
        <path d="M2 12l10 5 10-5"/>
      </svg>
    ),
    title: 'Vibrant Entertainment',
    desc: 'EBDA City goes beyond Work-Play. It creates a seamless blend of world-class entertainment, leisure, sports, and cultural experiences available within the city limits.',
    highlight: true,
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    title: 'Global Commerce',
    desc: 'A purpose-built hub for trade, an interconnected framework of offices, commercial spaces, and specialized zones driving international business forward.',
  },
]

export default function BuiltForPurpose() {
  return (
    <section className="built" id="built">
      <div className="built__inner">
        <span className="section-badge">BUILT FOR PURPOSE</span>
        <h2 className="built__title">
          Built for Purpose,<br />Designed for Excellence.
        </h2>
        <p className="built__sub">
          Three interconnected pillars that together create a next-generation urban ecosystem
          combining innovation, entertainment, and commerce into one cohesive destination.
        </p>
        <div className="built__cards">
          {cards.map(c => (
            <div key={c.title} className={`built-card${c.highlight ? ' built-card--highlight' : ''}`}>
              <div className="built-card__icon">{c.icon}</div>
              <h3 className="built-card__title">{c.title}</h3>
              <p className="built-card__desc">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
