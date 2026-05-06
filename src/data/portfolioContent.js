/**
 * Central content blueprint for portfolio sections.
 * Replace dummy values with real profile/resume data later.
 */

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
      "Hands-on delivery across large production codebases and multiple client products — from building new UIs to stabilizing legacy systems and rolling out complex, stateful interfaces.",
    asideBody:
      "Comfortable owning frontend architecture, performance work, and cross-team integration (3D / backend / product) — with a bias for reusable components, clean state management, and maintainable code.",
    roles: [
      {
        id: "exp-1",
        company: "Altersquare",
        role: "Full Stack Developer",
        start: "2023",
        end: "Present",
        location: "India",
        points: [
          "Leading the frontend rewrite for Foyr Neo 3.0 to match current UX/performance standards and support faster iteration.",
          "Integrated AI-driven features into a legacy 3D SaaS platform while working around slow full-page reload dev constraints.",
          "Solely built the Nilaya Anthology (Asian Paints) e-commerce/discovery frontend: seller onboarding flows + product showcase experiences.",
          "Supported Beautiful Homes by Asian Paints with targeted bug fixes, UI stabilization, and critical production issue resolution.",
          "Built interactive room visualization + real-time cost estimation interfaces for eDesign (materials, kitchen items, switches, flooring, etc.).",
          "Contributed to BuildWise during internship/probation: shipped UI features and helped stabilize day-to-day product flows.",
        ],
        tech: [
          "Vue.js",
          "Pinia",
          "Vuex",
          "React",
          "Redux",
          "Next.js",
          "Nuxt.js",
          "MobX",
          "Git",
          "GitHub",
        ],
      },
    ],
  },

  projects: {
    summary:
      "A few high-signal builds and internal systems I’ve shipped — focused on UI reliability, performance, and real product outcomes.",
    items: [
      {
        id: "proj-1",
        title: "React UI Component Library",
        description:
          "A library of 30+ reusable UI components (inputs, dropdowns, loaders, progress indicators) built to standardize UX and speed up delivery.",
        impact:
          "Improved team efficiency by ~30% by reducing repeated UI work and enforcing consistency.",
        tags: ["React", "Vite", "Docusaurus", "MobX", "SCSS"],
        liveUrl: null,
        repoUrl: null,
        liveDisabledReason: "Demo link available on request.",
        repoDisabledReason: "Repository is private right now.",
      },
      {
        id: "proj-2",
        title: "Vue UI Component Library",
        description:
          "A reusable Vue-based component system and docs setup focused on consistency, quick onboarding, and scalable frontend delivery.",
        impact:
          "Standardized UI patterns for faster implementation and cleaner collaboration across projects.",
        tags: ["Vue.js", "Pinia", "VitePress", "SCSS", "Vite"],
        liveUrl: null,
        repoUrl: null,
        liveDisabledReason: "Demo link available on request.",
        repoDisabledReason: "Repository is private right now.",
      },
      {
        id: "proj-3",
        title: "Nilaya Anthology (Asian Paints)",
        description:
          "End-to-end frontend delivery for a premium wallcoverings brand experience: product discovery, showcase flows, and seller onboarding.",
        impact:
          "Owned the frontend architecture and component system to keep pages modular, fast, and maintainable.",
        tags: ["React", "JavaScript", "Tailwind"],
        liveUrl: "https://nilayaanthology.com/",
        repoUrl: null,
        repoDisabledReason: "Client project repository is private.",
      },
      {
        id: "proj-4",
        title: "Foyr Neo 3.0 (Frontend rewrite)",
        description:
          "Modernization of a large SaaS frontend for an AI-powered 3D interior design platform, including integration points with 3D and backend systems.",
        impact:
          "Reduced friction for feature development by moving toward a modern architecture and reusable UI patterns.",
        tags: ["React", "TypeScript", "Redux"],
        liveUrl: null,
        repoUrl: null,
        liveDisabledReason: "Public release link not shareable yet.",
        repoDisabledReason: "Client project repository is private.",
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
        id: "edu-0",
        degree: "12th Standard",
        school: "SIA ACADEMY, (SEWAD BARI)",
        start: "2018",
        end: "2019",
        note: "Higher secondary schooling focused on core analytical and problem-solving fundamentals.",
      },
      {
        id: "edu-1",
        degree: "Full Stack Web Development",
        school: "Masai School",
        start: "2022",
        end: "Oct 2023",
        note: "12–15 hrs/day hands-on program: HTML, CSS, JavaScript, React, Redux, Node.js, Express, MongoDB, and team workflows.",
      },
    ],
  },

  certifications: {
    summary:
      "Learning credentials and program certifications aligned with practical full-stack development work.",
    items: [
      {
        id: "cert-1",
        name: "Full Stack Web Development Program Certificate",
        issuer: "Masai School",
        year: "2023",
        link: null,
        linkDisabledReason: "Certificate link will be added soon.",
      },
      {
        id: "cert-2",
        name: "Frontend Foundations & Project Delivery",
        issuer: "Masai School",
        year: "2023",
        link: null,
        linkDisabledReason: "Certificate link will be added soon.",
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
