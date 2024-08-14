import { Link } from '@/types/link';

// This is a setting for the compact header
const linkLimit = 5;
//

const links: Link[] = [
  {
    title: 'Home',
    href: '/',
    thumbnail: 'home.webp'
  },
  {
    title: 'Tech',
    href: '#tech',
    thumbnail: 'tech.webp'
  },
  {
    title: 'Skills',
    href: '#skills',
    thumbnail: 'skills.webp'
  },
  {
    title: 'Experience',
    href: '#experience',
    thumbnail: 'experience.webp'
  },
  {
    title: 'Projects',
    href: '#projects',
    thumbnail: 'projects.webp'
  },
  {
    title: 'Testimonials',
    href: '#testimonials',
    thumbnail: 'testimonials.webp'
  },
  {
    title: 'Contact',
    href: '#contact',
    thumbnail: 'contactV2.webp'
  }
];

export { linkLimit, links };
