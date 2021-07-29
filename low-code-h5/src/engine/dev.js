import Vue from "vue";
import Dev from "@/Dev";
import router from "@/router";
import store from "@/store";
const VUE_APP_DEV_COM = process.env.VUE_APP_DEV_COM;
const requireAllComs = require.context("./../components", true, /.index.js$/);
requireAllComs.keys().forEach((item) => {
  try {
    Vue.component(
      requireAllComs(item).default.name,
      requireAllComs(item).default
    );
    if (VUE_APP_DEV_COM === "ALL") {
      store.commit(
        "SET_CURRENT_COMPONENT_ITEMS",
        requireAllComs(item).default.name
      );
    }
  } catch (e) {
    console.log(e);
  }
});
if (VUE_APP_DEV_COM !== "ALL") {
  store.commit("SET_CURRENT_COMPONENT_ITEMS", VUE_APP_DEV_COM);
}
export default () => {
  new Vue({
    router,
    store,
    render: (h) => h(Dev),
  }).$mount("#app");
};
