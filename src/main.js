import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// import "@/router/navGuard";
import store from "./store";
import SvgIcon from "@/svg-icon";


Vue.use(SvgIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
