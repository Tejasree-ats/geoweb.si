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
import { Button } from '@/components/ui/button'
import { services, serviceHref } from '@/data/services'
import { TypographyH1, TypographyH2, TypographyH3 } from '@/components/ui/typography'

const iconMap: Record<string, LucideIcon> = {
  cpu: Cpu,
  smartphone: Smartphone,
  'trending-up': TrendingUp,
  building: Building2,
  utensils: UtensilsCrossed,
}

export function ServicesPage() {
  return (
    <div className="inner-page services-page">
      <section className="page-hero page-hero--service">
        <div className="page-hero__copy" data-reveal>
          <p className="running-label">Services · Five core disciplines</p>
          <TypographyH1>
            One consultancy.<br />
            <em>Comprehensive impact.</em>
          </TypographyH1>
          <p>
            From AI-powered tools and responsive websites to business administration, real estate promotion, and community initiatives—we connect ideas with practical solutions that create meaningful growth.
          </p>
        </div>
        <div className="service-hero-figure" aria-hidden="true" data-reveal>
          <div className="service-hero-figure__ring service-hero-figure__ring--outer" />
          <div className="service-hero-figure__ring service-hero-figure__ring--inner" />
          <span className="service-hero-figure__core" />
          <span className="service-hero-figure__pin service-hero-figure__pin--one" />
          <span className="service-hero-figure__pin service-hero-figure__pin--two" />
        </div>
      </section>

      <section className="service-details section-shell" aria-label="GeoWeb services">
        <div className="service-details__rail" aria-hidden="true">
          <span>THE FIVE DISCIPLINES</span>
          <span className="rail-point" />
        </div>
        <div className="service-details__list">
          {services.map((service) => {
            const Instrument = iconMap[service.iconName] ?? Cpu
            return (
              <article className="service-detail" data-reveal id={service.slug} key={service.slug}>
                <div className="service-detail__number">{service.number}</div>
                <div className="service-detail__body">
                  <div className="service-detail__topline">
                    <span className="service-detail__instrument">
                      <Instrument aria-hidden="true" size={18} strokeWidth={1.8} />
                      {service.shortTitle}
                    </span>
                    <span className="service-detail__marker">{service.marker}</span>
                  </div>
                  <TypographyH3>{service.title}</TypographyH3>
                  <p className="service-detail__summary">{service.description}</p>
                  <ul className="deliverables-list" aria-label={`Deliverables for ${service.title}`}>
                    {service.deliverables.map((deliverable) => (
                      <li key={deliverable}>{deliverable}</li>
                    ))}
                  </ul>
                  <Button asChild className="text-link service-detail__cta" variant="link">
                    <Link to={serviceHref(service.slug)}>
                      Explore this direction <ArrowUpRight aria-hidden="true" size={16} />
                    </Link>
                  </Button>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      <section className="service-outro section-shell" data-reveal>
        <p className="running-label">Not sure where to begin?</p>
        <TypographyH2>That’s usually<br />where we start.</TypographyH2>
        <p className="service-outro__subtext">
          Tell us about your business, the challenge you’re looking to solve, or the opportunity you want to capture.
        </p>
        <Button asChild className="pill-button pill-button--gold">
          <Link to="/contact">
            Talk through your idea <ArrowUpRight aria-hidden="true" size={16} />
          </Link>
        </Button>
      </section>
    </div>
  )
}
