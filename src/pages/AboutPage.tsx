import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router'
import { Button } from '@/components/ui/button'
import { TypographyH1, TypographyH2, TypographyH3 } from '@/components/ui/typography'

const principles = [
  { number: '01', title: 'Start with the real thing.', body: 'The people. The problem. The bit that keeps coming up. We find the actual starting point before reaching for the tech.' },
  { number: '02', title: 'Use the right amount of machine.', body: 'AI belongs where it adds clarity, time, or possibility. People stay close to the decisions that matter.' },
  { number: '03', title: 'Make the whole journey make sense.', body: 'A useful tool, a good website, and the way people hear about it should feel like parts of the same idea.' },
]

export function AboutPage() {
  return (
    <div className="inner-page about-page">
      <section className="about-intro section-shell">
        <div className="about-intro__copy" data-reveal>
          <p className="running-label">Studio · Buhari Buildings, Chennai</p>
          <TypographyH1>Thoughtful by<br /><em>construction.</em></TypographyH1>
          <p>GeoWeb is an independent digital consultancy that brings software, design, and digital growth into the same conversation.</p>
        </div>
        <figure className="about-image" data-reveal>
          <div className="about-image__art" aria-hidden="true" />
          <img alt="Abstract editorial portrait with a brass visor, created as art direction rather than a depiction of GeoWeb staff." onError={(event) => { event.currentTarget.style.display = 'none' }} src="https://kombai-assets.b-cdn.net/generated_assets/55a5c0d815684029b26b3279ca8e8898.jpg" />
          <figcaption>Curiosity is part of the process.</figcaption>
        </figure>
      </section>

      <section aria-labelledby="about-belief-title" className="about-belief section-shell" data-reveal>
        <div className="about-belief__marker"><span className="statement-index__node" aria-hidden="true" />OUR BELIEF</div>
        <TypographyH2 id="about-belief-title">The best work happens when the right people, systems, and ideas <em>find each other.</em></TypographyH2>
        <p>We don’t show up with a fixed playbook. We listen, make sense of what’s already there, then build the next useful thing—together.</p>
      </section>

      <section className="principles-section section-shell" aria-labelledby="principles-title">
        <div className="principles-header" data-reveal>
          <p className="running-label">How we work</p>
          <TypographyH2 id="principles-title">Three things<br />we keep close.</TypographyH2>
        </div>
        <div className="principles-grid">
          {principles.map((principle) => (
            <article className="principle" data-reveal key={principle.number}>
              <span className="principle__number">{principle.number}</span>
              <TypographyH3>{principle.title}</TypographyH3>
              <p>{principle.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-cta section-shell" data-reveal>
        <div><p className="running-label">Work with us</p><TypographyH2>Let’s give it<br /><em>a clear direction.</em></TypographyH2></div>
        <Button asChild className="pill-button pill-button--gold"><Link to="/contact">Say hello <ArrowUpRight aria-hidden="true" size={16} /></Link></Button>
      </section>
    </div>
  )
}
