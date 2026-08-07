import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Stack from "./components/Stack";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Seo from "./components/Seo";

function App() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display transition-colors duration-300">
      <Navbar />
      <Seo />
      <main>
        <Hero />
        <Experience />
        <Stack />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
