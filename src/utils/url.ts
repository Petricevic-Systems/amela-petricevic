// Sve interne putanje idu kroz link(), da stranica radi i na podadresi
// (npr. petricevic-systems.github.io/amela-petricevic/) i na vlastitoj domeni.
// Osnovna putanja dolazi iz "url" u src/data/site.json (vidi astro.config.mjs).
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export const link = (path: string) => `${base}${path}`;
