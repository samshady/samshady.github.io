export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: 'tools' | 'radars' | 'local';
  url: string;
  github?: string;
  accentColor: string;
  badges: string[];
  icon: string;
  previewImage?: string;
  isLocalOnly?: boolean;
}

export const CATEGORIES = [
  { id: 'all', label: 'All Toys & Apps' },
  { id: 'tools', label: 'Interactive Tools' },
  { id: 'radars', label: 'Hardware Radars' },
  { id: 'local', label: 'Local Guides' },
] as const;

export const PROJECTS: Project[] = [
  {
    id: 'tier-builder',
    title: 'TierCraft',
    tagline: 'Modern local-first tier list maker',
    description: 'Fast, private tier list maker with animated GIFs, text cards, 1v1 gauntlet ranking, and crisp high-resolution image exports.',
    category: 'tools',
    url: 'https://samshady.github.io/tier-builder/',
    github: 'https://github.com/samshady/tier-builder',
    accentColor: '#fab387', // Peach
    badges: ['React 19', '@dnd-kit', 'IndexedDB', 'HD Export'],
    icon: 'layers',
    previewImage: './previews/tier-builder.svg',
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
    previewImage: './previews/watch-radar.svg',
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
    previewImage: './previews/retro-handhelds-radar.svg',
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
    previewImage: './previews/iem-radar.svg',
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
    previewImage: './previews/halle-cafes.svg',
  },
];
