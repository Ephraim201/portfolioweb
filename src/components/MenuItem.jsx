import { useState } from "react";

const MenuItem = ({ id, label, defaultImg, hoverImg, link, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  const content = (
    <div
      className="flex flex-col items-center cursor-pointer transition duration-200"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={isHovered ? hoverImg : defaultImg} alt={label} className="w-6 h-6" />
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

export default MenuItem;
