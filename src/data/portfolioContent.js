/**
 * Central content blueprint for portfolio sections.
 * Replace dummy values with real profile/resume data later.
 */
import masaiCertificate from "../assets/masai-ciritficate.jpg";

export const sectionPlan = [
  { id: "hero", label: "Hero", enabled: true, order: 1 },
  { id: "about", label: "About", enabled: true, order: 2 },
  { id: "experience", label: "Experience", enabled: true, order: 3 },
  { id: "projects", label: "Projects", enabled: true, order: 4 },
  { id: "skills", label: "Skills", enabled: true, order: 5 },
  { id: "education", label: "Education", enabled: true, order: 6 },
  { id: "certifications", label: "Certifications", enabled: true, order: 7 },
  { id: "contact", label: "Contact", enabled: true, order: 8 },
];

export const portfolioContent = {
  about: {
    heading: "About",
    summary:
      "Full Stack Developer with nearly 3 years of experience building scalable web applications across React/Vue frontends and Node/Mongo backends. I focus on clean architecture, reusable UI systems, and shipping measurable outcomes for products like Foyr Neo, Asian Paints (Nilaya Anthology / Beautiful Homes), BuildWise, and eDesign.",
    highlights: [
      "Nearly 3 years professional experience across product + service projects",
      "Led end-to-end frontend delivery for Nilaya Anthology (Asian Paints)",
      "Frontend rewrites + AI feature integration for a legacy SaaS platform",
      "Reusable component libraries to speed up delivery and consistency",
    ],
  },

  experience: {
    summary:
      "Frontend Developer at Altersquare delivering client projects including Foyr Neo 3.0, eDesign, Nilaya Anthology (Asian Paints), Beautiful Homes (Asian Paints), and BuildWise - from full UI ownership and architecture rewrites to stabilization and optimization.",
    asideBody:
      "Comfortable owning frontend architecture, performance improvements, and cross-team integration (3D / backend / product) with a bias for reusable components, clean state management, and maintainable code.",
    roles: [
      {
        id: "exp-1",
        company: "Altersquare",
        role: "Frontend Developer - Altersquare",
        clientProject: "Foyr Neo 3.0",
        clientCompany: "Foyr",
        start: "09/2025",
        end: "Present",
        location: "India",
        points: [
          "Client project (Foyr Neo 3.0): building frontend from scratch with another frontend developer, replacing a slow legacy setup where even small changes could take 2+ hours.",
          "Developing both major product surfaces: Dashboard (subscriptions, credits, AI flows, project collaboration, invitations) and Editor experiences.",
          "Integrated AI-driven functionality with backend support for 3D model/render generation and AI-based add/remove architecture actions.",
          "Built ProductUpload Neo to streamline furniture, texture, and material catalog updates for modern architecture workflows.",
        ],
        tech: [
          "JavaScript",
          "Vue.js",
          "Pinia",
          "SCSS",
          "Cursor AI",
          "Git",
          "GitHub",
        ],
      },
      {
        id: "exp-2",
        company: "Altersquare",
        role: "Frontend Developer - Altersquare",
        clientProject: "eDesign",
        clientCompany: "eDesign",
        start: "10/2025",
        end: "09/2026",
        location: "India",
        points: [
          "Client project (eDesign): delivered frontend UI in direct collaboration with company leadership while coordinating with dedicated backend and 3D teams.",
          "Implemented multiple UI change cycles and optimization updates across fast-evolving requirements.",
          "Built interface layers to improve communication and handoff between frontend and 3D integration workflows.",
          "Optimized state restoration so users can continue from where they left off instead of restarting from initial fetch behavior.",
        ],
        tech: [
          "JavaScript",
          "Vue.js",
          "Pinia",
          "SCSS",
          "Git",
          "GitHub",
        ],
      },
      {
        id: "exp-3",
        company: "Altersquare",
        role: "Frontend Developer - Altersquare",
        clientProject: "Nilaya Anthology",
        clientCompany: "Asian Paints",
        start: "03/2024",
        end: "04/2025",
        location: "India",
        points: [
          "Client project (Nilaya Anthology - Asian Paints): built the complete frontend and integrated it with the existing system stack.",
          "Simplified and rebuilt the product quotation creation flow from a highly complex legacy process.",
          "Implemented optimization improvements across critical user workflows for better responsiveness and reliability.",
          "Recognized for strong delivery with team appreciation and a performance bonus.",
        ],
        tech: [
          "JavaScript",
          "Vue.js",
          "Pinia",
          "SCSS",
          "Git",
          "GitHub",
        ],
      },
      {
        id: "exp-4",
        company: "Altersquare",
        role: "Frontend Developer - Altersquare",
        clientProject: "BuildWise",
        clientCompany: "BuildWise",
        start: "11/2023",
        end: "03/2024",
        location: "India",
        points: [
          "Improved UI consistency and user experience across key product screens.",
          "Refactored frontend code for cleaner structure and better long-term maintainability.",
          "Optimized API result handling and data rendering behavior to improve reliability and responsiveness.",
        ],
        tech: [
          "JavaScript",
          "Vue.js",
          "Vuex",
          "SCSS",
          "Git",
          "GitHub",
        ],
      },
      {
        id: "exp-5",
        company: "Altersquare",
        role: "Frontend Developer - Altersquare",
        clientProject: "Beautiful Homes",
        clientCompany: "Asian Paints",
        start: "Production support phase",
        end: "Ongoing",
        location: "India",
        points: [
          "Client project (Beautiful Homes - Asian Paints): contributed targeted bug fixes and incremental UX updates in a live production environment.",
          "Improved filter/sorting behavior and added new product parameters.",
          "Delivered low-risk frontend changes focused on stability and smoother catalog workflows.",
        ],
        tech: [
          "JavaScript",
          "Vue2",
          "Vuex",
          "SCSS",
          "Git",
          "GitHub",
        ],
      },
    ],
  },

  projects: {
    summary:
      "Public component library work focused on reusable UI systems, developer velocity, and consistency across frontend projects.",
    items: [
      {
        id: "proj-1",
        title: "React UI Component Library",
        description:
          "A library of 30+ reusable UI components (inputs, dropdowns, loaders, progress indicators) built to standardize UX and speed up delivery.",
        impact:
          "Improved team efficiency by ~30% by reducing repeated UI work and enforcing consistency.",
        tags: ["React", "Vite", "Docusaurus", "MobX", "SCSS"],
        liveUrl: "https://endearing-kheer-56ebf6.netlify.app/",
        repoUrl: "https://github.com/gk072745/react-components/",
      },
      {
        id: "proj-2",
        title: "Vue UI Component Library",
        description:
          "A reusable Vue-based component system and docs setup focused on consistency, quick onboarding, and scalable frontend delivery.",
        impact:
          "Standardized UI patterns for faster implementation and cleaner collaboration across projects.",
        tags: ["Vue.js", "Pinia", "VitePress", "SCSS", "Vite"],
        liveUrl: "https://vue-library.coolify.orderstack.dev/",
        repoUrl: null,
        repoDisabledReason: "Private repository - code cannot be shared publicly.",
      },
    ],
  },

  skills: {
    summary:
      "Strong frontend fundamentals with practical full-stack experience — focused on component architecture, performance, and shipping reliable UI.",
    languages: ["HTML", "CSS", "SCSS", "JavaScript", "TypeScript"],
    frontend: [
      "React",
      "Redux",
      "Next.js",
      "Vue.js",
      "Vuex",
      "Pinia",
      "Nuxt.js",
      "Tailwind",
      "MobX",
    ],
    backend: ["Node.js", "Express", "REST APIs"],
    databases: ["MongoDB"],
    tools: ["Git", "GitHub"],
  },

  education: {
    summary:
      "Completed an intensive full‑stack program with real-world workflows and long-hour practice focused on fundamentals + delivery.",
    items: [
      {
        id: "edu-1",
        degree: "Full Stack Web Development",
        school: "Masai School, Bangalore",
        start: "04/2022",
        end: "10/2023",
        note: "12–15 hrs/day hands-on program: HTML, CSS, JavaScript, React, Redux, Node.js, Express, MongoDB, and team workflows.",
      },
      {
        id: "edu-0",
        degree: "12th Standard",
        school: "SIA ACADEMY, (SEWAD BARI)",
        start: "2018",
        end: "2019",
        note: "Higher secondary schooling focused on core analytical and problem-solving fundamentals.",
      },
    ],
  },

  certifications: {
    summary:
      "Certification aligned with practical full-stack development training and delivery discipline.",
    items: [
      {
        id: "cert-1",
        name: "Full Stack Web Development Program Certificate",
        issuer: "Masai School",
        year: "2023",
        link: masaiCertificate,
      },
    ],
  },

  contact: {
    summary:
      "Prefer email for opportunities and collaboration. If you’re hiring or building something ambitious, let’s talk.",
    formEndpoint: "https://api.web3forms.com/submit",
    formAccessKey: "",
    defaultSubject: "Portfolio inquiry",
    email: "gk072745@gmail.com",
    phone: "+91 9461686381",
    location: "Sikar, Rajasthan, India",
    note: "If the form doesn’t work on your device, please email me directly.",
    socials: {
      github: "https://github.com/gk072745",
      linkedin: "https://www.linkedin.com/in/gk072745/",
      twitter: "https://x.com/gk072745",
    },
  },
};
