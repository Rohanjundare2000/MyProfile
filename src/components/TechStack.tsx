const GROUPS: {
  title: string
  items: string[]
  variant: 'backend' | 'frontend' | 'database' | 'devops'
}[] = [
  { title: 'Backend', items: ['Java', 'Spring Boot', 'Quarkus'], variant: 'backend' },
  { title: 'Frontend', items: ['Vue.js', 'React.js'], variant: 'frontend' },
  { title: 'Databases', items: ['MySQL'], variant: 'database' },
  { title: 'DevOps', items: ['Jenkins', 'Docker', 'AWS'], variant: 'devops' },
]

const ACHIEVEMENTS = [
  {
    title: 'CDAC Topper (4 modules)',
    icon: 'cert' as const,
  },
  {
    title: 'State-Level Handball Silver Medal',
    icon: 'medal' as const,
  },
]

function AchievementIcon({ type }: { type: (typeof ACHIEVEMENTS)[number]['icon'] }) {
  if (type === 'cert') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
        <path
          strokeWidth="1.5"
          d="M6 3h12v11H6zM8 21l4-3 4 3v-4H8z"
          strokeLinejoin="round"
        />
        <path strokeWidth="1.5" d="M9 7h6M9 10h4" strokeLinecap="round" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
      <circle cx="12" cy="9" r="6" strokeWidth="1.5" />
      <path
        strokeWidth="1.5"
        strokeLinecap="round"
        d="M8 14l-3 8M16 14l3 8M6 22h12"
      />
    </svg>
  )
}

export function TechStack() {
  return (
    <section id="skills" className="panel panel--tech">
      <h2 className="panel__title">Tech Stack</h2>
      <div className="tech__cloud glass-card glass-card--tight">
        <p className="tech__cloud-label">Skill cloud</p>
        <div className="tech__cloud-pills">
          {GROUPS.flatMap((g) =>
            g.items.map((item) => (
              <span key={`${g.title}-${item}`} className={`pill pill--${g.variant}`}>
                {item}
              </span>
            )),
          )}
        </div>
      </div>
      <div className="tech__categories">
        {GROUPS.map((g) => (
          <div key={g.title} className="tech__cat">
            <h3 className="tech__cat-title">{g.title}</h3>
            <ul className="tech__cat-list">
              {g.items.map((item) => (
                <li key={item}>
                  <span className={`pill pill--${g.variant}`}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="achievements-block">
        <h3 className="achievements-block__title">Achievements</h3>
        <div className="achievements-block__grid">
          {ACHIEVEMENTS.map((a) => (
            <div key={a.title} className="achievement-tile glass-card glass-card--tight">
              <div className="achievement-tile__icon">
                <AchievementIcon type={a.icon} />
              </div>
              <p className="achievement-tile__text">{a.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
