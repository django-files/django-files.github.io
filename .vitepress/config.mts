import { defineConfig } from 'vitepress'

const settings = {
  title: 'Django Files',
  name: 'Django Files Upload Server',
  description: {
    short: 'Feature Packed Self-Hosted ShareX Upload Server.',
    long: 'A Feature Packed, Self-Hosted, File Upload and Sharing Server running in Docker for ShareX with Native Mobile Clients for All Platforms.',
  },
  image: '/images/logo.png',
  color: '#565aa9',
  docs_repo: 'https://github.com/django-files/django-files.github.io',
  source_repo: 'https://github.com/django-files/django-files',
}

// https://vitepress.dev/reference/site-config
// noinspection JSUnusedGlobalSymbols
export default defineConfig({
  srcDir: './docs',
  // base: '/path/',
  vite: {
    server: {
      allowedHosts: true,
    },
  },

  title: settings.title,
  description: settings.description.short,
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico', type: 'image/x-icon' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: settings.image }],

    ['meta', { name: 'algolia-site-verification', content: 'A026D8A8A0FFD15B' }],
    ['meta', { name: 'darkreader-lock' }],

    ['meta', { name: 'theme-color', content: settings.color }],
    ['meta', { name: 'description', content: settings.description.long }],

    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: settings.name }],
    ['meta', { property: 'og:title', content: settings.title }],
    ['meta', { property: 'og:description', content: settings.description.short }],
    ['meta', { property: 'og:image', content: settings.image }],
    ['meta', { property: 'og:image:alt', content: settings.title }],

    ['meta', { property: 'twitter:card', content: 'summary' }],
    ['meta', { property: 'twitter:site', content: settings.name }],
    ['meta', { property: 'twitter:title', content: settings.title }],
    ['meta', { property: 'twitter:description', content: settings.description.short }],
    ['meta', { property: 'twitter:image', content: settings.image }],
    ['meta', { property: 'twitter:image:alt', content: settings.title }],
  ],

  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: settings.title,
    logo: '/images/logo-sm.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guides', link: '/guides/get-started', activeMatch: '^/guides/' },
      { text: 'Clients', link: '/clients/', activeMatch: '^/clients/' },
      { text: 'Docs', link: '/docs/', activeMatch: '^/docs/' },
      {
        text: 'Links',
        items: [
          { text: 'GitHub Organization', link: 'https://github.com/django-files' },
          { text: 'Server Source Code', link: settings.source_repo },
          { text: 'Docs Source Code', link: settings.docs_repo },
          { text: 'Meet Our Team', link: '/team' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/django-files/django-files?tab=readme-ov-file#readme' },
      { icon: 'apple', link: 'https://github.com/django-files/ios-client?tab=readme-ov-file#readme' },
      { icon: 'googleplay', link: 'https://github.com/django-files/android-client?tab=readme-ov-file#readme' },
      { icon: 'googlechrome', link: 'https://github.com/django-files/web-extension?tab=readme-ov-file#readme' },
      { icon: 'vitepress', link: settings.docs_repo },
      { icon: 'discord', link: 'https://discord.gg/wXy6m2X8wY' },
    ],

    sidebar: [
      {
        text: 'Guides',
        base: '/guides',
        collapsed: false,
        items: [
          { text: 'Get Started', link: '/get-started' },
          { text: 'Server Setup', link: '/setup' },
          { text: 'Uploading', link: '/upload' },
          { text: 'Features', link: '/features' },
        ],
      },
      {
        text: 'Clients',
        base: '/clients',
        link: '/',
        items: [
          {
            text: 'Popular',
            collapsed: false,
            items: [
              { text: 'ShareX (Windows)', link: '/sharex' },
              { text: 'Flameshot (Linux)', link: '/flameshot' },
              { text: 'Shortcuts (macOS)', link: '/shortcuts' },
            ],
          },
          {
            text: 'Native',
            collapsed: false,
            items: [
              { text: 'iOS', link: '/ios' },
              { text: 'Android', link: '/android' },
              { text: 'Browser Addon', link: '/browser' },
              { text: 'Command Line', link: '/cli' },
            ],
          },
        ],
      },
      {
        text: 'Documentation',
        base: '/docs',
        collapsed: true,
        items: [{ text: 'Home', link: '/' }],
      },
    ],

    editLink: {
      pattern: `${settings.docs_repo}/blob/master/docs/:path`,
      text: 'View on GitHub',
    },

    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'medium',
      },
    },

    search: {
      // provider: 'local',
      provider: 'algolia',
      options: {
        appId: '5I6N4X5AVX',
        apiKey: '58ebf7571036ea603a099eeb44a0d687',
        indexName: 'django-files-docs',
      },
    },

    // footer: {
    //   message: '<a href="/privacy">Privacy Policy</a>',
    //   copyright: '<a href="/privacy">Privacy Policy</a>',
    // },

    // externalLinkIcon: true,
    outline: 'deep',
  },
})
