import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// This component updates document title and meta description based on the current route
export default function HeadMetadata() {
  const location = useLocation();

  useEffect(() => {
    // Default metadata
    let title = 'Shuence | Software Engineer';
    let description =
      'Engineer, Writer, and Startup Evangelist | Building innovative digital solutions';

    // Set route-specific metadata
    const path = location.pathname;
    if (path === '/' || path === '/home') {
      title = 'Shuence | Software Engineer';
      description =
        'Engineer, Writer, and Startup Evangelist | Building innovative digital solutions';
    } else if (path === '/work') {
      title = 'My Work | Shuence';
      description = "Explore Shuence's portfolio of software engineering projects and case studies";
    } else if (path === '/about') {
      title = 'About Me | Shuence';
      description = "Learn about Shuence's experience, skills, and professional journey";
    } else if (path === '/contact') {
      title = 'Contact | Shuence';
      description =
        'Get in touch with Software Engineer Shuence for projects, opportunities, and collaborations';
    } else if (path.startsWith('/project/')) {
      // For project pages, we'll add a generic title/description
      // The specific project data will be set by the ProjectDetailPage component
      title = "Project | Shuence's Portfolio";
      description = 'Detailed case study of an innovative project by Software Engineer Shuence';
    }

    // Update document title
    document.title = title;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
  }, [location]);

  return null; // This component doesn't render anything
}
