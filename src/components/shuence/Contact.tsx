import { Mail, Linkedin, Github } from 'lucide-react';
import ContactForm from './ContactForm';
import { useState } from 'react';
import { FaXTwitter } from 'react-icons/fa6';

export function Contact() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const socialLinks = [
    {
      name: 'Email',
      href: 'mailto:shubhampitekar2323@gmail.com',
      icon: <Mail size={20} />,
      label: 'shubhampitekar2323@gmail.com',
      color: 'blue',
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/shuence',
      icon: <Linkedin size={20} />,
      label: 'linkedin.com/in/shuence',
      color: 'sky',
    },
    {
      name: 'X',
      href: 'https://twitter.com/shuence',
      icon: <FaXTwitter size={18} />,
      label: '@shuence',
      color: 'cyan',
    },
    {
      name: 'GitHub',
      href: 'https://github.com/shuence',
      icon: <Github size={20} />,
      label: 'github.com/shuence',
      color: 'gray',
    },
  ];

  return (
    <section id="contact" className="dark:bg-card-dark/80 bg-card/80 py-20 md:py-32">
      <div className="container mx-auto px-6 md:px-8">
        <div className="mb-16">
          <h2 className="dark:text-foreground-dark/90 mb-6 text-center text-3xl font-bold text-foreground/90 md:mb-8 md:text-4xl">
            Let's Connect
          </h2>

          <p className="mx-auto mb-10 max-w-2xl text-center text-lg text-muted-foreground/80 dark:text-muted-foreground/70 md:mb-12 md:text-xl">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part
            of your vision.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* Contact form */}
          <div>
            <ContactForm />
          </div>

          {/* Social links */}
          <div>
            <h3 className="dark:text-foreground-dark/90 mb-6 text-2xl font-bold text-foreground/90">
              Reach Out
            </h3>
            <div className="space-y-5">
              {socialLinks.map((link, index) => {
                const isHovered = hoveredLink === link.name;
                const colorClasses = {
                  blue: 'hover:border-blue-400/30 hover:bg-blue-50/20 dark:hover:bg-blue-900/5',
                  sky: 'hover:border-sky-400/30 hover:bg-sky-50/20 dark:hover:bg-sky-900/5',
                  cyan: 'hover:border-cyan-400/30 hover:bg-cyan-50/20 dark:hover:bg-cyan-900/5',
                  gray: 'hover:border-gray-400/30 hover:bg-gray-50/20 dark:hover:bg-gray-900/5',
                };

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`flex items-center gap-4 rounded-lg border border-border/50 p-5 dark:border-border/30 md:p-6 ${colorClasses[link.color as keyof typeof colorClasses]} transform transition-all duration-500 hover:shadow-md ${isHovered ? 'translate-x-1' : ''} dark:bg-card-dark/90 bg-card/90`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ animationDelay: `${index * 150}ms` }}
                    onMouseEnter={() => setHoveredLink(link.name)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    <div
                      className={`rounded-full p-2 ${isHovered ? 'bg-primary/8 scale-110 dark:bg-primary/10' : 'bg-transparent'} text-primary/90 transition-all duration-300 dark:text-primary/85`}
                    >
                      {link.icon}
                    </div>
                    <div className="flex-grow">
                      <p className="dark:text-foreground-dark/85 font-medium text-foreground/90">
                        {link.name}
                      </p>
                      <p className="text-sm text-muted-foreground/70 dark:text-muted-foreground/60">
                        {link.label}
                      </p>
                    </div>
                    <div
                      className={`translate-x-2 transform text-primary/80 opacity-0 dark:text-primary/75 ${isHovered ? 'translate-x-0 opacity-100' : ''} transition-all duration-300`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
