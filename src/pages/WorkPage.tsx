import Layout from '@/components/shuence/Layout';
import ProjectSection from '@/components/shuence/ProjectSection';
import SectionReveal from '@/components/shuence/SectionReveal';
import PageBreadcrumb from '@/components/shuence/PageBreadcrumb';
import PageTitle from '@/components/shuence/PageTitle';
import { useEffect } from 'react';
import { ArrowRight, Github, Code } from 'lucide-react';
import { projects } from '@/data/projects';

export default function WorkPage() {
  const gitHubLink = 'https://github.com/shuence';

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  // Count projects by status
  const completedProjects = projects.filter(p => p.status === 'completed').length;
  const inProgressProjects = projects.filter(p => p.status === 'in-progress').length;
  const totalProjects = projects.length;

  return (
    <Layout>
      <PageBreadcrumb />
      <PageTitle
        title="My Work"
        subtitle="A selection of my recent projects and collaborations. Each project reflects my passion for clean, functional, and user-focused design."
        description="Explore Shuence's portfolio of software engineering projects, featuring web applications, mobile apps, and innovative solutions built with modern technologies."
        hidden={true}
      />

      {/* Hero section similar to About page */}
      <SectionReveal>
        <div className="container mx-auto mb-12 px-6 md:px-8">
          <div className="mb-8 flex flex-col items-center text-center">
            <div className="mb-4 inline-block">
              <div className="relative">
                <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary to-blue-400 opacity-30 blur"></span>
                <div className="relative rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 dark:border-primary/30 dark:bg-primary/20">
                  <span className="text-sm font-medium text-primary/80 dark:text-primary/75">
                    Project Showcase
                  </span>
                </div>
              </div>
            </div>

            <h1 className="dark:text-foreground-dark/90 relative mb-6 text-4xl font-bold text-foreground/90 md:text-5xl">
              My Projects
              <span className="absolute bottom-[-10px] left-0 right-0 h-1 rounded bg-gradient-to-r from-primary/40 to-primary"></span>
            </h1>
            <p className="max-w-3xl text-lg text-muted-foreground/80 dark:text-muted-foreground/70 md:text-xl">
              Building innovative solutions to real-world problems using modern technologies
            </p>
          </div>

          {/* Project stats */}
          <div className="mb-8 mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="dark:bg-card-dark/80 rounded-lg border border-border/50 bg-card/80 p-6 text-center transition-all hover:shadow-md dark:border-border/30">
              <div className="mb-2 text-4xl font-bold text-primary/90 dark:text-primary/85">
                {totalProjects}+
              </div>
              <div className="text-muted-foreground/70 dark:text-muted-foreground/60">
                Total Projects
              </div>
            </div>
            <div className="dark:bg-card-dark/80 rounded-lg border border-border/50 bg-card/80 p-6 text-center transition-all hover:shadow-md dark:border-border/30">
              <div className="mb-2 text-4xl font-bold text-primary/90 dark:text-primary/85">
                {completedProjects}
              </div>
              <div className="text-muted-foreground/70 dark:text-muted-foreground/60">
                Completed
              </div>
            </div>
            <div className="dark:bg-card-dark/80 rounded-lg border border-border/50 bg-card/80 p-6 text-center transition-all hover:shadow-md dark:border-border/30">
              <div className="mb-2 text-4xl font-bold text-primary/90 dark:text-primary/85">
                {inProgressProjects}
              </div>
              <div className="text-muted-foreground/70 dark:text-muted-foreground/60">
                In Progress
              </div>
            </div>
          </div>
        </div>
      </SectionReveal>

      <SectionReveal>
        <ProjectSection />
      </SectionReveal>

      {/* GitHub link section similar to Resume section in About */}
      <SectionReveal>
        <div className="container mx-auto my-16 px-6 md:px-8">
          <div className="flex flex-col items-center justify-between gap-6 rounded-lg border border-primary/20 bg-gradient-to-r from-primary/10 to-primary/5 p-8 shadow-md md:flex-row md:p-10">
            <div>
              <h3 className="dark:text-foreground-dark/90 mb-4 text-xl font-bold text-foreground/90 md:text-2xl">
                Explore more of my work on GitHub
              </h3>
              <p className="text-base text-muted-foreground/80 dark:text-muted-foreground/70 md:text-lg">
                Check out my open source contributions and other projects not featured here.
              </p>
            </div>

            <a
              href={gitHubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-md bg-primary/90 px-7 py-3 text-primary-foreground/95 transition-all duration-300 hover:bg-primary/80 hover:shadow-lg dark:bg-primary/85 dark:text-primary-foreground/90"
            >
              <Github size={18} />
              View GitHub Profile <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </SectionReveal>

      {/* Technologies used section */}
      <SectionReveal>
        <div className="container mx-auto mb-16 px-6 md:px-8">
          <div className="mb-8 text-center">
            <div className="mb-4 inline-flex items-center justify-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 dark:border-primary/25 dark:bg-primary/15">
              <Code size={16} className="mr-2 text-primary/80 dark:text-primary/75" />
              <span className="text-sm font-medium text-primary/80 dark:text-primary/75">
                Technologies
              </span>
            </div>
            <h2 className="dark:text-foreground-dark/90 mb-4 text-2xl font-bold text-foreground/90 md:text-3xl">
              Tech Stack I've Used
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground/80 dark:text-muted-foreground/70">
              The main technologies and frameworks I frequently use in my projects
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {[
              'React',
              'Next.js',
              'TypeScript',
              'Node.js',
              'Flutter',
              'Firebase',
              'MongoDB',
              'PostgreSQL',
              'Tailwind CSS',
              'Express',
              'React Native',
              'Python',
              'AWS',
              'Docker',
              'GitHub Actions',
            ].map((tech, index) => (
              <span
                key={index}
                className="dark:bg-card-dark/90 dark:text-foreground-dark/80 rounded-md border border-border/40 bg-card/90 px-4 py-2 text-sm text-foreground/80 transition-colors duration-300 hover:border-primary/30 hover:bg-primary/5 dark:border-border/30"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </SectionReveal>
    </Layout>
  );
}
