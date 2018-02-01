
import Vue from 'vue'
import Vuex from 'vuex'

import { homeModule } from '../home/storeConfig'
Vue.use(Vuex)

const Store = new Vuex.Store({
    state:{

    },
    modules:{
        home:homeModule
    }
})

export default Store
