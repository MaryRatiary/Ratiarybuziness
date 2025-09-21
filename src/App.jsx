import { useEffect } from 'react'
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

  useEffect(() => {
    // background removed from App: each page provides its own visual background
    return () => {}
  }, [])

  return (
    <>
      {/* background removed from App — pages manage their own background */}

      <div className="app-root" style={{position: 'relative', zIndex: 2, minHeight: '100vh', color: '#e6f0ff', display: 'flex', flexDirection: 'column'}}>
        <nav className="futuristic-nav ">
          <div className="nav-left">
            <div className="logo">Bizina</div>
          </div>
          <div className="nav-center">
            <Link to="/" className="nav-link">Accueil</Link>
            <Link to="/services" className="nav-link">Services</Link>
            <Link to="/about" className="nav-link">À propos</Link>
            <Link to="/contact" className="nav-link">Nous contacter</Link>
          </div>
          <div className="nav-right">
            <button className="cta">Demandez un devis</button>
          </div>
        </nav>

        <main style={{flex: 1, position: 'relative'}}>
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
