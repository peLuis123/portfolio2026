export default {
  nav: {
    experience: "Experience",
    stack: "Stack",
    projects: "Projects",
    contact: "Contact Me",
  },
  hero: {
    hello: "Hello, I'm a",
    titleMain: "Fullstack",
    titleAccent: "Developer",
    description:
      "I build scalable digital solutions with a focus on high-performance backends and intuitive, modern user interfaces.",
    viewWork: "View My Work",
    resume: "Resume.pdf",

    code: {
      role: "Fullstack Engineer",
      specialty1: "Scalability",
      specialty2: "UI/UX",
      location: "Remote",
    }
  },
  experience: {
    title: "Professional Experience",
    subtitle: "My journey through the tech industry and key milestones.",

    jobs: [
      {
        date: "Jan 2023 — Apr 2023",
        role: "Backend Developer Intern",
        company: "DevITM (Mexico)",
        bullets: [
          "Developed REST APIs with Stripe payment integration using Node.js and Express.",
          "Documented APIs using Swagger and improved backend architecture fundamentals."
        ]
      },
      {
        date: "Apr 2023 — Jul 2023",
        role: "Backend Developer",
        company: "DevITM (Mexico)",
        bullets: [
          "Configured VPS servers (CentOS) and deployed backend using NGINX + PM2.",
          "Integrated Stripe payment gateway into production delivery system."
        ]
      },
      {
        date: "Aug 2023 — Jan 2024",
        role: "Fullstack Developer",
        company: "Justo A Tiempo (Spain)",
        bullets: [
          "Built real-time logistics tracking system.",
          "Frontend: Vue.js 2 + Vuex | Backend: Node.js + Express.",
          "Managed Firebase and VPS deployments."
        ]
      },
      {
        date: "May 2024 — Sep 2024",
        role: "Fullstack Developer (Part-Time)",
        company: "BTrazer (Panama)",
        bullets: [
          "Built reporting platform using React and Express.",
          "Maintained and optimized production systems."
        ]
      },
      {
        date: "Oct 2024 — Dec 2024",
        role: "Fullstack Developer (Freelance)",
        company: "Cybersecurity Platform",
        bullets: [
          "Developed cybersecurity platform (Vue 3 + Pinia, Express + MongoDB).",
          "Designed scalable backend flows integrating external services.",
          "Built backend for mobile device tracking system."
        ]
      },
      {
        date: "Dec 2024 — Oct 2025",
        role: "Fullstack Developer",
        company: "Flexbit (Cryptocurrency Platform)",
        bullets: [
          "Developed blockchain-based backend systems.",
          "Built crypto payment gateway from scratch for Smart+ (Mexico).",
          "Integrated DIDIT identity verification system.",
          "Worked on secure blockchain transaction flows."
        ]
      },
      {
        date: "Oct 2025 — Present",
        role: "Fullstack Developer",
        company: "Coral Finance (Crypto & Fiat Platform)",
        bullets: [
          "Developed crypto ↔ fiat transaction systems.",
          "Integrated financial infrastructure platforms: FERN, Conduit and Rain.",
          "Implemented KYC and KYB verification flows.",
          "Built secure backend APIs for financial transactions."
        ]
      }
    ]
  },
  stack: {
    title: "Technical Expertise",
    subtitle: "The tools and technologies I use to build scalable systems.",

    categories: [
      {
        name: "Frontend",
        items: [
          "React",
          "Next.js",
          "Vue 3",
          "Pinia",
          "TypeScript",
          "Tailwind CSS",

        ]
      },
      {
        name: "Backend",
        items: [
          "Node.js",
          "Express",
          "NestJS",
          "MongoDB",
          "PostgreSQL",
          "Redis",
          "Stripe API",
          "Blockchain Integration",
          "KYC / KYB Flows",
          "FERN API",
          "Conduit API",
          "Rain API",
          "DIDIT"
        ]
      },
      {
        name: "DevOps & Infrastructure",
        items: [
          "Docker",
          "AWS",
          "NGINX",
          "PM2",
          "VPS Deployment",
          "Firebase",
          "GitHub Actions",
          "CI/CD Pipelines"
        ]
      }
    ]
  },
  contact: {
    title: "Get In Touch",
    subtitle: "Have a project in mind or just want to say hi? I'd love to hear from you.",

    infoTitle: "Contact Information",
    infoText:
      "I am currently open to new opportunities and collaborations. Reach out and let's build something impactful.",

    emailLabel: "EMAIL ME",
    email: "pedrorc2018@gmail.com",

    locationLabel: "LOCATION",
    location: "Arequipa, Peru (Remote)",

    socialTitle: "Social Connect",

    form: {
      name: "Your Name",
      email: "Email Address",
      message: "Message",
      namePlaceholder: "Your name",
      emailPlaceholder: "your@email.com",
      messagePlaceholder: "Tell me about your project...",
      submit: "Send Message"
    }
  },
  footer: {
    built: "Built with Tailwind CSS and Passion by LuisDev.",
    links: {
      experience: "Experience",
      stack: "Stack",
      projects: "Projects"
    }
  }




};
