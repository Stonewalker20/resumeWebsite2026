import { execSync } from 'node:child_process'
import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

const commitCount = Number.parseInt(execSync('git rev-list --count HEAD', { encoding: 'utf8' }).trim(), 10)

export default defineConfig({
  base: '/resumeWebsite2026/',
  define: {
    __COMMIT_COUNT__: JSON.stringify(commitCount),
  },
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
  build: {
    outDir: 'dist-pages',
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        tldr: path.resolve(__dirname, 'tldr.html'),
        courseProject: path.resolve(__dirname, 'courseProject.html'),
        hobbies: path.resolve(__dirname, 'hobbies.html'),
        resume: path.resolve(__dirname, 'resume.html'),
        experience: path.resolve(__dirname, 'experience.html'),
        notFound: path.resolve(__dirname, '404.html'),
      },
    },
  },
})
