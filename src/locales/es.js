export default {
  nav: {
    experience: "Experiencia",
    stack: "Tecnologías",
    projects: "Proyectos",
    contact: "Contáctame",
  },
  hero: {
    hello: "Hola, soy",
    titleMain: "Arquitecto",
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
      submit: "Enviar Mensaje"
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
