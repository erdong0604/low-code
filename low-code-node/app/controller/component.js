const fs = require('fs');
const path = require('path');
const componentModal = require("../model/component");
const { generateFile } = require("./upload")

const upload = async (ctx, next) => {
  const { name,type,fileUrl,thumbnail,desc } = ctx.request.body;
  if(!name || !type || !fileUrl || !thumbnail){
    return ctx.fail('缺少必要字段');
  }
  try{
    const res = await componentModal.save({
      name,
      type,
      fileUrl,
      thumbnail,
      desc
    });
    ctx.success(res);
  }catch(e){
    console.log(e);
    ctx.fail(e)
  }
};

const list = async (ctx, next) => {
  try{
    const res = await componentModal.find();
    ctx.success(res);
  }catch(e){
    console.log(e);
    ctx.fail(e)
  }
}
module.exports = {
  upload,
  list
};
