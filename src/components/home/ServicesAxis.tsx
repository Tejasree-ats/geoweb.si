import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router'
import { services, serviceHref } from '@/data/services'
import { TypographyH2, TypographyH3 } from '@/components/ui/typography'

export function ServicesAxis({ compact = false }: { compact?: boolean }) {
  const visibleServices = compact ? services.slice(0, 4) : services

  return (
    <section aria-labelledby="services-title" className={`services-axis${compact ? ' services-axis--compact' : ''}`} id={compact ? 'services' : undefined}>
      <div className="section-heading-row">
        <div className="section-heading-copy" data-reveal>
          <p className="running-label">What we make</p>
          <TypographyH2 id="services-title">Ideas, made<br />useful.</TypographyH2>
        </div>
        <p className="section-aside" data-reveal>Four disciplines, one clear direction: make the next thing genuinely better.</p>
      </div>
      <div className="service-rail">
        <div className="service-rail__line" aria-hidden="true" />
        {visibleServices.map((service) => (
          <article className="service-station" data-reveal key={service.slug}>
            <span className="service-station__number">{service.number}</span>
            <span className="service-station__node" aria-hidden="true" />
            <div className="service-station__copy">
              <p className="service-station__marker">{service.marker}</p>
              <TypographyH3>{service.title}</TypographyH3>
              <p>{service.summary}</p>
            </div>
            <Link aria-label={`Ask GeoWeb about ${service.title}`} className="service-station__link" to={serviceHref(service.slug)}>
              <ArrowUpRight aria-hidden="true" size={17} />
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}
