import { useEffect, useRef, useState, useCallback } from 'react';
import { ArrowLeft, ArrowRight, ExternalLink, ChevronRight } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link: string;
  githubUrl?: string;
  liveDemoUrl?: string;
  technologies?: string[];
  status?: 'completed' | 'in-progress' | 'planned';
}

export default function ProjectCarousel({ projects }: { projects: Project[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<(HTMLDivElement | null)[]>([]);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const autoPlayIntervalRef = useRef(5000); // 5 seconds interval

  // Force scroll to current project
  const scrollToCurrentProject = useCallback(() => {
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

  const nextProject = useCallback(() => {
    if (isDragging) return;
    setCurrentIndex(prevIndex => (prevIndex + 1) % projects.length);
  }, [isDragging, projects.length]);

  const prevProject = useCallback(() => {
    if (isDragging) return;
    setCurrentIndex(prevIndex => (prevIndex - 1 + projects.length) % projects.length);
  }, [isDragging, projects.length]);

  const jumpToProject = useCallback(
    (index: number) => {
      if (isDragging) return;
      setCurrentIndex(index);
    },
    [isDragging]
  );

  // Effect to handle scrolling when currentIndex changes
  useEffect(() => {
    scrollToCurrentProject();
  }, [currentIndex, scrollToCurrentProject]);

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
      const projectWidth = carouselRef.current.clientWidth;
      const newIndex = Math.round(scrollPos / projectWidth);

      if (newIndex >= 0 && newIndex < projects.length && newIndex !== currentIndex) {
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
        nextProject();
      }, autoPlayIntervalRef.current);
    }

    // Clean up on unmount or when dependencies change
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
        autoPlayRef.current = null;
      }
    };
  }, [isHovering, isDragging, nextProject]);

  // Update scroll position when window resizes
  useEffect(() => {
    const handleResize = () => scrollToCurrentProject();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [scrollToCurrentProject]);

  // Initialize refs array when projects change
  useEffect(() => {
    projectsRef.current = projectsRef.current.slice(0, projects.length);
  }, [projects.length]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Main carousel container */}
      <div
        ref={carouselRef}
        className="flex w-full snap-x snap-mandatory overflow-x-hidden"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        style={{ scrollbarWidth: 'none' }}
      >
        {projects.map((project, index) => (
          <div
            key={project.id}
            ref={el => (projectsRef.current[index] = el)}
            className="w-full flex-shrink-0 flex-grow-0 snap-center"
          >
            <div className="grid grid-cols-1 gap-6 p-2 md:grid-cols-2 md:gap-10">
              <div className="order-2 flex flex-col justify-center md:order-1">
                <h3 className="mb-3 text-2xl font-bold md:text-3xl">{project.title}</h3>
                <p className="mb-4 text-muted-foreground">{project.description}</p>

                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-primary-foreground transition-colors duration-300 hover:bg-primary/90"
                  >
                    View Project <ExternalLink size={16} />
                  </a>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-2 transition-colors duration-300 hover:bg-accent/50"
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>

              <div className="order-1 md:order-2">
                {' '}
                <div className="aspect-video overflow-hidden rounded-lg border border-border bg-card shadow-md">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    loading="eager"
                    onError={e => {
                      (e.target as HTMLImageElement).src = '/placeholder.svg';
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>{' '}
      {/* Controls - repositioned to bottom left */}
      <div className="absolute bottom-0 left-0 z-10 mb-4 ml-4 flex items-center gap-2">
        <button
          onClick={prevProject}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background/90 shadow-sm transition-colors duration-300 hover:bg-background"
          aria-label="Previous project"
        >
          <ArrowLeft size={16} />
        </button>
        <button
          onClick={nextProject}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background/90 shadow-sm transition-colors duration-300 hover:bg-background"
          aria-label="Next project"
        >
          <ArrowRight size={16} />
        </button>
      </div>
      {/* Indicators */}
      <div className="mt-5 flex justify-center gap-2">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => jumpToProject(index)}
            className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'w-8 bg-primary' : 'bg-primary/30 hover:bg-primary/50'
            }`}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
