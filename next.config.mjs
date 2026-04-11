/** @type {import('next').NextConfig} */
// GitHub Pages (project site, f.eks. user.github.io/AminIsmail/): bygg med
// NEXT_PUBLIC_BASE_PATH=/AminIsmail npm run build
// (samme verdi som mappenavnet på GitHub, med ledende /, uten trailing slash)
const basePath = (process.env.NEXT_PUBLIC_BASE_PATH || "").trim().replace(/\/$/, "");

const nextConfig = {
  ...(basePath ? { basePath } : {}),
};

export default nextConfig;
