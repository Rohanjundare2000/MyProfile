const FEATURED = [
  {
    name: 'KYC Onboarding Platform',
    problem: 'Paper-based onboarding with high drop-off',
    solution: 'Digital eSign orchestration and guided journey',
    impact: '2M+ users onboarded with compliance automation',
    stack: ['Java', 'Spring Boot', 'Vue.js', 'MySQL'],
  },
  {
    name: 'NRI Demat Platform',
    problem: 'FEMA and regulatory complexity for NRI clients',
    solution: 'Greenfield platform with API-led compliance checks',
    impact: 'CDSL/NSE activation pipeline with faster turnaround',
    stack: ['Java', 'Spring Boot', 'Vue.js', 'MS SQL'],
  },
  {
    name: 'HUF Demat Platform',
    problem: 'Manual documentation for HUF account creation',
    solution: 'Rule-based verification and digital submission flow',
    impact: 'Reduced manual intervention and improved accuracy',
    stack: ['Java', 'Spring Boot', 'Vue.js', 'MySQL'],
  },
  {
    name: 'Mutual Fund Processor',
    problem: 'Large CSV batches causing processing delays',
    solution: 'Idempotent batch engine with validation checkpoints',
    impact: 'Reliable bulk processing with production observability',
    stack: ['Java', 'Spring Boot', 'MySQL', 'Jenkins'],
  },
]

function CaseIcon({ type }: { type: 'problem' | 'solution' | 'impact' }) {
  if (type === 'problem') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
        <path
          strokeWidth="1.5"
          strokeLinecap="round"
          d="M12 9v4M12 17h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    )
  }
  if (type === 'solution') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
        <path
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
      <path
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
      />
    </svg>
  )
}

export function Projects() {
  return (
    <section id="projects" className="panel panel--projects">
      <div className="projects__head">
        <h2 className="panel__title panel__title--inline">Projects</h2>
        <p className="projects__hint">Scroll sideways to view all 4 projects</p>
      </div>
      <div className="projects__row" role="list" aria-label="Project case studies">
        {FEATURED.map((c) => (
          <article key={c.name} className="project-card glass-card" role="listitem">
            <h3 className="project-card__name">{c.name}</h3>
            <div className="project-card__rows">
              <div className="project-card__row">
                <span className="project-card__icon-wrap">
                  <CaseIcon type="problem" />
                </span>
                <div>
                  <span className="project-card__label">Problem</span>
                  <p className="project-card__value">{c.problem}</p>
                </div>
              </div>
              <div className="project-card__row">
                <span className="project-card__icon-wrap">
                  <CaseIcon type="solution" />
                </span>
                <div>
                  <span className="project-card__label">Solution</span>
                  <p className="project-card__value">{c.solution}</p>
                </div>
              </div>
              <div className="project-card__row">
                <span className="project-card__icon-wrap">
                  <CaseIcon type="impact" />
                </span>
                <div>
                  <span className="project-card__label">Impact</span>
                  <p className="project-card__value">{c.impact}</p>
                </div>
              </div>
            </div>
            <ul className="project-card__badges">
              {c.stack.map((t) => (
                <li key={t}>
                  <span className="badge badge--glass">{t}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
