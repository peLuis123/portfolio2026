function Experience() {
  return (
    <section className="py-24 px-6" id="experience">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Professional Experience</h2>
          <p className="text-slate-500">My journey through the tech industry and key milestones.</p>
        </div>
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line - hidden on mobile, centered on desktop */}
          <div className="absolute left-0 md:left-1/2 md:-ml-[1px] top-0 bottom-0 w-[2px] timeline-line opacity-30"></div>

          {/* Job 1 */}
          <div className="relative mb-16 md:mb-24">
            <div className="md:flex items-center justify-between">
              <div className="md:w-[45%] mb-4 md:mb-0 md:text-right">
                <span className="text-primary font-mono text-sm block mb-1">Jan 2022 — Present</span>
                <h3 className="text-2xl font-bold">Senior Fullstack Engineer</h3>
                <p className="text-slate-400 font-medium">TechFlow Systems</p>
              </div>
              <div className="absolute left-[-9px] md:left-1/2 md:-ml-[10px] w-5 h-5 rounded-full bg-primary border-4 border-background-dark z-10"></div>
              <div className="md:w-[45%] md:pl-8">
                <div className="glass p-6 rounded-xl glow-hover transition-all">
                  <ul className="space-y-3 text-slate-400 text-sm list-none">
                    <li className="flex gap-2">
                      <span className="text-primary">▹</span>
                      <span>Architected and launched a microservices-based e-commerce platform handling 50k+ daily active users.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">▹</span>
                      <span>Reduced system latency by 40% through implementation of Redis caching strategies and query optimization.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">▹</span>
                      <span>Mentored a team of 5 junior developers, conducting code reviews and technical workshops.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Job 2 */}
          <div className="relative mb-16 md:mb-24">
            <div className="md:flex items-center justify-between">
              <div className="hidden md:block md:w-[45%] md:pr-8">
                <div className="glass p-6 rounded-xl glow-hover transition-all text-left">
                  <ul className="space-y-3 text-slate-400 text-sm list-none">
                    <li className="flex gap-2">
                      <span className="text-primary">▹</span>
                      <span>Developed responsive user interfaces for a SaaS dashboard using React and Tailwind CSS.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">▹</span>
                      <span>Integrated 10+ third-party APIs for real-time data synchronization and analytics reporting.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">▹</span>
                      <span>Improved build times by 60% by migrating the legacy build system to Vite.</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="absolute left-[-9px] md:left-1/2 md:-ml-[10px] w-5 h-5 rounded-full bg-purple-500 border-4 border-background-dark z-10"></div>
              <div className="md:w-[45%] pl-8 md:pl-8 md:text-left">
                <span className="text-purple-400 font-mono text-sm block mb-1">Mar 2019 — Dec 2021</span>
                <h3 className="text-2xl font-bold">Frontend Developer</h3>
                <p className="text-slate-400 font-medium">Creative Pixel Agency</p>

                {/* Mobile view only */}
                <div className="md:hidden mt-4 glass p-6 rounded-xl glow-hover transition-all">
                  <ul className="space-y-3 text-slate-400 text-sm list-none">
                    <li className="flex gap-2">
                      <span className="text-primary">▹</span>
                      <span>Developed responsive user interfaces for a SaaS dashboard using React and Tailwind CSS.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">▹</span>
                      <span>Integrated 10+ third-party APIs for real-time data synchronization and analytics reporting.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">▹</span>
                      <span>Improved build times by 60% by migrating the legacy build system to Vite.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Job 3 */}
          <div className="relative">
            <div className="md:flex items-center justify-between">
              <div className="md:w-[45%] mb-4 md:mb-0 md:text-right">
                <span className="text-emerald-400 font-mono text-sm block mb-1">June 2017 — Feb 2019</span>
                <h3 className="text-2xl font-bold">Junior Web Developer</h3>
                <p className="text-slate-400 font-medium">StartUp Hub Inc.</p>
              </div>
              <div className="absolute left-[-9px] md:left-1/2 md:-ml-[10px] w-5 h-5 rounded-full bg-emerald-500 border-4 border-background-dark z-10"></div>
              <div className="md:w-[45%] md:pl-8">
                <div className="glass p-6 rounded-xl glow-hover transition-all">
                  <ul className="space-y-3 text-slate-400 text-sm list-none">
                    <li className="flex gap-2">
                      <span className="text-primary">▹</span>
                      <span>Collaborated on the development of internal management tools using Node.js and MongoDB.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">▹</span>
                      <span>Automated repetitive testing tasks using Jest, increasing test coverage by 30%.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Experience;
