import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import menuSuspenso from '../../assets/menu-suspenso.png'; // Verifique se o caminho está correto.

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prevState => !prevState); // Alterna o estado de isOpen
  };

  const closeMenu = () => {
    setIsOpen(false); // Define isOpen como false, fechando o menu mobile
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.desktopNavbar}>
        <h2>
          <Link to='/EviteOgolpeWEB/'>Evite O Golpe</Link>
        </h2>
        <ul>
          <li><Link to='/EviteOgolpeWEB/'>Home</Link></li>
          <li><Link to='/EviteOgolpeWEB/Quiz'>Quiz</Link></li>
          <li><Link to='/EviteOgolpeWEB/Tutorial'>Tutorial</Link></li>
          <li><Link to='/EviteOgolpeWEB/Informacoes'>Informações</Link></li>
          <li><a href="https://forms.gle/V4efQE8qwpShMZ1r7" target="_blank" rel="noopener noreferrer">Formulário</a></li>
        </ul>
      </div>
      <div className={styles.mobileNavbar}>
        <h2>
          <Link to='/EviteOgolpeWEB/' className={styles.active} onClick={toggleMenu}>Evite O Golpe</Link>
        </h2>
        <button className={styles.icon} onClick={toggleMenu}>
          <img src={menuSuspenso} alt="Menu" />
        </button>
        <div id="myLinks" style={{ display: isOpen ? 'block' : 'none' }}>
          <Link to='/EviteOgolpeWEB/' onClick={closeMenu}>Home</Link>
          <Link to='/EviteOgolpeWEB/Quiz' onClick={closeMenu}>Quiz</Link>
          <Link to='/EviteOgolpeWEB/Tutorial' onClick={closeMenu}>Tutorial</Link>
          <Link to='/EviteOgolpeWEB/Informacoes' onClick={closeMenu}>Informações</Link>
          <a href="https://forms.gle/V4efQE8qwpShMZ1r7" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>Formulário</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
