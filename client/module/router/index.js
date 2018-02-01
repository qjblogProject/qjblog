import Vue from 'vue'
import Router from 'vue-router'

import homeConfig from '../home/routerConfig';

Vue.use(Router)


var routes = []
.concat(homeConfig)

export default new Router({
  mode: 'history',
  routes: routes
})
