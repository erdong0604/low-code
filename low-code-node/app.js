const Koa = require("koa");
const app = new Koa();
const Router = require("koa-router");
const cors = require("koa2-cors");
const router = new Router();
const path = require("path");
const koaBody = require("koa-body");
const KoaStatic = require("koa-static");
const useConfig = require("./app/middleware/useConfig");
const Config = require("./config");
const generateRoutes = require("./router");
const routerResponse = require("./app/middleware/routerResponse");
const pageData = require("./pageData");
// router.get('/getPageData', async (ctx, next) => {
//   console.log(pageData);
//   ctx.response.body = pageData;
// });

app
  .use(KoaStatic('./'))
  .use(
    koaBody({
      multipart: true, //解析多个文件
      formidable: {
        maxFileSize: 100 * 1024 * 1024, // 设置上传文件大小最大限制，默认2M
      },
    })
  )
  .use(useConfig())
  .use(routerResponse());
   generateRoutes(app);
app.listen(Config.port, () => {
  console.log(`http://${Config.ipAddress}:${Config.port}`);
});
