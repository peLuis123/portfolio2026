function Footer() {
  return (
    <footer className="py-12 border-t border-white/5 text-center text-slate-500 text-sm">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-primary rounded flex items-center justify-center font-bold text-white text-[10px]">
            JD
          </div>
          <span className="text-base font-bold">
            John<span className="text-primary">Dev</span>
          </span>
        </div>

        <p>© 2024 JohnDev Portfolio. Built with React & Tailwind.</p>

        <div className="flex gap-6 text-xs uppercase tracking-widest font-mono">
          <a href="#experience">Experience</a>
          <a href="#stack">Stack</a>
          <a href="#projects">Projects</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
