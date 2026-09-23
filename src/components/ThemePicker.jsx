import { useContext, useEffect, useRef } from "react";
import ThemeContext from "../context/ThemeContext";
import { LanguageContext } from "../context/LanguageContext";

const paletteDefinitions = [
  ["cyber", "Cyber Emerald", "Web3 & Crypto", "#14d9ab", "#20bed1", "◎"],
  ["violet", "Neon Violet", "Creative & SaaS", "#ae89ff", "#ef78bf", "✧"],
  ["cloud", "AWS Cloud", "Cloud & Infrastructure", "#4caaff", "#63d5ef", "☁"],
  ["gold", "Solar Gold", "Fintech & Payments", "#f3bc57", "#f38b54", "☀"],
  ["ruby", "Obsidian Ruby", "Bold & Minimal", "#fb7793", "#dc667e", "◇"],
];

const spanishPalettes = {
  cyber: ["Esmeralda cibernética", "Web3 y criptomonedas"],
  violet: ["Violeta neón", "Creatividad y SaaS"],
  cloud: ["Nube AWS", "Nube e infraestructura"],
  gold: ["Dorado solar", "Fintech y pagos"],
  ruby: ["Rubí obsidiana", "Atrevido y minimalista"],
};

export default function ThemePicker() {
  const { theme, setTheme, mode, setMode, panelOpen, setPanelOpen } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const dialog = useRef(null);
  const es = language === "es";
  const palettes = paletteDefinitions.map(([id, name, subtitle, ...visuals]) => [
    id, ...(es ? spanishPalettes[id] : [name, subtitle]), ...visuals,
  ]);
  useEffect(() => {
    const element = dialog.current;
    if (!panelOpen) { if (element.open) element.close(); return; }
    const previous = document.activeElement;
    element.showModal();
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = overflow; element.close(); previous?.focus(); };
  }, [panelOpen]);
  return <>
    <button className="theme-launcher" onClick={() => setPanelOpen(true)} aria-haspopup="dialog"><span className="palette-dot"/> {es ? "Temas" : "Themes"}<small>{palettes.find(p => p[0] === theme)[1]}</small></button>
    <dialog ref={dialog} className="theme-dialog" aria-labelledby="theme-title" onCancel={() => setPanelOpen(false)} onClick={event => { if (event.target === event.currentTarget) setPanelOpen(false); }}>
      <div className="theme-panel">
        <header><div><h2 id="theme-title">{es ? "Estilos y ambiente" : "Style & atmosphere"}</h2><p>{es ? "Elige cómo quieres ver mi portafolio." : "Choose how you see my portfolio."}</p></div><button autoFocus onClick={() => setPanelOpen(false)} aria-label={es ? "Cerrar temas" : "Close themes"}>×</button></header>
        <p className="palette-label">{es ? "APARIENCIA" : "APPEARANCE"}</p>
        <div className="mode-options" role="group" aria-label={es ? "Apariencia" : "Appearance"}>
          <button aria-pressed={mode === "light"} onClick={() => setMode("light")}><span aria-hidden="true">☀</span> {es ? "Claro" : "Light"}</button>
          <button aria-pressed={mode === "dark"} onClick={() => setMode("dark")}><span aria-hidden="true">☾</span> {es ? "Oscuro" : "Dark"}</button>
        </div>
        <p className="palette-label">{es ? "PALETAS DE COLOR" : "COLOR PALETTES"}</p>
        <div className="palette-list" role="group" aria-label={es ? "Paletas" : "Palettes"}>{palettes.map(([id,name,subtitle,a,b,icon]) => <button key={id} aria-pressed={theme === id} onClick={() => setTheme(id)} style={{"--sample":a,"--sample-end":b}}><span className="palette-icon" aria-hidden="true">{theme===id ? "✓" : icon}</span><span><strong>{name}</strong><small>{subtitle}</small></span><span className="palette-samples" aria-hidden="true"><i/><i/></span></button>)}</div>
        <footer>{es ? "Cada paleta transforma los fondos, tarjetas, botones, degradados y cursor. Tu elección se guarda automáticamente." : "Each palette transforms backgrounds, cards, buttons, gradients and cursor. Your choice is saved automatically."}</footer>
      </div>
    </dialog>
  </>;
}
