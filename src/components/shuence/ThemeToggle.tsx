import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check for system preference first
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Check if theme is stored in localStorage, otherwise use system preference
    const storedTheme = localStorage.getItem('theme');
    const initialTheme = storedTheme || (prefersDark ? 'dark' : 'light');

    setIsDark(initialTheme === 'dark');

    // Update both class implementations to ensure compatibility
    // Set dark class on html element (for Tailwind)
    document.documentElement.classList.toggle('dark', initialTheme === 'dark');
    // Keep the dark-theme class on body for legacy CSS variables
    document.body.classList.toggle('dark-theme', initialTheme === 'dark');

    // Set the initial theme if not already set
    if (!storedTheme) {
      localStorage.setItem('theme', initialTheme);
    }

    // Listen for system preference changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('theme')) {
        // Only update if user hasn't manually set a preference
        const newTheme = e.matches ? 'dark' : 'light';
        setIsDark(e.matches);
        document.documentElement.classList.toggle('dark', e.matches);
        document.body.classList.toggle('dark-theme', e.matches);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleTheme = () => {
    const newDarkMode = !isDark;
    setIsDark(newDarkMode);

    // Update the classes and localStorage
    document.documentElement.classList.toggle('dark', newDarkMode);
    document.body.classList.toggle('dark-theme', newDarkMode);
    localStorage.setItem('theme', newDarkMode ? 'dark' : 'light');
  };
  return (
    <button
      onClick={toggleTheme}
      className="relative rounded-full border border-gray-200 bg-gray-100 p-2.5 shadow-md transition-all duration-300 hover:scale-110 hover:bg-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <Sun
        size={20}
        className={`absolute transform text-amber-500 transition-all duration-500 ease-in-out ${isDark ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'}`}
      />
      <Moon
        size={20}
        className={`absolute transform text-indigo-500 transition-all duration-500 ease-in-out ${isDark ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'}`}
      />
      <span className="invisible">{isDark ? <Sun size={20} /> : <Moon size={20} />}</span>
    </button>
  );
}

export default ThemeToggle;
