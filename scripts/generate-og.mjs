// Pravi public/og.png (slika za dijeljenje na društvenim mrežama) iz podataka u src/data/site.json.
// Pokrenuti nakon promjene imena ili slogana: npm run og
import sharp from 'sharp';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const site = JSON.parse(readFileSync(new URL('../src/data/site.json', import.meta.url), 'utf8'));
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const host = new URL(site.url).host;

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <rect width="1200" height="630" fill="#f7f5f0"/>
  <rect x="0" y="470" width="1200" height="160" fill="#14213d"/>
  <text x="80" y="150" font-family="Segoe UI, Arial, sans-serif" font-size="24" letter-spacing="5" fill="#a8461f">UČITELJICA · TRENERICA NASTAVNIKA · AUTORICA PROJEKATA</text>
  <text x="76" y="330" font-family="Segoe UI, Arial, sans-serif" font-weight="700" font-size="112" letter-spacing="-4" fill="#161616">${esc(site.name)}</text>
  <text x="80" y="400" font-family="Segoe UI, Arial, sans-serif" font-size="30" fill="#4a4a48">Edukacije · Radionice · Projekti · Mediji</text>
  <text x="80" y="562" font-family="Segoe UI, Arial, sans-serif" font-size="28" fill="#ffffff">${esc(host)}</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(fileURLToPath(new URL('../public/og.png', import.meta.url)));
console.log('public/og.png generated');
