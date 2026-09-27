import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import resumeEs from "../assets/Pedro_Ramos_CV_Fullstack_ES.pdf";
import resumeEn from "../assets/Pedro_Ramos_CV_Fullstack_EN.pdf";

function Hero() {
  const { translations, language } = useContext(LanguageContext);
  const localResumeUrl = language === "es" ? resumeEs : resumeEn;

  return (
    <section className="pt-32 pb-20 px-6">
      <div className="hero-layout max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-primary font-mono mb-4 text-lg">
            {translations.hero.hello}
          </h2>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6">
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
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="w-5 h-5"
                aria-hidden="true"
              >
                <path d="M12 5v14" />
                <path d="m6 13 6 6 6-6" />
              </svg>
            </button>

            <a
              href={localResumeUrl || translations.hero.resumeUrl}
              download={`Pedro_Ramos_CV_${language.toUpperCase()}.pdf`}
              className="px-8 py-4 bg-slate-200 dark:bg-white/5 text-slate-900 dark:text-white font-bold rounded-xl hover:bg-slate-300 dark:hover:bg-white/10 transition-all"
            >
              {translations.hero.resume}
            </a>
            <a href="https://www.linkedin.com/in/pedro-ramos-fullstack/" target="_blank" rel="noopener noreferrer" className="px-3 py-4 text-primary font-semibold hover:underline">LinkedIn ↗</a>
          </div>
        </div>

        <div className="developer-window glass rounded-xl overflow-hidden shadow-2xl border border-white/10">
          <div className="bg-white/5 px-4 py-3 border-b border-white/10 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
            <span className="ml-4 text-xs font-mono text-slate-500">
              developer.js
            </span>
          </div>

          <div className="developer-code p-5 sm:p-8 font-mono text-sm leading-relaxed text-slate-300 break-words">
            <div className="mb-2">
              <span className="text-purple-400">const</span>{" "}
              <span className="text-primary">developer</span> = {"{"}
            </div>

            <div className="ml-6 mb-2">
              <span className="text-slate-500 dark:text-slate-300">
                name:
              </span>{" "}
              <span className="text-emerald-400">
                "Pedro Luis Ramos Calla"
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

            {[
              ["stack", ["TypeScript", "Node.js", "React", "Vue"]],
              ["focus", translations.hero.code.focus],
              ["location", translations.hero.code.location],
              ["work_mode", translations.hero.code.workMode],
            ].map(([key, value]) => (
              <div key={key} className="ml-6 mb-2">
                <span className="text-slate-500 dark:text-slate-300">{key}:</span>{" "}
                {Array.isArray(value) ? (
                  <>
                    {"["}
                    {value.map((item, index) => (
                      <span key={item}>
                        {index > 0 && ", "}
                        <span className="text-emerald-400">{JSON.stringify(item)}</span>
                      </span>
                    ))}
                    {"]"}
                  </>
                ) : <span className="text-emerald-400">{JSON.stringify(value)}</span>},
              </div>
            ))}

            <div className="ml-6 mb-2">
              <span className="text-slate-500 dark:text-slate-300">
                available_for_hire:
              </span>{" "}
              <span className="text-orange-400">true</span>
            </div>

            <div>{"}"};</div>
            <div className="developer-prompt mt-4" aria-hidden="true">
              <span className="text-primary">➜</span>{" "}
              <span className="text-slate-400">|</span>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 grid md:grid-cols-3 gap-5">
        {translations.hero.highlights.map(([title, detail]) => (
          <div key={title} className="border-l-2 border-primary/40 pl-4">
            <h2 className="font-semibold mb-2">{title}</h2>
            <p className="text-sm text-slate-500 leading-relaxed">{detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Hero;

