import { Link } from 'react-router-dom';
import './HomePage.css';

export function HomePage() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <img className="hero__image" src="/assets/img/IMG1.jpeg" alt="Retrato de Scarleth" width="400" height="400" />
      <div className="hero__content">
        <h1 className="hero__title" id="hero-title">Hola, soy Scarleth</h1>
        <p className="hero__lead">Estudiante de primer año de Ingeniería Civil en Informática en la UC Temuco.</p>
        <p>Estoy aprendiendo desarrollo web, bases de datos y herramientas para crear proyectos útiles.</p>
        <Link className="button" to="/contacto">Contáctame</Link>
      </div>
    </section>
  );
}
