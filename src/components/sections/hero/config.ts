import { Hero } from '@/types/hero';
import { metadata as meta } from '@/app/config';

const hero: Hero = {
  name: meta.author.name,
  label: meta.author.label,
  description:
    'Hi! I am Soren ~ Soren (Blank). Well, that’s what people know me as on the internet. But my real name is Siyam Afroz.',
  descriptionSecond:
    'Apart from programming, there are many things that catch my interest such as cars, books, photography, filmmaking, arts and designs, games, anime and many more.'
};

export { hero };
