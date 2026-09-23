import { useContext, useEffect } from "react";
import { LanguageContext } from "../context/LanguageContext";

const SITE_URL = "https://luisdev21.netlify.app";

const SEO_CONTENT = {
  es: {
    title: "Pedro Ramos | Desarrollador Fullstack · Node.js y AWS",
    description:
      "Pedro Luis Ramos Calla, desarrollador fullstack en Perú con más de 3 años de experiencia en Node.js, React, AWS, fintech y Web3. Disponible para trabajo remoto.",
    ogLocale: "es_PE",
  },
  en: {
    title: "Pedro Ramos | Fullstack Developer · Node.js & AWS",
    description:
      "Pedro Luis Ramos Calla, fullstack developer in Peru with 3+ years of experience in Node.js, React, AWS, fintech, and Web3. Available for remote work.",
    ogLocale: "en_US",
  },
};

function updateMetaByName(name, content) {
  const el = document.querySelector(`meta[name="${name}"]`);
  if (el) {
    el.setAttribute("content", content);
  }
}

function updateMetaByProperty(property, content) {
  const el = document.querySelector(`meta[property="${property}"]`);
  if (el) {
    el.setAttribute("content", content);
  }
}

function Seo() {
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    const current = SEO_CONTENT[language] || SEO_CONTENT.es;
    const absoluteUrl = `${SITE_URL}/`;

    document.title = current.title;

    updateMetaByName("description", current.description);
    updateMetaByName("twitter:title", current.title);
    updateMetaByName("twitter:description", current.description);

    updateMetaByProperty("og:title", current.title);
    updateMetaByProperty("og:description", current.description);
    updateMetaByProperty("og:locale", current.ogLocale);
    updateMetaByProperty("og:url", absoluteUrl);

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute("href", absoluteUrl);
    }
  }, [language]);

  return null;
}

export default Seo;