const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content text-center">
          <h2 className="footer-logo">GARISSA<span className="text-gold">PRIME</span></h2>
          <div className="footer-nav">
            <a href="#about">The Farm</a>
            <span className="dot">•</span>
            <a href="#livestock">Livestock</a>
            <span className="dot">•</span>
            <a href="#crops">Harvest</a>
            <span className="dot">•</span>
            <a href="#contact">Contact</a>
          </div>

          <div className="contact-details mt-8">
            <p>Garissa County, Along Tana River, Kenya</p>
            <p>+254 700 000 000</p>
          </div>

          <p className="copyright">
            &copy; {new Date().getFullYear()} Garissa Prime Feedlot & Farm. All rights reserved.
          </p>
        </div>
      </div>

      <style>{`
          .footer {
            background-color: #050505;
            color: var(--white);
            padding: 6rem 0 3rem;
          }
          
          .footer-logo {
            font-size: 2rem;
            letter-spacing: 0.2em;
            text-transform: uppercase;
            color: var(--white);
            margin-bottom: 2rem;
            font-family: var(--font-body);
          }
          
          .footer-nav {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 1.5rem;
            margin-bottom: 3rem;
          }
          
          .footer-nav a {
            color: var(--stone);
            text-decoration: none;
            text-transform: uppercase;
            font-size: 0.8rem;
            letter-spacing: 0.1em;
            transition: color 0.3s;
          }
          
          .footer-nav a:hover {
            color: var(--gold);
          }
          
          .dot { color: var(--stone); }
          
          .contact-details p {
              color: var(--stone);
              margin-bottom: 0.5rem;
              font-size: 0.9rem;
          }
          
          .copyright {
            margin-top: 4rem;
            color: #333;
            font-size: 0.75rem;
            text-transform: uppercase;
            letter-spacing: 0.1em;
          }
        `}</style>
    </footer>
  );
};

export default Footer;

