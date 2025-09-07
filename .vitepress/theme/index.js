import DefaultTheme from 'vitepress/theme'
import './custom.css'

import BrowserIcons from './components/BrowserIcons.vue'
import Contributors from './components/Contributors.vue'
import VPCardLink from './components/VPCardLink.vue'

import VPSwiper from '@cssnr/vitepress-swiper'
import '@cssnr/vitepress-swiper/style.css'

// noinspection JSUnusedGlobalSymbols
export default {
    ...DefaultTheme,

    enhanceApp({ app }) {
        app.component('BrowserIcons', BrowserIcons)
        app.component('Contributors', Contributors)
        app.component('VPCardLink', VPCardLink)
        app.component('VPSwiper', VPSwiper)
    },
}
