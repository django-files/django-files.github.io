<script setup>
import 'animate.css'

// Variables
const chrome_url = 'https://chromewebstore.google.com/detail/django-files/abpbiefojfkekhkjnpakpekkpeibnjej'
const firefox_url = 'https://addons.mozilla.org/addon/django-files'

// Browsers
const baseUrl = 'https://cdnjs.cloudflare.com/ajax/libs/browser-logos/75.0.1'
const browsers = [
  { name: 'Chrome', url: chrome_url, img: 'chrome/chrome_48x48.png' },
  { name: 'Firefox', url: firefox_url, img: 'firefox/firefox_48x48.png' },
  { name: 'Edge', url: chrome_url, img: 'edge/edge_48x48.png' },
  { name: 'Opera', url: chrome_url, img: 'opera/opera_48x48.png' },
  { name: 'Brave', url: chrome_url, img: 'brave/brave_48x48.png' },
  // { name: 'Chromium', url: chrome_url, img: 'chromium/chromium_48x48.png' },
]

// Style from Props
const props = defineProps({
  animation: { type: String, default: null },
  centered: { type: Boolean, default: false },
  margin: { type: String, default: null },
})

const imageClass = props.animation ? `animate__animated ${props.animation}` : null

const iconStyle = {}
if (props.centered) iconStyle.textAlign = 'center'
if (props.margin) iconStyle.margin = props.margin
</script>

<template>
  <div class="browser-icons" :style="iconStyle">
    <a
      v-for="browser in browsers"
      :key="browser.name"
      :href="browser.url"
      :title="browser.name"
      class="px-1 hvr-grow-lg"
      target="_blank"
      rel="noopener"
    >
      <img :alt="browser.name" :src="`${baseUrl}/${browser.img}`" :class="imageClass" width="48" height="48" />
    </a>
  </div>
</template>

<style scoped>
.browser-icons {
  min-height: 48px;
}
.browser-icons a {
  display: inline-block;
  vertical-align: middle;
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  transition-duration: 0.3s;
  transition-property: transform;
}
.browser-icons a:hover {
  transform: scale(1.2);
}
</style>
