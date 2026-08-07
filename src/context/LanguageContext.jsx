import { createContext, useEffect, useState } from "react";
import en from "../locales/en";
import es from "../locales/es";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const savedLang = localStorage.getItem("lang") || "en";
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
