import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  // Handle scroll effect for navigation and determine active section based on URL
  useEffect(() => {
    const handleScroll = () => {
      // Change background on scroll
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Determine active section from current path
    const path = window.location.pathname;
    if (path === '/' || path === '/home') {
      setActiveSection('home');
    } else if (path.includes('work')) {
      setActiveSection('work');
    } else if (path.includes('about')) {
      setActiveSection('about');
    } else if (path.includes('contact')) {
      setActiveSection('contact');
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  // Handle navigation with multi-page support
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // If it's a hash link on the current page, handle smooth scrolling
    if (href.includes('#')) {
      e.preventDefault();

      const targetId = href.replace(/.*#/, '');
      const element = document.getElementById(targetId);

      if (element) {
        window.scrollTo({
          top: element.offsetTop - 80,
          behavior: 'smooth',
        });

        setActiveSection(targetId);
      }
    } else {
      // For regular page navigation, add a slight fade effect
      const currentContent = document.querySelector('main');
      if (currentContent) {
        currentContent.classList.add('opacity-0');

        setTimeout(() => {
          // After a short delay, update the active section
          setActiveSection(href === '/' ? 'home' : href.replace('/', ''));
        }, 200);
      } else {
        setActiveSection(href === '/' ? 'home' : href.replace('/', ''));
      }
    }

    // Always close mobile menu when navigating
    setIsMenuOpen(false);
  };
  // List of navigation items - updated for multipage
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Experience', href: '/experience' },
    { name: 'Projects', href: '/work' },
    { name: 'Contact', href: '/contact' },
  ];
  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 py-4 transition-all duration-500 ${
        scrolled || isMenuOpen
          ? 'bg-white/95 shadow-lg backdrop-blur-sm dark:bg-card/95'
          : 'bg-transparent'
      }`}
    >
      {' '}
      <div className="container mx-auto flex items-center justify-between px-4">
        {' '}
        {/* Logo / Home link */}{' '}
        <a
          href="/"
          className="relative px-2 py-1 text-xl text-foreground after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
        >
          &lt;<span className="logo-font">Shuence</span> /&gt;
        </a>
        {/* Desktop Navigation */}{' '}
        <div className="hidden items-center gap-10 md:flex">
          <nav className="flex items-center space-x-10">
            {navItems.map(item => (
              <a
                key={item.name}
                href={item.href}
                onClick={e => handleNavClick(e, item.href)}
                className={`relative py-1 text-sm font-medium transition-colors duration-300 ${
                  (activeSection === 'home' && item.href === '/') ||
                  activeSection === item.href.replace('/', '')
                    ? 'text-primary'
                    : 'text-foreground hover:text-primary'
                } after:absolute after:bottom-0 after:left-0 after:h-[1px] after:bg-primary ${
                  (activeSection === 'home' && item.href === '/') ||
                  activeSection === item.href.replace('/', '')
                    ? 'after:w-full'
                    : 'after:w-0 hover:after:w-full'
                } after:transition-all after:duration-300`}
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
        {/* Mobile menu button */}
        <div className="flex items-center gap-4">
          <ThemeToggle />{' '}
          <button
            className="text-foreground md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>{' '}
      {/* Mobile menu */}{' '}
      {isMenuOpen && (
        <div className="fixed left-0 top-[72px] z-50 h-[calc(100vh-72px)] w-full border-t border-gray-200 bg-white/95 py-6 backdrop-blur-sm duration-300 animate-in fade-in slide-in-from-top dark:border-accent/10 dark:bg-card/95 md:hidden">
          <nav className="container mx-auto flex flex-col space-y-6 px-4 pt-8">
            {navItems.map(item => (
              <a
                key={item.name}
                href={item.href}
                className={`text-2xl ${
                  (activeSection === 'home' && item.href === '/') ||
                  activeSection === item.href.replace('/', '')
                    ? 'text-primary'
                    : 'text-gray-700 dark:text-gray-200'
                } py-2 font-medium transition-colors duration-300 hover:text-primary`}
                onClick={e => handleNavClick(e, item.href)}
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
