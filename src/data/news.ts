// =====================================================
// jka news inventory — press, exhibitions, awards, announcements
// each entry generates a detail page at /news/[slug].
// category drives the submenu filter. image = grid thumbnail; gallery = detail carousel.
// dates: "YYYY.MM.DD". add dateEnd for a span. sourceUrl = optional external original.
// =====================================================

export type NewsCategory = "news" | "exhibition" | "media" | "award";

export interface NewsItem {
  slug: string;          // url key — /news/{slug}
  category: NewsCategory;
  title: string;
  description: string;   // one line, shown on the grid card
  body: string;          // full text for the detail page (use \n\n for paragraph breaks)
  dateStart?: string;    // optional — omit for undated media features
  dateEnd?: string;
  image?: string;        // grid thumbnail, path under /public
  gallery?: string[];    // detail-page carousel images, paths under /public
  sourceUrl?: string;    // optional external original (a quiet "view original" link)
  links?: { label: string; url: string }[]; // outbound list (e.g. projects featured in a publication)
  vimeoId?: string;      // optional vimeo id for an embedded film
}

export const news: NewsItem[] = [
  {
    slug: "art-of-living-abu-dhabi",
    category: "exhibition",
    title: "art of living, abu dhabi",
    description: "jka shows its product work at the art of living exhibition in abu dhabi.",
    body: "jka takes part in art of living, an architectural digest exhibition in abu dhabi, presenting the kōzō and kumo lines to the region's collectors and design press.\n\nthe showing places the practice's product work within the wider conversation architectural digest has built around design in the gulf.",
    dateStart: "2024.01.29",
    vimeoId: "1201086853",
    image: "/exhibitions/Art_Of_Living-%20Architectural%20Digest.jpg",
    gallery: [
      "/exhibitions/Art_Of_Living-%20Architectural%20Digest.jpg",
      "/exhibitions/Art_Of_Living-%20Architectural%20Digest%201.jpg",
      "/exhibitions/Art_Of_Living-%20Architectural%20Digest%202.jpg",
      "/exhibitions/Art_Of_Living-%20Architectural%20Digest%203.jpg",
      "/exhibitions/Art_Of_Living-%20Architectural%20Digest%204.jpg",
    ],
  },
  {
    slug: "kozo-a-design-award",
    category: "award",
    title: "kōzō — bronze a' design award",
    description: "kōzō wins a bronze a' design award in the furniture design category.",
    body: "kōzō receives a bronze a' design award in the furniture design category for the 2022-2023 cycle, judged by an international panel of design academics, professionals, and press.\n\nthe bookshelf, a wooden structure made for you to create with, was recognised for its flexibility: brackets, end-covers, and shelves that can be set in any material, finish, and position, letting each owner compose a unique scheme of colour, light, and form.",
    dateStart: "2023.04.15",
    image: "/products/kozo.jpg",
    gallery: [
      "/news/kozo-adesign-badge.png",
      "/news/kozo-adesign-certificate.jpg",
      "/products/kozo.jpg",
    ],
    sourceUrl: "https://competition.adesignaward.com/design.php?ID=148531",
  },
  {
    slug: "menart-fair-brussels",
    category: "exhibition",
    title: "menart fair, brussels",
    description: "jka and atelier nadeen exhibit together at menart fair in brussels.",
    body: "jka shows alongside atelier nadeen at menart fair in brussels, the fair dedicated to middle east and north africa art.\n\nthe booth pairs jihad khairallah's kōzō, a solid wood structure on steel brackets, with the ceramic sculptures of nadine roufael. two practices meeting on a shared reading of form as something built, coloured, and entered.",
    dateStart: "2023.02.03",
    dateEnd: "2023.02.05",
    image: "/exhibitions/menart-fair-thumb.jpg",
    gallery: [
      "/exhibitions/MENART_FAIR-a-2022.jpg",
      "/exhibitions/MENART_FAIR-d-2022.jpg",
      "/exhibitions/MENART_FAIR-c-2022.jpg",
      "/exhibitions/MENART_FAIR-e-2022.jpg",
      "/exhibitions/MENART_FAIR-b-2022.jpg",
    ],
    vimeoId: "1201138545",
  },
  {
    slug: "archello",
    category: "media",
    title: "archello",
    description: "selected jka projects published on archello.",
    body: "a selection of jka residential and workplace projects featured on archello.",
    image: "/media/archello-thumb.jpg",
    links: [
      { label: "carlton residence", url: "https://archello.com/project/carlton-residence" },
      { label: "villa hariss", url: "https://archello.com/project/villa-hariss-2" },
      { label: "private residence, ahmad", url: "https://archello.com/project/private-residence-ahmad" },
      { label: "private residence, rakan al salem", url: "https://archello.com/project/private-residence-rakan-al-salem" },
      { label: "private residence, boulghourjian", url: "https://archello.com/project/private-residence-boulghourjian" },
      { label: "private residence, karim khalile", url: "https://archello.com/project/private-residence-karim-khalile" },
      { label: "asmar wood headquarters", url: "https://archello.com/project/asmar-wood-headquarter" },
      { label: "ekp offices", url: "https://archello.com/project/ekp-offices" },
      { label: "chalet zaarour", url: "https://archello.com/project/chalet-zaarour" },
    ],
  },
  {
    slug: "architizer",
    category: "media",
    title: "architizer",
    description: "selected jka projects published on architizer.",
    body: "a selection of jka projects featured on architizer.",
    image: "/media/architizer-thumb.jpg",
    links: [
      { label: "carlton residence", url: "https://architizer.com/projects/carlton-residence-1/" },
      { label: "villa khalile", url: "https://architizer.com/projects/villa-khalile-1/" },
      { label: "loft 09", url: "https://architizer.com/projects/loft-09/" },
      { label: "villa hariss", url: "https://architizer.com/projects/villa-hariss/" },
    ],
  },
  {
    slug: "archilovers",
    category: "media",
    title: "archilovers",
    description: "selected jka projects published on archilovers.",
    body: "a selection of jka projects featured on archilovers.",
    image: "/media/archilovers-thumb.jpg",
    links: [
      { label: "artist house", url: "https://www.archilovers.com/projects/299569/artist-house.html" },
      { label: "asmar wood headquarters", url: "https://www.archilovers.com/projects/299564/asmar-wood-headquarter.html" },
      { label: "ekp law firm", url: "https://www.archilovers.com/projects/299532/ekp-law-firm.html" },
      { label: "mountain escape", url: "https://www.archilovers.com/projects/299531/mountain-escape.html" },
    ],
  },
];
