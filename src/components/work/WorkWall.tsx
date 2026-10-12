import { projects } from '@/data/projects'
import { WorkTile } from './WorkTile'

export function WorkWall({ featured = false }: { featured?: boolean }) {
  const items = featured ? projects.slice(0, 3) : projects

  return (
    <div className={`work-wall${featured ? ' work-wall--featured' : ''}`}>
      {items.map((project, index) => (
        <WorkTile
          className={`work-tile--position-${index + 1}`}
          key={project.slug}
          project={project}
        />
      ))}
    </div>
  )
}
