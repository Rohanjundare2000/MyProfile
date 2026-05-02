import { useCallback, useRef, useState, type CSSProperties, type MouseEvent } from 'react'

function ChecklistIcon() {
  return (
    <svg
      className="hero__kyc-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      aria-hidden
    >
      <path
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
      />
    </svg>
  )
}

export function Hero() {
  const wrapRef = useRef<HTMLElement>(null)
  const [glow, setGlow] = useState({ x: 50, y: 40 })

  const onMove = useCallback((e: MouseEvent<HTMLElement>) => {
    const el = wrapRef.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const x = ((e.clientX - r.left) / r.width) * 100
    const y = ((e.clientY - r.top) / r.height) * 100
    setGlow({ x, y })
  }, [])

  const onLeave = useCallback(() => {
    setGlow({ x: 50, y: 35 })
  }, [])

  return (
    <header
      id="hero"
      ref={wrapRef}
      className="hero"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={
        {
          '--glow-x': `${glow.x}%`,
          '--glow-y': `${glow.y}%`,
        } as CSSProperties
      }
    >
      <div className="hero__grid" aria-hidden />
      <div className="hero__inner">
        <p className="hero__eyebrow">Portfolio · Fintech engineering</p>
        <h1 className="hero__title hero__title--gradient">
          I build scalable fintech systems handling millions of users.
        </h1>
        <div className="hero__identity">
          <span className="hero__name">Rohan Mangesh Jundare</span>
          <span className="hero__role">Java Full Stack Developer · 1.7+ years in production</span>
        </div>
        <div className="hero__kyc-card">
          <ChecklistIcon />
          <p className="hero__kyc-text">Built KYC platform serving 2M+ users</p>
        </div>
        <div className="hero__ctas">
          <a className="btn btn--projects" href="#projects">
            View projects
          </a>
          <a
            className="btn btn--resume"
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Download resume
          </a>
          <a className="btn btn--contact-cta" href="#contact">
            Contact
          </a>
        </div>
        <a className="hero__scroll-hint" href="#projects" aria-label="Scroll to projects">
          <span className="hero__scroll-line" aria-hidden />
        </a>
      </div>
    </header>
  )
}
