export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  updated_at: string;
}

export interface ProjectItem {
  id: string;
  titulo: string;
  descripcion: string;
  tecnologias: string[];
  urlRepo: string;
}

export type Theme = 'light' | 'dark';

export interface ContactFormValues {
  nombre: string;
  correo: string;
  mensaje: string;
}
