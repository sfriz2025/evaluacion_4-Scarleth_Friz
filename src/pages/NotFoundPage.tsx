import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return <section className="page-section"><h1>Página no encontrada</h1><p>La dirección no corresponde a una vista del portafolio.</p><Link className="button" to="/">Volver al inicio</Link></section>;
}
