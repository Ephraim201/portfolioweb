
import { useRef, useEffect } from "react";
import NeonCube from './NeonCube'



const About = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16 md:py-24" id="about">
      {/* Sección principal */}
      <div className="space-y-8 text-white">
        <h1 className="text-3xl md:text-4xl font-bold">
          Hola <span className="text-[#FF2A6D]">👋</span>
        </h1>
        
        <div className="space-y-6">
          <p className="text-lg leading-relaxed">
            Soy un <strong className="text-[#FF2A6D]">Programador Junior</strong> centrado en el desarrollo web y la automatización de procesos. Me apasiona crear soluciones prácticas que mejoren la experiencia de usuario y optimicen flujos de trabajo.
          </p>

          <div className="bg-gray-800/50 p-6 rounded-lg border-l-4 border-[#FF2A6D]">
            <h2 className="text-xl font-semibold mb-4">Experiencia profesional</h2>
            <ul className="space-y-4">
              <li>
                <strong className="text-[#FF2A6D]">Junior Consultant en Raona</strong> - Participación en análisis de procesos, documentación técnica y automatización de tareas para clientes corporativos.
              </li>
              <li>
                <strong className="text-[#FF2A6D]">Tunstall Televida</strong> - Soporte técnico, reparación de sistemas y automatización de tareas internas con PowerShell.
              </li>
            </ul>
          </div>

          <div className="bg-gray-800/50 p-6 rounded-lg border-l-4 border-[#67E099]">
            <h2 className="text-xl font-semibold mb-4">Formación</h2>
            <ul className="space-y-4">
              <li>
                <strong className="text-[#67E099]">Desarrollo de Aplicaciones Multiplataforma</strong> (CFGS)
              </li>
              <li>
                <strong className="text-[#67E099]">Sistemas Microinformáticos y Redes</strong> (CFGM)
              </li>
              <li>
                Formación técnica especializada en <strong className="text-[#67E099]">.NET</strong>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-800/50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4 text-[#FF2A6D]">Habilidades técnicas</h2>
              <ul className="space-y-2">
                <li>PowerShell, Bash</li>
                <li>Excel, SharePoint, Power BI</li>
                <li>Microsoft 365</li>
                <li>Redes (Windows/Linux)</li>
              </ul>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4 text-[#67E099]">Idiomas</h2>
              <ul className="space-y-2">
                <li>Español (nativo)</li>
                <li>Catalán (avanzado)</li>
                <li>Inglés (B2)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <NeonCube />

      {/* Historia con el desarrollo */}
      <div className="mt-20 space-y-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white">
          Mi historia con el desarrollo
        </h2>
        
        <div className="space-y-6 text-white">
          <p className="text-lg leading-relaxed">
            Empecé a desarrollar videojuegos en <strong className="text-[#FF2A6D]">Unity</strong> por pura curiosidad, combinando mis intereses en arte digital y lógica matemática.
          </p>

          <p className="text-lg leading-relaxed">
            Mi primer proyecto fue un <strong className="text-[#FF2A6D]">juego tipo Bullet Hell</strong>, donde experimenté con físicas, assets y patrones complejos de proyectiles. Durante el desarrollo, enfrenté un problema crítico: el <strong className="text-[#FF2A6D]">framerate caía drásticamente</strong> en dispositivos menos potentes.
          </p>

          <p className="text-lg leading-relaxed">
            Tras analizar el código, implementé <strong className="text-[#67E099]">object pooling</strong> y optimicé los scripts, logrando un rendimiento estable sin sacrificar la experiencia visual. Fue una lección valiosa sobre adaptación a límites técnicos.
          </p>

          <p className="text-lg leading-relaxed">
            Puedes ver este proyecto y otros trabajos en mi{" "}
            <a
              href="https://github.com/Ephraim201/BulletHellYeah"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FF2A6D] hover:underline transition-colors"
            >
              repositorio de GitHub
            </a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;