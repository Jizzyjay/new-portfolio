# John Ekunola — Developer Portfolio

A single-page personal portfolio built with React and styled-components. It presents a bio, skill set, work experience, education, and a curated set of projects, with a working contact form powered by EmailJS. All content is data-driven from a single source of truth, so the site can be updated without touching component code.

**Live site:** https://new-portfolio-ochre-eight.vercel.app/

<p>
  <img alt="React" src="https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white">
  <img alt="styled-components" src="https://img.shields.io/badge/styled--components-5-DB7093?logo=styledcomponents&logoColor=white">
  <img alt="MUI" src="https://img.shields.io/badge/MUI-5-007FFF?logo=mui&logoColor=white">
  <img alt="Node" src="https://img.shields.io/badge/Node-24.x-339933?logo=nodedotjs&logoColor=white">
</p>

---

## Features

- **Single-page layout** with anchor-based navigation (`#about`, `#skills`, `#experience`, `#projects`, `#education`) and a responsive navbar.
- **Data-driven content** — bio, skills, experience, education, and projects all live in [src/data/constants.js](src/data/constants.js). Edit one file to update the whole site.
- **Themed design system** via a styled-components `ThemeProvider`, with dark and light palettes defined in [src/utils/Themes.js](src/utils/Themes.js).
- **Project detail modal** — clicking a project card opens a details view without leaving the page.
- **Contact form** wired to [EmailJS](https://www.emailjs.com/) for client-side email delivery, with an MUI snackbar confirmation.
- **Animated hero** using `typewriter-effect` and a custom SVG background animation.

## Tech stack

| Area | Choice |
| --- | --- |
| Framework | React 18 (Create React App / `react-scripts` 5) |
| Styling | styled-components, MUI (`@mui/material`, `@mui/icons-material`, `@mui/lab`) |
| Routing | react-router-dom 6 |
| Scroll / motion | react-scroll, typewriter-effect |
| Icons | react-icons, MUI icons |
| Email | `@emailjs/browser` |
| Deployment | gh-pages |

## Project structure

```
src/
├── App.js                  # Root: ThemeProvider, Router, section composition
├── index.js                # React entry point
├── data/
│   └── constants.js        # Single source of truth: Bio, skills, experiences, education, projects
├── utils/
│   └── Themes.js           # darkTheme / lightTheme palettes
├── components/
│   ├── Navbar/             # Top navigation + mobile menu
│   ├── HeroSection/        # Intro, typewriter roles, hero background
│   ├── HeroBgAnimation/    # Animated SVG background
│   ├── Skills/             # Skill categories grid
│   ├── Experience/         # Work history timeline
│   ├── Projects/           # Project grid
│   ├── ProjectDetails/     # Project modal
│   ├── Education/          # Education timeline
│   ├── Contact/            # EmailJS contact form
│   ├── Cards/              # Reusable Project / Experience / Education cards
│   └── Footer/             # Footer + social links
└── images/                 # Local image assets
```

## Getting started

### Prerequisites

- Node.js **24.x** (see [.nvmrc](.nvmrc); run `nvm use` if you use nvm)
- npm

### Install & run

```bash
# install dependencies
npm install

# start the dev server at http://localhost:3000
npm start
```

## Configuration

The contact form uses EmailJS. Create an account, then set up a **service**, a **template**, and grab your **public key**. The template should expect these field names, which match the form inputs in [src/components/Contact/index.js](src/components/Contact/index.js):

- `from_email`
- `from_name`
- `subject`
- `message`

For security, avoid hard-coding credentials in source. CRA exposes any variable prefixed with `REACT_APP_` at build time — add them to a local `.env` file (already git-ignored):

```bash
# .env.local
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

Then read them via `process.env.REACT_APP_*` inside the `sendForm` call.

## Available scripts

| Command | Description |
| --- | --- |
| `npm start` | Run the app in development mode with hot reload. |
| `npm run build` | Produce an optimized production build in `build/`. |
| `npm test` | Launch the test runner in watch mode. |
| `npm run deploy` | Build and publish to GitHub Pages (runs `predeploy` → `build` first). |

## Deployment

Deployment to GitHub Pages is configured via [gh-pages](https://github.com/tschaub/gh-pages) and the `homepage` field in [package.json](package.json):

```bash
npm run deploy
```

This builds the app and pushes the contents of `build/` to the `gh-pages` branch. The live site is also hosted on Netlify (see the link above).

## Customizing the content

Everything you see on the page comes from [src/data/constants.js](src/data/constants.js):

- `Bio` — name, roles (typewriter), description, and social links.
- `skills` — grouped skill categories with logo URLs.
- `experiences` — role, company, dates, description, and tags.
- `education` — schools, degrees, and dates.
- `projects` — title, description, image, tags, and repo/live links.

Update these arrays to make the portfolio your own; no component changes required.

## License

This project is personal and not currently licensed for reuse. Feel free to draw inspiration, but please don't redistribute the content (bio, images, project descriptions) as your own.
