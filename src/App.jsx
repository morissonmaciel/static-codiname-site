import { useState, useEffect } from 'react'
import { Routes, Route, NavLink, Link, useLocation } from 'react-router-dom'
import './App.css'
import Home from './pages/Home.jsx'
import Me from './pages/Me.jsx'
import Products from './pages/Products.jsx'
import Contacts from './pages/Contacts.jsx'

const navLinks = [
  { to: '/',         label: 'Início' },
  { to: '/products', label: 'Produtos' },
  { to: '/contacts', label: 'Contato' },
]

export default function App() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const location = useLocation()

  // Close drawer on route change
  useEffect(() => {
    setDrawerOpen(false)
  }, [location.pathname])

  // Close drawer on Escape key
  useEffect(() => {
    if (!drawerOpen) return
    const onKey = (e) => { if (e.key === 'Escape') setDrawerOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [drawerOpen])

  // Prevent body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [drawerOpen])

  return (
    <>
      {/* Topbar */}
      <header className="topbar">
        <div className="topbar-inner">
          <Link to="/" className="topbar-name" aria-label="Codiname — página inicial">
            <img src="/codiname_regular.png" alt="Codiname" style={{ height: '30px', width: 'auto', display: 'block' }} />
          </Link>

          {/* Desktop nav */}
          <nav className="topbar-nav-desktop" aria-label="Navegação principal">
            <ul className="topbar-nav">
              {navLinks.map(({ to, label }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    end={to === '/'}
                    className={({ isActive }) => isActive ? 'active' : undefined}
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile hamburger */}
          <button
            className={`hamburger${drawerOpen ? ' is-open' : ''}`}
            onClick={() => setDrawerOpen((v) => !v)}
            aria-label={drawerOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={drawerOpen}
          >
            <svg className="hamburger-icon hamburger-bars" width="20" height="14" viewBox="0 0 20 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <line x1="0" y1="1"  x2="20" y2="1"  />
              <line x1="0" y1="7"  x2="20" y2="7"  />
              <line x1="0" y1="13" x2="20" y2="13" />
            </svg>
            <svg className="hamburger-icon hamburger-x" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <line x1="1" y1="1" x2="15" y2="15" />
              <line x1="15" y1="1" x2="1"  y2="15" />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile drawer overlay */}
      {drawerOpen && (
        <div className="drawer-overlay" onClick={() => setDrawerOpen(false)} aria-hidden="true" />
      )}

      {/* Mobile drawer */}
      <div className={`drawer${drawerOpen ? ' drawer-open' : ''}`} aria-hidden={!drawerOpen}>
        <button className="drawer-close" onClick={() => setDrawerOpen(false)} aria-label="Fechar menu">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <line x1="1" y1="1" x2="15" y2="15" />
            <line x1="15" y1="1" x2="1"  y2="15" />
          </svg>
        </button>
        <nav aria-label="Menu mobile">
          <ul className="drawer-nav">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) => isActive ? 'active' : undefined}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <main>
        <Routes>
          <Route path="/"         element={<Home />} />
          <Route path="/me"       element={<Me />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-inner">
          <p className="footer-contact">
            <a href="mailto:contact@codiname.com">contact@codiname.com</a>
          </p>
          <p className="footer-contact">
            <a href="https://www.photogemini.app" target="_blank" rel="noopener noreferrer">
              www.photogemini.app
            </a>
          </p>
          <p className="footer-contact">
            <Link to="/me">Sobre o fundador</Link>
          </p>
          <p className="footer-copy">
            © {new Date().getFullYear()} Codiname · São Paulo, Brasil
          </p>
        </div>
      </footer>
    </>
  )
}
