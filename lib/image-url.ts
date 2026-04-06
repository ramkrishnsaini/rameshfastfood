import { assetPath } from "@/lib/base-path";

/** Encode path segments for next/image when filenames contain spaces or special chars. */
export function publicImageSrc(path: string): string {
  const prefixed = assetPath(path);
  return prefixed
    .split("/")
    .map((segment) => (segment ? encodeURIComponent(segment) : ""))
    .join("/");
}
