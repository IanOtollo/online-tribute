import fs from 'fs';
import path from 'path';

// Clean existing .vercel
if (fs.existsSync('.vercel/output')) fs.rmSync('.vercel/output', { recursive: true, force: true });

// Create output structure
fs.mkdirSync('.vercel/output/static', { recursive: true });

// Copy dist/client to .vercel/output/static
function copyDir(src, dest) {
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) copyDir(srcPath, destPath);
    else fs.copyFileSync(srcPath, destPath);
  }
}

if (fs.existsSync('dist/client')) {
  copyDir('dist/client', '.vercel/output/static');
}

// Create config.json for Build Output API v3
fs.writeFileSync('.vercel/output/config.json', JSON.stringify({
  version: 3,
  routes: [
    { handle: "filesystem" },
    { src: "/(.*)", dest: "/index.html" }
  ]
}, null, 2));

console.log('Successfully generated .vercel/output directory for Vercel deployment!');
