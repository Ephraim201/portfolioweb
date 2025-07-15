import logo from "/images/logo3.png";
import { useState } from "react";
import { 
  FaHouseChimney, 
  FaHouseUser,
  FaFolder,
  FaFolderOpen,
  FaPersonCircleQuestion,
  FaPersonCircleExclamation
} from "react-icons/fa6";

const MenuItemWithIcon = ({ id, label, defaultIcon, hoverIcon, link, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <li className="group">
      <div
        className="flex flex-col items-center cursor-pointer transition-all duration-300"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onClick}
      >
        <div className="w-6 h-6 flex items-center justify-center">
          {isHovered ? hoverIcon : defaultIcon}
        </div>
        <span className="text-sm text-white group-hover:text-[#FF2A6D] transition-colors">
          {label}
        </span>
      </div>
    </li>
  );
};

const Navbar = ({ onNavigate }) => {
  return (
    <nav className="fixed top-0 w-full bg-[#2C4055]/90 backdrop-blur-md shadow-lg z-50 border-b border-[#FF2A6D]/30">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div
          className="flex items-center space-x-3 cursor-pointer hover:brightness-110 transition-all"
          onClick={() => {
            onNavigate("home", { scrollToWork: false });
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <img src={logo} alt="Logo" className="h-19 w-32 object-contain" />
        </div>

        {/* Menú con iconos blancos y efectos */}
        <ul className="flex space-x-8 items-center">
          <MenuItemWithIcon
            id="home"
            label="Home"
            defaultIcon={<FaHouseChimney size={20} className="text-white hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]" />}
            hoverIcon={<FaHouseUser size={20} className="text-[#FF2A6D] drop-shadow-[0_0_8px_rgba(255,42,109,0.8)]" />}
            onClick={() => {
              onNavigate("home", { scrollToWork: false });
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          />
          
          <MenuItemWithIcon
            id="work"
            label="Work"
            defaultIcon={<FaFolder size={20} className="text-white hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]" />}
            hoverIcon={<FaFolderOpen size={20} className="text-[#FF2A6D] drop-shadow-[0_0_8px_rgba(255,42,109,0.8)]" />}
            onClick={() => onNavigate("home", { scrollToWork: true })}
          />
          
          <MenuItemWithIcon
            id="about"
            label="About"
            defaultIcon={<FaPersonCircleQuestion size={20} className="text-white hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]" />}
            hoverIcon={<FaPersonCircleExclamation size={20} className="text-[#FF2A6D] drop-shadow-[0_0_8px_rgba(255,42,109,0.8)]" />}
            onClick={() => onNavigate("about")}
          />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;