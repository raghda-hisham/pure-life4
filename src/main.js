import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./scss/globalStyle.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/sidebar.scss";

createApp(App).use(store).use(router).mount("#app");

// Register the component globally
// Vue.component('font-awesome-icon', FontAwesomeIcon)
