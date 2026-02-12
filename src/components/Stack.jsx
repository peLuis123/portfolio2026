function Stack() {
  return (
    <section className="py-24 px-6 bg-slate-100/50 dark:bg-black/20" id="stack">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Technical Expertise
          </h2>
          <p className="text-slate-500">
            The tools and technologies I use.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="glass p-8 rounded-xl">
            <h3 className="text-xl font-bold mb-4">Frontend</h3>
            <div className="flex flex-wrap gap-2">
              <span className="tag">React</span>
              <span className="tag">Next.js</span>
              <span className="tag">TypeScript</span>
              <span className="tag">Tailwind</span>
            </div>
          </div>

          <div className="glass p-8 rounded-xl">
            <h3 className="text-xl font-bold mb-4">Backend</h3>
            <div className="flex flex-wrap gap-2">
              <span className="tag">Node.js</span>
              <span className="tag">PostgreSQL</span>
              <span className="tag">Redis</span>
              <span className="tag">GraphQL</span>
            </div>
          </div>

          <div className="glass p-8 rounded-xl">
            <h3 className="text-xl font-bold mb-4">DevOps</h3>
            <div className="flex flex-wrap gap-2">
              <span className="tag">Docker</span>
              <span className="tag">AWS</span>
              <span className="tag">Kubernetes</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Stack;
