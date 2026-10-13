import { useState, useEffect } from 'react'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Journey', href: '#journey' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className={`site-header ${isScrolled ? 'site-header--scrolled' : ''}`}>
      <div className="site-header__inner">
        <a className="site-header__identity" href="#home" aria-label="Hamza portfolio home" onClick={closeMenu}>
          <span className="site-header__brand-name">HAMZA<span>.</span></span>
          <span className="site-header__brand-tag">Web Designer &amp; Dev</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="site-header__nav" aria-label="Main navigation">
          <ul className="site-header__nav-list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a className="site-header__nav-link" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right CTA & Mobile Toggle */}
        <div className="site-header__actions">
          <a className="site-header__cta" href="#contact">
            <span>Let's Talk</span>
            <span aria-hidden="true">✦</span>
          </a>

          <button
            className="site-header__toggle"
            type="button"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            <span className={`site-header__hamburger ${isMenuOpen ? 'is-active' : ''}`}>
              <span className="site-header__bar" />
              <span className="site-header__bar" />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        id="mobile-nav"
        className={`site-header__mobile-menu ${isMenuOpen ? 'is-open' : ''}`}
        aria-hidden={!isMenuOpen}
      >
        <nav aria-label="Mobile navigation">
          <ul className="site-header__mobile-list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a className="site-header__mobile-link" href={link.href} onClick={closeMenu}>
                  {link.label}
                  <span aria-hidden="true">↗</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="site-header__mobile-footer">
          <p>Available for creative web collaborations</p>
          <a className="site-header__mobile-cta" href="#contact" onClick={closeMenu}>
            Get in touch ✦
          </a>
        </div>
      </div>
    </header>
  )
}

export default Navbar
