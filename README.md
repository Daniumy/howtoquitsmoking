# HowToQuitSmoking

> **Pre-AI project (2022).** This repo is a snapshot of a small website I built
> back then, kept for nostalgia and as a personal milestone. It is not a
> maintained product and it is not medical advice.

A tiny React site with **10 reasons to quit smoking**, **10 ways to quit
smoking**, and the US quitline phone numbers.

## Why this repo exists

Back in late 2022 I had an idea that felt obvious to me at the time: buy the
domain `howtoquitsmoking.net` (as I remember it — I'm no longer sure about the
exact TLD), put a simple site on it with useful content about quitting smoking,
and let Google send the traffic. The plan was something like *"keyword in the
domain + content = visits"*.

I did buy the domain and the site did go live, but it never became anything
bigger than that. What I completely underestimated was the actual hard part:
distribution. I had never even heard the word **SEO** at that point — I didn't
know what a backlink was, how indexing worked, or why a new site with no
authority does not simply appear in search results. Building the site took me a
weekend; getting anyone to find it was a problem I had no idea how to solve.

So the site sat there, got a handful of visits at best, and the domain
eventually expired. The project stayed here as my first "real" React app.

## What it taught me

- **Shipping end to end** — from `npm start` to a build that was actually
  deployed on a real domain.
- **The distribution problem** — the most valuable lesson. Building something
  is the easy half; getting people to use it is the other 90%.
- **Humbling contact with marketing** — a good domain name is not a growth
  strategy. I learned what SEO actually is *after* this project, by failing at it.
- **React fundamentals** — components, props, `useState`/`useEffect`, and a bit
  of `localStorage` to remember that the visitor already saw the welcome screen.

## What's inside

- A welcome screen shown once per visitor (stored in `localStorage`).
- Two toggleable lists: **10 reasons** and **10 ways** to quit smoking.
- US quitline numbers: English `1-800-784-8669`, Spanish `1-855-335-3569`.
- Plain Create React App setup (React 18, `react-scripts` 5), no backend,
  no analytics, no tracking.

## Why it matters less today

In 2022, building and shipping a small site like this was a legitimate learning
exercise: you had to know your way around a bundler, a component tree and a
deployment. Today an AI assistant can scaffold the same thing in a few minutes,
and the interesting part of the problem — being found, being trusted, being
useful — is still as hard as it ever was.

So this repo is not here to be useful. It's here as a marker of where I started,
and as a reminder that the code was never the bottleneck.

## Status

- **Not maintained.** Dependencies are from November 2022 and
  `create-react-app` is no longer the recommended way to start a React project.
- **No longer online.** The site was briefly live on its own domain; that domain
  has since expired and there is no deployment today.
- **Kept public** as an archive. Feel free to read it, fork it, or ignore it.

## Running it locally

```bash
npm install
npm start
```

Opens at [http://localhost:3000](http://localhost:3000). `npm run build`
produces a static build in `build/`.

## Disclaimer

The content is a personal list, written by a non-expert in 2022. It is **not
medical advice**. Quitline numbers were correct for the US at the time; verify
them before relying on them. If you are trying to quit smoking, talk to a
healthcare professional.

---

# HowToQuitSmoking (Español)

> **Proyecto pre-IA (2022).** Este repo es una foto de una pequeña web que hice
> en aquella época, conservada por nostalgia y como hito personal. No es un
> producto mantenido y no es consejo médico.

Una web pequeña en React con **10 razones para dejar de fumar**, **10 formas de
dejarlo** y los teléfonos de las líneas de ayuda de EE. UU.

## Por qué existe este repo

A finales de 2022 tuve una idea que en ese momento me parecía obvia: comprar el
dominio `howtoquitsmoking.net` (si no recuerdo mal — ya no estoy seguro del TLD
exacto), publicar una web sencilla con contenido útil sobre dejar de fumar y
dejar que Google trajera las visitas. El plan era algo así como *"palabra clave
en el dominio + contenido = visitas"*.

El dominio lo compré y la web llegó a estar online, pero nunca pasó de ahí. Lo
que subestimé por completo fue la parte realmente difícil: la distribución. En
ese momento ni siquiera sabía qué era el **SEO** — no sabía qué era un backlink,
cómo funcionaba la indexación ni por qué una web nueva sin autoridad no aparece
simplemente en los resultados de búsqueda. Montar la web me llevó un fin de
semana; conseguir que alguien la encontrara era un problema que no sabía ni por
dónde empezar.

Así que la web se quedó ahí, con un puñado de visitas como mucho, y el dominio
acabó caducando. El proyecto se quedó aquí como mi primera aplicación "de
verdad" en React.

## Qué me sirvió

- **Publicar de principio a fin** — desde `npm start` hasta un build que estuvo
  realmente desplegado en un dominio propio.
- **El problema de la distribución** — la lección más valiosa. Construir algo es
  la mitad fácil; conseguir que la gente lo use es el otro 90%.
- **Mi primer choque con el marketing** — un buen dominio no es una estrategia
  de crecimiento. Aprendí qué es el SEO *después* de este proyecto, fracasando
  con él.
- **Fundamentos de React** — componentes, props, `useState`/`useEffect` y un poco
  de `localStorage` para recordar que el visitante ya vio la pantalla de inicio.

## Qué contiene

- Una pantalla de bienvenida que se muestra una vez por visitante (guardada en
  `localStorage`).
- Dos listas conmutables: **10 razones** y **10 formas** de dejar de fumar.
- Teléfonos de las quitlines de EE. UU.: inglés `1-800-784-8669`, español
  `1-855-335-3569`.
- Un Create React App normal (React 18, `react-scripts` 5), sin backend, sin
  analítica y sin tracking.

## Por qué hoy importa menos

En 2022, montar y publicar una web pequeña como esta era un ejercicio de
aprendizaje legítimo: había que manejarse con un bundler, un árbol de
componentes y un despliegue. Hoy un asistente de IA puede generar lo mismo en
unos minutos, y la parte interesante del problema — que te encuentren, que
confíen en ti, que te resulte útil — sigue siendo igual de difícil que siempre.

Así que este repo no está aquí para ser útil. Está aquí como marca de dónde
empecé y como recordatorio de que el código nunca fue el cuello de botella.

## Estado

- **Sin mantenimiento.** Las dependencias son de noviembre de 2022 y
  `create-react-app` ya no es la forma recomendada de empezar un proyecto React.
- **Ya no está online.** La web estuvo un tiempo publicada en su propio dominio;
  ese dominio caducó y hoy no hay ningún despliegue.
- **Público como archivo.** Puedes leerlo, hacer fork o ignorarlo.

## Ejecutarlo en local

```bash
npm install
npm start
```

Abre en [http://localhost:3000](http://localhost:3000). `npm run build` genera
un build estático en `build/`.

## Aviso

El contenido es una lista personal escrita por alguien que no es experto, en
2022. **No es consejo médico.** Los teléfonos de ayuda eran correctos para
EE. UU. en su momento; verifícalos antes de usarlos. Si estás intentando dejar
de fumar, habla con un profesional sanitario.
