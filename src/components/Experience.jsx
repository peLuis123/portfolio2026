function Experience() {
  return (
    <section className="py-24 px-6" id="experience">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Professional Experience
          </h2>
          <p className="text-slate-500">
            My journey through the tech industry and key milestones.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-16">
          
          {/* Job 1 */}
          <div className="glass p-8 rounded-xl">
            <span className="text-primary font-mono text-sm">
              Jan 2022 — Present
            </span>
            <h3 className="text-2xl font-bold mt-2">
              Senior Fullstack Engineer
            </h3>
            <p className="text-slate-400 mb-4">
              TechFlow Systems
            </p>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>▹ Architected microservices platform (50k+ users)</li>
              <li>▹ Reduced latency by 40% using Redis</li>
              <li>▹ Mentored 5 junior developers</li>
            </ul>
          </div>

          {/* Job 2 */}
          <div className="glass p-8 rounded-xl">
            <span className="text-purple-400 font-mono text-sm">
              Mar 2019 — Dec 2021
            </span>
            <h3 className="text-2xl font-bold mt-2">
              Frontend Developer
            </h3>
            <p className="text-slate-400 mb-4">
              Creative Pixel Agency
            </p>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>▹ Built SaaS dashboard with React</li>
              <li>▹ Integrated 10+ APIs</li>
              <li>▹ Migrated build system to Vite</li>
            </ul>
          </div>

          {/* Job 3 */}
          <div className="glass p-8 rounded-xl">
            <span className="text-emerald-400 font-mono text-sm">
              June 2017 — Feb 2019
            </span>
            <h3 className="text-2xl font-bold mt-2">
              Junior Web Developer
            </h3>
            <p className="text-slate-400 mb-4">
              StartUp Hub Inc.
            </p>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>▹ Internal tools with Node.js & MongoDB</li>
              <li>▹ Increased test coverage by 30%</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Experience;
