const fs = require('fs')

const repoDir = './src/screenshots'
const varsFile = './src/js/vars.js'
const varName = 'screenShots'
const relPath = ''

const files = []
fs.readdirSync(repoDir).forEach((file) => {
    files.push(`${relPath}${file}`)
})
console.log(files)

const file = fs.createWriteStream(varsFile)
file.on('error', function (err) {
    console.error('err', err)
})
file.write(`const ${varName} = [\n`)
files.forEach(function (x) {
    file.write(`    '${x}',\n`)
})
file.write(']\n')
file.end()
