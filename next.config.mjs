import { dirname } from "path";
import { fileURLToPath } from "url";
import nextBuildId from "next-build-id";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  generateBuildId: () => nextBuildId({ dir: __dirname }),
  productionBrowserSourceMaps: true,
  reactStrictMode: true,
  experimental: {
    serverActions: true,
  },
};

export default nextConfig;
