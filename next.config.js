/** @type {import('next').NextConfig} */
const basePath = "/nextjs-blog";

module.exports = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};
