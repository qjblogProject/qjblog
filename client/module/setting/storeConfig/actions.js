import Vue from 'vue'

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