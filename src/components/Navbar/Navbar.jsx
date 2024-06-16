import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';  // Certifique-se de que os estilos estão configurados corretamente
import Menu from '../../assets/menu.png';  // Verifique se o caminho está correto
import Minimize from '../../assets/minimize.png';  // Verifique se o caminho está correto

class Navbar extends Component {
  state = { clicked: false };

  toggleMenu = () => {
    this.setState(prevState => ({ clicked: !prevState.clicked }));
  }

  closeMenu = () => {
    this.setState({ clicked: false });
  }

  render() {
    return (
      <nav>
        <h1>
          <Link to="/EviteOgolpeWEB/">Evite o golpe</Link>
        </h1>

        <ul className={this.state.clicked ? 'navbar active' : 'navbar'}>
          <li>
            <Link to="/EviteOgolpeWEB/" className="active" onClick={this.closeMenu}>Home</Link>
          </li>
          <li>
            <Link to="/EviteOgolpeWEB/Quiz" onClick={this.closeMenu}>Quiz</Link>
          </li>
          <li>
            <Link to="/EviteOgolpeWEB/Tutorial" onClick={this.closeMenu}>Tutorial</Link>
          </li>
          <li>
            <Link to="/EviteOgolpeWEB/Informacoes" onClick={this.closeMenu}>Informações</Link>
          </li>
          <li>
            <a href="https://forms.gle/V4efQE8qwpShMZ1r7" target="_blank" rel="noopener noreferrer" onClick={this.closeMenu}>Formulário</a>
          </li>
        </ul>
        <div id="mobile" onClick={this.toggleMenu}>
          <img src={this.state.clicked ? Minimize : Menu} alt={this.state.clicked ? "Close Menu" : "Open in Menu"} />
        </div>
      </nav>
    );
  }
}

export default Navbar;
