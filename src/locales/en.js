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
    resume: "Curriculum.pdf",
    resumeUrl:
      "https://drive.google.com/file/d/1lGR0RenuhigHwoDoinKAQ7Anwa0Y6USd/view?usp=sharing",

    code: {
      role: "Fullstack developer",
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
  projects: {
    title: "Featured Projects",
    subtitle: "Real-world applications focused on product quality, performance and scalability.",
    viewAll: "View all projects",
    viewAllUrl: "https://github.com/peLuis123",
    frontendLabel: "Frontend",
    backendLabel: "Backend",
    frontendDocsLabel: "Frontend Docs",
    backendDocsLabel: "Backend Docs",
    demoLabel: "Demo",
    items: [
      {
        title: "CryptoDash",
        imageUrl: "https://www.creativefabrica.com/wp-content/uploads/2021/02/01/Crypto-Logos-Graphics-8240065-1-1-580x387.jpg",
        description:
          "Frontend crypto dashboard with real-time CoinGecko data, portfolio management, interactive charts, bilingual support. Production deployed: see link below.",
        imageAlt: "CryptoDash dashboard with cryptocurrency metrics and charts",
        tags: ["Frontend", "Crypto"],
        frontendUrl: "https://github.com/peLuis123/cryptodash",
        frontendDocsUrl: "https://peluis123-cryptodash.mintlify.app/",
        backendUrl: "#",
        demoUrl: "https://drive.google.com/file/d/16CMr6bE1UkZ6aC2UllK3Y5YesHRiFUyp/view?usp=drive_link",
        productionUrl: "https://crypto-dashx.netlify.app/"
      },
      {
        title: "CryptoShop",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png",
        description:
          "Fullstack crypto e-commerce with TRX payments: frontend with client/admin panels and backend with JWT, orders, on-chain confirmation, and Socket.io.",
        imageAlt: "Crypto shop interface with admin panel and payment flow",
        tags: ["Fullstack", "TRX"],
        frontendUrl: "https://github.com/peLuis123/crypto-shop-frontend",
        backendUrl: "https://github.com/peLuis123/crypto-shop-backend",
        frontendDocsUrl: "https://peluis123-crypto-shop-frontend.mintlify.app/introduction",
        backendDocsUrl: "https://peluis123-crypto-shop-backend-30.mintlify.app/introduction",
        demoUrl: "https://drive.google.com/file/d/18ktZ2Pm8QbadIrVFiQN-wAr-Vg8Ox6r3/view?usp=drive_link"
      },
      {
        title: "Stripe Payments API",
        imageUrl: "https://miro.medium.com/v2/resize:fit:1400/1*8Izu1dIH7uyCZJpYZPyj9g.jpeg",
        description:
          "Modular backend API for customers, cards, payments, refunds, and Stripe webhooks with centralized error handling and Swagger docs.",
        imageAlt: "Stripe payments API with modular architecture and documentation",
        tags: ["Backend", "Stripe"],
        frontendUrl: "#",
        backendUrl: "https://github.com/peLuis123/Stripe_Back",
        backendDocsUrl: "https://peluis123-stripe_back.mintlify.app/",
        demoUrl: "https://drive.google.com/file/d/1JQcI4XQjLq5J7WLIwTStIVUmhA2fM0GT/view?usp=drive_link",
        productionUrl: "https://api-stripe.onrender.com/doc/"
      },
      {
        title: "VideoGames Platform",
        imageUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80",
        description:
          "Game buying and selling platform with catalog, user library, subscriptions, and payment methods, integrated with a dedicated backend.",
        imageAlt: "Video games platform with catalog and personal library",
        tags: ["Fullstack", "Gaming"],
        frontendUrl: "https://github.com/peLuis123/videogames",
        backendUrl: "https://github.com/peLuis123/albun-backend",
        backendDocsUrl: "https://peluis123-albun-backend.mintlify.app/introduction",
        demoUrl: "#"
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
      submit: "Send Message",
      sending: "Sending...",
      success: "Message sent successfully. I'll get back to you soon.",
      error: "Message could not be sent. Please try again."
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
