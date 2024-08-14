import { Skill } from '@/types/skill';
import {
  CodeIcon,
  DatabaseIcon,
  LayoutIcon,
  SmartphoneIcon,
  CogIcon,
  HammerIcon
} from 'lucide-react';

const trimLen: number = -1; // 0 is accordion only, -1 is does not restrict the length

const skills: Skill[] = [
  {
    name: 'Programming Languages',
    Icon: CodeIcon,
    description: `
          Programming languages that I know are: </br>
          
          - JavaScript, TypeScript, Python </br>
          - HTML, CSS, SCSS, SQL ( idc what they are )
          `
  },
  {
    name: 'Technologies & Frameworks',
    Icon: CogIcon,
    description: `
        Technologies and frameworks that I use thesedays: </br>

        - React, Next.js, Solid.js, Svelte etc</br>
        - Tailwind CSS, Bootstrap, Chakra UI, Material UI, Framer Motion etc</br>
        - Serverless, BaaS, NodeJS 
    `
  },
  {
    name: 'Tools & Softwares',
    Icon: HammerIcon,
    description: `
        Tools and softwares that I use daily: </br>

        - Git, GitHub, Jupyter Notebook, Postman</br>
        - VS Code, Webstorm, IDX</br>
        - Figma, Adobe Photoshop, Adobe Illustrator
    `
  }
];

export { trimLen, skills };
