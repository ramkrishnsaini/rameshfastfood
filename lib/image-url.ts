/** Encode path segments for next/image when filenames contain spaces or special chars. */
export function publicImageSrc(path: string): string {
  return path
    .split("/")
    .map((segment) => (segment ? encodeURIComponent(segment) : ""))
    .join("/");
}
