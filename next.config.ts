import type { NextConfig } from "next";

const raw = (process.env.NEXT_PUBLIC_BASE_PATH || "").trim();
const basePath =
  raw.replace(/^\/+|\/+$/g, "") === ""
    ? undefined
    : `/${raw.replace(/^\/+|\/+$/g, "")}`;

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  ...(basePath ? { basePath } : {}),
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
