import { useState } from 'react'
import './ExperienceVision.css'

export default function ExperienceVision() {
  const [playing, setPlaying] = useState(false)

  return (
    <section className="experience" id="experience">
      <div className="experience__bg" />
      <div className="experience__inner">
        <h2 className="experience__title">Experience the Vision</h2>
        <div className="experience__video-wrap">
          {!playing ? (
            <div className="experience__thumbnail" onClick={() => setPlaying(true)}>
              <img
                src="https://img.youtube.com/vi/l-QJrI9l-Lw/maxresdefault.jpg"
                alt="EBDA City preview"
              />
              <div className="experience__overlay">
                <button className="play-btn" aria-label="Play video">
                  <svg viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="11" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5"/>
                    <polygon points="10,8 18,12 10,16" fill="white"/>
                  </svg>
                </button>
              </div>
            </div>
          ) : (
            <iframe
              className="experience__iframe"
              src="https://www.youtube.com/embed/l-QJrI9l-Lw?autoplay=1"
              title="EBDA City Vision"
              allow="autoplay; fullscreen"
              allowFullScreen
            />
          )}
        </div>
        <p className="experience__label">Experience EBDA City</p>
      </div>
    </section>
  )
}
