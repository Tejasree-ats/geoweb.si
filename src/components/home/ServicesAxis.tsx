import {
  ArrowUpRight,
  Building2,
  Cpu,
  Smartphone,
  TrendingUp,
  UtensilsCrossed,
  type LucideIcon,
} from 'lucide-react'
import { Link } from 'react-router'
import { services, serviceHref } from '@/data/services'
import { TypographyH2, TypographyH3 } from '@/components/ui/typography'

const iconMap: Record<string, LucideIcon> = {
  cpu: Cpu,
  smartphone: Smartphone,
  'trending-up': TrendingUp,
  building: Building2,
  utensils: UtensilsCrossed,
}

export function ServicesAxis({ compact = false }: { compact?: boolean }) {
  // Always display all 5 core service areas
  const visibleServices = services

  return (
    <section
      aria-labelledby="services-title"
      className={`services-axis${compact ? ' services-axis--compact' : ''}`}
      id={compact ? 'services' : undefined}
    >
      <div className="section-heading-row">
        <div className="section-heading-copy" data-reveal>
          <p className="running-label">Core service areas</p>
          <TypographyH2 id="services-title">
            Five disciplines,<br />one clear direction.
          </TypographyH2>
        </div>
        <div className="section-heading-aside-wrap" data-reveal>
          <p className="section-aside">
            Connecting technology, digital innovation, and strategic business support to help organisations grow with clarity.
          </p>
          <Link className="text-link services-heading-link" to="/services">
            Full service scope <ArrowUpRight aria-hidden="true" size={16} />
          </Link>
        </div>
      </div>

      <div className="service-rail">
        <div className="service-rail__line" aria-hidden="true" />
        {visibleServices.map((service) => {
          const Icon = iconMap[service.iconName] ?? Cpu
          return (
            <article className="service-station" data-reveal key={service.slug}>
              <div className="service-station__lead">
                <span className="service-station__number">{service.number}</span>
                <span className="service-station__badge-icon" aria-hidden="true">
                  <Icon size={18} strokeWidth={1.8} />
                </span>
              </div>
              <span className="service-station__node" aria-hidden="true" />
              <div className="service-station__copy">
                <div className="service-station__topline">
                  <span className="service-station__short-title">
                    <Icon aria-hidden="true" size={14} strokeWidth={2} />
                    {service.shortTitle}
                  </span>
                  <span className="service-station__marker">{service.marker}</span>
                </div>
                <TypographyH3>{service.title}</TypographyH3>
                <p className="service-station__summary">{service.summary}</p>
              </div>
              <Link
                aria-label={`Inquire about ${service.title}`}
                className="service-station__link"
                to={serviceHref(service.slug)}
              >
                <ArrowUpRight aria-hidden="true" size={17} />
              </Link>
            </article>
          )
        })}
      </div>
    </section>
  )
}
