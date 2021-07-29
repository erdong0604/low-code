import Vue from "vue";
import { runEnvironmentMap, PAGE_DATA_CONFIG } from "engine/constants";
import startDev from "engine/dev";
import sandbox from "engine/sandbox";
import CusPostMessage from "engine/utils/message";
class Engine {
  constructor(options = {}) {
    this.runEnvironment = process.env.NODE_ENV; // 当前执行引擎的环境 开发/测试/生产
    this.pageData = null;
    this.componentData = null;
    this.componentLoadData = {};
    this.init();
  }
  async init() {
    if (this.runEnvironment === runEnvironmentMap["DEVELOPMENT"]) {
      // 本地开发组件环境;
    }
    // 线上运行环境
    // 1.获取页面数据
    switch (this.runEnvironment) {
      case runEnvironmentMap["DEVELOPMENT"]:
        startDev();
        break;
      case runEnvironmentMap["SANDBOX"]:
        try {
          this.pageData = await this.getPageData();
          if (!this.pageData) return (document.body.innerHTML = "暂无数据");
          // 把组件排序
          this.componentData = this.pageData.components.sort(
            (a, b) => b.sort - a.sort
          );

          //load组件数据
          await this.loadComponentData();
          console.log("his.componentData", this.componentData);
          sandbox(this.componentData, this.componentLoadData);
          CusPostMessage.init();
          // //添加组件渲染容器
          // this.generatorComDom();
          // //渲染组件
          // this.renderComponent();
        } catch (e) {
          console.log(e);
        }
        break;
    }
  }
  reloadInit() {
    this.init();
  }
  // 获取页面数据，如果是测试环境，则从当前script中获取
  async getPageData() {
    if (!window[PAGE_DATA_CONFIG]) {
      await this.simulationLocalData();
    }

    return Promise.resolve(window[PAGE_DATA_CONFIG]);
    // return new Promise((resolve, reject) => {
    //   fetch("http://192.168.46.40:8889/getPageData")
    //     .then(function (response) {
    //       return response.json();
    //     })
    //     .then(function (myJson) {
    //       resolve(myJson);
    //     });
    // });
  }
  getComponentData(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(function (response) {
          return response.json();
        })
        .then(function (myJson) {
          resolve(myJson);
        });
    });
  }
  // 加载组件数据
  async loadComponentData() {
    for (let i = 0; i < this.componentData.length; i++) {
      let com = this.componentData[i];
      this.componentLoadData[com.name] = await this.loadComponentByScript(
        com.url,
        com.name
      );
    }
  }
  // 通过script加载组件数据
  loadComponentByScript(src, name) {
    return new Promise((resolve, reject) => {
      if (window[name.toLocaleUpperCase()]) {
        resolve(window[name.toLocaleUpperCase()]);
        return;
      }
      const scriptDom = document.createElement("script");
      const head = document.querySelector("head");
      scriptDom.src = src;
      scriptDom.onload = () => {
        resolve(window[name.toLocaleUpperCase()]);
      };
      head.appendChild(scriptDom);
    });
  }
  generatorComDom() {
    const parentDom = document.body;
    let html = "";
    this.componentData.forEach((com) => {
      const divDom = document.createElement("div");
      let id = `${com.name}-wrapper_${com.sort}`;
      divDom.id = id;
      com.id = id;
      parentDom.appendChild(divDom);
    });
  }
  renderComponent() {
    this.componentData.forEach((com) => {
      this.customRenderFn(com);
    });
  }
  customRenderFn(com) {
    const vm = new Vue({
      el: `#${com.id}`,
      ...this.componentLoadData[com.name],
    });
  }
  simulationLocalData() {
    return new Promise((resolve, reject) => {
      fetch("http://192.168.46.40:8889/getPageData")
        .then(function (response) {
          return response.json();
        })
        .then(function (myJson) {
          window[PAGE_DATA_CONFIG] = myJson.data;
          resolve(myJson.data);
        });
    });
  }
}

export default Engine;
