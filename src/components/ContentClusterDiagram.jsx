import './ContentClusterDiagram.css'

const articles = [
  'What is an AI chatbot?',
  'Best AI features for websites',
  'AI automation for Melbourne',
  'AI for lead generation',
  'Website vs chatbot vs automation',
]

export default function ContentClusterDiagram() {
  return (
    <div className="cluster-diagram">
      <div className="cluster-diagram__hub">
        <span className="cluster-diagram__hub-label">AI Services</span>
        <span className="cluster-diagram__hub-sub">Pillar page</span>
      </div>
      <div className="cluster-diagram__spokes">
        {articles.map((title, i) => (
          <div key={i} className="cluster-diagram__spoke">
            <span className="cluster-diagram__line" aria-hidden="true" />
            <div className="cluster-diagram__node">
              <span className="cluster-diagram__node-label">{title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
