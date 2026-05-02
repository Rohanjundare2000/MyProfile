const ITEMS = [
  {
    title: 'RBAC System',
    body: 'Role-Based Access Control',
    icon: 'rbac',
  },
  {
    title: 'Batch Processing',
    body: 'High-throughput fund data',
    icon: 'batch',
  },
  {
    title: 'API Integrations',
    body: 'Resilient Comtek/eSign logic',
    icon: 'api',
  },
  {
    title: 'Deployment Pipelines',
    body: 'Jenkins/Docker orchestration',
    icon: 'deploy',
  },
  {
    title: 'Logging & Monitoring',
    body: 'Structured log analysis',
    icon: 'mon',
  },
] as const

function ProdIcon({ name }: { name: (typeof ITEMS)[number]['icon'] }) {
  switch (name) {
    case 'rbac':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
          <path
            strokeWidth="1.5"
            strokeLinecap="round"
            d="M12 11a3 3 0 100-6 3 3 0 000 6zM4 20a8 8 0 0116 0"
          />
          <path strokeWidth="1.5" d="M4 12h4M16 12h4" />
        </svg>
      )
    case 'batch':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
          <rect x="3" y="4" width="18" height="6" rx="1" strokeWidth="1.5" />
          <rect x="3" y="14" width="18" height="6" rx="1" strokeWidth="1.5" />
          <path strokeWidth="1.5" d="M7 7h2M7 17h6" />
        </svg>
      )
    case 'api':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
          <path
            strokeWidth="1.5"
            strokeLinecap="round"
            d="M8 9l-3 3 3 3M16 9l3 3-3 3M13 5l-2 14"
          />
        </svg>
      )
    case 'deploy':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
          <path
            strokeWidth="1.5"
            strokeLinecap="round"
            d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V4"
          />
        </svg>
      )
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
          <path
            strokeWidth="1.5"
            d="M4 19V5M4 19h16M8 16V8M12 16v-5M16 16V11"
            strokeLinecap="round"
          />
        </svg>
      )
  }
}

export function BuiltInProduction() {
  return (
    <section id="production" className="panel panel--production">
      <p className="panel__eyebrow">System Design Differentiator</p>
      <h2 className="panel__title">Things I have built in production</h2>
      <div className="prod-grid prod-grid--bento">
        {ITEMS.map((item) => (
          <div key={item.title} className="prod-card glass-card glass-card--tight">
            <div className="prod-card__icon">
              <ProdIcon name={item.icon} />
            </div>
            <h3 className="prod-card__title">{item.title}</h3>
            <p className="prod-card__body">{item.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
