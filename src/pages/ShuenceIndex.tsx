import Layout from '@/components/shuence/Layout';
import Hero from '@/components/shuence/Hero';
import ProjectSection from '@/components/shuence/ProjectSection';
import About from '@/components/shuence/About';
import Contact from '@/components/shuence/Contact';
import SectionReveal from '@/components/shuence/SectionReveal';
import Loader from '@/components/shuence/Loader';
import { useState, useEffect } from 'react';

export default function ShuenceIndex() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Add a slight delay to ensure all assets are loaded
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <Loader onLoadComplete={() => setIsLoaded(true)} />
      <div className={`transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <Layout>
          <Hero />

          <SectionReveal>
            <ProjectSection />
          </SectionReveal>

          <SectionReveal delay={200}>
            <About />
          </SectionReveal>

          <SectionReveal delay={300}>
            <Contact />
          </SectionReveal>
        </Layout>
      </div>
    </>
  );
}
