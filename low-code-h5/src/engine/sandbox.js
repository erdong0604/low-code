import Vue from "vue";
import Sandbox from "@/Sandbox";
import router from "@/router";
import store from "@/store";

export default (components, componentsData) => {
  console.log(components);
  store.commit("RESET_CURRENT_COMPONENT_ITEMS");
  const _names = components.map((item) => item.name);
  _names.forEach((com) => {
    Vue.component(com, componentsData[com]);
  });
  store.commit("SET_CURRENT_COMPONENT_ITEMS", components);
  new Vue({
    router,
    store,
    render: (h) => h(Sandbox),
  }).$mount("#app");
};
