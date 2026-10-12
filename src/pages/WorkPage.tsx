import { useMemo, useState } from 'react'
import { Link } from 'react-router'
import { Button } from '@/components/ui/button'
import { projects, categories, type WorkFilter } from '@/data/projects'
import { WorkTile } from '@/components/work/WorkTile'
import { TypographyH1 } from '@/components/ui/typography'

export function WorkPage() {
  const [filter, setFilter] = useState<WorkFilter>('All work')
  const visibleProjects = useMemo(
    () => filter === 'All work' ? projects : projects.filter((project) => project.category === filter),
    [filter],
  )

  return (
    <div className="inner-page work-page">
      <section className="page-hero page-hero--work" data-reveal>
        <div className="page-hero__copy">
          <p className="running-label">Work · Concept studies</p>
          <TypographyH1>What if we<br /><em>tried this?</em></TypographyH1>
          <p>A set of self-initiated directions. A glimpse at how GeoWeb thinks across software, design, and growth.</p>
        </div>
        <Link className="page-side-note" to="/contact">Have a real brief?<span>Let’s hear it ↗</span></Link>
      </section>
      <section className="portfolio-section section-shell" aria-label="Portfolio concepts">
        <div className="portfolio-filter-wrap">
          <p className="portfolio-count" aria-live="polite">{String(visibleProjects.length).padStart(2, '0')} explorations</p>
          <div className="portfolio-filter" role="group" aria-label="Filter projects by discipline">
            {categories.map((category) => (
              <Button
                aria-pressed={filter === category}
                className={`filter-chip${filter === category ? ' is-selected' : ''}`}
                key={category}
                onClick={() => setFilter(category)}
                size="sm"
                type="button"
                variant="outline"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
        {visibleProjects.length > 0 ? (
          <div className={`work-wall work-wall--portfolio${filter === 'All work' ? '' : ' work-wall--filtered'}`}>
            {visibleProjects.map((project, index) => (
              <WorkTile className={`work-tile--position-${(index % 4) + 1}`} key={project.slug} project={project} />
            ))}
          </div>
        ) : <p className="empty-state">No studies here yet. Try a different direction.</p>}
      </section>
    </div>
  )
}
