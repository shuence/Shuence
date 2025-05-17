import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Layout from '@/components/shuence/Layout';
import PageBreadcrumb from '@/components/shuence/PageBreadcrumb';
import PageTitle from '@/components/shuence/PageTitle';
import SectionReveal from '@/components/shuence/SectionReveal';
import { Project } from '@/components/shuence/ProjectSection';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';

export function ProjectDetailPage() {
  const { projectId } = useParams();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    // In a real application, this would fetch the project from an API
    // For this demo, we'll use dummy data
    const demoProjects: Project[] = [
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
        fullDescription:
          'SpoonShare is a UN SDG-aligned food-sharing mobile application designed to address the dual challenges of food waste and hunger. Through the app, individuals and businesses can seamlessly donate excess food, while NGOs can efficiently access and distribute these donations to those in need. The platform features real-time tracking, user-friendly interfaces, and robust logistics support to ensure food safety and optimal distribution.',
        achievements: [
          'Achieved global Top 3 position in Google Solution Challenge, competing against thousands of projects worldwide.',
          'Incubated at the prestigious NSRCEL at Indian Institute of Management Bangalore (IIMB).',
          'Featured by Google for its innovative approach to addressing UN Sustainable Development Goals.',
          'Successfully distributed over 1000+ kg of food to those in need, making a tangible impact in our community.',
          'Scaled to 1500+ downloads with a 4.9 rating on Google Play Store, with 95% positive user feedback.',
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
        fullDescription:
          'Elocate addresses the critical issue of electronic waste, which amounts to over 50 million metric tons annually worldwide. The platform connects consumers and businesses with certified e-waste collection centers and recyclers, facilitating responsible disposal practices and promoting circular economy principles. By leveraging geolocation services, Elocate helps users easily find their nearest e-waste collection points, track their environmental impact, and learn about proper recycling methods.',
        achievements: [
          'Won second runner-up at i-nnovate Hackathon 2023, securing a prize of ₹30,000 for our innovative solution.',
          'Developed a comprehensive Next.js + MERN stack platform addressing the global e-waste crisis affecting over 50 million metric tons of waste annually.',
          'Achieved 0.4s load time through performance optimization techniques, ensuring seamless user experience and efficient operation.',
          'Implemented an interactive mapping system using Mapbox API to help users locate nearest e-waste collection centers.',
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
        fullDescription:
          'TravelWorld is a full-featured tours and travel web application that offers users a comprehensive platform to discover, plan, and book travel experiences. Built on the MERN stack (MongoDB, Express.js, React, and Node.js), the application provides a responsive and intuitive interface optimized for various devices. Users can browse destinations, view package details, read and write reviews, and complete bookings seamlessly through the integrated payment system.',
        achievements: [
          'Engineered a comprehensive travel platform using the MERN stack that attracts over 1000 monthly visitors.',
          'Enhanced Express.js API performance and MongoDB database operations, reducing load time to just 1.1 seconds.',
          'Implemented responsive design principles, ensuring seamless experiences across desktop and mobile devices.',
          'Increased user retention by 20% through UX improvements and performance optimization.',
          'Integrated secure payment processing and booking management systems for end-to-end user journey.',
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
        fullDescription:
          'This project involved completely reimagining how users interact with complex financial data. By conducting extensive user research and iterative testing, we identified key pain points in the existing interface and developed solutions that significantly improved usability. The redesigned dashboard presents information in a more intuitive way, with customizable modules and clear visual hierarchy that helps users make better financial decisions faster.',
        technologies: ['React', 'D3.js', 'TypeScript', 'Material UI', 'Firebase'],
        liveDemoUrl: 'https://example.com/demo',
        githubUrl: 'https://github.com/shuence/financial-dashboard',
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
        fullDescription:
          'This healthcare app was designed with a focus on accessibility, ensuring patients of all abilities could easily schedule appointments, track medications, and communicate with healthcare providers. We incorporated voice navigation, high contrast modes, and simplified workflows to accommodate users with various needs. The app has received recognition for its inclusive design approach.',
        technologies: ['React Native', 'Redux', 'Node.js', 'MongoDB', 'AWS'],
        liveDemoUrl: 'https://example.com/health-app',
        githubUrl: 'https://github.com/shuence/health-app',
      },
    ];

    // Find the project that matches the URL parameter
    const foundProject = demoProjects.find(p => p.id === projectId);
    setProject(foundProject || null);
    setLoading(false);
  }, [projectId]);

  // Set project-specific metadata whenever the project changes
  useEffect(() => {
    if (project) {
      document.title = `${project.title} | Shuence's Portfolio`;

      // Update meta description
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute(
          'content',
          `${project.title}: ${project.description} - A project by Shuence.`
        );
      }
    }
  }, [project]);

  if (loading) {
    return (
      <Layout>
        <div className="container mx-auto mt-20 flex min-h-[60vh] items-center justify-center px-6 py-16 md:px-8">
          <div className="animate-pulse text-xl">Loading project details...</div>
        </div>
      </Layout>
    );
  }

  if (!project) {
    return (
      <Layout>
        <div className="container mx-auto mt-20 min-h-[60vh] px-6 py-16 md:px-8">
          <PageTitle
            title="Project Not Found"
            subtitle="The project you're looking for doesn't exist or has been removed."
          />
          <div className="mt-8">
            <a href="/work" className="flex items-center gap-2 text-primary hover:underline">
              <ArrowLeft size={16} />
              Back to Projects
            </a>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <PageBreadcrumb />
      <div className="pb-20 pt-8">
        <SectionReveal>
          <div className="container mx-auto px-6 md:px-8">
            <PageTitle
              title={project.title}
              subtitle={project.description}
              description={`${project.title} - ${project.description} Portfolio project by Shuence.`}
            />
            {/* Hero Image */}
            <div className="mb-12 mt-8">
              <div className="relative aspect-[21/9] overflow-hidden rounded-lg shadow-xl">
                {' '}
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60"></div>
                {project.status && (
                  <div className="absolute right-4 top-4 z-10">
                    <span
                      className={`inline-flex items-center rounded-full border px-3 py-1.5 text-xs font-medium shadow-lg backdrop-blur-md ${
                        project.status === 'completed'
                          ? 'border-green-400/40 bg-green-400/20 text-green-200 dark:text-green-300'
                          : project.status === 'in-progress'
                            ? 'border-amber-400/40 bg-amber-400/20 text-amber-200 dark:text-amber-300'
                            : 'border-blue-400/40 bg-blue-400/20 text-blue-200 dark:text-blue-300'
                      }`}
                    >
                      <span
                        className={`mr-1.5 h-2 w-2 rounded-full ${
                          project.status === 'completed'
                            ? 'bg-green-400'
                            : project.status === 'in-progress'
                              ? 'bg-amber-400'
                              : 'bg-blue-400'
                        }`}
                      ></span>
                      {project.status === 'completed'
                        ? 'Completed'
                        : project.status === 'in-progress'
                          ? 'In Progress'
                          : 'Planned'}
                    </span>
                  </div>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
              {' '}
              {/* Project Info Sidebar */}{' '}
              <div className="order-2 lg:order-1">
                <div className="sticky top-24 rounded-xl border border-gray-200 bg-white p-6 shadow-lg backdrop-blur-md transition-all duration-300 hover:shadow-xl dark:border-border/40 dark:bg-card">
                  <h3 className="mb-5 flex items-center border-b border-border/50 pb-3 text-lg font-semibold">
                    <span className="mr-2.5 inline-block h-6 w-1 rounded-full bg-primary"></span>
                    Project Details
                  </h3>

                  <div className="space-y-7">
                    {' '}
                    {/* Technologies */}
                    <div>
                      <h4 className="mb-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies?.map(tech => (
                          <span
                            key={tech}
                            className="flex items-center rounded-md border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs text-gray-700 transition-colors hover:bg-primary/10 dark:bg-primary/10 dark:text-primary-foreground dark:hover:bg-primary/15"
                          >
                            <span className="mr-1.5 inline-block h-2 w-2 rounded-full bg-primary"></span>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    {/* Tags */}
                    <div>
                      <h4 className="mb-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        Categories
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map(tag => (
                          <span
                            key={tag}
                            className="rounded-md border border-gray-200 bg-gray-100/80 px-3 py-1.5 text-xs text-gray-700 dark:border-border/40 dark:bg-secondary/20 dark:text-secondary-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    {/* Links */}
                    <div className="space-y-4 pt-4">
                      <h4 className="mb-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        Project Links
                      </h4>

                      {project.liveDemoUrl && (
                        <a
                          href={project.liveDemoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center gap-3 rounded-md border border-primary/20 px-4 py-3 text-sm text-primary transition-colors hover:border-primary/50 hover:bg-primary/5"
                        >
                          <div className="rounded-md bg-primary/10 p-1.5 transition-colors group-hover:bg-primary/20">
                            <ExternalLink size={18} />
                          </div>
                          <span>View Live Demo</span>
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center gap-3 rounded-md border border-gray-200 px-4 py-3 text-sm text-gray-700 transition-colors hover:border-gray-300 hover:bg-gray-100 dark:border-border dark:text-foreground dark:hover:border-border/80 dark:hover:bg-secondary/20"
                        >
                          <div className="rounded-md bg-gray-100 p-1.5 transition-colors group-hover:bg-gray-200 dark:bg-secondary/30 dark:group-hover:bg-secondary/40">
                            <Github size={18} className="text-gray-700 dark:text-gray-300" />
                          </div>
                          <span>View Source Code</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              {/* Main Content */}{' '}
              <div className="order-1 lg:order-2 lg:col-span-2">
                <div className="prose prose-lg prose-slate dark:prose-invert max-w-none">
                  <h2 className="text-gray-800 dark:text-gray-200">Overview</h2>
                  <p className="text-gray-700 dark:text-gray-300">{project.fullDescription}</p>

                  {/* Achievements Section */}
                  {project.achievements && (
                    <>
                      {' '}
                      <h2 className="mb-6 mt-14 inline-flex items-center gap-2 text-2xl font-semibold text-gray-800 dark:text-gray-200">
                        <div className="h-7 w-1 rounded-full bg-primary"></div>
                        Key Achievements
                      </h2>
                      <ul className="mt-4 space-y-4">
                        {project.achievements.map((achievement, index) => (
                          <li
                            key={index}
                            className="flex items-start rounded-lg border border-gray-200 bg-gray-50 p-4 transition-all duration-300 hover:border-gray-300 hover:bg-gray-100 dark:border-border/40 dark:bg-secondary/10 dark:hover:border-border/60 dark:hover:bg-secondary/20"
                          >
                            <span className="mt-0.5 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-white shadow-sm">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="h-4 w-4"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            </span>
                            <span className="ml-3 text-gray-700 dark:text-gray-200">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                  {/* Timeline Section */}
                  {project.timeline && (
                    <>
                      {' '}
                      <h2 className="mb-8 mt-14 inline-flex items-center gap-2 text-2xl font-semibold text-gray-800 dark:text-gray-200">
                        <div className="h-7 w-1 rounded-full bg-primary"></div>
                        Project Timeline
                      </h2>
                      <div className="relative mt-8 space-y-12 border-l-2 border-gray-200 pl-8 dark:border-primary/30">
                        {project.timeline.map((item, index) => (
                          <div key={index} className="group relative">
                            <div className="absolute -left-[30px] flex h-7 w-7 items-center justify-center rounded-full border-2 border-primary/40 bg-gray-50 shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:border-primary dark:border-primary/70 dark:bg-primary/10">
                              <div className="h-2.5 w-2.5 rounded-full bg-primary"></div>
                            </div>
                            <div className="mb-2 inline-block rounded-md bg-primary/5 px-3 py-1 text-sm font-medium text-primary dark:bg-primary/10">
                              {item.date}
                            </div>
                            <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200">
                              {item.title}
                            </h3>
                            <p className="mt-2 leading-relaxed text-gray-600 dark:text-gray-300">
                              {item.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </>
                  )}

                  {/* Challenges Section - Only show for projects without specific achievements */}
                  {!project.achievements && (
                    <>
                      {' '}
                      <h2 className="mb-6 mt-14 inline-flex items-center gap-2 text-2xl font-semibold text-gray-800 dark:text-gray-200">
                        <div className="h-7 w-1 rounded-full bg-primary"></div>
                        Challenges & Solutions
                      </h2>
                      <div className="mb-10 rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-border/60 dark:bg-card">
                        <p className="leading-relaxed text-gray-700 dark:text-gray-300">
                          Every project comes with its unique set of challenges. For this project,
                          we had to balance complex functionality with an intuitive user experience.
                          Through iterative design and extensive user testing, we were able to
                          create a solution that met both technical requirements and user needs.
                        </p>
                      </div>
                      <h2 className="mb-6 mt-14 inline-flex items-center gap-2 text-2xl font-semibold text-gray-800 dark:text-gray-200">
                        <div className="h-7 w-1 rounded-full bg-primary"></div>
                        Results & Impact
                      </h2>
                      <div className="rounded-xl border border-green-100 bg-green-50 p-6 shadow-sm dark:border-primary/20 dark:bg-primary/10">
                        <p className="leading-relaxed text-gray-700 dark:text-gray-300">
                          The completed project significantly improved key metrics including user
                          engagement, conversion rates, and customer satisfaction. By focusing on
                          user-centered design principles and performance optimization, we were able
                          to deliver a solution that exceeded client expectations and provided
                          measurable business value.
                        </p>
                      </div>
                    </>
                  )}
                </div>{' '}
                {/* Project CTA Section */}{' '}
                <div className="my-16 rounded-2xl border border-green-100 bg-gradient-to-r from-green-50 to-emerald-50 p-8 shadow-lg backdrop-blur-sm dark:border-primary/30 dark:from-primary/20 dark:to-primary/5 md:p-10">
                  <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
                    <div className="md:max-w-[60%]">
                      <h3 className="mb-4 text-2xl font-bold text-gray-800 dark:text-gray-200">
                        Interested in similar projects?
                      </h3>
                      <p className="mb-6 text-lg text-gray-600 dark:text-gray-300 md:mb-0">
                        Let's collaborate on your next idea! I specialize in creating impactful
                        digital solutions that drive results.
                      </p>
                    </div>
                    <div className="flex flex-col gap-4 sm:flex-row">
                      <a
                        href="/contact"
                        className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-7 py-3.5 font-medium text-white shadow-primary/20 transition-all duration-300 hover:translate-y-[-2px] hover:bg-primary/90 hover:shadow-xl"
                      >
                        Get in Touch
                      </a>
                      <a
                        href="/work"
                        className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-primary/20 bg-white px-7 py-3 font-medium text-gray-700 transition-all duration-300 hover:translate-y-[-2px] hover:border-primary/40 hover:shadow-lg dark:bg-gray-800 dark:text-gray-200"
                      >
                        View More Projects
                      </a>
                    </div>
                  </div>
                </div>{' '}
                <div className="mt-8 border-t border-gray-200 pt-6 dark:border-border">
                  <a
                    href="/work"
                    className="inline-flex items-center gap-2 rounded-md border border-gray-200 bg-gray-100 px-6 py-3 text-gray-700 transition-all duration-300 hover:border-gray-300 hover:bg-gray-200 hover:shadow-md dark:border-primary/30 dark:bg-secondary dark:text-gray-200 dark:hover:border-primary dark:hover:bg-secondary/80"
                  >
                    <ArrowLeft size={18} />
                    Back to Projects
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </Layout>
  );
}

export default ProjectDetailPage;
