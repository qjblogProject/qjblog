
import Vue from 'vue'
import Vuex from 'vuex'
import { baseModule } from 'src/baseStore'
import { homeModule } from '../home/storeConfig'
import { articleModule } from '../personalCenter/storeConfig'
Vue.use(Vuex)

const Store = new Vuex.Store({
    state:{

    },
    modules:{
        base:baseModule,
        home:homeModule,
        article:articleModule
    }
})

export default Store
