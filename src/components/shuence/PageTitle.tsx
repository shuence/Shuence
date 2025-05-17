import { useEffect } from 'react';

interface PageTitleProps {
  title: string;
  subtitle?: string;
  description?: string;
  hidden?: boolean;
}

export default function PageTitle({ title, subtitle, description, hidden }: PageTitleProps) {
  // Update document title and meta description when component mounts
  useEffect(() => {
    // Update document title
    document.title = `${title} | Shuence`;

    // Update meta description for SEO
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        description || subtitle || `${title} - Shuence's portfolio website`
      );
    }

    // hidden if true hide all elements
    if (hidden) {
      const container = document.querySelector('.hidden-title');
      if (container) {
        container.classList.add('hidden');
      }
    }

    return () => {
      // Reset document title when component unmounts
      document.title = 'Shuence';

      // Reset meta description
      if (metaDescription) {
        metaDescription.setAttribute(
          'content',
          'Engineer, Writer, and Startup Evangelist | Building Artinity - AI-powered artist network'
        );
      }
    };
  }, [title, subtitle, description]);

  return (
    <div className="hidden-title container mx-auto mb-10 mt-4 px-6 md:mb-16 md:px-8">
      <h1 className="text-3xl font-bold text-foreground md:text-5xl">{title}</h1>
      {subtitle && (
        <p className="mt-3 max-w-2xl text-lg text-muted-foreground md:text-xl">{subtitle}</p>
      )}
    </div>
  );
}
