import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Footer from './components/Footer';

const App = () => {
  const [activeSection, setActiveSection] = useState("home");
  const handleNavigate = (section, options = {}) => {
    setActiveSection(section);
    if (section === "home" && options.scrollToWork) {
      setTimeout(() => {
        const projectsEl = document.getElementById("work");
        if (projectsEl) {
          projectsEl.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Navbar siempre visible arriba */}
      <Navbar onNavigate={handleNavigate} />
      
      {/* Borde neón */}
      <div className="fixed inset-0 pointer-events-none -z-10 mt-24" 
           style={{
             border: '1px solid #FF2A6D',
             boxShadow: '0 0 15px rgba(255, 42, 109, 0.6)',
             clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
             margin: '1px'
           }}>
      </div>
      
      {/* Contenido principal (crecerá para empujar el footer abajo) */}
      <main className="flex-grow pt-24 px-4">
        {/* Sección Home (Hero + Projects) */}
        <div
          className={`transition-opacity duration-700 ease-in-out ${
            activeSection === "home" ? "opacity-100 block" : "opacity-0 hidden"
          }`}
        >
          <Hero />
          <Projects />
        </div>
        
        {/* Sección About */}
        <div
          className={`transition-opacity duration-700 ease-in-out ${
            activeSection === "about" ? "opacity-100 block" : "opacity-0 hidden"
          }`}
        >
          <About />
        </div>
      </main>
      
      {/* Footer - siempre visible */}
      <Footer />
    </div>
  );
};
export default App;