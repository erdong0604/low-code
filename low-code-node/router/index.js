const fs =  require('fs');
const path = require('path');

const generateRoutes = (app) => {
  fs.readdirSync(path.resolve(__dirname, './routes')).forEach(route=> {
    let api = require(`./routes/${route}`)
    app.use(api.routes(), api.allowedMethods())
  })
}

module.exports = generateRoutes;