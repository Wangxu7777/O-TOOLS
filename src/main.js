import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/css/global.css";
// 引入axios并配置
import axios from "./http";
Vue.prototype.$http = axios;
//ui
import Vant from "vant";
import "vant/lib/index.css";
Vue.use(Vant);
//rem
import "./rem";
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
