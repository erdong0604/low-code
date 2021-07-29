const Config = require('./../../config');
const utils =  require('./../../utils');
function useConfig(option = {}) {
  return async (ctx, next) => {
    ctx.appConfig = Config;
    ctx.appUtil = utils;
    await next();
  };
}

module.exports = useConfig;
