import * as actions from './actions'
import * as mutations from './mutations'
import * as getters from './getters'

export const settingModule = {
    namespaced: true,
    state:{
        tagList:[]
    },
    actions,
    mutations,
    getters
}
