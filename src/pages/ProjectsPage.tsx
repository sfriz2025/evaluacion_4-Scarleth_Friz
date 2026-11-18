import { ProjectCard } from '../components/ProjectCard';
import { StatusMessage } from '../components/StatusMessage';
import { portfolioProjects } from '../data/portfolioData';
import { useFetchApi } from '../hooks/useFetchApi';
import type { GitHubRepo } from '../types';
import './ProjectsPage.css';

const API_URL = 'https://api.github.com/users/sfriz2025/repos?sort=updated&per_page=6';

export function ProjectsPage() {
  const { data: repos, loading, error, retry } = useFetchApi<GitHubRepo[]>(API_URL);

  return (
    <section className="page-section" aria-labelledby="projects-title">
      <h1 id="projects-title">Proyectos</h1>
      <div className="projects__grid">{portfolioProjects.map((project) => <ProjectCard key={project.id} project={project} />)}</div>
      <h2>Repositorios de GitHub</h2>
      <StatusMessage loading={loading} error={error} onRetry={retry} />
      {!loading && !error && repos?.length === 0 && <p role="status">No se encontraron repositorios públicos.</p>}
      {!loading && !error && repos && repos.length > 0 && (
        <div className="projects__grid" aria-label="Repositorios públicos">
          {repos.map((repo) => (
            <article className="project-card" key={repo.id}>
              <h3 className="project-card__title"><a href={repo.html_url} target="_blank" rel="noreferrer">{repo.name}</a></h3>
              <p className="project-card__description">{repo.description ?? 'Sin descripción.'}</p>
              <p>Lenguaje: {repo.language ?? 'No especificado'} · Estrellas: {repo.stargazers_count}</p>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
