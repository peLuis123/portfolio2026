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
      "Construyo soluciones digitales escalables con enfoque en backends de alto rendimiento e interfaces modernas e intuitivas.",
    viewWork: "Ver mi trabajo",
    resume: "Currículum.pdf",

    code: {
      role: "Ingeniero Fullstack",
      specialty1: "Escalabilidad",
      specialty2: "UI/UX",
      location: "Remoto",
    }
  },
  experience: {
    title: "Experiencia Profesional",
    subtitle: "Mi recorrido en la industria tecnológica y los hitos más importantes.",

    jobs: [
      {
        date: "Ene 2023 — Abr 2023",
        role: "Practicante Backend",
        company: "DevITM (México)",
        bullets: [
          "Desarrollé APIs REST con integración de pagos Stripe usando Node.js y Express.",
          "Documenté APIs con Swagger y reforcé fundamentos de arquitectura backend."
        ]
      },
      {
        date: "Abr 2023 — Jul 2023",
        role: "Desarrollador Backend",
        company: "DevITM (México)",
        bullets: [
          "Configuré servidores VPS (CentOS) y desplegué backend con NGINX + PM2.",
          "Integré pasarela de pagos Stripe en sistema de delivery en producción."
        ]
      },
      {
        date: "Ago 2023 — Ene 2024",
        role: "Desarrollador Fullstack",
        company: "Justo A Tiempo (España)",
        bullets: [
          "Desarrollé sistema de logística en tiempo real.",
          "Frontend: Vue.js 2 + Vuex | Backend: Node.js + Express.",
          "Gestión de Firebase y despliegues en VPS."
        ]
      },
      {
        date: "May 2024 — Sep 2024",
        role: "Desarrollador Fullstack (Medio Tiempo)",
        company: "BTrazer (Panamá)",
        bullets: [
          "Construí plataforma de reportes con React y Express.",
          "Mantenimiento y optimización de sistemas en producción."
        ]
      },
      {
        date: "Oct 2024 — Dic 2024",
        role: "Desarrollador Fullstack (Freelance)",
        company: "Plataforma de Ciberseguridad",
        bullets: [
          "Desarrollé plataforma de ciberseguridad (Vue 3 + Pinia, Express + MongoDB).",
          "Diseñé flujos backend escalables integrando servicios externos.",
          "Desarrollé backend para sistema de rastreo de dispositivos móviles."
        ]
      },
      {
        date: "Dic 2024 — Oct 2025",
        role: "Desarrollador Fullstack",
        company: "Flexbit (Plataforma Cripto)",
        bullets: [
          "Desarrollé sistemas backend basados en blockchain.",
          "Construí pasarela de pago cripto desde cero para Smart+ (México).",
          "Integré sistema de verificación de identidad DIDIT.",
          "Implementé flujos seguros de transacciones blockchain."
        ]
      },
      {
        date: "Oct 2025 — Actualidad",
        role: "Desarrollador Fullstack",
        company: "Coral Finance (Plataforma Cripto & Dinero Tradicional)",
        bullets: [
          "Desarrollé sistemas de transacciones cripto ↔ dinero tradicional.",
          "Integré infraestructura financiera: FERN, Conduit y Rain.",
          "Implementé flujos KYC y KYB.",
          "Desarrollé APIs backend seguras para operaciones financieras."
        ]
      }
    ]
  },
  stack: {
    title: "Tecnologías y Experiencia",
    subtitle: "Herramientas y tecnologías que utilizo para construir sistemas escalables.",

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
          "Integración Blockchain",
          "Flujos KYC / KYB",
          "FERN API",
          "Conduit API",
          "Rain API",
          "DIDIT"
        ]
      },
      {
        name: "DevOps e Infraestructura",
        items: [
          "Docker",
          "AWS",
          "NGINX",
          "PM2",
          "Despliegue en VPS",
          "Firebase",
          "GitHub Actions",
          "Pipelines CI/CD"
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
    location: "Arequipa, Perú (Remoto)",

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
