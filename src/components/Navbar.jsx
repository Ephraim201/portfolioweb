import logo from "/images/logo.png";
import MenuItem from "./MenuItem";
// Import React Icons
import { FaHouseChimney, FaHouseUser } from "react-icons/fa6";
import { FaFolder, FaFolderOpen } from "react-icons/fa";
import { FaPersonCircleQuestion, FaPersonCircleExclamation } from "react-icons/fa6";
import { HiOutlinePencil, HiOutlinePencilAlt } from "react-icons/hi";
import { useState } from "react";

// MenuItemWithIcon component that accepts React Icon components
const MenuItemWithIcon = ({ id, label, defaultIcon, hoverIcon, link, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const content = (
    <div
      className="flex flex-col items-center cursor-pointer transition duration-200"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-6 h-6 flex items-center justify-center">
        {isHovered ? hoverIcon : defaultIcon}
      </div>
      <span className="text-sm">{label}</span>
    </div>
  );
  
  if (link) {
    return (
      <a href={link} onClick={onClick}>
        {content}
      </a>
    );
  }
  
  return <div onClick={onClick}>{content}</div>;
};

const Navbar = ({ onNavigate }) => {
  return (
    <nav className="fixed top-0 w-full bg-white/70 backdrop-blur shadow z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div
          className="flex items-center space-x-3 cursor-pointer"
          onClick={() => {
            onNavigate("home", { scrollToWork: false });
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <img src={logo} alt="Logo" className="h-19 w-32 object-contain" />
        </div>
        <ul className="flex space-x-6 text-gray-700 font-medium items-center">
          {/* Home with React Icons */}
          <MenuItemWithIcon
            id="home"
            label="Home"
            defaultIcon={<FaHouseChimney size={20} className="text-gray-700" />}
            hoverIcon={<FaHouseUser size={20} className="text-gray-900" />}
            onClick={() => {
              onNavigate("home", { scrollToWork: false });
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          />
          
          {/* Work with React Icons */}
          <MenuItemWithIcon
            id="work"
            label="Work"
            defaultIcon={<FaFolder size={20} className="text-gray-700" />}
            hoverIcon={<FaFolderOpen size={20} className="text-gray-900" />}
            onClick={() => onNavigate("home", { scrollToWork: true })}
          />
          
          {/* About me with React Icons */}
          <MenuItemWithIcon
            id="about"
            label="About me"
            defaultIcon={<FaPersonCircleQuestion size={20} className="text-gray-700" />}
            hoverIcon={<FaPersonCircleExclamation size={20} className="text-gray-900" />}
            onClick={() => onNavigate("about")}
          />
          
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;