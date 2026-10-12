import { ArrowUpRight, Plus } from 'lucide-react'
import { Link } from 'react-router'
import type { Project } from '@/data/projects'

export function WorkTile({ project, className = '' }: { project: Project; className?: string }) {
  return (
    <Link className={`work-tile ${className}`} to={`/work/${project.slug}`}>
      <div className="work-tile__image-wrap">
        <div className="work-tile__image-art" aria-hidden="true" />
        <img alt={project.imageAlt} className="work-tile__image" loading="lazy" onError={(event) => { event.currentTarget.style.display = 'none' }} src={project.image} />
        <span aria-hidden="true" className="work-tile__corner"><Plus size={17} /></span>
        <span className="work-tile__caption-outside">{project.category}<ArrowUpRight aria-hidden="true" size={14} /></span>
      </div>
      <div className="work-tile__title-row">
        <h3>{project.title}</h3>
        <span className="concept-mark">Concept study</span>
      </div>
      <p className="work-tile__summary">{project.summary}</p>
    </Link>
  )
}
