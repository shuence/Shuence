import { useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export function PageBreadcrumb() {
  const location = useLocation();
  const pathParts = location.pathname.split('/').filter(part => part !== '');

  // Don't show breadcrumb on home page
  if (pathParts.length === 0) {
    return null;
  }
  return (
    <div className="container mx-auto mb-2 mt-20 px-6 py-4 md:px-8">
      <nav className="inline-flex items-center rounded-md bg-muted/40 px-3 py-2 text-sm text-muted-foreground backdrop-blur-sm">
        <a href="/" className="flex items-center transition-colors hover:text-primary">
          <Home size={14} className="mr-1" />
          Home
        </a>

        {pathParts.map((part, index) => (
          <div key={index} className="flex items-center">
            <ChevronRight size={14} className="mx-2" />
            {index === pathParts.length - 1 ? (
              <span className="font-medium capitalize text-primary">{part}</span>
            ) : (
              <a
                href={`/${pathParts.slice(0, index + 1).join('/')}`}
                className="capitalize transition-colors hover:text-primary"
              >
                {part}
              </a>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
}

export default PageBreadcrumb;
