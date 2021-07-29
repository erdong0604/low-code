import Vue from "vue";
import VueRouter from "vue-router";
import PageLayout from "@com/layout";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: PageLayout,
  },
  {
    path: "/com",
    name: "Com",
    component: () => import("@/views/com-manage"),
  },
  {
    path: "/test",
    name: "test",
    component: () => import("@/test"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
