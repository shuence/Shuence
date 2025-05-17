import { useEffect, useRef, ReactNode } from 'react';

interface SectionRevealProps {
  children: ReactNode;
  delay?: number;
  threshold?: number;
  className?: string;
}

export default function SectionReveal({
  children,
  delay = 0,
  threshold = 0.1,
  className = '',
}: SectionRevealProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Set initial state
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Add a delay if specified
            setTimeout(() => {
              section.style.opacity = '1';
              section.style.transform = 'translateY(0)';
            }, delay);

            // Once revealed, stop observing
            observer.unobserve(section);
          }
        });
      },
      { threshold }
    );

    observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, [delay, threshold]);

  return (
    <div ref={sectionRef} className={`transition-all duration-1000 ease-out ${className}`}>
      {children}
    </div>
  );
}
