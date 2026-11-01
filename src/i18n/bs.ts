import { link } from '../utils/url';

// Tekstovi sučelja. Za englesku verziju dodajte src/i18n/en.ts s istim ključevima.
export const nav = [
  { href: link('/o-meni'), label: 'O meni' },
  { href: link('/edukacije'), label: 'Edukacije' },
  { href: link('/radionice'), label: 'Radionice' },
  { href: link('/projekti'), label: 'Projekti' },
  { href: link('/mediji'), label: 'Mediji' },
  { href: link('/pisanje'), label: 'Pisanje' },
  { href: link('/kontakt'), label: 'Kontakt' },
];

export const roleLabels: Record<string, string> = {
  pokretačica: 'Pokretačica',
  voditeljica: 'Voditeljica',
  koordinatorica: 'Koordinatorica',
  autorica: 'Autorica',
  trenerica: 'Trenerica',
  učesnica: 'Učesnica',
};

export const formatDate = (date: Date) =>
  new Intl.DateTimeFormat('bs-BA', { day: 'numeric', month: 'long', year: 'numeric' }).format(date);

// Bosanska množina: 1 projekat, 2–4 projekta, 5+ projekata (11–14 uvijek „mnogo”).
export const plural = (n: number, one: string, few: string, many: string) => {
  const mod10 = n % 10;
  const mod100 = n % 100;
  if (mod10 === 1 && mod100 !== 11) return one;
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return few;
  return many;
};
