
const fs = require('fs');
const path = require('path');
const controller = {}
fs.readdirSync(path.resolve(__dirname, './')).forEach(control => {
  let key = control.split('.')[0]
  if(key === 'index') return;
  controller[key] = require(`./${control}`);
})

module.exports = controller