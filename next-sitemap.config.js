/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://jorgenegrelli.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
  exclude: ['/api/*', '/admin', '/server-sitemap-index.xml'],
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: path === '/' ? 'weekly' : 'monthly',
      priority: path === '/' ? 1.0 : 0.7,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    }
  },
}