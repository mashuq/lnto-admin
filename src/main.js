import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueD3Network from "vue-d3-network";

Vue.config.productionTip = false;
Vue.use(VueD3Network);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
