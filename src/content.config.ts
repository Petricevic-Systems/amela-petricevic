import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

// Svaka stavka = jedna datoteka u src/content/<kolekcija>/.
// "sample: true" označava primjer-sadržaj (prikazuje se oznaka "Primjer").

const sample = z.boolean().default(false);
// Link na javni izvor podatka (prikazuje se kao „Izvor”).
const source = z.string().optional();

// JSON liste imaju oblik { "items": [...] } (format koji koristi Decap CMS).
const fromItems = (text: string) => JSON.parse(text).items;

const projekti = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projekti' }),
  // image: putanja do slike relativno od .md datoteke (npr. "../../assets/images/x.jpg")
  schema: ({ image }) => z.object({
    title: z.string(),
    year: z.number(),
    yearEnd: z.number().optional(),
    role: z.enum(['pokretačica', 'voditeljica', 'koordinatorica', 'autorica', 'trenerica', 'učesnica']),
    partners: z.array(z.string()).default([]),
    outcome: z.string(),
    image: image().optional(),
    imageAlt: z.string().default(''),
    featured: z.boolean().default(false),
    source,
    sample,
  }),
});

const edukacije = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/edukacije' }),
  schema: z.object({
    title: z.string(),
    year: z.number(),
    organizer: z.string(),
    audience: z.string(),
    topic: z.string(),
    participants: z.number().optional(),
    featured: z.boolean().default(false),
    source,
    sample,
  }),
});

const radionice = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/radionice' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    ageGroup: z.string(),
    duration: z.string().optional(),
    order: z.number().default(100),
    sample,
  }),
});

const mediji = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/mediji' }),
  schema: z.object({
    title: z.string(),
    outlet: z.string(),
    date: z.coerce.date(),
    type: z.enum(['intervju', 'članak', 'TV', 'radio', 'podcast', 'gostovanje', 'film']).default('članak'),
    link: z.string().optional(),
    // YouTube ID videa (npr. "MvsftOEmiEY" iz youtu.be/MvsftOEmiEY) — prikazuje se ugrađeni video.
    youtube: z.string().optional(),
    duration: z.string().optional(),
    // false = umjesto YouTube sličice prikazuje se neutralna kartica (npr. kad se na sličici vide djeca).
    thumbnail: z.boolean().default(false),
    // false = vlasnik videa je zabranio ugrađivanje; prikazuje se link na YouTube.
    embeddable: z.boolean().default(true),
    featured: z.boolean().default(false),
    source,
    sample,
  }),
});

const pisanje = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pisanje' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string(),
    tags: z.array(z.string()).default([]),
    image: image().optional(),
    draft: z.boolean().default(false),
    sample,
  }),
});

const certifikati = defineCollection({
  loader: file('src/data/certifikati.json', { parser: fromItems }),
  schema: z.object({
    title: z.string(),
    issuer: z.string(),
    year: z.number(),
    kind: z.enum(['certifikat', 'nagrada', 'priznanje']).default('certifikat'),
    source,
    sample,
  }),
});

const preporuke = defineCollection({
  loader: file('src/data/preporuke.json', { parser: fromItems }),
  schema: z.object({
    quote: z.string(),
    author: z.string(),
    role: z.string(),
    // Prikazuje se samo ako je osoba dala dozvolu.
    permission: z.boolean().default(false),
    sample,
  }),
});

const resursi = defineCollection({
  loader: file('src/data/resursi.json', { parser: fromItems }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    file: z.string(),
    format: z.string(),
    sample,
  }),
});

export const collections = {
  projekti,
  edukacije,
  radionice,
  mediji,
  pisanje,
  certifikati,
  preporuke,
  resursi,
};
