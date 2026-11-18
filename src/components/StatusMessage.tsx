import './StatusMessage.css';

interface StatusMessageProps { loading: boolean; error: string | null; onRetry: () => void; }

export function StatusMessage({ loading, error, onRetry }: StatusMessageProps) {
  if (loading) return <p className="status" role="status" aria-live="polite">Cargando repositorios...</p>;
  if (error) return <div className="status status--error" role="alert"><p>No se pudieron cargar los repositorios: {error}</p><button className="button" onClick={onRetry} type="button">Intentar de nuevo</button></div>;
  return null;
}
