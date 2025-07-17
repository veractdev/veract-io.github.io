/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://veract.io',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 1.0,

  // Manually inject dynamic slugs into the sitemap
  additionalPaths: async (config) => {
    const dynamicSlugs = [
      'infrared-thermography',
      'accessible-web-widget'
    ];

    return dynamicSlugs.map((slug) => ({
      loc: `${config.siteUrl}/case-studies/${slug}`,
      changefreq: 'weekly',
      priority: 1,
      lastmod: new Date().toISOString(),
    }));
  },
};
