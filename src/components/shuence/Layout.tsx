import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import CustomCursor from './CustomCursor';
import Navigation from './Navigation';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Add smooth scroll to top on page load and handle page transitions
  useEffect(() => {
    window.scrollTo(0, 0);

    // Simple page transition effect
    setIsTransitioning(true);
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground transition-colors duration-300">
      {' '}
      <CustomCursor />
      <Navigation />
      <main
        className={`flex-1 transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'} min-h-screen`}
      >
        {children}
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
