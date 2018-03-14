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
        commit('setTotalCount',data.count)
        return data
    })
}
//获取右侧时间数据
export const getDateList = ({commit})=>{
    return Vue.$http({
        url:'/home/ajax-get-dateMonth-list',
        method:'post'
    }).then((res)=>{
        let data = res.data;
        commit('setDateList',data.data)
        return data
    })
}
//获取标签
export const getTagList = ({commit})=>{
    return Vue.$http({
        url:'/set/ajax-get-tag-list',
        method:'post'
    }).then((res)=>{
        let data = res.data;
        commit('setTagList',data.data)
        return data
    })
}

export const updateFilterContent = ({commit,dispatch},filter)=>{
    //更新filterContent
    commit('updateFilterContent',filter)
    //重新请求数据
    dispatch('getTableList')
}

export const clearFilter = ({commit,dispatch})=>{
    //更新filterContent
    commit('clearFilterContent')
    //重新请求数据
    dispatch('getTableList')
}