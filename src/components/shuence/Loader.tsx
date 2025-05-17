import { useState, useEffect } from 'react';

interface LoaderProps {
  onLoadComplete?: () => void;
}

export function Loader({ onLoadComplete }: LoaderProps) {
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
        if (onLoadComplete) onLoadComplete();
      }, 300); // Wait for fade out animation
    }, 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [onLoadComplete]);

  if (!isVisible) return null;
  
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background dark:bg-[#000000] transition-opacity duration-300">
      {/* Logo */}
      <div className="mb-8 text-3xl font-semibold font-['Agustina'] text-primary">
        <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
          &lt; Shuence /&gt;
        </span>
      </div>

      {/* Spinner */}
      <div className="relative h-16 w-16">
        <div className="absolute inset-0 animate-spin rounded-full border-2 border-b-transparent border-l-transparent border-r-transparent border-t-primary" />
        <div className="absolute inset-0 animate-pulse opacity-50 rounded-full border border-primary" />
      </div>
      
      {/* Percentage */}
      <div className="mt-4 text-sm font-medium text-primary">{progress}%</div>
      
      {/* Progress Bar */}
      <div className="relative mt-4 h-[2px] w-40 overflow-hidden bg-muted">
        <div
          className="absolute left-0 top-0 h-full bg-primary transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}

export default Loader;
