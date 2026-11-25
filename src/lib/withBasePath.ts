// Adds the GitHub Pages sub-path (/nextjs-blog) to local file paths like /assets/x.png
export function withBasePath(path?: string) {
  if (!path) return undefined;
  if (!path.startsWith("/")) return path;
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
}
