/**
 * Central content blueprint for portfolio sections.
 * Replace dummy values with real profile/resume data later.
 */

export const sectionPlan = [
  { id: 'hero', label: 'Hero', enabled: true, order: 1 },
  { id: 'about', label: 'About', enabled: true, order: 2 },
  { id: 'experience', label: 'Experience', enabled: true, order: 3 },
  { id: 'projects', label: 'Projects', enabled: true, order: 4 },
  { id: 'skills', label: 'Skills', enabled: true, order: 5 },
  { id: 'education', label: 'Education', enabled: true, order: 6 },
  { id: 'certifications', label: 'Certifications', enabled: true, order: 7 },
  { id: 'contact', label: 'Contact', enabled: true, order: 8 },
]

export const portfolioContent = {
  about: {
    heading: 'About Me',
    summary:
      'Dummy summary: product-focused software engineer building scalable web applications with clean architecture and strong UX focus.',
    highlights: [
      'Dummy: 3+ years experience in frontend + full-stack delivery',
      'Dummy: Led features from idea to deployment',
      'Dummy: Strong focus on performance, accessibility, and maintainability',
    ],
  },

  experience: {
    summary:
      'Dummy: Recent roles centered on scalable web interfaces, pragmatic architecture, and shipping with measurable quality.',
    asideBody:
      'Dummy: Comfortable across React-focused frontends, Node services, relational data models, CI checks, and close collaboration with product and design.',
    roles: [
      {
        id: 'exp-1',
        company: 'Dummy Tech Solutions',
        role: 'Software Engineer',
        start: 'Jan 2024',
        end: 'Present',
        location: 'Remote',
        points: [
          'Built modular frontend architecture for a SaaS dashboard.',
          'Improved page speed by reducing bundle and render cost.',
          'Collaborated with product/design to ship features every sprint.',
        ],
        tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
      },
      {
        id: 'exp-2',
        company: 'Dummy Labs',
        role: 'Frontend Developer',
        start: 'Jul 2022',
        end: 'Dec 2023',
        location: 'Onsite',
        points: [
          'Created reusable UI component system and design tokens.',
          'Integrated APIs and handled loading/error states consistently.',
          'Set up CI checks for lint/build quality gates.',
        ],
        tech: ['React', 'SCSS', 'REST API', 'GitHub Actions'],
      },
    ],
  },

  projects: [
    {
      id: 'proj-1',
      title: 'Dummy E-Commerce Platform',
      description:
        'Full-stack shopping app with auth, cart, payment flow, and admin analytics.',
      impact: 'Dummy impact: Increased conversion by 18% in test cohort.',
      tags: ['React', 'Node.js', 'MongoDB'],
      liveUrl: 'https://example.com',
      repoUrl: 'https://github.com/your-username/dummy-ecommerce',
    },
    {
      id: 'proj-2',
      title: 'Dummy Portfolio CMS',
      description:
        'Content-managed portfolio with multilingual support and theme control.',
      impact: 'Dummy impact: Reduced content update time by 60%.',
      tags: ['Vite', 'React', 'i18next'],
      liveUrl: 'https://example.com',
      repoUrl: 'https://github.com/your-username/dummy-portfolio-cms',
    },
  ],

  skills: {
    languages: ['JavaScript', 'TypeScript', 'SQL', 'Python'],
    frontend: ['React', 'Redux', 'SCSS', 'HTML5', 'CSS3'],
    backend: ['Node.js', 'Express', 'REST APIs'],
    databases: ['PostgreSQL', 'MongoDB', 'Redis'],
    tools: ['Git', 'GitHub Actions', 'Docker', 'Postman'],
  },

  education: [
    {
      id: 'edu-1',
      degree: 'Bachelor of Technology (Dummy)',
      school: 'Dummy Institute of Technology',
      start: '2018',
      end: '2022',
      note: 'Relevant coursework: DSA, DBMS, Operating Systems, CN',
    },
  ],

  certifications: [
    {
      id: 'cert-1',
      name: 'Dummy Cloud Practitioner',
      issuer: 'Dummy Cloud',
      year: '2025',
      link: 'https://example.com/certificate',
    },
    {
      id: 'cert-2',
      name: 'Dummy Frontend Advanced',
      issuer: 'Dummy Academy',
      year: '2024',
      link: 'https://example.com/certificate',
    },
  ],

  contact: {
    email: 'your.email@example.com',
    phone: '+91-90000-00000',
    location: 'India',
    socials: {
      github: 'https://github.com/your-username',
      linkedin: 'https://www.linkedin.com/in/your-linkedin',
      twitter: 'https://x.com/your-handle',
    },
  },
}
