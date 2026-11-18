import { useEffect, useState } from "react";
import type { GitHubRepo } from "../types";

export function useGitHubRepos(username: string) {
  const [repos, setRepos] = useState<GitHubRepo[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    const controller = new AbortController();

    async function loadRepos() {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `https://api.github.com/users/${encodeURIComponent(username)}/repos?sort=updated&per_page=6`,
          { signal: controller.signal }
        );

        if (!response.ok) {
          throw new Error(`GitHub respondió con el estado ${response.status}`);
        }

        const data = (await response.json()) as GitHubRepo[];
        setRepos(data);
      } catch (err: unknown) {
        if (err instanceof Error && err.name === "AbortError") return;

        setError(
          err instanceof Error ? err.message : "No se pudieron cargar los repositorios."
        );
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    void loadRepos();

    return () => controller.abort();
  }, [username, retryCount]);

  function retry() {
    setRetryCount((count) => count + 1);
  }

  return { repos, loading, error, retry };
}