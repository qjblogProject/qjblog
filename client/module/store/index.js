
import Vue from 'vue'
import Vuex from 'vuex'
import { baseModule } from 'src/baseStore'
import { homeModule } from '../home/storeConfig'
Vue.use(Vuex)

const Store = new Vuex.Store({
    state:{

    },
    modules:{
        base:baseModule,
        home:homeModule,
    }
})

export default Store
