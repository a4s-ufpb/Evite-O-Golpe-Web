import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import Menu from '../../assets/menu.png';  // Verifique se o caminho está correto
import Minimize from '../../assets/minimize.png';  // Verifique se o caminho está correto

function Navbar() {
  const [clicked, setClicked] = useState(false);
  const location = useLocation();  // Hook para obter o caminho atual

  const toggleMenu = () => {
    setClicked(!clicked);
  };

  const closeMenu = () => {
    setClicked(false);
  };

  // Função para verificar se a rota atual é a rota do link
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
          <Link to="/EviteOgolpeWEB/Quiz" className={isActive("/EviteOgolpeWEB/Quiz") ? "active" : ""} onClick={closeMenu}>Quiz</Link>
        </li>
        <li>
          <Link to="/EviteOgolpeWEB/Tutorial" className={isActive("/EviteOgolpeWEB/Tutorial") ? "active" : ""} onClick={closeMenu}>Tutorial</Link>
        </li>
        <li>
        <Link to="/EviteOgolpeWEB/Informacoes" className={isActive("/EviteOgolpeWEB/Informacoes") ? "active" : "inactive"} onClick={closeMenu}>Informações</Link>
        </li>
        <li>
          <a href="https://forms.gle/V4efQE8qwpShMZ1r7" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>Formulário</a>
        </li>
      </ul>
      <div id="mobile" onClick={toggleMenu}>
        <img src={clicked ? Minimize : Menu} alt={clicked ? "Close Menu" : "Open in Menu"} />
      </div>
    </nav>
  );
}

export default Navbar;
