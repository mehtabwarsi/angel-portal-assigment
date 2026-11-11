# Ascencia Business School Website

A React website built with Vite. It presents Ascencia Business School, its programs, campuses, student stories, events, and contact information.

## View the deployed site

[Open the deployed website](https://angel-portal-assigment-f6ie8u1dx-mehtabwarsis-projects.vercel.app/)

If the link takes you to a Vercel login page, the deployment may be restricted to authorized users. Sign in with an account that has access, or run the project locally using the steps below.

## Run the project locally

### Prerequisites

- [Node.js](https://nodejs.org/) (which includes npm)
- The project source code on your computer

### Start the development server

Open a terminal in the project folder and run:

```bash
npm install
npm run dev
```

Vite prints a local URL in the terminal, usually <http://localhost:5173/>. Open it in your browser. The development server updates the page as you edit the source files.

### Build and preview

To create and preview a production build:

```bash
npm run build
npm run preview
```

The preview command prints the local URL to open.

### Lint

```bash
npm run lint
```

## Project structure

- `src/App.jsx` — page content, navigation, and React components
- `src/App.css` and `src/index.css` — styles
- `src/main.jsx` — React application entry point
- `public/assets/` — images and other static assets
- `vite.config.js` — Vite configuration
- `vercel.json` — Vercel routing configuration

The site includes home, presentation, and contact views. The contact form is a demo: it does not send or store form data. Use the official Ascencia contact link on the page to submit a real request.
