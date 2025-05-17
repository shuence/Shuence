// Skills data
export interface Skill {
  name: string;
  category?: 'frontend' | 'backend' | 'mobile' | 'devops' | 'database' | 'ai' | 'other';
  level?: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}

export const skills: Skill[] = [
  { name: 'React', category: 'frontend', level: 'expert' },
  { name: 'TypeScript', category: 'frontend', level: 'expert' },
  { name: 'Next.js', category: 'frontend', level: 'expert' },
  { name: 'Node.js', category: 'backend', level: 'expert' },
  { name: 'Flutter', category: 'mobile', level: 'expert' },
  { name: 'AWS', category: 'devops', level: 'advanced' },
  { name: 'Docker', category: 'devops', level: 'advanced' },
  { name: 'MongoDB', category: 'database', level: 'advanced' },
  { name: 'PostgreSQL', category: 'database', level: 'advanced' },
  { name: 'Machine Learning', category: 'ai', level: 'intermediate' },
  { name: 'Python', category: 'backend', level: 'advanced' },
  { name: 'JavaScript', category: 'frontend', level: 'expert' },
  { name: 'GraphQL', category: 'backend', level: 'advanced' },
  { name: 'Redux', category: 'frontend', level: 'advanced' },
  { name: 'Git', category: 'devops', level: 'expert' },
  { name: 'CI/CD', category: 'devops', level: 'intermediate' },
  { name: 'Tailwind CSS', category: 'frontend', level: 'expert' },
  { name: 'Kubernetes', category: 'devops', level: 'intermediate' },
  { name: 'Firebase', category: 'backend', level: 'advanced' },
  { name: 'HTML/CSS', category: 'frontend', level: 'expert' },
];

// Skills for homepage display
export const featuredSkills = [
  'React',
  'TypeScript',
  'Next.js',
  'Node.js',
  'Flutter',
  'AWS',
  'Docker',
  'MongoDB',
  'PostgreSQL',
  'Machine Learning',
];
