import { ArrowUpRight } from 'lucide-react';

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link: string;
  fullDescription?: string;
  technologies?: string[];
  liveDemoUrl?: string;
  githubUrl?: string;
  achievements?: string[];
  status?: 'completed' | 'in-progress' | 'planned';
  timeline?: Array<{
    date: string;
    title: string;
    description: string;
  }>;
}

export default function ProjectSection() {
  const projects: Project[] = [
    {
      id: 'spoonshare',
      title: 'SpoonShare',
      description:
        'Award-winning food sharing app that achieved Top 3 in Google Solution Challenge and is incubated at NSRCEL, IIMB.',
      tags: ['Food Tech', 'Social Impact', 'Mobile App'],
      imageUrl: '/projects/spoonshare.png',
      link: '/project/spoonshare',
      technologies: [
        'Flutter',
        'Firebase',
        'Google Maps API',
        'Google Cloud',
        'Google Play Console',
        'Android',
      ],
      liveDemoUrl: 'https://play.google.com/store/apps/details?id=com.shuence.spoonshare',
      githubUrl: 'https://github.com/shuence/spoonshare',
      status: 'completed',
      fullDescription:
        'SpoonShare is a UN SDG-aligned food-sharing mobile application designed to address the dual challenges of food waste and hunger. Through the app, individuals and businesses can seamlessly donate excess food, while NGOs can efficiently access and distribute these donations to those in need. The platform features real-time tracking, user-friendly interfaces, and robust logistics support to ensure food safety and optimal distribution.',
      achievements: [
        'Achieved global Top 3 position in Google Solution Challenge, competing against thousands of projects worldwide.',
        'Incubated at the prestigious NSRCEL at Indian Institute of Management Bangalore (IIMB).',
        'Featured by Google for its innovative approach to addressing UN Sustainable Development Goals.',
        'Successfully distributed over 1000+ kg of food to those in need, making a tangible impact in our community.',
        'Scaled to 1500+ downloads with a 4.9 rating on Google Play Store, with 95% positive user feedback.',
      ],
      timeline: [
        {
          date: 'January 2023',
          title: 'Project Inception',
          description:
            'Identified the critical gap between food waste and hunger, leading to the initial concept of SpoonShare.',
        },
        {
          date: 'March 2023',
          title: 'First Prototype',
          description:
            'Developed the first functional prototype of SpoonShare with basic food donation and collection features.',
        },
        {
          date: 'May 2023',
          title: 'Google Solution Challenge Submission',
          description:
            'Submitted SpoonShare to the Google Solution Challenge 2023, addressing UN SDGs 2 and 12.',
        },
        {
          date: 'June 2023',
          title: 'Top 10 Finalist',
          description:
            'Selected as a Top 10 finalist from thousands of global submissions in the Google Solution Challenge.',
        },
        {
          date: 'August 2023',
          title: 'Top 3 Winner',
          description:
            'Achieved global Top 3 position in the Google Solution Challenge 2023 final round.',
        },
        {
          date: 'September 2023',
          title: 'NSRCEL Incubation',
          description:
            'Selected for incubation at NSRCEL, Indian Institute of Management Bangalore (IIMB).',
        },
        {
          date: 'December 2023',
          title: 'Public Launch',
          description:
            'Officially launched on Google Play Store with enhanced features and comprehensive user support.',
        },
      ],
    },
    {
      id: 'elocate',
      title: 'Elocate',
      description:
        'Award-winning e-waste management platform that secured second runner-up at i-nnovate Hackathon 2023.',
      tags: ['Environmental', 'Sustainability', 'Web App'],
      imageUrl: '/projects/elocate.png',
      link: '/project/elocate',
      technologies: [
        'TypeScript',
        'Next.js',
        'TailwindCSS',
        'Mapbox API',
        'Express.js',
        'Node.js',
        'MongoDB',
      ],
      githubUrl: 'https://github.com/shuence/elocate',
      status: 'completed',
      fullDescription:
        'Elocate addresses the critical issue of electronic waste, which amounts to over 50 million metric tons annually worldwide. The platform connects consumers and businesses with certified e-waste collection centers and recyclers, facilitating responsible disposal practices and promoting circular economy principles. By leveraging geolocation services, Elocate helps users easily find their nearest e-waste collection points, track their environmental impact, and learn about proper recycling methods.',
      achievements: [
        'Won second runner-up at i-nnovate Hackathon 2023, securing a prize of ₹30,000 for our innovative solution.',
        'Developed a comprehensive Next.js + MERN stack platform addressing the global e-waste crisis affecting over 50 million metric tons of waste annually.',
        'Achieved 0.4s load time through performance optimization techniques, ensuring seamless user experience and efficient operation.',
        'Implemented an interactive mapping system using Mapbox API to help users locate nearest e-waste collection centers.',
      ],
      timeline: [
        {
          date: 'February 2023',
          title: 'Problem Identification',
          description:
            'Researched the e-waste crisis and identified the lack of accessible information about proper disposal methods.',
        },
        {
          date: 'April 2023',
          title: 'Concept Development',
          description:
            'Developed the core concept for Elocate, focusing on connecting users with certified e-waste collection centers.',
        },
        {
          date: 'June 2023',
          title: 'MVP Development',
          description:
            'Built the minimum viable product with Next.js and integrated Mapbox API for location-based services.',
        },
        {
          date: 'July 2023',
          title: 'i-nnovate Hackathon',
          description:
            'Participated in the i-nnovate Hackathon 2023, presenting Elocate as a solution for sustainable e-waste management.',
        },
        {
          date: 'August 2023',
          title: 'Second Runner-Up',
          description:
            'Won second runner-up position at i-nnovate Hackathon 2023, receiving ₹30,000 in prize money.',
        },
        {
          date: 'October 2023',
          title: 'Platform Enhancements',
          description:
            'Added features for impact tracking and educational resources about proper e-waste disposal methods.',
        },
      ],
    },
    {
      id: 'travelworld',
      title: 'TravelWorld',
      description:
        'Tours & travel web application built with MERN stack, attracting 1000+ monthly visitors with optimized performance.',
      tags: ['Travel', 'MERN Stack', 'Web App'],
      imageUrl: '/projects/travelworld.png',
      link: '/project/travelworld',
      technologies: [
        'JavaScript',
        'React.js',
        'Bootstrap',
        'Express.js',
        'Node.js',
        'MongoDB',
        'Git',
        'Netlify',
      ],
      githubUrl: 'https://github.com/shuence/travelworld',
      status: 'completed',
      fullDescription:
        'TravelWorld is a full-featured tours and travel web application that offers users a comprehensive platform to discover, plan, and book travel experiences. Built on the MERN stack (MongoDB, Express.js, React, and Node.js), the application provides a responsive and intuitive interface optimized for various devices. Users can browse destinations, view package details, read and write reviews, and complete bookings seamlessly through the integrated payment system.',
      achievements: [
        'Engineered a comprehensive travel platform using the MERN stack that attracts over 1000 monthly visitors.',
        'Enhanced Express.js API performance and MongoDB database operations, reducing load time to just 1.1 seconds.',
        'Implemented responsive design principles, ensuring seamless experiences across desktop and mobile devices.',
        'Increased user retention by 20% through UX improvements and performance optimization.',
        'Integrated secure payment processing and booking management systems for end-to-end user journey.',
      ],
      timeline: [
        {
          date: 'March 2022',
          title: 'Project Initiation',
          description:
            'Identified market gap for a user-friendly travel booking platform. Started developing core concept and features.',
        },
        {
          date: 'April 2022',
          title: 'UI/UX Design',
          description:
            'Created wireframes and high-fidelity designs focusing on intuitive navigation and visual appeal.',
        },
        {
          date: 'May 2022',
          title: 'Frontend Development',
          description:
            'Developed responsive React.js frontend with custom components and Bootstrap for consistency.',
        },
        {
          date: 'July 2022',
          title: 'Backend Integration',
          description:
            'Built Node.js/Express backend with MongoDB database for efficient data management and API handling.',
        },
        {
          date: 'August 2022',
          title: 'Beta Launch',
          description: 'Released beta version to a select group of users for testing and feedback.',
        },
        {
          date: 'October 2022',
          title: 'Public Release',
          description:
            'Officially launched TravelWorld after incorporating beta user feedback and optimizing performance.',
        },
        {
          date: 'January 2023',
          title: 'Feature Updates',
          description:
            'Added user reviews, enhanced booking system, and implemented payment processing integration.',
        },
      ],
    },
    {
      id: 'project1',
      title: 'Financial Dashboard Redesign',
      description:
        'A complete UX overhaul for a fintech platform that increased user engagement by 47%.',
      tags: ['UX Design', 'UI', 'Research'],
      imageUrl:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      link: '/project/project1',
      technologies: ['React', 'D3.js', 'TypeScript', 'Material UI', 'Firebase'],
      liveDemoUrl: 'https://example.com/demo',
      githubUrl: 'https://github.com/shuence/financial-dashboard',
      status: 'in-progress',
      fullDescription:
        'This project involved completely reimagining how users interact with complex financial data. By conducting extensive user research and iterative testing, we identified key pain points in the existing interface and developed solutions that significantly improved usability. The redesigned dashboard presents information in a more intuitive way, with customizable modules and clear visual hierarchy that helps users make better financial decisions faster.',
      achievements: [
        'Increased user engagement by 47% through intuitive data visualization and streamlined workflows.',
        'Reduced training time for new users by 60% by implementing intuitive UI patterns and contextual help features.',
        'Improved dashboard load time by 70% through code optimization and efficient data handling.',
        'Enhanced mobile experience, resulting in 35% more mobile users accessing financial data on the go.',
      ],
      timeline: [
        {
          date: 'October 2023',
          title: 'UX Research',
          description:
            'Conducted user research to identify pain points in the current financial dashboard.',
        },
        {
          date: 'December 2023',
          title: 'Design Phase',
          description:
            'Created wireframes and design prototypes focusing on data visualization and improved information hierarchy.',
        },
        {
          date: 'February 2024',
          title: 'Development Start',
          description:
            'Began front-end development using React and D3.js for interactive data visualizations.',
        },
        {
          date: 'April 2024',
          title: 'Initial Testing',
          description:
            'Conducted first round of usability testing with key stakeholders and target users.',
        },
        {
          date: 'Ongoing',
          title: 'Refinement & Implementation',
          description:
            'Currently refining the dashboard based on user feedback and implementing additional features.',
        },
      ],
    },
    {
      id: 'project2',
      title: 'Healthcare Mobile Application',
      description:
        'Patient-centered interface for medical scheduling and health monitoring with accessibility focus.',
      tags: ['Mobile', 'Healthcare', 'Accessibility'],
      imageUrl:
        'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      link: '/project/project2',
      technologies: ['React Native', 'Redux', 'Node.js', 'MongoDB', 'AWS'],
      liveDemoUrl: 'https://example.com/health-app',
      githubUrl: 'https://github.com/shuence/health-app',
      status: 'planned',
      fullDescription:
        'This healthcare app was designed with a focus on accessibility, ensuring patients of all abilities could easily schedule appointments, track medications, and communicate with healthcare providers. We incorporated voice navigation, high contrast modes, and simplified workflows to accommodate users with various needs. The app has received recognition for its inclusive design approach and has helped improve healthcare access for underserved populations.',
      achievements: [
        'Achieved WCAG 2.1 AA compliance, making healthcare services accessible to users with disabilities.',
        'Reduced appointment no-shows by 40% through intelligent notifications and calendar integration.',
        'Implemented secure, HIPAA-compliant messaging system between patients and healthcare providers.',
        'Integrated with major EHR systems to provide seamless access to patient medical records.',
      ],
      timeline: [
        {
          date: 'September 2022',
          title: 'Concept Development',
          description:
            'Identified accessibility gaps in existing healthcare applications and developed initial concept.',
        },
        {
          date: 'November 2022',
          title: 'Accessibility Research',
          description:
            'Conducted user interviews and accessibility audits to identify key requirements for inclusive design.',
        },
        {
          date: 'January 2023',
          title: 'Prototype Development',
          description:
            'Created an accessible prototype with voice navigation and high contrast mode support.',
        },
        {
          date: 'April 2023',
          title: 'User Testing',
          description:
            'Conducted user testing sessions with diverse users including those with various disabilities.',
        },
        {
          date: 'June 2023',
          title: 'Project Planning',
          description:
            'Scheduled full development phase with accessibility features as core requirements.',
        },
      ],
    },
  ];
  return (
    <section id="work" className="bg-gray-50 py-16 dark:bg-chloe-dark md:py-24">
      <div className="container mx-auto px-6 md:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-800 dark:text-white md:text-4xl">
            Featured Projects
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-muted-foreground">
            Explore a collection of my most notable projects, showcasing my skills and expertise in
            developing innovative solutions across various domains.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-3">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.link}
      className="group block overflow-hidden rounded-lg border border-gray-200 bg-white transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-2xl dark:border-chloe-accent/5 dark:bg-chloe-dark dark:hover:border-chloe-accent/30"
    >
      {/* Image container with gradient overlay */}
      <div className="relative aspect-[16/9] overflow-hidden">
        {project.status && (
          <div className="absolute right-3 top-3 z-10">
            <span
              className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                project.status === 'completed'
                  ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                  : project.status === 'in-progress'
                    ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                    : 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
              }`}
            >
              <span
                className={`mr-1 h-1.5 w-1.5 rounded-full ${
                  project.status === 'completed'
                    ? 'bg-green-500'
                    : project.status === 'in-progress'
                      ? 'bg-yellow-500'
                      : 'bg-blue-500'
                }`}
              ></span>
              {project.status === 'completed'
                ? 'Completed'
                : project.status === 'in-progress'
                  ? 'In Progress'
                  : 'Planned'}
            </span>
          </div>
        )}{' '}
        <img
          src={project.imageUrl}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-40 dark:from-chloe-dark"></div>
      </div>{' '}
      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between">
          <h3 className="text-lg font-semibold text-gray-800 transition-colors duration-300 group-hover:text-primary dark:text-chloe">
            {project.title}
          </h3>
          <ArrowUpRight
            className="transform text-primary opacity-0 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:opacity-100"
            size={20}
          />
        </div>

        <p className="mt-2 line-clamp-2 text-sm text-gray-600 dark:text-chloe-accent">
          {project.description}
        </p>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <span
              key={tag}
              className="rounded bg-gray-100 px-2 py-1 text-xs text-gray-700 dark:bg-chloe-accent/10 dark:text-chloe-accent"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}
