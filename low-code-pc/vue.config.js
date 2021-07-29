const path = require("path");
const Config = require("./src/config");
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  chainWebpack: (config) => {
    //修改文件引入自定义路径
    config.resolve.alias
      .set("@", resolve("src"))
      .set("@com", resolve("src/components"))
      .set("@conf", resolve("src/config"))
      .set("@util", resolve("src/utils"));
  },
  devServer: {
    port: 8888,
    proxy: {
      "/lowCode": {
        target: Config.baseUrl,
        ws: true,
        changeOrigin: true,
      },
    },
  },
};
