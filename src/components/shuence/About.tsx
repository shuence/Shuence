import { useState } from 'react';
import { degrees } from '@/data/education';
import { certifications } from '@/data/certifications';
import {
  User,
  MapPin,
  GraduationCap,
  Award,
  BookOpen,
  Code,
  Star,
  ExternalLink,
  ArrowRight,
  FileTextIcon,
} from 'lucide-react';

// Extend the base interfaces to include IDs for hover tracking
interface ExtendedDegree {
  title: string;
  subtitle: string;
  logo_path: string;
  alt_name: string;
  duration: string;
  descriptions: string[];
  website_link: string;
  uniqueId: string; // For hover tracking
}

interface ExtendedCertification {
  title: string;
  subtitle: string;
  logo_path: string;
  certificate_link: string;
  alt_name: string;
  color_code: string;
  uniqueId: string; // For hover tracking
}

export default function About() {
  // Resume link
  const resumeLink = 'https://bit.ly/Shuence_Resume';

  // Transform data to include uniqueIds for tracking hover states
  const degreesWithIds: ExtendedDegree[] = degrees.map((degree, index) => ({
    ...degree,
    uniqueId: `degree-${index}`,
  }));

  const certificationsWithIds: ExtendedCertification[] = certifications.map((cert, index) => ({
    ...cert,
    uniqueId: `cert-${index}`,
  }));

  const [hoveredCert, setHoveredCert] = useState<string | null>(null);
  const [hoveredDegree, setHoveredDegree] = useState<string | null>(null);
  const [activeSkillTab, setActiveSkillTab] = useState('languages');

  // Define skill categories
  const skillCategories = {
    languages: ['C', 'C++', 'JavaScript', 'TypeScript', 'Python', 'Dart', 'Go'],
    frameworks: [
      'Next.js',
      'React.js',
      'Tailwind CSS',
      'Express.js',
      'Node.js',
      'FastAPI',
      'React Native',
      'Flutter',
    ],
    aiMl: ['Machine Learning', 'Deep Learning', 'Computer Vision', 'LLMs', 'OpenCV', 'OpenAI API'],
    devOpsCloud: [
      'Docker',
      'Kubernetes',
      'GitHub Actions',
      'Jenkins',
      'AWS',
      'GCP',
      'Supabase',
      'Linux',
      'Nginx',
    ],
    databases: ['MySQL', 'MongoDB', 'PostgreSQL', 'Redis', 'PlanetScale', 'Vector Databases'],
    otherSkills: [
      'Data Structures',
      'Algorithms',
      'System Design',
      'API Development',
      'CI/CD',
      'Git',
      'GitHub',
    ],
  };

  const skillCategoryLabels = {
    languages: 'Languages',
    frameworks: 'Frameworks',
    aiMl: 'AI/ML',
    devOpsCloud: 'DevOps/Cloud',
    databases: 'Databases',
    otherSkills: 'Other Skills',
  };

  const skillCategoryColors = {
    languages: 'primary',
    frameworks: 'blue-500',
    aiMl: 'purple-500',
    devOpsCloud: 'green-500',
    databases: 'amber-500',
    otherSkills: 'rose-500',
  };

  return (
    <section id="about" className="dark:bg-background-dark bg-background py-20 md:py-8">
      <div className="container mx-auto px-6 md:px-8">
        {/* About Me Hero Section with subtle animation */}
        <div className="mb-16 flex flex-col items-center text-center">
          <div className="mb-4 inline-block">
            <div className="relative">
              <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary to-blue-400 opacity-30 blur"></span>
              <div className="relative rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 dark:border-primary/30 dark:bg-primary/20">
                <span className="text-sm font-medium text-primary">About Me</span>
              </div>
            </div>
          </div>

          <h1 className="dark:text-foreground-dark relative mb-6 text-4xl font-bold text-foreground md:text-5xl">
            About Me
            <span className="absolute bottom-0 left-0 right-0 h-1 rounded bg-gradient-to-r from-primary/40 to-primary"></span>
          </h1>
          <p className="max-w-3xl text-lg text-muted-foreground dark:text-muted-foreground md:text-xl">
            Software engineer passionate about building impactful products that solve real-world
            problems
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 md:gap-16 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              {/* Profile Image with enhanced animated border */}
              <div className="group relative">
                <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-primary/60 via-blue-400/40 to-primary/20 opacity-60 blur-md transition duration-1000 group-hover:opacity-100"></div>
                <div className="absolute inset-0 transform rounded-lg bg-gradient-to-r from-primary/30 to-blue-400/20 opacity-0 transition duration-700 group-hover:scale-105 group-hover:opacity-100"></div>
                <div className="dark:bg-card-dark relative aspect-square overflow-hidden rounded-lg border border-border bg-card shadow-lg transition-colors duration-500 group-hover:border-primary/30 dark:border-border/50 md:aspect-[4/5]">
                  <img
                    src="https://avatars.githubusercontent.com/u/65482186?v=4"
                    alt="Shubham Pitekar"
                    className="h-full w-full transform object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    loading="eager"
                  />
                </div>
              </div>

              {/* Quick Info Card with hover effects */}
              <div className="dark:bg-card-dark group rounded-lg border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:border-primary/20 hover:shadow-md dark:border-border/50">
                <h3 className="dark:text-foreground-dark mb-4 flex items-center gap-2 text-lg font-semibold text-foreground">
                  <User
                    size={18}
                    className="text-primary transition-transform duration-300 group-hover:scale-110"
                  />
                  <span>Quick Info</span>
                </h3>
                <ul className="space-y-4">
                  <li className="-mx-2 flex items-start gap-3 rounded-md p-2 transition-colors duration-300 hover:bg-primary/5">
                    <MapPin size={18} className="mt-1 flex-shrink-0 text-primary" />
                    <div>
                      <span className="dark:text-foreground-dark block font-medium text-foreground">
                        Location
                      </span>
                      <span className="text-muted-foreground">Maharashtra, India</span>
                    </div>
                  </li>
                  <li className="-mx-2 flex items-start gap-3 rounded-md p-2 transition-colors duration-300 hover:bg-primary/5">
                    <GraduationCap size={18} className="mt-1 flex-shrink-0 text-primary" />
                    <div>
                      <span className="dark:text-foreground-dark block font-medium text-foreground">
                        Education
                      </span>
                      <span className="text-muted-foreground">
                        B.Tech in Electronics & Telecommunications
                      </span>
                    </div>
                  </li>
                  <li className="-mx-2 flex items-start gap-3 rounded-md p-2 transition-colors duration-300 hover:bg-primary/5">
                    <Star size={18} className="mt-1 flex-shrink-0 text-primary" />
                    <div>
                      <span className="dark:text-foreground-dark block font-medium text-foreground">
                        CGPA
                      </span>
                      <span className="text-muted-foreground">7.1</span>
                    </div>
                  </li>
                  <li className="-mx-2 flex items-start gap-3 rounded-md p-2 transition-colors duration-300 hover:bg-primary/5">
                    <BookOpen size={18} className="mt-1 flex-shrink-0 text-primary" />
                    <div>
                      <span className="dark:text-foreground-dark block font-medium text-foreground">
                        Focus
                      </span>
                      <span className="text-muted-foreground">
                        Full Stack Development, ML/AI, Cloud Technologies
                      </span>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Resume Button */}
              <div className="group relative overflow-hidden rounded-lg border border-primary/20 bg-gradient-to-r from-primary/10 to-blue-400/10 p-6 dark:border-primary/30 dark:from-primary/15 dark:to-blue-400/15">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-blue-400/20 opacity-0 blur-sm transition duration-500 group-hover:opacity-100"></div>
                <div className="relative">
                  <a
                    href={resumeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full transform items-center justify-center gap-2 rounded-md bg-primary px-4 py-2.5 text-center font-medium text-white shadow-sm transition-all duration-300 hover:bg-primary/90 hover:shadow group-hover:translate-y-[-1px] group-hover:shadow-primary/20"
                  >
                    <FileTextIcon size={18} />
                    Download Resume
                  </a>
                </div>
              </div>

              {/* Call to action */}
              <div className="group relative overflow-hidden rounded-lg border border-primary/20 bg-gradient-to-r from-primary/10 to-blue-400/10 p-6 dark:border-primary/30 dark:from-primary/15 dark:to-blue-400/15">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-blue-400/20 opacity-0 blur-sm transition duration-500 group-hover:opacity-100"></div>
                <div className="relative">
                  <h3 className="dark:text-foreground-dark mb-3 font-medium text-foreground">
                    Want to work together?
                  </h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    I'm currently open to new opportunities and collaborations.
                  </p>
                  <a
                    href="/contact"
                    className="block w-full transform rounded-md bg-primary px-4 py-2.5 text-center font-medium text-white shadow-sm transition-all duration-300 hover:bg-primary/90 hover:shadow group-hover:translate-y-[-1px] group-hover:shadow-primary/20"
                  >
                    Get in Touch
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            {/* About Me Content */}
            <div className="dark:bg-card-dark rounded-lg border border-border bg-card p-7 shadow-sm transition-shadow duration-300 hover:shadow-md dark:border-border/50 md:p-9">
              <div className="max-w-none space-y-6">
                <div className="mb-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                  About Me
                </div>
                <h3 className="dark:text-foreground-dark mb-6 text-2xl font-bold text-foreground">
                  My Journey in Tech
                </h3>
                <p className="dark:text-foreground-dark mb-6 text-lg leading-relaxed text-foreground">
                  I'm a software engineer focused on creating{' '}
                  <span className="font-medium text-primary">scalable</span>,{' '}
                  <span className="font-medium text-primary">efficient</span>, and{' '}
                  <span className="font-medium text-primary">innovative</span> digital solutions.
                </p>

                <p className="mb-6 leading-relaxed text-muted-foreground dark:text-muted-foreground">
                  My approach combines technical expertise with creative problem-solving. I
                  specialize in full-stack development using React, Next.js, Flutter, and cloud
                  technologies like AWS and Docker.
                </p>

                <p className="mb-6 leading-relaxed text-muted-foreground dark:text-muted-foreground">
                  When I'm not coding, you'll find me contributing to open-source projects,
                  participating in hackathons, or exploring new technologies to expand my skillset.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    'Full Stack',
                    'DevOps',
                    'Machine Learning',
                    'Mobile Development',
                    'Cloud Architecture',
                  ].map((tag, index) => (
                    <span
                      key={index}
                      className="dark:text-foreground-dark/80 rounded-full border border-border/40 bg-accent/10 px-3 py-1 text-sm text-foreground/80 transition-colors duration-300 hover:border-primary/30 hover:bg-primary/5 dark:border-border/30 dark:bg-accent/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-8 text-center">
                  <a
                    href="https://github.com/Shuence/Shuence"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 rounded-md border border-primary/30 bg-secondary px-6 py-3 text-secondary-foreground transition-all duration-300 hover:border-primary hover:shadow-md"
                  >
                    Learn More About Me
                    <ArrowRight
                      size={18}
                      className="transform transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </a>
                </div>
              </div>

              {/* Skills section with tabs and modern styling */}
              <div className="mt-16">
                <h3 className="dark:text-foreground-dark mb-8 flex items-center text-xl font-semibold text-foreground">
                  <span className="relative">
                    Skills & Expertise
                    <span className="absolute bottom-0 left-0 -mb-1.5 h-1 w-full bg-primary/30"></span>
                  </span>
                </h3>

                {/* Skill Category Tabs */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {(Object.keys(skillCategories) as Array<keyof typeof skillCategories>).map(
                    category => {
                      const isActive = activeSkillTab === category;
                      const colorClass =
                        skillCategoryColors[category as keyof typeof skillCategoryColors];

                      return (
                        <button
                          key={category}
                          onClick={() => setActiveSkillTab(category)}
                          className={`rounded-md px-3 py-1.5 text-sm transition-all duration-300 border ${
                            isActive
                              ? colorClass === 'primary' 
                                ? 'bg-primary/20 border-primary/30 text-primary'
                                : colorClass === 'blue-500'
                                ? 'bg-blue-500/20 border-blue-500/30 text-blue-500'
                                : colorClass === 'purple-500'
                                ? 'bg-purple-500/20 border-purple-500/30 text-purple-500'
                                : colorClass === 'green-500'
                                ? 'bg-green-500/20 border-green-500/30 text-green-500'
                                : colorClass === 'amber-500'
                                ? 'bg-amber-500/20 border-amber-500/30 text-amber-500'
                                : 'bg-rose-500/20 border-rose-500/30 text-rose-500'
                              : 'dark:bg-card-dark/50 dark:hover:text-foreground-dark border-border bg-card/50 text-muted-foreground hover:text-foreground dark:border-border/40'
                          }`}
                        >
                          {skillCategoryLabels[category as keyof typeof skillCategoryLabels]}
                        </button>
                      );
                    }
                  )}
                </div>

                {/* Active Skills Display */}
                <div className="dark:bg-card-dark/50 rounded-lg border border-border bg-card/50 p-5 shadow-sm dark:border-border/40">
                  <h4 className="dark:text-foreground-dark/90 mb-4 flex items-center text-base font-semibold text-foreground/90">
                    <span
                      className={`inline-block h-5 w-1.5 bg-${skillCategoryColors[activeSkillTab as keyof typeof skillCategoryColors]}/80 mr-2 rounded-sm`}
                    ></span>
                    {skillCategoryLabels[activeSkillTab as keyof typeof skillCategoryLabels]}
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    {skillCategories[activeSkillTab as keyof typeof skillCategories].map(
                      (skill, index) => {
                        const colorClass =
                          skillCategoryColors[activeSkillTab as keyof typeof skillCategoryColors];
                        return (
                          <div
                            key={index}
                            className={`px-3 py-1.5 bg-${colorClass}/5 dark:bg-${colorClass}/10 border border-${colorClass}/20 dark:border-${colorClass}/30 text-${colorClass === 'primary' ? 'primary' : `${colorClass}`} dark:text-${colorClass === 'primary' ? 'primary/90' : `${colorClass}/90`} rounded-md hover:bg-${colorClass}/10 dark:hover:bg-${colorClass}/20 text-sm transition-colors duration-300`}
                          >
                            {skill}
                          </div>
                        );
                      }
                    )}
                  </div>
                </div>
              </div>

              {/* Education Section with improved cards */}
              <div className="mt-16">
                <h3 className="dark:text-foreground-dark mb-8 flex items-center text-xl font-semibold text-foreground">
                  <span className="relative">
                    Education
                    <span className="absolute bottom-0 left-0 -mb-1.5 h-1 w-full bg-blue-500/30"></span>
                  </span>
                </h3>

                <div className="space-y-8">
                  {degreesWithIds.map((degree, index) => (
                    <div
                      key={index}
                      className={`dark:bg-card-dark/50 rounded-lg border bg-card/50 p-5 ${hoveredDegree === degree.uniqueId ? 'border-blue-400/40 shadow-md dark:border-blue-500/30' : 'border-border shadow-sm dark:border-border/40'} group transition-all duration-300`}
                      onMouseEnter={() => setHoveredDegree(degree.uniqueId)}
                      onMouseLeave={() => setHoveredDegree(null)}
                    >
                      <div className="flex flex-col gap-4 md:flex-row md:items-start">
                        <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center overflow-hidden rounded-lg border border-gray-200 bg-white p-2 transition-colors duration-300 group-hover:border-blue-200 dark:border-gray-700 dark:bg-gray-800 dark:group-hover:border-blue-700/30">
                          <img
                            src={`/images/${degree.logo_path}`}
                            alt={degree.alt_name}
                            className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-110"
                            onError={e => {
                              (e.target as HTMLImageElement).src = '/placeholder.svg';
                            }}
                          />
                        </div>

                        <div className="flex-grow">
                          <h4 className="dark:text-foreground-dark mb-1 text-lg font-semibold text-foreground">
                            {degree.title}
                          </h4>
                          <h5 className="mb-2 font-medium text-blue-600 dark:text-blue-400">
                            {degree.subtitle}
                          </h5>
                          <p className="mb-3 text-sm text-gray-500 dark:text-gray-400">
                            {degree.duration}
                          </p>

                          <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                            {degree.descriptions.map((desc, descIndex) => (
                              <li key={descIndex} className="flex items-start gap-2">
                                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500"></span>
                                <span>{desc}</span>
                              </li>
                            ))}
                          </ul>

                          <a
                            href={degree.website_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-3 inline-flex items-center gap-1 text-sm text-blue-600 transition-all duration-300 hover:underline group-hover:gap-2 dark:text-blue-400"
                          >
                            Visit Website{' '}
                            <ExternalLink
                              size={14}
                              className="transition-transform duration-300 group-hover:translate-x-0.5"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications Section with enhanced cards */}
              <div className="mt-16">
                <h3 className="dark:text-foreground-dark mb-8 flex items-center text-xl font-semibold text-foreground">
                  <span className="relative">
                    Certifications
                    <span className="absolute bottom-0 left-0 -mb-1.5 h-1 w-full bg-green-500/30"></span>
                  </span>
                </h3>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  {certificationsWithIds.map((cert, index) => {
                    const isHovered = hoveredCert === cert.uniqueId;

                    return (
                      <div
                        key={index}
                        className={`dark:bg-card-dark/50 rounded-lg border bg-card/50 p-4 ${isHovered ? 'border-green-400/50 dark:border-green-500/40' : 'border-border dark:border-border/40'} shadow-sm transition-all duration-300 hover:shadow-md ${isHovered ? '-translate-y-0.5 transform' : ''}`}
                        onMouseEnter={() => setHoveredCert(cert.uniqueId)}
                        onMouseLeave={() => setHoveredCert(null)}
                      >
                        <div className="flex items-start gap-3">
                          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center overflow-hidden rounded-md border border-gray-200 bg-white p-1.5 transition-all duration-300 dark:border-gray-700 dark:bg-gray-800">
                            <img
                              src={`/images/${cert.logo_path}`}
                              alt={cert.alt_name}
                              className={`max-h-full max-w-full object-contain ${isHovered ? 'scale-110' : ''} transition-transform duration-300`}
                              onError={e => {
                                (e.target as HTMLImageElement).src = '/placeholder.svg';
                              }}
                            />
                          </div>

                          <div>
                            <h4 className="dark:text-foreground-dark font-medium text-foreground">
                              {cert.title}
                            </h4>
                            <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">
                              {cert.subtitle}
                            </p>
                            <a
                              href={cert.certificate_link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group inline-flex items-center gap-1 text-xs text-green-600 hover:underline dark:text-green-400"
                            >
                              View Certificate
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-3 w-3 transform transition-transform duration-300 group-hover:translate-x-0.5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
