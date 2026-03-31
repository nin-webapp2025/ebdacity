import './InfiniteCatalog.css'

const mainCards = [
  {
    img: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600&q=80',
    label: '4-Star Grand Hotel',
    tag: 'Hospitality',
  },
  {
    img: 'https://images.unsplash.com/photo-1562778612-e1e0cda9915c?w=600&q=80',
    label: 'Water Park & Recreation',
    tag: 'Leisure',
  },
  {
    img: 'https://images.unsplash.com/photo-1596727147705-61a532a659bd?w=600&q=80',
    label: 'International Casino',
    tag: 'Entertainment',
  },
  {
    img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80',
    label: 'Technical Districts',
    tag: 'Industrial',
  },
]

const amenities = [
  { label: 'Billiards Lounge', icon: '🎱' },
  { label: 'Golf Course', icon: '⛳' },
  { label: '608 Rooms', icon: '🏨' },
  { label: 'Fine Dining', icon: '🍽️' },
  { label: 'Luxury Suites', icon: '🛎️' },
  { label: 'Fishing Bay', icon: '🎣' },
]

export default function InfiniteCatalog() {
  return (
    <section className="catalog" id="catalog">
      <div className="catalog__inner">
        <span className="section-badge">OFFERINGS</span>
        <h2 className="catalog__title">An Infinite Catalog of Excellence.</h2>
        <p className="catalog__sub">
          Every requirement of EBDA City is engineered for high-impact experiences and
          industrial productivity.
        </p>

        <div className="catalog__grid">
          {mainCards.map(c => (
            <div key={c.label} className="catalog-card">
              <div className="catalog-card__img-wrap">
                <img src={c.img} alt={c.label} loading="lazy" />
                <span className="catalog-card__tag">{c.tag}</span>
              </div>
              <p className="catalog-card__label">{c.label}</p>
            </div>
          ))}
        </div>

        {/* Amenities strip */}
        <div className="catalog__amenities">
          {amenities.map(a => (
            <div key={a.label} className="amenity">
              <span className="amenity__icon">{a.icon}</span>
              <span className="amenity__label">{a.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
