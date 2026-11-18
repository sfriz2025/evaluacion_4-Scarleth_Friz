import type { FC } from 'react';
import { Link } from 'react-router-dom';

export const NotFoundPage: FC = () => {
  return (
    <main>
      <h1>404 - Página no encontrada</h1>
      <p>La ruta que buscas no existe.</p>
      <Link to="/">Volver al inicio</Link>
    </main>
  );
};