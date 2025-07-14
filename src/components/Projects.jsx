import { useState } from "react";
import imagen1 from "/images/logo.png";

const Projects = () => {
  // Estado para controlar qué categoría está activa
  const [activeCategory, setActiveCategory] = useState("unity"); // "unitye" o "web"

  // Datos de proyectos de Unity
  const unityProjects = [
    {
      id: 1,
      image: "myweb/gifs/arkanod.gif",
      date: "Noviembre 2021",
      title: "Arkanoid-Unity",
      description: "Otro de mis juegos creados mientras estaba en el Grado Superior, Arkanoid un juego centrado en controlar una pequeña plataforma (llamada \"Vaus\") para hacer rebotar la pelota y destruir plataformas, destruyes todas y pasas al siguiente nivel.",
      link: "https://github.com/Ephraim201/Arkanoid-Unity"
    },
    {
      id: 2,
      image: "myweb/gifs/bullet2.gif",
      date: "Diciembre 2021",
      title: "Bullet Hell Yeah",
      description: "Este proyecto esta hecho en Unity y esta basado en los juegos Bullet-Hell, pero le e dado mi toque con asets de otros juegos.",
      link: "https://github.com/Ephraim201/BulletHellYeah"
    },
    {
      id: 3,
      image: "myweb/gifs/flappyball.gif",
      date: "Marzo 2022",
      title: "Flappy Ball",
      description: "Proyecto hecho en Unity. Inspirado en el clasico juego de FlappyBird, salvo que en esta ocacion controlas un cuadrado saltante",
      link: "https://github.com/Ephraim201/FlappyBall"
    },
    {
      id: 4,
      image: "myweb/gifs/fod1.gif",
      date: "Octubre 2022",
      title: "Figth Or Die",
      description: "Este proyecto esta hecho en Unity, es un nuevo giro a la formula original de piedra/papel/tijeras con elementos de RPG simples",
      link: "https://github.com/Ephraim201/FigthOrDie"
    }
  ];

  // Datos de proyectos web con React (puedes reemplazar estos con tus proyectos reales)
  const webProjects = [
    {
      id: 1,
      image: "myweb/gifs/inspirator.gif", // Reemplaza con tu imagen
      date: "Julio 2025",
      title: "Inspirator",
      description: "Una pagina web creada en react con fondo interectivo que te proporciona frases que la gente nunca a dicho",
      link: "https://github.com/Ephraim201/inspirator"
    },
    {
      id: 2,
      image: "myweb/gifs/lifedrawing.gif", // Reemplaza con tu imagen
      date: "Marzo 2023",
      title: "Life Drawing",
      description: "Aplicación web que muestra datos meteorológicos en tiempo real utilizando React y la API de OpenWeatherMap.",
      link: "https://github.com/Ephraim201/lifedrawing"
    }
    // Puedes agregar más proyectos web aquí
  ];

  // Función para renderizar los proyectos según la categoría seleccionada
  const renderProjects = () => {
    const projectsToRender = activeCategory === "unity" ? unityProjects : webProjects;
    
    return (
      <div className="grid md:grid-cols-2 gap-10">
        {projectsToRender.map(project => (
          <div 
            key={project.id}
            className="rounded-2xl shadow-md hover:shadow-lg hover:scale-[1.02] transition-transform duration-300 bg-white p-6 space-y-4 w-full"
          >
            <img 
              src={project.image} 
              alt={project.title} 
              className="rounded-lg w-full object-cover h-48" 
            />
            <p className="text-sm text-gray-500">{project.date}</p>
            <h3 className="text-2xl font-semibold text-black">{project.title}</h3>
            <p className="text-gray-700 text-base leading-relaxed break-words line-clamp-4">
              {project.description}
            </p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline text-base"
            >
              👉 Ver más sobre este proyecto en GitHub
            </a>
            <hr className="border-t-2 border-gray-700 mt-4" />
          </div>
        ))}
      </div>
    );
  };

  return (
    <section id="work" className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold mb-6 text-black">Proyectos 🔥</h2>
      
      {/* Pestañas de categorías */}
      <div className="flex justify-center mb-8">
        <button
          className={`px-8 py-3 font-medium text-lg rounded-l-lg transition-colors duration-200 mr-2 ${
            activeCategory === "unity" 
              ? "bg-black text-white" 
              : "bg-gray-700 text-white hover:hover:bg-gray-600"
          }`}
          onClick={() => setActiveCategory("unity")}
        >
          Proyectos Unity
        </button>
        <button
          className={`px-8 py-3 font-medium text-lg rounded-r-lg transition-colors duration-200 ${
            activeCategory === "web" 
              ? "bg-black text-white" 
              : "bg-gray-700 text-white hover:hover:bg-gray-600"
          }`}
          onClick={() => setActiveCategory("web")}
        >
          Proyectos Web
        </button>
      </div>
      
      {/* Renderizar los proyectos según la categoría seleccionada */}
      {renderProjects()}
    </section>
  );
};

export default Projects;