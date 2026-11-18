# Portafolio de Scarleth Friz

Portafolio profesional desarrollado con React, TypeScript y Vite. Conserva la identidad visual de la E2 y organiza las vistas como una SPA.

## Evidencia de la E2

La captura comparativa se agregará en [`docs/captura-e2.png`](docs/captura-e2.png). La copia local del HTML de referencia se conserva en `docs/e2-reference/index.html`.

## API

- **Servicio:** GitHub REST API pública.
- **URL:** `https://api.github.com/users/sfriz2025/repos?sort=updated&per_page=6`
- **Parámetros:** `sort=updated` ordena por última actualización; `per_page=6` limita la respuesta a seis repositorios.
- **Respuesta esperada:** arreglo de repositorios con `id`, `name`, `description`, `html_url`, `language`, `stargazers_count` y `updated_at`.
- **Motivo:** permite mostrar proyectos públicos reales sin exponer credenciales.

## Ejecución

1. `npm install`
2. `npm run dev`
3. `npm run build`
4. `npm run preview`

## Accesibilidad

Se debe completar la revisión de navegación por teclado o Lighthouse antes de entregar, incluyendo comprobación visual a 320 px.
