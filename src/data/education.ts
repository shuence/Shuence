interface Degree {
  title: string;
  subtitle: string;
  logo_path: string;
  alt_name: string;
  duration: string;
  descriptions: string[];
  website_link: string;
}

export const degrees: Degree[] = [
  {
    title: 'Deogiri Institute of Engineering And Management Studies, Chh. Sambhajinagar [DIEMS]',
    subtitle: 'B.Tech Electronics And Telecommunication Engineering',
    logo_path: 'diems.png',
    alt_name: 'DIEMS',
    duration: 'Nov 2022 - 2026',
    descriptions: [
      "⚡ I'm studying Computer Science topics like C, CPP, Networking, DS, Algorithms, Microprocessors, OS, etc.",
      '⚡As well as core Electronics Subjects ',
      '⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.',
      '⚡ And building Projects',
    ],
    website_link: 'https://dietms.org',
  },
  {
    title: 'Deogiri College, Chh. Sambhajinagar',
    subtitle: 'Secondary High School',
    logo_path: 'deogiri_college.png',
    alt_name: 'Deogiri College',
    duration: 'September 2020 - March 2022',
    descriptions: [
      '⚡ I have studied basics of Computer Science topics like CPP, Networking, DS, Algorithms, Microprocessors, OS, etc.',
      '⚡ Apart from this, I have done courses Full Stack Development.',
    ],
    website_link: 'https://deogiricollege.org/',
  },
];
