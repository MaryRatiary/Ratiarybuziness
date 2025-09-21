import { useEffect, useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Accueil from './pages/acceuil'
import Services from './pages/Services'

function About() {
  return (
    <div style={{padding: 40}}>
      <h2>À propos</h2>
      <p>Nous sommes une entreprise spécialisée en développement web, assistants virtuels et montage vidéo.</p>
    </div>
  )
}

function Contact() {
  return (
    <div style={{padding: 40}}>
      <h2>Nous contacter</h2>
      <p>Envoyez-nous un message pour un devis personnalisé.</p>
    </div>
  )
}

export default function App() {
  // allow page scrolling by default; remove global lock so content sections can scroll

  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    // background removed from App: each page provides its own visual background
    return () => {}
  }, [])

  // prevent background scrolling and interactions when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
      document.body.classList.add('menu-open')
    } else {
      document.body.style.overflow = ''
      document.body.classList.remove('menu-open')
    }
    return () => { document.body.style.overflow = ''; document.body.classList.remove('menu-open') }
  }, [menuOpen])

  return (
    <>
      {/* background removed from App — pages manage their own background */}

      <div className="app-root" style={{position: 'relative', zIndex: 2, minHeight: '100vh', color: '#e6f0ff', display: 'flex', flexDirection: 'column'}}>
        <nav className={`futuristic-nav ${menuOpen ? 'menu-open' : ''}`}>
          <div className="nav-left">
            <div className="logo">TiaryConsulting</div>
          </div>

          <div className={`nav-center ${menuOpen ? 'open' : ''}`}>
            <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>Accueil</Link>
            <Link to="/services" className="nav-link" onClick={() => setMenuOpen(false)}>Services</Link>
            <Link to="/about" className="nav-link" onClick={() => setMenuOpen(false)}>À propos</Link>
            <Link to="/contact" className="nav-link" onClick={() => setMenuOpen(false)}>Nous contacter</Link>
          </div>

          <div className="nav-right">
            <button className="cta">Demandez un devis</button>
            <button className={`nav-toggle ${menuOpen ? 'open' : ''}`} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
              <span className="hamburger" />
            </button>
          </div>

          {menuOpen && (
            <div className="mobile-menu" onClick={() => setMenuOpen(false)}>
              <div className="mobile-menu-inner" onClick={(e) => e.stopPropagation()}>
                <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>Accueil</Link>
                <Link to="/services" className="nav-link" onClick={() => setMenuOpen(false)}>Services</Link>
                <Link to="/about" className="nav-link" onClick={() => setMenuOpen(false)}>À propos</Link>
                <Link to="/contact" className="nav-link" onClick={() => setMenuOpen(false)}>Nous contacter</Link>
                <button className="cta fullwidth">Demandez un devis</button>
              </div>
            </div>
          )}
        </nav>

        <main aria-hidden={menuOpen} style={{flex: 1, position: 'relative'}}>
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </>
  )
}
