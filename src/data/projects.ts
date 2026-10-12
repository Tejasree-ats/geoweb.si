import type { ServiceSlug } from './services'

export type WorkCategory = 'AI & Software' | 'Web' | 'Growth' | 'Social'

export interface Project {
  slug: string
  title: string
  category: WorkCategory
  summary: string
  image: string
  imageAlt: string
  services: ServiceSlug[]
  concept: true
  challenge: string
  approach: string
  outcome: string
}

export const categories = ['All work', 'AI & Software', 'Web', 'Growth', 'Social'] as const
export type WorkFilter = (typeof categories)[number]

export const projects: Project[] = [
  {
    slug: 'common-ground',
    title: 'Common Ground',
    category: 'Web',
    summary: 'A digital home for a more considered kind of hospitality.',
    image: 'https://kombai-assets.b-cdn.net/generated_assets/922acb805ff4489b816ac7db9790cb2a.jpg',
    imageAlt: 'Concept image of brass meridian rings and glass architecture in a dark indigo space.',
    services: ['websites', 'digital-marketing'],
    concept: true,
    challenge: 'How might an independent hospitality group make its point of view feel before a guest ever arrives?',
    approach: 'An editorial website that leaves space for the photography, lets the detail do the talking, and makes booking feel like a natural next step.',
    outcome: 'A concept for a calmer, more confident digital front door—designed as an independent studio exercise.',
  },
  {
    slug: 'fieldnotes',
    title: 'Fieldnotes, for teams',
    category: 'AI & Software',
    summary: 'Turn the meeting that disappears into the work that moves forward.',
    image: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg',
    imageAlt: 'Blue-lit server hardware, photographed by panumas nikhomkhai on Pexels.',
    services: ['ai-software'],
    concept: true,
    challenge: 'Teams already have the information; it is spread across conversations and long after the conversation is over.',
    approach: 'A speculative AI-assisted workspace that turns meeting notes into attributed decisions and draft follow-ups for a person to review.',
    outcome: 'A product direction that treats AI like a capable assistant—not an unattended autopilot.',
  },
  {
    slug: 'open-loop',
    title: 'Open Loop',
    category: 'Growth',
    summary: 'A small, repeatable system for a brand with something real to say.',
    image: 'https://images.pexels.com/photos/37605913/pexels-photo-37605913.jpeg',
    imageAlt: 'Close-up of illuminated blue computer hardware, photographed by panumas nikhomkhai on Pexels.',
    services: ['digital-marketing', 'social-media'],
    concept: true,
    challenge: 'Good work is hard to discover when every channel tells a different story.',
    approach: 'A campaign system that starts with a useful idea, then reshapes that idea to suit how people actually use each channel.',
    outcome: 'A speculative direction for consistent growth content—not a published client campaign.',
  },
  {
    slug: 'quiet-signal',
    title: 'Quiet Signal',
    category: 'Social',
    summary: 'A voice system built to sound human at every scale.',
    image: 'https://images.pexels.com/photos/37730212/pexels-photo-37730212.jpeg',
    imageAlt: 'A study in moody, blue-lit digital infrastructure, photographed by panumas nikhomkhai on Pexels.',
    services: ['social-media'],
    concept: true,
    challenge: 'How can a growing team publish regularly without sanding every idea into the same shape?',
    approach: 'A compact editorial framework with a point of view, reusable creative rules, and enough room for spontaneity.',
    outcome: 'A concept voice and publishing system developed to show the direction GeoWeb could take.',
  },
]
