# Bitácora de uso de IA

Completar con el uso real de herramientas durante el desarrollo. No afirmar verificaciones que no se hayan realizado.

## 1. Herramientas utilizadas

Registrar herramienta: ChatGPT
modelo: GPT-5.6
versión utilizada: modelo de OpenAI

## 2. Propósito de uso

Utilicé ChatGPT (Codex) para interpretar los requerimientos y la rúbrica de la Evaluación N.º 4, revisar el estado del repositorio y organizar el trabajo pendiente. También solicité orientación sobre Git, la estructura de React y TypeScript, las rutas con React Router, el consumo de la API de GitHub, el manejo del estado, la metodología BEM y la documentación.

Después de pedir que se mejorara la estructura del proyecto según los requerimientos, Codex creó y organizó archivos en la raíz del repositorio para separar páginas, componentes, datos, tipos, servicios, hooks y contexto. También ayudó a diagnosticar la pantalla en blanco: explicó cómo iniciar Vite y comprobó que `npm run build` terminara correctamente.
## 3. Prompts representativos

como conecto este trabajo a este repositorio?

[https://github.com/sfriz2025/evaluacion_4-Scarleth_Friz.git](https://github.com/sfriz2025/evaluacion_4-Scarleth_Friz.git)

En github que es eso de subirlo por rama?

ahora que tengo listo el main tengo que crear una rama para subir mis avances verdad?
dice en alguna parte como deberia llamarse la ram o puedo ponerle el nombre que quiera?

Que lleva hasta ahora el proyecto y que faltaria?

En base a esto, que falta del trabajo? menciona las API que se deben usar?

"Actúa únicamente como un tutor técnico de arquitectura Frontend (React + TypeScript). Tienes estrictamente prohibido crear, modificar o sobrescribir archivos directamente en mi proyecto, y tampoco debes generar el proyecto completo de una sola vez.\
Vamos a trabajar paso a paso. Para cada requerimiento que te pida, entrégame únicamente el fragmento de código específico en el chat, explícame brevemente cómo funciona y espera mi confirmación antes de pasar al siguiente paso. Si necesitas ver uno de mis archivos actuales, pídemelo antes de asumir su contenido."

que llevamos?

cual de las API es mas facil de trabajar para este proyecto?

Explicame mas sobre esta API que no me convence del todo

Entonces iremos por GitHub, como deberiamos empezar=

como veo el arbol de carpetas??

esto me salio

PS C:\Users\Sfriz\OneDrive\Documentos\Desarrollo de Frostend\Evaluación_2> tree src /F\
Listado de rutas de carpetas para el volumen Acer\
El número de serie del volumen es D862-2631\
C:\USERS\SFRIZ\ONEDRIVE\DOCUMENTOS\DESARROLLO DE FROSTEND\EVALUACIÓN_2\SRC\
└───components\
PS C:\Users\Sfriz\OneDrive\Documentos\Desarrollo de Frostend\Evaluación_2>

PS C:\Users\Sfriz\OneDrive\Documentos\Desarrollo de Frostend\Evaluación_2> tree src /F\
Listado de rutas de carpetas para el volumen Acer\
El número de serie del volumen es D862-2631\
C:\USERS\SFRIZ\ONEDRIVE\DOCUMENTOS\DESARROLLO DE FROSTEND\EVALUACIÓN_2\SRC\
└───components\
PS C:\Users\Sfriz\OneDrive\Documentos\Desarrollo de Frostend\Evaluación_2>

PS C:\Users\Sfriz\OneDrive\Documentos\Desarrollo de Frostend\Evaluación_2> tree .\src /F\
Listado de rutas de carpetas para el volumen Acer\
El número de serie del volumen es D862-2631\
C:\USERS\SFRIZ\ONEDRIVE\DOCUMENTOS\DESARROLLO DE FROSTEND\EVALUACIÓN_2\SRC\
└───components\
PS C:\Users\Sfriz\OneDrive\Documentos\Desarrollo de Frostend\Evaluación_2> Get-ChildItem .\src\components -Recurse\
PS C:\Users\Sfriz\OneDrive\Documentos\Desarrollo de Frostend\Evaluación_2>

El número de serie del volumen es D862-2631\
C:\USERS\SFRIZ\ONEDRIVE\DOCUMENTOS\DESARROLLO DE FROSTEND\EVALUACIÓN_2\PORTAFOLIO-REACT\SRC\
&#x20;   App.tsx\
&#x20;   main.tsx\
&#x20;   vite-env.d.ts\
&#x20;   \
No existe ninguna subcarpeta \
\
PS C:\Users\Sfriz\OneDrive\Documentos\Desarrollo de Frostend\Evaluación_2>

esto esta en App.txs&#x20;

export default function App() {\
&#x20; return (\
&#x20;   \<main>\
&#x20;     \<h1>Portafolio en React\</h1>\
&#x20;     \<p>La nueva versión se construirá por secciones.\</p>\
&#x20;   \</main>\
&#x20; )\
}\

esto en package.json

listo, continuemos

ya cree hooks dentro de src y cree el archivo `useGitHubRepos.ts` , que sigue ahora?

este es mi usuario **XXXXXXX**

Ya abri la pagina y se ve bien, esta exactamente igual que antes cuando no tenia react

ya edite App.tsx

esto me salio al poner npm run dev

npm error path C:\Users\Sfriz\OneDrive\Documentos\Desarrollo de Frostend\Evaluación_2\package.json\
npm error errno -4058\
npm error enoent Could not read package.json: Error: ENOENT: no such file or directory, open 'C:\Users\Sfriz\OneDrive\Documentos\Desarrollo de Frostend\Evaluación_2\package.json'\
npm error enoent This is related to npm not being able to find a file.\
npm error enoent\
npm error A complete log of this run can be found in: C:\Users\Sfriz\AppData\Local\npm-cache\\\_logs\2026-11-17T19_35_51_294Z-debug-0.log\
PS C:\Users\Sfriz\OneDrive\Documentos\Desarrollo de Frostend\Evaluación_2>

asi luce


este es el css de la evaluacion 2, se supone que debe ser excactamente igual al verlo&#x20;

este es el index.html

\<!DOCTYPE html>
\<html lang="es">
\<head>
  \<meta charset="UTF-8">
  \<meta name="viewport" content="width=device-width, initial-scale=1">
  \<title>Scarleth Friz · Portafolio\</title>
  \<meta name="description" content="Portafolio de Scarleth Friz, estudiante de Ingeniería Civil en Informática.">
  \<link rel="stylesheet" href="assets/CSS/Style.css">
\</head>
\<body>
  *\<!-- Accesibilidad: permite saltar el menú con el teclado (se ve al presionar Tab) -->*
  \<a class="saltar" href="#contenido">Saltar al contenido\</a>

  \<header class="cabecera">
    \<p class="marca">Scarleth Friz\</p>
    \<nav aria-label="Navegación principal">
      \<ul>
        \<li>\<a href="#sobre-mi">Sobre mí\</a>\</li>
        \<li>\<a href="#trabajos">Trabajos\</a>\</li>
        \<li>\<a href="#contacto">Contacto\</a>\</li>
      \</ul>
    \</nav>
  \</header>

  \<main id="contenido">

    \<section id="sobre-mi" class="hero" aria-labelledby="titulo-sobre-mi">
      \<figure>
        \<img src="assets/img/IMG1.jpeg" alt="Foto de Scarleth" width="400" height="400">
      \</figure>
      \<article>
        \<h1 id="titulo-sobre-mi">Hola, soy Scarleth\</h1>
        \<p class="lead">Estudiante de primer año de Ingeniería Civil en Informática en la UC Temuco. Me interesa desarrollo web, bases de datos, etc.\</p>
        \<p>Estoy aprendiendo HTML, CSS y Git, y busco oportunidades para aplicar mis conocimientos en proyectos reales.\</p>
        \<a class="boton" href="#contacto">Contáctame\</a>
      \</article>
    \</section>

    \<section id="trabajos" aria-labelledby="titulo-trabajos">
      \<h2 id="titulo-trabajos">Trabajos del semestre\</h2>
      \<ul class="rejilla">
        \<li>\<article class="tarjeta">
          \<h3>\<a class="tarjeta-enlace" href="Proyectos/Proyecto2/index.html">Sitio de restaurante\</a>\</h3>
          \<p>Sitio multipágina con menú de platos e imágenes. Práctica de HTML semántico y CSS.\</p>
          \<ul class="etiquetas">
            \<li>HTML\</li>
            \<li>CSS\</li>
          \</ul>
        \</article>\</li>

        \<li>\<article class="tarjeta">
          \<h3>\<a class="tarjeta-enlace" href="Proyectos/Proyecto3/index.html">Guía de árboles\</a>\</h3>
          \<p>Página sobre tipos de árboles con imágenes y navegación por enlaces internos. Práctica de HTML.\</p>
          \<ul class="etiquetas">
            \<li>HTML\</li>
            \<li>CSS\</li>
          \</ul>
        \</article>\</li>
      \</ul>
    \</section>

    \<section id="contacto" aria-labelledby="titulo-contacto">
      \<h2 id="titulo-contacto">Contacto\</h2>
      \<p>Escríbeme y te responderé lo antes posible.\</p>
      *\<!-- Cada campo tiene su \<label> asociado con for/id (requisito de accesibilidad) -->*
      \<form action="mailto:tucorreo@ejemplo.com" method="post" enctype="text/plain">
        \<p class="campo">
          \<label for="nombre">Nombre\</label>
          \<input type="text" id="nombre" name="nombre" autocomplete="name" required>
        \</p>
        \<p class="campo">
          \<label for="correo">Correo electrónico\</label>
          \<input type="email" id="correo" name="correo" autocomplete="email" required>
        \</p>
        \<p class="campo">
          \<label for="mensaje">Mensaje\</label>
          \<textarea id="mensaje" name="mensaje" rows="5" required>\</textarea>
        \</p>
        \<button class="boton" type="submit">Enviar mensaje\</button>
      \</form>
    \</section>
  \</main>

  \<footer class="pie">
    \<p>© 2026 Scarleth Friz · Universidad Católica de Temuco\</p>
  \</footer>
\</body>
\</html>


El css esta en assets/CSS/Style.css esa es la ubicacion



esto es lo que hay que hacer.

guiame paso a paso para desarrollarlo, dime que archivos debo crear y cuales eliminar y ve dandome fragmentos de codigo para yo evaluar si ponerlo o no en el trabajo, no modifiques nada sin mi autorizacion.

No puedo hacer otro repositorio ya que el link ya esta subido y no se puede cambiar.

me sale esto que es largisimo.

esto me devuelve el primer comado

PS C:\Users\Sfriz\OneDrive\Documentos\Desarrollo de Frostend\Evaluación_2> git remote -v\
origin  https\://github.com/sfriz2025/evaluacion_4-Scarleth_Friz.git (fetch)\
origin  https\://github.com/sfriz2025/evaluacion_4-Scarleth_Friz.git (push)\
PS C:\Users\Sfriz\OneDrive\Documentos\Desarrollo de Frostend\Evaluación_2>&#x20;

el segundo me devuelve ese mensaje largo que envie anteriormente.

PS C:\Users\Sfriz\OneDrive\Documentos\Desarrollo de Frostend\Evaluación_2> git status --short --branch | Select-Object -First 15\
\## main...origin/main\
A  "P2_Presentacion_Oral_Mockup_Portafolio - Tagged.pdf"\
&#x20;m Proyectos/Proyecto2\
A  Uso_IA.md\
A  dist/assets/CSS/Style.css\
A  dist/assets/img/IMG1.jpeg\
A  dist/assets/img/IMG2.png\
A  dist/assets/img/IMG3.png\
A  dist/assets/img/IMG4.png\
A  dist/assets/index-BLHjRZe1.js\
A  dist/assets/index-ctIjSaOL.css\
A  dist/index.html\
A  node_modules/.bin/nanoid\
A  node_modules/.bin/nanoid.cmd\
A  node_modules/.bin/nanoid.ps1\
PS C:\Users\Sfriz\OneDrive\Documentos\Desarrollo de Frostend\Evaluación_2> git status --porcelain | Measure-Object -Line\
\
Lines Words Characters Property\
\----- ----- ---------- --------\
&#x20;2264                          \
\
\
PS C:\Users\Sfriz\OneDrive\Documentos\Desarrollo de Frostend\Evaluación_2>

PS C:\Users\Sfriz\OneDrive\Documentos\Desarrollo de Frostend\Evaluación_2> git ls-files node_modules | Select-Object -First 5\
node_modules/.bin/nanoid\
node_modules/.bin/nanoid.cmd\
node_modules/.bin/nanoid.ps1\
node_modules/.bin/rolldown\
node_modules/.bin/rolldown.cmd\
PS C:\Users\Sfriz\OneDrive\Documentos\Desarrollo de Frostend\Evaluación_2> git ls-files dist | Select-Object -First 5\
dist/assets/CSS/Style.css\
dist/assets/img/IMG1.jpeg\
dist/assets/img/IMG2.png\
dist/assets/img/IMG3.png\
dist/assets/img/IMG4.png\
PS C:\Users\Sfriz\OneDrive\Documentos\Desarrollo de Frostend\Evaluación_2>

entoces pongo esto?

`git rm -r --cached node_modules dist`

debe ser en ese repositorio. lo que esta en el repo es el primer avance que subi para que no se vea vacio.

esto esta.

la carpeta node tiene varias carpetas dentro

esto tiene gitignore&#x20;

node_modules/\
dist/

me salio algo demasiado largo


PS C:\Users\Sfriz\OneDrive\Documentos\Desarrollo de Frostend\Evaluación_2> git status --short --branch | Select-Object -First 20\
\## main...origin/main\
A  "P2_Presentacion_Oral_Mockup_Portafolio - Tagged.pdf"\
&#x20;m Proyectos/Proyecto2\
A  Uso_IA.md\
A  package-lock.json\
A  portafolio-react/dist/assets/index-Bcd21glb.js\
A  portafolio-react/dist/index.html\
A  portafolio-react/index.html\
A  portafolio-react/package-lock.json\
A  portafolio-react/package.json\
AM portafolio-react/src/App.tsx\
A  portafolio-react/src/main.tsx\
A  portafolio-react/src/vite-env.d.ts\
A  portafolio-react/tsconfig.app.json\
A  portafolio-react/tsconfig.json\
A  portafolio-react/tsconfig.node.json\
A  portafolio-react/vite.config.ts\
A  public/assets/CSS/Style.css\
A  public/assets/img/IMG1.jpeg\
A  public/assets/img/IMG2.png\
PS C:\Users\Sfriz\OneDrive\Documentos\Desarrollo de Frostend\Evaluación_2> git ls-files node_modules dist portafolio-react/node_modules | Select-Object -First 5\
PS C:\Users\Sfriz\OneDrive\Documentos\Desarrollo de Frostend\Evaluación_2>

esto sale&#x20;

PS C:\Users\Sfriz\OneDrive\Documentos\Desarrollo de Frostend\Evaluación_2> git rm -r --cached -- portafolio-react/dist\
rm 'portafolio-react/dist/assets/index-Bcd21glb.js'\
rm 'portafolio-react/dist/index.html'\
PS C:\Users\Sfriz\OneDrive\Documentos\Desarrollo de Frostend\Evaluación_2> git ls-files | Select-String '(^|/)node_modules/|(^|/)dist/'\
PS C:\Users\Sfriz\OneDrive\Documentos\Desarrollo de Frostend\Evaluación_2>

A  public/assets/CSS/Style.css\
A  public/assets/img/IMG1.jpeg\
A  public/assets/img/IMG2.png\
A  public/assets/img/IMG3.png\
A  public/assets/img/IMG4.png\
?? .gitignore\
?? portafolio-react/src/hooks/\
?? portafolio-react/src/types.ts\
PS C:\Users\Sfriz\OneDrive\Documentos\Desarrollo de Frostend\Evaluación_2>

A  public/assets/CSS/Style.css\
A  public/assets/img/IMG1.jpeg\
A  public/assets/img/IMG2.png\
A  public/assets/img/IMG3.png\
A  public/assets/img/IMG4.png\
?? .gitignore\
?? portafolio-react/src/hooks/\
?? portafolio-react/src/types.ts\
PS C:\Users\Sfriz\OneDrive\Documentos\Desarrollo de Frostend\Evaluación_2>

A  package-lock.json\
A  portafolio-react/index.html\
A  portafolio-react/package-lock.json\
A  portafolio-react/package.json\
AM portafolio-react/src/App.tsx\
A  portafolio-react/src/main.tsx\
A  portafolio-react/src/vite-env.d.ts\
A  portafolio-react/tsconfig.app.json\
A  portafolio-react/tsconfig.json\
A  portafolio-react/tsconfig.node.json\
A  portafolio-react/vite.config.ts\
A  public/assets/CSS/Style.css\
A  public/assets/img/IMG1.jpeg\
A  public/assets/img/IMG2.png\
A  public/assets/img/IMG3.png\
A  public/assets/img/IMG4.png\
?? .gitignore\
?? portafolio-react/src/hooks/\
?? portafolio-react/src/types.ts\
PS C:\Users\Sfriz\OneDrive\Documentos\Desarrollo de Frostend\Evaluación_2>

&#x20;   "vite": "latest"\
&#x20; },\
&#x20; "devDependencies": {\
&#x20;   "@types/react": "latest",\
&#x20;   "@types/react-dom": "latest",\
&#x20;   "typescript": "latest"\
&#x20; }\
}\
PS C:\Users\Sfriz\OneDrive\Documentos\Desarrollo de Frostend\Evaluación_2>


esto sale en el primer comando

package-lock.json:2:  "name": "portafolio-scarleth",\
package-lock.json:4:  "lockfileVersion": 3,\
package-lock.json:8:      "name": "portafolio-scarleth",\
package-lock.json:15:        "vite": "latest"\
package-lock.json:751:        "vite": "^8.0.0"\
package-lock.json:1335:        "vite": "bin/vite.js"\
\
\
PS C:\Users\Sfriz\OneDrive\Documentos\Desarrollo de Frostend\Evaluación_2>&#x20;

y esto en el segundo

portafolio-react\package.json:2:  "name": "portafolio-react",\
portafolio-react\package.json:6:  "scripts": {\
portafolio-react\package.json:7:    "dev": "vite",\
portafolio-react\package.json:13:    "react": "latest",\
portafolio-react\package.json:16:    "vite": "latest"\
portafolio-react\package.json:21:    "typescript": "latest"\
\
\
PS C:\Users\Sfriz\OneDrive\Documentos\Desarrollo de Frostend\Evaluación_2>

PS C:\Users\Sfriz\OneDrive\Documentos\Desarrollo de Frostend\Evaluación_2> Select-String -Path .\portafolio-react\package-lock.json -Pattern '"name"|"lockfileVersion"|"vite"'\
\
portafolio-react\package-lock.json:2:  "name": "portafolio-react",\
portafolio-react\package-lock.json:4:  "lockfileVersion": 3,\
portafolio-react\package-lock.json:8:      "name": "portafolio-react",\
portafolio-react\package-lock.json:15:        "vite": "latest"\
portafolio-react\package-lock.json:751:        "vite": "^8.0.0"\
portafolio-react\package-lock.json:1335:        "vite": "bin/vite.js"\
\
\
PS C:\Users\Sfriz\OneDrive\Documentos\Desarrollo de Frostend\Evaluación_2>

PS C:\Users\Sfriz\OneDrive\Documentos\Desarrollo de Frostend\Evaluación_2> git ls-files index.html ReadMe.md assets public src\
ReadMe.md\
assets/CSS/Style.css\
assets/img/IMG1.jpeg\
assets/img/IMG2.png\
assets/img/IMG3.png\
assets/img/IMG4.png\
index.html\
public/assets/CSS/Style.css\
public/assets/img/IMG1.jpeg\
public/assets/img/IMG2.png\
public/assets/img/IMG3.png\
public/assets/img/IMG4.png\
PS C:\Users\Sfriz\OneDrive\Documentos\Desarrollo de Frostend\Evaluación_2>

mira estos son los requerimientos porque parece que los olvidaste.

ya me canse.

mejora la estructura en base a lo que pidieron basandote en los requerimientos.

entonces ahora vuelve a analizar el proyecto en base a esta rubrica con la que se va a evaluar.

aqui se ve mejor la rubrica

ya puse las capturas de la img, que es lo que se debe hacer? vayamos paso a paso completando lo que falta?

hay un problema y es que al abrirla con google muestra la pagina en blanco, sin ningun error ni nada solo en blanco.

ahorra no abre

ahora saco una captura de como luce actualmente? y las pongo junto a las otras?

yap ahora de todo&#x20;





| Criterio                          | Peso | Nivel estimado | Qué veo ahora                                                                                                                                                                                                   |
| --------------------------------- | ---- | -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Fidelidad con la E2               | 15%  | **2/5**        | Se conservan algunos colores, contenido y la foto, pero la apariencia nueva aún necesita compararse y ajustarse contra la E2. Falta la captura requerida.                                                       |
| Componentes, props y TypeScript   | 12%  | **4/5**        | Hay componentes separados, datos y tipos. Para llegar al nivel máximo, asegúrate de poder explicar los tipos y decisiones del código.                                                                           |
| Rutas y navegación                | 10%  | **5/5**        | Están `/`, `/proyectos`, `/contacto` y la ruta 404; la navegación usa `NavLink`.                                                                                                                                |
| Consumo de API                    | 20%  | **4/5**        | Hay servicio, hook, estados y cancelación con `AbortController`. Falta evitar o cachear peticiones repetidas para alcanzar el descriptor máximo.                                                                |
| Gestión del estado                | 10%  | **5/5**        | El tema usa Context y el formulario mantiene estado controlado.                                                                                                                                                 |
| Interactividad recuperada de E2   | 8%   | **4/5**        | El formulario valida con campos requeridos y muestra confirmación. No envía realmente el mensaje ni presenta un flujo propio de error; según la revisión previa, la E2 no tenía JavaScript dinámico que migrar. |
| Accesibilidad y diseño responsivo | 8%   | **3/5**        | Hay HTML semántico, etiquetas asociadas, foco visible y estilos adaptables. Falta probar teclado, contraste y móvil; el tema oscuro merece revisar especialmente el contraste de los botones.                   |
| Flujo de trabajo Git              | 7%   | **1/5**        | El estado revisado seguía en `main`, con cambios preparados y sin el flujo de ramas y PRs exigido.                                                                                                              |
| Documentación                     | 10%  | **2/5**        | Hay README e inventario, pero falta `docs/captura-e2.png` y `uso_ia.md` aún es una plantilla, sin el registro real ni la reflexión.                                                                             |



como quedaria ahora?

listo ya corregi el nombre de las capturas.

## 4. Output recibido

### Propuestas

- Elegir **GitHub REST API** para mostrar tus repositorios públicos en el portafolio.
- Integrar la consulta en un hook de React, con estados de carga, error, reintento y lista vacía.
- Reutilizar el CSS y la estructura HTML de la Evaluación 2 para conservar el aspecto del portafolio.
- Mantener el trabajo paso a paso y compartir cada fragmento en el chat, sin modificar archivos por ti.

### Fragmentos que incorporaste

- Creaste `src/types.ts` con la interfaz `GitHubRepo`.
- Creaste `src/hooks/useGitHubRepos.ts` con la consulta a GitHub, `AbortController` y la función de reintento.
- Actualizaste `App.tsx` para consultar la cuenta `sfriz2025` y mostrar los estados y los repositorios. Confirmaste que la página carga datos reales de GitHub.
- Aún no confirmaste la copia del CSS a `portafolio-react/src/styles/Style.css` ni la importación en `src/main.tsx`.
- Todavía falta recuperar en React la estructura completa de la Evaluación 2: cabecera, presentación, trabajos, contacto y pie.


## 5. Ajustes, refactorización y verificación

Describir los cambios realizados por la estudiante y las verificaciones que efectivamente ejecutó.

Los cambios que realize fueron casi nulos ya que en su mayoria fueron eliminaciones de archivos que me causaban molestia, sobre todo por ser demasiados a lo cual al ser de una cantidad absurda termine acudiendo a la IA para que eliminara estos cientos de archivos que no servian.

## 6. Reflexión crítica final

Explicar aprendizajes, riesgos de deuda cognitiva y capacidad para defender el código.

Aprendi que mientras trabajs con la IA tienes que ir analizando y viendo lo que te entrega mientras trabajo en conjunto con ella, asegurandote que esta no haga cosas por su cuenta y tambien supervisando lo que vaya haciendo para que no elimine archivos que no se debia y tengas que recuperarlos de manera agobiante.
