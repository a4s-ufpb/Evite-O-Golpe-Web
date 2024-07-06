import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import Menu from '../../assets/menu.png';  
import Minimize from '../../assets/minimize.png';  

function Navbar() {
  const [clicked, setClicked] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setClicked(!clicked);
  };

  const closeMenu = () => {
    setClicked(false);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav>
      <h1>
        <Link to="/EviteOgolpeWEB/">Evite o golpe</Link>
      </h1>

      <ul className={clicked ? 'navbar active' : 'navbar'}>
        <li>
          <Link to="/EviteOgolpeWEB/" className={isActive("/EviteOgolpeWEB/") ? "active" : "notActive"} onClick={closeMenu}>Home</Link>
        </li>
        <li>
          <Link to="/EviteOgolpeWEB/InformacaoUsuario" className={isActive("/EviteOgolpeWEB/InformacaoUsuario") ? "active" : ""} onClick={closeMenu}>Quiz</Link>
        </li>
        <li>
          <Link to="/EviteOgolpeWEB/Tutorial" className={isActive("/EviteOgolpeWEB/Tutorial") ? "active" : ""} onClick={closeMenu}>Tutorial</Link>
        </li>
        <li>
        <Link to="/EviteOgolpeWEB/Informacoes" className={isActive("/EviteOgolpeWEB/Informacoes") ? "active" : "inactive"} onClick={closeMenu}>Mais Informações</Link>
        </li>
        <li>
          <a href="https://bit.ly/form_evite_o_golpe" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>Feedback</a>
        </li>
      </ul>
      <div id="mobile" onClick={toggleMenu}>
        <img src={clicked ? Minimize : Menu} alt={clicked ? "Close Menu" : "Open in Menu"} className={clicked ? "minimize-style" : "menu-style"}/>
      </div>
    </nav>
  );
}

export default Navbar;
