import './LatestPhotos.css'

const photos = [
  { src: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80', alt: 'Urban development aerial view' },
  { src: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80', alt: 'City skyline at dusk' },
  { src: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=600&q=80', alt: 'Modern commercial complex' },
  { src: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80', alt: 'Industrial district' },
  { src: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&q=80', alt: 'Residential towers at sunset' },
]

export default function LatestPhotos() {
  return (
    <section className="photos" id="photos">
      <div className="photos__inner">
        <div className="photos__header">
          <span className="section-badge">LATEST PHOTOS</span>
          <h2 className="photos__title">Latest Photos</h2>
        </div>
        <div className="photos__grid">
          {photos.map((p, i) => (
            <div key={i} className="photo-item">
              <img src={p.src} alt={p.alt} loading="lazy" />
              <div className="photo-item__overlay" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
