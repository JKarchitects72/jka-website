// =====================================================
// jka master inventory — single source of truth
// the first 6 flagship lines = the homepage stage.
// published: true + a slug = the project gets its own page.
// =====================================================

export type Typology = "residential" | "workplace" | "retail" | "conceptual" | "archive";

export interface MediaItem {
  kind: "plate" | "diptych";
  labels: string[];          // 1 label for a plate, 2 for a diptych
}

export interface Project {
  name: string;
  slug: string;
  year: string;
  typology: Typology;
  group: "flagship" | "competition" | "archive";
  published?: boolean;       // the gate — only true generates a page
  location?: string;
  area?: string;
  heroNote?: string;
  narrative?: string;
  materials?: string[];      // up to 3 — feeds the material strip + json-ld
  media?: MediaItem[];       // the flexible plate sequence
  closingPlate?: string;     // optional final plate after the object
  objectName?: string;
  objectLink?: string;
  objectPlate?: string;
}

export const projects: Project[] = [
  // ---- flagship: the curated six (homepage stage) ----
  {
    name: "villa hariss", slug: "villa-hariss", year: "2019",
    typology: "residential", group: "flagship", published: true,
    location: "hariss, lebanon",
    heroNote: "[ video hero — light crossing sandstone & timber ]",
    narrative: "villa hariss steps down a lebanese ridge, reading the land rather than resisting it. a sandstone mass, a timber upper volume, and a perforated stone screen layer against the mountain light. through punctured walls and slatted timber, the sun is filtered, not admitted — drawn across the floors as a shifting mural. the house breathes with the breeze, porous between inside and landscape.",
    materials: ["stacked sandstone", "dark timber screen", "perforated stone lattice"],
    media: [
      { kind: "plate",   labels: ["[ establishing plate — front elevation, three material layers ]"] },
      { kind: "diptych", labels: ["[ brise-soleil fins — timber against stone ]", "[ cantilevered volume over the pool terrace ]"] },
      { kind: "plate",   labels: ["[ threshold plate — entry hall, floating stair, lattice window ]"] },
      { kind: "diptych", labels: ["[ double-height dining, filtered light ]", "[ living volume toward terrace & stair ]"] },
      { kind: "plate",   labels: ["[ the light mural — striped shadow across the upper lounge ]"] },
    ],
    closingPlate: "[ landscape terminus — the house held in its ridge ]",
    objectName: "the faceted cabinet",
    objectLink: "bespoke lacquered joinery, authored for this volume →",
    objectPlate: "[ cabinet in the living volume ]",
  },
  {
    name: "villa koura", slug: "villa-koura", year: "2017",
    typology: "residential", group: "flagship", published: true,
    location: "koura, north lebanon", area: "350 sqm",
    heroNote: "[ hero still — the white monolith, entrance slot centred ]",
    narrative: "villa koura rests on a lebanese hill, its gaze fixed on the northern sea. bedrooms settle into the earth; living volumes rise toward the light. white is not colour here but a stage for shadow. envelope and interior were never drawn apart — one body, one authorship, one quiet argument for what remains when nothing is unnecessary.",
    materials: ["fair-faced white plaster", "natural oak", "honed grey stone"],
    media: [
      { kind: "plate",   labels: ["[ interior-to-sea frame — oak partition, glazing, horizon ]"] },
      { kind: "diptych", labels: ["[ living volume — black seating against white ]", "[ kitchen volume — single white mass ]"] },
    ],
    objectName: "the borges table",
    objectLink: "conceived for this room — part of kozo →",
    objectPlate: "[ object photograph — large ]",
  },
  { name: "elkhoury & partners",     slug: "", year: "2018", typology: "workplace",   group: "flagship" },
  { name: "zuhair murad shop",       slug: "", year: "2013", typology: "retail",      group: "flagship" },
  { name: "mountain escape",         slug: "", year: "2016", typology: "residential", group: "flagship" },
  { name: "ahmad residence carlton", slug: "", year: "2017", typology: "residential", group: "flagship" },

  // ---- flagship: full body of work (wall only) ----
  { name: "abdulmajeed riyadh",      slug: "", year: "2021", typology: "residential", group: "flagship" },
  { name: "ahmad residence 1",       slug: "", year: "2018", typology: "residential", group: "flagship" },
  { name: "alkohail khobar",         slug: "", year: "2022", typology: "residential", group: "flagship" },
  { name: "alsalem residence",       slug: "", year: "2019", typology: "residential", group: "flagship" },
  { name: "artist house",            slug: "", year: "2020", typology: "residential", group: "flagship" },
  { name: "asmarwood",               slug: "", year: "2016", typology: "workplace",   group: "flagship" },
  { name: "atos lombardini",         slug: "", year: "2012", typology: "retail",      group: "flagship" },
  { name: "bassam almubarak riyadh", slug: "", year: "2023", typology: "residential", group: "flagship" },
  { name: "berytus park",            slug: "", year: "2014", typology: "workplace",   group: "flagship" },
  { name: "boumatar residence",      slug: "", year: "2015", typology: "residential", group: "flagship" },
  { name: "kalash residence",        slug: "", year: "2017", typology: "residential", group: "flagship" },
  { name: "khalil residence",        slug: "", year: "2019", typology: "residential", group: "flagship" },
  { name: "loft 09",                 slug: "", year: "2013", typology: "residential", group: "flagship" },
  { name: "pierre ibrahim",          slug: "", year: "2011", typology: "residential", group: "flagship" },
  { name: "private chalet",          slug: "", year: "2018", typology: "residential", group: "flagship" },
  { name: "private villa riyadh",    slug: "", year: "2022", typology: "residential", group: "flagship" },
  { name: "razmig",                  slug: "", year: "2014", typology: "residential", group: "flagship" },
  { name: "residential development riyadh", slug: "", year: "2024", typology: "residential", group: "flagship" },
  { name: "sleep comfort",           slug: "", year: "2017", typology: "retail",      group: "flagship" },
  { name: "villa riyadh",            slug: "", year: "2020", typology: "residential", group: "flagship" },
  { name: "yaghi residence",         slug: "", year: "2015", typology: "residential", group: "flagship" },

  // ---- competitions ----
  { name: "arborizon",               slug: "", year: "2021", typology: "conceptual", group: "competition" },
  { name: "ksa lagoon",              slug: "", year: "2024", typology: "conceptual", group: "competition" },

  // ---- historical archive ----
  { name: "ide showroom",            slug: "", year: "2015", typology: "archive", group: "archive" },
  { name: "bristole smile clinic",   slug: "", year: "2008", typology: "archive", group: "archive" },
  { name: "daher residence",         slug: "", year: "2006", typology: "archive", group: "archive" },
  { name: "jeans couture lounge abc",slug: "", year: "2005", typology: "archive", group: "archive" },
  { name: "jeans couture",           slug: "", year: "2004", typology: "archive", group: "archive" },
  { name: "ys shop — youssef salameh", slug: "", year: "2003", typology: "archive", group: "archive" },
  { name: "jeans couture shops",     slug: "", year: "2002", typology: "archive", group: "archive" },
];

// ---- exports ----
const sortedProjects = [...projects].sort(
  (a, b) => (parseInt(b.year) || 0) - (parseInt(a.year) || 0)
);

export const featured = projects.filter(p => p.group === "flagship").slice(0, 6);
export const allForGrid = sortedProjects.filter(p => p.group !== "archive");
export const archiveOnlyGrid = sortedProjects.filter(p => p.group === "archive");
export const publishedProjects = projects.filter(p => p.published && p.slug);
export const projectHref = (p: Project) =>
  p.slug && p.published ? `/projects/${p.slug}` : `/projects`;