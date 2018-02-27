import Vue from 'vue'
import Router from 'vue-router'

import homeConfig from '../home/routerConfig';
import loginConfig from '../login/routerConfig';
import registerConfig from '../register/routerConfig';

Vue.use(Router)


var routes = []
.concat(homeConfig)
.concat(loginConfig)
.concat(registerConfig)

export default new Router({
  mode: 'history',
  routes: routes
})
