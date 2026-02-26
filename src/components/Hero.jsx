import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

function Hero() {
  const { translations } = useContext(LanguageContext);

  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-primary font-mono mb-4 text-lg">
            {translations.hero.hello}
          </h2>

          <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
            {translations.hero.titleMain} <br />
            <span className="text-transparent bg-clip-text code-gradient">
              {translations.hero.titleAccent}
            </span>
          </h1>

          <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-xl leading-relaxed">
            {translations.hero.description}
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              className="px-8 py-4 bg-primary text-white font-bold rounded-xl hover:shadow-lg hover:shadow-primary/20 transition-all flex items-center gap-2"
              onClick={() => {
                const section = document.getElementById('projects');
                if (section) section.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {translations.hero.viewWork}
              <span className="material-symbols-outlined">
                arrow_downward
              </span>
            </button>

            <a
              href="https://drive.google.com/file/d/10OnwoqUfPJ3VaN7NsbhrRgIV1qGvNNqW/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-slate-200 dark:bg-white/5 text-slate-900 dark:text-white font-bold rounded-xl hover:bg-slate-300 dark:hover:bg-white/10 transition-all"
            >
              {translations.hero.resume}
            </a>
          </div>
        </div>

        <div className="glass rounded-xl overflow-hidden shadow-2xl border border-white/10">
          <div className="bg-white/5 px-4 py-3 border-b border-white/10 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
            <span className="ml-4 text-xs font-mono text-slate-500">
              developer.json — 120×40
            </span>
          </div>

          <div className="p-8 font-mono text-sm leading-relaxed text-slate-300">
            <div className="mb-2">
              <span className="text-purple-400">const</span>{" "}
              <span className="text-primary">developer</span> = {"{"}
            </div>

            <div className="ml-6 mb-2">
              <span className="text-slate-500 dark:text-slate-300">
                name:
              </span>{" "}
              <span className="text-emerald-400">
                "Luis Dev"
              </span>,
            </div>

            <div className="ml-6 mb-2">
              <span className="text-slate-500 dark:text-slate-300">
                role:
              </span>{" "}
              <span className="text-emerald-400">
                "{translations.hero.code.role}"
              </span>,
            </div>

            <div className="ml-6 mb-2">
              <span className="text-slate-500 dark:text-slate-300">
                specialty:
              </span>{" "}
              [
              <span className="text-emerald-400">
                "{translations.hero.code.specialty1}"
              </span>
              ,{" "}
              <span className="text-emerald-400">
                "{translations.hero.code.specialty2}"
              </span>
              ],
            </div>

            <div className="ml-6 mb-2">
              <span className="text-slate-500 dark:text-slate-300">
                coffee_addict:
              </span>{" "}
              <span className="text-orange-400">true</span>,
            </div>

            <div className="ml-6 mb-2">
              <span className="text-slate-500 dark:text-slate-300">
                location:
              </span>{" "}
              <span className="text-emerald-400">
                "{translations.hero.code.location}"
              </span>,
            </div>

            <div className="ml-6 mb-2">
              <span className="text-slate-500 dark:text-slate-300">
                available_for_hire:
              </span>{" "}
              <span className="text-orange-400">true</span>
            </div>

            <div>{"}"};</div>
            <div className="mt-4 animate-pulse">
              <span className="text-primary">➜</span>{" "}
              <span className="text-slate-400">|</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
