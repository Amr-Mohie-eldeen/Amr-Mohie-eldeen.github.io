import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Amr Mohie | Cloud Engineer',
  description: 'Amr Mohie Resume',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Amr Mohie.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Dublin based <strong className="text-stone-100">Cloud Engineer</strong>, currently working at{' '}
        <strong className="text-stone-100">Amazon Web Services</strong> helping customers build cloud native
        applications on AWS.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me playin <strong className="text-stone-100">Snooker</strong>, or exploring
        beautiful <strong className="text-stone-100">Ireland</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/Amr-CV-2023.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I have 8 years of experience in customer-facing roles, helping customers to design, migrate, and manage complex hybrid cloud environments. Certified AWS Solutions Architect Professional and The Open Group Master Certified Technical Specialist.`,
  aboutItems: [
    { label: 'Location', text: 'Dublin,IE', Icon: MapIcon },
    { label: 'Interests', text: 'Snooker, Music production', Icon: SparklesIcon },
    { label: 'Study', text: 'German University in Cairo', Icon: AcademicCapIcon },
    { label: 'Employment', text: 'Amazon Web Services', Icon: BuildingOffice2Icon },
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 9,
      },
      {
        name: 'Arabic',
        level: 10,
      },
    ],
  },
  {
    name: 'Cloud Skills',
    skills: [
      {
        name: 'AWS',
        level: 9,
      },
      {
        name: 'Linux',
        level: 9,
      },
      {
        name: 'Terraform',
        level: 7,
      },
      {
        name: 'Python',
        level: 6,
      },
      {
        name: 'Docker / Kubernetees',
        level: 6,
      },
      {
        name: 'Ansible',
        level: 6,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Cruddur',
    description: 'A twitter clone with volatile messages, how cool is that?',
    url: 'https://github.com/Amr-Mohie-eldeen/aws-bootcamp-cruddur-2023',
    image: porfolioImage1,
  },
  {
    title: 'Udapeople',
    description: 'Udacity Advanced Cloud Devops Nanodegree capestone project',
    url: 'https://github.com/Amr-Mohie-eldeen/Udacity_Project3',
    image: porfolioImage2,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'July 2015',
    location: 'German University in Cairo',
    title: 'Bachelor of science in Engineering',
    content: <p>Mechatronics Major</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'October 2022 - Present',
    location: 'Amazon Web Services',
    title: 'Cloud Engineer II',
    content: (
      <p>
        Provide architectural guidance as a trusted advisor for AWS enterprise customers, reviewing architectures and
        recommending optimizations to meet business needs Member of the Technical Domain Authority team responsible for
        investigating critical severity escalations involving complex architectures Guide customers in implementing AWS
        best practices to enhance performance and security Mentor and supported junior team members
      </p>
    ),
  },
  {
    date: 'January 2020 - September 2022',
    location: 'IBM',
    title: 'Lead IT Management Consultant',
    content: (
      <p>
        Partnered with clients to design and execute complex migrations from legacy on-premise infrastructure to hybrid
        cloud solutions, improving scalability and reducing costs Led the delivery of +$500K service contracts annually
        Led infrastructure design workshops for key customer projects, collaborating with stakeholder teams to create
        architecture plans tailored to business requirements and IT environments Contributed to closing multi +$1M deals
        across MEA, delivering proof of concepts creating infrastructure architecture documents, and presenting them to
        client executives Mentored and developed ramp-up plans for the new team members
      </p>
    ),
  },
  {
    date: 'July 2016 - January 2020',
    location: 'IBM',
    title: 'IT Management Consultant',
    content: (
      <p>
        Backup and recovery SME for Egypt and North Africa Designed and implemented tailored storage/ Data Protection
        solutions for clients, optimizing performance, reliability, and cost-efficiency Exceeded customer satisfaction
        targets and maintained a world-class NPS of +85 for 3 consecutive years Delivered multiple official training to
        enterprise clients across MEA, Upholding +8 feedback score
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Ahmed Metwally - Techincal Sales Specialist IBM',
      text: "I had the privilege of working closely with Amr as my mentor at IBM, and I can't speak highly enough of his expertise in storage and data protection solutions and his commitment to adding value to customers.",
      image: '',
    },
    {
      name: 'Ahmed (Mash) Mashhour - Senior IT Managing Consultant IBM',
      text: 'Amr is simply a person who stand out among the world. Have worked with Amr in several situations where has the skills, not only the technical ones - but also the leadership that he has shown in many customers interactions, and we managed to gain the satisfaction due to Amr management.',
      image: '',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Drop me an email!',
  items: [
    {
      type: ContactType.Email,
      text: 'amr.mohiee@gmail.com',
      href: 'mailto:amr.mohiee@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Dublin, Ireland',
      href: 'https://www.google.com/maps/place/dublin+ireland/data=!4m2!3m1!1s0x48670e80ea27ac2f:0xa00c7a9973171a0?sa=X&ved=2ahUKEwig787EvKaCAxVrUUEAHcVLBdkQ8gF6BAgREAA',
    },

    {
      type: ContactType.Github,
      text: 'Amr-Mohie-eldeen',
      href: 'https://github.com/Amr-Mohie-eldeen',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  { label: 'Github', Icon: GithubIcon, href: 'https://github.com/Amr-Mohie-eldeen' },
  { label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/amohiee/' },
];

export const certifications = [
  {
    title: 'AWS Certified DevOps Engineer – Professional',
    issuer: 'Amazon Web Services Training and Certification',
  },
  {
    title: 'AWS Certified Solutions Architect – Professional',
    issuer: 'Amazon Web Services Training and Certification',
  },
  {
    title: 'AWS Certified Solutions Architect – Associate',
    issuer: 'Amazon Web Services Training and Certification',
  },
  {
    title: 'Red Hat Certified Engineer (RHCE)',
    issuer: 'Red Hat',
  },
  {
    title: 'Red Hat Certified System Administrator (RHCSA)',
    issuer: 'Red Hat',
  },
  {
    title: 'Technical Specialist Profession Certification - Expert',
    issuer: 'IBM',
  },
  {
    title: 'Professional Certification: Master Certified Technical Specialist, Server Systems',
    issuer: 'The Open Group',
  },
  {
    title: 'Storage Systems Specialty - Expert',
    issuer: 'IBM',
  },
];
