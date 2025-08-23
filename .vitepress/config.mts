import { defineConfig } from 'vitepress'

const settings = {
  title: 'Django Files',
  name: 'Django Files Upload Server',
  description: {
    short: 'Feature Packed Self-Hosted ShareX Upload Server.',
    long: 'A Feature Packed, Self-Hosted, Docker File Upload and Sharing Server with Native Clients for All Platforms.',
  },
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
    ['link', { rel: 'icon', href: '/favicon.ico', sizes: 'any' }],
    ['meta', { name: 'darkreader-lock' }],

    ['meta', { name: 'theme-color', content: '#565aa9' }],
    ['meta', { name: 'description', content: settings.description.long }],

    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: settings.name }],
    ['meta', { property: 'og:title', content: settings.title }],
    ['meta', { property: 'og:description', content: settings.description.short }],
    ['meta', { property: 'og:image', content: '/images/logo-lg.png' }],
    ['meta', { property: 'og:image:alt', content: settings.title }],

    ['meta', { property: 'twitter:card', content: 'summary' }],
    ['meta', { property: 'twitter:site', content: settings.name }],
    ['meta', { property: 'twitter:title', content: settings.title }],
    ['meta', { property: 'twitter:description', content: settings.description.short }],
    ['meta', { property: 'twitter:image', content: '/images/logo-lg.png' }],
    ['meta', { property: 'twitter:image:alt', content: settings.title }],
  ],

  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: settings.title,
    logo: '/images/logo-sm.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guides', link: '/guides/get-started', activeMatch: '/guides/' },
      { text: 'Clients', link: '/clients/home', activeMatch: '/clients/' },
      { text: 'Docs', link: '/docs/home', activeMatch: '/docs/' },
      {
        text: 'Links',
        items: [
          { text: 'GitHub Organization', link: 'https://github.com/django-files' },
          { text: 'Server Source Code', link: 'https://github.com/django-files/django-files' },
          { text: 'Docs Source Code', link: 'https://github.com/django-files/docs' },
          { text: 'Our Team', link: '/team' },
        ],
      },
    ],

    sidebar: [
      {
        text: 'Guides',
        collapsed: false,
        items: [
          {
            text: 'Get Started',
            collapsed: false,
            link: '/guides/get-started',
            items: [
              { text: 'Server Setup', link: '/guides/setup' },
              { text: 'Uploading', link: '/guides/upload' },
            ],
          },
          {
            text: 'Features',
            link: '/guides/features',
          },
        ],
      },
      {
        text: 'Clients',
        collapsed: false,
        items: [
          {
            text: 'Uploaders',
            link: '/clients/home',
          },
          {
            text: 'Popular',
            collapsed: false,
            items: [
              { text: 'ShareX (Windows)', link: '/clients/sharex' },
              { text: 'Flameshot (Linux)', link: '/clients/flameshot' },
              { text: 'Shortcuts (macOS)', link: '/clients/shortcuts' },
            ],
          },
          {
            text: 'Native',
            collapsed: false,
            items: [
              { text: 'iOS', link: '/clients/ios' },
              { text: 'Android', link: '/clients/android' },
              { text: 'Browser Addon', link: '/clients/browser' },
              { text: 'Command Line', link: '/clients/cli' },
            ],
          },
        ],
      },
      {
        text: 'Documentation',
        collapsed: false,
        items: [{ text: 'Home', link: '/docs/home' }],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/django-files/django-files?tab=readme-ov-file#readme' },
      { icon: 'apple', link: 'https://github.com/django-files/ios-client?tab=readme-ov-file#readme' },
      { icon: 'googleplay', link: 'https://github.com/django-files/android-client?tab=readme-ov-file#readme' },
      { icon: 'googlechrome', link: 'https://github.com/django-files/web-extension?tab=readme-ov-file#readme' },
      { icon: 'discord', link: 'https://discord.gg/wXy6m2X8wY' },
    ],

    editLink: {
      pattern: 'https://github.com/django-files/docs/blob/master/docs/:path',
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
      provider: 'local',
      // provider: 'algolia',
      // options: {
      //   appId: 'XXXXXXXXXX',
      //   apiKey: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      //   indexName: 'django-files-docs',
      // },
    },

    // footer: {
    //   message: '<a href="/privacy">Privacy Policy</a>',
    //   copyright: '<a href="/privacy">Privacy Policy</a>',
    // },

    // externalLinkIcon: true,
    outline: 'deep',
  },
})
