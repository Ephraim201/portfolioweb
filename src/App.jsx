import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";


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
    <div className="relative min-h-screen">
      {/* Navbar siempre visible arriba */}
      <Navbar onNavigate={handleNavigate} />

      {/* Espacio para compensar la altura del navbar (64px por ejemplo) */}
      <div className="pt-24 px-4">
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
      </div>
    </div>
  );
};

export default App;
