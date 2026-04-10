import './CaseStudyTemplateDiagram.css'

const sections = [
  { label: 'Client type', hint: 'A Melbourne physiotherapy clinic' },
  { label: 'Problem', hint: 'Old site, invisible on Google' },
  { label: 'What you built', hint: 'Fast, mobile-first redesign' },
  { label: 'Tools used', hint: 'React, Cloudflare, schema markup' },
  { label: 'Before & after', hint: 'Screenshots or metrics' },
  { label: 'Outcomes', hint: '3x enquiries in 2 months' },
]

export default function CaseStudyTemplateDiagram() {
  return (
    <div className="casestudy-diagram">
      <div className="casestudy-diagram__header">
        <span className="casestudy-diagram__header-label">Case study template</span>
      </div>
      <ol className="casestudy-diagram__sections">
        {sections.map((s, i) => (
          <li key={i} className="casestudy-diagram__section">
            <span className="casestudy-diagram__section-num">{i + 1}</span>
            <div className="casestudy-diagram__section-content">
              <span className="casestudy-diagram__section-label">{s.label}</span>
              <span className="casestudy-diagram__section-hint">{s.hint}</span>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}
