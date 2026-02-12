import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import ThemeContext from "../context/ThemeContext";

function Navbar () {
  const { translations, toggleLanguage, language } = useContext(LanguageContext);
  const { theme, toggleTheme } = useContext(ThemeContext);


  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <h1 className="font-bold text-xl">JohnDev</h1>
        <div className="flex gap-6 items-center">
          <a href="#experience">{translations.nav.experience}</a>
          <a href="#stack">{translations.nav.stack}</a>
          <a href="#projects">{translations.nav.projects}</a>

          {/* Switch idioma */}
          <button
            onClick={toggleLanguage}
            className="px-3 py-1 border rounded"
          >
            {language === "en" ? "ES" : "EN"}
          </button>

          {/* Switch tema */}
          <button onClick={toggleTheme}>
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
