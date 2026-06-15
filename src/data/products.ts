// =====================================================
// jka objects & product archive — the kōzō and kumo lines
// each item has a detail page at /products/{slug}.
// image = grid thumbnail (cropped to frame); gallery = detail-page carousel (shown uncropped).
// =====================================================

export interface Product {
  slug: string;
  name: string;
  tagline?: string;        // optional eyebrow on the detail page (e.g. an award line)
  description: string;
  image?: string;          // grid thumbnail, path under /public
  gallery?: string[];      // detail-page carousel images, paths under /public
}

export const products: Product[] = [
  {
    slug: "kozo",
    name: "kōzō",
    tagline: "award-winning product design",
    description: "kōzō is a wooden structure made for you to create with. whether an artistic piece that merges colour and light, or a bookshelf in your living space, its expansive flexibility lets you turn it into something one of a kind.",
    image: "/products/kozo.jpg",
    gallery: [
      "/products/kozo%20shelf.jpg",
      "/products/kozo%20closeup.jpg",
      "/products/kozo%20closeup%201.jpg",
    ],
  },
  {
    slug: "kumo",
    name: "kumo",
    description: "kumo is a wooden structure made for you to create with. a bench of many legs that form a single solid module of completely customisable shape, carrying three or more circular poufs, or a glass surface that renders it a table. its flexibility lets you turn it into something one of a kind.",
    image: "/products/kumo.jpg",
    gallery: [
      "/products/kumo%20bench.jpg",
      "/products/kumo%20bench%20closeup.jpg",
    ],
  },
];
