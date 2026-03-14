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
  { label: 'Focus', value: 'Reliable product delivery' },
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
    description: 'Hands-on work that reflects how I build, learn, and iterate on technical problems.',
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

export const sectionContent: Record<'education' | 'personalLife' | 'professionalExperience' | 'projects', SectionContent> = {
  education: {
    eyebrow: 'Foundation',
    title: 'Built on engineering fundamentals and range.',
    summary:
      'My academic background gave me a strong technical base across software, hardware-adjacent systems, and applied machine intelligence.',
    intro:
      'I graduated from the University of Florida in December 2025 with a Bachelor of Science in Computer Engineering. The strongest outcome from that experience was breadth without losing rigor: I learned how to reason about systems, not just individual tools.',
    badges: ['University of Florida', 'B.S. Computer Engineering', 'December 2025'],
    cards: [
      {
        title: 'Core technical coursework',
        description:
          'My coursework included Data Structures and Algorithms, Computer Architecture, Software Engineering, Artificial Intelligence, and Machine Learning.',
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
  },
  personalLife: {
    eyebrow: 'Balance',
    title: 'Discipline outside work reinforces how I operate inside it.',
    summary:
      'The habits I value most are consistency, effort over time, and enjoying the process. That carries directly into how I learn and build software.',
    intro:
      'I enjoy working out, running, tennis, video games, and spending time with friends. Training for a marathon after completing my first half marathon has pushed me to stay process-oriented and patient with long-term goals.',
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
      },
    ],
    media: [
      {
        kind: 'image',
        title: 'Instagram QR',
        src: assetUrl('instagram_qr.png'),
        alt: 'Instagram QR code',
        caption: 'GitHub Pages can serve this image directly because it lives in the public assets for the site.',
      },
    ],
  },
  professionalExperience: {
    eyebrow: 'Work',
    title: 'Experience centered on dependable software delivery.',
    summary:
      'I care about writing software that is maintainable, useful, and grounded in how teams actually ship work.',
    intro:
      'I currently work at JPMorgan Chase in Tampa as a Software Engineer in the SEP program. My internship path before that helped me build a practical foundation across frontend work, scripting, and engineering in real team environments.',
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
          'I am especially interested in growing into stronger product and systems ownership while continuing to deepen core software engineering skills.',
        icon: FiTrendingUp,
      },
      {
        title: 'Communication and execution',
        description:
          'The best engineering work is not just technical. It requires clean communication, dependable follow-through, and an eye for the user-facing outcome.',
        icon: FiZap,
      },
    ],
    links: [
      {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/taylortillander/',
        description: 'Professional timeline, current role, and background details.',
        icon: FiLinkedin,
      },
      {
        label: 'Resume link option',
        href: 'https://drive.google.com/file/d/1znxd-zL1JcuVz7zVPG7cfHsxg5BYJe2i/view',
        description: 'This can stay external or later be replaced with a hosted file like public/resume.pdf.',
        icon: FiBookOpen,
      },
    ],
    media: [
      {
        kind: 'iframe',
        title: 'Resume preview',
        src: 'https://drive.google.com/file/d/1znxd-zL1JcuVz7zVPG7cfHsxg5BYJe2i/preview',
        caption: 'GitHub Pages can also display a resume from your own repo if you add a PDF to public/ and link or embed it.',
      },
      {
        kind: 'image',
        title: 'LinkedIn QR',
        src: assetUrl('linkedin_qr.jpeg'),
        alt: 'LinkedIn QR code',
        caption: 'This QR asset is served directly from the repository and works cleanly with the GitHub Pages base path.',
      },
    ],
  },
  projects: {
    eyebrow: 'Builds',
    title: 'Projects that show how I think, learn, and ship.',
    summary:
      'The best way to evaluate engineering growth is to look at the work itself: what was built, how it was structured, and whether it keeps improving.',
    intro:
      'My GitHub captures the projects and experiments that matter most as I continue building experience. Over time this section can expand from a single external link into featured case studies with screenshots, outcomes, and technical decisions.',
    badges: ['GitHub portfolio', 'Iterative learning', 'Case study ready'],
    cards: [
      {
        title: 'Public project hub',
        description:
          'GitHub is the central place where I publish code, test ideas, and make my technical progression visible over time.',
        icon: FiGithub,
      },
      {
        title: 'Room to grow',
        description:
          'This page is now structured to support richer project cards later without having to redesign the whole site again.',
        icon: FiLayers,
      },
      {
        title: 'Implementation focus',
        description:
          'I value projects that move past novelty and show execution quality, tradeoff awareness, and clear technical communication.',
        icon: FiCode,
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
  },
};