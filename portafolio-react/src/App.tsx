import { useGitHubRepos } from "./hooks/useGitHubRepos";

export default function App() {
  const { repos, loading, error, retry } = useGitHubRepos("sfriz2025");

  return (
    <main>
      <h1>Mis repositorios de GitHub</h1>
      {loading && <p role="status">Cargando repositorios...</p>}
      {error && (
        <div role="alert">
          <p>No se pudieron cargar los repositorios: {error}</p>
          <button onClick={retry}>Intentar de nuevo</button>
        </div>
      )}
      {!loading && !error && repos?.length === 0 && <p>No se encontraron repositorios públicos.</p>}
      {!loading && !error && repos && repos.length > 0 && (
        <ul>
          {repos.map((repo) => (
            <li key={repo.id}>
              <h2><a href={repo.html_url} target="_blank" rel="noreferrer">{repo.name}</a></h2>
              <p>{repo.description ?? "Sin descripción."}</p>
              <p>Lenguaje: {repo.language ?? "No especificado"}</p>
              <p>Estrellas: {repo.stargazers_count}</p>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
