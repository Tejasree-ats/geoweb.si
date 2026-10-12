import { ArrowUpRight, Compass, Earth, Orbit, RadioTower } from 'lucide-react'
import { Link } from 'react-router'
import { Button } from '@/components/ui/button'
import { services, serviceHref } from '@/data/services'
import { TypographyH1, TypographyH2, TypographyH3 } from '@/components/ui/typography'

const instruments = [Orbit, Compass, Earth, RadioTower]

export function ServicesPage() {
  return (
    <div className="inner-page services-page">
      <section className="page-hero page-hero--service">
        <div className="page-hero__copy" data-reveal>
          <p className="running-label">Services · Four points of view</p>
          <TypographyH1>One studio.<br /><em>Useful range.</em></TypographyH1>
          <p>Bring the moving parts together: the software, the experience, and the story that helps the right people find it.</p>
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
        <div className="service-details__rail" aria-hidden="true"><span>START WITH THE FRICTION</span><span className="rail-point" /></div>
        <div className="service-details__list">
          {services.map((service, index) => {
            const Instrument = instruments[index]
            return (
              <article className="service-detail" data-reveal id={service.slug} key={service.slug}>
                <div className="service-detail__number">{service.number}</div>
                <div className="service-detail__body">
                  <div className="service-detail__topline">
                    <span className="service-detail__instrument"><Instrument aria-hidden="true" size={18} /> {service.shortTitle}</span>
                    <span className="service-detail__marker">{service.marker}</span>
                  </div>
                  <TypographyH3>{service.title}</TypographyH3>
                  <p className="service-detail__summary">{service.description}</p>
                  <ul className="deliverables-list">
                    {service.deliverables.map((deliverable) => <li key={deliverable}>{deliverable}</li>)}
                  </ul>
                  <Button asChild className="text-link service-detail__cta" variant="link">
                    <Link to={serviceHref(service.slug)}>Explore this direction <ArrowUpRight aria-hidden="true" size={16} /></Link>
                  </Button>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      <section className="service-outro section-shell" data-reveal>
        <p className="running-label">Not sure where it belongs?</p>
        <TypographyH2>That’s usually<br />where we start.</TypographyH2>
        <Button asChild className="pill-button pill-button--gold">
          <Link to="/contact">Talk through the idea <ArrowUpRight aria-hidden="true" size={16} /></Link>
        </Button>
      </section>
    </div>
  )
}
