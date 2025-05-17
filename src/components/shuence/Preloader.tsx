import { useState, useEffect } from 'react';

export function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, 50);

    // Complete loading after animations
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        setIsLoaded(true);
      }, 300); // Wait for fade out animation
    }, 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  if (!isVisible) return null;
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background dark:bg-[#000000] transition-opacity duration-300">
      <div className="animate-spin rounded-full border-2 border-b-transparent border-l-transparent border-r-transparent border-t-primary h-12 w-12" />
      <div className="relative mt-4 h-[2px] w-32 overflow-hidden bg-muted">
        <div
          className="absolute left-0 top-0 h-full bg-primary transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}

export default Preloader;
