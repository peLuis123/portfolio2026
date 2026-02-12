function Projects() {
  return (
    <section className="py-24 px-6" id="projects">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <p className="text-slate-500">Real-world applications and open-source contributions.</p>
          </div>
          <a className="text-primary font-medium hover:underline flex items-center gap-2" href="#">
            View all projects
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
          </a>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="group glass rounded-xl overflow-hidden hover:-translate-y-2 transition-all duration-300 glow-hover">
            <div className="aspect-video relative overflow-hidden">
              <img alt="Dark themed dashboard interface with colorful charts" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_mf3P1pRuQVSwUlMROz51lQLmIljn5yNomPzY73WB5mkMgHH4i8VBqyQBGp1AdhmEoew8MA6-SSkj30dve8pIVx_Bw8aTuf33HvvZ4a792DdIJbIujJMlyc4SFmqN6XNMZVMzcasDVIerHFA2HaTpw5dcI85vR2_mLcvMWT3AZNY-_Cb6dof6qw0-ZqAEiLwSxpHAuzPBekRvyC7rB-O-AbUzuNGJ6GpJF6JpNSQINO92ENUxMSUgGlT4LB9_zI_I0DrzBNpB3g" />
              <div className="absolute inset-0 bg-background-dark/40 group-hover:bg-background-dark/20 transition-colors"></div>
            </div>
            <div className="p-6">
              <div className="flex gap-2 mb-4">
                <span className="text-[10px] px-2 py-0.5 rounded bg-primary/10 text-primary uppercase font-bold tracking-widest">SaaS</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-purple-500/10 text-purple-400 uppercase font-bold tracking-widest">API</span>
              </div>
              <h3 className="text-xl font-bold mb-2">OmniChannel Dashboard</h3>
              <p className="text-slate-400 text-sm mb-6 line-clamp-2">A high-performance analytics platform for cross-platform sales tracking and automated reporting.</p>
              <div className="flex items-center gap-4">
                <a className="flex items-center gap-1.5 text-sm font-medium hover:text-primary transition-colors" href="#">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg>
                  Code
                </a>
                <a className="flex items-center gap-1.5 text-sm font-medium hover:text-primary transition-colors" href="#">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                  Live Demo
                </a>
              </div>
            </div>
          </div>
          <div className="group glass rounded-xl overflow-hidden hover:-translate-y-2 transition-all duration-300 glow-hover">
            <div className="aspect-video relative overflow-hidden">
              <img alt="Neon colored mobile app interface with messaging features" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_1WKnalw54DqTifB200xF13HssEJiZ3VTgVTb4h_hrcnuP1yODtAZj1G9rZbRoPoNdTHmt48-yJKDHYgxmZZjn6jJWdiFh0qVCABAnO9l3-_5SZy7tY_TMelyyUQtrxW0NQxgK26BnZinE_Wre6SprFDyO_fz4fa16lsJmzxVjgFSmWW2WSlwKepDLVK7CV2XrSPGVHDSTh33X-TxCjrodBEgFCbpbMRO75Dp6iljdEmShyrEUwRiAm-9egjgk-uS0jfmm9C3Ng" />
              <div className="absolute inset-0 bg-background-dark/40 group-hover:bg-background-dark/20 transition-colors"></div>
            </div>
            <div className="p-6">
              <div className="flex gap-2 mb-4">
                <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 uppercase font-bold tracking-widest">REAL-TIME</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 uppercase font-bold tracking-widest">MOBILE</span>
              </div>
              <h3 className="text-xl font-bold mb-2">SyncChat Application</h3>
              <p className="text-slate-400 text-sm mb-6 line-clamp-2">Encrypted real-time messaging platform using WebSockets and end-to-end security protocols.</p>
              <div className="flex items-center gap-4">
                <a className="flex items-center gap-1.5 text-sm font-medium hover:text-primary transition-colors" href="#">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg>
                  Code
                </a>
                <a className="flex items-center gap-1.5 text-sm font-medium hover:text-primary transition-colors" href="#">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                  Live Demo
                </a>
              </div>
            </div>
          </div>
          <div className="group glass rounded-xl overflow-hidden hover:-translate-y-2 transition-all duration-300 glow-hover">
            <div className="aspect-video relative overflow-hidden">
              <img alt="Abstract data visualization with flowing blue lines" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuACG8DyI5VjK-4Ms2ZQW7_46kcSAYOJTa3fjNcemk33-731Uq9nNglLkD-cyjXFS9XspbmJ37UdhN7wSsbJlpLhl94ngHl6QXZJteJwORleZbsQxPsXcLoCFFvpIBb8djrvSjgSzfti2V_qSUkYhPohHPfFKZ3kkrOv6MXEBTDObOHa2GEH2j-ksb4Mp0K0kAfMqpORvzPRhA4IokYkOcA5T7jXJOBI4N1xmzRLFMcwcz5FNN4-Y27DimpoCiye11YU4T5A-k_ERQ" />
              <div className="absolute inset-0 bg-background-dark/40 group-hover:bg-background-dark/20 transition-colors"></div>
            </div>
            <div className="p-6">
              <div className="flex gap-2 mb-4">
                <span className="text-[10px] px-2 py-0.5 rounded bg-orange-500/10 text-orange-400 uppercase font-bold tracking-widest">ECOMMERCE</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-slate-500/10 text-slate-400 uppercase font-bold tracking-widest">BACKEND</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Commerce Core API</h3>
              <p className="text-slate-400 text-sm mb-6 line-clamp-2">Headless commerce engine supporting massive traffic with sub-100ms response times.</p>
              <div className="flex items-center gap-4">
                <a className="flex items-center gap-1.5 text-sm font-medium hover:text-primary transition-colors" href="#">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg>
                  Code
                </a>
                <a className="flex items-center gap-1.5 text-sm font-medium hover:text-primary transition-colors" href="#">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
