import { Link } from 'react-router-dom'
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
        <h2>
            <Link to={'/'}>Teste</Link>
        </h2>
        <ul>
            <li>
                <Link to={'/'}>Home</Link>
            </li>
            <li>
                <Link to={'/Quiz'}>Quiz</Link>
            </li>
            <li>
                <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">Site</a>
            </li>
            <li>
                <a href="https://forms.gle/V4efQE8qwpShMZ1r7" target="_blank" rel="noopener noreferrer">Formulário</a>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar