# Features

Django Files is packed with features for seamless file management and sharing.  
More features are in progress!

[[toc]]

::: info
Missing a feature? Submit a [Feature Request](https://github.com/django-files/django-files/discussions/categories/feature-requests) and we will get it added!
:::

## Core Features

- Local or S3 storage support
- One-click integration with ShareX, Flameshot
- [iOS Client](../clients/ios.md)
- [Android Client](../clients/android.md)
- Customizable UI with light/dark mode
- OAuth support (Discord, GitHub, Google) & two-factor authentication (Duo)
- [Web Extensions](../clients/browser.md) for Chrome and Firefox
- Public upload support (optional)

## Authentication & Security

- Multi-user support with local & OAuth authentication options
- Invite system for user onboarding
- OAuth configuration via Django Admin (no restart required)

## UI & File Management

- Drag & Drop file uploads
- Short URLs with vanity support
- Private & password-protected files
- Configurable EXIF metadata removal on upload
- Bulk file actions
- Albums & galleries for organizing files

## Stats & Insights

- Dashboard with user-friendly overview & stats
- Graph-based analytics (work in progress)
- File expiration & view counting

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
    class="swiper" style="height: 396px;">
<SwiperSlide v-for="i in 18" :key="i">
  <img :src="`https://raw.githubusercontent.com/django-files/repo-images/refs/heads/master/django-files/docs/${String(i).padStart(2, '0')}.jpg`" alt="Loading..." loading="lazy" />
</SwiperSlide>
</Swiper>
</ClientOnly>
