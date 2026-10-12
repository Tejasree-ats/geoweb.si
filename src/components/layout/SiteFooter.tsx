import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router'

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__top">
        <Link className="wordmark wordmark--footer" to="/" aria-label="GeoWeb home">
          <span className="wordmark__name">geoweb</span><span className="wordmark__dot" aria-hidden="true">.</span><span className="wordmark__suffix">si</span>
        </Link>
        <p>Good digital has<br />a sense of direction.</p>
        <Link className="footer-contact-link" to="/contact">Have a project in mind? <ArrowUpRight aria-hidden="true" size={17} /></Link>
      </div>
      <div className="site-footer__bottom">
        <span>Independent digital studio · Slovenia</span>
        <nav aria-label="Footer navigation">
          <Link to="/services">Services</Link>
          <Link to="/work">Work</Link>
          <Link to="/about">Studio</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <span>© 2026 GeoWeb</span>
      </div>
    </footer>
  )
}
