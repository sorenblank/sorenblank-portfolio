import { Project } from '@/types/project';

const projects: Project[] = [
  {
    name: 'Safe App',
    slug: 'safeapp_landing_page',
    description:
      'A landing page for Safe App, a company that provides dispute resolution services for online and physical transactions.',
    thumbnail: '/images/projects/safeapp_landing_page/cover.webp',
    tags: ['NextJS', 'TailwindCSS', 'Framer Motion', 'Notion API']
  },
  {
    name: 'Designer Portfolio / Abdullah Khan',
    slug: 'designer_portfolio',
    description:
      'A portfolio website that I have made for my designer friend Abdulla, using NextJS, TailwindCSS, and MDX for blogs.',
    thumbnail: '/images/projects/designer_portfolio/cover.webp',
    tags: ['NextJS', 'TailwindCSS', 'MDX']
  },
  {
    name: 'Burgir',
    slug: 'burgir',
    description:
      'A professional business landing page for a fictional business called Burgir, built on top of NextJS framework and Material-UI.',
    thumbnail: '/images/projects/burgir/cover.webp',
    tags: ['NextJS', 'Material-UI', 'React']
  },
  {
    name: 'BrainWave',
    slug: 'brainwave',
    description:
      'A professional modern AI landing page crafted with TailwindCSS library and the powerful Next.js framework.',
    thumbnail: '/images/projects/brainwave/cover.webp',
    tags: ['NextJS', 'TailwindCSS']
  },
  {
    name: 'Flickertv',
    slug: 'flickertv',
    description:
      'Flickertv is an open source project that displays random quotes on a CRT TV-like screen. You can add your own favorite quote as your first open source contribution!',
    thumbnail: '/images/projects/flickertv/cover.webp',
    tags: ['NextJS', 'React']
  },
  {
    name: 'Wearvista',
    slug: 'wearvista',
    description:
      'A professional modern e-commerce landing page for a fashion brand called Wearvista. Crafted with vanilla HTML CSS and Javascript.',
    thumbnail: '/images/projects/wearvista/cover.webp',
    tags: ['HTML', 'CSS', 'Javascript']
  }
];

export { projects };
