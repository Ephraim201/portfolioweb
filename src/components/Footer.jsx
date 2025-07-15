
const Footer = () => {
  return (
    <footer className="bg-gray-900/80 py-8 mt-20 font-mono">
      <div className="max-w-6xl mx-auto px-6">
        <div className="border-l-4 border-[#FF2A6D] pl-4 py-2">
          <p className="text-[#67E099]">$ npm run portafolio-super-mega-increible-😎</p>
          <p className="text-gray-400"> Portfolio v2.0 compiled successfully</p>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center mt-6">
          <p className="text-gray-500 text-sm">
            Built with: React, Tailwind, Three.js
          </p>
          <p className="text-gray-400 text-sm mt-4 md:mt-0">
            Last deploy: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;