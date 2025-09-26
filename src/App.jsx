import { useEffect, useState } from 'react'
import { Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom'
import './App.css'
import Accueil from './pages/Accueils'
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

function Landing() {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    // if another route navigated here with a requested scroll target, perform it
    if (location.state && location.state.scrollTo) {
      const id = location.state.scrollTo
      // slight delay to allow components to mount
      setTimeout(() => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
        // clear the navigation state so repeated renders don't re-scroll
        navigate(location.pathname, { replace: true, state: {} })
      }, 120)
    }
  }, [location, navigate])

  // Compose Accueil then Services so the home page scrolls from one to the other
  return (
    <div className="landing-composite">
      <Accueil />
      <Services />
    </div>
  )
}

export default function App() {
  // allow page scrolling by default; remove global lock so content sections can scroll

  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

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

  function handleNavClick(target) {
    setMenuOpen(false)
    if (target === 'accueil') {
      if (location.pathname === '/') {
        const el = document.getElementById('accueil')
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      } else {
        navigate('/', { state: { scrollTo: 'accueil' } })
      }
      return
    }

    if (target === 'services') {
      if (location.pathname === '/') {
        const el = document.getElementById('services')
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      } else {
        navigate('/', { state: { scrollTo: 'services' } })
      }
      return
    }

    if (target === 'about') {
      navigate('/about')
      return
    }

    if (target === 'contact') {
      navigate('/contact')
      return
    }
  }

  return (
    <>
      {/* background removed from App — pages manage their own background */}

      <div className="app-root" style={{position: 'relative', zIndex: 2, minHeight: '100vh', color: '#e6f0ff', display: 'flex', flexDirection: 'column'}}>
        <nav className={`futuristic-nav ${menuOpen ? 'menu-open' : ''}`}>
          <div className="nav-left">
            <div className="logo">TiaryConsulting</div>
          </div>

          <div className={`nav-center ${menuOpen ? 'open' : ''}`}>
            <button className="nav-link" onClick={() => handleNavClick('accueil')}>Accueil</button>
            <button className="nav-link" onClick={() => handleNavClick('services')}>Services</button>
            <button className="nav-link" onClick={() => handleNavClick('about')}>À propos</button>
            <button className="nav-link" onClick={() => handleNavClick('contact')}>Nous contacter</button>
          </div>

          <div className="nav-right">
            <button className="cta" onClick={() => handleNavClick('contact')}>Demandez un devis</button>
            <button className={`nav-toggle ${menuOpen ? 'open' : ''}`} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
              <span className="hamburger" />
            </button>
          </div>

          {menuOpen && (
            <div className="mobile-menu" onClick={() => setMenuOpen(false)}>
              <div className="mobile-menu-inner" onClick={(e) => e.stopPropagation()}>
                <button className="nav-link" onClick={() => handleNavClick('accueil')}>Accueil</button>
                <button className="nav-link" onClick={() => handleNavClick('services')}>Services</button>
                <button className="nav-link" onClick={() => handleNavClick('about')}>À propos</button>
                <button className="nav-link" onClick={() => handleNavClick('contact')}>Nous contacter</button>
                <button className="cta fullwidth" onClick={() => handleNavClick('contact')}>Demandez un devis</button>
              </div>
            </div>
          )}
        </nav>

        <main className="page-root" aria-hidden={menuOpen} style={{flex: 1, position: 'relative'}}>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </>
  )
}
