import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Outlet, useLocation } from 'react-router'
import { SiteFooter } from './SiteFooter'
import { SiteHeader } from './SiteHeader'

gsap.registerPlugin(ScrollTrigger)

export function SiteLayout() {
  const { pathname } = useLocation()
  const contentRef = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    const content = contentRef.current
    if (!content) return

    const media = gsap.matchMedia(content)
    media.add('(prefers-reduced-motion: no-preference)', () => {
      const revealTargets = content.querySelectorAll<HTMLElement>('[data-reveal]')
      revealTargets.forEach((target) => {
        gsap.fromTo(
          target,
          { autoAlpha: 0, y: 24 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.72,
            ease: 'power3.out',
            scrollTrigger: { trigger: target, start: 'top 88%', once: true },
          },
        )
      })
    })

    return () => media.revert()
  }, [pathname])

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteHeader />
      <main className="route-main" id="main-content" ref={contentRef} tabIndex={-1}>
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  )
}
