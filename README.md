# Portfolio

My personal portfolio: a short bio, my services, and my recent projects, each with its own page of screenshots, demos and descriptions.

On the site you can:

- Download my CV
- Read about my skills, education and the tools I use
- Browse my projects and filter them by type
- Send me a message through the contact form (handled by the Web3Forms API)

The site uses a technical-drawing look: drafting-paper grid in light mode and a blueprint palette in dark mode, with a theme toggle in the header.

## Built with

- HTML, CSS and JavaScript (no build step)
- Tailwind CSS (browser build, pinned to 4.3.5)
- Google Fonts (Barlow family)
- Web3Forms API for the contact form

## Structure

| Path | What it holds |
| --- | --- |
| `index.html` | Home page: hero, about, services, work and contact |
| `*Details.html` | One page per project |
| `css/site.css` | Theme colors (light and dark), fonts and all shared components |
| `js/theme.js` | Applies the saved theme before the page renders |
| `js/site.js` | Shared header and footer, theme toggle and mobile menu |
| `js/projects.js` | Project list and project types shown in the Work section |
| `js/home.js` | Renders the Work grid and sends the contact form |

## Adding a project

1. Copy an existing project page (for example `WatchableDetails.html`) and update its content.
2. Add an entry to `PROJECTS` in `js/projects.js` with the title, type, summary, stack, image and page URL.
3. To add a new project type, add it to `PROJECT_TYPES` in the same file. Its filter button appears automatically.

## Running locally

Open `index.html` in a browser, or serve the folder (for example `python -m http.server`) and open `http://localhost:8000`.
