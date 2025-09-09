import React, { useState } from 'react'
import logo from '../public/logo.svg'
import { Link, NavLink } from 'react-router-dom'
import '../styles/Navbar.css'

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/projects', label: 'Projects' },
    { to: '/services', label: 'Services' },
    { to: '/contact', label: 'Contact' },
  ]

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className="nav" aria-label="Main">
      <div className="container">
        <Link to="/" className="logo" aria-label="IOS INTERIORS">
          <img className="logoImg" src={logo} alt="IOS INTERIORS logo" />
          IOS INTERIORS
        </Link>
        
        {/* Hamburger Menu Button */}
        <button 
          className={`hamburger ${isMenuOpen ? 'hamburger-open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        {/* Navigation Links */}
        <ul className={`links ${isMenuOpen ? 'links-open' : ''}`}>
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) => (isActive ? 'link active' : 'link')}
                onClick={closeMenu}
              >
                {l.label}
              </NavLink>
            </li>
          ))}
          <li className="mobile-cta-wrapper">
            <button className="nav-cta mobile-cta" type="button" onClick={closeMenu}>
              Get Started
            </button>
          </li>
        </ul>
        
        {/* Desktop CTA Button */}
        <button className="nav-cta desktop-cta" type="button" onClick={() => {
  const section = document.querySelector('.browse-section');
  if (section) section.scrollIntoView({ behavior: 'smooth' });
}}>
  Get Started
</button>
      </div>
    </nav>
  )
}

export default Navbar