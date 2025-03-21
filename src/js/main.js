// JS Main

document
    .querySelectorAll('[data-clipboard-text], [data-clipboard-target]')
    .forEach((el) => el.addEventListener('click', (e) => e.preventDefault()))
// document
//     .querySelectorAll('[data-bs-toggle="tooltip"]')
//     .forEach((el) => new bootstrap.Tooltip(el))

const backToTop = document.getElementById('back-to-top')

if (backToTop) {
    window.addEventListener('scroll', debounce(onScroll))
    backToTop.addEventListener('click', () => {
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
    })
}

if (typeof ClipboardJS !== 'undefined') {
    const clipboard = new ClipboardJS(
        '[data-clipboard-text], [data-clipboard-target]'
    )
    clipboard.on('success', function (event) {
        // console.debug('clipboard.success:', event)
        // const text = event.text
        // console.debug(`text: "${text}"`)
        if (event.trigger.dataset.toast) {
            showToast(event.trigger.dataset.toast)
        } else {
            showToast('Copied to Clipboard')
        }
    })
    clipboard.on('error', function (event) {
        console.log('clipboard.error:', event)
        showToast('Clipboard Copy Failed', 'warning')
    })
}

// document.addEventListener('DOMContentLoaded', domContentLoaded)
//
// async function domContentLoaded() {
//     // console.debug('DOMContentLoaded')
//
//     // Register Service Worker
//     if ('serviceWorker' in navigator) {
//         await registerServiceWorker()
//     }
// }
//
// async function registerServiceWorker() {
//     try {
//         const registration = await navigator.serviceWorker.register('/sw.js', {
//             scope: '/',
//         })
//         // console.debug('registerServiceWorker:', registration)
//         if (registration.installing) {
//             console.debug('Service worker: installing')
//         } else if (registration.waiting) {
//             console.debug('Service worker: waiting')
//         } else if (registration.active) {
//             console.debug('Service worker: active')
//         } else {
//             console.warn('Service worker unknown:', registration)
//         }
//     } catch (error) {
//         console.error('Service Worker Registration Error:', error)
//     }
// }

/**
 * On Scroll Callback
 * @function onScroll
 */
function onScroll() {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        backToTop.style.display = 'block'
    } else {
        backToTop.style.display = 'none'
    }
}

/**
 * Show Bootstrap Toast
 * @function showToast
 * @param {String} message
 * @param {String} [type]
 */
function showToast(message, type = 'success') {
    console.debug(`showToast: ${type}: ${message}`)
    const clone = document.querySelector('.d-none .toast')
    const container = document.getElementById('toast-container')
    if (!clone || !container) {
        return console.warn('Missing clone or container:', clone, container)
    }
    const element = clone.cloneNode(true)
    element.querySelector('.toast-body').innerHTML = message
    element.classList.add(`text-bg-${type}`)
    container.appendChild(element)
    const toast = new bootstrap.Toast(element)
    element.addEventListener('mousemove', () => toast.hide())
    toast.show()
}

/**
 * DeBounce Function
 * @function debounce
 * @param {Function} fn
 * @param {Number} timeout
 */
function debounce(fn, timeout = 250) {
    let timeoutID
    return (...args) => {
        clearTimeout(timeoutID)
        timeoutID = setTimeout(() => fn(...args), timeout)
    }
}

const animateCSS = (selector, animation, prefix = 'animate__') => {
    const name = `${prefix}${animation}`
    const node = document.querySelector(selector)
    node.classList.add(`${prefix}animated`, name)
    function handleAnimationEnd(event) {
        event.stopPropagation()
        node.classList.remove(`${prefix}animated`, name)
    }
    node.addEventListener('animationend', handleAnimationEnd, {
        once: true,
    })
}
