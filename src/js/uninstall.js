// JS uninstall.html

const url = new URL(window.location)
const redirect = new URL(url.origin)
redirect.searchParams.append('feedback', 'yes')
redirect.pathname = '/extension/'

const version = url.searchParams.get('version') || 'unknown'

const noAlertVersion = '0.7.0'
const discordUsername = 'Django Files'
const uninstallMessage = `${discordUsername} Uninstall, Version: **${version}**`
const discordAvatar = 'https://django-files.github.io/media/logo.png'

const contentWrapper = document.getElementById('content-wrapper')
const uninstallForm = document.getElementById('uninstall-form')
const userResponse = document.getElementById('user-response')
const inputCount = document.getElementById('input-count')
const submitBtn = document.getElementById('submit-btn')
const errorAlert = document.getElementById('error-alert')
const notWorkingAlert = document.getElementById('not-working-alert')
const bugReport = document.getElementById('bug-report')

uninstallForm.addEventListener('change', formChange)
uninstallForm.addEventListener('submit', formSubmit)

userResponse.addEventListener('input', function () {
    inputCount.textContent = this.value.length
})

contentWrapper.addEventListener(
    'animationend',
    () => {
        // console.debug('contentWrapper: animationend')
        contentWrapper.classList.remove(
            'animate__animated',
            'animate__backInDown'
        )
    },
    { once: true }
)

window.addEventListener(
    'focus',
    () => bugReport.classList.add('animate__shakeX'),
    { once: true }
)

document.addEventListener('DOMContentLoaded', async function () {
    if (version) {
        const res = version.localeCompare(noAlertVersion, undefined, {
            numeric: true,
            sensitivity: 'base',
        })
        if (res === -1) {
            console.debug(`Show Warning for Version: ${version}`)
            document.getElementById('alerts')?.classList.remove('d-none')
        }
    }

    if (document.hasFocus()) {
        bugReport.classList.add('animate__shakeX')
    }

    await tsParticles.load({
        id: 'tsparticles',
        url: '/config/tsparticles.json',
    })
    // const particles = tsParticles.domItem(0)
    // console.debug('particles:', particles)
    // particles.play()
})

function formChange(event) {
    // console.debug('formChange:', event)
    if (event.target.id === 'not-working') {
        if (event.target.checked) {
            notWorkingAlert.classList.remove('d-none')
        } else {
            notWorkingAlert.classList.add('d-none')
        }
    }
}

async function formSubmit(event) {
    console.debug('formSubmit:', event)
    event.preventDefault()
    errorAlert.style.display = 'none'
    const url = event.target.elements['relay-url'].value
    const notUsed = event.target.elements['not-used'].checked
    const notExpected = event.target.elements['not-expected'].checked
    const notWorking = event.target.elements['not-working'].checked
    const feedbackText = event.target.elements['user-response'].value.trim()
    if (!(notUsed || notExpected || notWorking || feedbackText)) {
        userResponse.focus()
        animateCSS('textarea', 'shakeX')
        return console.warn('No Data to Send.')
    }
    submitBtn.classList.add('disabled')

    const parser = new UAParser()
    const r = parser.getResult()
    const type = r.browser.type ? ` - ${r.browser.type}` : ''
    const lines = [
        uninstallMessage,
        `**Browser**: ${r.browser.name} ${r.browser.major} (${r.engine.name} - ${r.browser.version})`,
        `**System**: ${r.os.name} ${r.os.version} (${r.cpu.architecture}${type})`,
        `${getBoolIcon(notUsed)} Not Used`,
        `${getBoolIcon(notExpected)} Not as Expected`,
        `${getBoolIcon(notWorking)} Not Working`,
    ]
    if (feedbackText) {
        lines.push(`\`\`\`\n${feedbackText}\n\`\`\``)
    }
    // console.debug('lines:', lines)
    try {
        const response = await sendDiscord(url, lines.join('\n'))
        // console.debug('response:', response)
        if (response.status >= 200 && response.status <= 299) {
            contentWrapper.classList.add(
                'animate__animated',
                'animate__backOutUp'
            )
            window.location = redirect
        } else {
            console.warn(`Error ${response.status}`, response)
            errorAlert.textContent = `Error ${response.status}: ${response.statusText}`
            errorAlert.style.display = 'block'
        }
    } catch (e) {
        console.error(e)
        errorAlert.textContent = `Error: ${e.message}`
        errorAlert.style.display = 'block'
    }
    submitBtn.classList.remove('disabled')
}

/**
 * @function sendDiscord
 * @global discordUsername
 * @global discordAvatar
 * @param {String} url Discord Webhook URL
 * @param {String} content Message Contents
 * @return {Promise<Response>}
 */
async function sendDiscord(url, content) {
    // console.debug('sendDiscord', url, content)
    // console.debug('content.length', content.length)
    const body = {
        username: discordUsername,
        avatar_url: discordAvatar,
        content: content,
    }
    const opts = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    }
    return await fetch(url, opts)
}

/**
 * @function getBoolIcon
 * @param {Boolean} value
 * @return {String}
 */
function getBoolIcon(value) {
    if (value) {
        return '✅'
    } else {
        return '🔳'
    }
}
