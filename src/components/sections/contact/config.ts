import { Contact } from '@/types/contact';
import {
  SiGithub,
  SiLinkedin,
  SiX,
  SiYoutube,
  SiFacebook,
  SiSnapchat,
  SiSubstack,
  SiInstagram,
  SiMyanimelist,
  SiAnilist,
  SiMedium,
  SiGoodreads,
  SiReddit,
  SiDiscord,
  SiValorant
} from '@icons-pack/react-simple-icons';

const contact: Contact = {
  email: 'soren@sorenblank.com',
  socials: [
    {
      name: 'Twitter',
      href: 'https://twitter.com/sorenblank',
      Icon: SiX
    },
    {
      name: 'Facebook',
      href: 'https://facebook.com/soren.blank.0',
      Icon: SiFacebook
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com/sorenblank',
      Icon: SiInstagram
    },
    {
      name: 'Linkedin',
      href: 'https://linkedin.com/in/siyam-afroz',
      Icon: SiLinkedin
    },
    {
      name: 'Discord',
      href: 'https://discord.com/users/965453466510196807',
      Icon: SiDiscord
    },
    {
      name: 'Reddit',
      href: 'https://reddit.com/user/sorenblank',
      Icon: SiReddit
    },
    {
      name: 'Snapchat',
      href: 'https://www.snapchat.com/add/soren_blank',
      Icon: SiSnapchat
    },
    {
      name: 'Github',
      href: 'https://github.com/sorenblank',
      Icon: SiGithub
    },
    {
      name: 'Youtube',
      href: 'https://youtube.com/siyamafroz',
      Icon: SiYoutube
    },
    {
      name: 'Substack',
      href: 'https://siyamafroz.substack.com',
      Icon: SiSubstack
    },
    {
      name: 'Medium',
      href: 'https://medium.com/@sorenblank',
      Icon: SiMedium
    },
    {
      name: 'Goodreads',
      href: 'https://goodreads.com/sorenblank',
      Icon: SiGoodreads
    },
    {
      name: 'Myanimelist',
      href: 'https://myanimelist.net/profile/sorenblank',
      Icon: SiMyanimelist
    },
    {
      name: 'Anilist',
      href: 'https://anilist.co/user/sorenblank',
      Icon: SiAnilist
    },
    {
      name: 'Valorant',
      href: 'https://tracker.gg/valorant/profile/riot/Soren%20Blank%230101/overview',
      Icon: SiValorant
    }
  ]
};

export { contact };
