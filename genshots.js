const baseDir = './src/screenshots'

const fs = require('fs')
const files = []
fs.readdirSync(baseDir).forEach((file) => {
    files.push(file)
})
console.log(files)

const file = fs.createWriteStream('./src/js/vars.js')
file.on('error', function (err) {
    console.error('err', err)
})
file.write('const screenShots = [\n')
files.forEach(function (x) {
    file.write(`    '${x}',\n`)
})
file.write(']\n')
file.end()
