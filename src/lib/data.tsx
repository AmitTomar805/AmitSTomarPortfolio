import { Github, Twitter, Figma, Linkedin } from 'lucide-react';

import LogoJavascript from '/public/images/logos/icon-javascript.svg';
import LogoTypescript from '/public/images/logos/icon-typescript.svg';
import LogoReact from '/public/images/logos/icon-react.svg';
import LogoNodejs from '/public/images/logos/icon-nodejs.svg';
import LogoExpress from '/public/images/logos/icon-express.svg';
import LogoExpressLight from '/public/images/logos/icon-express-light.svg';
import LogoMongoDB from '/public/images/logos/icon-mongodb.svg';
import LogoBootstrap from '../../public/images/logos/Bootstrap_logo.svg (1).svg';
import NEULogo from '../../public/images/logos/neulogo.svg';
import CssLogo from '../../public/images/logos/CSS3_logo.svg';
import FirebaseLogo from '../../public/images/logos/firebase-icon.svg';
import HTMLLogo from '../../public/images/logos/html-1.svg';
import JavaLogo from '../../public/images/logos/java-icon.svg';
import SpringLogo from '../../public/images/logos/icons8-spring-boot.svg';
import DockerLogo from '../../public/images/logos/docker-svgrepo-com.svg';
import KafkaLogo from '../../public/images/logos/kafka-svgrepo-com.svg';
import PostgreSqlLogo from '../../public/images/logos/icon-postgresql.svg';
import KeycloakLogo from '../../public/images/logos/keycloak-svgrepo-com.svg';
import PostmanLogo from '../../public/images/logos/postman-icon-svgrepo-com.svg';
import PD1Logo from '../../public/images/logos/scpd1.svg';
import ABuildLogo from '../../public/images/logos/scpab.svg';
import Redux from '../../public/images/logos/redux.svg';
import AccentureLogo from '../../public/images/logos/accenture-ar21.svg';
import DispatchLogo from '../../public/images/logos/Dispatch_SVG_Logo.svg';
import YourekaLogo from '../../public/images/logos/Youreka_SVG_Logo.svg';
import LogoSass from '/public/images/logos/icon-sass.svg';
import LogoGit from '/public/images/logos/icon-git.svg';
import ProjectShareBiteHome from '../../public/images/Home page.png';
import ProjectShareBiteDashboard from '../../public/images/Post Page.png';
import ProjectShareBiteDonatePage from '../../public/images/Donation page.png';
import ProjectShareBiteLanguageCmp from '../../public/images/Language Cmp.png';
import SpringMart1 from '../../public/images/SpringMart1.png';
import SpringMart2 from '../../public/images/SpringMart2.png';
import SpringMart3 from '../../public/images/SpringMart3.png';
import SpringMart4 from '../../public/images/SpringMart4.png';
import SpringMart5 from '../../public/images/SpringMart5.png';
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
    label: 'Certifications',
    href: '#Certifications',
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
    label: 'Spring Boot',
    logo: SpringLogo,
    url: 'https://spring.io/projects/spring-boot',
  },
  {
    label: 'Docker',
    logo: DockerLogo,
    url: 'https://www.docker.com/',
  },
  {
    label: 'Kafka',
    logo: KafkaLogo,
    url: 'https://kafka.apache.org/',
  },
  {
    label: 'PostgreSQL',
    logo: PostgreSqlLogo,
    url: 'https://www.postgresql.org/',
  },
  {
    label: 'Keycloak',
    logo: KeycloakLogo,
    url: 'https://www.keycloak.org/',
  },
  {
    label: 'Postman',
    logo: PostmanLogo,
    url: 'https://www.postman.com/',
  },
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
export const CERTIFICATE_DETAILS = [
  {
    logo: PD1Logo,
    logoAlt: 'Salesforce Certified Platform Developer 1',
    name: 'Salesforce Certified Platform Developer 1',
    completionDate: new Date(2023, 3),
    summary: [
      'Demonstrated proficiency in building custom applications on the Salesforce platform, including Apex programming and Visualforce',
      'Gained expertise in designing data models, business logic, and security for scalable and maintainable Salesforce solutions',
      'Validated skills in developing and deploying Lightning components and leveraging Salesforce APIs for integration'
    ],
  },
  {
    logo: ABuildLogo,
    logoAlt: 'Salesforce Certified Platform App Builder ',
    name: 'Salesforce Certified Platform App Builder ',
    completionDate: new Date(2022, 11),
    summary: [
      'Acquired expertise in designing and building custom applications using the Salesforce platform, focusing on declarative features like workflows, process automation, and custom objects',
      'Demonstrated skills in implementing security, data models, and business logic to support complex business processes',
      'Gained hands-on experience in creating reports, dashboards, and integrating third-party applications using Salesforce AppExchange'
    ],
  },
];
export const EXPERIENCES: ExperienceDetails[] = [
  {
    logo: DispatchLogo,
    logoAlt: 'Dispatch Technologies / Youreka Logo',
    position: 'Software Engineer Co-op',
    companyName: 'Dispatch Technologies / Youreka',
    startDate: new Date(2025, 0),
    endDate: new Date(2025, 5),
    currentlyWorkHere: false,
    summary: [
      'Architected and led development of an AI-powered code review system using GitHub Actions and OpenAI GPT-3.5, cutting manual PR review time by 50% through automated analysis workflows',
      'Spearheaded the end-to-end automation of Salesforce bundle deployments across 25+ environments via reusable GitHub workflows, eliminating all manual steps and boosting CI/CD consistency',
      'Designed, implemented, and operationalized dynamic scratch org provisioning on branch creation, reducing setup time by 90% and enabling real-time Apex testing within CI pipelines',
      'Refactored form submission frontend by migrating from Create React App to Vite, improving build time by 60% and resolving legacy security vulnerabilities',
      'Redesigned template search logic to eliminate unnecessary API calls on render and support name-based querying, resolving a 100-record fetch limit and significantly improving performance and search accuracy across UI components'
    ],
  },
  {
    logo: NEULogo,
    logoAlt: 'Northeastern University Logo',
    position: 'Teaching Assistant – CSYE 6200: Concepts of Object-Oriented Design',
    companyName: 'Northeastern University',
    startDate: new Date(2024, 8),
    currentlyWorkHere: true,
    summary: [
      'Assisted in teaching two sections (~50 students) focused on advanced Java programming and object-oriented design principles; led code review sessions, debugged student projects, and guided best practices in modular architecture and design patterns',
      'Designed and graded programming assignments and quizzes, automated portions of the evaluation process, and collaborated with the instructor to enhance coursework interactivity and technical depth using real-world coding examples'
    ],
  },
  {
    logo: NEULogo,
    logoAlt: 'Northeastern University Logo',
    position: 'Global Student Mentor',
    companyName: 'Northeastern University',
    startDate: new Date(2024, 6),
    currentlyWorkHere: true,
    summary: [
      'Mentor and guide 40 international graduate students, helping them navigate academic and personal challenges during their college journey',
      'Lead 10+ workshops and engagement sessions, fostering communication and relationships to boost mentee success and overall student well-being'
    ],
  },
  {
    logo: AccentureLogo,
    logoAlt: 'Accenture Logo',
    position: 'Application Development Analyst',
    companyName: 'Accenture',
    startDate: new Date(2021, 5),
    endDate: new Date(2023, 11),
    currentlyWorkHere: false,
    summary: [
      'Refactored 15+ legacy components into modern web components with JavaScript, TypeScript, and LWC, boosting rendering speed by 35%',
      'Developed RESTful API to fetch coupons for over 200,000 concurrent users, streamlining data exchange between internal systems and third-party services, reducing data processing time by 25%, and improving communication efficiency by 30%',  
      'Deployed Apache Kafka for real-time data streaming, elevating system throughput by 40% and enabling asynchronous communication for over 200,000 concurrent users',
      'Boosted deployment efficiency by 20% and advanced cloud scalability by automating workflows and setting up CI/CD pipelines with Salesforce DX and GitHub/GitLab',
      'Minimized production bugs by 30% and preserved high code quality through thorough unit and integration testing with JUnit',
      'Led client demos and requirement-gathering meetings, ensuring clear communication and alignment with project goals, resulting in comprehensive BRDs, increasing client satisfaction, and reducing project scope changes by 20%',
      'Mentored 5 new joiners in Agile project workflows, product knowledge, and technical skills, resulting in a 30% reduction in onboarding time and a 25% increase in team collaboration and efficiency during sprints'
    ],
  },
  {
    logo: AccentureLogo,
    logoAlt: 'Accenture Logo',
    position: 'Application Development Associate Intern',
    companyName: 'Accenture',
    startDate: new Date(2021, 1),
    endDate: new Date(2021, 5),
    currentlyWorkHere: false,
    summary: [
      'Engineered backend services with Java and Express.js, integrating React.js for improved responsiveness and user experience in real-time data processing',
      'Managed NoSQL databases, including MongoDB, in Java and Express.js applications, ensuring efficient storage and scalability',
      'Created RESTful APIs in Express.js for seamless communication between React.js frontend and Java-based backend, optimizing overall system functionality and user experience'
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
  },
  {
    name: 'SpringMart',
    description:
    'An advanced E-Commerce Microservices Platform leveraging Spring Boot, Spring Cloud, and Keycloak for secure, scalable, and reliable online shopping experiences.\n' +
    '\n' +
    '🌟 Our Mission\n' +
    '1. Scalability: Ensure seamless and scalable shopping experiences.\n' +
    '2. Modularity: Enable independent development and deployment of services.\n' +
    '\n' +
    '🚀 Key Features\n' +
    '• User Authentication: Secure login with Keycloak for SSO and role management.\n' +
    '• API Gateway: Centralized routing for security and load balancing.\n' +
    '• Service Discovery: Dynamic microservices discovery with Eureka Server.\n' +
    '• Config Management: Centralized configs using Spring Cloud Config.\n' +
    '• Microservices: Independent Product, Order, Customer, Payment, and Notification services.\n' +
    '• Async Communication: Kafka for event-driven updates and notifications.\n' +
    '• Real-time Notifications: Dedicated service for sending alerts and updates on orders and payments.\n' +
    '• Data Storage: MongoDB for scalable data management.\n' +
    '• Distributed Tracing: Zipkin for performance monitoring.\n' +
    '• Containerization: Docker for consistent deployment environments.\n' +
    '\n' +
    'SpringMart is designed to deliver robust and scalable e-commerce solutions, focusing on efficient service management and seamless user experiences with a microservices architecture and modern technology stack.',
    url: 'https://github.com/AmitTomar805/e-commerce-app-spring-boot',
    previewImage: SpringMart1,
    previewImage2: SpringMart2,
    previewImage3: SpringMart3,
    previewImage4: SpringMart4,
    technologies: [
      'Spring Boot',
      'Spring Cloud',
      'Microservices',
      'PostgreSQL',
      'Postman',
      'Java',
      'Keycloak',
      'Eureka Server',
      'Spring Cloud Config',
      'Kafka',
      'MongoDB',
      'Docker',
      'Zipkin',
    ],
  }
];