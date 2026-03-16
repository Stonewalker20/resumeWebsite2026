import { cpSync, existsSync, mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const appRoot = path.resolve(__dirname, "..");
const repoRoot = path.resolve(appRoot, "..");
const buildDir = path.join(appRoot, "dist-pages");

if (!existsSync(buildDir)) {
  throw new Error(`Build output not found: ${buildDir}`);
}

const cleanupTargets = [
  "assets",
  "reports",
  "index.html",
  "tldr.html",
  "courseProject.html",
  "hobbies.html",
  "resume.html",
  "experience.html",
  "404.html",
  "script.js",
  "styles.css",
  "resumeWebsite_Stonecipher.txt",
  "Cordell_Stonecipher_Resume.pdf",
  ".nojekyll",
];

for (const target of cleanupTargets) {
  const fullPath = path.join(repoRoot, target);
  if (existsSync(fullPath)) {
    rmSync(fullPath, { recursive: true, force: true });
  }
}

for (const entry of readdirSync(buildDir)) {
  cpSync(path.join(buildDir, entry), path.join(repoRoot, entry), { recursive: true });
}

mkdirSync(path.join(repoRoot, "reports"), { recursive: true });
writeFileSync(path.join(repoRoot, ".nojekyll"), "");
