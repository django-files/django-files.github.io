// JS for screenshots.html

const shotsEl = document.getElementById('swiper-shots')
const thumbsEl = document.getElementById('swiper-thumbs')

for (const shot of screenShots) {
    // console.debug('shot', shot)
    const div = document.createElement('div')
    div.classList.add('swiper-slide')
    const img = document.createElement('img')
    img.src = shot
    img.alt = shot
    div.appendChild(img)
    shotsEl.appendChild(div)
    thumbsEl.appendChild(div.cloneNode(true))
}

const swiper = new Swiper('.mySwiper', {
    freeMode: true,
    grabCursor: true,
    loop: true,
    mousewheel: true,
    slidesPerView: 5,
    spaceBetween: 10,
    watchSlidesProgress: true,
})

new Swiper('.mySwiper2', {
    grabCursor: true,
    effect: 'fade',
    loop: true,
    mousewheel: true,
    spaceBetween: 10,
    zoom: true,
    keyboard: {
        enabled: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },
    thumbs: {
        swiper: swiper,
    },
})
