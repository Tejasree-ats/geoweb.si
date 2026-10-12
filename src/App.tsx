import { BrowserRouter, Link, Route, Routes } from 'react-router'
import { SiteLayout } from '@/components/layout/SiteLayout'
import { TypographyH1 } from '@/components/ui/typography'
import { AboutPage } from '@/pages/AboutPage'
import { ContactPage } from '@/pages/ContactPage'
import { HomePage } from '@/pages/HomePage'
import { ServicesPage } from '@/pages/ServicesPage'
import { WorkDetailPage } from '@/pages/WorkDetailPage'
import { WorkPage } from '@/pages/WorkPage'

function NotFoundPage() {
  return (
    <section className="not-found-page section-shell">
      <p className="running-label">Wrong turn, lovely view.</p>
      <TypographyH1>This page<br /><em>isn’t on the map.</em></TypographyH1>
      <Link className="text-link" to="/">Return to GeoWeb <span aria-hidden="true">↗</span></Link>
    </section>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />} path="/">
          <Route element={<HomePage />} index />
          <Route element={<ServicesPage />} path="services" />
          <Route element={<WorkPage />} path="work" />
          <Route element={<WorkDetailPage />} path="work/:slug" />
          <Route element={<AboutPage />} path="about" />
          <Route element={<ContactPage />} path="contact" />
          <Route element={<NotFoundPage />} path="*" />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
