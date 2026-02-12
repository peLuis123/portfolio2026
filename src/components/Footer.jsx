function Footer() {
  return (
    <footer className="py-12 border-t border-white/5 text-center text-slate-500 text-sm">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-primary rounded flex items-center justify-center font-bold text-white text-[10px]">JD</div>
          <span className="text-base font-bold tracking-tight text-slate-300">John<span className="text-primary">Dev</span></span>
        </div>
        <p>© 2024 JohnDev Portfolio. Built with Tailwind CSS and Passion.</p>
        <div className="flex gap-6 text-xs uppercase tracking-widest font-mono">
          <a className="hover:text-primary transition-colors" href="#experience">Experience</a>
          <a className="hover:text-primary transition-colors" href="#stack">Stack</a>
          <a className="hover:text-primary transition-colors" href="#projects">Projects</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
