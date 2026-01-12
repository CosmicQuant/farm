import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container flex justify-between items-center">
        <a href="#" className="logo">
          GARISSA<span className="text-gold">PRIME</span>
        </a>

        {/* Desktop Menu */}
        <div className="nav-links desktop-only flex items-center">
          <a href="#about" className="nav-link">The Farm</a>
          <a href="#livestock" className="nav-link">Livestock</a>
          <a href="#crops" className="nav-link">Harvest</a>
          <a href="#contact" className="nav-cta">Inquire</a>
        </div>

        {/* Mobile Toggle */}
        <button className="mobile-toggle" onClick={toggleMenu} aria-label="Toggle Menu">
          <span className={`bar ${mobileMenuOpen ? 'open' : ''}`}></span>
          <span className={`bar ${mobileMenuOpen ? 'open' : ''}`}></span>
          <span className={`bar ${mobileMenuOpen ? 'open' : ''}`}></span>
        </button>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
          <div className="mobile-nav-links flex flex-col items-center">
            <a href="#about" className="mobile-nav-link" onClick={toggleMenu}>The Farm</a>
            <a href="#livestock" className="mobile-nav-link" onClick={toggleMenu}>Livestock</a>
            <a href="#crops" className="mobile-nav-link" onClick={toggleMenu}>Harvest</a>
            <a href="#contact" className="btn btn-outline" onClick={toggleMenu} style={{ marginTop: '1rem' }}>Inquire</a>
          </div>
        </div>
      </div>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          padding: 2rem 0;
          z-index: 1000;
          transition: all 0.4s ease;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }
        
        .navbar.scrolled {
          background: var(--primary);
          padding: 1rem 0;
          border-bottom: none;
          box-shadow: var(--shadow-soft);
        }
        
        .logo {
          font-family: var(--font-body);
          font-size: 1.1rem;
          font-weight: 600;
          letter-spacing: 0.2em;
          color: var(--white);
          text-decoration: none;
          text-transform: uppercase;
          z-index: 1001;
        }
        
        .nav-links {
          gap: 3rem;
        }
        
        .nav-link {
          color: var(--white);
          text-decoration: none;
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          transition: color 0.3s;
          opacity: 0.8;
        }
        
        .nav-link:hover {
          color: var(--gold);
          opacity: 1;
        }
        
        .nav-cta {
          padding: 0.75rem 1.5rem;
          border: 1px solid var(--white);
          color: var(--white);
          text-decoration: none;
          text-transform: uppercase;
          font-size: 0.75rem;
          letter-spacing: 0.15em;
          transition: all 0.3s;
        }
        
        .nav-cta:hover {
          background: var(--gold);
          border-color: var(--gold);
          color: var(--primary);
        }

        /* Mobile Styles */
        .mobile-toggle {
          display: none;
          flex-direction: column;
          gap: 6px;
          background: none;
          border: none;
          cursor: pointer;
          z-index: 1001;
        }

        .bar {
          display: block;
          width: 25px;
          height: 2px;
          background-color: var(--white);
          transition: all 0.3s ease;
        }

        .bar.open:nth-child(1) { transform: rotate(45deg) translate(5px, 6px); }
        .bar.open:nth-child(2) { opacity: 0; }
        .bar.open:nth-child(3) { transform: rotate(-45deg) translate(5px, -6px); }

        .mobile-menu {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: var(--primary);
          display: flex;
          justify-content: center;
          align-items: center;
          transform: translateY(-100%);
          transition: transform 0.4s ease-in-out;
          z-index: 1000;
        }

        .mobile-menu.open {
          transform: translateY(0);
        }

        .mobile-nav-links {
          width: 100%;
          text-align: center;
        }

        .mobile-nav-link {
          font-family: var(--font-heading);
          font-size: 2rem;
          color: var(--white);
          text-decoration: none;
          margin-bottom: 2rem;
          transition: color 0.3s;
          display: block;
        }

        .mobile-nav-link:hover {
          color: var(--gold);
        }

        @media (max-width: 768px) {
          .desktop-only { display: none; }
          .mobile-toggle { display: flex; }
          .navbar { padding: 1rem 0; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
