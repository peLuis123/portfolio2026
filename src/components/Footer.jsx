import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

function Footer() {
  const { translations } = useContext(LanguageContext);
  const footer = translations.footer;

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-white/5 text-center text-slate-500 text-sm">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">

        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-primary rounded flex items-center justify-center font-bold text-white text-[10px]">
            LD
          </div>
          <span className="text-base font-bold tracking-tight text-slate-300">
            Luis<span className="text-primary">Dev</span>
          </span>
        </div>

        <p>
          © {currentYear} LuisDev Portfolio. {footer.built}
        </p>

        <div className="flex gap-6 text-xs uppercase tracking-widest font-mono">
          <a
            className="hover:text-primary transition-colors"
            href="#experience"
          >
            {footer.links.experience}
          </a>

          <a
            className="hover:text-primary transition-colors"
            href="#stack"
          >
            {footer.links.stack}
          </a>

          <a
            className="hover:text-primary transition-colors"
            href="#projects"
          >
            {footer.links.projects}
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
