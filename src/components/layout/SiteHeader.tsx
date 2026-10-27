import { useState } from 'react'
import { ArrowUpRight, Menu } from 'lucide-react'
import { Link, NavLink } from 'react-router'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

const navigation = [
  { label: 'Services', href: '/services' },
  { label: 'Selected work', href: '/work' },
  { label: 'Studio', href: '/about' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <Link className="wordmark" to="/" aria-label="GeoWeb Consultancy home">
        <span className="wordmark__name">geoweb</span>
        <span className="wordmark__dot" aria-hidden="true">.</span>
        <span className="wordmark__suffix">si</span>
      </Link>

      <nav className="desktop-nav" aria-label="Main navigation">
        {navigation.map((item) => (
          <NavLink
            className={({ isActive }) => `nav-link${isActive ? ' is-active' : ''}`}
            key={item.href}
            to={item.href}
          >
            {item.label}
          </NavLink>
        ))}
        <Button asChild className="pill-button pill-button--gold nav-contact">
          <Link to="/contact">Let’s talk <ArrowUpRight aria-hidden="true" size={16} /></Link>
        </Button>
      </nav>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            className="mobile-menu-trigger"
            size="icon"
            variant="ghost"
            aria-label="Open navigation menu"
          >
            <Menu size={22} aria-hidden="true" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="mobile-sheet" showCloseButton>
          <div className="mobile-sheet__intro">
            <SheetTitle className="mobile-sheet__title">GeoWeb Consultancy</SheetTitle>
            <SheetDescription className="mobile-sheet__description">
              Technology Meets Business Growth
            </SheetDescription>
          </div>
          <nav aria-label="Mobile navigation" className="mobile-sheet__nav">
            {navigation.map((item, index) => (
              <NavLink
                className={({ isActive }) =>
                  `mobile-nav-link${isActive ? ' is-active' : ''}`
                }
                key={item.href}
                onClick={() => setOpen(false)}
                to={item.href}
              >
                <span className="mobile-nav-link__number">0{index + 1}</span>
                <span className="mobile-nav-link__label">{item.label}</span>
                <ArrowUpRight aria-hidden="true" size={18} />
              </NavLink>
            ))}
            <NavLink
              className={({ isActive }) =>
                `mobile-nav-link mobile-nav-link--contact${isActive ? ' is-active' : ''}`
              }
              onClick={() => setOpen(false)}
              to="/contact"
            >
              <span className="mobile-nav-link__number">04</span>
              <span className="mobile-nav-link__label">Contact</span>
              <ArrowUpRight aria-hidden="true" size={18} />
            </NavLink>
          </nav>
          <p className="mobile-sheet__footnote">
            Practical technology & strategic business growth.
          </p>
        </SheetContent>
      </Sheet>
    </header>
  )
}
