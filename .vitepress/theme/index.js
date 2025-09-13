import DefaultTheme from 'vitepress/theme'
import './custom.css'

import BrowserIcons from './components/BrowserIcons.vue'
import VPCardLink from './components/VPCardLink.vue'

import VPSwiper from '@cssnr/vitepress-swiper'
import '@cssnr/vitepress-swiper/style.css'

import Contributors from '@cssnr/vitepress-plugin-contributors'
import '@cssnr/vitepress-plugin-contributors/style.css'
import contributors from '../contributors.json'

// noinspection JSUnusedGlobalSymbols
export default {
    ...DefaultTheme,

    enhanceApp({ app }) {
        app.component('BrowserIcons', BrowserIcons)
        app.component('VPCardLink', VPCardLink)
        app.component('VPSwiper', VPSwiper)
        app.component('Contributors', Contributors)
        app.config.globalProperties.$contributors = contributors
    },
}
