// Publica dist/renato-tattoo/browser na branch gh-pages (GitHub Pages).
import { execSync } from 'node:child_process';
import { copyFileSync, existsSync, mkdtempSync, rmSync, writeFileSync, cpSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const dist = 'dist/renato-tattoo/browser';
const run = (cmd, cwd) => execSync(cmd, { cwd, stdio: 'inherit' });
const remote = execSync('git remote get-url origin').toString().trim();

// Rotas desconhecidas caem no 404.html, que carrega o app.
const shell = existsSync(join(dist, 'index.csr.html')) ? 'index.csr.html' : 'index.html';
copyFileSync(join(dist, shell), join(dist, '404.html'));
writeFileSync(join(dist, '.nojekyll'), '');

const dir = mkdtempSync(join(tmpdir(), 'gh-pages-'));
try {
  cpSync(dist, dir, { recursive: true });
  run('git init -q -b gh-pages', dir);
  run('git add -A', dir);
  run('git commit -q -m "Deploy do site"', dir);
  run(`git push -f "${remote}" gh-pages`, dir);
} finally {
  rmSync(dir, { recursive: true, force: true });
}
