// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios';
import '../src/assets/scss/base.scss'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '../src/assets/scss/el.scss'

Vue.use(ElementUi)

Vue.http = axios;
Vue.prototype.$http = axios;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
