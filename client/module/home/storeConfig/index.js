import * as actions from './actions'
import * as mutations from './mutations'
import * as getters from './getters'

export const homeModule = {
    namespaced: true,
    state:{
        tableList:[],
        dateList:[],
        filterContent:{
            keywords:'',
            tags:[],
            publishTime:''
        }
    },
    actions,
    mutations,
    getters
}
