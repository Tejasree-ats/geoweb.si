export type ServiceSlug = 'ai-software' | 'websites' | 'digital-marketing' | 'social-media'

export interface Service {
  slug: ServiceSlug
  number: string
  title: string
  shortTitle: string
  summary: string
  description: string
  deliverables: string[]
  marker: string
}

export const services: Service[] = [
  {
    slug: 'ai-software',
    number: '01',
    title: 'AI-native software',
    shortTitle: 'Software',
    summary: 'Purpose-built tools that give good teams more room to think.',
    description:
      'We find the repetitive, expensive, quietly frustrating work in your business—and build software around how your people already work.',
    deliverables: ['Workflow discovery', 'AI product strategy', 'Custom web applications', 'Useful automations'],
    marker: 'Human decisions stay human.',
  },
  {
    slug: 'websites',
    number: '02',
    title: 'Websites with a point of view',
    shortTitle: 'Websites',
    summary: 'Digital front doors that feel as considered as the work behind them.',
    description:
      'From the first sketch to the final line of code, we make thoughtful, fast websites that make the right next step obvious.',
    deliverables: ['Positioning & content', 'Visual design systems', 'Responsive development', 'Launch & iteration'],
    marker: 'Made to be remembered.',
  },
  {
    slug: 'digital-marketing',
    number: '03',
    title: 'Digital marketing',
    shortTitle: 'Growth',
    summary: 'A clearer signal, in the places your next customer is looking.',
    description:
      'We make digital campaigns useful, measurable, and connected to your business—not a pile of disconnected posts and dashboards.',
    deliverables: ['Channel & audience strategy', 'Search and discovery', 'Campaign creative', 'Measurement & iteration'],
    marker: 'Clear intent. Measured progress.',
  },
  {
    slug: 'social-media',
    number: '04',
    title: 'Social media that sounds like you',
    shortTitle: 'Social',
    summary: 'Consistent, recognisable content without the content-factory feeling.',
    description:
      'We help teams find their voice, make a practical content rhythm, and create social work worth stopping for.',
    deliverables: ['Voice & content direction', 'Editorial calendars', 'Creative production', 'Community playbooks'],
    marker: 'A human voice, on purpose.',
  },
]

export function serviceHref(slug: ServiceSlug) {
  return `/contact?interest=${encodeURIComponent(slug)}`
}
