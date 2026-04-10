import './BacklinkSourcesDiagram.css'

const sources = [
  { label: 'Directories', icon: '📋' },
  { label: 'Client sites', icon: '🤝' },
  { label: 'Guest posts', icon: '✍️' },
  { label: 'Community', icon: '🏘️' },
  { label: 'Niche content', icon: '📝' },
]

export default function BacklinkSourcesDiagram() {
  return (
    <div className="backlink-diagram">
      <div className="backlink-diagram__sources">
        {sources.map((s, i) => (
          <div key={i} className="backlink-diagram__source">
            <span className="backlink-diagram__source-icon" aria-hidden="true">
              {s.icon}
            </span>
            <span className="backlink-diagram__source-label">{s.label}</span>
          </div>
        ))}
      </div>

      <div className="backlink-diagram__arrows" aria-hidden="true">
        {sources.map((_, i) => (
          <span key={i} className="backlink-diagram__arrow" />
        ))}
      </div>

      <div className="backlink-diagram__target">
        <span className="backlink-diagram__target-label">Your site</span>
        <span className="backlink-diagram__target-sub">Each link = a vote</span>
      </div>
    </div>
  )
}
