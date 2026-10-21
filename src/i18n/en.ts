import type { Dict } from './ru'

export const en: Dict = {
  meta: {
    title: 'Frontend Developer — Portfolio',
    description:
      'Personal portfolio of a frontend developer: UI, API integrations, debugging and shipping real features.',
  },

  nav: {
    brand: 'Frontend / Fullstack Developer',
    aria: 'Navigation',
    about: 'About',
    projects: 'Projects',
    skills: 'Skills',
    contact: 'Contact',
    top: 'Back to top',
  },

  switchers: {
    langAria: 'Site language',
    themeAria: 'Color theme',
    themeDefault: 'Default',
    themeWin98: 'Win98',
    themeAnime: 'Anime',
  },

  common: {
    close: 'Close',
    copy: 'Copy',
    write: 'Message',
    view: 'View',
  },

  carousel: {
    prev: 'Previous card',
    next: 'Next card',
  },

  flip: {
    aria: 'Flip the card',
    back: 'Back',
    hint: 'Click to flip',
  },

  hero: {
    aria: 'Introduction',
    kicker: 'Frontend / Fullstack Developer',
    title: 'A developer who takes tasks all the way to a working state',
    subtitle:
      'React / Vue / TypeScript / Next.js From the interface to the backend and API — I build the whole product and keep it stable in production',
    status: 'Open to work (full-time / freelance)',
    contact: 'Get in touch',
    viewProjects: 'View projects',
    photoAlt: 'Matvey Yumin',
    backName: 'Matvey Yumin — Fullstack Developer',
    backTitle: 'I can help with:',
    backList: [
      'Taking features all the way to production',
      'API integrations and a custom backend (Next.js, PostgreSQL)',
      'Fixing bugs and unstable behavior',
      'Frontend maintenance and performance work',
    ],
  },

  about: {
    eyebrow: 'About me',
    title: 'I write maintainable code — from the interface to the backend',
    desc: 'Focused on interfaces, stability and clear architecture.',
    paragraphs: [
      'I work from the interface through API integration to getting things production-ready. I don’t just write UI — I figure out how it behaves with real data and in different states.',
      'I have hands-on full-cycle experience: I designed and built my own service on Next.js with PostgreSQL/Prisma, including JWT authentication from scratch.',
      'At work I value predictability: types, a consistent style, small components and code that can be maintained with peace of mind.',
    ],
    stackAria: 'Stack',
  },

  experience: {
    eyebrow: 'Experience',
    title: 'I work on real products',
    desc: 'Commercial experience building web applications, online stores and personal projects.',
    carouselAria: 'Work experience',
    more: 'Details',
    items: {
      'gf-digital': {
        company: 'GF Digital',
        role: 'Frontend Developer',
        type: 'Web studio',
        description:
          'Architecture of a marketing website on React + TanStack Router: file-based routing, reusable layout components, custom scroll-reveal animations and 3D flip cards without third-party libraries.',
      },
      autorena: {
        company: 'Autorena',
        role: 'Frontend Developer',
        type: 'Product development',
        description:
          'Development of a product web application: 15+ screens from Figma, 15+ REST API integrations, Redux Toolkit + RTK Query — repeat requests reduced by ~30%.',
      },
      aquaopt: {
        company: 'AquaOpt',
        role: 'Frontend Developer / Support',
        type: 'E-commerce',
        description:
          'Diagnosing and fixing chronic site freezes (up to 45 s), a MySQL deadlock, a 3–4x TTFB reduction, CSRF attack protection and multi-layer security setup.',
      },
      projects: {
        company: 'Personal projects',
        role: 'Fullstack Developer',
        type: 'Practice',
        description:
          'DevSpace — a Next.js service with custom JWT authentication and no third-party providers; Users Dashboard — an admin panel on Vue 3 + Pinia for 2,500+ users.',
      },
    },
  },

  experienceModal: {
    about: 'About the project',
    tasks: 'Key responsibilities',
    projects: 'Key projects',
    tech: 'Technologies',
    items: {
      'gf-digital': {
        title: 'GF Digital',
        role: 'Frontend Developer',
        about:
          'A web studio. Development of a marketing showcase website: architecture on React + TanStack Router with file-based routing, reusable layout components and shared context at the root layout level.',
        tasks: [
          'Routing architecture on TanStack Router (createFileRoute)',
          'Custom scroll-reveal animations on IntersectionObserver without third-party libraries',
          '3D service flip cards and an accordion in pure CSS Grid',
          'Sticky navigation that highlights the active section automatically',
          'Working under TypeScript strict mode',
          'Git-flow with feature branches, Merge Requests in GitLab',
        ],
      },
      autorena: {
        title: 'Autorena',
        role: 'Frontend Developer',
        about:
          'Development and growth of an automotive product web application. Work on the user interface, API integration and evolution of existing functionality.',
        tasks: [
          'Building interfaces with React and TypeScript',
          'Integration of 15+ REST APIs',
          'Working with Redux Toolkit and RTK Query — repeat requests reduced by ~30%',
          'Render optimization (React.memo, useMemo, useCallback)',
          'Unit tests with Jest and React Testing Library',
          'Working with Docker and Git in a team',
        ],
      },
      aquaopt: {
        title: 'AquaOpt',
        role: 'Frontend Developer / Support',
        about:
          'A commercial online store on CS-Cart. Performance diagnostics, fixing database emergencies and attack protection on a live project with an undocumented legacy codebase.',
        tasks: [
          'Eliminating chronic site freezes (up to 45 s) — an independent investigation after unsuccessful external audits',
          'Diagnosing and fixing an InnoDB deadlock via SHOW ENGINE INNODB STATUS',
          'Reducing TTFB 3–4x (from 3.8 s to ~1 s)',
          'Protection from CSRF/spam attacks: captcha, rate limiting, Telegram alerts',
          'Working with ~140 undocumented third-party modules',
          'Bash scripts for performance monitoring and automation',
        ],
      },
      projects: {
        title: 'Personal projects',
        role: 'Fullstack Developer',
        about:
          'I keep developing practical skills through personal projects, test assignments and learning modern technologies.',
        tasks: [
          'DevSpace — a developer’s planner on Next.js with custom JWT authentication',
          'Users Dashboard',
          'React Review Form',
          'API Debug Panel',
          'Portfolio Website',
        ],
      },
    },
  },

  problems: {
    aria: 'What I can handle',
    eyebrow: 'How I help',
    title: 'I solve common product problems',
    desc: 'I help make the interface stable, clear to users and easy for a team to maintain.',
    items: [
      {
        title: 'UI that doesn’t break on real data',
        desc: 'Responsive layout, states, clean markup and predictable behavior on different screens.',
      },
      {
        title: 'APIs without chaos in the interface',
        desc: 'I connect data and handle errors, loading states and UI updates after user actions.',
      },
      {
        title: 'Fixes without new breakage',
        desc: 'I get to grips with existing code, fix bugs, refactor and bring features to a stable state.',
      },
    ],
  },

  projects: {
    eyebrow: 'Projects',
    title: 'Real tasks I have delivered',
    desc: 'Cases from product development: APIs, bugs, integrations and bringing features to a working state.',
    carouselAria: 'Projects',
    plansButton: 'View plans',
    newProjectsTag: 'New projects',
    items: {
      roadmap: {
        title: 'Roadmap',
        desc: 'The portfolio is regularly updated with new commercial and pet projects. See what I am working on now and what I plan to build next.',
        note: 'Click “View plans” to open the roadmap.',
      },
      devspace: {
        title: 'DevSpace',
        desc: 'A personal service for developers: a project library with progress tracking, tasks, calendar, analytics and a focus mode. Custom JWT authentication without third-party providers (Clerk/NextAuth).',
        note: 'A developer’s planner.',
      },
      users: {
        title: 'Users Dashboard',
        desc: 'An admin panel for managing a base of 2,500+ users: search, combined filtering, sorting and pagination with state synchronized between pages.',
        note: 'An assignment focused on architecture, typing and working with data.',
      },
      apidebug: {
        title: 'API debugging and stabilization',
        desc: 'An interactive panel for analyzing API requests: filtering by status, payload inspection, error handling and request retries.',
        note: 'A replica of a real task from product development',
      },
      review: {
        title: 'Review form with API',
        desc: 'Built a review form with an API: set up submission, error handling and UI updates. Fixed unstable behavior on failures and made the UI predictable in all states (loading / success / error).',
        note: 'Fixed request errors, implemented UI updates and eliminated state desync. Simplified version — the original is under NDA',
      },
      layout: {
        title: 'Layout from a design + API',
        desc: 'Built an interface from a design mockup and connected an API. Implemented loading, empty-data and error states, making the UI behave predictably across scenarios.',
        note: 'Implemented search, tabs and list state handling. Simplified version — the original is under NDA',
      },
      cscart: {
        title: 'Customizing an online store on CS-Cart',
        desc: 'A commercial project to develop an online store: admin panel improvements, work with user profile fields, Smarty templates, SQL queries and bug fixing.',
        note: 'A commercial project. Source code and demo are unavailable under NDA.',
      },
    },
  },

  roadmap: {
    title: 'Roadmap',
    description:
      'The portfolio is regularly updated with new commercial and pet projects.',
    doneTitle: 'Completed projects',
    done: ['Users Dashboard', 'React Review Form', 'API Debug Panel', 'Portfolio Website'],
    progressTitle: 'In progress',
    progress: [
      'Marketing website — GF Digital',
      'Commercial CS-Cart project',
      'DevSpace',
    ],
    plannedTitle: 'Planned',
    planned: ['CRM Dashboard', 'Chat with WebSocket', 'LegiCheck'],
    footer: 'The project list is updated regularly.',
  },

  skills: {
    eyebrow: 'Skills',
    title: 'Stack and practices',
    responsive: 'Responsive layout',
    a11y: 'Accessibility (a11y)',
  },

  contact: {
    eyebrow: 'Contact',
    title: 'Let’s discuss your project',
  },
}
