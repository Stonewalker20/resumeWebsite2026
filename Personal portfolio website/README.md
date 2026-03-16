
# Personal Portfolio Website

This directory contains the React + Vite source for the portfolio frontend used by the `resumeWebsite2026` GitHub Pages site.

## Commands

- `npm install`
- `npm run dev`
- `npm run build`
- `npm run build:pages`

`npm run build` creates the multi-page production output in `dist-pages/`.

GitHub Pages deployment is handled by the repository workflow at `.github/workflows/deploy-pages.yml`, which uploads `dist-pages/` as the Pages artifact.

`npm run build:pages` is still available for local syncing into the repository root, but GitHub Pages should be configured to deploy through GitHub Actions rather than from the branch root.
  
