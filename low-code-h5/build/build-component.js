const webpack = require("webpack");
const path = require("path");
const execSync = require("child_process").execSync;
// const genSnapshotFn = require("./gen-snapshot");
const { VueLoaderPlugin } = require("vue-loader");
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
const currentComName = process.argv[2];
if (!currentComName) {
  console.log("请指定要打包的组件》》》》》》》》》");
  return;
}
const capitalizationName = currentComName.toLocaleUpperCase();
const currentComEntry = path.resolve(
  __dirname,
  "../src/components",
  currentComName
);
const comDistPath = path.resolve(__dirname, "../com-dist", currentComName);
const webpackConfig = {
  mode: "production",
  entry: currentComEntry,
  output: {
    path: comDistPath,
    library: capitalizationName,
    libraryTarget: "umd",
    filename: `${currentComName}.js`,
    libraryExport: "default",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: (file) => /node_modules/.test(file) && !/\.vue\.js/.test(file),
      },
      {
        //vue 解析
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        //css 解析
        test: /\.css$/,
        // use: [MiniCssExtractPlugin.loader, "css-loader"],
        use: ["vue-style-loader", "css-loader"],
      },
      {
        //scss 解析
        test: /\.scss$/,
        // use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        use: ["vue-style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    // 请确保引入这个插件！
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: currentComName + ".css",
    }),
  ],
};

webpack(webpackConfig, async (err, stats) => {
  if (err || stats.hasErrors()) {
    console.error(err, stats);
    // process.exit(1);
  }
  console.log(
    stats.toString({
      chunks: false, // 使构建过程更静默无输出
      colors: true, // 在控制台展示颜色
    })
  );
  // 生成组件快照
  // await genSnapshotFn();
});
