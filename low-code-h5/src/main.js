// const jsonData = {
//   body: {},
//   components: [
//     {
//       name: "CusImage",
//       sort: 0,
//       props_data: {
//         src: "https://web-data.zmlearn.com/image/DkkWpunNKHhA6kFFUByUC/1619685987(1).jpg",
//         width: "300",
//         height: "400",
//         isJump: true,
//         jumpUrl: "www.baidu.com",
//         align: "center",
//       },
//     },
//     {
//       name: "CusImage",
//       sort: 1,
//       props_data: {
//         src: "https://web-data.zmlearn.com/image/kspWDSYC4b6d8S7ttQYyy2/1619685878(1).jpg",
//         width: "300",
//         height: "400",
//         isJump: true,
//         jumpUrl: "www.baidu.com",
//         align: "flex-end",
//       },
//     },
//     {
//       name: "CusImage",
//       sort: 1,
//       props_data: {
//         src: "https://web-data.zmlearn.com/image/kspWDSYC4b6d8S7ttQYyy2/1619685878(1).jpg",
//         width: "300",
//         height: "400",
//         isJump: true,
//         jumpUrl: "www.baidu.com",
//         align: "flex-end",
//       },
//     },
//   ],
// };

// import CusImage from "@/components/CusImage";
// // console.log(CusImage.install);
// // Vue.use(CusImage);
// console.log(CusImage);
// setTimeout(() => {
//   jsonData.components.forEach((com) => {
//     const curCom = require(`@/components/${com.name}`);
//     Vue.use(curCom.default);
//     store.state.currentComponentItems.push(com);
//   });
// }, 2000);
// import aa from "./aa.js";
// console.log(aa);
import Engine from "@/engine";
import { SUB_ENGINE_NAME } from "engine/constants";
require("@/assets/reset.css");
window[SUB_ENGINE_NAME] = new Engine();
