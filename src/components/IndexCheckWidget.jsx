import { useState } from 'react'

export default function IndexCheckWidget({ placeholder, buttonLabel }) {
  const [value, setValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const raw = value.trim()
    if (!raw) return
    const clean = raw
      .replace(/^https?:\/\//i, '')
      .replace(/^www\./i, '')
      .split('/')[0]
    window.open(
      `https://www.google.com/search?q=site:${encodeURIComponent(clean)}`,
      '_blank',
      'noopener,noreferrer'
    )
  }

  return (
    <form className="climb-entry__tool" onSubmit={handleSubmit}>
      <label className="climb-entry__tool-label" htmlFor="climb-indexcheck-input">
        Am I indexed?
      </label>
      <div className="climb-entry__tool-row">
        <div className="climb-entry__tool-field">
          <span className="climb-entry__tool-prefix">site:</span>
          <input
            id="climb-indexcheck-input"
            type="text"
            className="climb-entry__tool-input"
            placeholder={placeholder}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            autoComplete="off"
            spellCheck="false"
          />
        </div>
        <button type="submit" className="climb-entry__tool-button">
          {buttonLabel}
        </button>
      </div>
      <p className="climb-entry__tool-hint">
        Opens Google in a new tab with the search pre-filled. If you see pages, you're indexed.
        If Google says "no results", you're not — yet.
      </p>
    </form>
  )
}
