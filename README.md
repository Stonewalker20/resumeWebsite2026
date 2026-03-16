# Resume Website – 2026

This repository contains the source and deployed output for my GitHub Pages portfolio.

Live site:
`https://stonewalker20.github.io/resumeWebsite2026/tldr.html`

## Structure

- `Personal portfolio website/`
  React + Vite source for the portfolio frontend
- root `index.html`, `tldr.html`, `courseProject.html`, `hobbies.html`, `resume.html`, `experience.html`
  GitHub Pages deployment files generated from the React app
- `assets/` and `reports/`
  Built frontend assets and public PDF/report files used by the live site

## Development

From `Personal portfolio website/`:

1. `npm install`
2. `npm run dev`

## Publish To GitHub Pages

From `Personal portfolio website/`:

1. `npm run build:pages`

That command:

- builds the React frontend with the repository base path
- generates the Pages entry files for the existing public URLs
- syncs the built site into the repository root for GitHub Pages

## Public URLs

- `index.html` → home
- `tldr.html` → quick profile
- `courseProject.html` → projects
- `hobbies.html` → hobbies
- `resume.html` → resume
- `experience.html` → profile alias
