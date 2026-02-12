function Projects() {
  return (
    <section className="py-24 px-6" id="projects">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          <div className="glass rounded-xl overflow-hidden p-6">
            <h3 className="text-xl font-bold mb-2">
              OmniChannel Dashboard
            </h3>
            <p className="text-slate-400 text-sm mb-4">
              High-performance analytics platform.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-primary">Code</a>
              <a href="#" className="text-primary">Live</a>
            </div>
          </div>

          <div className="glass rounded-xl overflow-hidden p-6">
            <h3 className="text-xl font-bold mb-2">
              SyncChat Application
            </h3>
            <p className="text-slate-400 text-sm mb-4">
              Encrypted real-time messaging.
            </p>
          </div>

          <div className="glass rounded-xl overflow-hidden p-6">
            <h3 className="text-xl font-bold mb-2">
              Commerce Core API
            </h3>
            <p className="text-slate-400 text-sm mb-4">
              Headless commerce backend engine.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Projects;
