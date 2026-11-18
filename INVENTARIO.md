# Inventario de migración E2 → React

| Elemento | Origen E2 | Destino React | Estado |
|---|---|---|---|
| Presentación y retrato | `index.html`, `assets/img/IMG1.jpeg` | `src/pages/HomePage.tsx` | Estructurado; revisar fidelidad visual |
| Proyectos del semestre | Secciones de trabajos de E2 | `src/data/portfolioData.ts`, `src/components/ProjectCard.tsx` | Datos tipados; verificar URLs de repositorios |
| Contacto | Formulario HTML de E2 | `src/pages/ContactPage.tsx` | Formulario controlado; falta conectar envío real |
| Estilos | `assets/CSS/Style.css` | `src/index.css` y CSS de componentes | BEM aplicado en clases nuevas; comparar visualmente |
| Interactividad E2 | La E2 revisada no contiene JavaScript dinámico | Tema y formulario controlados por React | Funciones nuevas; no se declara como migración |
| Captura comparativa | Portafolio E2 | `docs/captura-e2.png` | Pendiente de agregar |

El código original de la E2 está en su repositorio de referencia. La copia local de su página de entrada se conserva en `docs/e2-reference/index.html`.
