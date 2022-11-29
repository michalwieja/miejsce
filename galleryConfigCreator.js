const fs = require('fs')

const path = require('path')

const p = path.join(process.cwd(), 'static', 'gallery')

const files = fs.readdirSync(p)

fs.writeFileSync('galleryConfig.json', JSON.stringify(files))
