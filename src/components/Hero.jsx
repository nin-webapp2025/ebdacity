import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__overlay" />
      <div className="hero__content">
        <h1 className="hero__title">
          The Future of <span className="gold">Living</span><br />
          and <span className="gold">Industry.</span>
        </h1>
        <p className="hero__sub">
          A multi-faceted urban ecosystem designed to bridge high-end lifestyle with
          industrial innovation. EBDA City is the architect's vision for 2026 and beyond.
        </p>
        <div className="hero__actions">
          <a href="#invest" className="btn-primary">Explore Investment</a>
          <a href="#why-ebda" className="btn-outline">Discover the Vision</a>
        </div>
      </div>
      <div className="hero__scroll-hint">
        <span />
      </div>
    </section>
  )
}
