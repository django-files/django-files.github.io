# iOS

A Native iOS Application is Available.

[[toc]]

More details available on GitHub: https://github.com/django-files/ios-client

## Install

- [Apple App Store](https://apps.apple.com/us/app/django-files/id6742523003)

## Setup

Navigate to: `User Settings` > `Clients`

Click on the `View QR Authentication Code` button.

1. If you are on your phone, click on the QR.
2. If on a computer, scan the QR code with your phone.

Click `Add Server` and you are done!

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
    :breakpoints="{ 1096: { slidesPerView: 3 }}"
    :pagination="{ clickable: true, type: 'fraction' }"
    :coverflowEffect="{ slideShadows: false }"
    :keyboard="true"
    :mousewheel="true"
    :navigation="true"
    :grabCursor="true"
    :loop="true"
    :lazyPreloadPrevNext="2"
    :effect="'coverflow'"
    class="swiper">
<SwiperSlide v-for="i in 7" :key="i">
    <img :src="`https://raw.githubusercontent.com/django-files/repo-images/refs/heads/master/ios-client/docs/${i}.jpg`" alt="Loading..." loading="lazy" />
</SwiperSlide>
</Swiper>
</ClientOnly>
