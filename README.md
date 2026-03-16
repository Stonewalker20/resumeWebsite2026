# Resume Website – 2026

This repository contains the source for my GitHub Pages portfolio.

Live site:
`https://stonewalker20.github.io/resumeWebsite2026/tldr.html`

## Structure

- `Personal portfolio website/`
  React + Vite source for the portfolio frontend
- `assets/` and `reports/`
  Legacy deployment assets and public PDF/report files still present in the repository

## Development

From `Personal portfolio website/`:

1. `npm install`
2. `npm run dev`

## GitHub Pages Deployment

GitHub Pages is deployed through GitHub Actions using:

- `.github/workflows/deploy-pages.yml`

The workflow:

- installs dependencies in `Personal portfolio website/`
- runs `npm run build`
- deploys `Personal portfolio website/dist-pages` as the Pages artifact

In repository settings, GitHub Pages should use:

- `Build and deployment` → `Source` → `GitHub Actions`

## Public URLs

- `index.html` → home
- `tldr.html` → quick profile
- `courseProject.html` → projects
- `hobbies.html` → hobbies
- `resume.html` → resume
- `experience.html` → profile alias
