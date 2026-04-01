import './WhyEBDA.css'

const features = [
  '4-Star Hotel',
  'Central Mall',
  'Entertainment District',
  'Cinema',
  'Casino',
  'Tech Hub',
  'Arcade',
  'Night Club',
  'Fine Dining Restaurant',
  'Multiple Eateries',
  '2,000sqm Outdoor Sport Bar & Lounge',
  'Water Park',
  'Private Meeting Rooms',
  'Conference Center',
  'Event Marquee',
  'Love Garden',
  'Petting Zoo',
  'SME Factories',
  'Warehousing',
  'Retail',
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
              <p className="stat__label">Estimated residents</p>
            </div>
            <div className="stat">
              <p className="stat__value stat__value--orange">-3.15%</p>
              <p className="stat__label">Annual population growth</p>
            </div>
            <div className="stat">
              <p className="stat__value">600,000</p>
              <p className="stat__label">Ado-Ekiti population</p>
            </div>
          </div>

          {/* Education Hub */}
          <div className="why-ebda__edu-card">
            <div className="edu-card__badge">EDUCATION HUB</div>
            <div className="edu-card__stat">60k – 75k</div>
            <p className="edu-card__desc">STUDENTS WITHIN IMMEDIATE MARKET RADIUS</p>
          </div>

          <p className="why-ebda__body">
            Ekiti State presents a strong but underdeveloped leisure and retail market, driven by
            population growth, a large student base and increasing urbanization.
          </p>
          <p className="why-ebda__body">
            Despite these strong fundamentals, modern recreational and entertainment infrastructure
            remains extremely limited, creating a clear gap between consumer demand and available
            leisure offerings.
          </p>

          {/* Regional Connectivity Advantage */}
          <div className="why-ebda__advantage">
            <h4>Regional Connectivity Advantage</h4>
            <p>
              EBDA City is located within close proximity to the Ekiti State Agro-Allied International
              Cargo Airport, a major infrastructure project developed by the Ekiti State Government to
              improve regional connectivity and stimulate tourism, trade, and investment. The proximity
              of EBDA City to the airport positions the Recreational Centre to serve as a primary
              hospitality, leisure, and entertainment destination for incoming visitors, business
              travelers, and tourists.
            </p>
            <p style={{ marginTop: '0.75rem' }}>
              Existing recreational activities in Ekiti State largely revolve around: Fajuyi Memorial
              Park, Arinta Waterfalls, Olosunta Hills, Udiroko cultural festival, and Ikogosi Warm
              Springs Resort. While culturally and historically significant, these attractions primarily
              focus on heritage tourism and nature experiences rather than modern leisure and
              entertainment.
            </p>
            <h5 style={{ marginTop: '0.75rem', marginBottom: '0.4rem' }}>Limitations of existing offerings:</h5>
            <ul>
              <li>Limited modern entertainment infrastructure</li>
              <li>Lack of integrated leisure destinations</li>
              <li>Geographic dispersion of attractions</li>
              <li>Limited appeal to younger urban demographics</li>
            </ul>
            <p style={{ marginTop: '0.75rem' }}>
              Additionally, destinations such as Ikogosi are relatively remote and expensive for frequent recreational use, limiting accessibility for the majority of residents and students.
            </p>
            <p style={{ marginTop: '0.75rem' }}>
              This creates a strong opportunity for a centralized, modern recreational destination
              within Ado-Ekiti itself.
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
