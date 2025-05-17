import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from '@/components/shuence/Layout';
import { ArrowLeft } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    // Log error for analytics purposes
    console.error('404 Error: User attempted to access non-existent route:', location.pathname);

    // Set page title
    document.title = 'Page Not Found | Shuence';
  }, [location.pathname]);

  return (
    <Layout>
      <div className="flex min-h-[80vh] items-center justify-center">
        <div className="max-w-md px-6 text-center">
          <h1 className="mb-4 text-6xl font-bold text-primary">404</h1>
          <h2 className="mb-4 text-2xl font-semibold">Page Not Found</h2>
          <p className="mb-8 text-muted-foreground">
            The page you are looking for might have been removed, had its name changed, or is
            temporarily unavailable.
          </p>
          <a
            href="/"
            className="inline-flex items-center gap-2 rounded-md border border-primary/30 bg-secondary px-6 py-3 text-secondary-foreground transition-all duration-300 hover:border-primary hover:shadow-md"
          >
            <ArrowLeft size={18} />
            Return to Home
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
