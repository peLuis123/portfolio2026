import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import ThemeContext from "../context/ThemeContext";

function Navbar() {
  const { translations, toggleLanguage, language } = useContext(LanguageContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded flex items-center justify-center font-bold text-white">
            LD
          </div>
          <span className="text-xl font-bold tracking-tight">
            Luis<span className="text-primary">Dev</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a
            href="#experience"
            className="hover:text-primary transition-colors font-medium"
          >
            {translations.nav.experience}
          </a>

          <a
            href="#stack"
            className="hover:text-primary transition-colors font-medium"
          >
            {translations.nav.stack}
          </a>

          <a
            href="#projects"
            className="hover:text-primary transition-colors font-medium"
          >
            {translations.nav.projects}
          </a>

          <a
            href="#contact"
            className="px-5 py-2 bg-primary hover:bg-primary/90 text-white rounded-lg transition-all font-medium"
          >
            {translations.nav.contact}
          </a>

          <div className="flex items-center gap-4 ml-4 pl-4 border-l border-slate-200 dark:border-white/10">
            {/* Switch idioma */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-white/5 hover:bg-primary/10 hover:border-primary/50 hover:text-primary transition-all group"
            >
              <span className="material-symbols-outlined text-lg text-slate-400 group-hover:text-primary transition-colors">translate</span>
              <span className="text-sm font-mono font-medium">{language === "en" ? "ES" : "EN"}</span>
            </button>

            {/* Switch tema */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-white/10 transition-colors text-slate-500 dark:text-slate-400 hover:text-primary"
            >
              <span className="material-symbols-outlined text-xl">
                {theme === "dark" ? "light_mode" : "dark_mode"}
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
