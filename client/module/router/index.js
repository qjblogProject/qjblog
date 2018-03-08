import Vue from 'vue'
import Router from 'vue-router'

import homeConfig from '../home/routerConfig';
import loginConfig from '../login/routerConfig';
import registerConfig from '../register/routerConfig';
import articleDetailConfig from '../articleDetail/routerConfig';
import personalCenterConfig from '../personalCenter/routerConfig';

Vue.use(Router)


var routes = []
.concat(homeConfig)
.concat(loginConfig)
.concat(registerConfig)
.concat(articleDetailConfig)
.concat(personalCenterConfig)

export default new Router({
  mode: 'history',
  routes: routes
})
