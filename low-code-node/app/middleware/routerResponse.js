function routerResponse(option = {}) {
  return async (ctx, next) => {
    ctx.success = function (data) {
      ctx.type = option.type || "json";
      ctx.body = {
        code: option.successCode || 200,
        msg: option.successMsg || "success",
        data: data || [],
      };
    };
    ctx.fail = function (msg, code) {
      console.log('err',msg);
      ctx.type = option.type || "json";
      ctx.body = {
        code: code || option.failCode || 99,
        msg: typeof msg === 'string'? msg:typeof msg === 'object'?JSON.stringify(msg):option.successMsg? option.successMsg: "请求失败",
      };
    };
    await next();
  };
}

module.exports = routerResponse;
