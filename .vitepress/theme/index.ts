import DefaultTheme, { VPBadge } from 'vitepress/theme'
import './custom.css'

// import Layout from './Layout.vue'

import BrowserIcons from './components/BrowserIcons.vue'
import VPCardLink from './components/VPCardLink.vue'

import CopyButton from '@cssnr/vitepress-plugin-copybutton'
import '@cssnr/vitepress-plugin-copybutton/style.css'

import Contributors from '@cssnr/vitepress-plugin-contributors'
import '@cssnr/vitepress-plugin-contributors/style.css'
import contributors from '../contributors.json'

import VPSwiper from '@cssnr/vitepress-swiper'
import '@cssnr/vitepress-swiper/style.css'

import chat from 'vitepress-chat'
import 'vitepress-chat/style.css'

// https://vitepress.dev/guide/extending-default-theme
// noinspection JSUnusedGlobalSymbols
/** @type {import('vitepress').Theme} */
export default {
  ...DefaultTheme,

  // Layout: Layout,

  ...chat(DefaultTheme, {
    api: import.meta.env.VITE_AI_API,
    headers: import.meta.env.VITE_AI_AUTH ? { Authorization: import.meta.env.VITE_AI_AUTH } : undefined,
    filePath: 'llms.txt',
  }),

  enhanceApp({ app }) {
    app.component('Badge', VPBadge)

    app.component('BrowserIcons', BrowserIcons)
    app.component('VPCardLink', VPCardLink)

    app.component('CB', CopyButton)

    app.component('Contributors', Contributors)
    app.config.globalProperties.$contributors = contributors

    app.component('VPSwiper', VPSwiper)
  },
}
