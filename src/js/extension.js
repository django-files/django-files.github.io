// JS for docs.html

document.addEventListener('DOMContentLoaded', function () {
    // console.debug('DOMContentLoaded')
    const searchParams = new URLSearchParams(window.location.search)
    const feedback = searchParams.get('feedback')
    // console.debug('feedback:', feedback)
    if (feedback) {
        document.getElementById('feedback').classList.remove('d-none')
        history.pushState(null, '', location.href.split('?')[0])
    }
})
