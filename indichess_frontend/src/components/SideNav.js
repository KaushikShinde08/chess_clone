import React from 'react';
import "./component-styles/SideNav.css";
import { FaChessPawn, FaSun, FaMoon, FaCog, FaBars } from 'react-icons/fa';  // Icons for the menu items
import { useTheme } from "../context/ThemeContext";

const SideNav = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="side-nav">
      <div className="logo">
        <h2>IndiChess</h2>
        <FaChessPawn size={40} style={{ color: 'var(--accent-color)' }} />
      </div>

      <div className="menu">
        <button className="menu-item">
          <FaChessPawn size={20} />
          Play
        </button>
      </div>

      <div className="settings">
        <button className="settings-item" onClick={toggleTheme}>
          {theme === 'light' ? <FaMoon size={20} /> : <FaSun size={20} />}
          {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        </button>
        <button className="settings-item">
          <FaBars size={20} />
          Collapse
        </button>
        <button className="settings-item">
          <FaCog size={20} />
          Settings
        </button>
        <button className="settings-item">
          <FaBars size={20} />
          Support
        </button>
      </div>
    </div>
  );
};

export default SideNav;
