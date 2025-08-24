# Browser Addon

A Web Extension (Addon) is available for all major browsers including Firefox Android.

[[toc]]

More details available on GitHub: https://github.com/django-files/web-extension

## Install

Get it from Google or Mozilla.

- [Google Webstore](https://chromewebstore.google.com/detail/django-files/abpbiefojfkekhkjnpakpekkpeibnjej)
- [Mozilla Addons](https://addons.mozilla.org/addon/django-files)

[![Google Chrome](https://raw.githubusercontent.com/smashedr/logo-icons/master/browsers/chrome_48.png)](https://chromewebstore.google.com/detail/django-files/abpbiefojfkekhkjnpakpekkpeibnjej)
[![Mozilla Firefox](https://raw.githubusercontent.com/smashedr/logo-icons/master/browsers/firefox_48.png)](https://addons.mozilla.org/en-US/firefox/addon/django-files)
[![Microsoft Edge](https://raw.githubusercontent.com/smashedr/logo-icons/master/browsers/edge_48.png)](https://chromewebstore.google.com/detail/django-files/abpbiefojfkekhkjnpakpekkpeibnjej)
[![Opera](https://raw.githubusercontent.com/smashedr/logo-icons/master/browsers/opera_48.png)](https://chromewebstore.google.com/detail/django-files/abpbiefojfkekhkjnpakpekkpeibnjej)
[![Brave](https://raw.githubusercontent.com/smashedr/logo-icons/master/browsers/brave_48.png)](https://chromewebstore.google.com/detail/django-files/abpbiefojfkekhkjnpakpekkpeibnjej)
[![Chromium](https://raw.githubusercontent.com/smashedr/logo-icons/master/browsers/chromium_48.png)](https://chromewebstore.google.com/detail/django-files/abpbiefojfkekhkjnpakpekkpeibnjej)

::: details View QR Codes 📸

<h3>Mozilla Firefox Android</h3>

[![Firefox Android](https://raw.githubusercontent.com/django-files/repo-images/refs/heads/master/web-extension/qr/mozilla.png)](https://addons.mozilla.org/en-US/firefox/addon/django-files)

<h3>Google Chromium</h3>

[![Firefox Android](https://raw.githubusercontent.com/django-files/repo-images/refs/heads/master/web-extension/qr/google.png)](https://chromewebstore.google.com/detail/django-files/abpbiefojfkekhkjnpakpekkpeibnjej)
:::

## Setup

To configure, navigate to your Django Files site, and activate the extension popup.

Click `Authorize Server` and you are done!

Alternatively you can copy and paste your URL and Token into the Settings.

## Screenshots

<!--suppress HtmlUnknownAttribute -->
<script setup>
const requestFullscreen = () => document.querySelector('.swiper')?.requestFullscreen()
</script>

<button @click="requestFullscreen" style="display: inline-flex; align-items: center; gap: 0.5rem;">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-fullscreen-icon lucide-fullscreen"><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><rect width="10" height="8" x="7" y="8" rx="1"/></svg>
View in Full Screen
</button>

<!--suppress HtmlUnknownTag -->
<ClientOnly>
<Swiper
    :modules="[Keyboard, Mousewheel, Navigation, Pagination, EffectCoverflow]"
    :slides-per-view="1"
    :pagination="{ clickable: true, type: 'fraction' }"
    :coverflowEffect="{ slideShadows: false }"
    :keyboard="true"
    :mousewheel="true"
    :navigation="true"
    :grabCursor="true"
    :loop="true"
    :lazyPreloadPrevNext="1"
    :effect="'coverflow'"
    class="swiper">
<SwiperSlide v-for="i in 6" :key="i">
    <img :src="`https://raw.githubusercontent.com/django-files/repo-images/refs/heads/master/web-extension/docs/${i}.jpg`" alt="Loading..." loading="lazy" />
</SwiperSlide>
</Swiper>
</ClientOnly>
