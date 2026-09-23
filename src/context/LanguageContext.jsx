import { createContext, useEffect, useState } from "react";
import en from "../locales/en";
import es from "../locales/es";

// Context is shared by the browser and the build-time renderer.
// eslint-disable-next-line react-refresh/only-export-components
export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const savedLang = typeof window === "undefined" ? "es" : localStorage.getItem("lang") || "es";
  const [language, setLanguage] = useState(savedLang);

  const translations = language === "en" ? en : es;

  const toggleLanguage = () => {
    const newLang = language === "en" ? "es" : "en";
    setLanguage(newLang);
    localStorage.setItem("lang", newLang);
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ translations, toggleLanguage, language }}>
      {children}
    </LanguageContext.Provider>
  );
};
