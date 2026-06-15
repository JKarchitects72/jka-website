// ============================================================
// HISTORICAL PROVENANCE ARCHIVE — isolated dataset
// ------------------------------------------------------------
// One cover image per project, dropped flat into:
//     src/assets/archive-projects/<Project Name>.jpg
// The build auto-discovers every image here, optimises it, and
// uses the file name (minus extension, lower-cased) as the
// caption. Rename a file to rename its caption. Spaces and
// parentheses are fine. Nothing below is hand-typed per file.
// ============================================================

export interface ArchiveProject {
  name: string;
  year?: string;
  location?: string;
  heroImage?: string;
  photos: string[];
}

// every flat image in the archive-projects directory -> ImageMetadata
const assets = import.meta.glob(
  "../assets/archive-projects/*.{jpg,JPG,jpeg,JPEG,png,PNG,webp,WEBP,avif,AVIF}",
  { eager: true, import: "default" }
) as Record<string, { src: string }>;

// OPTIONAL — confirmed years/locations, keyed by the lower-cased file name
// (no extension). Omit a project and its caption is simply the name.
const meta: Record<string, { year?: string; location?: string }> = {
  // "jeans couture shops": { year: "2006" },
};

export const archiveProjects: ArchiveProject[] = Object.keys(assets)
  .map((path) => {
    const file = path.split("/").pop() ?? "";
    const name = file.replace(/\.[^.]+$/, "").toLowerCase();
    return { name, heroImage: assets[path].src, photos: [], ...(meta[name] ?? {}) };
  })
  .sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true }));
