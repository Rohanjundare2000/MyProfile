const BULLETS = [
  'Designed RBAC dashboards',
  'Managed zero-downtime releases',
  'Integrated regulatory eSign APIs',
]

export function Experience() {
  return (
    <section id="experience" className="panel panel--experience">
      <h2 className="panel__title">Experience</h2>
      <div className="exp__header">
        <div>
          <p className="exp__role">Software Developer — Definedge Securities Pvt Ltd</p>
          <p className="exp__tenure">1.7+ Years</p>
        </div>
        <span className="exp__badge">Impact</span>
      </div>
      <p className="exp__project">KYC &amp; Onboarding Platform (2M+ Users)</p>
      <ul className="exp__bullets">
        {BULLETS.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <div className="exp__timeline" aria-hidden>
        <div className="exp__timeline-track" />
        <div className="exp__timeline-node" />
      </div>
      <p className="exp__metrics">
        <span>Architected KYC for 2M+ Users</span>
        <span className="exp__dot" aria-hidden />
        <span>Zero-Downtime Releases</span>
      </p>
    </section>
  )
}
