/** @type {import('next').NextConfig} */
// GitHub Pages (prosjektside): bygg med NEXT_PUBLIC_BASE_PATH=/RepoNavn (ledende /, ingen trailing /)
const fromEnv = (process.env.NEXT_PUBLIC_BASE_PATH || "").trim().replace(/\/$/, "");
// På Vercel ligger appen alltid på rot — ignorer evt. feilsatt NEXT_PUBLIC_BASE_PATH der (ellers 404 på /_next/*)
const onVercel = process.env.VERCEL === "1";
const siteBasePath = onVercel ? "" : fromEnv;

const nextConfig = {
  ...(siteBasePath ? { basePath: siteBasePath } : {}),
  env: {
    // Kun fra denne filen; klient bruker denne (ikke rå NEXT_PUBLIC_BASE_PATH) for /sequence osv.
    NEXT_PUBLIC_SITE_BASE_PATH: siteBasePath,
  },
};

export default nextConfig;
