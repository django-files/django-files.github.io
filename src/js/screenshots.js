// JS for screenshots.html

const swiperImages = document.getElementById('swiper-images')
const swiperThumbs = document.getElementById('swiper-thumbs')

for (const shot of screenShots) {
    // console.debug('shot', shot)
    const div = document.createElement('div')
    div.classList.add('swiper-slide')
    const img = document.createElement('img')
    img.src = shot
    img.alt = shot
    div.appendChild(img)
    swiperImages.appendChild(div)
    swiperThumbs.appendChild(div.cloneNode(true))
}

const thumbs = new Swiper('.thumbs', {
    freeMode: true,
    grabCursor: true,
    loop: true,
    mousewheel: true,
    slidesPerView: 4,
    spaceBetween: 10,
    watchSlidesProgress: true,
})

const swiper = new Swiper('.images', {
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
        swiper: thumbs,
    },
})
