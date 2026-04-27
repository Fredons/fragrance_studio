/**
 * Canonical site URL used by metadata, sitemap, robots and JSON-LD.
 *
 * Resolution order:
 *   1. NEXT_PUBLIC_SITE_URL — explicit override (set this when the custom
 *      domain goes live, e.g. https://fragrancestudios.ng)
 *   2. VERCEL_PROJECT_PRODUCTION_URL — auto-injected by Vercel, points to
 *      the project's production alias (e.g. fragrance-studio.vercel.app)
 *   3. VERCEL_URL — auto-injected per deployment (used on previews if the
 *      production alias var isn't available)
 *   4. http://localhost:3000 — local dev fallback
 *
 * No trailing slash. Always absolute.
 */
function inferSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");

  const prod = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (prod) return `https://${prod}`;

  const deploy = process.env.VERCEL_URL;
  if (deploy) return `https://${deploy}`;

  return "http://localhost:3000";
}

export const SITE_URL = inferSiteUrl();
