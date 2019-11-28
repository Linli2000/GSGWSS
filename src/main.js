import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueLazyload from 'vue-lazyload'  //引入这个懒加载

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);


Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: require('../src/assets/img/default.jpg'),
  loading: require('../src/assets/img/default.png'),
  attempt: 2
})

import "./assets/css/normalize.css";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
import 'babel-polyfill'

import Es6Promise from 'es6-promise'

require('es6-promise').polyfill()

Es6Promise.polyfill()

