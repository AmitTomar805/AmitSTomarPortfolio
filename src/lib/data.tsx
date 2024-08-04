import { Github, Twitter, Figma, Linkedin } from 'lucide-react';

import LogoJavascript from '/public/images/logos/icon-javascript.svg';
import LogoTypescript from '/public/images/logos/icon-typescript.svg';
import LogoReact from '/public/images/logos/icon-react.svg';
import LogoNodejs from '/public/images/logos/icon-nodejs.svg';
import LogoExpress from '/public/images/logos/icon-express.svg';
import LogoExpressLight from '/public/images/logos/icon-express-light.svg';
import LogoMongoDB from '/public/images/logos/icon-mongodb.svg';
import LogoBootstrap from '../../public/images/logos/Bootstrap_logo.svg (1).svg';
import CssLogo from '../../public/images/logos/CSS3_logo.svg';
import FirebaseLogo from '../../public/images/logos/firebase-icon.svg';
import HTMLLogo from '../../public/images/logos/html-1.svg';
import JavaLogo from '../../public/images/logos/java-icon.svg';
import Redux from '../../public/images/logos/redux.svg';
import AccentureLogo from '../../public/images/logos/accenture-ar21.svg';
import LogoSass from '/public/images/logos/icon-sass.svg';
import LogoGit from '/public/images/logos/icon-git.svg';
import ProjectShareBiteHome from '../../public/images/Home page.png';
import ProjectShareBiteDashboard from '../../public/images/Post Page.png';
import ProjectShareBiteDonatePage from '../../public/images/Donation page.png';
import ProjectShareBiteLanguageCmp from '../../public/images/Language Cmp.png';

import {
  ExperienceDetails,
  ProjectDetails,
  TechDetails,
} from '@/lib/types';

export const NAV_LINKS = [
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Work',
    href: '#work',
  },
  {
    label: 'Experience',
    href: '#experience',
  },
  {
    label: 'Contact',
    href: '#contact',
  },
];

export const SOCIAL_LINKS = [
  {
    icon: Github,
    url: 'https://github.com/AmitTomar805',
  },
  {
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/amit-singh-tomar-4172631b1/',
  }
];

export const TECHNOLOGIES: TechDetails[] = [
  {
    label: 'Javascript',
    logo: LogoJavascript,
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    label: 'Typescript',
    logo: LogoTypescript,
    url: 'https://www.typescriptlang.org/',
  },
  {
    label: 'React',
    logo: LogoReact,
    url: 'https://react.dev/',
  },
  {
    label: 'Node.js',
    logo: LogoNodejs,
    url: 'https://nodejs.org/en',
  },
  {
    label: 'Express.js',
    logo: LogoExpress,
    darkModeLogo: LogoExpressLight,
    url: 'https://expressjs.com/',
  },
  {
    label: 'MongoDB',
    logo: LogoMongoDB,
    url: 'https://www.mongodb.com/',
  },
  {
    label: 'Bootstrap',
    logo: LogoBootstrap,
    url: 'https://getbootstrap.com/',
  },
  {
    label: 'CSS',
    logo: CssLogo,
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  },
  {
    label: 'Firebase',
    logo: FirebaseLogo,
    url: 'https://firebase.google.com/',
  },
  {
    label: 'HTML',
    logo: HTMLLogo,
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
  },
  {
    label: 'Sass/Scss',
    logo: LogoSass,
    url: 'https://sass-lang.com/',
  },
  {
    label: 'Java',
    logo: JavaLogo,
    url: 'https://www.java.com/',
  },
  {
    label: 'Redux',
    logo: Redux,
    url: 'https://redux.js.org/',
  },
  {
    label: 'Git',
    logo: LogoGit,
    url: 'https://git-scm.com/',
  },
];

export const EXPERIENCES: ExperienceDetails[] = [
  {
    logo: AccentureLogo,
    logoAlt: 'Accenture Logo',
    position: 'Application Development Analyst',
    startDate: new Date(2021, 5),
    endDate: new Date(2023, 11),
    currentlyWorkHere: false,
    summary: [
      'Worked for various clients like O2 and Phillip Morris Japan.',
      'My experience encompasses proficiency in Apex, Lightning Web Components (LWC), SOQL, Apex Triggers, Automation Workflow Rules, and Salesforce APIs.',  
      'Successfully converted 15+ Aura components to Lightning web components, resulting in a 35% increase in rendering speed and a better user-friendly interface',
      'Developed and implemented unified Apex classes, resulting in a 30% reduction in code redundancy, resulted in more efficient codebases',
      'Implemented Salesforce flows and automation tool, resulting in a 20% increase in system scalability and productivity',
      'Implemented meticulous testing practices learned from a testing background, resulting in a 30% reduction in the number of bugs',
      'Mentored 5 new team members on project functional as well as development practices, resulting in better team engagement and reduced onboarding time'
    ],
  },
  {
    logo: AccentureLogo,
    logoAlt: 'Accenture Logo',
    position: 'Application Development Associate Intern',
    startDate: new Date(2021, 1),
    endDate: new Date(2021, 5),
    currentlyWorkHere: false,
    summary: [
      'Demonstrated proficiency in both backend and frontend development through extensive learning of Java, SQL, HTML, CSS, and JavaScript',
      'Successfully utilized backend and frontend skills to solve real-time problems, showcasing the ability to translate theoretical concepts into practical solutions'
    ],
  }
];

export const PROJECTS: ProjectDetails[] = [
  {
    name: 'ShareBite',
    description:
      'An innovative Progressive Web App developed to achieve ZERO Hunger by redistributing surplus food to those in need, leveraging cutting-edge technology to minimize food waste and engage community support.\n' +
      
      '🌟 Our Mission\n' +
      '1. Zero Hunger: We aim to eradicate hunger by redistributing surplus food to food-insecure individuals.\n' +
      '2. Reduce Food Waste: Connecting surplus food providers (farmers, restaurants, grocers) with those who can use it efficiently.\n' +
      '🚀 Key Features\n' +
      '• User, Partner, Volunteer, NGO Registration: Seamlessly onboard various stakeholders to our platform.\n' +
      '• Surplus Food Posting: Vendors can post surplus food details, enabling efficient redistribution.\n' +
      '• Volunteer and Chef Hiring: Connects passionate individuals with opportunities to contribute as riders, kitchen staff, or servers.\n' +
      '• Multi-language Support: Enabled via Microsoft Azure API, ensuring accessibility for diverse users, accessibility to 150+ languages.\n' +
      '• Location Features: Utilizes Location IQ API for forward geocoding and Google API for reverse geocoding.\n' +
      '• Dynamic Certificate Generator: Donors receive personalized certificates created using JS PDF.\n' +
      '• Email Notifications: Automated updates on delivery status to keep stakeholders informed.\n' +
      '• Food and Event Posts: Share availability and awareness posts to engage the community.\n' +
      '• Progressive Web App (PWA): Our platform is designed as a PWA, providing a seamless and responsive user experience across all devices.',
    url: 'https://sharebite-tawny.vercel.app/',
    previewImage: ProjectShareBiteHome,
    previewImage2: ProjectShareBiteDashboard,
    previewImage3: ProjectShareBiteDonatePage,
    previewImage4: ProjectShareBiteLanguageCmp,
    technologies: [
      'React',
      'Typescript',
      'Javascript',
      'Node.js',
      'MongoDB',
      'React Bootstrap',
      'Material UI',
      'Saas',
      'Firebase',
      'Express.js',
      'Location IQ API',
      'Google API',
      'Microsoft Azure API',
      'Styled Components',
      'Redux',
    ],
  }
];