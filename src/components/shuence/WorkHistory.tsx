import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
  Building2,
  Calendar,
  ExternalLink,
  MapPin,
  Briefcase,
  ArrowLeft,
  ArrowRight,
} from 'lucide-react';
import { WorkExperience, workExperiences } from '@/data/workExperience';

export function WorkHistory() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const autoPlayIntervalRef = useRef(5000); // 5 seconds interval

  const experiences = workExperiences;
  // Functions for carousel navigation
  const scrollToCurrentExperience = useCallback(() => {
    if (!carouselRef.current) return;

    // Use the current index to calculate scroll position
    const containerWidth = carouselRef.current.clientWidth;
    const newScrollPosition = containerWidth * currentIndex;

    // Apply smooth scrolling
    carouselRef.current.scrollTo({
      left: newScrollPosition,
      behavior: 'smooth',
    });
  }, [currentIndex]);

  const nextExperience = useCallback(() => {
    if (isDragging) return;
    setCurrentIndex(prevIndex => (prevIndex + 1) % experiences.length);
  }, [isDragging, experiences?.length]);

  const prevExperience = useCallback(() => {
    if (isDragging) return;
    setCurrentIndex(prevIndex => (prevIndex - 1 + experiences.length) % experiences.length);
  }, [isDragging, experiences?.length]);

  const jumpToExperience = useCallback(
    (index: number) => {
      if (isDragging) return;
      setCurrentIndex(index);
    },
    [isDragging]
  );

  // Effect to handle scrolling when currentIndex changes
  useEffect(() => {
    scrollToCurrentExperience();
  }, [currentIndex, scrollToCurrentExperience]);

  // Mouse event handlers for drag scrolling
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (carouselRef.current?.offsetLeft || 0));
    setScrollLeft(carouselRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (carouselRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2; // Scroll speed multiplier
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    // Find which project is most visible and set it as current
    if (carouselRef.current) {
      const scrollPos = carouselRef.current.scrollLeft;
      const experienceWidth = carouselRef.current.clientWidth;
      const newIndex = Math.round(scrollPos / experienceWidth);

      if (newIndex >= 0 && newIndex < experiences.length && newIndex !== currentIndex) {
        setCurrentIndex(newIndex);
      }
    }
  };

  // Auto-play functionality
  useEffect(() => {
    // Clear any existing interval first to prevent multiple intervals
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = null;
    }

    // Only start auto-play if not hovering and not dragging
    if (!isHovering && !isDragging) {
      autoPlayRef.current = setInterval(() => {
        nextExperience();
      }, autoPlayIntervalRef.current);
    }

    // Clean up on unmount or when dependencies change
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
        autoPlayRef.current = null;
      }
    };
  }, [isHovering, isDragging, nextExperience]);

  // Update scroll position when window resizes
  useEffect(() => {
    const handleResize = () => scrollToCurrentExperience();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [scrollToCurrentExperience]);

  return (
    <section className="dark:bg-background-dark bg-background py-16 md:py-8">
      <div className="container mx-auto px-6 md:px-8">
        {/* Modern section header with badge */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center justify-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 dark:border-primary/30 dark:bg-primary/20">
            <Briefcase size={16} className="mr-2 text-primary" />
            <span className="text-sm font-medium text-primary">Professional Experience</span>
          </div>
          <h2 className="dark:text-foreground-dark mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Work Experience
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground dark:text-muted-foreground">
            My professional journey in software engineering, focusing on web and mobile development.
          </p>
        </div>

        <div
          className="relative"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className="relative ml-6 mt-16 space-y-16 md:ml-12">
            {/* Timeline line with enhanced gradient */}
            <div className="absolute bottom-0 left-0 top-8 w-0.5 rounded-full bg-gradient-to-b from-primary via-primary/30 to-primary/5"></div>

            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className="relative"
                onMouseEnter={() => setHoveredId(exp.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Timeline dot with animated pulse */}
                <div className="absolute -left-[25px] z-10 flex items-center justify-center">
                  <div
                    className={`dark:bg-card-dark h-12 w-12 rounded-full border-2 bg-card ${hoveredId === exp.id ? 'scale-110 border-primary/80' : 'border-primary/60'} relative flex items-center justify-center shadow-md transition-all duration-300`}
                  >
                    <span
                      className={`absolute inset-0 animate-ping rounded-full bg-primary/20 ${hoveredId === exp.id ? 'opacity-70' : 'opacity-30'}`}
                    ></span>
                    {exp.logo ? (
                      <div className="flex h-7 w-7 items-center justify-center overflow-hidden rounded-full">
                        <img
                          src={exp.logo}
                          alt={exp.company}
                          className="h-7 w-7 object-contain transition-transform duration-300 hover:scale-110"
                          onError={e => {
                            (e.target as HTMLImageElement).src = '/images/github_logo.png';
                          }}
                        />
                      </div>
                    ) : (
                      <Building2 className="h-5 w-5 text-primary" />
                    )}
                  </div>
                </div>

                {/* Content card with enhanced styling */}
                <div
                  className={`dark:bg-card-dark ml-12 border bg-card md:ml-16 ${hoveredId === exp.id ? 'border-primary/30 shadow-lg shadow-primary/10' : 'border-border/30 shadow-md dark:border-border/30'} transform rounded-lg p-6 transition-all duration-500 ${hoveredId === exp.id ? 'translate-x-1' : ''}`}
                >
                  <div className="mb-6 flex flex-col justify-between gap-3 md:flex-row md:items-center">
                    <div>
                      <h3 className="dark:text-foreground-dark flex items-center gap-2 text-xl font-bold text-foreground">
                        {exp.company}
                        {exp.companyUrl && (
                          <a
                            href={exp.companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex text-primary hover:text-primary/80"
                            aria-label={`Visit ${exp.company} website`}
                          >
                            <ExternalLink
                              size={16}
                              className="transition-transform duration-300 hover:scale-110"
                            />
                          </a>
                        )}
                      </h3>
                      <div className="mt-1 text-lg font-medium text-primary dark:text-primary/90">
                        {exp.position}
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Calendar size={16} className="text-primary/70" />
                      <span>{exp.period}</span>
                      {exp.isRemote && (
                        <>
                          <span className="text-gray-400 dark:text-gray-500">•</span>
                          <div className="flex items-center">
                            <MapPin size={14} className="mr-1 text-primary/70" />
                            <span>{exp.location}</span>
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  <ul className="mb-6 space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-baseline gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></span>
                        <span className="text-muted-foreground dark:text-muted-foreground">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {exp.technologies && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className={`rounded-md border border-primary/10 bg-primary/5 px-2.5 py-1 text-xs font-medium text-primary/90 transition-all duration-300 dark:border-primary/20 dark:bg-primary/10 dark:text-primary/80 ${hoveredId === exp.id ? 'bg-primary/10 dark:bg-primary/20' : ''}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkHistory;
