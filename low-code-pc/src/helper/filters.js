import Vue from "vue";
import Config from "@/config";
Vue.filter("fixUrl", function (value) {
  if (!value) return "";
  return `${Config.baseUrl}${value}`;
});
