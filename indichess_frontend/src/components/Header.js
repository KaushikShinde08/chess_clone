import React from "react";
import { FaUser, FaRegEnvelope, FaCog, FaSun, FaMoon } from "react-icons/fa";  // Import icons
import "./component-styles/Header.css";
import { useTheme } from "../context/ThemeContext";

const Header = ({ username }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="header">
      {/* Left side: Hello User */}
      <div className="left">
        <p>Hello, User {username}</p>
      </div>

      {/* Right side: Icons */}
      <div className="right">
        <div className="theme-toggle" onClick={toggleTheme} title="Toggle Theme">
          {theme === 'light' ? <FaMoon size={20} /> : <FaSun size={20} />}
        </div>
        <FaUser size={20} />
        <FaRegEnvelope size={20} />
        <FaCog size={20} />
      </div>
    </div>
  );
};

export default Header;
