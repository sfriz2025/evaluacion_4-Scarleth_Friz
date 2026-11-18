import type { FC } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const getLinkClass = ({ isActive }: { isActive: boolean }): string =>
  isActive ? 'navbar__link navbar__link--active' : 'navbar__link';

export const Navbar: FC = () => {
  return (
    <header className="navbar">
      <nav className="navbar__nav" aria-label="Navegación principal">
        <NavLink to="/" end className={getLinkClass}>Inicio</NavLink>
        <NavLink to="/proyectos" className={getLinkClass}>Proyectos</NavLink>
        <NavLink to="/sobre-mi" className={getLinkClass}>Sobre mí</NavLink>
        <NavLink to="/contacto" className={getLinkClass}>Contacto</NavLink>
      </nav>
    </header>
  );
};