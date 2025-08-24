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

<!--suppress CheckEmptyScriptTag, HtmlUnknownTag -->
<FullscreenButton />
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
