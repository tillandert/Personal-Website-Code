import type { IconType } from 'react-icons';
import {
  FiActivity,
  FiBookOpen,
  FiBriefcase,
  FiCode,
  FiGithub,
  FiInstagram,
  FiLayers,
  FiLinkedin,
  FiMapPin,
  FiTarget,
  FiTrendingUp,
  FiZap,
} from 'react-icons/fi';

const assetUrl = (fileName: string) => `${import.meta.env.BASE_URL}${fileName}`;

type NavItem = {
  label: string;
  path: string;
};

type Stat = {
  label: string;
  value: string;
};

type Highlight = {
  title: string;
  description: string;
  path: string;
  icon: IconType;
};

type ExternalLink = {
  label: string;
  href: string;
  description: string;
  icon: IconType;
  download?: boolean;
  qrSrc?: string;
};

type ContentCard = {
  title: string;
  description: string;
  icon: IconType;
};

type MediaItem =
  | {
      kind: 'iframe';
      title: string;
      src: string;
      caption: string;
    }
  | {
      kind: 'image';
      title: string;
      src: string;
      alt: string;
      caption: string;
    };

export type SectionContent = {
  eyebrow: string;
  title: string;
  summary: string;
  intro: string;
  badges: string[];
  cards: ContentCard[];
  links: ExternalLink[];
  media: MediaItem[];
  resume?: {
    title: string;
    description: string;
    href: string;
  };
};

export const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Education', path: '/education' },
  { label: 'Personal Life', path: '/personal-life' },
  { label: 'Experience', path: '/experience' },
  { label: 'Projects', path: '/projects' },
];

export const homeStats: Stat[] = [
  { label: 'Degree', value: 'B.S. Computer Engineering' },
  { label: 'Current role', value: 'Software Engineer' },
  { label: 'Focus', value: 'Engineering + AI/ML growth' },
];

export const homeHighlights: Highlight[] = [
  {
    title: 'Education',
    description: 'Foundations in computer engineering, software systems, AI, and machine learning.',
    path: '/education',
    icon: FiBookOpen,
  },
  {
    title: 'Professional experience',
    description: 'Production work, internships, and a growing track record in software engineering.',
    path: '/experience',
    icon: FiBriefcase,
  },
  {
    title: 'Projects',
    description: 'Hands-on builds that show execution quality, learning velocity, and product thinking.',
    path: '/projects',
    icon: FiCode,
  },
  {
    title: 'Life outside work',
    description: 'Running, training, balance, and the habits that keep my performance durable.',
    path: '/personal-life',
    icon: FiActivity,
  },
];

export const profileLinks: ExternalLink[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/tillandert',
    description: 'Code, experiments, and public project history.',
    icon: FiGithub,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/taylortillander/',
    description: 'Professional background and career updates.',
    icon: FiLinkedin,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/tillander_t',
    description: 'Personal updates and day-to-day moments.',
    icon: FiInstagram,
  },
];

const resumeUrl = assetUrl('TaylorTillanderResume.pdf');

export const sectionContent: Record<'education' | 'personalLife' | 'professionalExperience' | 'projects', SectionContent> = {
  education: {
    eyebrow: 'Foundation',
    title: 'Built on engineering fundamentals and range',
    summary:
      'My academic background built a strong technical base across software systems, computer engineering fundamentals, and applied machine intelligence.',
    intro:
      'I graduated from the University of Florida in December 2025 with a Bachelor of Science in Computer Engineering. That training emphasized both depth and breadth: algorithmic thinking, systems reasoning, and the ability to translate technical work into practical outcomes.',
    badges: ['University of Florida', 'B.S. Computer Engineering', 'December 2025'],
    cards: [
      {
        title: 'Core technical coursework',
        description:
          'My coursework included Data Structures and Algorithms, Signal Processing, Software Engineering, Artificial Intelligence, and Machine Learning.',
        icon: FiLayers,
      },
      {
        title: 'Systems thinking',
        description:
          'Computer engineering trained me to move between abstraction layers, which helps when debugging, designing, and communicating tradeoffs clearly.',
        icon: FiZap,
      },
      {
        title: 'Professional development',
        description:
          'Organizations like IEEE helped sharpen communication, collaboration, and the professional habits needed beyond the classroom.',
        icon: FiTrendingUp,
      },
      {
        title: 'Career readiness',
        description:
          'The combination of theory and project work prepared me to step into production software environments with a strong learning curve.',
        icon: FiTarget,
      },
    ],
    links: [],
    media: [],
    resume: undefined,
  },
  personalLife: {
    eyebrow: 'Balance',
    title: 'Discipline outside work reinforces how I operate inside it',
    summary:
      'The same habits that matter in engineering work also show up outside of work: consistency, discipline, and steady long-term progress.',
    intro:
      'Outside of engineering, I spend time running, strength training, tennis, and staying active with friends and community. Training goals, especially in endurance events, reinforce consistency and accountability that carry directly into professional work.',
    badges: ['Running', 'Strength training', 'Tennis', 'Community'],
    cards: [
      {
        title: 'Endurance mindset',
        description:
          'Training toward a full marathon keeps me focused on consistency, measurable progress, and managing energy over the long run.',
        icon: FiActivity,
      },
      {
        title: 'Competitive balance',
        description:
          'Tennis and other physical hobbies keep me competitive while also giving me a way to reset and stay mentally sharp.',
        icon: FiTarget,
      },
      {
        title: 'Recharge and perspective',
        description:
          'Video games and time with friends help me unwind, which matters if you want sustained performance instead of short bursts.',
        icon: FiMapPin,
      },
      {
        title: 'Sustainable growth',
        description:
          'I care about building a life where personal goals and professional goals reinforce each other instead of competing for attention.',
        icon: FiTrendingUp,
      },
    ],
    links: [
      {
        label: 'Instagram',
        href: 'https://www.instagram.com/tillander_t',
        description: 'A more personal view of what I am doing outside of work.',
        icon: FiInstagram,
        qrSrc: assetUrl('instagram_qr.png'),
      },
    ],
    media: [],
    resume: undefined,
  },
  professionalExperience: {
    eyebrow: 'Work',
    title: 'Building dependable software today, with long-term growth across technical and business leadership.',
    summary:
      'I focus on writing maintainable software, shipping reliably in team environments, and growing into larger ownership over systems and outcomes.',
    intro:
      'I currently work at JPMorgan Chase in Tampa as a Software Engineer in the SEP program. Prior internships strengthened practical engineering skills across frontend development, scripting, and working effectively on delivery-focused teams.',
    badges: ['Software Engineer', 'SEP Program', 'Tampa, FL'],
    cards: [
      {
        title: 'Production environment',
        description:
          'Working in a large engineering organization means caring about clarity, reliability, and the ability to make changes safely over time.',
        icon: FiBriefcase,
      },
      {
        title: 'Internship progression',
        description:
          'Past internships gave me exposure to frontend development and simulation scripting, which helped widen both my toolset and engineering judgment.',
        icon: FiLayers,
      },
      {
        title: 'Career direction',
        description:
          'Long-term career direction includes continued growth in software engineering and technical leadership, optional graduate study in CS focused on AI/ML applications, and selective product-building exploration over time.',
        icon: FiTrendingUp,
      }
    ],
    links: [
      {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/taylortillander/',
        description: 'Professional timeline, current role, and background details.',
        icon: FiLinkedin,
        qrSrc: assetUrl('linkedin_qr.jpeg'),
      }
    ],
    media: [],
    resume: {
      title: 'Resume',
      description:
        'For a full view of experience, technical background, and project work, open the hosted PDF directly in-browser or download a copy.',
      href: resumeUrl,
    },
  },
  projects: {
    eyebrow: 'Builds',
    title: 'Projects that show how I think, learn, and ship',
    summary:
      'Projects are the clearest signal of engineering execution: what was built, how tradeoffs were handled, and how ideas evolved over time.',
    intro:
      'This section highlights the work behind my technical development. The portfolio will continue expanding with deeper case studies, implementation details, and measurable outcomes as new projects ship.',
    badges: ['GitHub portfolio', 'Iterative learning', 'Case study ready'],
    cards: [
      {
        title: 'Public project hub',
        description:
          'GitHub is the central place where I publish code, test ideas, and make my technical progression visible over time.',
        icon: FiGithub,
      },
      {
        title: 'Portfolio utility',
        description:
          'A strong portfolio is not just a list of repos. It should make it easy for someone to understand the substance of the work quickly.',
        icon: FiTarget,
      },
    ],
    links: [
      {
        label: 'GitHub profile',
        href: 'https://github.com/tillandert',
        description: 'Browse repositories, experiments, and code history.',
        icon: FiGithub,
      },
    ],
    media: [],
    resume: undefined,
  },
};