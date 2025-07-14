import profileImg from "/images/foto.jpg";
import githubIcon from "/images/gi.png";
import linkedinIcon from "/images/linP.png";
import instagramIcon from "/images/insp.png";
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  // Función para manejar la descarga del CV
  const handleDownloadCV = () => {
    // Reemplaza 'ruta/a/tu/cv.pdf' con la ruta real de tu archivo CV
    const cvUrl = '/ruta/a/tu/cv.pdf';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'CV_William_Peña.pdf'; // Nombre del archivo al descargar
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="about"
      className="max-w-6xl mx-auto px-6 pt-20 pb-16 flex flex-col md:flex-row items-center md:items-start justify-between gap-10"
    >
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-4xl font-bold text-gray-800">William Peña</h1>
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
          className="text-xl text-gray-600 mt-2"
          repeat={Infinity}
        />

        <p className="mt-4 text-gray-700">
          Actualmente estoy enfocado en desarrollar <span className="text-blue-600 font-medium">sitios web</span><br /> para pequeñas empresas y emprendedores, buscando crear experiencias digitales accesibles que reflejen su identidad y conecten con su audiencia
        </p>
        <p className="mt-4 text-gray-700">
          Amo resolver problemas y diseñar soluciones que generen impacto 💡<br />
          <span className="text-blue-600 font-semibold">Sobre mí yo📖 👉</span>
        </p>
        
        {/* Botón de descarga de CV */}
        <button
          onClick={handleDownloadCV}
          className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors shadow-md hover:shadow-lg"
        >
          Descargar mi CV
        </button>

        <div className="flex justify-center md:justify-start mt-6 space-x-4">
          {/* GitHub */}
          <a href="https://github.com/Ephraim201" target="_blank" rel="noopener noreferrer">
            <div className="h-12 w-12">
              <img
                src={githubIcon}
                alt="GitHub"
                className="h-full w-full object-contain hover:scale-110 transition-transform"
              />
            </div>
          </a>
          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/william-peña/" target="_blank" rel="noopener noreferrer">
            <div className="h-12 w-12">
              <img
                src={linkedinIcon}
                alt="LinkedIn"
                className="h-full w-full object-contain hover:scale-110 transition-transform"
              />
            </div>
          </a>
          {/* Instagram */}
          <a href="https://www.instagram.com/elathou2/" target="_blank" rel="noopener noreferrer">
            <div className="h-12 w-12">
              <img
                src={instagramIcon}
                alt="Instagram"
                className="h-full w-full object-contain hover:scale-110 transition-transform"
              />
            </div>
          </a>
        </div>
      </div>
      <div className="flex-1 flex justify-center">
        <img
          src={profileImg}
          alt="Foto de perfil"
          className="rounded-lg border-4 border-black shadow-lg max-w-xs w-full"
        />
      </div>
    </section>
  );
};

export default Hero;