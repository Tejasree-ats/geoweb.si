import { ArrowDownRight, ArrowUpRight, MoveUpRight } from 'lucide-react'
import { Link } from 'react-router'
import { Button } from '@/components/ui/button'
import { OrreryHero } from '@/components/home/OrreryHero'
import { ServicesAxis } from '@/components/home/ServicesAxis'
import { WorkWall } from '@/components/work/WorkWall'
import { TypographyH2 } from '@/components/ui/typography'

export function HomePage() {
  return (
    <>
      <OrreryHero />
      <ServicesAxis compact />

      <section aria-labelledby="work-preview-title" className="featured-work section-shell">
        <div className="section-heading-row section-heading-row--work" data-reveal>
          <div>
            <p className="running-label">The work in motion</p>
            <TypographyH2 id="work-preview-title">A few possible<br />worlds.</TypographyH2>
          </div>
          <Link className="text-link" to="/work">All work <ArrowUpRight aria-hidden="true" size={16} /></Link>
        </div>
        <p className="concept-notice" data-reveal>Selected concept studies · made to explore the possibilities, not to pass for client case studies.</p>
        <WorkWall featured />
      </section>

      <section className="studio-statement section-shell" data-reveal>
        <div className="statement-index"><span>THE GEOWEB POINT OF VIEW</span><span className="statement-index__node" aria-hidden="true" /></div>
        <div className="statement-main">
          <TypographyH2>Technology should feel like a <em>clearer way forward.</em></TypographyH2>
          <p>We pair thoughtful software and distinctive design with practical marketing—so your next move doesn’t feel like three different projects.</p>
          <Link className="text-link" to="/about">Meet the studio <ArrowUpRight aria-hidden="true" size={16} /></Link>
        </div>
        <span className="statement-glint" aria-hidden="true"><MoveUpRight size={20} /></span>
      </section>

      <section className="home-contact section-shell" data-reveal>
        <div className="home-contact__copy">
          <p className="running-label">A good first move</p>
          <TypographyH2>Bring us the<br /><em>interesting bit.</em></TypographyH2>
          <p>A new idea, a stuck workflow, or a website ready for its next life—we’re all ears.</p>
        </div>
        <Button asChild className="pill-button pill-button--gold home-contact__button">
          <Link to="/contact">Tell us about it <ArrowDownRight aria-hidden="true" size={17} /></Link>
        </Button>
      </section>
    </>
  )
}
