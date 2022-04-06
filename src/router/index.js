import { createRouter, createWebHistory } from "vue-router";
import homePage from "../views/homePage.vue";
import loginPage from "../views/loginPage.vue";
const routes = [
  {
    path: "/home",
    name: "home",
    component: homePage,
  },
  {
    path: "/",
    name: "/loginPage",
    component: loginPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  
});

export default router;
