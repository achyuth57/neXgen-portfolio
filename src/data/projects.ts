import type { Project } from "@/types";

/**
 * Featured work grounded in real professional experience.
 * Replace with named public projects / case studies when available.
 */
export const projects: Project[] = [
  {
    id: "react-spa-platform",
    title: "React SPA Platform Engineering",
    description:
      "Component-driven React single-page applications with routing, forms, and API integrations for production enterprise systems.",
    category: "Frontend Architecture",
    technologies: [
      "React",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "REST APIs",
      "Git",
    ],
    featured: true,
    problem:
      "Enterprise product teams needed maintainable SPA interfaces that met browser standards, integrated with backend services, and could evolve rapidly.",
    solution:
      "Built React-based SPA architectures using component composition, React Router, forms and events, and REST/SOAP integrations with disciplined Git workflows.",
    architecture:
      "React UI layer with routed SPA structure, reusable components, and service integrations for JSON data exchange.",
    challenges: [
      "Cross-browser UI consistency and optimization",
      "Structuring React components, forms, and routing for scale",
      "Integrating with SOAP and RESTful backends",
    ],
    outcome:
      "Delivered production React applications with cleaner SPA structure and reliable frontend–backend integration at Wipro.",
    githubUrl: "https://github.com/achyuth57",
  },
  {
    id: "angular-frontend-apps",
    title: "Angular Frontend Applications",
    description:
      "Responsive HTML5 applications and UI rebuilds using Angular, JavaScript, and modern frontend practices.",
    category: "Full-Stack",
    technologies: ["Angular", "JavaScript", "HTML5", "CSS3"],
    featured: true,
    problem:
      "Existing web experiences needed stronger interactivity, validation, and a rebuilt UI layer for better usability.",
    solution:
      "Implemented interactive Angular/JavaScript frontends with responsive layouts, client-side validation, and redesigned UI functionality.",
    architecture:
      "Angular-based frontend with HTML5/CSS3 presentation layer and JavaScript-driven interaction patterns.",
    challenges: [
      "Rebuilding UI while preserving application functionality",
      "Adding robust client-side validation",
      "Delivering responsive experiences across devices",
    ],
    outcome:
      "Shipped responsive frontend applications and UI rebuilds during tenure at Tech Mahindra.",
    githubUrl: "https://github.com/achyuth57",
  },
  {
    id: "fullstack-web-admin",
    title: "Full-Stack Web & Admin Systems",
    description:
      "End-to-end web applications with integrated UI components and PHP/MySQL admin panels.",
    category: "Full-Stack",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "jQuery",
      "Bootstrap",
      "PHP",
      "MySQL",
    ],
    featured: true,
    problem:
      "Clients needed complete web solutions spanning public-facing UI and administrative backends.",
    solution:
      "Developed integrated web applications combining Bootstrap UI components with PHP/MySQL-backed admin panels.",
    architecture:
      "Frontend UI layer with Bootstrap/jQuery, connected to PHP application logic and MySQL data storage.",
    challenges: [
      "Integrating UI components with backend workflows",
      "Building usable admin panel experiences",
      "Maintaining cohesive UX across public and admin surfaces",
    ],
    outcome:
      "Delivered full-stack web applications and admin systems at Erudite Web Solutions.",
    githubUrl: "https://github.com/achyuth57",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
