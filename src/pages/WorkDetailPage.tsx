import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { Link, useParams } from 'react-router'
import { Button } from '@/components/ui/button'
import { projects } from '@/data/projects'
import { TypographyH1, TypographyH2 } from '@/components/ui/typography'

export function WorkDetailPage() {
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug)

  if (!project) {
    return (
      <div className="not-found-page section-shell">
        <p className="running-label">Project not found</p>
        <TypographyH1>This direction<br /><em>isn’t on the map.</em></TypographyH1>
        <Link className="text-link" to="/work"><ArrowLeft aria-hidden="true" size={16} /> Back to selected work</Link>
      </div>
    )
  }

  const nextProject = projects[(projects.indexOf(project) + 1) % projects.length]

  return (
    <article className="project-page inner-page">
      <div className="project-back"><Link className="text-link" to="/work"><ArrowLeft aria-hidden="true" size={15} /> All studies</Link><span>Concept study</span></div>
      <header className="project-header section-shell" data-reveal>
        <p className="running-label">{project.category} · Independent exploration</p>
        <TypographyH1>{project.title}</TypographyH1>
        <p>{project.summary}</p>
      </header>
      <figure className="project-cover" data-reveal>
        <div className="project-cover__art" aria-hidden="true" />
        <img alt={project.imageAlt} onError={(event) => { event.currentTarget.style.display = 'none' }} src={project.image} />
        <figcaption><span>GeoWeb concept work</span><span>Direction, not client claim.</span></figcaption>
      </figure>
      <div className="project-narrative section-shell">
        <section data-reveal>
          <p className="running-label">The question</p>
          <TypographyH2>{project.challenge}</TypographyH2>
        </section>
        <section data-reveal>
          <p className="running-label">The direction</p>
          <p>{project.approach}</p>
        </section>
        <section data-reveal>
          <p className="running-label">The honest outcome</p>
          <p>{project.outcome}</p>
        </section>
      </div>
      <div className="project-next section-shell" data-reveal>
        <span className="running-label">Keep exploring</span>
        <Link to={`/work/${nextProject.slug}`}><span><small>Next direction</small>{nextProject.title}</span><ArrowUpRight aria-hidden="true" size={19} /></Link>
      </div>
      <div className="project-cta section-shell">
        <TypographyH2>Have a real<br /><em>thing in mind?</em></TypographyH2>
        <Button asChild className="pill-button pill-button--gold"><Link to="/contact">Let’s work on it <ArrowUpRight aria-hidden="true" size={16} /></Link></Button>
      </div>
    </article>
  )
}
