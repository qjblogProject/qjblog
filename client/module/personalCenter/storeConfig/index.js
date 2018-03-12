import * as actions from './actions'
import * as mutations from './mutations'
import * as getters from './getters'

export const articleModule = {
    namespaced: true,
    state:{
        articleData:{
            articleId:'',
            draftId:'',
        }
    },
    actions,
    mutations,
    getters
}
