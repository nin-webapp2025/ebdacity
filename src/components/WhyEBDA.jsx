import './WhyEBDA.css'

const features = [
  'Academic', 'Commercial', 'Entertainment district',
  'Clinic', 'Casino', 'Technical', 'Sport',
  'Marketplace', 'Private enclaves', 'Food campus',
  'Boutique retail', 'Pedagogics', 'HR facilities',
  'Warehouse', 'Hotel',
]

export default function WhyEBDA() {
  return (
    <section className="why-ebda" id="why-ebda">
      <div className="why-ebda__inner">
        {/* Left / Main */}
        <div className="why-ebda__main">
          <span className="section-badge">PROJECT OVERVIEW</span>
          <h2 className="why-ebda__title">Why EBDA City?</h2>

          {/* Stats Row */}
          <div className="why-ebda__stats">
            <div className="stat">
              <p className="stat__value">3.4M – 3.7M</p>
              <p className="stat__label">Estimated area (m²)</p>
            </div>
            <div className="stat">
              <p className="stat__value stat__value--orange">-3.15%</p>
              <p className="stat__label">Annual return delta</p>
            </div>
            <div className="stat">
              <p className="stat__value">500,000</p>
              <p className="stat__label">est. overall visitors target</p>
            </div>
          </div>

          {/* Education Hub */}
          <div className="why-ebda__edu-card">
            <div className="edu-card__badge">EDUCATION HUB</div>
            <div className="edu-card__stat">60k – 75k</div>
            <p className="edu-card__desc">PROJECTED STUDENTS PER YEAR</p>
          </div>

          <p className="why-ebda__body">
            EBDA City presents a concept of understanding education and social interaction, driven by
            population growth, a large student movement and increasing urbanization.
          </p>
          <p className="why-ebda__body">
            The development of EBDA City offers resources from the world of Commerce as a primary
            inspiration, merging an entertainment destination that incorporates business, wellness, and
            residential infrastructure designed to maximize prosperity and livelihoods.
          </p>
          <p className="why-ebda__body">
            Existing communities within EBDA City will benefit from access to best-class amenities across multiple
            domains including entertainment, sport, hospitality, and retail, creating a lifestyle and economic
            destination with unmatched cross-sectoral potential for visitors and residents.
          </p>

          {/* Regional Advantage */}
          <div className="why-ebda__advantage">
            <h4>Regional Connectivity Advantage</h4>
            <ul>
              <li>Lack of integrated urban destination</li>
              <li>Proximity to high-growth demographics</li>
              <li>Underserved in premium amenities</li>
            </ul>
          </div>

          {/* Housing */}
          <div className="why-ebda__housing">
            <h4>Housing / Living Offerings</h4>
            <p>
              EBDA City will offer a purpose-built residential community with branded residences,
              hotel-managed living, and serviced apartments for a premium urban lifestyle experience.
            </p>
          </div>
        </div>

        {/* Right – Project Features */}
        <div className="why-ebda__features">
          <h4 className="features__title">Project Features</h4>
          <ul className="features__list">
            {features.map(f => (
              <li key={f} className="features__item">
                <span className="features__check">✔</span>
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
