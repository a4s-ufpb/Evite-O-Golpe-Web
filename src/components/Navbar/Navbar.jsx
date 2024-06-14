import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <h2>
        <Link to='/EviteOgolpeWEB/'>Evite O Golpe</Link>
      </h2>
      <ul>
        <li>
          <Link to='/EviteOgolpeWEB/'>Home</Link>
        </li>
        <li>
          <Link to='/EviteOgolpeWEB/Quiz'>Quiz</Link>
        </li>
        <li>
          <Link to='/EviteOgolpeWEB/Tutorial'>Tutorial</Link>
        </li>
        <li>
          <Link to='/EviteOgolpeWEB/Informacoes'>Informações</Link>
        </li>
        <li>
          <a href="https://forms.gle/V4efQE8qwpShMZ1r7" target="_blank" rel="noopener noreferrer">Formulário</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
