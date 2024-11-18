import React from "react";

const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Shuence's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Shubham Pitekar Portfolio",
    type: "website",
    url: "http://shuence.com/",
  },
};

//Home Page
const greeting = {
  title: "Shubham Pitekar",
  logo_name: "Shuence",
  nickname: "Shuence",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink: "https://bit.ly/Shuence_Resume",
  portfolio_repository: "https://github.com/Shuence/Shuence",
  githubProfile: "https://github.com/Shuence",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/shuence",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/shuence/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/channel/UCxkTeCI4vTRVTQp4GqWv5dQ",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:contact@shuence.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/shuence",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  /*{
    name: "Facebook",
    link: "https://www.facebook.com/laymanbrother.19/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },*/
  {
    name: "Instagram",
    link: "https://www.instagram.com/shuence/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },

  {
    name: "Google Developers",
    link: "https://developers.google.com/profile/u/shuence",
    fontAwesomeIcon: "fas fa-code",
    backgroundColor: "#ff00ff",
  },
];

const skills = {
  data: [
    {
      title: "Web Development",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing almost every kind of website",
        "⚡ Experience of working with Bootstrap and JQuery",
        "⚡ Also applying some basic animations to objects",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Experience hosting websites and web apps",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Setting up cloud functions for serving as application's backend",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#800080",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Netlify",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#20c6b7",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating graphics and editing videos",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Canva",
          fontAwesomeClassname: "simple-icons:canva",
          style: {
            color: "#20c6b7",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://leetcode.com/shuence",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/shuence",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/shuence",
    },
    {
      siteName: "Hackerrank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerrank.com/shuence",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/shuence",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title:
        "Deogiri Institute of Engineering And Management Studies, Chh. Sambhajinagar [DIEMS]",
      subtitle: "B.Tech Electronics And Telecommunication Engineering",
      logo_path: "diems.png",
      alt_name: "DIEMS",
      duration: "Nov 2022 - 2026",
      descriptions: [
        "⚡ I'm studying Computer Science  topics like C, CPP, Networking, DS, Algorithms, Microprocessors, OS, etc.",
        "⚡As well as core Electronics Subjects ",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        "⚡ And building Projects",
      ],
      website_link: "https://dietms.org",
    },
    {
      title: "Deogiri College, Chh. Sambhajinagar",
      subtitle: "Secondary High School",
      logo_path: "deogiri_college.png",
      alt_name: "Deogiri College",
      duration: "September 2020 - March 2022",
      descriptions: [
        "⚡ I have studied basics of Computer Science topics like CPP, Networking, DS, Algorithms, Microprocessors, OS, etc.",
        "⚡ Apart from this, I have done courses Full Stack Development.",
      ],
      website_link: "https://deogiricollege.org/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Google Solution Challenge 2024 - Top 100 Teams",
      subtitle: "- By Google",
      logo_path: "gsc.png",
      certificate_link:
        "https://drive.google.com/file/d/172x2w0c2WylZ3K5GM7aRm1DWx7vdkrdx/view?usp=sharing",
      alt_name: "Google Solution Challenge",
      color_code: "#FFFFFF",
    },
    {
      title: "i-nnovate Hackathon 2023",
      subtitle: "- By Intelliswift",
      logo_path: "innovate.png",
      certificate_link:
        "https://drive.google.com/file/d/10qveXsGHZr29InNYEJX4oglW_GY2lA5C/view?usp=sharing",
      alt_name: "i-nnovate",
      color_code: "#FFFFFF",
    },
    {
      title: "Frontend Developer (React) Certificate",
      subtitle: "- By HackerRank",
      logo_path: "hackerrank.png",
      certificate_link: "https://www.hackerrank.com/certificates/a6dad6ff95f0",
      alt_name: "hackerrank",
      color_code: "#FFFFFF",
    },
    {
      title: "The Complete 2023 Web Development Bootcamp",
      subtitle: "- By Udemy (Dr. Angela Yu)",
      logo_path: "udemy.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-dda68bc6-d4d5-4202-a5ad-47cc0f6b1285/",
      alt_name: "udemy",
      color_code: "#FFFFFF",
    },
    {
      title: "Excel Skills for Business: Essentials",
      subtitle: "- By Coursera (Macquarie University)",
      logo_path: "Coursera.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/X72XCEYD5T34",
      alt_name: "coursera",
      color_code: "#FFFFFF",
    },
    {
      title: "Responsive Web Design",
      subtitle: "- By FreeCodeCamp",
      logo_path: "FreeCodeCamp_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/11IKhxcy2GFDr4Pu6tb8V72HMK90pP8t9/view?usp=sharing",
      alt_name: "coursera",
      color_code: "#FFFFFF",
    },
    {
      title: "Coding Fundamentals",
      subtitle: "- Grasshopper (Area 120 by Google)",
      logo_path: "gh.webp",
      certificate_link:
        "https://drive.google.com/file/d/1arpr3zjs-xHRV6981kZpQSmaDSE6VCmT/view?usp=sharing",
      alt_name: "Grasshopper",
      color_code: "#FFFFFF",
    },
  ],
};

// Experience Page

const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "Chief Technology Officer at Quartet StudioZ, building my startup. Experienced Full in Stack Web Development and also served as Content Writing Intern. Passionate about organizing events, actively engaged in open-source communities for growth.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Chief Technology Officer",
          company: "Quartet StudioZ ",
          company_url: "https://quartetstudioz.com/",
          logo_path: "quartet_studioz.png",
          duration: "June 2023 - Present",
          location: "Chh. Sambhajinagar,Maharahstra (Remote)",
          description: (
            <ul>
              <li>
                Actively managed company operations, collaborating closely with
                clients. Proficient in TypeScript, API, and Full-Stack
                Development. Led cross-functional teams to ensure efficient
                project execution.
              </li>
              <li>
                Optimized website load speeds to 0.9 seconds using Next.js,
                resulting in a 40% improvement in user experience. Spearheaded
                the implementation of performance enhancements across the entire
                application stack.
              </li>
              <li>
                Developed innovative mobile applications using Flutter, focusing
                on intuitive user interfaces and seamless user experiences.
                Integrated cutting-edge features to stay ahead of market trends.
              </li>
              <li>
                Successfully delivered over 5 high-quality applications within
                tight deadlines (7-8 days). Implemented agile methodologies to
                streamline development processes, ensuring timely and effective
                project completion.
              </li>
              <li>
                Collaborated with stakeholders to gather requirements, conducted
                thorough analysis, and provided strategic recommendations for
                continuous improvement. Actively participated in client meetings
                and feedback sessions.
              </li>
            </ul>
          ),
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Web Development Intern",
          company: "Teenagers Initiative",
          company_url: "https://teenverified.blogspot.com/",
          duration: "May 2021 - Oct 2021",
          location: "Chh. Sambhajinagar, Maharashtra, India (Hybrid)",
          description: (
            <ul>
              <li>
                Contributed as a Web Developer to Teenagers Initiative, actively
                participating in projects focused on COVID awareness and mental
                health support.
              </li>
              <li>
                Designed and implemented website features to enhance user
                engagement and accessibility.
              </li>
              <li>
                Successfully created and managed a blog using Blogger, with a
                strategic approach that attracted and retained a diverse
                audience, resulting in over 1,000 visitors.
              </li>
              <li>
                Authored insightful articles on COVID precautions and Mental
                Health, providing valuable information to the community.
              </li>
              <li>
                Engaged in various social work activities, including organizing
                and participating in plantation drives and food distribution
                initiatives to contribute positively to society.
              </li>
            </ul>
          ),
          logo_path: "teenager_initiative.png",
          color: "#000000",
        },
        {
          title: "Content Writing Intern",
          company: "The Cinematic Quotes",
          duration: "August 2022 – September 2022",
          company_url: "https://www.instagram.com/thecinematicquotes/",
          location: "Remote",
          description: (
            <ul>
              <li>
                As a Content Writing Intern at The Cinematic Quotes, I took
                charge of managing the Instagram account. This involved creating
                and curating content, scheduling posts, and devising a
                comprehensive content strategy to enhance online presence and
                engagement.
              </li>
              <li>
                Implemented effective engagement strategies, resulting in a
                remarkable growth of close to 5k followers within just one
                month. This achievement underscored the success of the tailored
                approach to audience interaction.
              </li>
              <li>
                Creatively contributed to the platform by crafting engaging post
                reels and writing captivating captions. These efforts yielded
                outstanding results, with content generating over 5.3 million
                views and amassing more than 400 thousand likes.
              </li>
            </ul>
          ),
          logo_path: "thecinematicquotes.png",
          color: "#000000",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "GDSC Web Dev Lead",
          company: "GDSC DIEMS",
          company_url:
            "https://gdsc.community.dev/deogiri-institute-of-engineering-and-management-studies-aurangabad/",
          logo_path: "gdsc_logo.png",
          duration: "Aug 2023 - Present",
          location: "Chh. Sambhajinagar, Maharashtra",
          description: (
            <ul>
              <li>
                Well-established developer club in college, directly associated
                with Google Developers. Developed many interdisciplinary
                projects under the membership of this club.
              </li>
              <li>
                Conducted informative sessions on various Web Development
                topics, fostering a learning community. Successfully coordinated
                a 5-day Cybersecurity workshop, enhancing participants'
                knowledge and skills.
              </li>
              <li>
                Organized workshops and activities on Android Application
                Development, Flutter, and React JS.
              </li>
            </ul>
          ),
          color: "#0C9D58",
        },
        {
          title: "Developer Program Member",
          company: "Github",
          company_url: "https://github.com/",
          logo_path: "github_logo.png",
          duration: "July 2020 - PRESENT",
          location: "Work From Home",
          description:
            "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Creative Commons and many more. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
          color: "#181717",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "contactme.svg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with React, Android, Web Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I write blogs here related to my personal experiences and coding stuff. ",
    link: "https://blogs.shuence.com",
  },
  addressSection: {
    title: "Email Address",
    subtitle: "contact@shuence.com, Shubhampitekar2323@gmail.com",
    avatar_image_path: "address_image.svg",
    primaryEmail: "mailto:contact@shuence.com",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
