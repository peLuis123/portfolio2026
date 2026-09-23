import CryptoDashImage from "../assets/CryptoDash.jpg";
import CryptoShopImage from "../assets/CryptoShop.png";
import StripeImage from "../assets/Stripe.jpg";
import VideoGamesImage from "../assets/VideoGames.avif";
import PaymentEventsImage from "../assets/PaymentEvents.svg";

export default {
  nav: {
    experience: "Experience",
    stack: "Stack",
    projects: "Projects",
    contact: "Contact Me",
  },
  hero: {
    hello: "Hi, I'm Pedro Luis Ramos Calla",
    titleMain: "Fullstack",
    titleAccent: "Developer",
    description:
      "Fullstack developer in Arequipa, Peru, with 3+ years of experience in Node.js, TypeScript, React, and Vue. I build APIs, fintech and Web3 payment systems, and AWS serverless solutions for remote teams.",
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
  "title": "Professional Experience",
  "subtitle": "Over 3 years building fullstack products, APIs, and payment systems for remote teams.",
  "jobs": [
    {
      "date": "Aug 2026 — Sep 2026",
      "role": "Fullstack Developer",
      "company": "Lotifyx (Peru, Remote)",
      "bullets": [
        "Refactored a marketplace dashboard with three user roles and scaled the backend from approximately 3 to over 200 concurrent users without crashes.",
        "Fixed an SQL injection vulnerability through input validation and safe persistence patterns.",
        "Migrated persistence to PostgreSQL with TypeORM and implemented marketplace, auction, and subscription features, using Cloudflare R2 for image storage."
      ]
    },
    {
      "date": "Nov 2025 — Jun 2026",
      "role": "Backend Developer",
      "company": "Coral Finance (Panama, Remote)",
      "bullets": [
        "Led an emergency migration from Fern to Conduit and Rain, integrating both APIs from scratch in five weeks while avoiding payment interruptions.",
        "Built Node.js, TypeScript, and Express services for USDT/USDC payments, real-time webhooks, and balance monitoring with Redis queues.",
        "Coordinated requirements and end-to-end integration with Rain's engineering team in technical English.",
        "Deployed the backend on Amazon EC2, Vercel, and Supabase. This was my third consecutive collaboration with the same founder, after BTRazer and Flexbit."
      ]
    },
    {
      "date": "Dec 2024 — Oct 2025",
      "role": "Fullstack Developer · Backend Focus",
      "company": "Flexbit (Panama, Remote)",
      "bullets": [
        "Built a crypto payment gateway from scratch for Smart+ (Mexico) with Node.js and TronWeb, processing 500–2,000 daily transactions.",
        "Designed four independent domain-based microservices and integrated DIDIT KYC to onboard over 1,000 users.",
        "Deployed and secured infrastructure on Amazon EC2 with NGINX, PM2, Certbot, and firewalls.",
        "Second consecutive collaboration with BTRazer's founder."
      ]
    },
    {
      "date": "May 2024 — Oct 2024",
      "role": "Fullstack Developer",
      "company": "BTRazer (Panama, Remote)",
      "bullets": [
        "Transformed a basic traceability backend into a platform with authentication, data management, and analytics for wine industry clients.",
        "Designed the data layer and business logic to preserve product traceability and provide supply chain visibility.",
        "Built a React admin dashboard. The founder hired me again for the next two ventures: Flexbit and Coral Finance."
      ]
    },
    {
      "date": "Jul 2023 — Oct 2025",
      "role": "Fullstack Developer",
      "company": "Justo A Tiempo (Spain, Remote)",
      "bullets": [
        "Redesigned push notifications for over 150 delivery drivers with Redis queues, eliminating lost orders and reducing notification delays.",
        "Implemented role-based security and Firebase image integration, resolving critical logistics tracking errors.",
        "Built interfaces with Vue.js 2 and Vuex and integrated Stripe, PayPal, Sender, and Twilio through Node.js and Express REST APIs hosted on a VPS.",
        "Worked full time and, from May 2024, combined this project with my roles in Panama with explicit agreement from both parties."
      ]
    },
    {
      "date": "Jan 2023 — Jul 2023",
      "role": "Backend Developer",
      "company": "DevITM (Mexico, Remote)",
      "bullets": [
        "Integrated Stripe and webhooks into an on-demand logistics platform to confirm payments reliably and prevent inconsistent states.",
        "Built and documented REST APIs with Node.js, Express, and Swagger to support third-party integrations.",
        "Started with an internship and continued as a backend developer."
      ]
    }
  ]
},
  stack: {
  "title": "Technical Expertise",
  "subtitle": "Fullstack, payments, and Web3, with AWS and event-driven serverless experience applied in my Payment Events project.",
  "categories": [
    {
      "id": "frontend",
      "name": "Frontend",
      "items": [
        "React.js",
        "Vue.js 2/3",
        "Vuex",
        "TypeScript",
        "Tailwind CSS",
        "Material UI",
        "Vuetify",
        "Vite"
      ]
    },
    {
      "id": "backend",
      "name": "Backend & Architecture",
      "items": [
        "Node.js",
        "Express.js",
        "NestJS",
        "TypeScript",
        "REST APIs",
        "Microservices",
        "Webhooks",
        "JWT",
        "Socket.io",
        "Jest"
      ]
    },
    {
      "id": "cloud",
      "name": "AWS & Cloud",
      "items": [
        "AWS Lambda",
        "Lambda Function URLs",
        "Amazon SQS",
        "Amazon SNS",
        "DynamoDB",
        "IAM",
        "CloudWatch",
        "Serverless Framework",
        "Amazon EC2"
      ]
    },
    {
      "id": "database",
      "name": "Databases",
      "items": [
        "PostgreSQL",
        "MySQL",
        "MongoDB",
        "Redis",
        "TypeORM",
        "Supabase",
        "Firebase"
      ]
    },
    {
      "id": "devops",
      "name": "DevOps & Tools",
      "items": [
        "GitHub Actions (CI/CD)",
        "Vercel",
        "NGINX",
        "PM2",
        "Certbot",
        "VPS",
        "Cloudflare R2",
        "Swagger"
      ]
    },
    {
      "id": "payments",
      "name": "Payments & Web3",
      "items": [
        "Stripe",
        "PayPal",
        "Conduit",
        "Rain API",
        "DIDIT KYC",
        "Web3.js",
        "Ethers.js",
        "TronWeb",
        "Solana",
        "Polygon",
        "TRON",
        "EVM",
        "USDT",
        "USDC"
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
        title: "Payment Events",
        backendUrl: "https://github.com/peLuis123/payment-events-microservices",
        imageUrl: PaymentEventsImage,
        description: "Payments and e-commerce backend with four Node.js microservices on AWS Lambda. Asynchronous processing with SQS and SNS, DynamoDB persistence, and Stripe and PayPal integration with webhooks, idempotency, and refunds.",
        imageAlt: "Payment Events: serverless backend with AWS Lambda, SQS, SNS, and DynamoDB",
        tags: ["Backend", "AWS", "Serverless"],
        showFullDescription: true,
      },
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
