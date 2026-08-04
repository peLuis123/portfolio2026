import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

function Experience() {
  const { translations } = useContext(LanguageContext);
  const exp = translations.experience;

  return (
    <section className="scroll-mt-24 py-20 md:py-24 px-4 sm:px-6 bg-background-cream dark:bg-black/20" id="experience">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">{exp.title}</h2>
          <p className="text-slate-500">{exp.subtitle}</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-0 md:left-1/2 md:-ml-px top-0 bottom-0 w-0.5 timeline-line opacity-30"></div>

          {exp.jobs.map((job, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div key={index} className="relative mb-16 md:mb-24">
                <div className="md:flex items-center justify-between">

                  <div className="pl-6 mb-4 md:hidden">
                    <span className="text-primary font-mono text-sm block mb-1">
                      {job.date}
                    </span>
                    <h3 className="text-2xl font-bold leading-tight">{job.role}</h3>
                    <p className="text-slate-400 font-medium">
                      {job.company}
                    </p>
                  </div>

                  {isLeft && (
                    <div className="hidden md:block md:w-[45%] mb-4 md:mb-0 md:text-right">
                      <span className="text-primary font-mono text-sm block mb-1">
                        {job.date}
                      </span>
                      <h3 className="text-2xl font-bold">{job.role}</h3>
                      <p className="text-slate-400 font-medium">
                        {job.company}
                      </p>
                    </div>
                  )}

                  <div className="absolute left-0 -translate-x-1/2 md:left-1/2 md:-translate-x-1/2 w-5 h-5 rounded-full bg-primary border-4 border-background-dark z-10"></div>

                  <div className="pl-6 md:w-[45%] md:pl-8">
                    <div className="glass p-6 rounded-xl glow-hover transition-all">
                      <ul className="space-y-3 text-slate-400 text-sm list-none">
                        {job.bullets.map((bullet, i) => (
                          <li key={i} className="flex gap-2">
                            <span className="text-primary">▹</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {!isLeft && (
                    <div className="hidden md:block md:w-[45%] md:text-left">
                      <span className="text-primary font-mono text-sm block mb-1">
                        {job.date}
                      </span>
                      <h3 className="text-2xl font-bold">{job.role}</h3>
                      <p className="text-slate-400 font-medium">
                        {job.company}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}

export default Experience;
