// =====================================================
// jka master inventory — single source of truth
// the first 6 flagship lines = the homepage canvas.
// reorder those lines to curate the stage.
// =====================================================

export type Typology = "residential" | "workplace" | "retail" | "conceptual" | "archive";

export interface Project {
  name: string;
  slug: string;          // "" = no case-study page yet → routes to /projects
  year: string;
  typology: Typology;
  group: "flagship" | "competition" | "archive";
}

export const projects: Project[] = [
  // ---- flagship: the curated six (homepage stage) ----
  { name: "villa hariss",            slug: "villa-hariss", year: "2019", typology: "residential", group: "flagship" },
  { name: "villa koura",             slug: "villa-koura",  year: "2017", typology: "residential", group: "flagship" }, // sheet said 2021 — held at 2017 per project doc, confirm
  { name: "elkhoury & partners",     slug: "",             year: "2018", typology: "workplace",   group: "flagship" },
  { name: "zuhair murad shop",       slug: "",             year: "2013", typology: "retail",      group: "flagship" },
  { name: "mountain escape",         slug: "",             year: "2016", typology: "residential", group: "flagship" },
  { name: "ahmad residence carlton", slug: "",             year: "2017", typology: "residential", group: "flagship" },

  // ---- flagship: full body of work (grid only) ----
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
  { name: "ide showroom",            slug: "", year: "2015", typology: "retail",      group: "flagship" },
  { name: "kalash residence",        slug: "", year: "2017", typology: "residential", group: "flagship" },
  { name: "khalil residence",        slug: "", year: "2019", typology: "residential", group: "flagship" },
  { name: "loft 09",                 slug: "", year: "2013", typology: "residential", group: "flagship" },
  { name: "pierre ibrahim",          slug: "", year: "2011", typology: "residential", group: "flagship" },
  { name: "private chalet",          slug: "", year: "2018", typology: "residential", group: "flagship" },
  { name: "private villa riyadh",    slug: "", year: "2022", typology: "residential", group: "flagship" },
  { name: "razmig",                  slug: "", year: "2014", typology: "residential", group: "flagship" },
  { name: "residential development riyadh", slug: "", year: "2024", typology: "residential", group: "flagship" },
  { name: "sleep comfort",           slug: "", year: "2017", typology: "retail",      group: "flagship" }, // sheet: workplace_retail — one typology per project, confirm
  { name: "villa riyadh",            slug: "", year: "2020", typology: "residential", group: "flagship" },
  { name: "yaghi residence",         slug: "", year: "2015", typology: "residential", group: "flagship" },

  // ---- competitions ----
  { name: "arborizon",               slug: "", year: "2021", typology: "conceptual", group: "competition" },
  { name: "ksa lagoon",              slug: "", year: "2024", typology: "conceptual", group: "competition" },

  // ---- historical archive ----
  { name: "bristole smile clinic",   slug: "", year: "2008", typology: "archive", group: "archive" },
  { name: "daher residence",         slug: "", year: "2006", typology: "archive", group: "archive" },
  { name: "jeans couture",           slug: "", year: "2004", typology: "archive", group: "archive" },
  { name: "jeans couture lounge abc",slug: "", year: "2005", typology: "archive", group: "archive" },
  { name: "jeans couture shops",     slug: "", year: "2002", typology: "archive", group: "archive" },
  { name: "ys shop — youssef salameh", slug: "", year: "2003", typology: "archive", group: "archive" },
];

// ---- exports ----
// chronological copy: newest first. empty years sink to the bottom.
const sortedProjects = [...projects].sort(
  (a, b) => (parseInt(b.year) || 0) - (parseInt(a.year) || 0)
);

// the homepage stage: hand-curated — first 6 flagship lines, file order.
// reorder the lines at the top of this file to recompose the stage.
export const featured = projects.filter(p => p.group === "flagship").slice(0, 6);

// the monolith wall: every active + competition project, newest first.
export const allForGrid = sortedProjects.filter(p => p.group !== "archive");

// the provenance vault: archive only, newest first.
export const archiveOnlyGrid = sortedProjects.filter(p => p.group === "archive");

export const projectHref = (p: Project) =>
  p.slug ? `/projects/${p.slug}` : `/projects`;