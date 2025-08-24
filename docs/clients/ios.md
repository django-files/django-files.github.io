# iOS

A Native iOS Application is Available.

[[toc]]

More details available on GitHub: https://github.com/django-files/ios-client

## Install

Get it from the Apple App Store.

[![Apple App Store](https://df.cssnr.com/raw/apple.png)](https://apps.apple.com/us/app/django-files/id6742523003)

::: details View QR Code 📸
[![Apple App Store](https://raw.githubusercontent.com/django-files/repo-images/refs/heads/master/ios-client/qr/apple.png)](https://apps.apple.com/us/app/django-files/id6742523003)
:::

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
<SwiperSlide v-for="i in 7" :key="i">
    <img :src="`https://raw.githubusercontent.com/django-files/repo-images/refs/heads/master/ios-client/docs/${i}.jpg`" alt="Loading..." loading="lazy" />
</SwiperSlide>
</Swiper>
</ClientOnly>
