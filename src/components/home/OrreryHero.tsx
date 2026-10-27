import { Suspense, lazy, useEffect, useRef, useState, type CSSProperties, type PointerEvent } from 'react'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { gsap } from 'gsap'
import { Link } from 'react-router'
import { Button } from '@/components/ui/button'
import { TypographyH1 } from '@/components/ui/typography'

const OrreryScene = lazy(() => import('./OrreryScene').then((module) => ({ default: module.OrreryScene })))

export function OrreryHero() {
  const heroRef = useRef<HTMLElement>(null)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReducedMotion(preference.matches)
    update()
    preference.addEventListener('change', update)
    return () => preference.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    if (reducedMotion) return
    const context = gsap.context(() => {
      gsap.fromTo('[data-hero-copy]', { autoAlpha: 0, y: 30 }, { autoAlpha: 1, y: 0, duration: 0.85, stagger: 0.1, ease: 'power3.out', delay: 0.18 })
      gsap.fromTo('[data-hero-caption]', { autoAlpha: 0 }, { autoAlpha: 1, duration: 1.2, ease: 'power2.out', delay: 0.7 })
    }, heroRef)
    return () => context.revert()
  }, [reducedMotion])

  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    event.currentTarget.style.setProperty('--pointer-x', `${((event.clientX - rect.left) / rect.width) * 100}%`)
    event.currentTarget.style.setProperty('--pointer-y', `${((event.clientY - rect.top) / rect.height) * 100}%`)
  }

  return (
    <section
      aria-labelledby="home-title"
      className="orrery-hero"
      onPointerMove={handlePointerMove}
      ref={heroRef}
      style={{ '--pointer-x': '72%', '--pointer-y': '43%' } as CSSProperties}
    >
      <Suspense fallback={<div className="orrery-fallback" aria-hidden="true" />}>
        <OrreryScene reducedMotion={reducedMotion} />
      </Suspense>
      <div className="hero-grid-mark" aria-hidden="true" />
      <div className="hero-axis hero-axis--one" aria-hidden="true" />
      <div className="hero-axis hero-axis--two" aria-hidden="true" />
      <div className="orrery-hero__copy">
        <p className="hero-overline" data-hero-copy>
          <span className="live-dot" /> GeoWeb Consultancy
        </p>
        <TypographyH1 id="home-title" data-hero-copy>
          <span className="hero-brand-kicker">GeoWeb Consultancy —</span>
          Technology Meets<br />
          <em>Business Growth.</em>
        </TypographyH1>
        <p className="hero-summary" data-hero-copy>
          GeoWeb Consultancy helps businesses, entrepreneurs, and organisations grow through technology, digital innovation, and strategic business support. From AI-powered solutions and website development to digital marketing, business administration, real estate, hospitality, tourism, food marketing, and community initiatives, we connect ideas with practical solutions that create meaningful impact.
        </p>
        <div className="hero-actions" data-hero-copy>
          <Button asChild className="pill-button pill-button--gold">
            <Link to="/contact">Work with us <ArrowUpRight aria-hidden="true" size={16} /></Link>
          </Button>
          <a className="text-link hero-secondary" href="#services">
            Explore our services <ArrowDown aria-hidden="true" size={15} />
          </a>
        </div>
      </div>
      <div className="hero-instrument" data-hero-caption aria-hidden="true">
        <span className="instrument-line" />
        <span>DRAG TO ORIENT<br /><b>A SYSTEM IN MOTION</b></span>
      </div>
      <a aria-label="Scroll to the services" className="hero-scroll" href="#services">
        <span>Scroll to explore</span><ArrowDown aria-hidden="true" size={15} />
      </a>
    </section>
  )
}
