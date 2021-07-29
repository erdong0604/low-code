/*
 * @Description:生成组件快照
 * @Author: chenM
 * @Date: 2021-07-15 16:18:36
 */
const execSync = require("child_process").execSync;
const net = require("net");
const Ip = require("ip");
const puppeteer = require("puppeteer");
const currentComName = process.argv[2];
const port = 8890;
const curIpAddress = Ip.address();

const genSnapshotFn = async (path) => {
  try {
    //判断端口有没有启用
    // const isOccupied = await portIsOccupied(port);
    // console.log(isOccupied);
    // if (!isOccupied) {
    //   execSync(`cd ../ && npm run serve`, { stdio: "inherit" });
    // }
    const browser = await puppeteer.launch({});
    const page = await browser.newPage();
    await page.goto(`http://${curIpAddress}:${port}`);
    await page.emulate(puppeteer.devices["iPhone 6"]);
    const body = await page.$("body");
    await body.screenshot({ path: `${currentComName}.png` });
    await browser.close();
  } catch (e) {
    console.log(e);
  }
};

// 检测端口是否被占用
function portIsOccupied(port) {
  return new Promise((resolve, reject) => {
    // 创建服务并监听该端口
    var server = net.createServer().listen(port);

    server.on("listening", function () {
      // 执行这块代码说明端口未被占用
      server.close(); // 关闭服务
      resolve(true);
    });

    server.on("error", function (err) {
      if (err.code === "EADDRINUSE") {
        resolve();
      }
    });
  });
}
genSnapshotFn();
