import { createContext, useEffect, useState } from "react";
const ThemeContext = createContext();
export function ThemeProvider({ children }) {
 const [theme,setTheme]=useState(()=>{
  if(typeof window==="undefined") return "cloud";
  try { const saved=localStorage.getItem("palette");return ["cyber","violet","cloud","gold","ruby"].includes(saved)?saved:"cloud"; } catch {return "cloud";}
 });
 const [panelOpen,setPanelOpen]=useState(false);
 const [mode,setMode]=useState(()=>{
  if(typeof window==="undefined") return "light";
  try { return localStorage.getItem("theme-mode")==="dark" ? "dark" : "light"; } catch {return "light";}
 });
 useEffect(()=>{
  document.documentElement.classList.toggle("dark",mode==="dark");
  document.documentElement.dataset.mode=mode;
  document.documentElement.dataset.palette=theme;
  try {localStorage.setItem("palette",theme);localStorage.setItem("theme-mode",mode);} catch { /* Optional persistence. */ }
 },[theme,mode]);
 const toggleTheme=()=>setPanelOpen(true);
 return <ThemeContext.Provider value={{theme,setTheme,mode,setMode,panelOpen,setPanelOpen,toggleTheme}}>{children}</ThemeContext.Provider>;
}
export default ThemeContext;

