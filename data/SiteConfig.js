const config = {
  siteTitle: 'مدونة شارك تك',
  siteTitleShort: 'مدونة شارك تك',
  siteTitleAlt: 'مدونة شارك تك',
  siteLogo: '/logos/logo-1024.png',
  siteUrl: 'https://www.sharektech.com',
  repo: '',
  pathPrefix: '',
  dateFromFormat: 'YYYY-MM-DD',
  dateFormat: 'MMMM Do, YYYY',
  siteDescription:
  'في مدونة شارك تك ننشر ونشارك كل ما له علاقة بالتقنية في مختلف المجالات ، ونولي اهتماما خاصا للغات البرمجة وتصميم وإدارة قواعد البيانات. بالإضافة إلى أمن المعلومات. نحاول جاهدين في ان تكون مقالاتنا سهله وبسيطه حتى تكون مفهومه من الجميع .',
  siteRss: '/rss.xml',
  googleAnalyticsID: 'G-LT6N8BNM5K',
  postDefaultCategoryID: 'تقنية',
  userName: 'sharektech',
  userEmail: 'info@sharektech.com',
  userTwitter: 'sharektech',
  gatsby_disqus_name: 'sharektech',
  menuLinks: [
    {
      name: 'عن شارك تك ؟',
      link: '/about-us/',
    },
    {
      name: 'المقالات',
      link: '/blog/',
    },
    {
      name: 'اتصل بنا',
      link: '/contact/',
    },
  ],
  themeColor: '#3F80FF', // Used for setting manifest and progress theme colors.
  backgroundColor: '#ffffff',
  patreonPageUrl: '',
};

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === '/') {
  config.pathPrefix = '';
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, '')}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === '/')
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== '/')
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
