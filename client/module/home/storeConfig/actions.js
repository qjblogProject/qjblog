import Vue from 'vue'

export const getTableList = ({commit,state})=>{
    let postData = state.filterContent;
    return Vue.$http({
        url:'/home/ajax-get-article-list',
        method:'post',
        data:postData
    }).then((res)=>{
        let data = res.data;
        commit('setTableList',data.data)
        
        return res
    })
}