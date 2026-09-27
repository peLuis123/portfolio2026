import { useEffect, useRef } from "react";

export default function ProjectModal({ project, projects, onClose }) {
  const dialogRef = useRef(null);
  useEffect(() => {
    const dialog = dialogRef.current;
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus({ preventScroll: true });
    };
  }, []);
  const hasLink = (url) => Boolean(url && url !== "#");
  const getLinkProps = (url) => ({ href: url, target: "_blank", rel: "noopener noreferrer" });
  return (
    <dialog ref={dialogRef} className="project-modal" aria-labelledby="project-modal-title" onCancel={(event) => { event.preventDefault(); onClose(); }} onClick={(event) => {
      if (event.target !== event.currentTarget) return;
      const rect = event.currentTarget.getBoundingClientRect();
      if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) onClose();
    }}>
      <div className="project-modal-header">
        <h2 id="project-modal-title" className="text-2xl font-bold">{project.title}</h2>
        <button type="button" className="project-arrow" aria-label={projects.closeLabel} onClick={onClose}>×</button>
      </div>
      <img className="project-modal-image" src={project.imageUrl} alt={project.imageAlt} />
      <div className="project-modal-content">
        <p className="text-sm text-primary mb-4">{project.projectType}</p>
        <div className="flex flex-wrap gap-2 mb-5">{project.tags.map(tag => <span key={tag} className="text-xs rounded-full px-3 py-1 bg-primary/10 text-primary">{tag}</span>)}</div>
        <p className="text-slate-400 leading-relaxed mb-6">{project.description}</p>
        {project.caseStudy && <dl className="space-y-4 mb-7">{project.caseStudy.map((detail, index) => <div key={projects.caseLabels[index]}><dt className="font-semibold mb-1">{projects.caseLabels[index]}</dt><dd className="text-sm text-slate-400 leading-relaxed">{detail}</dd></div>)}</dl>}
                <div className="flex items-center gap-4 flex-wrap mt-auto">
                  {hasLink(project.codeUrl) && (
                    <a className="flex items-center gap-1.5 text-sm font-medium hover:text-primary transition-colors" {...getLinkProps(project.codeUrl)}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="m8 8-4 4 4 4m8-8 4 4-4 4m-3-11-2 14" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
                      {projects.codeLabel}
                    </a>
                  )}
                  {hasLink(project.frontendUrl) && (
                    <a className="flex items-center gap-1.5 text-sm font-medium hover:text-primary transition-colors" {...getLinkProps(project.frontendUrl)}>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg>
                      {projects.frontendLabel}
                    </a>
                  )}
                  {hasLink(project.backendUrl) && (
                    <a className="flex items-center gap-1.5 text-sm font-medium hover:text-primary transition-colors" {...getLinkProps(project.backendUrl)}>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg>
                      {projects.backendLabel}
                    </a>
                  )}
                  {hasLink(project.frontendDocsUrl) && (
                    <a className="flex items-center gap-1.5 text-sm font-medium hover:text-primary transition-colors" {...getLinkProps(project.frontendDocsUrl)}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 12h6M9 16h6M9 8h6M5 4h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                      {projects.frontendDocsLabel}
                    </a>
                  )}
                  {hasLink(project.backendDocsUrl) && (
                    <a className="flex items-center gap-1.5 text-sm font-medium hover:text-primary transition-colors" {...getLinkProps(project.backendDocsUrl)}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 12h6M9 16h6M9 8h6M5 4h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                      {projects.backendDocsLabel}
                    </a>
                  )}
                  {hasLink(project.demoUrl) && (
                    <a className="flex items-center gap-1.5 text-sm font-medium hover:text-primary transition-colors" {...getLinkProps(project.demoUrl)}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                      {projects.demoLabel}
                    </a>
                  )}
                  {hasLink(project.productionUrl) && (
                    <a className="flex items-center gap-1.5 text-sm font-medium hover:text-green-500 transition-colors" href={project.productionUrl} target="_blank" rel="noopener noreferrer">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor"/><path d="M8 12l2 2 4-4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      {projects.productionLabel}
                    </a>
                  )}
                </div>
      </div>
    </dialog>
  );
}
