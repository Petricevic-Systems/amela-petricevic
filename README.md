# Lična stranica — Amela Petričević

Statična stranica (Astro 7). Bez servera, bez kolačića za praćenje.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # gotova stranica u dist/
npm run preview  # pregled builda
npm run og       # ponovo napravi public/og.png (slika za dijeljenje) nakon promjene imena/slogana
```

## Gdje je sadržaj

Svaka stavka je **jedna datoteka**. Dizajn se ne dira.

| Šta | Gdje |
| --- | --- |
| Ime, slogan, biografija, brojke, e-mail, mreže, domena | `src/data/site.json` |
| Projekti i inicijative | `src/content/projekti/*.md` |
| Održane edukacije | `src/content/edukacije/*.md` |
| Radionice | `src/content/radionice/*.md` |
| Mediji (TV gostovanja, video, članci) | `src/content/mediji/*.md` |
| Blog objave | `src/content/pisanje/*.md` |
| Certifikati i priznanja | `src/data/certifikati.json` |
| Preporuke (samo uz dozvolu: `"permission": true`) | `src/data/preporuke.json` |
| Materijali za preuzimanje | `src/data/resursi.json` + datoteka u `public/resursi/` |

Oznake:
- `sample: true` → prikazuje oznaku **Primjer**. Za stvarni sadržaj postavite `false` ili obrišite red.
- `source: "https://..."` → prikazuje link **Izvor** (javna stranica s koje je podatak preuzet).
- Kad je sve zamijenjeno, u `site.json` postavite `"sampleContent": false` (nestaje traka „Demo verzija”).

### Dodati projekat

Napravite `src/content/projekti/naziv-projekta.md`:

```md
---
title: "Naziv projekta"
year: 2024
yearEnd: 2025            # opcionalno
role: pokretačica        # pokretačica | koordinatorica | autorica | trenerica | učesnica
partners: ["Partner 1", "Partner 2"]
outcome: "Konkretan rezultat: broj učenika, škola, nagrada…"
featured: true           # prikaži na početnoj
source: "https://..."    # opcionalno
---
Kratak opis: šta je urađeno.
```

Projekti s ulogom `pokretačica` dobijaju oznaku ★.

### Dodati blog objavu

Napravite `src/content/pisanje/naslov-objave.md`:

```md
---
title: "Naslov"
date: 2026-11-01
summary: "Jedna-dvije rečenice za listu i pretraživače."
tags: ["praksa", "metode"]
draft: false             # true = ne objavljuje se
---
Tekst u Markdownu…
```

Adresa objave je ime datoteke: `/pisanje/naslov-objave`.

### Dodati video (YouTube intervju)

Iz linka `https://youtu.be/MvsftOEmiEY` ID je `MvsftOEmiEY`. Napravite `src/content/mediji/naziv.md`:

```md
---
title: "Gošća jutarnjeg programa RTV 7"
outlet: "RTV 7 Tuzla"
date: 2026-10-30
type: TV                 # TV | intervju | članak | radio | podcast | gostovanje | film
youtube: "MvsftOEmiEY"
duration: "9 min"
thumbnail: false         # true samo ako se na YouTube sličici NE vide djeca
featured: true
---
```

Video se učitava tek na klik (youtube-nocookie.com), pa stranica ostaje brza i bez YouTube kolačića. Ako je vlasnik videa zabranio ugrađivanje, dodajte `embeddable: false` — kartica će voditi na YouTube.

Tri najnovija video nastupa automatski se prikazuju na početnoj u sekciji „U medijima”.

### Fotografije

Sve fotografije su u `src/assets/images/`, a raspored je u `src/data/images.ts` (naslovna, portret, slika u bloku „O meni”, zaglavlja stranica). Za zamjenu: stavite novu datoteku u `src/assets/images/` i promijenite `import` u `images.ts`. Astro ih pri buildu sam smanjuje i pretvara u WebP.

Slika projekta ili objave upisuje se u njegovu `.md` datoteku: `image: "../../assets/images/naziv.jpg"` i `imageAlt: "opis"`.

Pravilo: samo ona, materijali, prostor ili dječji radovi — **nikad prepoznatljiva lica djece**.

Izvori trenutnih fotografija:
- učionica, knjige, olovke, biblioteka — [Unsplash](https://unsplash.com/license) (besplatno, bez obaveze navođenja autora);
- portret (`amela-portret.jpg`) — profil trenerice na thinkerica.ba (TPO Fondacija), samo 180×225 px: **zamijeniti vlastitom fotografijom većeg formata**;
- plakat „Svjetski etos je u nama” — mreza-mira.net; hodnik s crtežima jabuka — bhstring.net (njen autorski tekst iz 2018.). Prije javne objave potvrditi s autorima/školom.

## Objava (deploy)

Stranica je na GitHub Pages: **https://petricevic-systems.github.io/amela-petricevic/** (repozitorij `Petricevic-Systems/amela-petricevic`). Svaki `git push` na `main` automatski pokreće build i objavu (`.github/workflows/deploy.yml`, traje ~1 min).

Adresa stranice je u `src/data/site.json` → `"url"`. Iz nje se računaju domena i putanja (`/amela-petricevic`) za sve linkove, sitemap, canonical i Open Graph. Interne linkove u kodu uvijek pišite kroz `link('/putanja')` iz `src/utils/url.ts`.

**Demo režim:** dok je `"sampleContent": true`, stranica ima `noindex` i `robots.txt` zabranjuje indeksiranje — ne pojavljuje se na Googleu. Kad je sadržaj potvrđen, postavite `false`.

**Vlastita domena (kasnije):** u `site.json` postavite `"url": "https://amelapetricevic.ba"`, dodajte `public/CNAME` s nazivom domene, u GitHubu Settings → Pages upišite domenu i podesite DNS (CNAME na `petricevic-systems.github.io`).

**Kontakt obrazac:** GitHub Pages nema server, pa obrazac ide preko Formspree. Napravite besplatan obrazac na formspree.io i upišite `"form": { "provider": "formspree", "formspreeId": "VAŠ_ID" }`. Dok ID nije upisan, umjesto obrasca se prikazuje dugme za e-mail. (Na Netlifyju postavite `"provider": "netlify"` — `netlify.toml` je spreman.)

## Uređivanje iz preglednika (Decap CMS, opcionalno)

`/admin` otvara uređivač (`public/admin/config.yml`).
- Na Netlifyju: uključite Identity i Git Gateway, pozovite sebe kao korisnika.
- Na GitHub Pages: promijenite `backend` u `github` i postavite OAuth posrednika (npr. Cloudflare Worker).
- Lokalno: `npx decap-server` pa `npm run dev` i otvorite `/admin/`.

## Engleska verzija (kasnije)

U `astro.config.mjs` dodajte `'en'` u `i18n.locales`, napravite `src/i18n/en.ts` i stranice u `src/pages/en/`.

## Analitika

Isključena. Za Plausible upišite domenu u `site.json` → `analytics.plausibleDomain`.
