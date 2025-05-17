// Work experience data
export interface WorkExperience {
  id: string;
  company: string;
  position: string;
  location?: string;
  period: string;
  companyUrl?: string;
  achievements: string[];
  technologies?: string[];
  isRemote?: boolean;
  logo?: string;
}

export const workExperiences: WorkExperience[] = [
  {
    id: 'spinacho',
    company: 'Spinacho',
    position: 'Software Engineer',
    location: 'Remote',
    period: 'February 2024 - Present',
    companyUrl: 'https://spinacho.com',
    isRemote: true,
    logo: '/images/work/spinacho.png',
    achievements: [
      'Developed 4 integrated Flutter apps (Customer, Restaurant, Delivery, Admin Panel), leading a team of three.',
      'Enhanced AWS EC2 backend, implementing caching to boost efficiency 35% and reduce API response time 40%.',
      'Led a 14-day test cycle with 30 testers before launching three apps on Google Play Store, increasing stability by 25%.',
    ],
    technologies: ['Flutter', 'AWS', 'EC2', 'Firebase', 'Google Play Store', 'REST API'],
  },
  {
    id: 'travellers-lounge',
    company: 'Travellers Lounge',
    position: 'Software Developer Intern',
    location: 'Remote',
    period: 'November 2024 - Present',
    companyUrl: 'https://travellerslounge.com.au',
    isRemote: true,
    logo: '/images/work/travellerslounge.png',
    achievements: [
      'Migrated WordPress to Next.js + TypeScript, leveraging SSR, caching, and CDN to slash load time by 50%.',
      'Engineered backend with 7 travel APIs, automating sync, reducing latency, and scaling services by 40%.',
      'Refactored Redis caching to load tours 99% faster, cutting API response time from 40s to ≤100ms.',
      'Deployed on AWS using Docker, GitHub Actions, and CI/CD, automating builds and ensuring high availability.',
    ],
    technologies: ['Next.js', 'TypeScript', 'Redis', 'AWS', 'Docker', 'GitHub Actions', 'CI/CD'],
  },
  {
    id: 'safe-trip',
    company: 'Safe Trip Tourism',
    position: 'FullStack Developer Intern',
    location: 'Remote',
    period: 'August 2024 - February 2025',
    companyUrl: 'https://safetriptourism.com',
    isRemote: true,
    logo: '/images/work/safetriptourism.png',
    achievements: [
      'Developed a Next.js + Node.js platform, caching via Redis & Docker to achieve 0.4s load time.',
      'Refined AWS-hosted APIs, leveraging query tuning and load balancing to accelerate response time by 30%.',
      'Automated invoicing via Node.js & Stripe Webhooks, cutting manual tasks 50% and boosting payments 40%.',
    ],
    technologies: ['Next.js', 'Node.js', 'Redis', 'Docker', 'AWS', 'Stripe'],
  },
  {
    id: 'quartet',
    company: 'Quartet StudioZ',
    position: 'Software Engineer',
    location: 'Remote',
    period: 'August 2023 - November 2024',
    companyUrl: 'https://quartetstudioz.shuence.com/',
    isRemote: true,
    logo: '/images/work/quartet_studioz.png',
    achievements: [
      'Boosted revenue by Rs. 200k by automating workflows, optimizing operations, and improving client relationships.',
      'Achieved 0.4s load speeds by optimizing SSR, code splitting, and caching in Next.js, ReactJS & TypeScript.',
      'Led Flutter projects, enhancing UI/UX and scalability while reducing development time by 30%.',
    ],
    technologies: ['Next.js', 'ReactJS', 'TypeScript', 'Flutter', 'SSR', 'Optimization'],
  },
];

// For homepage carousel - simplified and shorter achievements
export const homeWorkExperiences: WorkExperience[] = [
  {
    id: 'spinacho',
    company: 'Spinacho',
    position: 'Software Engineer',
    location: 'Remote',
    period: 'February 2024 - Present',
    companyUrl: 'https://spinacho.com',
    isRemote: true,
    logo: '/images/work/spinacho.png',
    achievements: [
      'Developed 4 integrated Flutter apps (Customer, Restaurant, Delivery, Admin Panel), leading a team of three.',
      'Enhanced AWS EC2 backend, implementing caching to boost efficiency 35% and reduce API response time 40%.',
      'Led a 14-day test cycle with 30 testers before launching three apps on Google Play Store, increasing stability by 25%.',
    ],
    technologies: ['Flutter', 'AWS', 'EC2', 'Firebase', 'Google Play Store', 'REST API'],
  },
  {
    id: 'travellers-lounge',
    company: 'Travellers Lounge',
    position: 'Software Developer Intern',
    location: 'Remote',
    period: 'November 2024 - Present',
    companyUrl: 'https://travellerslounge.com.au',
    isRemote: true,
    logo: '/images/work/travellerslounge.png',
    achievements: [
      'Migrated WordPress to Next.js + TypeScript, leveraging SSR, caching, and CDN to slash load time by 50%.',
      'Engineered backend with 7 travel APIs, automating sync, reducing latency, and scaling services by 40%.',
      'Refactored Redis caching to load tours 99% faster, cutting API response time from 40s to ≤100ms.',
      'Deployed on AWS using Docker, GitHub Actions, and CI/CD, automating builds and ensuring high availability.',
    ],
    technologies: ['Next.js', 'TypeScript', 'Redis', 'AWS', 'Docker', 'GitHub Actions', 'CI/CD'],
  },
  {
    id: 'safe-trip',
    company: 'Safe Trip Tourism',
    position: 'FullStack Developer Intern',
    location: 'Remote',
    period: 'August 2024 - February 2025',
    companyUrl: 'https://safetriptourism.com',
    isRemote: true,
    logo: '/images/work/safetriptourism.png',
    achievements: [
      'Developed a Next.js + Node.js platform, caching via Redis & Docker to achieve 0.4s load time.',
      'Refined AWS-hosted APIs, leveraging query tuning and load balancing to accelerate response time by 30%.',
      'Automated invoicing via Node.js & Stripe Webhooks, cutting manual tasks 50% and boosting payments 40%.',
    ],
    technologies: ['Next.js', 'Node.js', 'Redis', 'Docker', 'AWS', 'Stripe'],
  },
  {
    id: 'quartet',
    company: 'Quartet StudioZ',
    position: 'Software Engineer',
    location: 'Remote',
    period: 'August 2023 - November 2024',
    companyUrl: 'https://quartetstudioz.shuence.com/',
    isRemote: true,
    logo: '/images/work/quartet_studioz.png',
    achievements: [
      'Boosted revenue by Rs. 200k by automating workflows, optimizing operations, and improving client relationships.',
      'Achieved 0.4s load speeds by optimizing SSR, code splitting, and caching in Next.js, ReactJS & TypeScript.',
      'Led Flutter projects, enhancing UI/UX and scalability while reducing development time by 30%.',
    ],
    technologies: ['Next.js', 'ReactJS', 'TypeScript', 'Flutter', 'SSR', 'Optimization'],
  },
];
