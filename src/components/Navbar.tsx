import { NavLink } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import './Navbar.css';

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `header__link${isActive ? ' header__link--active' : ''}`;

  return (
    <header className="header">
      <NavLink className="header__brand" to="/">Scarleth Friz</NavLink>
      <nav className="header__nav" aria-label="Navegación principal">
        <ul className="header__list">
          <li><NavLink className={linkClass} end to="/">Inicio</NavLink></li>
          <li><NavLink className={linkClass} to="/proyectos">Proyectos</NavLink></li>
          <li><NavLink className={linkClass} to="/contacto">Contacto</NavLink></li>
        </ul>
      </nav>
      <button className="button button--secondary" onClick={toggleTheme} type="button" aria-label={`Cambiar a tema ${theme === 'light' ? 'oscuro' : 'claro'}`}>
        {theme === 'light' ? 'Tema oscuro' : 'Tema claro'}
      </button>
    </header>
  );
}
