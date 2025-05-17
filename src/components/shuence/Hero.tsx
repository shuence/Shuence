import { ArrowDownIcon, FileTextIcon, TrophyIcon } from 'lucide-react';
import { useEffect, useRef, useState, useMemo } from 'react';
import { FaGithub, FaXTwitter, FaLinkedinIn, FaEnvelope } from 'react-icons/fa6';

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const badgesRef = useRef<HTMLDivElement>(null);
  const achievementsRef = useRef<HTMLDivElement>(null);
  const socialsRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  // Resume and portfolio links
  const resumeLink = 'https://bit.ly/Shuence_Resume';
  const achievementLink =
    'https://drive.google.com/file/d/1iwFkfwIFdpvTA1YxVA7C2Y642bttPE8s/view?usp=sharing';
  const portfolioRepo = 'https://github.com/Shuence/Shuence';

  // For typing effect - multiple roles
  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const roles = useMemo(
    () => [
      'Software Engineer',
      'Frontend Developer',
      'Backend Developer',
      'Fullstack Developer',
      'Next.js Developer',
      'React Native Developer',
      'Flutter Developer',
      'Open Source Contributor',
      'Startup Founder',
    ],
    []
  );
  const typingSpeed = 50;
  const deletingSpeed = 30;
  const pauseDuration = 1500;

  useEffect(() => {
    // Simple fade-in and slide-up animation for hero elements
    const animateElements = () => {
      if (titleRef.current) {
        titleRef.current.style.opacity = '1';
        titleRef.current.style.transform = 'translateY(0)';
      }

      setTimeout(() => {
        if (subtitleRef.current) {
          subtitleRef.current.style.opacity = '1';
          subtitleRef.current.style.transform = 'translateY(0)';
        }
      }, 300);

      setTimeout(() => {
        if (badgesRef.current) {
          badgesRef.current.style.opacity = '1';
          badgesRef.current.style.transform = 'translateY(0)';
        }
      }, 600);

      setTimeout(() => {
        if (achievementsRef.current) {
          achievementsRef.current.style.opacity = '1';
          achievementsRef.current.style.transform = 'translateY(0)';
        }
      }, 750);

      setTimeout(() => {
        if (socialsRef.current) {
          socialsRef.current.style.opacity = '1';
          socialsRef.current.style.transform = 'translateY(0)';
        }
      }, 900);

      setTimeout(() => {
        if (buttonsRef.current) {
          buttonsRef.current.style.opacity = '1';
          buttonsRef.current.style.transform = 'translateY(0)';
        }
      }, 1050);
    };

    // Trigger animations after component mounts
    window.requestAnimationFrame(() => {
      animateElements();
    });
  }, []);

  // Typing effect with multiple roles
  useEffect(() => {
    const currentRole = roles[roleIndex];

    const timer = setTimeout(
      () => {
        if (!isDeleting) {
          setText(currentRole.substring(0, text.length + 1));

          // If complete, start deleting after pause
          if (text === currentRole) {
            setTimeout(() => {
              setIsDeleting(true);
            }, pauseDuration);
          }
        } else {
          setText(currentRole.substring(0, text.length - 1));

          // If deleted, move to next role
          if (text === '') {
            setIsDeleting(false);
            setRoleIndex((roleIndex + 1) % roles.length);
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex, roles]);
  return (
    <section id="home" className="relative flex min-h-screen items-center pb-20 pt-28 md:pt-32">
      <div className="container mx-auto px-6 md:px-8">
        <div className="mx-auto max-w-3xl space-y-4">
          <h1
            ref={titleRef}
            className="dark:text-foreground-dark/90 translate-y-4 transform text-5xl font-bold leading-tight tracking-tighter text-foreground/90 opacity-0 transition-all duration-700 sm:text-6xl md:text-7xl"
          >
            <span className="block">Shubham Pitekar</span>
            <span className="block">(Shuence)</span>
          </h1>

          <p
            ref={subtitleRef}
            className="mt-6 translate-y-4 transform text-xl leading-relaxed text-accent-foreground/80 opacity-0 transition-all duration-700 dark:text-accent-foreground/90 md:text-2xl"
          >
            <span className="text-primary/90 dark:text-primary/95">{text}</span>
            <span className="animate-pulse">|</span>
            <span className="dark:text-foreground-dark/70 ml-1 mt-1 block text-base text-foreground/70">
              Crafting scalable, efficient, and innovative digital solutions.
            </span>
          </p>
          {/* Tech Badges */}
          <div
            ref={badgesRef}
            className="mt-6 flex translate-y-4 transform flex-wrap gap-2 opacity-0 transition-all duration-700"
          >
            <span className="rounded-full border border-primary/20 bg-secondary/80 px-3 py-1 text-sm text-secondary-foreground/90 dark:border-primary/15 dark:bg-secondary/60 dark:text-secondary-foreground/80">
              React
            </span>
            <span className="rounded-full border border-primary/20 bg-secondary/80 px-3 py-1 text-sm text-secondary-foreground/90 dark:border-primary/15 dark:bg-secondary/60 dark:text-secondary-foreground/80">
              TypeScript
            </span>
            <span className="rounded-full border border-primary/20 bg-secondary/80 px-3 py-1 text-sm text-secondary-foreground/90 dark:border-primary/15 dark:bg-secondary/60 dark:text-secondary-foreground/80">
              Node.js
            </span>
            <span className="rounded-full border border-primary/20 bg-secondary/80 px-3 py-1 text-sm text-secondary-foreground/90 dark:border-primary/15 dark:bg-secondary/60 dark:text-secondary-foreground/80">
              Next.js
            </span>
            <span className="rounded-full border border-primary/20 bg-secondary/80 px-3 py-1 text-sm text-secondary-foreground/90 dark:border-primary/15 dark:bg-secondary/60 dark:text-secondary-foreground/80">
              PostgreSQL
            </span>
            <span className="rounded-full border border-primary/20 bg-secondary/80 px-3 py-1 text-sm text-secondary-foreground/90 dark:border-primary/15 dark:bg-secondary/60 dark:text-secondary-foreground/80">
              Flutter
            </span>
            <span className="rounded-full border border-primary/20 bg-secondary/80 px-3 py-1 text-sm text-secondary-foreground/90 dark:border-primary/15 dark:bg-secondary/60 dark:text-secondary-foreground/80">
              React Native
            </span>
          </div>
          {/* Achievements */}
          <div
            ref={achievementsRef}
            className="mt-4 flex translate-y-4 transform flex-wrap gap-2 opacity-0 transition-all duration-700"
          >
            <span className="dark:bg-primary/8 flex items-center gap-1 rounded-full border border-primary/15 bg-primary/5 px-3 py-1 text-sm text-primary/80 dark:border-primary/20 dark:text-primary/75">
              <span className="h-2 w-2 rounded-full bg-primary/70 dark:bg-primary/60"></span>
              NSRCEL, IIMB Incubatee
            </span>
            <span className="dark:bg-primary/8 flex items-center gap-1 rounded-full border border-primary/15 bg-primary/5 px-3 py-1 text-sm text-primary/80 dark:border-primary/20 dark:text-primary/75">
              <span className="h-2 w-2 rounded-full bg-primary/70 dark:bg-primary/60"></span>
              30+ Projects Completed
            </span>
            <span className="dark:bg-primary/8 flex items-center gap-1 rounded-full border border-primary/15 bg-primary/5 px-3 py-1 text-sm text-primary/80 dark:border-primary/20 dark:text-primary/75">
              <span className="h-2 w-2 rounded-full bg-primary/70 dark:bg-primary/60"></span>
              Open Source Contributor
            </span>
          </div>
          {/* Social Links */}
          <div
            ref={socialsRef}
            className="mt-6 flex translate-y-4 transform gap-4 opacity-0 transition-all duration-700"
          >
            <a
              href="https://github.com/shuence"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/15 text-muted-foreground/70 transition-colors hover:border-primary/30 hover:text-primary/80 hover:shadow-sm dark:border-primary/10 dark:text-muted-foreground/60"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://linkedin.com/in/shuence"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/15 text-muted-foreground/70 transition-colors hover:border-primary/30 hover:text-primary/80 hover:shadow-sm dark:border-primary/10 dark:text-muted-foreground/60"
            >
              <FaLinkedinIn size={20} />
            </a>
            <a
              href="https://twitter.com/shuence"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/15 text-muted-foreground/70 transition-colors hover:border-primary/30 hover:text-primary/80 hover:shadow-sm dark:border-primary/10 dark:text-muted-foreground/60"
            >
              <FaXTwitter size={20} />
            </a>
            <a
              href="mailto:contact@shuence.com"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/15 text-muted-foreground/70 transition-colors hover:border-primary/30 hover:text-primary/80 hover:shadow-sm dark:border-primary/10 dark:text-muted-foreground/60"
            >
              <FaEnvelope size={20} />
            </a>
          </div>

          <div
            ref={buttonsRef}
            className="mt-10 flex translate-y-4 transform flex-wrap gap-4 opacity-0 transition-all duration-700"
          >
            <a
              href="/work"
              className="group flex items-center gap-2 rounded-md bg-primary/90 px-6 py-3 text-white/95 transition-all duration-300 hover:bg-primary/80 hover:shadow-md dark:bg-primary/85 dark:text-white/90 dark:hover:bg-primary/75"
            >
              View my work
              <ArrowDownIcon size={18} className="transition-transform group-hover:translate-y-1" />
            </a>

            <a
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 rounded-md border border-primary/15 bg-secondary/80 px-6 py-3 text-secondary-foreground/90 transition-all duration-300 hover:border-primary/25 hover:shadow-md dark:border-primary/10 dark:bg-secondary/70 dark:text-secondary-foreground/80 dark:hover:border-primary/20"
            >
              Download Resume
              <FileTextIcon
                size={18}
                className="transition-transform group-hover:translate-y-[-2px]"
              />
            </a>

            <a
              href={achievementLink}
              target="_blank"
              rel="noopener noreferrer"
              className="dark:bg-accent/8 group flex items-center gap-2 rounded-md border border-accent/20 bg-accent/5 px-6 py-3 text-accent-foreground/80 transition-all duration-300 hover:border-accent/25 hover:shadow-md dark:border-accent/15 dark:text-accent-foreground/70 dark:hover:border-accent/20"
            >
              Achievements
              <TrophyIcon size={18} className="transition-transform group-hover:scale-110" />
            </a>

            <a
              href="/contact"
              className="dark:hover:text-foreground-dark/75 group flex items-center gap-1 text-primary/80 transition-colors duration-200 hover:text-foreground/80 dark:text-primary/75"
            >
              Get in touch
              <ArrowDownIcon
                size={16}
                className="transform transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </div>{' '}
      {/* Subtle gradient background with lower contrast */}
      <div className="to-primary/3 dark:to-primary/4 pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent"></div>
    </section>
  );
}
