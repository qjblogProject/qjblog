import * as actions from './actions'
import * as mutations from './mutations'
import * as getters from './getters'

export const baseModule = {
    namespaced: true,
    state:{
        winHeight:400,
        userInfo:{
        	name:''
        }
    },
    actions,
    mutations,
    getters
}
