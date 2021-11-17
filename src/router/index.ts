import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import homeVue from "../views/home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: homeVue,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
