import type { ProjectItem } from '../types';
import './ProjectCard.css';

export function ProjectCard({ project }: { project: ProjectItem }) {
  return (
    <article className="project-card">
      <h2 className="project-card__title"><a href={project.urlRepo} target="_blank" rel="noreferrer">{project.titulo}</a></h2>
      <p className="project-card__description">{project.descripcion}</p>
      <ul className="project-card__tags" aria-label="Tecnologías">
        {project.tecnologias.map((technology) => <li className="project-card__tag" key={technology}>{technology}</li>)}
      </ul>
    </article>
  );
}
