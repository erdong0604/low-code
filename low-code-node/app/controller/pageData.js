const pageData = require("../../pageData");
const get = async (ctx, next) => {
  try{
    ctx.success(pageData);
  }catch(e){
    ctx.fail(e)
  }
};

module.exports = {
  get
};
