import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import HomeView from "./components/HomeView.vue";

loadFonts();

const router = createRouter({
  history: createWebHashHistory(),
  routes: [{ path: "/", component: HomeView }],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition;
    return { el: to.hash, top: 0, behavior: "smooth" };
  },
});

createApp(App).use(router).use(vuetify).mount("#app");
