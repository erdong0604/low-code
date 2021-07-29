const componentModal = require("../model/component");



const upload = async (ctx, next) => {
  console.log(ctx.appConfig);
  try{
    const res = await componentModal.create();
    ctx.success(res);
  }catch(e){
    ctx.fail(e)
  }
};

module.exports = {
  upload
};
