import './DevelopmentStatus.css'

const phases = [
  {
    number: 'PHASE 1',
    title: 'Master Planning',
    status: 'COMPLETED',
    statusClass: 'complete',
    progress: 100,
    progressColor: '#2f8a4f',
    details: [
      { label: 'Master Plan', pct: 100 },
      { label: 'Feasibility', pct: 100 },
    ],
  },
  {
    number: 'PHASE 2',
    title: 'Main Infrastructure',
    status: 'IN PROGRESS',
    statusClass: 'active',
    progress: 62,
    progressColor: '#c9a84c',
    details: [
      { label: 'Road Network', pct: 75 },
      { label: 'Utilities', pct: 48 },
    ],
  },
  {
    number: 'PHASE 3',
    title: 'Vertical Construction',
    status: 'UPCOMING',
    statusClass: 'upcoming',
    progress: 14,
    progressColor: '#c9a84c',
    details: [],
  },
]

export default function DevelopmentStatus() {
  return (
    <section className="dev-status" id="development">
      <div className="dev-status__inner">
        <div className="dev-status__header">
          <div>
            <span className="section-badge">PROJECT TRANSPARENCY</span>
            <h2 className="dev-status__title">Development Status</h2>
            <p className="dev-status__sub">
              Real-time tracking of our infrastructure milestones and construction progress.
            </p>
          </div>
          <div className="dev-status__current-badge">
            <span className="pulse-dot" />
            Currently in Phase 2
          </div>
        </div>

        <div className="dev-status__phases">
          {phases.map(p => (
            <div key={p.number} className={`phase-card phase-card--${p.statusClass}`}>
              <div className="phase-card__header">
                <div>
                  <p className="phase-card__number">{p.number}</p>
                  <h3 className="phase-card__title">{p.title}</h3>
                </div>
                <span className={`phase-badge phase-badge--${p.statusClass}`}>{p.status}</span>
              </div>

              {/* Main progress */}
              <div className="phase-card__progress-wrap">
                <div
                  className="phase-card__progress-bar"
                  style={{ width: `${p.progress}%`, background: p.progressColor }}
                />
              </div>
              <p className="phase-card__pct">{p.progress}%</p>

              {/* Sub bars */}
              {p.details.length > 0 && <div className="phase-card__details">
                {p.details.map(d => (
                  <div key={d.label} className="detail-row">
                    <span className="detail-label">{d.label}</span>
                    <div className="detail-bar-wrap">
                      <div
                        className="detail-bar"
                        style={{ width: `${d.pct}%`, background: p.progressColor }}
                      />
                    </div>
                    <span className="detail-pct">{d.pct}%</span>
                  </div>
                ))}
              </div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
