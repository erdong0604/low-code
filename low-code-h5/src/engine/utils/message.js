import {
  postMessageActionMap,
  SUB_ENGINE_NAME,
  PAGE_DATA_CONFIG,
} from "engine/constants";
import erdongUtils from "erdong-utils";
import { calcSortFn } from "engine/utils";
import store from "@/store";
class CusPostMessage {
  constructor() {
    this.origin = "*";
    this.isInit = false;
  }
  init() {
    if (this.isInit) return;
    this.isInit = true;
    window.addEventListener("message", async ({ data }) => {
      console.log("子级", data);
      switch (data.action) {
        case postMessageActionMap["RENDER"]: {
          const compData = await window[SUB_ENGINE_NAME].loadComponentByScript(
            data.data.fileUrl,
            data.data.comName
          );
          const addComp = {
            settings: compData.settings,
            name: compData.name,
            url: data.data.fileUrl,
            uuid: erdongUtils.guid(),
            sort: calcSortFn(),
          };
          window[PAGE_DATA_CONFIG].components.push(addComp);
          console.log(window[PAGE_DATA_CONFIG].components);
          window[SUB_ENGINE_NAME].reloadInit();
          break;
        }
      }
    });
  }
  post(params) {
    console.log(params);
    this.childrenIframe.contentWindow.postMessage(
      {
        action: params.action,
        data: params.data,
      },
      this.origin
    );
  }
}

export default new CusPostMessage();
