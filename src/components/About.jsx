// src/components/About.jsx
import DragZone from "./DragZone";
import DrawingCanvas from "./DrawingCanvas";

const About = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24" id="about">
      {/* PARRAFO 1 */}
      <div className="flex flex-col md:flex-row items-start gap-10">
        
        {/* Texto */}
        <div className="md:w-2/3 space-y-6 text-gray-800">
          <h1 className="text-3xl md:text-4xl font-semibold">
            Hola <span className="inline-block">👋</span>
          </h1>
          <p>
            Soy un <strong>Programador Junior</strong> centrado en el desarrollo web y la automatización de procesos. Me apasiona crear soluciones prácticas que mejoren la experiencia de usuario y optimicen flujos de trabajo.
          </p>
          <p>
            Actualmente trabajo como <strong>Junior Consultant en Raona</strong>, participando en análisis de procesos, documentación técnica y automatización de tareas para clientes corporativos.
          </p>
          <p>
            Antes trabajé en <strong>Tunstall Televida</strong>, donde di soporte técnico, reparé sistemas y automatizaba tareas internas con PowerShell. También he desarrollado proyectos personales usando tecnologías web y Python.
          </p>
          <p>
            Me formé en <strong>Desarrollo de Aplicaciones Multiplataforma</strong> (CFGS) y <strong>Sistemas Microinformáticos y Redes</strong> (CFGM), y recientemente completé formación técnica especializada en <strong>.NET</strong>.
          </p>
          <p>
            Manejo herramientas como <strong>PowerShell, Bash, Excel, SharePoint, Power BI</strong> y otras soluciones de <strong>Microsoft 365</strong>. Tengo conocimientos en redes y entornos <strong>Windows y Linux</strong>.
          </p>
          <p>
            Hablo <strong>español (nativo)</strong>, <strong>catalán (avanzado)</strong> e <strong>inglés (B2)</strong>.
          </p>
          <p>
            Me apasiona ayudar a pequeños negocios a tener presencia online mediante páginas web funcionales y atractivas. Me considero una persona creativa con ganas de aportar valor real a cada proyecto.
          </p>
          <p>
            ¡Gracias por pasarte por mi sitio!
          </p>
        </div>
        {/* Drag Zone interactiva */}
        <div className="md:w-1/3 space-y-4">
          <DragZone />
          <p className="text-sm text-gray-600">
            <span className="font-semibold">Zona interactiva:</span> Arrastra las imágenes dentro del recuadro para organizar tus proyectos favoritos.
          </p>
        </div>
        
      </div>
      <hr className="mt-12 border-t-2 border-gray-300" />
      
      {/* PARRAFO 2 - Con área de dibujo gestual */}
      <div className="flex flex-col md:flex-row-reverse items-start gap-10 mt-20">
        
        {/* Texto */}
        <div className="md:w-2/3 space-y-6 text-gray-800">
          <h2 className="text-2xl md:text-3xl font-semibold">Mi historia con el desarrollo</h2>
  <p>
    Empecé a desarrollar videojuegos en <strong>Unity</strong> por pura curiosidad, combinando
    mis intereses en arte digital y lógica matemática.
  </p>
  <p>
    Mi primer proyecto fue un <strong>juego tipo Bullet Hell</strong>, donde experimenté con físicas, 
    assets y patrones complejos de proyectiles. Sin embargo, durante el desarrollo, enfrenté un 
    problema crítico: el <strong>framerate caía drásticamente</strong> en dispositivos menos potentes. 
    Tras analizar el código, descubrí que el exceso de instancias de proyectiles era la causa. 
    Implementé <strong>object pooling</strong> y optimicé los scripts, logrando un rendimiento estable 
    sin sacrificar la experiencia visual. Fue una lección valiosa: un buen desarrollo no solo 
    requiere creatividad, sino también adaptación a los límites técnicos.
  </p>
  <p>
    Puedes ver este proyecto y otros trabajos en mi{" "}
    <a
      href="https://github.com/Ephraim201/BulletHellYeah"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 underline hover:text-blue-800 transition-colors"
    >
      repositorio de GitHub
    </a>. Desde entonces, sigo aprendiendo herramientas y técnicas nuevas, 
    siempre con el objetivo de crear experiencias <strong>intuitivas, pulidas y memorables</strong>.
  </p>
        </div>
        
        {/* Área de dibujo gestual con líneas vibrantes */}
        <div className="md:w-1/3 space-y-4">
          <DrawingCanvas />
          <p className="text-sm text-gray-600">
            <span className="font-semibold">Zona creativa:</span> ¡Escoge un color y dibuja!
          </p>
        </div>
      </div>
      
      <hr className="mt-12 border-t-2 border-gray-300" />
    </section>
  );
};

export default About;