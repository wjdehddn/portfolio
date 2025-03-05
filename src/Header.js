import { useState } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaBloggerB } from "react-icons/fa";
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
      setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="header-wrap">
        {/* 왼쪽 - GitHub & Velog */}
        <div className="left-links">
          <a href="https://github.com/wjdehddn" target="_blank" rel="noopener noreferrer" className="icon-link">
            <FaGithub className="icon" />
          </a>
          <a href="https://velog.io/@wjdehddn/posts" target="_blank" rel="noopener noreferrer" className="icon-link">
            <FaBloggerB className="icon" />
          </a>
        </div>

        <button className={`menu-button ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          {menuOpen ? '✖' : '☰'}
        </button>
                            
        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;