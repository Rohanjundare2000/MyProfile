import './App.css'
import { BuiltInProduction } from './components/BuiltInProduction'
import { Contact } from './components/Contact'
import { Experience } from './components/Experience'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { TechStack } from './components/TechStack'
import { ThemeToggle } from './components/ThemeToggle'
import { HashRouter } from 'react-router-dom'  // Keep this import

const NAV = [
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#production', label: 'Production' },
  { href: '#skills', label: 'Stack' },
  { href: '#contact', label: 'Contact' },
]

function App() {
  return (
    <HashRouter>  {/* ← ADD THIS wrapper */}
      <div className="app">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <nav className="nav" aria-label="Primary">
          <div className="nav__inner">
            <a className="nav__brand" href="#hero">
              RMJ
            </a>
            <div className="nav__right">
              <ul className="nav__links">
                {NAV.map((item) => (
                  <li key={item.href}>
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
              <ThemeToggle />
            </div>
          </div>
        </nav>
        <main id="main" className="bento">
          <div className="bento__hero bento__hero--landing">
            <Hero />
          </div>
          <div className="bento__projects">
            <Projects />
          </div>
          <div className="bento__experience">
            <Experience />
          </div>
          <div className="bento__production">
            <BuiltInProduction />
          </div>
          <div className="bento__tech">
            <TechStack />
          </div>
          <div className="bento__contact">
            <Contact />
          </div>
        </main>
      </div>
    </HashRouter>  {/* ← CLOSE the wrapper */}
  )
}

export default App