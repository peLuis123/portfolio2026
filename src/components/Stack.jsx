function Stack() {
  return (
    <section className="py-24 px-6 bg-slate-100/50 dark:bg-black/20" id="stack">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Technical Expertise</h2>
          <p className="text-slate-500">The tools and technologies I use to bring ideas to life.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 glass rounded-xl">
            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
            </div>
            <h3 className="text-xl font-bold mb-4">Frontend</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-sm">React</span>
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-sm">Next.js</span>
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-sm">TypeScript</span>
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-sm">Tailwind CSS</span>
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-sm">Framer Motion</span>
            </div>
          </div>
          <div className="p-8 glass rounded-xl">
            <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center text-purple-400 mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
            </div>
            <h3 className="text-xl font-bold mb-4">Backend</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-sm">Node.js</span>
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-sm">PostgreSQL</span>
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-sm">GraphQL</span>
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-sm">Redis</span>
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-sm">Prisma</span>
            </div>
          </div>
          <div className="p-8 glass rounded-xl">
            <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center text-emerald-400 mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
            </div>
            <h3 className="text-xl font-bold mb-4">DevOps</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-sm">Docker</span>
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-sm">AWS</span>
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-sm">GitHub Actions</span>
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-sm">Kubernetes</span>
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-sm">Vercel</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stack;
