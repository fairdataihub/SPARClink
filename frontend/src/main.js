import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import "./index.css";

import SparcLink from "./components/SparcLink/SparcLink.vue";

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior: function (to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    } else {
      window.scrollTo(0, 0);
    }
  },
  routes: [{ path: "/", name: "root", component: SparcLink }],
});

const app = createApp(App);

app.use(router);

app.mount("#app");
