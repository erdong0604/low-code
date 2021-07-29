import eventBus from "@/helper/eventBus";
import CusPostMessage from "@/helper/message";
import { postMessageActionMap } from "@/helper/constants";
import { loadComponentByScript } from "@/helper/loadScript";
import Config from "@/config";
class Drag {
  constructor() {
    this.pageIframe = null; // iframeDom
    this.iframeDomCoord = {}; // iframeDom 坐标
    this.dragDom = null; // 被拖拽的元素
    this.dragDomCoord = {}; // 被拖拽的元素的坐标
    this.beginMouseCoord = {};
    this.isBump = false;
    this.dragComp = null; // 当前拖拽的组件
    window.addEventListener("resize", () => {
      this.getIframeCoord();
    });
  }
  initDrag(params) {
    this.pageIframe = params.iframe;
    this.getIframeCoord();
  }
  // 元素开始拖拽
  onDragstart(e, com) {
    this.dragComp = com;
    this.beginMouseCoord = e;
    this.dragDom = e.target;
    this.dragDomCoord = this.dragDom.getBoundingClientRect();
  }
  // 元素拖拽中
  onDrag(e) {
    // console.log("onDrag", this.beginMouseCoord.x);
    const { x, y, width, height } = this.dragDomCoord;
    let newX = x + e.x - this.beginMouseCoord.x;
    let newY = y + e.y - this.beginMouseCoord.y;
    const coord1 = {
      x: newX,
      y: newY,
      width,
      height,
    };
    const coord2 = this.iframeDomCoord;
    const isBump = this.checkIsBump(coord1, coord2);
    if (!e.x && !e.y) return; // 停止拖拽
    // 如果检测到碰撞需要添加占位
    this.isBump = isBump;
    eventBus.$emit("ondrag", isBump);
    e.preventDefault();
  }
  // 拖拽结束
  async onDragend() {
    // 如果释放时是碰撞状态
    if (this.isBump) {
      // 请求到当前组件的数据
      let { fileUrl, comName } = this.dragComp;
      fileUrl = `${Config.baseUrl}${fileUrl}`;
      // // 加载组件数据 即使加载了使用postmassage 也无法传送 改成通知子级子级调用
      // const compData = await loadComponentByScript(fileUrl, comName);
      // console.log(compData);
      // 通知渲染
      CusPostMessage.post({
        action: postMessageActionMap["RENDER"],
        data: {
          fileUrl,
          comName,
        },
      });
    }

    eventBus.$emit("ondrag", false);
  }
  // 获取iframe坐标
  getIframeCoord() {
    if (!this.pageIframe) return;
    this.iframeDomCoord = this.pageIframe.getBoundingClientRect();
  }
  // 检测是否拖拽到iframe中
  checkIsBump(coord1, coord2) {
    return (
      coord1.y < coord2.bottom &&
      coord1.y + coord1.height > coord2.top &&
      coord1.x < coord2.left + coord2.width &&
      coord1.x + coord1.width > coord2.x
    );
  }
}

export default new Drag();
