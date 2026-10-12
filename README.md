# GeoWeb — Digital, with direction

A responsive multi-page brand site for an independent digital studio. Built with React 19, Vite 8, TypeScript, React Router 7, Tailwind CSS v4, Radix-based shadcn components, React Three Fiber/Three.js, and GSAP. The visual direction is an interactive brass orrery against twilight indigo.

## Run locally

Node 22 and pnpm are recommended for the versions pinned in `package.json`.

```sh
pnpm install
pnpm dev
```

## Routes

- `/` — the interactive 3D home, services axis, concept portfolio, studio introduction, and inquiry call-to-action
- `/services` — AI-native software, websites, digital marketing, and social media
- `/work` — filterable portfolio concepts
- `/work/:slug` — concept-study details
- `/about` — studio approach and principles
- `/contact` — validated, demo-only project inquiry form

## Production checks

```sh
pnpm build
pnpm lint
```

The portfolio entries are explicitly self-initiated concept studies; they are not client endorsements or verified outcomes. The contact form validates locally only and does not transmit or store personal data. Connect a real inquiry endpoint and replace provisional contact details before launch.
