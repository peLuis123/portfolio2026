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
    title: "Experiencia Profesional",
    subtitle: "Mi recorrido en la industria tecnológica y los hitos más importantes.",

    jobs: [
      {
        date: "Nov 2025 — Jun 2026",
        role: "Desarrollador Backend",
        company: "Coral Finance (Panamá, Remoto)",
        bullets: [
          "Lideré la migración de FERN hacia Conduit y Rain en 5+ semanas, integrando APIs financieras desde cero y cumpliendo el plazo.",
          "Gestioné comunicación técnica directa con el equipo de Rain (en inglés), definiendo requisitos y coordinando integración end-to-end.",
          "Arquitecté servicios backend en Node.js y Express para operaciones USDT/USDC sobre Solana y Polygon (EVM).",
          "Desarrollé webhooks para eventos on-chain en tiempo real y mantuve infraestructura lean con Vercel y Supabase en equipo de 2-3 ingenieros."
        ]
      },
      {
        date: "Dic 2024 — Oct 2025",
        role: "Desarrollador Fullstack",
        company: "Flexbit (Panamá, Remoto)",
        bullets: [
          "Construí la pasarela de pagos cripto para Smart+ desde cero con Node.js y TronWeb, procesando entre 500 y 2,000 transacciones diarias en TRON y EVM.",
          "Fui el punto técnico principal con el cliente Smart+, coordinando requerimientos de integración de forma autónoma.",
          "Integré DIDIT KYC en onboarding, habilitando acceso compliant para más de 1,000 usuarios y reduciendo riesgo de fraude.",
          "Desplegué arquitectura serverless en AWS Lambda y S3, junto con entornos VPS con NGINX y PM2; desarrollé APIs con Node.js y NestJS."
        ]
      },
      {
        date: "May 2024 — Oct 2024",
        role: "Desarrollador Fullstack",
        company: "BTrazer (Panamá, Remoto)",
        bullets: [
          "Diseñé y entregué un dashboard administrativo desde cero en React.js para trazabilidad, visualización estadística y seguimiento de supply chain.",
          "Refactoricé el backend legado en Node.js/Express, pasando de trazabilidad básica a plataforma completa con autenticación, tablas de datos y analítica.",
          "Construí APIs REST con Express y MongoDB para cubrir el ciclo de vida de productos en un equipo lean de 2-3 ingenieros."
        ]
      },
      {
        date: "Ago 2023 — Ene 2024",
        role: "Desarrollador Fullstack",
        company: "Justo A Tiempo (España, Remoto)",
        bullets: [
          "Refactoricé una plataforma de logística en tiempo real para 150+ conductores y clientes finales, resolviendo bugs críticos de operaciones.",
          "Integré Stripe y PayPal para habilitar procesamiento de pagos online dentro de la plataforma.",
          "Desarrollé frontend con Vue.js 2 + Vuex y APIs REST con Node.js, Express y Firebase; desplegué y mantuve la solución en VPS."
        ]
      },
      {
        date: "Ene 2023 — Jul 2023",
        role: "Desarrollador Backend",
        company: "DevITM (México, Remoto)",
        bullets: [
          "Integré la pasarela Stripe en una plataforma e-commerce en producción, habilitando pagos online seguros.",
          "Construí APIs REST con Node.js y Express usando arquitectura modular, manejo centralizado de errores y documentación Swagger.",
          "Configuré y desplegué infraestructura backend en VPS CentOS con NGINX y PM2 en equipo de 4+ ingenieros."
        ]
      }
    ]
  },
  stack: {
    title: "Tecnologías y Experiencia",
    subtitle: "Stack principal con foco en arquitectura fullstack, fintech y Web3, más herramientas complementarias.",

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
        name: "DevOps e Infraestructura",
        items: [
          "Vercel",
          "AWS Lambda",
          "AWS S3",
          "Docker",
          "NGINX",
          "PM2",
          "Despliegue en VPS"
        ]
      },
      {
        name: "Blockchain y Web3",
        items: [
          "Solana",
          "Polygon",
          "TRON",
          "EVM",
          "USDT",
          "USDC",
          "Pasarelas de Pago Cripto",
          "KYC/KYB"
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
        title: "CryptoDash",
        imageUrl: "https://www.creativefabrica.com/wp-content/uploads/2021/02/01/Crypto-Logos-Graphics-8240065-1-1-580x387.jpg",
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
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png",
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
        imageUrl: "https://miro.medium.com/v2/resize:fit:1400/1*8Izu1dIH7uyCZJpYZPyj9g.jpeg",
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
        imageUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80",
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
