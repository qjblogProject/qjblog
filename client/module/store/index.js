
import Vue from 'vue'
import Vuex from 'vuex'
import { baseModule } from 'src/baseStore'
import { homeModule } from '../home/storeConfig'
import { settingModule } from '../setting/storeConfig'
import { articleModule } from '../personalCenter/storeConfig'
Vue.use(Vuex)

const Store = new Vuex.Store({
    state:{

    },
    modules:{
        base:baseModule,
        home:homeModule,
        setting:settingModule,
        article:articleModule
    }
})

export default Store
