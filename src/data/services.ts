export type ServiceSlug =
  | 'it-ai-digital'
  | 'websites-marketing'
  | 'business-development'
  | 'real-estate-hospitality'
  | 'food-events-community'
  | 'ai-software'
  | 'websites'
  | 'digital-marketing'
  | 'social-media'

export interface Service {
  slug: ServiceSlug
  number: string
  title: string
  shortTitle: string
  summary: string
  description: string
  deliverables: string[]
  marker: string
  iconName: 'cpu' | 'smartphone' | 'trending-up' | 'building' | 'utensils'
}

export const services: Service[] = [
  {
    slug: 'it-ai-digital',
    number: '01',
    title: 'IT, AI & Digital Technology',
    shortTitle: 'IT, AI & Tech',
    summary: 'AI-powered solutions, technology consulting, digital tools, and IT support.',
    description:
      'We build intelligent AI-powered solutions, provide dependable technology consulting, implement custom digital tools, and deliver comprehensive IT support that gives your team daily operational leverage.',
    deliverables: [
      'AI-powered solutions & automations',
      'Technology consulting & architecture',
      'Custom digital tools & workflows',
      'IT support & infrastructure management',
    ],
    marker: 'Intelligent systems. Practical leverage.',
    iconName: 'cpu',
  },
  {
    slug: 'websites-marketing',
    number: '02',
    title: 'Websites, Social Media & Digital Marketing',
    shortTitle: 'Web & Marketing',
    summary: 'Website design and development, social media management, branding, and digital marketing.',
    description:
      'From bespoke, high-performance websites and strategic branding to engaging social media management and measurable digital marketing campaigns, we build digital presences that convert.',
    deliverables: [
      'Website design & responsive development',
      'Social media management & strategy',
      'Brand identity & visual systems',
      'Performance marketing & SEO campaigns',
    ],
    marker: 'Distinctive presence. Real engagement.',
    iconName: 'smartphone',
  },
  {
    slug: 'business-development',
    number: '03',
    title: 'Business Development & Administration',
    shortTitle: 'Business & Ops',
    summary: 'Business support, operational assistance, administration, and growth strategies.',
    description:
      'We partner with businesses and entrepreneurs to streamline daily administration, optimise operational processes, and implement clear growth strategies that turn goals into sustainable reality.',
    deliverables: [
      'Strategic growth planning',
      'Operational support & workflow design',
      'Business administration assistance',
      'Capacity & process optimisation',
    ],
    marker: 'Structured operations. Clear direction.',
    iconName: 'trending-up',
  },
  {
    slug: 'real-estate-hospitality',
    number: '04',
    title: 'Real Estate, Hospitality & Tourism',
    shortTitle: 'Real Estate & Tourism',
    summary: 'Digital solutions and promotional support for real estate, accommodation, hospitality, and tourism businesses.',
    description:
      'Tailored digital platforms, booking solutions, and high-impact promotional support designed specifically for real estate portfolios, boutique accommodations, hospitality venues, and tourism organisations.',
    deliverables: [
      'Real estate & venue digital showcases',
      'Accommodation & booking integrations',
      'Tourism promotion & destination campaigns',
      'Guest experience & marketing touchpoints',
    ],
    marker: 'Inspiring spaces. Proven appeal.',
    iconName: 'building',
  },
  {
    slug: 'food-events-community',
    number: '05',
    title: 'Food Marketing, Events & Community Initiatives',
    shortTitle: 'Food, Events & Community',
    summary: 'Food business promotion, event support, marketing campaigns, and community-focused initiatives.',
    description:
      'Dynamic promotional marketing for culinary ventures and food businesses, end-to-end event production and marketing support, and impactful community initiatives that create lasting local connection.',
    deliverables: [
      'Food business & culinary branding',
      'Event promotion & marketing support',
      'Impactful multi-channel campaigns',
      'Community partnerships & initiatives',
    ],
    marker: 'Vibrant culture. Meaningful impact.',
    iconName: 'utensils',
  },
]

export function serviceHref(slug: ServiceSlug) {
  return `/contact?interest=${encodeURIComponent(slug)}`
}
