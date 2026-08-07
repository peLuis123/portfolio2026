import { useContext, useEffect } from "react";
import { LanguageContext } from "../context/LanguageContext";

const SITE_URL = "https://luisdev21.netlify.app";

const SEO_CONTENT = {
  es: {
    title: "LuisDev | Desarrollador Fullstack",
    description:
      "Portfolio de LuisDev, desarrollador fullstack especializado en Web3, fintech y pagos cripto. Proyectos reales, experiencia profesional y contacto directo.",
    ogLocale: "es_ES",
  },
  en: {
    title: "LuisDev | Fullstack Developer",
    description:
      "Portfolio of LuisDev, a fullstack developer specialized in Web3, fintech, and crypto payments. Real-world projects, experience, and direct contact.",
    ogLocale: "en_US",
  },
};

function updateMetaByName(name, content) {
  const el = document.querySelector(`meta[name=\"${name}\"]`);
  if (el) {
    el.setAttribute("content", content);
  }
}

function updateMetaByProperty(property, content) {
  const el = document.querySelector(`meta[property=\"${property}\"]`);
  if (el) {
    el.setAttribute("content", content);
  }
}

function Seo() {
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    const current = SEO_CONTENT[language] || SEO_CONTENT.es;
    const currentPath = window.location.pathname === "/" ? "" : window.location.pathname;
    const absoluteUrl = `${SITE_URL}${currentPath}`;

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