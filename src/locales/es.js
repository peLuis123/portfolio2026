import CryptoDashImage from "../assets/CryptoDash.jpg";
import CryptoShopImage from "../assets/CryptoShop.png";
import StripeImage from "../assets/Stripe.jpg";
import VideoGamesImage from "../assets/VideoGames.avif";
import PaymentEventsImage from "../assets/PaymentEvents.svg";

export default {
  nav: {
    experience: "Experiencia",
    stack: "Tecnologías",
    projects: "Proyectos",
    contact: "Contáctame",
  },
  hero: {
    hello: "Hola, soy",
    titleMain: "Desarrollador",
    titleAccent: "Fullstack",
    description:
      "Ayudo a startups y empresas a escalar productos digitales de alto impacto; hoy me especializo en Web3, fintech y pagos cripto, pero también construyo soluciones fullstack en distintos dominios.",
    viewWork: "Ver mi trabajo",
    resume: "Hoja de Vida.pdf",
    resumeUrl:
      "https://drive.google.com/file/d/1qElXiHPgeAXlPgDXhr_oEa8rYZ7S058I/view?usp=sharing",

    code: {
      role: "Desarrollador Fullstack",
      specialty1: "Web3",
      specialty2: "Fintech",
      specialty3: "Pagos Cripto",
      location: "Remoto",
    }
  },
  experience: {
  "title": "Experiencia Profesional",
  "subtitle": "Más de 3 años construyendo productos fullstack, APIs y sistemas de pagos para equipos remotos.",
  "jobs": [
    {
      "date": "Ago 2026 — Sept 2026",
      "role": "Desarrollador Fullstack",
      "company": "Lotifyx (Perú, Remoto)",
      "bullets": [
        "Refactoricé el dashboard multiusuario de un marketplace con tres roles y escalé el backend de aproximadamente 3 a más de 200 usuarios simultáneos sin caídas.",
        "Corregí una vulnerabilidad de inyección SQL mediante validación de entradas y patrones seguros de persistencia.",
        "Migré la persistencia a PostgreSQL con TypeORM e implementé funcionalidades de marketplace, subastas y suscripciones, con Cloudflare R2 para almacenar imágenes."
      ]
    },
    {
      "date": "Nov 2025 — Jun 2026",
      "role": "Desarrollador Backend",
      "company": "Coral Finance (Panamá, Remoto)",
      "bullets": [
        "Lideré la migración de emergencia de Fern a Conduit y Rain, integrando ambas APIs desde cero en cinco semanas y evitando interrupciones en los pagos.",
        "Desarrollé servicios Node.js, TypeScript y Express para pagos USDT/USDC, webhooks en tiempo real y monitoreo de balances con colas Redis.",
        "Coordiné requisitos e integración end-to-end con el equipo de ingeniería de Rain en inglés técnico.",
        "Desplegué el backend en Amazon EC2, Vercel y Supabase. Fue mi tercera colaboración consecutiva con el mismo fundador, después de BTRazer y Flexbit."
      ]
    },
    {
      "date": "Dic 2024 — Oct 2025",
      "role": "Desarrollador Fullstack · Enfoque Backend",
      "company": "Flexbit (Panamá, Remoto)",
      "bullets": [
        "Construí desde cero una pasarela de pagos cripto para Smart+ (México) con Node.js y TronWeb, procesando entre 500 y 2,000 transacciones diarias.",
        "Diseñé una arquitectura de cuatro microservicios independientes por dominio e integré DIDIT KYC para el onboarding de más de 1,000 usuarios.",
        "Desplegué y aseguré infraestructura en Amazon EC2 con NGINX, PM2, Certbot y firewalls.",
        "Segunda colaboración consecutiva con el fundador de BTRazer."
      ]
    },
    {
      "date": "May 2024 — Oct 2024",
      "role": "Desarrollador Fullstack",
      "company": "BTRazer (Panamá, Remoto)",
      "bullets": [
        "Transformé un backend de trazabilidad básica en una plataforma con autenticación, gestión de datos y analítica para clientes vitivinícolas.",
        "Diseñé la capa de datos y la lógica de negocio para preservar la trazabilidad de productos y dar visibilidad a la cadena de suministro.",
        "Desarrollé un panel de administración en React. El fundador volvió a contratarme para sus siguientes dos proyectos: Flexbit y Coral Finance."
      ]
    },
    {
      "date": "Jul 2023 — Oct 2025",
      "role": "Desarrollador Fullstack",
      "company": "Justo A Tiempo (España, Remoto)",
      "bullets": [
        "Rediseñé las notificaciones push para más de 150 repartidores con colas Redis, eliminando pérdidas de pedidos y reduciendo los tiempos de notificación.",
        "Implementé seguridad basada en roles e integración de Firebase para imágenes, resolviendo errores críticos de seguimiento logístico.",
        "Desarrollé interfaces con Vue.js 2 y Vuex e integré Stripe, PayPal, Sender y Twilio mediante APIs REST con Node.js y Express sobre VPS.",
        "Trabajé a tiempo completo y, desde mayo de 2024, compaginé el proyecto con mis roles en Panamá con acuerdo explícito entre ambas partes."
      ]
    },
    {
      "date": "Ene 2023 — Jul 2023",
      "role": "Desarrollador Backend",
      "company": "DevITM (México, Remoto)",
      "bullets": [
        "Integré Stripe y webhooks en una plataforma de logística bajo demanda para confirmar pagos de forma confiable y evitar estados inconsistentes.",
        "Desarrollé y documenté APIs REST con Node.js, Express y Swagger para facilitar integraciones de terceros.",
        "Comencé con un periodo de prácticas y continué como desarrollador backend."
      ]
    }
  ]
},
  stack: {
  "title": "Tecnologías y Experiencia",
  "subtitle": "Fullstack, pagos y Web3, con experiencia en AWS y arquitectura serverless basada en eventos aplicada en mi proyecto Payment Events.",
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
      "name": "Backend y Arquitectura",
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
      "name": "AWS y Cloud",
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
      "name": "Bases de Datos",
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
      "name": "DevOps y Herramientas",
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
      "name": "Pagos y Web3",
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
    title: "Proyectos Destacados",
    subtitle: "Aplicaciones reales enfocadas en producto, rendimiento y escalabilidad.",
    viewAll: "Ver todos los proyectos",
    viewAllUrl: "https://github.com/peLuis123",
    frontendLabel: "Frontend",
    backendLabel: "Backend",
    frontendDocsLabel: "Docs Frontend",
    backendDocsLabel: "Docs Backend",
    demoLabel: "Demo",
    items: [
      {
        title: "Payment Events",
        backendUrl: "https://github.com/peLuis123/payment-events-microservices",
        imageUrl: PaymentEventsImage,
        description: "Backend de pagos y e-commerce con cuatro microservicios Node.js en AWS Lambda. Procesamiento asíncrono con SQS y SNS, persistencia en DynamoDB e integración de Stripe y PayPal con webhooks, idempotencia y reembolsos.",
        imageAlt: "Payment Events: backend serverless con AWS Lambda, SQS, SNS y DynamoDB",
        tags: ["Backend", "AWS", "Serverless"],
        showFullDescription: true,
      },
      {
        title: "CryptoDash",
        imageUrl: CryptoDashImage,
        description:
          "Dashboard cripto frontend con datos en tiempo real de CoinGecko, gestión de portafolio, gráficos interactivos y soporte bilingüe. Desplegado en producción: ver enlace abajo.",
        imageAlt: "Dashboard de CryptoDash con métricas y gráficos de criptomonedas",
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
          "E-commerce cripto fullstack con pagos en TRX: frontend con panel cliente/admin y backend con JWT, órdenes, confirmación on-chain y Socket.io.",
        imageAlt: "Interfaz de tienda cripto con panel de administración y flujo de pagos",
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
          "API backend modular para clientes, tarjetas, pagos, reembolsos y webhooks de Stripe, con manejo de errores centralizado y Swagger.",
        imageAlt: "API de pagos Stripe con arquitectura modular y documentación",
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
          "Plataforma de compra y venta de videojuegos con catálogo, biblioteca de usuario, suscripciones y pagos, integrada con su backend dedicado.",
        imageAlt: "Plataforma de videojuegos con catálogo y biblioteca personal",
        tags: ["Fullstack", "Gaming"],
        frontendUrl: "https://github.com/peLuis123/videogames",
        backendUrl: "https://github.com/peLuis123/albun-backend",
        backendDocsUrl: "https://peluis123-albun-backend.mintlify.app/introduction",
        demoUrl: "#"
      }
    ]
  },
  contact: {
    title: "Contáctame",
    subtitle: "¿Tienes un proyecto en mente o solo quieres saludar? Me encantaría conversar contigo.",

    infoTitle: "Información de Contacto",
    infoText:
      "Actualmente estoy abierto a nuevas oportunidades y colaboraciones. Escríbeme y construyamos algo increíble.",

    emailLabel: "ESCRÍBEME",
    email: "pedrorc2018@gmail.com",

    locationLabel: "UBICACIÓN",
    location: "Remoto | Abierto a oportunidades globales",

    socialTitle: "Redes Sociales",

    form: {
      name: "Tu Nombre",
      email: "Correo Electrónico",
      message: "Mensaje",
      namePlaceholder: "Tu nombre",
      emailPlaceholder: "tu@email.com",
      messagePlaceholder: "Cuéntame sobre tu proyecto...",
      submit: "Enviar Mensaje",
      sending: "Enviando...",
      success: "Mensaje enviado correctamente. Te responderé pronto.",
      error: "No se pudo enviar el mensaje. Intenta nuevamente."
    }
  },
  footer: {
    built: "Construido con Tailwind CSS y pasión por LuisDev.",
    links: {
      experience: "Experiencia",
      stack: "Tecnologías",
      projects: "Proyectos"
    }
  }





};
