import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    devComponentItems: [], //当前需要展示的组件
  },
  mutations: {
    // 添加要显示的组件
    SET_CURRENT_COMPONENT_ITEMS(state, comObject) {
      state.devComponentItems = state.devComponentItems.concat(comObject);
    },
    RESET_CURRENT_COMPONENT_ITEMS(state) {
      state.devComponentItems = [];
    },
  },
  actions: {},
  modules: {},
});
