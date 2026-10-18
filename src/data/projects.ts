export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: 'tools' | 'radars' | 'local' | 'stories' | 'work';
  url: string;
  github?: string;
  accentColor: string;
  badges: string[];
  icon: string;
  isLocalOnly?: boolean;
}

export const CATEGORIES = [
  { id: 'all', label: 'All Toys & Apps' },
  { id: 'tools', label: 'Interactive Tools' },
  { id: 'radars', label: 'Hardware Radars' },
  { id: 'local', label: 'Local Life & Maps' },
  { id: 'stories', label: 'Stories & Books' },
  { id: 'work', label: 'Demos & Presentations' },
] as const;

export const PROJECTS: Project[] = [
  {
    id: 'tier-builder',
    title: 'TierCraft',
    tagline: 'Modern local-first tier list maker',
    description: 'Fast, private tier list maker with animated GIFs, text cards, 1v1 gauntlet ranking, and 2x Retina PNG exports.',
    category: 'tools',
    url: 'https://samshady.github.io/tier-builder/',
    github: 'https://github.com/samshady/tier-builder',
    accentColor: '#fab387', // Peach
    badges: ['React 19', '@dnd-kit', 'IndexedDB', 'Retina PNG'],
    icon: 'layers',
  },
  {
    id: 'watch-radar',
    title: 'Watch Radar',
    tagline: 'Budget & AliExpress horology guide',
    description: 'Curated sub-€80 watches tailored for 15 to 17 cm wrists with true lug-to-lug dimensions and movement benchmarks.',
    category: 'radars',
    url: 'https://samshady.github.io/watch-radar/',
    github: 'https://github.com/samshady/watch-radar',
    accentColor: '#f9e2af', // Amber
    badges: ['Horology', 'Seiko NH35/VH31', 'Sapphire', 'Alloy Bench'],
    icon: 'watch',
  },
  {
    id: 'retro-handhelds-radar',
    title: 'Retro Handhelds Radar',
    tagline: 'European buyer guide & spec matrix',
    description: 'Interactive European price tracker, PortMaster readiness matrix, and custom firmware guide for handheld gaming.',
    category: 'radars',
    url: 'https://samshady.github.io/retro-handhelds-radar/',
    github: 'https://github.com/samshady/retro-handhelds-radar',
    accentColor: '#a6e3a1', // Emerald
    badges: ['muOS/OnionOS', 'PortMaster', 'Anbernic/Miyoo', 'EU Pricing'],
    icon: 'gamepad-2',
  },
  {
    id: 'iem-radar',
    title: 'IEM Radar & Chi-Fi Notes',
    tagline: 'Acoustic database & ear-canal guide',
    description: 'Acoustic consensus database evaluating 30 budget in-ear monitors with nozzle dimensions, sound curves, and YouTube demos.',
    category: 'radars',
    url: 'https://samshady.github.io/iem-radar/',
    github: 'https://github.com/samshady/iem-radar',
    accentColor: '#cba6f7', // Mauve
    badges: ['Audiophile', 'Harman Target', 'Nozzle Specs', 'Sound Demos'],
    icon: 'headphones',
  },
  {
    id: 'halle-cafes',
    title: 'Halle Cafés',
    tagline: 'Offline specialty coffee guide & map',
    description: 'Specialty coffee discovery PWA with live opening hours, MapLibre GL vector tiles, and personal visit logger.',
    category: 'local',
    url: 'https://samshady.github.io/halle-cafes/',
    github: 'https://github.com/samshady/halle-cafes',
    accentColor: '#f5e0dc', // Rosewater
    badges: ['PWA', 'MapLibre GL', 'Vector Tiles', 'Offline-First'],
    icon: 'coffee',
  },
  {
    id: 'diana-reyn',
    title: 'Diana Reyn',
    tagline: 'Bilingual author portfolio & book catalog',
    description: 'Atmospheric digital presence for YA mystic fiction author Diana Reyn with AST publications and direct EPUB/PDF downloads.',
    category: 'stories',
    url: 'https://dianareyn.com/',
    github: 'https://github.com/samshady/diana-reyn-website',
    accentColor: '#b4befe', // Lavender
    badges: ['Astro 5', 'Bilingual', 'Litmarket/AST', 'WCAG AAA'],
    icon: 'book-open',
  },
  {
    id: 'erfurt-trip',
    title: 'Erfurt Trip',
    tagline: 'Photo story & settle-up expense solver',
    description: 'Scroll-driven Thuringian travel diary paired with a peer-to-peer expense balance solver and PDF report generator.',
    category: 'stories',
    url: 'https://samshady.github.io/erfurt-trip-2026/',
    github: 'https://github.com/samshady/erfurt-trip-2026',
    accentColor: '#74c7ec', // Sapphire
    badges: ['Photo Story', 'pdfmake', 'Vitest Solver', 'Interactive'],
    icon: 'compass',
  },
  {
    id: 'gestekarte-demo',
    title: 'Gästekarte Demo',
    tagline: 'University guest pass portal',
    description: 'Next.js 16 guest pass application workflow modeling automated verification and card generation for MLU Halle.',
    category: 'work',
    url: 'https://demo-app-sigma-jet.vercel.app/',
    github: 'https://github.com/samshady/gestekarte-demo-app',
    accentColor: '#94e2d5', // Teal
    badges: ['Next.js 16', 'TypeScript', 'Prisma', 'shadcn/ui'],
    icon: 'id-card',
  },
  {
    id: 'rail-flow-release-notes',
    title: 'Rail-Flow Release Notes',
    tagline: 'Marp presentation slide hub',
    description: 'Interactive slide deck hub for transport management release notes, optimized for keyboard presentation and intranet embedding.',
    category: 'work',
    url: 'https://samshady.github.io/release-notes/',
    github: 'https://github.com/samshady/release-notes',
    accentColor: '#89b4fa', // Blue
    badges: ['Marp Slides', 'Keyboard Controls', 'Enterprise TMS', 'Static Deck'],
    icon: 'presentation',
  },
  {
    id: 'halle-dash',
    title: 'Halle Dash',
    tagline: 'Local transit & weather hub',
    description: 'Always-on kiosk unifying realtime HAVAG tram departures, S-Bahn connections, weather, and calendar feeds.',
    category: 'local',
    url: 'http://127.0.0.1:8787',
    github: 'https://github.com/samshady/halle-dash',
    accentColor: '#f2cdcd', // Flamingo
    badges: ['Transitous MOTIS', 'E-Ink Support', 'Transit Kiosk', 'Local/Tailscale'],
    icon: 'layout-dashboard',
    isLocalOnly: true,
  },
];
