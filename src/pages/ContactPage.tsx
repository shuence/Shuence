import Layout from '@/components/shuence/Layout';
import Contact from '@/components/shuence/Contact';
import SectionReveal from '@/components/shuence/SectionReveal';
import PageBreadcrumb from '@/components/shuence/PageBreadcrumb';
import PageTitle from '@/components/shuence/PageTitle';
import { useEffect } from 'react';
import { Send, MapPin, Coffee, Calendar } from 'lucide-react';

export default function ContactPage() {
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <Layout>
      <PageBreadcrumb />
      <PageTitle
        title="Contact Me"
        subtitle="Have a project in mind or just want to connect? I'd love to hear from you. Reach out through any of the channels below."
        description="Get in touch with Software Engineer Shubham Pitekar for collaboration, project inquiries, or professional opportunities through various contact channels."
        hidden={true}
      />

      {/* Hero section similar to About and Work pages */}
      <SectionReveal>
        <div className="container mx-auto mb-12 px-6 md:px-8">
          <div className="mb-8 flex flex-col items-center text-center">
            <div className="mb-4 inline-block">
              <div className="relative">
                <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary to-blue-400 opacity-30 blur"></span>
                <div className="relative rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 dark:border-primary/30 dark:bg-primary/20">
                  <span className="text-sm font-medium text-primary/80 dark:text-primary/75">
                    Get In Touch
                  </span>
                </div>
              </div>
            </div>

            <h1 className="dark:text-foreground-dark/90 relative mb-6 text-4xl font-bold text-foreground/90 md:text-5xl">
              Contact Me
              <span className="absolute bottom-[-10px] left-0 right-0 h-1 rounded bg-gradient-to-r from-primary/40 to-primary"></span>
            </h1>
            <p className="max-w-3xl text-lg text-muted-foreground/80 dark:text-muted-foreground/70 md:text-xl">
              Let's collaborate on your next project or discuss opportunities
            </p>
          </div>

          {/* Contact options */}
          <div className="mb-8 mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="dark:bg-card-dark/80 flex flex-col items-center rounded-lg border border-border/50 bg-card/80 p-6 text-center transition-all hover:shadow-md dark:border-border/30">
              <div className="mb-4 rounded-full bg-primary/10 p-3 dark:bg-primary/15">
                <Send size={24} className="text-primary/90 dark:text-primary/85" />
              </div>
              <h3 className="dark:text-foreground-dark/85 mb-2 font-semibold text-foreground/90">
                Email Me
              </h3>
              <p className="text-sm text-muted-foreground/70 dark:text-muted-foreground/60">
                shubhampitekar2323@gmail.com
              </p>
            </div>

            <div className="dark:bg-card-dark/80 flex flex-col items-center rounded-lg border border-border/50 bg-card/80 p-6 text-center transition-all hover:shadow-md dark:border-border/30">
              <div className="mb-4 rounded-full bg-primary/10 p-3 dark:bg-primary/15">
                <MapPin size={24} className="text-primary/90 dark:text-primary/85" />
              </div>
              <h3 className="dark:text-foreground-dark/85 mb-2 font-semibold text-foreground/90">
                Location
              </h3>
              <p className="text-sm text-muted-foreground/70 dark:text-muted-foreground/60">
                Maharashtra, India
              </p>
            </div>

            <div className="dark:bg-card-dark/80 flex flex-col items-center rounded-lg border border-border/50 bg-card/80 p-6 text-center transition-all hover:shadow-md dark:border-border/30">
              <div className="mb-4 rounded-full bg-primary/10 p-3 dark:bg-primary/15">
                <Calendar size={24} className="text-primary/90 dark:text-primary/85" />
              </div>
              <h3 className="dark:text-foreground-dark/85 mb-2 font-semibold text-foreground/90">
                Availability
              </h3>
              <p className="text-sm text-muted-foreground/70 dark:text-muted-foreground/60">
                Open to opportunities
              </p>
            </div>
          </div>
        </div>
      </SectionReveal>

      <SectionReveal>
        <Contact />
      </SectionReveal>

      {/* Additional contact CTA */}
      <SectionReveal>
        <div className="container mx-auto my-16 px-6 md:px-8">
          <div className="flex flex-col items-center justify-between gap-6 rounded-lg border border-primary/20 bg-gradient-to-r from-primary/10 to-primary/5 p-8 shadow-md md:flex-row md:p-10">
            <div>
              <h3 className="dark:text-foreground-dark/90 mb-4 text-xl font-bold text-foreground/90 md:text-2xl">
                Let's discuss over a coffee
              </h3>
              <p className="text-base text-muted-foreground/80 dark:text-muted-foreground/70 md:text-lg">
                I'm always open to discussing new ideas, projects or opportunities to collaborate.
              </p>
            </div>

            <a
              href="mailto:shubhampitekar2323@gmail.com"
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-md bg-primary/90 px-7 py-3 text-primary-foreground/95 transition-all duration-300 hover:bg-primary/80 hover:shadow-lg dark:bg-primary/85 dark:text-primary-foreground/90"
            >
              <Coffee size={18} />
              Schedule a Meet
            </a>
          </div>
        </div>
      </SectionReveal>
    </Layout>
  );
}
