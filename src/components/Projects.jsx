import { useState } from "react";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("unity");

  // Proyectos Unity - Manteniendo todos tus datos originales
  const unityProjects = [
    {
      id: 1,
      image: "gifs/arkanod.gif",
      date: "Noviembre 2021",
      title: "Arkanoid-Unity",
      description: "Otro de mis juegos creados mientras estaba en el Grado Superior, Arkanoid un juego centrado en controlar una pequeña plataforma (llamada \"Vaus\") para hacer rebotar la pelota y destruir plataformas, destruyes todas y pasas al siguiente nivel.",
      link: "https://github.com/Ephraim201/Arkanoid-Unity"
    },
    {
      id: 2,
      image: "gifs/bullet2.gif",
      date: "Diciembre 2021",
      title: "Bullet Hell Yeah",
      description: "Este proyecto esta hecho en Unity y esta basado en los juegos Bullet-Hell, pero le e dado mi toque con asets de otros juegos.",
      link: "https://github.com/Ephraim201/BulletHellYeah"
    },
    {
      id: 3,
      image: "gifs/flappyball.gif",
      date: "Marzo 2022",
      title: "Flappy Ball",
      description: "Proyecto hecho en Unity. Inspirado en el clasico juego de FlappyBird, salvo que en esta ocacion controlas un cuadrado saltante",
      link: "https://github.com/Ephraim201/FlappyBall"
    },
    {
      id: 4,
      image: "gifs/fod1.gif",
      date: "Octubre 2022",
      title: "Figth Or Die",
      description: "Este proyecto esta hecho en Unity, es un nuevo giro a la formula original de piedra/papel/tijeras con elementos de RPG simples",
      link: "https://github.com/Ephraim201/FigthOrDie"
    }
  ];

  // Proyectos Web - Manteniendo tus datos originales
  const webProjects = [
    {
      id: 1,
      image: "gifs/inspirator.gif",
      date: "Julio 2025",
      title: "Inspirator",
      description: "Una pagina web creada en react con fondo interectivo que te proporciona frases que la gente nunca a dicho",
      link: "https://github.com/Ephraim201/inspirator"
    },
    {
      id: 2,
      image: "gifs/lifedrawing.gif",
      date: "Marzo 2023",
      title: "Life Drawing",
      description: "Aplicación web que te permite crear dibujos vibrantes con difernetes tipos de intensidad",
      link: "https://github.com/Ephraim201/lifedrawing"
    }
  ];

  // Función de renderizado con efectos neón
  const renderProjects = () => {
    const projectsToRender = activeCategory === "unity" ? unityProjects : webProjects;
    
    return (
      <div className="grid md:grid-cols-2 gap-10">
        {projectsToRender.map(project => (
          <div 
            key={project.id}
            className="relative rounded-2xl p-6 space-y-4 w-full 
                        bg-gray-900 border-2 border-transparent
                        hover:border-red-500 hover:shadow-[0_0_15px_rgba(255,50,50,0.7)]
                        transition-all duration-300 group overflow-hidden neon-hover-effect"
          >
            {/* Efecto de luz neón interior */}
            <div className="absolute inset-0 rounded-xl 
                            opacity-0 group-hover:opacity-20
                            bg-[radial-gradient(circle_at_center,_rgba(255,50,50,0.8),_transparent_70%)]
                            transition-opacity duration-500 pointer-events-none" />

            {/* Contenido del proyecto */}
            <div className="relative z-10">
              <img 
                src={project.image} 
                alt={project.title} 
                className="rounded-lg w-full object-cover h-48 group-hover:brightness-110 transition-all" 
              />
              <p className="text-sm text-gray-400 group-hover:text-red-300">{project.date}</p>
              <h3 className="text-2xl font-semibold text-white group-hover:text-red-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-300 group-hover:text-gray-100">
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-400 hover:text-red-300 hover:underline text-base inline-block mt-2"
              >
                👉 Ver en GitHub
              </a>
              <hr className="border-t-2 border-gray-700 mt-4 group-hover:border-red-400" />
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section id="work" className="max-w-6xl mx-auto px-6 py-16">
      {/* Título con efecto neón */}
      <h2 className="text-3xl font-bold mb-6 text-white bg-gray-900 inline-block px-4 py-2 rounded-lg 
                     hover:text-red-400 hover:shadow-[0_0_10px_rgba(255,0,0,0.5)] transition-all">
        Proyectos <span className="neon-text"></span>
      </h2>
      
      {/* Pestañas de categorías con efectos */}
      <div className="flex justify-start mb-8"> 
        <button
          className={`px-8 py-3 font-medium text-lg rounded-l-lg transition-all duration-300 mr-2 ${
            activeCategory === "unity" 
              ? "bg-red-600 text-white shadow-[0_0_15px_rgba(255,0,0,0.8)]" 
              : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:shadow-[0_0_5px_rgba(255,255,255,0.3)]"
          }`}
          onClick={() => setActiveCategory("unity")}
        >
          Proyectos Unity
        </button>
        <button
          className={`px-8 py-3 font-medium text-lg rounded-r-lg transition-all duration-300 ${
            activeCategory === "web" 
              ? "bg-[#67E099] text-white shadow-[0_0_15px_rgba(0,150,255,0.8)]" 
              : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:shadow-[0_0_5px_rgba(255,255,255,0.3)]"
          }`}
          onClick={() => setActiveCategory("web")}
        >
          Proyectos Web
        </button>
      </div>
      
      {/* Renderizado de proyectos */}
      {renderProjects()}
    </section>
  );
};

export default Projects;