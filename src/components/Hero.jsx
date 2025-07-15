import profileImg from "/images/foto.jpg";
import githubIcon from "/images/gi.png";
import linkedinIcon from "/images/linP.png";
import instagramIcon from "/images/insp.png";
import { TypeAnimation } from 'react-type-animation';
import { useState } from 'react';

const Hero = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleDownloadCV = () => {
    const cvUrl = '/documents/CV2025.pdf';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'CV_William_Peña.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="max-w-6xl mx-auto px-6 pt-20 pb-16 flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-4xl font-bold text-white">William Peña</h1>
        <TypeAnimation
          sequence={[
            'Programador Web Creativo', 2000,
            '', 500,
            'Estudiando diseño de UX/UI', 2000,
            '', 500,
            'Apasionado por el código', 2000,
            '', 500,
            'Programador Junior', 2000,
            '', 500,
          ]}
          wrapper="p"
          speed={50}
          className="text-xl text-gray-300 mt-2"
          repeat={Infinity}
        />
        <p className="mt-4 text-gray-300">
          Actualmente estoy enfocado en desarrollar <span className="text-[#FF2A6D] font-medium">sitios web</span><br /> para pequeñas empresas y emprendedores.
        </p>
        <p className="mt-4 text-gray-300">
          Amo resolver problemas y diseñar soluciones que generen impacto 💡<br />
          <span className="text-[#FF2A6D] font-semibold">Sobre mí yo📖 👉</span>
        </p>
        
        <button
          onClick={handleDownloadCV}
          className="mt-4 bg-[#FF2A6D] hover:bg-[#FF2A6D]/90 text-white font-medium py-3 px-6 rounded-lg transition-all shadow-md hover:shadow-[0_0_15px_rgba(255,42,109,0.6)]"
        >
          Descargar mi CV
        </button>

        <div className="flex justify-center md:justify-start mt-6 space-x-6">
          <a href="https://github.com/Ephraim201" target="_blank" rel="noopener noreferrer" className="group">
            <div className="h-14 w-14 p-2 rounded-full bg-gray-800 hover:bg-[#FF2A6D]/10 transition-all duration-300 border border-transparent hover:border-[#FF2A6D]/50 relative overflow-hidden">
              <img
                src={githubIcon}
                alt="GitHub"
                className="h-full w-full object-contain group-hover:brightness-125 transition-all filter drop-shadow-none group-hover:drop-shadow-[0_0_8px_rgba(255,42,109,0.8)]"
              />
              <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 bg-[radial-gradient(circle_at_center,_rgba(255,42,109,0.8),_transparent_70%)] transition-opacity duration-500 pointer-events-none"></div>
            </div>
          </a>

          <a href="https://www.linkedin.com/in/william-peña/" target="_blank" rel="noopener noreferrer" className="group">
            <div className="h-14 w-14 p-2 rounded-full bg-gray-800 hover:bg-[#FF2A6D]/10 transition-all duration-300 border border-transparent hover:border-[#FF2A6D]/50 relative overflow-hidden">
              <img
                src={linkedinIcon}
                alt="LinkedIn"
                className="h-full w-full object-contain group-hover:brightness-125 transition-all filter drop-shadow-none group-hover:drop-shadow-[0_0_8px_rgba(255,42,109,0.8)]"
              />
              <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 bg-[radial-gradient(circle_at_center,_rgba(255,42,109,0.8),_transparent_70%)] transition-opacity duration-500 pointer-events-none"></div>
            </div>
          </a>

          <a href="https://www.instagram.com/elathou2/" target="_blank" rel="noopener noreferrer" className="group">
            <div className="h-14 w-14 p-2 rounded-full bg-gray-800 hover:bg-[#FF2A6D]/10 transition-all duration-300 border border-transparent hover:border-[#FF2A6D]/50 relative overflow-hidden">
              <img
                src={instagramIcon}
                alt="Instagram"
                className="h-full w-full object-contain group-hover:brightness-125 transition-all filter drop-shadow-none group-hover:drop-shadow-[0_0_8px_rgba(255,42,109,0.8)]"
              />
              <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 bg-[radial-gradient(circle_at_center,_rgba(255,42,109,0.8),_transparent_70%)] transition-opacity duration-500 pointer-events-none"></div>
            </div>
          </a>
        </div>
      </div>


      <div className="flex-1 flex justify-center">
        <div 
          className="w-64 h-80 cursor-pointer flip-container"
          onClick={() => setIsFlipped(!isFlipped)}
        >
          <div className={`flipper ${isFlipped ? 'flipped' : ''}`}>
            {/* Frente - Tu foto */}
            <div className="front bg-gray-900 rounded-lg border-4 border-[#FF2A6D] overflow-hidden shadow-xl">
              <img
                src={profileImg}
                alt="Foto de perfil"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Parte trasera - Información */}
            <div className="back bg-gray-900 rounded-lg p-6 border-4 border-[#FF2A6D] shadow-xl">
              <h3 className="text-xl font-bold text-[#FF2A6D] mb-4">Mis pasatiempos</h3>
              <ul className="space-y-3 text-white">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#FF2A6D] rounded-full mr-2"></span>
                  Jugar ajedrez
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#FF2A6D] rounded-full mr-2"></span>
                  Aprender cosas de optimizacion
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#FF2A6D] rounded-full mr-2"></span>
                  Cultivar plantas
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#FF2A6D] rounded-full mr-2"></span>
                  Pintar figuras
                </li>
              </ul>
              <div className="absolute bottom-4 right-4 text-[#FF2A6D] text-sm">
                Click para volver
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Hero;