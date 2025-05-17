import { ArrowUp } from 'lucide-react';

export default function Footer() {
  // Smooth scroll to top function
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <footer className="border-t border-gray-100/20 bg-gray-50/20 py-8 dark:border-gray-800/20 dark:bg-background/20">
      <div className="flex items-center justify-center">
        <p className="text-sm font-light tracking-wide text-gray-500/60 dark:text-gray-400/50">
          Built with <span className="text-red-400/50 dark:text-red-400/40">❤️</span> from Shuence
        </p>
      </div>
    </footer>
  );
}
