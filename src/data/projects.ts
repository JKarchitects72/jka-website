// =====================================================
// jka master inventory — single source of truth
// the first 6 flagship lines = the homepage stage.
// published: true + a slug = the project gets its own page.
// =====================================================

export type Typology = "residential" | "workplace" | "retail" | "conceptual" | "archive";

export interface MediaItem {
  kind: "plate" | "diptych";
  labels: string[];          // 1 label for a plate, 2 for a diptych — also the fallback caption + alt text
  srcs?: string[];           // image path(s) under /public — 1 for a plate, 2 for a diptych. omit/empty = placeholder
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
  heroImage?: string;        // full-bleed hero photo (path under /public). omit = placeholder
  narrative?: string;
  discipline?: string[];     // "architecture" and/or "interior architecture" — drives the projects filter
  materials?: string[];      // up to 3 — feeds the material strip + json-ld
  media?: MediaItem[];       // (legacy) the flexible plate sequence — no longer rendered
  photos?: { src?: string; caption?: string }[];  // the gallery grid — one entry per photo, count drives the grid. src omitted = placeholder cell
  closingPlate?: string;     // optional final plate after the object
  objectName?: string;
  objectLink?: string;
  objectPlate?: string;
  credits?: { role: string; names: string[] }[];   // the "team" column — design / visualisation / models. roles with no names are skipped
}

export const projects: Project[] = [
  // ---- flagship: villa hariss leads, then the built body of work ----
  {
    name: "villa in hariss", slug: "villa-hariss", year: "2019",
    discipline: ["architecture", "interior architecture"],
    typology: "residential", group: "flagship", published: true,
    location: "",
    heroNote: "[ video hero — light crossing sandstone & timber ]",
    heroImage: "/projects/villa-hariss/hariss-hero.jpg",
    narrative: "villa hariss steps down a lebanese ridge, reading the land rather than resisting it. a sandstone mass, a timber upper volume, and a perforated stone screen layer against the mountain light. through punctured walls and slatted timber, the sun is filtered, not admitted, drawn across the floors as a shifting mural. the house breathes with the breeze, porous between inside and landscape.",
    materials: ["stacked sandstone", "dark timber screen", "perforated stone lattice"],
    media: [
      { kind: "plate",   labels: ["[ establishing plate — front elevation, three material layers ]"] },
      { kind: "diptych", labels: ["[ brise-soleil fins — timber against stone ]", "[ cantilevered volume over the pool terrace ]"] },
      { kind: "plate",   labels: ["[ threshold plate — entry hall, floating stair, lattice window ]"] },
      { kind: "diptych", labels: ["[ double-height dining, filtered light ]", "[ living volume toward terrace & stair ]"] },
      { kind: "plate",   labels: ["[ the light mural — striped shadow across the upper lounge ]"] },
    ],
    photos: [
      { src: "/projects/villa-hariss/hariss-establishing.jpg", caption: "front elevation — stone, timber, and the slotted apertures" },
      { src: "/projects/villa-hariss/hariss-cantilever.jpg", caption: "the perforated stone screen against the mountain light" },
      { src: "/projects/villa-hariss/hariss-threshold.jpg", caption: "entry hall — the floating stair and lattice window" },
      { src: "/projects/villa-hariss/hariss-dining.jpg", caption: "double-height dining, drawn toward the valley" },
      { src: "/projects/villa-hariss/hariss-living.jpg", caption: "living volume toward the terrace and stair" },
      { src: "/projects/villa-hariss/hariss-cabinet.jpg", caption: "the faceted cabinet in the living volume" },
      { src: "/projects/villa-hariss/hariss-light-mural.jpg", caption: "the light mural — striped shadow across the upper level" },
      { src: "/projects/villa-hariss/hariss-upper-lounge.jpg", caption: "upper lounge — the filtered northern light" },
      { src: "/projects/villa-hariss/hariss-family-room.jpg", caption: "the family room beneath board-marked concrete" },
      { src: "/projects/villa-hariss/hariss-landscape.jpg", caption: "the house held in its ridge" },
    ],
    closingPlate: "[ landscape terminus — the house held in its ridge ]",
    objectName: "the faceted cabinet",
    objectLink: "bespoke lacquered joinery, authored for this volume →",
    objectPlate: "[ cabinet in the living volume ]",
    credits: [
      { role: "design", names: ["jihad khairallah architects"] },
      { role: "visualisation", names: ["add cg artist"] },
      { role: "models", names: ["add model maker"] },
    ],
  },

  {
    name: "villa in koura", slug: "karim-khalile-residence", year: "2019",
    discipline: ["architecture", "interior architecture"],
    narrative: `a villa set on a koura hillside, turned toward the northern coast, built from a simple division of earth and sky. below, the bedrooms settle into the ground, low and private, a place for rest. above, the living spaces rise into high, bright volumes, open to the light, where the structure reaches and the rooms breathe. white walls and floors are held not as colour but as a ground for light and shadow to work across, so each piece set in the rooms reads clearly against them. the plan feels at once defined and without limit. minimalism here is treated as an art of arrangement, every space and interval composed, quiet, and exact.`,
    typology: "residential", group: "flagship", published: true,
    heroImage: "/projects/Koura%20Residence%20Karim%20Khalile/Residence%20Karim%20Khalile%201.jpg",
    photos: [
      { src: "/projects/Koura%20Residence%20Karim%20Khalile/Residence%20Karim%20Khalile%202.jpg" },
      { src: "/projects/Koura%20Residence%20Karim%20Khalile/Residence%20Karim%20Khalile%203.jpg" },
      { src: "/projects/Koura%20Residence%20Karim%20Khalile/Residence%20Karim%20Khalile%204.jpg" },
      { src: "/projects/Koura%20Residence%20Karim%20Khalile/Residence%20Karim%20Khalile%2012.jpg" },
      { src: "/projects/Koura%20Residence%20Karim%20Khalile/Residence%20Karim%20Khalile%2013.jpg" },
      { src: "/projects/Koura%20Residence%20Karim%20Khalile/Residence%20Karim%20Khalile%2015.jpg" },
      { src: "/projects/Koura%20Residence%20Karim%20Khalile/Residence%20Karim%20Khalile%2016.jpg" },
      { src: "/projects/Koura%20Residence%20Karim%20Khalile/Residence%20Karim%20Khalile%2017.jpg" },
      { src: "/projects/Koura%20Residence%20Karim%20Khalile/Residence%20Karim%20Khalile%2018.jpg" },
      { src: "/projects/Koura%20Residence%20Karim%20Khalile/Residence%20Karim%20Khalile%2019.jpg" },
      { src: "/projects/Koura%20Residence%20Karim%20Khalile/Residence%20Karim%20Khalile%2023.jpg" },
      { src: "/projects/Koura%20Residence%20Karim%20Khalile/Residence%20Karim%20Khalile%2024.jpg" },
      { src: "/projects/Koura%20Residence%20Karim%20Khalile/Residence%20Karim%20Khalile%2025.jpg" },
      { src: "/projects/Koura%20Residence%20Karim%20Khalile/Residence%20Karim%20Khalile%2029.jpg" },
      { src: "/projects/Koura%20Residence%20Karim%20Khalile/Residence%20Karim%20Khalile%2031.jpg" },
      { src: "/projects/Koura%20Residence%20Karim%20Khalile/Residence%20Karim%20Khalile%2032.jpg" },
      { src: "/projects/Koura%20Residence%20Karim%20Khalile/Residence%20Karim%20Khalile%2033.jpg" },
      { src: "/projects/Koura%20Residence%20Karim%20Khalile/Residence%20Karim%20Khalile%2070.jpg" },
      { src: "/projects/Koura%20Residence%20Karim%20Khalile/Residence%20Karim%20Khalile%20100.jpg" },
      { src: "/projects/Koura%20Residence%20Karim%20Khalile/Residence%20Karim%20Khalile%20266.jpg" },
      { src: "/projects/Koura%20Residence%20Karim%20Khalile/Residence%20Karim%20Khalile%20300.jpg" },
    ],
  },
  {
    name: "residence on the corniche", slug: "ahmad-residence-carlton", year: "2022",
    discipline: ["interior architecture"],
    narrative: `a large apartment set against beirut's coastline, arranged so the sea is always within reach. travertine lines the walls, its grain a quiet record of time, grounding the interior in something older than its furniture. daylight enters wide and soft, and the plan is left open so it can travel from the living spaces to the edge of the view without interruption. the dining room gathers under low, diffuse light. the bedrooms withdraw into a calmer register, soft fabrics, a muted palette, windows held to the city and the water. the house is composed less around its objects than around the movement of light and the horizon it frames.`,
    typology: "residential", group: "flagship", published: true,
    heroImage: "/projects/Ahmad%20Residence%20Carlton/Ahmad%20residence%20Carlton.JPG",
    photos: [
      { src: "/projects/Ahmad%20Residence%20Carlton/Ahmad%20residence%20Carlton%201.jpg" },
      { src: "/projects/Ahmad%20Residence%20Carlton/Ahmad%20residence%20Carlton%202.jpg" },
      { src: "/projects/Ahmad%20Residence%20Carlton/Ahmad%20residence%20Carlton%203.JPG" },
      { src: "/projects/Ahmad%20Residence%20Carlton/Ahmad%20residence%20Carlton%204.jpg" },
      { src: "/projects/Ahmad%20Residence%20Carlton/Ahmad%20residence%20Carlton%205.JPG" },
      { src: "/projects/Ahmad%20Residence%20Carlton/Ahmad%20residence%20Carlton%206.JPG" },
      { src: "/projects/Ahmad%20Residence%20Carlton/Ahmad%20residence%20Carlton%207.JPG" },
      { src: "/projects/Ahmad%20Residence%20Carlton/Ahmad%20residence%20Carlton%208.JPG" },
      { src: "/projects/Ahmad%20Residence%20Carlton/Ahmad%20residence%20Carlton%209.JPG" },
      { src: "/projects/Ahmad%20Residence%20Carlton/Ahmad%20residence%20Carlton%2010.JPG" },
      { src: "/projects/Ahmad%20Residence%20Carlton/Ahmad%20residence%20Carlton%2011.JPG" },
      { src: "/projects/Ahmad%20Residence%20Carlton/Ahmad%20residence%20Carlton%2012.JPG" },
      { src: "/projects/Ahmad%20Residence%20Carlton/Ahmad%20residence%20Carlton%2013.JPG" },
      { src: "/projects/Ahmad%20Residence%20Carlton/Ahmad%20residence%20Carlton%2014.JPG" },
      { src: "/projects/Ahmad%20Residence%20Carlton/Ahmad%20residence%20Carlton%2015.JPG" },
      { src: "/projects/Ahmad%20Residence%20Carlton/Ahmad%20residence%20Carlton%2016.JPG" },
      { src: "/projects/Ahmad%20Residence%20Carlton/Ahmad%20residence%20Carlton%2017.JPG" },
      { src: "/projects/Ahmad%20Residence%20Carlton/Ahmad%20residence%20Carlton%2018.JPG" },
      { src: "/projects/Ahmad%20Residence%20Carlton/Ahmad%20residence%20Carlton%2019.JPG" },
      { src: "/projects/Ahmad%20Residence%20Carlton/Ahmad%20residence%20Carlton%2020.JPG" },
      { src: "/projects/Ahmad%20Residence%20Carlton/Ahmad%20residence%20Carlton%2021.JPG" },
      { src: "/projects/Ahmad%20Residence%20Carlton/Ahmad%20residence%20Carlton%2022.JPG" },
      { src: "/projects/Ahmad%20Residence%20Carlton/Ahmad%20residence%20Carlton%2023.JPG" },
      { src: "/projects/Ahmad%20Residence%20Carlton/Ahmad%20residence%20Carlton%2024.JPG" },
      { src: "/projects/Ahmad%20Residence%20Carlton/Ahmad%20residence%20Carlton%2025.JPG" },
      { src: "/projects/Ahmad%20Residence%20Carlton/Ahmad%20residence%20Carlton%2026.JPG" },
      { src: "/projects/Ahmad%20Residence%20Carlton/Ahmad%20residence%20Carlton%2027.JPG" },
      { src: "/projects/Ahmad%20Residence%20Carlton/Ahmad%20residence%20Carlton%2028.JPG" },
      { src: "/projects/Ahmad%20Residence%20Carlton/Ahmad%20residence%20Carlton%2029.JPG" },
      { src: "/projects/Ahmad%20Residence%20Carlton/Ahmad%20residence%20Carlton%2030.JPG" },
      { src: "/projects/Ahmad%20Residence%20Carlton/Ahmad%20residence%20Carlton%2031.JPG" },
      { src: "/projects/Ahmad%20Residence%20Carlton/Ahmad%20residence%20Carlton%2032.JPG" },
      { src: "/projects/Ahmad%20Residence%20Carlton/Ahmad%20residence%20Carlton%2033.JPG" },
      { src: "/projects/Ahmad%20Residence%20Carlton/Ahmad%20residence%20Carlton%2034.JPG" },
    ],
  },
  {
    name: "artist house", slug: "artist-house", year: "2020",
    location: "rabieh",
    discipline: ["interior architecture"],
    narrative: `a house in rabieh built on a single idea, that the plan should change with the day. movable partitions let the interior open wide or draw close, so the space is set rather than fixed. the palette is restrained, american walnut against pale ceramic and neutral tone, wood and stone reduced to their quiet essentials. ambient light moves across these surfaces, throwing soft shadow, giving depth without ornament. at the centre a hearth holds the walnut clad rooms together, a fixed warmth around which the shifting walls turn. minimalism here is not absence but order. what remains has been chosen, and the landscape outside is let in through the open flow of the rooms.`,
    typology: "residential", group: "flagship", published: true,
    heroImage: "/projects/Artist%20House/Artist%20House.jpg",
    photos: [
      { src: "/projects/Artist%20House/Artist%20House%201.jpg" },
      { src: "/projects/Artist%20House/Artist%20House%202.jpg" },
      { src: "/projects/Artist%20House/Artist%20House%203.jpg" },
      { src: "/projects/Artist%20House/Artist%20House%204.jpg" },
      { src: "/projects/Artist%20House/Artist%20House%205.jpg" },
      { src: "/projects/Artist%20House/Artist%20House%206.jpg" },
      { src: "/projects/Artist%20House/Artist%20House%207.jpg" },
      { src: "/projects/Artist%20House/Artist%20House%208.jpg" },
      { src: "/projects/Artist%20House/Artist%20House%209.jpg" },
      { src: "/projects/Artist%20House/Artist%20House%2010.jpg" },
    ],
  },
  {
    name: "chalet in zaarour", slug: "mountain-escape", year: "2020",
    discipline: ["interior architecture"],
    narrative: `a chalet at zaarour, set among the mountains and built to converse with them rather than stand apart. light oak lines the walls and ceilings, wrapping the interior in the pale warmth of the forest it sits within. storage is concealed into the surfaces, panels and pulls felt rather than seen, so the rooms stay uncluttered and whole. the material holds a quiet tension, the coolness of concrete against the warmth of oak, lit low and even, and at the centre a chimney rises as the gathering point of the plan. the living spaces open wide to the slopes, the windows pressed toward disappearing, until the mountain itself becomes the view the architecture is built to frame.`,
    typology: "residential", group: "flagship", published: true,
    heroImage: "/projects/Mountain%20escape/Mountain-escape-zaarour.jpg",
    photos: [
      { src: "/projects/Mountain%20escape/Mountain-escape-zaarour%201.jpg" },
      { src: "/projects/Mountain%20escape/Mountain-escape-zaarour%202.jpg" },
      { src: "/projects/Mountain%20escape/Mountain-escape-zaarour%203.jpg" },
      { src: "/projects/Mountain%20escape/Mountain-escape-zaarour%204.jpg" },
      { src: "/projects/Mountain%20escape/Mountain-escape-zaarour%205.jpg" },
      { src: "/projects/Mountain%20escape/Mountain-escape-zaarour%206.jpg" },
      { src: "/projects/Mountain%20escape/Mountain-escape-zaarour%207.jpg" },
      { src: "/projects/Mountain%20escape/Mountain-escape-zaarour%208.jpg" },
      { src: "/projects/Mountain%20escape/Mountain-escape-zaarour%209.jpg" },
      { src: "/projects/Mountain%20escape/Mountain-escape-zaarour%2010.jpg" },
    ],
  },
  {
    name: "zuhair murad", slug: "zuhair-murad", year: "2013",
    discipline: ["interior architecture"],
    narrative: `the zuhair murad boutique sits inside a historic vault in downtown beirut, and the design treats that inheritance as a partner rather than a backdrop. the new work is held deliberately distinct from the old, contemporary forms inserted so the aged stone walls are left to breathe, their texture and warmth never covered, only framed. across three floors the insertions keep a single language, and open sightlines bind the levels into one continuous reading, carrying the vault's original verticality upward. the design speaks through space, light, transparency and reflection rather than ornament. the heritage becomes the surface against which the work is shown, old and new in measured exchange, the architecture standing quietly between them.`,
    typology: "retail", group: "flagship", published: true,
    heroImage: "/projects/Zuhair%20Murad/Zuhair%20Murad%20Solidere%20shop.jpg",
    photos: [
      { src: "/projects/Zuhair%20Murad/Zuhair%20Murad%20Solidere%20shop%201.jpg" },
      { src: "/projects/Zuhair%20Murad/Zuhair%20Murad%20Solidere%20shop%202.jpg" },
      { src: "/projects/Zuhair%20Murad/Zuhair%20Murad%20Solidere%20shop%203.jpg" },
      { src: "/projects/Zuhair%20Murad/Zuhair%20Murad%20Solidere%20shop%204.jpg" },
      { src: "/projects/Zuhair%20Murad/Zuhair%20Murad%20Solidere%20shop%205.jpg" },
      { src: "/projects/Zuhair%20Murad/Zuhair%20Murad%20Solidere%20shop%206.jpg" },
    ],
  },
  {
    name: "ramlet el bayda residence ii", slug: "ahmad-residence", year: "2015",
    discipline: ["interior architecture"],
    narrative: `an apartment in ramlet el bayda, held between two weights. pentelico marble runs underfoot, pale and continuous, while a wall of black palissandro stands opposite, dark and reflective, a surface for shadow to gather on. between them the rooms are kept calm. a single floor to ceiling pane opens the living space to the terrace and the light, and on the far wall bronze channel lighting grazes the dark stone, low and precise. linen and macrame filter the day as it crosses, so the brightness arrives softened, and walnut warms the edges. nothing competes. the materials are left to speak in their own register, and the light measures the distance between the pale floor and the dark wall.`,
    typology: "residential", group: "flagship", published: true,
    heroImage: "/projects/Ahmad%20Residence/Ahmad%20residence.jpg",
    photos: [
      { src: "/projects/Ahmad%20Residence/Ahmad%20residence%201.jpg" },
      { src: "/projects/Ahmad%20Residence/Ahmad%20residence%202.jpg" },
      { src: "/projects/Ahmad%20Residence/Ahmad%20residence%203.jpg" },
      { src: "/projects/Ahmad%20Residence/Ahmad%20residence%204.jpg" },
      { src: "/projects/Ahmad%20Residence/Ahmad%20residence%205.jpg" },
      { src: "/projects/Ahmad%20Residence/Ahmad%20residence%206.jpg" },
      { src: "/projects/Ahmad%20Residence/Ahmad%20residence%207.jpg" },
      { src: "/projects/Ahmad%20Residence/Ahmad%20residence%208.jpg" },
      { src: "/projects/Ahmad%20Residence/Ahmad%20residence%209.1.jpg" },
      { src: "/projects/Ahmad%20Residence/Ahmad%20residence%209.jpg" },
      { src: "/projects/Ahmad%20Residence/Ahmad%20residence%2010.jpg" },
    ],
  },
  {
    name: "residence in verdun", slug: "alsalem-residence", year: "2011",
    discipline: ["interior architecture"],
    narrative: `a city apartment composed as one continuous, pared back volume, where light falls from concealed fixtures and settles evenly across the rooms. a white fireplace anchors the living space, less a source of heat than a still, bright mass the eye returns to, set against walls carrying bold, abstract art. green accents and clear surfaces mark the passage from one room to the next, each opening onto a glimpse of the one beyond. above, the roof gives the city back to the apartment, white modular seating laid against the skyline, a metal sculpture standing in silhouette, an outdoor hearth holding the edge of the terrace. the design keeps to essentials and lets the city supply the rest.`,
    typology: "residential", group: "flagship", published: true,
    heroImage: "/projects/AlSalem%20Residence/AlSalem%20Residence%20.jpg",
    photos: [
      { src: "/projects/AlSalem%20Residence/AlSalem%20Residence%201%20.jpg" },
      { src: "/projects/AlSalem%20Residence/AlSalem%20Residence%202%20.jpg" },
      { src: "/projects/AlSalem%20Residence/AlSalem%20Residence%203%20.jpg" },
      { src: "/projects/AlSalem%20Residence/AlSalem%20Residence%204%20.jpg" },
      { src: "/projects/AlSalem%20Residence/AlSalem%20Residence%205%20.jpg" },
    ],
  },
  {
    name: "asmar wood headquarters", slug: "asmar-wood-hq", year: "2016",
    discipline: ["architecture", "interior architecture"],
    narrative: `the asmarwood headquarters keeps its industrial nature in plain sight rather than dressing over it. board marked concrete columns rise through the entrance, their timber grain left to read as structure, set against dark afrormosia wood and white plaster, the raw and the refined held in deliberate tension. the plan is rectangular, ordered, efficient, but it is the corridors that give the building its character, monumental in scale, running the length of the floors as the routes along which the work and its people meet. light is kept even and the materials are left honest. it is a workplace built as a single clear gesture, weight, line, and the long perspective of a corridor.`,
    typology: "workplace", group: "flagship", published: true,
    heroImage: "/projects/Asmar%20Wood%20HQ/asmar%20wood%201.jpg",
    photos: [
      { src: "/projects/Asmar%20Wood%20HQ/asmar%20wood%202.jpg" },
      { src: "/projects/Asmar%20Wood%20HQ/asmar%20wood%203.jpg" },
      { src: "/projects/Asmar%20Wood%20HQ/asmar%20wood%204.jpg" },
      { src: "/projects/Asmar%20Wood%20HQ/asmar%20wood%205.jpg" },
      { src: "/projects/Asmar%20Wood%20HQ/asmar%20wood%206.jpg" },
      { src: "/projects/Asmar%20Wood%20HQ/asmar%20wood%207.jpg" },
      { src: "/projects/Asmar%20Wood%20HQ/asmar%20wood%208.jpg" },
      { src: "/projects/Asmar%20Wood%20HQ/asmar%20wood%209.jpg" },
      { src: "/projects/Asmar%20Wood%20HQ/asmar%20wood%2010.jpg" },
      { src: "/projects/Asmar%20Wood%20HQ/asmar%20wood%2012.jpg" },
      { src: "/projects/Asmar%20Wood%20HQ/asmar%20wood%2013.jpg" },
      { src: "/projects/Asmar%20Wood%20HQ/asmar%20wood%2014.jpg" },
      { src: "/projects/Asmar%20Wood%20HQ/asmar%20wood%2015.jpg" },
      { src: "/projects/Asmar%20Wood%20HQ/asmar%20wood%2016.jpg" },
      { src: "/projects/Asmar%20Wood%20HQ/asmar%20wood%2017.jpg" },
      { src: "/projects/Asmar%20Wood%20HQ/asmar%20wood%2019.jpg" },
      { src: "/projects/Asmar%20Wood%20HQ/asmar%20wood%2020.jpg" },
      { src: "/projects/Asmar%20Wood%20HQ/asmar%20wood%2023.jpg" },
      { src: "/projects/Asmar%20Wood%20HQ/asmar%20wood%2026.jpg" },
      { src: "/projects/Asmar%20Wood%20HQ/asmar%20wood%2031.jpg" },
      { src: "/projects/Asmar%20Wood%20HQ/asmar%20wood%2032.jpg" },
      { src: "/projects/Asmar%20Wood%20HQ/asmar%20wood%2033.jpg" },
      { src: "/projects/Asmar%20Wood%20HQ/asmar%20wood%2034.jpg" },
    ],
  },
  {
    name: "atos lombardini", slug: "atos-lombardini", year: "2012",
    discipline: ["interior architecture"],
    narrative: `a small boutique in dubai worked from two colours, a deep forest green drawn across the backdrop and a clean white that cuts the space open. linear light runs the length of the ceiling, both illumination and direction, drawing the visitor through the room toward the garments held along its edges. vertical mirrors extend the walls, doubling the space until it reads larger and quieter than its hundred square metres. at the centre a bronzed sculptural seat sits as the single soft mass among the straight lines. the brand's wall stands deep hued and lightly lit. everything is reduced so the clothes carry the colour, and the architecture simply frames them.`,
    typology: "retail", group: "flagship", published: true,
    heroImage: "/projects/Atos%20Lombardini/Atos%20Lombardini.JPG",
    photos: [
      { src: "/projects/Atos%20Lombardini/Atos%20Lombardini%201.JPG" },
      { src: "/projects/Atos%20Lombardini/Atos%20Lombardini%202.JPG" },
      { src: "/projects/Atos%20Lombardini/Atos%20Lombardini%203.JPG" },
      { src: "/projects/Atos%20Lombardini/Atos%20Lombardini%204.JPG" },
      { src: "/projects/Atos%20Lombardini/Atos%20Lombardini%205.JPG" },
    ],
  },
  {
    name: "villa in riyadh", slug: "bassam-almubarak-residence", year: "2022",
    discipline: ["architecture"],
    narrative: `a large residence rising in riyadh, built on spatial continuity, every plane and junction carried into the next so the rooms transition without a seam. the facade is long and horizontal, its linear cladding pulling the eye sideways, and a measured balance of wood, concrete and glass gives the surface something to be felt as well as read. green is built into the section, tiered planted terraces stepping down the mass, so the architecture and the planting are composed together rather than added one to the other. wide glass dissolves the line between inside and out, drawing the landscape into the quietest corners of the plan. it is a house held in sustained dialogue with nature, sheltered and open at once.`,
    typology: "residential", group: "flagship", published: true,
    heroImage: "/projects/Bassam%20Almubarak%20Residence/Bassam%20AlMubarak%20Residence.jpg",
    photos: [
      { src: "/projects/Bassam%20Almubarak%20Residence/Bassam%20AlMubarak%20Residence%201.jpg" },
      { src: "/projects/Bassam%20Almubarak%20Residence/Bassam%20AlMubarak%20Residence%202.jpg" },
      { src: "/projects/Bassam%20Almubarak%20Residence/Bassam%20AlMubarak%20Residence%203.jpg" },
    ],
  },
  {
    name: "berytus park", slug: "berytus-park", year: "2014",
    discipline: ["interior architecture"],
    narrative: `an office reduced to its essentials, where what has been left out carries as much weight as what remains. a single monolithic reception desk in ebony anchors the entrance, dark and heavy, enough on its own to set the register of the place. indirect light is laid into the edges so the whole floor seems to glow from within rather than from any fixture you can name. clear glass partitions keep the plan transparent and continuous, dividing without interrupting, so the eye carries through. the result is quiet and exact, a workplace that states its seriousness through restraint, a dark mass, an even light, and clear space held between them.`,
    typology: "workplace", group: "flagship", published: true,
    heroImage: "/projects/Berytus%20Park/Berytus%20Park.JPG",
    photos: [
      { src: "/projects/Berytus%20Park/Berytus%20Park%201.JPG" },
      { src: "/projects/Berytus%20Park/Berytus%20Park%202.JPG" },
      { src: "/projects/Berytus%20Park/Berytus%20Park%203.JPG" },
    ],
  },
  {
    name: "ramlet el bayda residence i", slug: "boumatar-residence", year: "2015",
    discipline: ["interior architecture"],
    narrative: `an apartment in ramlet el bayda arranged so its boundaries soften, one living space giving way to the next without hard division. at its centre stands a carved wooden monolith, sculpted and standing free, the single charged object in an otherwise quiet plan, where an organic material meets a spare, modern geometry. the surfaces are clean and continuous, the detailing kept low so the eye is never caught on what it does not need to see. it reads less as a sequence of rooms than as one volume moving through itself, and the monolith holds the centre of that movement. what remains has been pared to the essential, and given room to be felt.`,
    typology: "residential", group: "flagship", published: true,
    heroImage: "/projects/BouMatar%20Residence/Bou%20Matar%20Residence.JPG",
    photos: [
      { src: "/projects/BouMatar%20Residence/Bou%20Matar%20Residence%2001.JPG" },
      { src: "/projects/BouMatar%20Residence/Bou%20Matar%20Residence%201.JPG" },
      { src: "/projects/BouMatar%20Residence/Bou%20Matar%20Residence%202.JPG" },
      { src: "/projects/BouMatar%20Residence/Bou%20Matar%20Residence%203.JPG" },
    ],
  },
  {
    name: "el khoury & partners", slug: "ekp", year: "2018",
    discipline: ["interior architecture"],
    narrative: `the offices of el khoury and partners hold two registers at once, the precision a law firm asks for and the ease of a lounge. at the entrance a relief wall of faces shifts as you pass, an animated threshold, a quiet figure for the range of cases the practice carries. a monumental stair bridges the two floors as a sculptural centre rather than a mere connection. inside, the material palette stays muted, wood against plaster, warm and even, closer to a room for thinking than a corporate floor. the furniture is restrained and contemporary, every tone chosen for its haptic quiet, so the professional and the personal are let to blur, and ideas have somewhere calm to settle.`,
    typology: "workplace", group: "flagship", published: true,
    heroImage: "/projects/EKP/EKP%200.jpg",
    photos: [
      { src: "/projects/EKP/EKP%201.jpg" },
      { src: "/projects/EKP/EKP%202.jpg" },
      { src: "/projects/EKP/EKP%203.jpg" },
      { src: "/projects/EKP/EKP%204.1.jpg" },
      { src: "/projects/EKP/EKP%204.jpg" },
      { src: "/projects/EKP/EKP%205.jpg" },
      { src: "/projects/EKP/EKP%206.jpg" },
      { src: "/projects/EKP/EKP%207.jpg" },
      { src: "/projects/EKP/EKP%209.jpg" },
      { src: "/projects/EKP/EKP%2011.jpg" },
      { src: "/projects/EKP/EKP%2012.jpg" },
      { src: "/projects/EKP/EKP%2013.jpg" },
      { src: "/projects/EKP/EKP%2014.jpg" },
      { src: "/projects/EKP/EKP%2015.jpg" },
      { src: "/projects/EKP/EKP%2016.jpg" },
      { src: "/projects/EKP/EKP%2019.jpg" },
      { src: "/projects/EKP/EKP%2021.jpg" },
      { src: "/projects/EKP/EKP%2023.jpg" },
      { src: "/projects/EKP/EKP%2024.jpg" },
    ],
  },
  {
    name: "loft in beitmisk", slug: "loft-09", year: "2022",
    discipline: ["architecture", "interior architecture"],
    narrative: `a loft in beitmisk built to dissolve the line between inside and out, conceived as one continuous form rather than a set of rooms. walls and openings are treated as parts of a single surface, so the space flows uninterrupted, like a vessel meeting the sea. its palette is a journey in itself, beginning in the warmth of light brown wood, passing through deep reds, and resting on the honesty of black steel and concrete, a gradient you move through as much as look at. daylight enters from skylights cut into the insulated roof, shifting hour by hour and bringing the surfaces to life. the result is small, exact, and entirely open, architecture reduced to flow and light.`,
    typology: "residential", group: "flagship", published: true,
    heroImage: "/projects/Loft%2009/Loft%2009-Beitmisk.jpg",
    photos: [
      { src: "/projects/Loft%2009/Loft%2009-Beitmisk%201.jpg" },
      { src: "/projects/Loft%2009/Loft%2009-Beitmisk%202.jpg" },
      { src: "/projects/Loft%2009/Loft%2009-Beitmisk%203.jpg" },
      { src: "/projects/Loft%2009/Loft%2009-Beitmisk%204.jpg" },
      { src: "/projects/Loft%2009/Loft%2009-Beitmisk%205.jpg" },
      { src: "/projects/Loft%2009/Loft%2009-Beitmisk%206.jpg" },
      { src: "/projects/Loft%2009/Loft%2009-Beitmisk%207.jpg" },
      { src: "/projects/Loft%2009/Loft%2009-Beitmisk%208.jpg" },
      { src: "/projects/Loft%2009/Loft%2009-Beitmisk%209.jpg" },
      { src: "/projects/Loft%2009/Loft%2009-Beitmisk%2010.jpg" },
      { src: "/projects/Loft%2009/Loft%2009-Beitmisk%2011.jpg" },
      { src: "/projects/Loft%2009/Loft%2009-Beitmisk%2012.jpg" },
    ],
  },
  {
    name: "residence in bsalim", slug: "pierre-ibrahim-residence", year: "2021",
    discipline: ["interior architecture"],
    narrative: `a beirut apartment proposed in the register the studio calls lush minimalism, warm rather than austere. the palette is held in subdued, meditative tone, each surface a deliberate stroke, then broken by a deep green seating mass that carries the green of the world outside into the room, a single mustard chair struck against it. at the centre a fireplace sits in cool grey marble, and above it fluted panelling rises to a white ceiling where the light comes to rest. the dining table is a slab of dark slate, ringed by the soft curve of wooden chairs, with a quiet composition of black metal and glass beside it. light enters through generous windows, veiled by gossamer curtains, kept ever gentle. minimalism here is not absence but a fuller, warmer calm.`,
    typology: "residential", group: "flagship", published: true,
    heroImage: "/projects/Pierre%20Ibrahim%20Residence/pierre%20ibrahim%20residence.png",
    photos: [
      { src: "/projects/Pierre%20Ibrahim%20Residence/pierre%20ibrahim%20residence%20%281%29.jpeg" },
      { src: "/projects/Pierre%20Ibrahim%20Residence/pierre%20ibrahim%20residence%20%282%29.jpeg" },
      { src: "/projects/Pierre%20Ibrahim%20Residence/pierre%20ibrahim%20residence%20%283%29.jpeg" },
      { src: "/projects/Pierre%20Ibrahim%20Residence/pierre%20ibrahim%20residence%20%284%29.jpeg" },
    ],
  },
  {
    name: "residence in qornet chahwan", slug: "razmig-kalfayan-residence", year: "2025",
    discipline: ["interior architecture"],
    narrative: `a residence in qornet chahwan, organised around a single still object. at its centre a black steel hearth stands open on every side on a pale stone plinth, the one dark mass in a white, light-filled plan, the point the rooms turn around. above, a timber ceiling is threaded with continuous light, lowering and warming the space before it lifts again into white. the long glazed walls are veiled in sheer screens, so the daylight enters not as a view but as a soft, even plane, shadowless and quiet. against that calm ground the owner's art and sculpture carry all the colour, the architecture held back so the collection can speak. stone, white, and timber gathered around a still centre, a house composed to be lived in slowly.`,
    typology: "residential", group: "flagship", published: true,
    heroImage: "/projects/Residence%20Razmig%20Kalfayan/RK%20residence.jpg",
    photos: [
      { src: "/projects/Residence%20Razmig%20Kalfayan/RK%20residence%201.jpg" },
      { src: "/projects/Residence%20Razmig%20Kalfayan/RK%20residence%202.jpg" },
      { src: "/projects/Residence%20Razmig%20Kalfayan/RK%20residence%203.jpg" },
      { src: "/projects/Residence%20Razmig%20Kalfayan/RK%20residence%204.jpg" },
      { src: "/projects/Residence%20Razmig%20Kalfayan/RK%20residence%205.jpg" },
      { src: "/projects/Residence%20Razmig%20Kalfayan/RK%20residence%206.jpg" },
      { src: "/projects/Residence%20Razmig%20Kalfayan/RK%20residence%207.jpg" },
      { src: "/projects/Residence%20Razmig%20Kalfayan/RK%20residence%208.jpg" },
      { src: "/projects/Residence%20Razmig%20Kalfayan/RK%20residence%209.jpg" },
      { src: "/projects/Residence%20Razmig%20Kalfayan/RK%20residence%2010.jpg" },
    ],
  },
  {
    name: "residential development, riyadh", slug: "riyadh-development", year: "2024",
    discipline: ["architecture"],
    narrative: `a residential development for riyadh, conceived as a single monolith into which life is carved, dwellings that can stand alone or read as one ensemble. each unfolds along a linear plan toward the city, anchored by staircases that rise like a spine. the upper floor opens into a panoramic living space and spills onto a sheltered porch crowned by an oculus, drawing the sky down into the rooms. above, the roof becomes an open chamber, its parapets thickened into long tables that command the horizon, like the bridge of a ship over the city. the private quarters settle below in counterpoint. the windows are pressed to vanish into the facade, and jasmine and bougainvillea are left to cloak the mass until built and grown become one.`,
    typology: "residential", group: "flagship", published: true,
    heroImage: "/projects/Riyadh%20Development/Riyadh%20Development%201.jpg",
    photos: [
      { src: "/projects/Riyadh%20Development/Riyadh%20Development%202.jpg" },
      { src: "/projects/Riyadh%20Development/Riyadh%20Development%203.jpg" },
    ],
  },
  {
    name: "desert villa in riyadh", slug: "villa-riyadh", year: "2024",
    discipline: ["architecture"],
    narrative: `a private villa for the riyadh desert, conceived as a monolith that takes the colour and texture of the land around it. the plan runs linear, each space turned deliberately toward the desert horizon, with twin staircases threading the sanctuaries of the house together. at its height a living space opens behind panoramic glass and extends to a sheltered porch, crowned by an oculus that channels the desert light into something you can almost hold. the roof is an open retreat above the sand, commanding the distance like a ship's bridge, while the bedrooms withdraw below into shade. windows and recessed porches are set to merge with the facade, and desert flora is drawn across the mass until the house reads as a mirage settled into the ground.`,
    typology: "residential", group: "flagship", published: true,
    heroImage: "/projects/Villa%20Riyadh/Villa%20Riyadh.jpg",
    photos: [
      { src: "/projects/Villa%20Riyadh/Villa%20Riyadh%201.jpg" },
      { src: "/projects/Villa%20Riyadh/Villa%20Riyadh%202.jpg" },
      { src: "/projects/Villa%20Riyadh/Villa%20Riyadh%203.jpg" },
      { src: "/projects/Villa%20Riyadh/Villa%20Riyadh%204.jpg" },
      { src: "/projects/Villa%20Riyadh/Villa%20Riyadh%205.jpg" },
    ],
  },
  {
    name: "residence in sodeco", slug: "yaghi-residence", year: "2015",
    discipline: ["interior architecture"],
    narrative: `a residence in sodeco worked almost entirely through the play of light against dark. natural light is drawn deep into the plan and set to work on a sequence of charged surfaces, marble floors, parquetry inlaid with marble and onyx, walls of ebony and black tinted oak, mirror polished steel and gold leaf glass that catch and return it. the materials are rich but held in discipline, each given its place so the contrasts read as composition rather than display. the rooms move between brightness and shadow, the dark surfaces deepening the light that falls beside them. it is an interior built on a single tension, the bright and the dark set against each other, and resolved in balance.`,
    typology: "residential", group: "flagship", published: true,
    heroImage: "/projects/Yaghi%20Residence/Yaghi%20residence.JPG",
    photos: [
      { src: "/projects/Yaghi%20Residence/Yaghi%20residence%201.JPG" },
      { src: "/projects/Yaghi%20Residence/Yaghi%20residence%202.JPG" },
      { src: "/projects/Yaghi%20Residence/Yaghi%20residence%203.JPG" },
      { src: "/projects/Yaghi%20Residence/Yaghi%20residence%204.JPG" },
      { src: "/projects/Yaghi%20Residence/Yaghi%20residence%205.JPG" },
      { src: "/projects/Yaghi%20Residence/Yaghi%20residence%206.JPG" },
    ],
  },

  // ---- competition ----
  {
    name: "arborizon", slug: "arborizon", year: "2023",
    location: "beitmisk",
    discipline: ["architecture"],
    typology: "conceptual", group: "competition", published: true,
    heroImage: "/projects/Arborizion%20Competition/arborizon-beitmisk-competition%20.jpg",
    photos: [
      { src: "/projects/Arborizion%20Competition/arborizon-beitmisk-competition%201.jpg" },
      { src: "/projects/Arborizion%20Competition/arborizon-beitmisk-competition%202.jpg" },
      { src: "/projects/Arborizion%20Competition/arborizon-beitmisk-competition%203.jpg" },
      { src: "/projects/Arborizion%20Competition/arborizon-beitmisk-competition%204.jpg" },
    ],
  },

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