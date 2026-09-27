import { useContext, useEffect, useRef, useState } from "react";
import ProjectModal from "./ProjectModal";
import { LanguageContext } from "../context/LanguageContext";

function Projects() {
  const { translations } = useContext(LanguageContext);
  const projects = translations.projects;
  const trackRef = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const count = projects.items.length;
  // Three identical sets let the visible cards cross either boundary naturally.
  const slides = [0, 1, 2].flatMap(copy =>
    projects.items.map((project, index) => ({ project, index, copy }))
  );

  useEffect(() => {
    const track = trackRef.current;
    let timer;
    let width = 0;
    const span = () => track.children[count].offsetLeft - track.children[0].offsetLeft;
    const recenter = () => {
      const size = span();
      if (!size) return;
      let shift = 0;
      if (track.scrollLeft < size - 2) shift = size;
      else if (track.scrollLeft >= size * 2 - 2) shift = -size;
      if (!shift) return;
      const focused = Array.from(track.children).indexOf(document.activeElement);
      track.scrollBy({ left: shift, behavior: "instant" });
      if (focused >= 0) {
        const target = focused + (shift > 0 ? count : -count);
        track.children[target]?.focus({ preventScroll: true });
      }
    };
    const onScroll = () => {
      clearTimeout(timer);
      timer = setTimeout(recenter, 180);
    };
    const resize = () => {
      if (track.clientWidth === width) return;
      width = track.clientWidth;
      track.scrollTo({ left: span(), behavior: "instant" });
    };
    const observer = new ResizeObserver(resize);
    observer.observe(track);
    track.addEventListener("scroll", onScroll, { passive: true });
    resize();
    return () => { clearTimeout(timer); observer.disconnect(); track.removeEventListener("scroll", onScroll); };
  }, [count]);

  const move = (direction) => {
    const track = trackRef.current;
    const card = track.firstElementChild;
    track.scrollBy({
      left: direction * (card.getBoundingClientRect().width + 20),
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
    });
  };

  const tagStyles = [
    "bg-primary/10 text-primary",
    "bg-purple-500/10 text-purple-400",
    "bg-emerald-500/10 text-emerald-400",
    "bg-blue-500/10 text-blue-400",
    "bg-orange-500/10 text-orange-400",
    "bg-slate-500/10 text-slate-400",
  ];

  const getLinkProps = (url) => {
    if (!url || url === "#") {
      return { href: "#" };
    }

    return {
      href: url,
      target: "_blank",
      rel: "noreferrer",
    };
  };


  return (
    <section className="py-24 px-6 bg-background-cream dark:bg-black/20" id="projects">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div>
            <h2 className="text-3xl font-bold mb-4">{projects.title}</h2>
            <p className="text-slate-500">{projects.subtitle}</p>
          </div>
          <a className="text-primary font-medium hover:underline flex items-center gap-2" {...getLinkProps(projects.viewAllUrl)}>
            {projects.viewAll}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
          </a>
        </div>
        <div className="project-controls">
          <span className="text-sm text-slate-500">{projects.browseHint}</span>
          <div className="flex gap-2">
            <button type="button" className="project-arrow" aria-label={projects.previousLabel} aria-controls="project-track" onClick={() => move(-1)}>←</button>
            <button type="button" className="project-arrow" aria-label={projects.nextLabel} aria-controls="project-track" onClick={() => move(1)}>→</button>
          </div>
        </div>
        <div ref={trackRef} id="project-track" className="project-track" role="region" aria-label={projects.title} tabIndex={0} onKeyDown={(event) => {
          if (event.target !== event.currentTarget) return;
          if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
            event.preventDefault();
            move(event.key === "ArrowRight" ? 1 : -1);
          }
        }}>
          {slides.map(({ project, index, copy }) => (
            <button type="button" key={`${copy}-${project.title}`} tabIndex={copy === 1 ? 0 : -1} className="project-card group glass rounded-xl overflow-hidden text-left" aria-haspopup="dialog" onClick={() => setSelectedIndex(index)}>
              <div className="aspect-video relative overflow-hidden">
                <img alt={project.imageAlt} loading="lazy" decoding="async" width="960" height="540" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src={project.imageUrl} />
                <div className="absolute inset-0 bg-background-dark/40 group-hover:bg-background-dark/20 transition-colors"></div>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={`${project.title}-${tag}`}
                      className={`text-[10px] px-2 py-0.5 rounded uppercase font-bold tracking-widest ${tagStyles[(index * 2 + tagIndex) % tagStyles.length]}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-xs text-slate-500 mb-2">{project.projectType}</span>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-5 line-clamp-2">{project.description}</p>
                <span className="text-primary text-sm font-medium mt-auto">{projects.detailsLabel} ↗</span>
              </div>
            </button>
          ))}
        </div>
      </div>
      {selectedIndex !== null && <ProjectModal project={projects.items[selectedIndex]} projects={projects} onClose={() => setSelectedIndex(null)} />}
    </section>
  );
}

export default Projects;
