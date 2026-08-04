import { useContext, useState } from "react";
import { LanguageContext } from "../context/LanguageContext";
import ThemeContext from "../context/ThemeContext";

function Navbar() {
  const { translations, toggleLanguage, language } = useContext(LanguageContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#experience", label: translations.nav.experience },
    { href: "#stack", label: translations.nav.stack },
    { href: "#projects", label: translations.nav.projects },
  ];

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2 min-w-0">
          <div className="w-8 h-8 bg-primary rounded flex items-center justify-center font-bold text-white shrink-0">
            LD
          </div>
          <span className="text-lg sm:text-xl font-bold tracking-tight whitespace-nowrap">
            Luis<span className="text-primary">Dev</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-primary transition-colors font-medium"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            className="px-5 py-2 bg-primary hover:bg-primary/90 text-white rounded-lg transition-all font-medium"
          >
            {translations.nav.contact}
          </a>

          <div className="flex items-center gap-4 ml-4 pl-4 border-l border-slate-200 dark:border-white/10">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-white/5 hover:bg-primary/10 hover:border-primary/50 hover:text-primary transition-all group"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="w-5 h-5 text-slate-400 group-hover:text-primary transition-colors"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="9" />
                <path d="M3 12h18" />
                <path d="M12 3c2.7 2.8 4.2 5.9 4.2 9s-1.5 6.2-4.2 9" />
                <path d="M12 3c-2.7 2.8-4.2 5.9-4.2 9s1.5 6.2 4.2 9" />
              </svg>
              <span className="text-sm font-mono font-medium">{language === "en" ? "ES" : "EN"}</span>
            </button>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-white/10 transition-colors text-slate-500 dark:text-slate-400 hover:text-primary"
            >
              {theme === "dark" ? (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="w-5 h-5"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2.2" />
                  <path d="M12 19.8V22" />
                  <path d="M4.9 4.9l1.6 1.6" />
                  <path d="M17.5 17.5l1.6 1.6" />
                  <path d="M2 12h2.2" />
                  <path d="M19.8 12H22" />
                  <path d="M4.9 19.1l1.6-1.6" />
                  <path d="M17.5 6.5l1.6-1.6" />
                </svg>
              ) : (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="w-5 h-5"
                  aria-hidden="true"
                >
                  <path d="M21 12.7A8.5 8.5 0 1 1 11.3 3a6.8 6.8 0 0 0 9.7 9.7z" />
                </svg>
              )}
            </button>
          </div>
        </div>

        <button
          type="button"
          className="md:hidden p-2 rounded-full hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="w-7 h-7 text-slate-700 dark:text-slate-200"
              aria-hidden="true"
            >
              <path d="m6 6 12 12" />
              <path d="m18 6-12 12" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="w-7 h-7 text-slate-700 dark:text-slate-200"
              aria-hidden="true"
            >
              <path d="M4 7h16" />
              <path d="M4 12h16" />
              <path d="M4 17h16" />
            </svg>
          )}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t border-slate-200/70 dark:border-white/10 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md px-4 sm:px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="block rounded-lg px-3 py-2 hover:bg-primary/10 hover:text-primary transition-colors font-medium"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            onClick={closeMenu}
            className="block rounded-lg px-3 py-2 bg-primary text-white text-center font-medium"
          >
            {translations.nav.contact}
          </a>

          <div className="flex items-center justify-end gap-3 pt-2 border-t border-slate-200 dark:border-white/10">
            <button
              onClick={() => {
                toggleLanguage();
                closeMenu();
              }}
              className="flex items-center gap-2 px-3 py-2 rounded-full border border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-white/5 hover:bg-primary/10 hover:border-primary/50 hover:text-primary transition-all group"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="w-5 h-5 text-slate-400 group-hover:text-primary transition-colors"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="9" />
                <path d="M3 12h18" />
                <path d="M12 3c2.7 2.8 4.2 5.9 4.2 9s-1.5 6.2-4.2 9" />
                <path d="M12 3c-2.7 2.8-4.2 5.9-4.2 9s1.5 6.2 4.2 9" />
              </svg>
              <span className="text-sm font-mono font-medium">{language === "en" ? "ES" : "EN"}</span>
            </button>

            <button
              onClick={() => {
                toggleTheme();
                closeMenu();
              }}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-white/10 transition-colors text-slate-500 dark:text-slate-400 hover:text-primary"
            >
              {theme === "dark" ? (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="w-5 h-5"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2.2" />
                  <path d="M12 19.8V22" />
                  <path d="M4.9 4.9l1.6 1.6" />
                  <path d="M17.5 17.5l1.6 1.6" />
                  <path d="M2 12h2.2" />
                  <path d="M19.8 12H22" />
                  <path d="M4.9 19.1l1.6-1.6" />
                  <path d="M17.5 6.5l1.6-1.6" />
                </svg>
              ) : (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="w-5 h-5"
                  aria-hidden="true"
                >
                  <path d="M21 12.7A8.5 8.5 0 1 1 11.3 3a6.8 6.8 0 0 0 9.7 9.7z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
