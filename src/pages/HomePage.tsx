import Layout from '@/components/shuence/Layout';
import Hero from '@/components/shuence/Hero';
import Loader from '@/components/shuence/Loader';
import ProjectCarousel from '@/components/shuence/ProjectCarousel';
import SectionReveal from '@/components/shuence/SectionReveal';
import { useState, useEffect, useRef, useCallback } from 'react';
import {
  ArrowRight,
  Briefcase,
  User,
  Code,
  Send,
  GraduationCap,
  Award,
  ExternalLink,
  ArrowLeft,
} from 'lucide-react';
import { projects as allProjects } from '@/data/projects';
import { degrees } from '@/data/education';
import { certifications } from '@/data/certifications';
import { homeWorkExperiences } from '@/data/workExperience';
import { featuredSkills } from '@/data/skills';
import ContactForm from '@/components/shuence/ContactForm';

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [currentExpIndex, setCurrentExpIndex] = useState(0);
  const [isExpHovering, setIsExpHovering] = useState(false);
  const expCarouselRef = useRef<HTMLDivElement>(null);
  const expAutoPlayRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Add a slight delay to ensure assets are loaded
    const timer = setTimeout(() => {
      setIsLoaded(true);

      // Update document title for home page
      document.title = 'Shuence | Software Engineer';
    }, 2000); // Slightly reduced delay for better UX

    const handleScroll = () => {
      // Get all sections and find the one currently in view
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 300;

      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Get featured projects from data folder
  const featuredProjects = allProjects.slice(0, 3);

  // Use work experiences from data folder
  const workExperiences = homeWorkExperiences;

  // Work Experience Carousel functions
  const scrollToCurrentExperience = useCallback(() => {
    if (!expCarouselRef.current) return;

    const containerWidth = expCarouselRef.current.clientWidth;
    const newScrollPosition = containerWidth * currentExpIndex;

    expCarouselRef.current.scrollTo({
      left: newScrollPosition,
      behavior: 'smooth',
    });
  }, [currentExpIndex]);

  const nextExperience = useCallback(() => {
    setCurrentExpIndex(prevIndex => (prevIndex + 1) % workExperiences.length);
  }, [workExperiences.length]);

  const prevExperience = useCallback(() => {
    setCurrentExpIndex(
      prevIndex => (prevIndex - 1 + workExperiences.length) % workExperiences.length
    );
  }, [workExperiences.length]);

  const jumpToExperience = useCallback((index: number) => {
    setCurrentExpIndex(index);
  }, []);

  // Effect to handle scrolling when currentExpIndex changes
  useEffect(() => {
    scrollToCurrentExperience();
  }, [currentExpIndex, scrollToCurrentExperience]);

  // Auto-play functionality for work experience carousel
  useEffect(() => {
    if (expAutoPlayRef.current) {
      clearInterval(expAutoPlayRef.current);
      expAutoPlayRef.current = null;
    }

    if (!isExpHovering) {
      expAutoPlayRef.current = setInterval(() => {
        nextExperience();
      }, 5000);
    }

    return () => {
      if (expAutoPlayRef.current) {
        clearInterval(expAutoPlayRef.current);
        expAutoPlayRef.current = null;
      }
    };
  }, [isExpHovering, nextExperience]);

  // Featured education and certifications
  const featuredEducation = degrees[0];
  const featuredCertifications = certifications.slice(0, 2);
  return (
    <>
      <Loader onLoadComplete={() => setIsLoaded(true)} />

      <div className={`transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <Layout>
          <Hero />

          {/* Featured Projects Carousel Section */}
          <SectionReveal>
            <section
              id="projects-preview"
              className="dark:bg-background-dark bg-background py-16 md:py-24"
            >
              <div className="container mx-auto px-6 md:px-8">
                <div className="mb-8 text-center md:mb-8">
                  <div className="mb-4 inline-flex items-center justify-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 dark:border-primary/30 dark:bg-primary/20">
                    <Code size={16} className="mr-2 text-primary" />
                    <span className="text-sm font-medium text-primary">Showcase</span>
                  </div>
                  <h2 className="dark:text-foreground-dark mb-4 text-center text-3xl font-bold text-foreground md:text-4xl">
                    Featured Projects
                  </h2>
                  <p className="mx-auto max-w-2xl text-center text-muted-foreground dark:text-muted-foreground">
                    Explore my recent work and see how I create innovative solutions across various
                    domains.
                  </p>
                </div>

                <ProjectCarousel projects={featuredProjects} />

                <div className="mt-10 text-center">
                  <a
                    href="/work"
                    className="group inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-white shadow-md transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
                  >
                    View All Projects
                    <ArrowRight
                      size={18}
                      className="transform transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </a>
                </div>
              </div>
            </section>
          </SectionReveal>
          {/* Experience Preview Section */}
          <SectionReveal>
            <section
              id="experience-preview"
              className="dark:bg-card-dark border-y border-border/30 bg-card py-16 dark:border-border/20 md:py-24"
            >
              <div className="container mx-auto px-6 md:px-8">
                <div className="mb-12 text-center">
                  <div className="mb-4 inline-flex items-center justify-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 dark:border-primary/30 dark:bg-primary/20">
                    <Briefcase size={16} className="mr-2 text-primary" />
                    <span className="text-sm font-medium text-primary">Experience</span>
                  </div>
                  <h2 className="dark:text-foreground-dark mb-4 text-center text-3xl font-bold text-foreground md:text-4xl">
                    Work History
                  </h2>
                  <p className="mx-auto max-w-2xl text-center text-muted-foreground dark:text-muted-foreground">
                    A glimpse into my professional journey.
                  </p>
                </div>

                {/* Work Experience Carousel */}
                <div
                  className="relative mx-auto max-w-3xl"
                  onMouseEnter={() => setIsExpHovering(true)}
                  onMouseLeave={() => setIsExpHovering(false)}
                >
                  {/* Main carousel container */}
                  <div
                    ref={expCarouselRef}
                    className="flex w-full snap-x snap-mandatory overflow-x-hidden"
                    style={{ scrollbarWidth: 'none' }}
                  >
                    {workExperiences.map((exp, index) => (
                      <div key={exp.id} className="w-full flex-shrink-0 flex-grow-0 snap-center">
                        <div className="dark:bg-background-dark group relative mx-auto overflow-hidden rounded-xl border border-border/50 bg-background p-6 shadow-md transition-all duration-500 hover:translate-y-[-2px] hover:transform hover:shadow-lg dark:border-border/30">
                          {/* Animated gradient background */}
                          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 opacity-0 transition-opacity duration-700 group-hover:opacity-100"></div>
                          <div className="absolute right-0 top-0 h-20 w-20 transform rounded-bl-full bg-gradient-to-bl from-primary/10 to-transparent transition-transform duration-700 group-hover:scale-110"></div>

                          <div className="relative z-10 flex items-start gap-4">
                            {' '}
                            <div className="dark:bg-card-dark/80 flex h-14 w-14 items-center justify-center rounded-full border border-border bg-card/80 p-2 transition-colors duration-300 group-hover:border-primary/30 dark:border-border/50">
                              <img
                                src={exp.logo}
                                alt={exp.company}
                                className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-110"
                                loading="eager"
                                onError={e => {
                                  (e.target as HTMLImageElement).src = '/images/github_logo.png';
                                }}
                              />
                            </div>
                            <div className="flex-grow">
                              <h3 className="dark:text-foreground-dark text-xl font-bold text-foreground">
                                {exp.company}
                              </h3>
                              <div className="mb-4 mt-1 flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3">
                                <p className="font-medium text-primary">{exp.position}</p>
                                <span className="hidden text-muted-foreground sm:inline">•</span>
                                <span className="text-sm text-muted-foreground">{exp.period}</span>
                              </div>

                              <ul className="mb-6 space-y-2">
                                {exp.achievements.map((achievement, i) => (
                                  <li key={i} className="flex items-baseline gap-2">
                                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></span>
                                    <span className="text-sm text-muted-foreground dark:text-muted-foreground">
                                      {achievement}
                                    </span>
                                  </li>
                                ))}
                              </ul>

                              {exp.technologies && (
                                <div className="mb-6 mt-4 flex flex-wrap gap-2">
                                  {exp.technologies.map((tech, i) => (
                                    <span
                                      key={i}
                                      className="rounded-md border border-primary/10 bg-primary/5 px-2.5 py-1 text-xs font-medium text-primary/90 dark:border-primary/20 dark:bg-primary/10 dark:text-primary/80"
                                    >
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Carousel controls - positioned at bottom left */}
                  <div className="absolute bottom-0 left-0 mb-4 ml-4 flex items-center gap-2">
                    <button
                      onClick={prevExperience}
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background/90 shadow-sm transition-colors duration-300 hover:bg-background"
                      aria-label="Previous experience"
                    >
                      <ArrowLeft size={16} />
                    </button>
                    <button
                      onClick={nextExperience}
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background/90 shadow-sm transition-colors duration-300 hover:bg-background"
                      aria-label="Next experience"
                    >
                      <ArrowRight size={16} />
                    </button>
                  </div>

                  {/* Indicators */}
                  <div className="mt-5 flex justify-center gap-2">
                    {workExperiences.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => jumpToExperience(index)}
                        className={`h-2 w-2 rounded-full transition-all duration-300 ${
                          index === currentExpIndex
                            ? 'w-6 bg-primary'
                            : 'bg-primary/30 hover:bg-primary/50'
                        }`}
                        aria-label={`Go to experience ${index + 1}`}
                      />
                    ))}
                  </div>

                  <div className="mt-6 text-center">
                    <a
                      href="/experience"
                      className="inline-flex items-center gap-1 font-medium text-primary transition-all duration-300 hover:underline group-hover:gap-2"
                    >
                      View Full Experience{' '}
                      <ArrowRight
                        size={16}
                        className="transform transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </SectionReveal>

          {/* About/Education Preview Section */}
          <SectionReveal>
            <section
              id="about-preview"
              className="dark:bg-background-dark bg-background py-16 md:py-24"
            >
              <div className="container mx-auto px-6 md:px-8">
                <div className="mb-12 text-center">
                  <div className="mb-4 inline-flex items-center justify-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 dark:border-primary/30 dark:bg-primary/20">
                    <User size={16} className="mr-2 text-primary" />
                    <span className="text-sm font-medium text-primary">About Me</span>
                  </div>
                  <h2 className="dark:text-foreground-dark mb-4 text-center text-3xl font-bold text-foreground md:text-4xl">
                    Education & Skills
                  </h2>
                  <p className="mx-auto max-w-2xl text-center text-muted-foreground dark:text-muted-foreground">
                    My academic background and professional qualifications.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                  {/* Education Card */}
                  <div className="dark:bg-card-dark group rounded-lg border border-border/50 bg-card p-6 shadow-sm transition-all duration-300 hover:translate-y-[-2px] hover:transform hover:shadow-md dark:border-border/30">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="rounded-full bg-blue-500/10 p-2.5 transition-colors duration-300 group-hover:bg-blue-500/20 dark:bg-blue-500/20 dark:group-hover:bg-blue-500/30">
                        <GraduationCap
                          size={20}
                          className="text-blue-600 transition-transform duration-300 group-hover:scale-110 dark:text-blue-400"
                        />
                      </div>
                      <h3 className="dark:text-foreground-dark text-xl font-bold text-foreground">
                        Education
                      </h3>
                    </div>

                    <div className="mt-5 flex items-start gap-3">
                      <div>
                        <h4 className="dark:text-foreground-dark font-medium text-foreground">
                          {featuredEducation.title}
                        </h4>
                        <p className="mt-0.5 text-sm text-primary dark:text-primary/90">
                          {featuredEducation.subtitle}
                        </p>
                        <p className="mt-1 text-xs text-muted-foreground">
                          {featuredEducation.duration}
                        </p>
                      </div>
                    </div>

                    <div className="mt-5 text-center">
                      <a
                        href="/about"
                        className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-all duration-300 hover:underline group-hover:gap-2"
                      >
                        See full education details{' '}
                        <ArrowRight
                          size={14}
                          className="transform transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </a>
                    </div>
                  </div>

                  {/* Certifications Card */}
                  <div className="dark:bg-card-dark group rounded-lg border border-border/50 bg-card p-6 shadow-sm transition-all duration-300 hover:translate-y-[-2px] hover:transform hover:shadow-md dark:border-border/30">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="rounded-full bg-green-500/10 p-2.5 transition-colors duration-300 group-hover:bg-green-500/20 dark:bg-green-500/20 dark:group-hover:bg-green-500/30">
                        <Award
                          size={20}
                          className="text-green-600 transition-transform duration-300 group-hover:scale-110 dark:text-green-400"
                        />
                      </div>
                      <h3 className="dark:text-foreground-dark text-xl font-bold text-foreground">
                        Certifications
                      </h3>
                    </div>

                    <div className="mt-5 space-y-3">
                      {featuredCertifications.map((cert, idx) => (
                        <div
                          key={idx}
                          className="group/cert flex items-start gap-3 rounded-md p-2 transition-colors duration-300 hover:bg-green-50/30 dark:hover:bg-green-900/10"
                        >
                          {' '}
                          <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-md border border-gray-200 bg-white p-1 transition-colors duration-300 group-hover/cert:border-green-200 dark:border-gray-700 dark:bg-gray-800 dark:group-hover/cert:border-green-700/30">
                            <img
                              src={`/images/${cert.logo_path}`}
                              alt={cert.alt_name}
                              className="h-full w-full object-contain transition-transform duration-300 group-hover/cert:scale-110"
                              loading="eager"
                              onError={e => {
                                (e.target as HTMLImageElement).src = '/placeholder.svg';
                              }}
                            />
                          </div>
                          <div>
                            <h4 className="dark:text-foreground-dark flex items-center text-sm font-medium text-foreground">
                              {cert.title}
                              <a
                                href={cert.certificate_link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ml-1 text-primary opacity-0 transition-opacity duration-300 group-hover/cert:opacity-100"
                              >
                                <ExternalLink size={12} />
                              </a>
                            </h4>
                            <p className="text-xs text-muted-foreground">{cert.subtitle}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-5 text-center">
                      <a
                        href="/about"
                        className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-all duration-300 hover:underline group-hover:gap-2"
                      >
                        View all certifications{' '}
                        <ArrowRight
                          size={14}
                          className="transform transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </a>
                    </div>
                  </div>

                  {/* Skills Preview */}
                  <div className="dark:bg-card-dark group rounded-lg border border-border/50 bg-card p-6 shadow-sm transition-all duration-300 hover:translate-y-[-2px] hover:transform hover:shadow-md dark:border-border/30">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="rounded-full bg-purple-500/10 p-2.5 transition-colors duration-300 group-hover:bg-purple-500/20 dark:bg-purple-500/20 dark:group-hover:bg-purple-500/30">
                        <Code
                          size={20}
                          className="text-purple-600 transition-transform duration-300 group-hover:scale-110 dark:text-purple-400"
                        />
                      </div>
                      <h3 className="dark:text-foreground-dark text-xl font-bold text-foreground">
                        Key Skills
                      </h3>
                    </div>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {featuredSkills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="transform rounded-md border border-purple-500/20 bg-purple-500/5 px-3 py-1.5 text-xs text-purple-600 transition-colors duration-500 hover:scale-105 group-hover:bg-purple-500/10 dark:border-purple-500/30 dark:bg-purple-500/10 dark:text-purple-400 dark:group-hover:bg-purple-500/20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className="mt-5 text-center">
                      <a
                        href="/about"
                        className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-all duration-300 hover:underline group-hover:gap-2"
                      >
                        Explore all skills{' '}
                        <ArrowRight
                          size={14}
                          className="transform transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </SectionReveal>

          {/* Contact Preview Section */}
          <SectionReveal>
            <section
              id="contact-preview"
              className="dark:bg-card-dark border-t border-border/30 bg-card py-16 dark:border-border/20 md:py-8"
            >
              <div className="container mx-auto px-6 md:px-8">
                <div className="mb-12 text-center">
                  <div className="mb-4 inline-flex items-center justify-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 dark:border-primary/30 dark:bg-primary/20">
                    <Send size={16} className="mr-2 text-primary" />
                    <span className="text-sm font-medium text-primary">Get In Touch</span>
                  </div>
                  <h2 className="dark:text-foreground-dark mb-4 text-center text-3xl font-bold text-foreground md:text-4xl">
                    Contact Me
                  </h2>
                  <p className="mx-auto max-w-2xl text-center text-muted-foreground dark:text-muted-foreground">
                    Have a question or want to work together? Feel free to reach out!
                  </p>
                </div>

                <div className="relative mx-auto max-w-2xl">
                  {/* Subtle background effect */}
                  <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/5 blur-3xl"></div>
                  <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-primary/5 blur-3xl"></div>

                  <div className="relative">
                    <ContactForm />
                  </div>
                </div>
              </div>
            </section>
          </SectionReveal>
        </Layout>
      </div>
    </>
  );
}
