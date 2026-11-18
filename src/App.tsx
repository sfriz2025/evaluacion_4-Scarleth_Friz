import { useRef } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { ContactPage } from './pages/ContactPage';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { ProjectsPage } from './pages/ProjectsPage';
import './App.css';
import './components/Button.css';

export default function App() {
  const mainRef = useRef<HTMLElement | null>(null);

  return (
    <div className="app">
      <button className="skip-link" onClick={() => mainRef.current?.focus()} type="button">
        Saltar al contenido
      </button>
      <Navbar />
      <main className="main" id="main-content" ref={mainRef} tabIndex={-1}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/proyectos" element={<ProjectsPage />} />
          <Route path="/contacto" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
