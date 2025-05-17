import Layout from '@/components/shuence/Layout';
import About from '@/components/shuence/About';
import WorkHistory from '@/components/shuence/WorkHistory';
import SectionReveal from '@/components/shuence/SectionReveal';
import PageBreadcrumb from '@/components/shuence/PageBreadcrumb';
import PageTitle from '@/components/shuence/PageTitle';
import { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

export default function AboutPage() {
  const resumeLink = 'https://bit.ly/Shuence_Resume';

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
        title="About Me"
        subtitle="Engineer, Writer, and Startup Enthusiast | Building Calex - AI Wellness Companion"
        description="I am a passionate engineer and startup evangelist with a focus on building innovative solutions that make a difference. My journey has been shaped by my love for technology, writing, and the startup ecosystem."
        hidden={true}
      />
      <SectionReveal>
        <About />
      </SectionReveal>

      <SectionReveal>
        <div className="container mx-auto my-16 px-6 md:px-8">
          {/* Download CV Section */}
          <div className="flex flex-col items-center justify-between gap-6 rounded-lg border border-primary/20 bg-gradient-to-r from-primary/10 to-primary/5 p-8 shadow-md md:flex-row md:p-10">
            <div>
              <h3 className="mb-4 text-xl font-bold md:text-2xl">
                Want to know more about my qualifications?
              </h3>
              <p className="text-base text-muted-foreground md:text-lg">
                Download my resume for a comprehensive overview of my experience, education, and
                achievements.
              </p>
            </div>

            <a
              href={resumeLink}
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-md bg-primary px-7 py-3 text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:shadow-lg"
            >
              Download CV <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </SectionReveal>

      <SectionReveal>
        <WorkHistory />
      </SectionReveal>
    </Layout>
  );
}
