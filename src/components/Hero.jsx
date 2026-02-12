import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

function Hero() {
  const { translations } = useContext(LanguageContext);

  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-primary font-mono mb-4">
          {translations.hero.hello}
        </h2>

        <h1 className="text-5xl font-bold mb-6">
          {translations.hero.title}
        </h1>

        <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-xl">
          {translations.hero.description}
        </p>

        <button className="px-8 py-4 bg-primary text-white rounded-xl">
          {translations.hero.viewWork}
        </button>
      </div>
    </section>
  );
}

export default Hero;
