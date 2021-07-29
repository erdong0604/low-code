const path = require('path');
const fs = require('fs');

const mkdirFn = (dir) => {
  return new Promise((resolve, reject) =>{
    fs.mkdir(dir,function(err){
      if (err) {
        resolve(err);
        return;
      }
      resolve()
    });
  })
  
}

const generateFile =  (ctx,file) => {
    return new Promise(async (resolve, reject) =>{
      try{
        const dir = ctx.appConfig.staticFilePath;
        const savePath = path.join(process.cwd(),dir);
        await mkdirFn(savePath);
        const reader = fs.createReadStream(file.path);
        const ext = file.name.split('.').pop();
        const fileName = file.name||`${Math.random().toString().replace('.','')}.${ext}`;
        const upStream = fs.createWriteStream(`${savePath}/${fileName}`);
        reader.pipe(upStream);
        resolve(`${dir}/${fileName}`);
      }catch(e){
        reject(e);
      }
      
    })
}

const upload = async (ctx,next) => {
  try{
    const file = ctx.request.files?.file;
    if(!file){
      return ctx.fail('缺少file字段')
    }
    const result = await generateFile(ctx,file);
    ctx.success(result);
  }catch(e){
    ctx.fail('文件上传失败');
  }
}
module.exports = {
  upload,
  generateFile
}