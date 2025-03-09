import type { MetadataRoute } from "next";

export default function generateSitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://minihjorne.no";

  return [
    // Main pages
    { url: `${baseUrl}/`, lastModified: new Date().toISOString() },
    {
      url: `${baseUrl}/brukte-babyklaer`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/brukte-barne-klaer`,
      lastModified: new Date().toISOString(),
    },
    { url: `${baseUrl}/checkout`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/handlekurv`, lastModified: new Date().toISOString() },
    {
      url: `${baseUrl}/kjopbetingelser`,
      lastModified: new Date().toISOString(),
    },
    { url: `${baseUrl}/kommer-snart`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/om-oss`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/personvern`, lastModified: new Date().toISOString() },
    // { url: `${baseUrl}/salgsprofiler`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/selgervilkar`, lastModified: new Date().toISOString() },

    // "Om oss" section
    {
      url: `${baseUrl}/om-oss/full-service-pakke`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/om-oss/hva-er-minihjorne`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/om-oss/hvordan-funker-det`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/om-oss/hvordan-selge`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/om-oss/hvorfor-bruke-oss`,
      lastModified: new Date().toISOString(),
    },
  ];
}
