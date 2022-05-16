import { createRouter, createWebHistory } from "vue-router";
import homePage from "../views/homePage.vue";
import loginPage from "../views/loginPage.vue";
import employeeApp from "../components/employee/employeeApp.vue";
import mainnApp from "../components/mainnApp.vue";
import storeApp from "../components/storeApp.vue";
import storeMoney from "../components/storeMoney.vue";
import damageApp from "../components/damageApp.vue";
import shortfallsApp from "../components/shortfallsApp.vue";
import profileApp from "../components/profileApp.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: homePage,
    children: [
      { path: "", name: "mainnApp", component: mainnApp },
      { path: "0", component: storeApp, props: true },
      { path: "1", component: storeMoney, props: true },
      { path: "2", component: damageApp, props: true },
      { path: "3", component: shortfallsApp },
      { path: "4", component: employeeApp },
      { path: "5", component: employeeApp },
      { path: "6", component: employeeApp },
      { path: "7", component: employeeApp },
      {
        path: "profile",
        name: "profileApp",
        component: profileApp,
        props: true,
      },
    ],
  },
  {
    path: "/login",
    name: "loginPage",
    component: loginPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
