# Android

A Native Android Application is Available.

[[toc]]

More details available on GitHub: https://github.com/django-files/android-client

## Install

Get it from GitHub or Obtainium.

[![GitHub](https://raw.githubusercontent.com/django-files/repo-images/refs/heads/master/badges/get/github.png)](https://github.com/django-files/android-client/releases/latest/download/app-release.apk)
[![Obtainium](https://raw.githubusercontent.com/django-files/repo-images/refs/heads/master/badges/get/obtainium.png)](https://apps.obtainium.imranr.dev/redirect?r=obtainium://add/https://github.com/django-files/android-client)

::: details View QR Codes 📸
[![Firefox Android](https://raw.githubusercontent.com/smashedr/repo-images/refs/heads/master/django-files/android/qr-code-github.png)](https://github.com/django-files/android-client/releases/latest/download/app-release.apk)

[![Firefox Android](https://raw.githubusercontent.com/smashedr/repo-images/refs/heads/master/django-files/android/qr-code-obtainium.png)](https://apps.obtainium.imranr.dev/redirect?r=obtainium://add/https://github.com/django-files/android-client)
:::

_Note: Google Play is currently in closed testing._

## Setup

Navigate to: `User Settings` > `Clients`

Click on the `View QR Authentication Code` button.

1. If you are on your phone, click on the QR.
2. If on a computer, scan the QR code with your phone.

Click `Add Server` and you are done!

## Screenshots

<!--suppress CheckEmptyScriptTag, HtmlUnknownTag -->
<FullscreenButton />
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
<SwiperSlide v-for="i in 18" :key="i">
    <img :src="`https://raw.githubusercontent.com/smashedr/repo-images/refs/heads/master/django-files/android/screenshots/${i}.jpg`" alt="Loading..." loading="lazy" />
</SwiperSlide>
</Swiper>
</ClientOnly>
