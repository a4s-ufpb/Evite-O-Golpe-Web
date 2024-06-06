import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <h2>
        <Link to='/'>Evite O Golpe</Link>
      </h2>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/Quiz'>Quiz</Link>
        </li>
        <li>
          <Link to='/Tutorial'>Tutorial</Link>
        </li>
        <li>
          <a href="https://eviteogolpe.netlify.app/" target="_blank" rel="noopener noreferrer">Site</a>
        </li>
        <li>
          <a href="https://forms.gle/V4efQE8qwpShMZ1r7" target="_blank" rel="noopener noreferrer">Formulário</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
