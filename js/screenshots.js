// JS for screenshots.html

const baseDir = 'screenshots/'
const screenShots = [
    '01_Login.png',
    '02_Home.png',
    '03_Stats.png',
    '04_Gallery.png',
    '05_Upload.png',
    '06_Files.png',
    '07_Files-delete-click.png',
    '08_Files-delete-deleted.png',
    '09_Shorts.png',
    '10_Shorts-create.png',
    '11_Shorts-delete-click.png',
    '12_Shorts-delete-deleted.png',
    '13_Settings.png',
    '14_Settings-save-settings.png',
    '15_Settings-flush-cache.png',
    '16_Preview-gps2.jpg.png',
    '17_Raw-gps2.jpg.png',
    '18_Preview-README.md.png',
    '19_Preview-requirements.txt.png',
    '20_Preview-main.html.png',
    '21_Preview-home_tags.py.png',
    '22_Preview-an225.jpg.png',
    '23_logout.png',
]

const shotsEl = document.getElementById('swiper-shots')
const thumbsEl = document.getElementById('swiper-thumbs')

for (const shot of screenShots) {
    // console.debug('shot', shot)
    const div = document.createElement('div')
    div.classList.add('swiper-slide')
    const img = document.createElement('img')
    img.src = `${baseDir}${shot}`
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

const swiper2 = new Swiper('.mySwiper2', {
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
