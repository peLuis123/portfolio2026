import CryptoDashImage from "../assets/CryptoDash.jpg";
import CryptoShopImage from "../assets/CryptoShop.png";
import StripeImage from "../assets/Stripe.jpg";
import VideoGamesImage from "../assets/VideoGames.avif";

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
      "I help startups and companies scale high-impact digital products; while I currently specialize in Web3, fintech, and crypto payments, I also build fullstack solutions across multiple domains.",
    viewWork: "View My Work",
    resume: "Curriculum.pdf",
    resumeUrl:
      "https://drive.google.com/file/d/1lGR0RenuhigHwoDoinKAQ7Anwa0Y6USd/view?usp=sharing",

    code: {
      role: "Fullstack developer",
      specialty1: "Web3",
      specialty2: "Fintech",
      specialty3: "Crypto Payments",
      location: "Remote",
    }
  },
  experience: {
    title: "Professional Experience",
    subtitle: "My journey through the tech industry and key milestones.",

    jobs: [
      {
        date: "Nov 2025 — Jun 2026",
        role: "Backend Developer",
        company: "Coral Finance (Panama, Remote)",
        bullets: [
          "Led an emergency migration from deprecated FERN to Conduit and Rain APIs over 5+ weeks, integrating financial APIs from scratch within deadline.",
          "Owned direct technical communication with Rain engineering (in English), clarifying requirements and coordinating end-to-end integration.",
          "Architected Node.js and Express backend services for USDT/USDC operations across Solana and Polygon (EVM).",
          "Engineered webhook systems for real-time on-chain events and maintained lean infrastructure on Vercel and Supabase in a 2-3 engineer team."
        ]
      },
      {
        date: "Dec 2024 — Oct 2025",
        role: "Fullstack Developer",
        company: "Flexbit (Panama, Remote)",
        bullets: [
          "Built Smart+ crypto payment gateway from scratch using Node.js and TronWeb, processing 500-2,000 daily transactions across TRON and EVM networks.",
          "Served as the primary technical point of contact for Smart+, coordinating integration requirements independently.",
          "Integrated DIDIT KYC into onboarding, enabling compliant access for 1,000+ users while reducing fraud registration risk.",
          "Deployed serverless infrastructure on AWS Lambda and S3, alongside VPS environments with NGINX and PM2; built APIs with Node.js and NestJS."
        ]
      },
      {
        date: "May 2024 — Oct 2024",
        role: "Fullstack Developer",
        company: "BTrazer (Panama, Remote)",
        bullets: [
          "Architected and shipped an admin dashboard from scratch in React.js for product traceability, statistics visualization, and supply chain tracking.",
          "Refactored a legacy Node.js/Express backend into a full platform with auth middleware, data tables, and analytics endpoints.",
          "Built RESTful APIs with Express and MongoDB to support end-to-end product lifecycle tracking in a lean 2-3 engineer team."
        ]
      },
      {
        date: "Aug 2023 — Jan 2024",
        role: "Fullstack Developer",
        company: "Justo A Tiempo (Spain, Remote)",
        bullets: [
          "Refactored a real-time logistics platform serving 150+ drivers and end customers, resolving critical bugs affecting operational reliability.",
          "Integrated Stripe and PayPal into the logistics platform to support online payment processing.",
          "Built frontend with Vue.js 2 + Vuex and RESTful APIs with Node.js, Express, and Firebase; deployed and maintained on VPS infrastructure."
        ]
      },
      {
        date: "Jan 2023 — Jul 2023",
        role: "Backend Developer",
        company: "DevITM (Mexico, Remote)",
        bullets: [
          "Integrated Stripe payment gateway into a production e-commerce platform, enabling secure online transactions.",
          "Built RESTful APIs with Node.js and Express using modular architecture, centralized error handling, and complete Swagger documentation.",
          "Configured and deployed backend infrastructure on CentOS VPS with NGINX and PM2 in a 4+ engineer team."
        ]
      }
    ]
  },
  stack: {
    title: "Technical Expertise",
    subtitle: "Core stack focused on fullstack architecture, fintech, and Web3, plus complementary tools.",

    categories: [
      {
        name: "Frontend",
        items: [
          "React",
          "Vue.js",
          "TypeScript",
          "Vite",
          "Tailwind CSS"
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
          "JWT",
          "Webhooks",
          "Socket.io"
        ]
      },
      {
        name: "DevOps & Infrastructure",
        items: [
          "Vercel",
          "AWS Lambda",
          "AWS S3",
          "Docker",
          "NGINX",
          "PM2",
          "VPS Deployment"
        ]
      },
      {
        name: "Blockchain & Web3",
        items: [
          "Solana",
          "Polygon",
          "TRON",
          "EVM",
          "USDT",
          "USDC",
          "Crypto Payment Gateways",
          "KYC/KYB"
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
        imageUrl: CryptoDashImage,
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
        imageUrl: CryptoShopImage,
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
        imageUrl: StripeImage,
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
        imageUrl: VideoGamesImage,
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
    location: "Remote | Open to Worldwide Opportunities",

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
